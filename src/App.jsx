import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">{title}</h2>
          {subtitle && <p className="text-emerald-700 mt-2">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      <Hero />
      <Services />

      <Section
        id="profil"
        title="Profil OPD"
        subtitle="Struktur organisasi, pejabat, tugas & fungsi"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-100 p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Struktur Organisasi</h3>
            <p className="text-sm text-emerald-700 mt-2">
              Gambaran hierarki organisasi kecamatan serta unit kerja terkait.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-100 p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Tugas & Fungsi</h3>
            <p className="text-sm text-emerald-700 mt-2">
              Rincian peran Sekretariat, Kasi Ekbang, Kasi Kemasyarakatan, dan lainnya.
            </p>
          </div>
        </div>
      </Section>

      <Section id="berita" title="Berita" subtitle="Informasi dan kabar terbaru dari Kecamatan Gunung Kaler">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-xl overflow-hidden border border-emerald-100 bg-white hover:shadow-md">
              <div className="h-36 bg-gradient-to-br from-emerald-200 to-lime-200" />
              <div className="p-4">
                <h3 className="font-semibold">Judul Berita {i}</h3>
                <p className="text-sm text-emerald-700 mt-1">Cuplikan singkat berita untuk tampilan awal.</p>
                <a href="#" className="mt-3 inline-block text-sm font-medium text-emerald-700">Baca selengkapnya →</a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="program" title="Program & Agenda" subtitle="Kegiatan terjadwal dan program strategis">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title: 'Program SKPD', desc: 'Inisiatif lintas bidang untuk pembangunan daerah.'},
            {title: 'Agenda Bulanan', desc: 'Agenda pelayanan dan kegiatan masyarakat.'},
            {title: 'Musrenbang', desc: 'Partisipasi perencanaan pembangunan.'},
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-emerald-100 p-6 bg-white shadow-sm">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-emerald-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ppid" title="PPID" subtitle="Ajukan dan lacak permohonan informasi publik">
        <div className="grid md:grid-cols-2 gap-6">
          <form className="rounded-xl border border-emerald-100 p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Ajukan Permohonan</h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <input className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Nama Lengkap" />
              <input className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email" type="email" />
              <input className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:col-span-2" placeholder="Judul Permohonan" />
              <textarea className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:col-span-2" rows="4" placeholder="Rincian informasi yang diminta" />
            </div>
            <button type="button" className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700">Kirim</button>
          </form>

          <div className="rounded-xl border border-emerald-100 p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Lacak Permohonan</h3>
            <p className="text-sm text-emerald-700 mt-2">Masukkan kode pelacakan untuk melihat status.</p>
            <div className="flex gap-2 mt-4">
              <input className="flex-1 rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Kode Tracking" />
              <button className="px-4 py-2 rounded-md border border-emerald-200 font-medium text-emerald-800 hover:bg-emerald-50">Cek</button>
            </div>
            <div className="mt-4 text-sm text-emerald-700">
              <p>Status: —</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="galeri" title="Galeri" subtitle="Kumpulan foto dan video kegiatan kecamatan">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-emerald-100 to-lime-100" />
          ))}
        </div>
      </Section>

      <Section id="data" title="Data & Peta" subtitle="Statistik singkat dan peta wilayah">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-100 p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Data Statistik</h3>
            <p className="text-sm text-emerald-700 mt-2">Tampilan ringkas data dalam format grafik/tabel.</p>
            <div className="mt-4 h-40 rounded-md bg-gradient-to-r from-emerald-200 to-lime-200" />
          </div>
          <div className="rounded-xl border border-emerald-100 p-6 bg-white shadow-sm">
            <h3 className="font-semibold">Peta Wilayah</h3>
            <div className="mt-4 aspect-video rounded-md bg-gradient-to-br from-lime-100 to-emerald-100" />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
