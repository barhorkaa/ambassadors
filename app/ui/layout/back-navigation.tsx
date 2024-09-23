import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface BackNavigationProps {
  href: string;
  tooltip: string;
}

export default function BackNavigation({ href, tooltip }: BackNavigationProps) {
  return (
    <Link href={href}>
      <ArrowLeftIcon title={tooltip} className="h-5" />
    </Link>
  );
}
