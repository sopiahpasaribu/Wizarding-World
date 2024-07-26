// Fungsi untuk mengambil data buku berdasarkan ID dari API
const get_buku_by_id = async(id) => {
    try {
        // Melakukan fetch ke API untuk mendapatkan data buku berdasarkan ID
        const response = await fetch(`https://api.potterdb.com/v1/books/${id}`);

        // Mengecek apakah respons dari API oke
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Mengubah respons menjadi format JSON
        const data = await response.json();
        console.log(data);

        // Menampilkan gambar sampul buku
        const img = document.getElementById("book-cover");
        img.src = data.data.attributes.cover; // Mengambil URL gambar sampul dari data API
        img.alt = data.data.attributes.title; // Mengambil judul buku sebagai alt gambar

        // Menampilkan judul buku
        const title = document.getElementById("book-title");
        title.textContent = data.data.attributes.title; // Mengambil judul buku dari data API

        // Menampilkan penulis buku
        const author = document.getElementById("book-author");
        author.textContent = `Author: ${data.data.attributes.author}`; // Mengambil nama penulis dari data API

        // Menampilkan tanggal rilis buku
        const releaseDate = document.getElementById("book-release-date");
        releaseDate.textContent = `Release Date: ${data.data.attributes.release_date}`; // Mengambil tanggal rilis dari data API

        // Menampilkan jumlah halaman buku
        const pages = document.getElementById("book-pages");
        pages.textContent = `Pages: ${data.data.attributes.pages}`; // Mengambil jumlah halaman dari data API

        // Menampilkan dedikasi buku
        const dedication = document.getElementById("book-dedication");
        dedication.textContent = `Dedication: ${data.data.attributes.dedication}`; // Mengambil dedikasi dari data API

        // Menampilkan ringkasan buku
        const summary = document.getElementById("book-summary");
        summary.textContent = `Summary: ${data.data.attributes.summary}`; // Mengambil ringkasan dari data API

        // Menampilkan link wiki
        const wiki = document.getElementById("book-wiki");
        wiki.href = data.data.attributes.wiki; // Mengambil URL wiki dari data API
        wiki.textContent = "Read more on Harry Potter Wiki"; // Menetapkan teks untuk link wiki
    } catch (err) {
        console.log(err); // Menampilkan error di konsol jika ada
    }
};

// Mendapatkan ID buku dari URL parameter
const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");

// Memanggil fungsi get_buku_by_id jika ada ID buku dalam URL parameter
if (bookId) {
    get_buku_by_id(bookId);
}