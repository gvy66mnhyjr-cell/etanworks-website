import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Navigation Links */}

        {/* Quote Button */}
      </div>
    </nav>
  );
}