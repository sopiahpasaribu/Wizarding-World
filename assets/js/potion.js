// Mendefinisikan URL API untuk mendapatkan data potion
const apiUrl = 'https://api.potterdb.com/v1/potions';

// Memilih elemen HTML dengan kelas 'potion-container' untuk menampung elemen-elemen baru
const potionContainer = document.querySelector('.potion-container');

// Mengambil data dari API
fetch(apiUrl)
    .then(response => response.json()) // Mengubah respons menjadi format JSON
    .then(data => {
        // Melakukan loop untuk setiap potion dalam data
        for (let i = 0; i < data.data.length; i++) {
            const potionData = data.data[i]; // Mengambil data potion
            console.log(potionData); // Mencetak data potion ke konsol

            // Membuat container potion baru untuk setiap potion
            const newPotionContainer = document.createElement('div');
            newPotionContainer.className = 'potion'; // Menetapkan kelas 'potion' pada elemen div

            // Membuat elemen gambar
            const imageElement = document.createElement('img');
            imageElement.src = potionData.attributes.image; // Menetapkan atribut src dengan URL gambar potion
            imageElement.alt = 'Potion Image'; // Menetapkan atribut alt untuk gambar
            newPotionContainer.appendChild(imageElement); // Menambahkan elemen gambar ke dalam container potion

            // Membuat elemen nama
            const nameElement = document.createElement('h1');
            nameElement.textContent = potionData.attributes.name; // Menetapkan teks dengan nama potion
            newPotionContainer.appendChild(nameElement); // Menambahkan elemen nama ke dalam container potion

            // Membuat elemen karakteristik
            const characteristicsElement = document.createElement('p');
            characteristicsElement.className = 'characteristics'; // Menetapkan kelas 'characteristics' pada elemen p
            characteristicsElement.textContent = `Characteristics: ${potionData.attributes.characteristics}`; // Menetapkan teks dengan karakteristik potion
            newPotionContainer.appendChild(characteristicsElement); // Menambahkan elemen karakteristik ke dalam container potion

            // Membuat elemen kesulitan
            const difficultyElement = document.createElement('p');
            difficultyElement.className = 'difficulty'; // Menetapkan kelas 'difficulty' pada elemen p
            difficultyElement.textContent = `Difficulty: ${potionData.attributes.difficulty}`; // Menetapkan teks dengan kesulitan potion
            newPotionContainer.appendChild(difficultyElement); // Menambahkan elemen kesulitan ke dalam container potion

            // Membuat elemen efek
            const effectElement = document.createElement('p');
            effectElement.className = 'effect'; // Menetapkan kelas 'effect' pada elemen p
            effectElement.textContent = `Effect: ${potionData.attributes.effect}`; // Menetapkan teks dengan efek potion
            newPotionContainer.appendChild(effectElement); // Menambahkan elemen efek ke dalam container potion

            // Membuat elemen bahan-bahan
            const ingredientsElement = document.createElement('p');
            ingredientsElement.className = 'ingredients'; // Menetapkan kelas 'ingredients' pada elemen p
            ingredientsElement.textContent = `Ingredients: ${potionData.attributes.ingredients}`; // Menetapkan teks dengan bahan-bahan potion
            newPotionContainer.appendChild(ingredientsElement); // Menambahkan elemen bahan-bahan ke dalam container potion

            // Menambahkan container potion baru ke halaman
            potionContainer.appendChild(newPotionContainer);
        }
    });