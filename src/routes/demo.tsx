import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo")({
  component: TanStackDemo,
});

function TanStackDemo() {

  return (
    <div className="flex h-fit flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="mb-8 text-4xl font-extrabold text-blue-400">
        TanStack Router & Query Demo
      </h1>
      <p className="mb-4 text-lg text-gray-300">
        This page demonstrates the power of TanStack Router and Query.
      </p>
      <div className="mb-8">
        <Link
          to="/"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
      <h2 className="mb-4 text-2xl font-bold text-blue-400">Posts:</h2>
      <ul className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3 lg:px-8 xl:grid-cols-4 xl:px-16 2xl:grid-cols-4 2xl:gap-8 2xl:px-36">
        {Array.from({ length: 10 }).map((_, index) => (
          <li
            key={index}
            className="mb-2 rounded-md bg-gray-800 p-4 shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-300">
              {index}
            </h3>
            <p className="text-gray-300">{index}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
