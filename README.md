# RoadQuality - Sistem Deteksi Kerusakan Jalan

Selamat datang di proyek RoadQuality! Ini adalah sebuah antarmuka web (frontend) yang dirancang untuk memvisualisasikan data deteksi kerusakan jalan. Dashboard ini menampilkan pemantauan langsung dari CCTV, statistik kerusakan, peta lokasi, dan memungkinkan pengguna untuk melakukan deteksi secara real-time menggunakan kamera ponsel mereka.

## ✨ Fitur Utama

-   **Dashboard Interaktif:** Tampilan utama yang modern dan mudah dibaca, menampilkan semua informasi penting dalam satu layar.
-   **Pemantauan Langsung:** Menampilkan feed video dari CCTV di lokasi tertentu, lengkap dengan informasi waktu dan lokasi.
-   **Statistik Kerusakan:** Visualisasi data jumlah kerusakan yang terdeteksi, yang sudah diperbaiki, dan yang masih dalam proses.
-   **Deteksi via HP:** Fitur modal interaktif yang memungkinkan pengguna menggunakan kamera depan atau belakang ponsel untuk analisis kerusakan jalan secara langsung.
-   **Desain Responsif:** Tampilan yang dapat menyesuaikan diri dengan baik di berbagai ukuran layar, dari desktop hingga ponsel.
-   **Animasi Halus:** Dibangun dengan animasi yang elegan dan tidak mengganggu untuk meningkatkan pengalaman pengguna.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun murni menggunakan teknologi frontend standar, tanpa memerlukan proses build atau kompilasi yang rumit.

-   **HTML5:** Sebagai struktur dasar halaman web.
-   **Tailwind CSS:** Digunakan sebagai framework CSS utama untuk membangun desain yang modern, responsif, dan konsisten dengan cepat.
-   **JavaScript (ES6):** Untuk menangani semua logika interaktif, seperti fungsionalitas modal, pergantian kamera, dan pembaruan jam digital.
-   **GSAP (GreenSock Animation Platform):** Sebuah library animasi JavaScript profesional yang digunakan untuk menciptakan semua animasi yang halus dan berperforma tinggi di seluruh aplikasi.

## 🚀 Cara Menjalankan

Karena ini adalah proyek frontend murni, Anda tidak memerlukan server atau instalasi yang rumit.

1.  **Clone atau Unduh Repositori**
    Pastikan Anda memiliki semua file (`index.html`, `script.js`, `README.md`) di dalam satu folder.

2.  **Buka File `index.html`**
    Cukup buka file `index.html` langsung di browser web modern pilihan Anda (seperti Google Chrome, Firefox, atau Edge).
    ```bash
    # Jika Anda menggunakan VS Code dengan ekstensi Live Server,
    # cukup klik kanan pada index.html dan pilih "Open with Live Server".
    ```

3.  **Selesai!**
    Aplikasi akan langsung berjalan di browser Anda. Untuk menguji fitur kamera, pastikan Anda membuka halaman ini melalui server lokal (seperti Live Server) atau meng-host-nya, karena beberapa browser membatasi akses `getUserMedia` pada file lokal (`file:///...`) demi keamanan.

---

Dikembangkan dengan ❤️ oleh CivicAI.