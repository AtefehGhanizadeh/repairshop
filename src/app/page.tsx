import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-home-img bg-cover bg-center">
      <main className="mx-auto flex flex-col justify-center items-center max-w-5xl h-dvh">
        <div className="flex flex-col bg-slate-800/30 text-white  justify-center gap-6 p-12 rounded-xl w-4/5 items-center sm:max-w-96 sm:text-2xl">
          <h1 className="text-center text-4xl font-bold">
            Dan&apos;s Computer <br /> Repair Shop
          </h1>
          <address className="text-center">
            555 Gateway Lane <br /> Kansas City, KS 55555
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href="tel:5555555555">555-555-5555</Link>
        </div>
      </main>
    </div>
  );
}
