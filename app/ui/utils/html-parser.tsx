'use client';

import parse, { DOMNode, domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

function CodeBlock({ children }: { children: React.ReactNode }) {
  return <pre className="rounded bg-neutral-300 text-neutral-700 p-4 overflow-x-auto text-sm m-2">{children}</pre>;
}

const options: HTMLReactParserOptions = {
  replace: (node) => {
    if (node.type === 'tag') {
      const el = node as Element;
      const content = domToReact(el.children as DOMNode[], options);

      switch (el.name) {
        case 'blockquote':
          return <blockquote className="border-l-4 pl-4 italic text-neutral-700 mb-1">{content}</blockquote>;
        case 'pre':
          return <CodeBlock>{content}</CodeBlock>;
        case 'ol':
          return <ol className="list-decimal pl-6">{content}</ol>;
        case 'ul':
          return <ul className="list-disc pl-6">{content}</ul>;
        case 'li':
          return <li className="mb-1">{content}</li>;
        case 'p':
          return <p className="pb-2 text-lg">{content}</p>;
      }
    }
    return undefined;
  },
};

export default function RichHtml({ html }: { html: string }) {
  const safe = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  return <div className="max-w-none">{parse(safe, options)}</div>;
}
