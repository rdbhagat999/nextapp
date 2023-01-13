import site from "../utils/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-200 bg-gray-100 h-32 mt-5 flex flex-col gap-4 justify-center">
      <div className="mx-auto max-w-screen-lg flex items-center justify-center gap-8">
        <a
          href={site.viewSourceUrl}
          className="text-gray-600 hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          Source
        </a>
      </div>
      <div className="text-gray-600 text-center">
        <span>
          &copy; {new Date().getFullYear()} {site.copyrightName}
        </span>
      </div>
    </footer>
  );
}
