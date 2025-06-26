import Link from 'next/link';

export const LinkWrappedTableCell = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <td>
    <Link href={href} rel="noopener noreferrer" target="_blank" className="block w-full h-full">
      {children}
    </Link>
  </td>
);
