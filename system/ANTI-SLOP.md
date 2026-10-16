# Sistem Anti-Slop AI

Panduan ini mengatur penggunaan AI saat merencanakan, menulis, atau mengubah portofolio. Tujuannya adalah mengurangi keluaran generik, klaim tanpa dasar, dan kode yang tidak sesuai kebutuhan.

## Prinsip

1. **Bukti mendahului kelancaran bahasa.** AI boleh merapikan kalimat, tetapi tidak boleh menambahkan fakta tentang pemilik.
2. **Konteks mendahului pola umum.** Gunakan audiens, tujuan, isi proyek, dan gaya yang diberikan. Jangan mengisi kekosongan dengan jargon.
3. **Satu perubahan punya alasan.** Setiap rekomendasi atau perubahan harus terkait dengan tujuan pengguna atau kebutuhan teknis yang nyata.
4. **Jelas saat belum tahu.** Tandai fakta yang perlu konfirmasi sebagai `[PERLU KONFIRMASI: ...]`; jangan menyamarkannya sebagai fakta.
5. **Hasil harus dapat ditinjau.** Jelaskan berkas yang diubah, alasan, serta cara memeriksa hasilnya.

## Alur kerja AI

### A. Pahami permintaan

Catat tujuan halaman, audiens, tindakan yang diinginkan, bahan yang tersedia, batasan teknologi, dan definisi selesai. Baca struktur proyek dan instruksi lokal sebelum menyarankan perubahan.

### B. Buat inventaris fakta

Kelompokkan masukan menjadi:

- **Terkonfirmasi:** diberikan pengguna atau terlihat langsung di sumber proyek.
- **Inferensi:** kemungkinan yang masuk akal; beri label sebagai asumsi.
- **Belum diketahui:** perlu ditanyakan atau diberi penanda.

Jangan mengubah inferensi menjadi klaim pasti.

### C. Susun rancangan ringkas

Sebelum menulis banyak konten atau kode, tentukan struktur dan hubungan tiap bagian dengan tujuan. Utamakan bahasa konkret dan komponen sederhana. Hindari menambah dependensi, animasi, seksi, atau pola abstrak tanpa alasan.

### D. Terapkan dan tinjau

Jaga perubahan sekecil yang memenuhi kebutuhan. Periksa konsistensi konten, aksesibilitas dasar, responsivitas, tautan, dan kesalahan yang tampak dari perubahan. Jangan menyatakan pengujian sudah dilakukan jika belum dijalankan.

### E. Laporkan dengan jujur

Ringkas apa yang dibuat, berkas yang berubah, pemeriksaan yang dilakukan, hasilnya, dan hal yang masih memerlukan fakta atau keputusan pemilik.

## Pemeriksaan anti-slop untuk teks

Sebelum menerima teks, tanyakan:

- Apakah kalimat ini menyampaikan fakta atau bukti yang spesifik?
- Apakah istilah seperti “inovatif”, “berdampak”, “passionate”, “solusi terbaik”, atau “mengubah industri” punya bukti konkret?
- Bisakah frasa generik diganti dengan peran, keputusan, teknologi, atau hasil yang benar-benar terjadi?
- Apakah suara dan tingkat formalitas sesuai pemilik portofolio?
- Adakah klaim angka, klien, pencapaian, atau keahlian yang belum dikonfirmasi?

Jika tidak punya bukti, hapus klaim atau tandai untuk konfirmasi.

## Pemeriksaan anti-slop untuk kode dan desain

- Setiap komponen punya fungsi yang jelas dan dipakai.
- Tidak membuat abstraksi untuk satu penggunaan tanpa kebutuhan nyata.
- Tidak menambahkan placeholder, tombol mati, tautan `#`, atau konten palsu.
- Nama variabel, label, alt text, dan heading menjelaskan isi sebenarnya.
- Visual tidak mengorbankan keterbacaan, keyboard, atau perangkat kecil.
- Perubahan mengikuti pola dan dependensi proyek yang sudah ada.

## Template instruksi untuk AI

> Bantu saya mengembangkan portofolio berdasarkan tujuan dan bahan yang saya berikan. Periksa struktur proyek terlebih dahulu dan ikuti pola yang sudah ada. Jangan mengarang pengalaman, klien, angka, penghargaan, hasil, atau kemampuan. Bedakan fakta, asumsi, dan informasi yang perlu konfirmasi. Gunakan bahasa konkret, hindari jargon dan klaim promosi tanpa bukti. Buat perubahan sekecil yang memenuhi tujuan. Di akhir, laporkan berkas yang berubah, alasan perubahan, pemeriksaan yang benar-benar dijalankan, dan informasi yang masih perlu saya lengkapi.

## Skor tinjauan sederhana

Beri nilai 0 (belum), 1 (sebagian), atau 2 (ya) untuk tiap butir: spesifik terhadap audiens, didukung fakta, mudah dipahami, relevan dengan tujuan, dan dapat diperiksa. Revisi jika ada nilai 0 pada “didukung fakta” atau “dapat diperiksa”; revisi juga jika total di bawah 8 dari 10. Skor ini alat tinjau, bukan bukti objektif kualitas.
