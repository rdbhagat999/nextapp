import Link from "next/link";
import Image from "next/image";
import site from "../utils/site";

export default function Header() {
  return (
    <header className="p-5 bg-blue-500 text-white mb-5 flex">
      <Link href="/" className="flex-grow font-bold">
        <h1 className="text-2xl md:text-4xl">{site.title}</h1>
      </Link>
      <a href="https://nextjs.org/">
        <Image
          width="140"
          height="50"
          src="/nextjs.svg"
          alt="Made with Nextjs"
        />
      </a>
    </header>
  );
}
