import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Welcome</h1>
      <Link href={`/weregamingfolks`}>Start</Link>
    </main>
  );
}
