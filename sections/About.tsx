import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* Left */}

        <div>

          <p className="font-semibold uppercase tracking-widest text-yellow-500">
            About Etanworks
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Engineering Solutions Built on Trust.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Etanworks Limited is a Kenyan engineering and construction company
            delivering dependable earthmoving, excavation, civil works,
            structural solutions and construction support services.

            Our commitment to safety, quality workmanship and timely delivery
            enables us to complete every project to the highest standards.
          </p>

          <div className="mt-10 grid gap-5">

            <Feature text="Safety First" />

            <Feature text="Experienced Professionals" />

            <Feature text="Modern Equipment" />

            <Feature text="Timely Project Delivery" />

          </div>

        </div>

        {/* Right */}

        <div className="relative h-[550px] overflow-hidden rounded-2xl shadow-xl">

          <Image
            src="/images/about/about.jpeg"
            alt="Etanworks Project"
            fill
            className="object-cover"
          />

        </div>

      </div>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black font-bold">
        ✓
      </div>

      <span className="text-lg font-medium text-gray-700">
        {text}
      </span>

    </div>
  );
}