'use client';

import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  // Set your wedding date here
  const weddingDate = new Date('2025-07-05T08:30:00');

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-dancing text-primary mb-4">
            Undangan Pernikahan
          </h1>
          <p className="text-xl md:text-2xl font-montserrat text-gray-600">
            Kami mengundang Anda untuk merayakan hari bahagia kami
          </p>
        </header>

        {/* Couple Names */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-dancing text-secondary mb-8">
            Shameer Farhann bin Mohd Syamsul Hisham
            <br />
            <span className="block text-4xl md:text-6xl my-4">&</span>
            Nur Hanis Fahira binti Hamzah
            <br />
          </h2>
        </section>

        {/* Countdown Timer */}
        <CountdownTimer weddingDate={weddingDate} />

        {/* Wedding Details */}
        <section className="max-w-2xl mx-auto mt-16 text-center bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-dancing text-secondary mb-6">Detail Acara</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-montserrat font-semibold text-primary mb-2">Akad Nikah</h4>
              <p className="text-gray-600">Sabtu, 5 Julai 2025</p>
              <p className="text-gray-600">8:30 - 11:00</p>
            </div>

            <div>
              <h4 className="text-xl font-montserrat font-semibold text-primary mb-2">Majlis Bersanding</h4>
              <p className="text-gray-600">Sabtu, 5 Julai 2025</p>
              <p className="text-gray-600">11:30 - 16:00</p>
            </div>

            <div>
              <h4 className="text-xl font-montserrat font-semibold text-primary mb-2">Lokasi</h4>
              <p className="text-gray-600">Capredoca White Palace Bangi</p>
              <a 
                href="https://maps.google.com/?q=Capredoca+White+Palace+Bangi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary underline mt-2 inline-block"
              >
                Lihat Lokasi di Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="max-w-2xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-dancing text-secondary mb-6">RSVP</h3>
          <p className="text-gray-600 mb-4">
            Mohon isi kehadiran Anda melalui google form di bawah ini:
          </p>
          <a
            href="https://forms.gle/CNG9Q1VEqHJfWKKH6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
          >
            Konfirmasi Kehadiran
          </a>
        </section>
      </div>
    </main>
  );
} 