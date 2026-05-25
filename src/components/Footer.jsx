import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="relative mt-24 bg-[#064e3b] text-yellow-200">

      {/* soft glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-black/20 via-transparent to-yellow-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="QurbaniHat logo"
                width={70}
                height={70}
                className="rounded-full border border-yellow-300 shadow-md"
              />

              <h2 className="text-2xl font-extrabold text-yellow-200">
                <span className="text-yellow-400">Qurbani</span>Hat
              </h2>
            </div>

            <p className="text-sm text-yellow-100/80 leading-relaxed">
              Trusted livestock marketplace for Qurbani animals.
              Find healthy cows, goats and sheep directly from farmers.
            </p>

          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-yellow-300">
              Contact Us
            </h3>

            <p className="text-sm text-yellow-100/80 leading-relaxed">
              Email: support@qurbanihat.com <br />
              Phone: +880 1XXXXXXXXX <br />
              Dharmanagar, Bangladesh
            </p>
          </div>

         {/* FOLLOW US */}
<div>
  <h3 className="text-sm font-bold mb-4 text-yellow-300">
    Follow Us
  </h3>

  <div className="flex gap-4">

    {/* Facebook */}
    <a href="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small_2x/facebook-logo-facebook-icon-transparent-free-png.png" target="_blank">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small_2x/facebook-logo-facebook-icon-transparent-free-png.png" className="w-9 h-9 hover:scale-110 transition" />  
    </a>

    {/* Instagram */}
    <a href="https://img.magnific.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_hybrid&w=740&q=80" target="_blank">
      <img src="https://img.magnific.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_hybrid&w=740&q=80" className="w-9 h-9 hover:scale-110 transition" />
    </a>

    {/* YouTube */}
    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCE8Ofe3duyxd5_LVklR-R-vql2jCiX_LtUw&s" target="_blank">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCE8Ofe3duyxd5_LVklR-R-vql2jCiX_LtUw&s" className="w-9 h-9 hover:scale-110 transition" />
    </a>

    {/* WhatsApp */}
    <a href="https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584844.jpg" target="_blank">
      <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584844.jpg" className="w-9 h-9 hover:scale-110 transition" />
    </a>

  </div>
</div>

        </div>

        {/* divider */}
        <div className="mt-12 h-px w-full bg-yellow-400/20" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-yellow-100/70">

          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>

          <p className="text-yellow-300">
            Made with ❤️ for farmers & buyers
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;