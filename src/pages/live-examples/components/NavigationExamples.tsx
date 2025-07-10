import Link from "next/link";

export default function NavigationExamples() {
  const examples = [
    {
      courseModule: 100,
      title: "Getting Started with PPBL 2025",
    },
    {
      courseModule: 201,
      title: "Building Transactions with Mesh",
    },
    {
      courseModule: 202,
      title: "Minting Tokens in an Application",
    },
    {
      courseModule: 203,
      title: "Minting NFTs in an Application",
    },
    {
      courseModule: 204,
      title: "Introduction to Blockchain Queries",
    },
  ];
  return (
    <div className="mx-auto mb-[250px] mt-24 grid w-full grid-cols-1 gap-5 border-t border-white pt-12 md:w-2/3 md:grid-cols-2">
      {examples.map((example, i) => (
        <div
          key={i}
          className="cursor-pointer rounded border border-white p-5 hover:opacity-90"
        >
          <p className="text-xl font-bold">{example.title}</p>
          <p>Live Example for Module {example.courseModule}</p>
          <p className="pt-5 text-amber-500 hover:text-amber-300">
            <Link
              href={
                example.courseModule == 100
                  ? "/live-examples"
                  : `/live-examples/${example.courseModule}`
              }
            >
              View Example
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
}
