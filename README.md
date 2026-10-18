# 🚌 TransNesia - Modern Intercity Bus Ticketing System

<p align="center">
  <b>Aplikasi Desktop & Web Pemesanan Tiket Bus Antar Kota Cepat, Modern, dan Real-Time</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Tech-Electron%20%7C%20Node.js%20%7C%20TailwindCSS-blue?style=for-the-badge" alt="Tech Stack">
  <img src="https://img.shields.io/badge/Language-JavaScript%20%7C%20HTML5-yellow?style=for-the-badge" alt="Language">
</p>

---

## 🌟 Tentang TransNesia

**TransNesia** adalah aplikasi pemesanan tiket bus intercity (antar kota) berbasis Desktop (*Electron*) dan Web yang dirancang dengan antarmuka yang bersih, responsif, dan interaktif menggunakan *Tailwind CSS*. Aplikasi ini memudahkan pengguna untuk mencari jadwal perjalanan, memilih armada bus, memilih nomor kursi secara visual, melakukan pembayaran non-tunai, hingga mencetak resi digital.

---

## ✨ Fitur Utama

- **Pencarian Rute & Tarif Berbasis Jarak Riil**: Sistem secara otomatis menghitung tarif tiket bus berdasarkan jarak tempuh darat asli (kilometer) antar kota di Pulau Jawa dan Sumatra.
- **Pilihan Kelas Armada**:
  - 🚍 **Executive**: Harga Dasar Rp 180.000 + (Rp 1.000 / km)
  - 🚐 **Bisnis**: Harga Dasar Rp 120.000 + (Rp 1.000 / km)
  - 🚌 **Ekonomi**: Harga Dasar Rp 70.000 + (Rp 1.000 / km)
- **Denah Kursi Interaktif (Unlimited)**: Pilih kursi penumpang secara bebas dan tidak terbatas dalam satu kali pemesanan dengan visualisasi ketersediaan kursi secara *real-time*.
- **Diskon Otomatis**: Potongan harga sebesar **10%** secara otomatis aktif jika pengguna memesan lebih dari 2 tiket dalam satu transaksi.
- **Pembayaran Non-Tunai**: Mendukung berbagai metode pembayaran seperti Transfer Bank (BCA & Mandiri), QRIS, dan E-Wallet (GoPay/OVO).
- **Riwayat & Cetak Resi PDF**: Pengguna dapat melihat kembali riwayat transaksi pemesanan kapan saja dan mencetak e-ticket/resi langsung melalui fitur cetak bawaan.
- **Dukungan Multi-Bahasa**: Tersedia pilihan bahasa Indonesia dan Inggris yang dapat diganti secara instan.
- **Panel Admin & Sinkronisasi Excel**: Dilengkapi fitur manajemen data khusus admin dan pencatatan data pemesanan secara *real-time* ke file Excel melalui backend Electron.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**: HTML5, JavaScript (ES6+), Tailwind CSS
- **Ikon**: Phosphor Icons
- **Desktop Wrapper / Backend**: Node.js, Electron.js
- **Penyimpanan**: LocalStorage / Excel Integration

---

## 🚀 Panduan Instalasi & Menjalankan Aplikasi

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di komputer lokal Anda:

1. **Clone repositori ini ke komputer Anda:**
   ```bash
   git clone [https://github.com/GeraldoBrzzzky/TransNesia.git](https://github.com/GeraldoBrzzzky/TransNesia.git)
