import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo/logo.svg"
        alt="Etanworks Logo"
        width={42}
        height={42}
        priority
      />

      <span className="text-2xl font-bold text-yellow-400">
        ETANWORKS
      </span>
    </div>
  );
}