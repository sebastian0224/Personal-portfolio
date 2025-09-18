import Link from "next/link";

const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <ul
        className="flex items-center gap-6 px-6 py-2 rounded-full 
        bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-white/10
        text-sm font-medium text-gray-200"
      >
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="hover:text-green-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
