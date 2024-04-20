import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={50}
        height={50}
        className="w-8 h-8"
      />
      <span className="font-bold text-black text-4xl">Furniro</span>
    </Link>
  );
};
