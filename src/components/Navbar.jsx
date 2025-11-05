import { useState } from 'react';
import { Menu, X, Home, Newspaper, FolderOpen, ClipboardList, Shield, Images, Database } from 'lucide-react';

const navItems = [
  { label: 'Profil', href: '#profil', icon: Home },
  { label: 'Berita', href: '#berita', icon: Newspaper },
  { label: 'Program', href: '#program', icon: FolderOpen },
  { label: 'Pelayanan', href: '#pelayanan', icon: ClipboardList },
  { label: 'PPID', href: '#ppid', icon: Shield },
  { label: 'Galeri', href: '#galeri', icon: Images },
  { label: 'Data', href: '#data', icon: Database },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500 grid place-items-center text-white font-bold">
              GK
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-emerald-800">Kecamatan Gunung Kaler</p>
              <p className="text-xs text-emerald-600">Kabupaten Tangerang</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-2 rounded-md text-sm font-medium text-emerald-800 hover:text-emerald-900 hover:bg-emerald-50"
              >
                {label}
              </a>
            ))}
            <a
              href="#ppid"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium shadow hover:bg-emerald-700"
            >
              Ajukan PPID
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-emerald-800 hover:bg-emerald-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-emerald-800 hover:bg-emerald-50"
              >
                <Icon className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
            <a
              href="#ppid"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium shadow hover:bg-emerald-700"
            >
              Ajukan PPID
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
