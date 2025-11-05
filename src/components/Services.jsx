import { motion } from 'framer-motion';
import { Home, FileText, Calendar, Shield, Star, FileSearch, Users, Map } from 'lucide-react';

const items = [
  {
    icon: Home,
    title: 'Profil OPD',
    desc: 'Struktur organisasi, pejabat, tugas & fungsi secara lengkap.',
    href: '#profil',
  },
  {
    icon: FileText,
    title: 'Berita & Informasi',
    desc: 'Rilis resmi, regulasi, dokumen publik, dan pengumuman.',
    href: '#berita',
  },
  {
    icon: Calendar,
    title: 'Program & Agenda',
    desc: 'Jadwal kegiatan, program SKPD, dan agenda penting warga.',
    href: '#program',
  },
  {
    icon: Shield,
    title: 'PPID',
    desc: 'Ajukan permohonan informasi dan lacak statusnya secara daring.',
    href: '#ppid',
  },
  {
    icon: Star,
    title: 'Rating Layanan',
    desc: 'Berikan penilaian untuk peningkatan kualitas layanan publik.',
    href: '#layanan',
  },
  {
    icon: FileSearch,
    title: 'Cek Bantuan',
    desc: 'Pantau status bantuan sosial dan program pemerintah.',
    href: '#pelayanan',
  },
  {
    icon: Users,
    title: 'Sobat Dukcapil',
    desc: 'Layanan administrasi kependudukan dan pencatatan sipil.',
    href: '#pelayanan',
  },
  {
    icon: Map,
    title: 'Data & Peta',
    desc: 'Statistik daerah, data spasial, dan peta tematik wilayah.',
    href: '#data',
  },
];

export default function Services() {
  return (
    <section id="pelayanan" className="py-16 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">Layanan dan Informasi</h2>
            <p className="text-emerald-700 mt-2">Akses cepat ke menu-menu utama pemerintahan</p>
          </div>
          <a href="#ppid" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700">Ajukan PPID</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc, href }, idx) => (
            <motion.a
              key={title}
              href={href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="group rounded-xl border border-emerald-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-emerald-200"
            >
              <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-emerald-900">{title}</h3>
              <p className="text-sm text-emerald-700 mt-1">{desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-emerald-700 group-hover:text-emerald-800">
                Selengkapnya →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
