export default function Footer() {
  return (
    <footer className="bg-gray-900  border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Brand & Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()} Phung Khanh. All rights reserved.
            </p>
            <p className="text-sm">
              Designed & Built with Next.js and Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://www.facebook.com/im.hnahk/"
              className="hover:text-white transition"
            >
              Facebook
            </a>
            <a
              href="https://github.com/punhnahk"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
