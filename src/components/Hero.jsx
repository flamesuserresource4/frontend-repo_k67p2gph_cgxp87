import { motion } from 'framer-motion';
import { Star, Shield, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium"
            >
              <Star className="h-4 w-4 text-emerald-600" />
              Website Resmi Pemerintah Kecamatan Gunung Kaler
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-900"
            >
              Transparan, Responsif, dan Berorientasi Layanan Publik
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-emerald-700 text-lg"
            >
              Akses informasi, ajukan permohonan PPID, dan jelajahi layanan publik
              dalam satu portal terpadu dengan tema hijau persawahan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#ppid"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700"
              >
                <Shield className="h-5 w-5" /> Ajukan PPID
              </a>
              <a
                href="#pelayanan"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-emerald-200 text-emerald-800 font-semibold hover:bg-emerald-50"
              >
                Lihat Layanan <ChevronRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 via-lime-100 to-white p-1"
            >
              <div className="h-full w-full rounded-2xl bg-white grid place-items-center">
                <div className="text-center p-8">
                  <div className="text-6xl">🌾</div>
                  <p className="mt-4 text-emerald-800 font-semibold">Tema Hijau Persawahan</p>
                  <p className="mt-1 text-emerald-600 text-sm">
                    Estetika modern yang merefleksikan identitas wilayah
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
