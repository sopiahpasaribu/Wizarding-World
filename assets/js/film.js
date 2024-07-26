// film.js

// URL API untuk mengambil data film
const apiUrl = 'https://api.potterdb.com/v1/movies';

// Mengambil elemen container film dari DOM
const containerFilm = document.querySelector('.container-film');

// Mengambil data film dari API
fetch(apiUrl)
    .then(response => response.json()) // Mengonversi respons API ke format JSON
    .then(data => {
        console.log("API Response:", data); // Menampilkan respons API di konsol
        containerFilm.innerHTML = ""; // Mengosongkan kontainer sebelum menambahkan elemen baru

        // Iterasi melalui setiap data film
        data.data.forEach(dataFilm => {
            // Membuat elemen kontainer baru untuk setiap film
            const card = document.createElement('div');
            card.className = 'card'; // Memberikan kelas 'card' untuk elemen ini

            // Membuat elemen poster
            const posterElement = document.createElement('img');
            posterElement.src = dataFilm.attributes.poster; // Mengatur sumber poster film
            posterElement.alt = 'Poster Film'; // Mengatur teks alternatif untuk gambar

            // Membuat elemen judul
            const titleElement = document.createElement('h2');
            titleElement.textContent = dataFilm.attributes.title; // Mengatur teks judul film

            // Membuat elemen tombol
            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'View Movie'; // Mengatur teks tombol

            // Menambahkan elemen ke dalam kartu
            card.appendChild(posterElement);
            card.appendChild(titleElement);
            card.appendChild(buttonElement);

            // Menambahkan event listener ke tombol untuk navigasi ke halaman detail film
            buttonElement.addEventListener("click", (e) => {
                e.preventDefault(); // Mencegah aksi default tombol (misalnya, jika berada dalam form)
                window.location.href = `film_detail.html?id=${dataFilm.id}`; // Mengarahkan pengguna ke halaman detail film dengan ID film
            });

            // Menambahkan kartu ke dalam kontainer film
            containerFilm.appendChild(card);
        });
    })
    .catch(error => {
        // Menangani kesalahan jika ada masalah saat mengambil data dari API
        console.error("Error:", error);
    });