import Link from "next/link";
import site from "../utils/site";

export default function Header() {
  return (
    <header className="p-5 bg-blue-500 text-white mb-5 flex">
      <Link href="/" className="flex-shrink font-bold">
        <h1 className="text-2xl md:text-3xl">{site.title}</h1>
      </Link>
    </header>
  );
}
