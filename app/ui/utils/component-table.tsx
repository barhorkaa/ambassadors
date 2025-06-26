import Link from 'next/link';

export const LinkWrappedTableCell = ({ link, content }: { link: string; content: string | number }) => (
  <td>
    <Link href={link} rel="noopener noreferrer" target="_blank" className="block w-full h-full">
      {content}
    </Link>
  </td>
);
