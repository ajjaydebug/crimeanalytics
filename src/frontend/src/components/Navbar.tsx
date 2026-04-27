import { Menu, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Model", href: "#model" },
  { label: "Architecture", href: "#architecture" },
  { label: "Sentinel View", href: "#sentinel" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-glass border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            data-ocid="navbar.logo"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-smooth">
              <Shield className="w-4 h-4 text-gold" />
            </div>
            <span className="font-display font-bold text-lg text-white">
              Crime<span className="text-gold">Analytics</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <button
                  type="button"
                  key={link.label}
                  data-ocid={`navbar.link.${id}`}
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    active === id
                      ? "text-gold bg-gold/10 border border-gold/25"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            data-ocid="navbar.mobile_toggle"
            className="md:hidden p-2 rounded-lg glass text-white/70 hover:text-white transition-smooth"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-white/10 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              data-ocid={`navbar.mobile.link.${link.href.slice(1)}`}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/5 transition-smooth"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
