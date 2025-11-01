import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href="/" className={'outline-0'}>
      <Image
        src="/common/logo.svg"
        alt="Devzilla company logotype"
        width={112}
        height={32}
        priority
      />
    </Link>
  );
};
