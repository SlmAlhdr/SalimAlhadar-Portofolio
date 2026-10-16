# Fondasi Web Portofolio

Dokumen ini menjelaskan cara berpikir untuk menyusun portofolio web dan aturan kerja AI agar hasilnya tetap spesifik, berguna, dan mudah ditinjau.

## Mulai di sini

- [Halaman portofolio](index.html) — buka langsung di browser, lalu ganti konten bertanda kurung siku.
- [Pratinjau online](https://slmalhadar-lab.github.io/Portofolio/) — tersedia setelah GitHub Actions menyelesaikan deployment pertama.
- `assets/css/style.css` — tampilan, warna, dan aturan responsif.
- `assets/js/script.js` — menu seluler dan tahun footer.
- [Logika membangun portofolio](docs/LOGIKA-PORTOFOLIO.md)
- [Sistem anti-slop AI](system/ANTI-SLOP.md)

## Urutan kerja

1. Tentukan siapa yang akan melihat portofolio dan tindakan apa yang diharapkan setelahnya.
2. Kumpulkan bukti kerja nyata: proyek, peran, keputusan, hasil, dan tautan yang dapat diperiksa.
3. Susun konten mengikuti pertanyaan pengunjung: siapa Anda, apa yang bisa Anda kerjakan, apa buktinya, bagaimana menghubungi Anda.
4. Bangun halaman dengan struktur semantik, navigasi jelas, tampilan responsif, dan aksesibilitas dasar.
5. Periksa fakta, tautan, tampilan ponsel, dan alur kontak sebelum dipublikasikan.

Jangan mengisi bagian yang belum diketahui dengan klaim rekaan. Tandai sebagai perlu dilengkapi.

## Struktur proyek

```text
Portofolio/
├── assets/
│   ├── css/style.css
│   └── js/script.js
├── .github/workflows/     # deployment otomatis ke GitHub Pages
├── docs/                  # dokumentasi logika portofolio
├── system/                # panduan anti-slop AI
├── index.html             # halaman utama
└── README.md
```

## Menambahkan foto dan proyek

1. Salin foto Anda atau gambar proyek ke folder assets/images/.
2. Buka assets/js/portfolio-data.js.
3. Isi portfolioProfile.image untuk foto profil, lalu isi nama, ringkasan, kategori, dan tahun pada setiap objek proyek.
4. Isi properti image dengan jalur gambar, misalnya assets/images/proyek-saya.jpg.
5. Untuk menambah proyek, salin satu objek proyek beserta tanda koma, lalu ganti isinya. Jika tidak ada tautan demo atau kode, biarkan liveUrl dan sourceUrl kosong.

Contoh data dan keterangan folder gambar sudah tersedia. Pastikan nama berkas pada jalur sama persis dengan nama foto yang disimpan. Setelah itu buka ulang halaman atau push perubahan agar situs online ikut diperbarui.
