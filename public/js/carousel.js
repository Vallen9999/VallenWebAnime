// Fungsi untuk mengaktifkan carousel gambar di halaman utama
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function changeCarousel() {
    // Menyembunyikan gambar sebelumnya
    carouselItems[currentIndex].style.display = 'none';

    // Update index dan menampilkan gambar berikutnya
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].style.display = 'block';
}

// Mulai carousel otomatis setiap 5 detik
setInterval(changeCarousel, 5000);