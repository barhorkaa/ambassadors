import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BackNavigation({ href, tooltip }: { href: string; tooltip: string }) {
  return (
    <Link href={href}>
      <ArrowLeftIcon title={tooltip} className="h-5" />
    </Link>
  );
}
