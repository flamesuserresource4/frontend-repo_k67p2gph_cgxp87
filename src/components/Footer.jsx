export default function Footer() {
  return (
    <footer className="mt-16 border-t border-emerald-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500 grid place-items-center text-white font-bold">
                GK
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-emerald-800">Kecamatan Gunung Kaler</p>
                <p className="text-xs text-emerald-600">Kabupaten Tangerang</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-emerald-700 max-w-sm">
              Portal layanan dan informasi resmi dengan komitmen transparansi dan kualitas layanan publik.
            </p>
          </div>

          <div className="text-sm text-emerald-700">
            <p className="font-semibold text-emerald-900">Kontak</p>
            <p className="mt-2">Jl. Raya Gunung Kaler, Kabupaten Tangerang</p>
            <p className="mt-1">Email: kecgunungkaler@tangerangkab.go.id</p>
            <p className="mt-1">Telepon: (021) 000-000</p>
          </div>

          <div className="text-sm text-emerald-700">
            <p className="font-semibold text-emerald-900">Tautan Cepat</p>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-emerald-900" href="#ppid">PPID</a></li>
              <li><a className="hover:text-emerald-900" href="#pelayanan">Pelayanan</a></li>
              <li><a className="hover:text-emerald-900" href="#program">Program</a></li>
              <li><a className="hover:text-emerald-900" href="#berita">Berita</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-emerald-100 text-xs text-emerald-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Kecamatan Gunung Kaler. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
