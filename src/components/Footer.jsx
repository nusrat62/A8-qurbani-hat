import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24">

      {/* top divider */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-green-500/5 via-transparent to-emerald-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="QurbaniHat logo"
                width={80}
                height={80}
                className="rounded-full border border-green-500 shadow-sm"
              />

              <h2 className="text-2xl font-extrabold">
                <span className="text-green-600">Qurbani</span>
                Hat
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Trusted livestock marketplace for Qurbani animals.
              Find healthy cows, goats and sheep directly from farmers.
            </p>

          </div>

          {/* MARKETPLACE */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">
              Marketplace
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

              <li>
                <Link href="/animals" className="hover:text-green-600 transition">
                  All Animals
                </Link>
              </li>

              <li>
                <Link href="/animals" className="hover:text-green-600 transition">
                  Cows Collection
                </Link>
              </li>

              <li>
                <Link href="/animals" className="hover:text-green-600 transition">
                  Goats Collection
                </Link>
              </li>

            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

              <li>
                <Link href="/about" className="hover:text-green-600 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-green-600 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/my-profile" className="hover:text-green-600 transition">
                  My Profile
                </Link>
              </li>

            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">

            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Book Qurbani Animal
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Choose verified livestock easily and book for Qurbani in few clicks.
            </p>

            <Link
              href="/animals"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full 
              bg-green-600 text-white text-sm font-medium 
              hover:bg-green-700 transition shadow-md"
            >
              Browse Now
            </Link>

          </div>

        </div>

        {/* bottom line */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">

          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/animals" className="hover:text-green-600 transition">
              Marketplace
            </Link>

            <Link href="/contact" className="hover:text-green-600 transition">
              Support
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;