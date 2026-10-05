import React from "react";

function Footer({
  brand = "My App",
  links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 m-5 p-6 rounded-2xl">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <span className="text-xl font-medium mb-0.5">{brand}</span>

        <nav className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className="text-gray-400 hover:text-sky-500 focus-visible:text-sky-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600 md:text-left">
        © {year} {brand}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
