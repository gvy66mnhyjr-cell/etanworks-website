import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 pt-24">
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-5xl font-bold">
            Welcome to Etanworks
          </h1>
        </section>
      </main>
    </>
  );
}