export default function SearchForm({ query }: { query: string }) {
  return (
    <form className="flex justify-center items-center w-full gap-2">
      <input
        type="search"
        name="q"
        // value={query}
        defaultValue={query}
        placeholder="search by product name"
        className="flex-grow w-full shadow-md placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block sm:text-lg border-1 border-gray-100 rounded-md p-3"
      />
      <button
        type="submit"
        className="inline-flex items-center mt-1 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 px-10"
      >
        Search
      </button>
    </form>
  );
}
