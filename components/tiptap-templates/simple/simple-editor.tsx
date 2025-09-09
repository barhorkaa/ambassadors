'use client';

import { EditorContent, EditorContext, useEditor } from '@tiptap/react';
import * as React from 'react';

// --- Tiptap Core Extensions ---
import { TextAlign } from '@tiptap/extension-text-align';
import { Typography } from '@tiptap/extension-typography';
import { Placeholder, Selection } from '@tiptap/extensions';
import { StarterKit } from '@tiptap/starter-kit';

// --- UI Primitives ---
import { Toolbar, ToolbarGroup, ToolbarSeparator } from '@/components/tiptap-ui-primitive/toolbar';

// --- Tiptap Node ---
import '@/components/tiptap-node/blockquote-node/blockquote-node.scss';
import '@/components/tiptap-node/code-block-node/code-block-node.scss';
import '@/components/tiptap-node/heading-node/heading-node.scss';
import { HorizontalRule } from '@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension';
import '@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss';
import '@/components/tiptap-node/list-node/list-node.scss';
import '@/components/tiptap-node/paragraph-node/paragraph-node.scss';

// --- Tiptap UI ---
import { BlockquoteButton } from '@/components/tiptap-ui/blockquote-button';
import { CodeBlockButton } from '@/components/tiptap-ui/code-block-button';
import { HeadingDropdownMenu } from '@/components/tiptap-ui/heading-dropdown-menu';
import { LinkButton, LinkPopover } from '@/components/tiptap-ui/link-popover';
import { ListDropdownMenu } from '@/components/tiptap-ui/list-dropdown-menu';
import { MarkButton } from '@/components/tiptap-ui/mark-button';
import { TextAlignButton } from '@/components/tiptap-ui/text-align-button';
import { UndoRedoButton } from '@/components/tiptap-ui/undo-redo-button';

// --- Hooks ---
import { useIsMobile } from '@/hooks/use-mobile';

// --- Styles ---
import '@/components/tiptap-templates/simple/simple-editor.scss';

const MainToolbarContent = ({ onLinkClick, isMobile }: { onLinkClick: () => void; isMobile: boolean }) => {
  return (
    <>
      <ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
        <ListDropdownMenu types={['bulletList', 'orderedList']} portal={isMobile} />
        <BlockquoteButton />
        <CodeBlockButton />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
      </ToolbarGroup>
    </>
  );
};

export function SimpleEditor({
  name = 'content',
  initialContent = '',
  placeholder,
  required = false,
}: {
  name?: string;
  initialContent?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const [content, setContent] = React.useState(initialContent);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const isMobile = useIsMobile();
  const [mobileView, setMobileView] = React.useState<'main' | 'link'>('main');
  const toolbarRef = React.useRef<HTMLDivElement>(null);

  const editor = useEditor({
    content: initialContent,
    onUpdate: ({ editor }) => {
      const html = editor.isEmpty ? '' : editor.getHTML();
      setContent(html);
    },
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    editorProps: {
      attributes: {
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        'aria-label': 'Main content area, start typing to enter text.',
        class: 'simple-editor',
      },
    },
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      Placeholder.configure({
        placeholder: placeholder,
      }),
      HorizontalRule,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Typography,
      Selection,
    ],
  });

  React.useEffect(() => {
    if (!isMobile && mobileView !== 'main') {
      setMobileView('main');
    }
  }, [isMobile, mobileView]);

  return (
    <div className="simple-editor-wrapper w-100%">
      <EditorContext.Provider value={{ editor }}>
        <Toolbar ref={toolbarRef}>
          <MainToolbarContent onLinkClick={() => setMobileView('link')} isMobile={isMobile} />
        </Toolbar>
        <EditorContent editor={editor} role="presentation" className="simple-editor-content" />
        <input type="hidden" name={name} ref={inputRef} value={content} required={required} />
      </EditorContext.Provider>
    </div>
  );
}
