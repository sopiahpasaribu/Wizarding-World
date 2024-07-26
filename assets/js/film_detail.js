// Fungsi untuk mengambil detail film berdasarkan ID dari API
async function get_film_by_id(id) {
    try {
        // Mengirim permintaan ke API untuk mendapatkan data film dengan ID tertentu
        const response = await fetch(`https://api.potterdb.com/v1/movies/${id}`);

        // Memeriksa jika respons dari jaringan tidak baik
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Mengonversi respons API ke format JSON
        const data = await response.json();
        console.log("API Response:", data);

        // Mendapatkan atribut dari data film
        const attributes = data.data.attributes;

        // Memperbarui elemen-elemen dengan informasi film
        updateElementById("film-poster", "src", attributes.poster);
        updateElementById("film-poster", "alt", attributes.title);
        updateElementText("film-title", attributes.title);
        updateElementText("film-summary", `${attributes.summary}`);
        updateElementText("film-box-office", `Box Office: ${attributes.box_office}`);
        updateElementText("film-budget", `Budget: ${attributes.budget}`);
        updateElementText("film-rating", `Rating: ${attributes.rating}`);
        updateElementText("film-release-date", `Release Date: ${attributes.release_date}`);
        updateElementText("film-running-time", `Running Time: ${attributes.running_time}`);

        // Mendapatkan elemen untuk menampilkan kredit film
        const credits = document.getElementById("film-credits");
        credits.innerHTML = ""; // Mengosongkan konten elemen sebelum menambahkan yang baru

        // Menambahkan informasi kredit film (sutradara, sinematografer, dll.)
        addCredit(credits, "Directors", attributes.directors);
        addCredit(credits, "Cinematographers", attributes.cinematographers);
        addCredit(credits, "Editors", attributes.editors);
        addCredit(credits, "Music Composers", attributes.music_composers, " and ");
        addCredit(credits, "Producers", attributes.producers);
        addCredit(credits, "Screenwriters", attributes.screenwriters);

        // Memperbarui tautan untuk trailer dan wiki film
        updateElementLink("film-trailer", attributes.trailer, "Watch Trailer");
        updateElementLink("film-wiki", attributes.wiki, "Read more on Harry Potter Wiki");
    } catch (error) {
        // Menangani kesalahan jika ada masalah saat mengambil data film
        console.error("Error:", error);
        document.getElementById("error-message").textContent =
            "Failed to load film details. Please try again later.";
    }
}

// Fungsi untuk memperbarui atribut dari elemen berdasarkan ID
function updateElementById(id, attribute, value) {
    const element = document.getElementById(id);
    if (element) {
        element[attribute] = value;
    }
}

// Fungsi untuk memperbarui teks dari elemen berdasarkan ID
function updateElementText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

// Fungsi untuk memperbarui tautan dari elemen berdasarkan ID
function updateElementLink(id, href, text) {
    const element = document.getElementById(id);
    if (element) {
        element.href = href;
        element.textContent = text;
    }
}

// Fungsi untuk menambahkan informasi kredit ke dalam elemen container
function addCredit(container, title, items, separator = ", ") {
    if (items && items.length > 0) {
        const li = document.createElement("li");
        li.className = "wrapper-detail";
        li.textContent = `${title}: ${items.join(separator)}`;
        container.appendChild(li);
    }
}

// Panggil fungsi saat halaman dimuat
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if (id) {
    get_film_by_id(id);
}