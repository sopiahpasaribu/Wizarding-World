// Fungsi untuk mengambil semua buku dari API
const get_all_buku = async() => {
    try {
        // Melakukan fetch ke API untuk mendapatkan data buku
        const response = await fetch("https://api.potterdb.com/v1/books");

        // Mengecek apakah respons dari API oke
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Mengubah respons menjadi format JSON
        const data = await response.json();
        console.log(data);

        // Mengambil elemen HTML dengan kelas 'book'
        const bookSection = document.querySelector(".book");

        // Melakukan loop untuk setiap buku dalam data
        data.data.forEach((book) => {
            // Membuat div untuk card
            const card = document.createElement("div");
            card.classList.add("card"); // Menetapkan kelas 'card' pada elemen div

            // Memasukkan gambar buku ke dalam card
            const img = document.createElement("img");
            img.src = book.attributes.cover; // Mengambil URL gambar dari atribut cover
            img.alt = book.attributes.title; // Mengambil judul buku sebagai atribut alt gambar
            card.appendChild(img); // Menambahkan gambar ke dalam card

            // Membuat elemen judul buku
            const title = document.createElement("h2");
            title.textContent = book.attributes.title; // Menetapkan teks dengan judul buku
            card.appendChild(title); // Menambahkan judul ke dalam card

            // Menambahkan event listener untuk card
            card.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("Card diklik");
                // Mengarahkan ke halaman detail buku berdasarkan ID buku
                window.location.href = `book_detail.html?id=${book.id}`;
            });

            // Menambahkan card ke dalam elemen dengan kelas 'book'
            bookSection.appendChild(card);
        });

    } catch (err) {
        console.log(err); // Menampilkan error di konsol jika ada
    }
};

// Memanggil fungsi untuk mengambil semua buku
get_all_buku();