import Image from "next/image";

export const metadata = {
  title: "Verifikasi Surat - Assist.id",
  description: "Halaman verifikasi surat resmi Klinik Pratama Rodondo",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function VerifyPage({ params }) {
  const { token } = await params;

  const letters = [
    {
      token: "abc123",
      name: "YOVI REVIKASARI",
      birth: "21-03-2003",
      nik: "3674062103030011",
      address: "RENI JAYA BLOK BC 9 NO.12 RT11/14 PONDOK BENDA PAMULANG",
      doctor: "dr. Wiwiek Nurlaila",
      sip: "446.1/2187/01-DPMPTSP/OL/2021",
      facility: "Klinik Pratama Rodondo",
      type: "Surat Keterangan Sakit",
      number: "SKD/rodondo/III/2026/0384",
      valid: "14-03-2026 s/d 14-03-2026",
      note:
        "Pasien memerlukan istirahat selama 1 hari, karena: J06.9 Acute upper respiratory tract infection [URTI].",
      verified: "14-03-2026 (13.43)",
    },
  ];

  const letter = letters.find((item) => item.token === token);

  if (!letter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Surat tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      
      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto py-3 sm:py-4 px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

            {/* KIRI */}
            <div className="flex items-center gap-3 flex-grow">

              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Klinik Pratama Rodondo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="min-w-0 flex-grow">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Klinik Pratama Rodondo
                </h2>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs sm:text-sm text-gray-400">
                    Powered by
                  </span>

                  <Image
                    src="/logo.png"
                    alt="Assist.id"
                    width={80}
                    height={27}
                    className="h-5 sm:h-6 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* BADGE VERIFIED */}
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 
                  16zm3.707-9.293a1 1 0 00-1.414-1.414L9 
                  10.586 7.707 9.293a1 1 0 00-1.414 
                  1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              Terverifikasi
            </span>

          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto py-4 sm:py-8 px-4">
        <div className="max-w-6xl mx-auto">

          {/* ALERT */}
          <div className="bg-gradient-to-r from-blue-50 to-transparent border border-blue-200 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-4">

              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 
                    000 16zm3.707-9.293a1 1 0 
                    00-1.414-1.414L9 10.586 
                    7.707 9.293a1 1 0 
                    00-1.414 1.414l2 
                    2a1 1 0 001.414 
                    0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                  Surat Valid dan Terverifikasi
                </h2>

                <p className="text-sm text-gray-400">
                  Dokumen ini telah terverifikasi pada {letter.verified} dan
                  terdaftar dalam sistem kami.
                </p>
              </div>

            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">

            {/* DATA PASIEN */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

              <div className="bg-blue-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-700">

                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 
                      0 4 4 0 018 0zM12 
                      14a7 7 0 00-7 
                      7h14a7 7 0 
                      00-7-7z"
                    />
                  </svg>

                  Data Pasien
                </h3>
              </div>

              <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

                <Info label="Nama Lengkap" value={letter.name} />
                <Info label="Tanggal Lahir" value={letter.birth} />
                <Info label="NIK" value={letter.nik} mono />
                <Info label="Alamat" value={letter.address} />

              </div>
            </div>

            {/* TENAGA MEDIS */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

              <div className="bg-blue-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-700">

                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 
                      4h6m2 5H7a2 
                      2 0 01-2-2V5a2 
                      2 0 012-2h5.586a1 
                      1 0 01.707.293l5.414 
                      5.414a1 1 0 
                      01.293.707V19a2 
                      2 0 01-2 2z"
                    />
                  </svg>

                  Informasi Tenaga Medis
                </h3>
              </div>

              <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

                <Info label="Nama Tenaga Medis" value={letter.doctor} />
                <Info label="Nomor SIP" value={letter.sip} mono />

                <div className="sm:col-span-2">
                  <Info label="Fasilitas Kesehatan" value={letter.facility} />
                </div>

              </div>
            </div>

          </div>

          {/* DETAIL SURAT */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">

            <div className="bg-blue-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-700">

<svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 
                      4h6m2 5H7a2 
                      2 0 01-2-2V5a2 
                      2 0 012-2h5.586a1 
                      1 0 01.707.293l5.414 
                      5.414a1 1 0 
                      01.293.707V19a2 
                      2 0 01-2 2z"
                    />
                  </svg>

                Detail Surat
              </h3>
            </div>

            <div className="p-4 sm:p-6">

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">

                <Info label="Jenis Surat" value={letter.type} />
                <Info label="Nomor Surat" value={letter.number} mono />
                <Info label="Berlaku" value={letter.valid} />

              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="text-xs font-medium text-gray-400 uppercase mb-2">
                  Keterangan
                </div>

                <p className="text-sm leading-relaxed">
                  {letter.note}
                </p>
              </div>

            </div>
          </div>

          {/* FOOTER */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-400">
              Dokumen ini telah diverifikasi secara digital. Untuk pertanyaan
              lebih lanjut, silakan hubungi fasilitas kesehatan yang tertera.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

function Info({ label, value, mono }) {
  return (
    <div>
      <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
        {label}
      </div>

      <div className={`text-sm text-gray-800 ${mono ? "font-mono" : ""}`}>
        {value}
      </div>
    </div>
  );
}