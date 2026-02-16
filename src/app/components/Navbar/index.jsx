import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-navbar-bg text-navbar-text border-b border-navbar-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto p-4">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

          {/* Judul */}
          <Link
            href="/"
            className="font-bold text-2xl text-navbar-accent"
          >
            FISHANIME
          </Link>

          {/* Search */}
          <div className="w-full md:w-80">
            <InputSearch />
          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
