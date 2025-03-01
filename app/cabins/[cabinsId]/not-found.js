import { getCabin } from "@/app/_lib/data-service";
import Link from "next/link";

async function NotFound({ params }) {
  //   const cabin = await getCabin(params);
  //   console.log(cabin);

  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">Cabin doesn&apos;t exist :(</h1>
      <Link
        href="/cabins"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Check all cabins
      </Link>
    </main>
  );
}

export default NotFound;
