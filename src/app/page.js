import Link from "next/link";

export default function Home() {
  return (
    <section
      className={
        "w-full h-[80vh] bg-gray-700 flex justify-center items-center flex-col gap-4"
      }
    >
      <h1 className={"text-emerald-500 text-4xl font-bold"}>
        Welcome to Vysus
      </h1>
      <Link href="/planner">
        <button className={"p-2 bg-emerald-500 rounded text-white mt-3"}>
          Go to Planner
        </button>
      </Link>
    </section>
  );
}
