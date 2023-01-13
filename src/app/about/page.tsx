import Link from "next/link";

export default function About() {
  return (
    <main className="text-center mx-auto text-gray-700 p-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 mt-5 gap-2">
        <h1 className="text-center font-semibold text-4xl">About page</h1>
        <p className="text-center">This is the about page.</p>
        <Link
          className="text-center font-semibold text-blue-500 text-2xl"
          href="/"
        >
          Goto Home
        </Link>
      </div>
    </main>
  );
}
