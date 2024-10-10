console.log('Script.js telah dimuat!');

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

function lihatSelengkapnya(namaNegara) {
    window.location.href = "detail.html?country=" + encodeURIComponent(namaNegara);
}

// Ambil parameter 'country' dari URL
const params = new URLSearchParams(window.location.search);
const country = params.get('country');

// Data untuk gambar dan deskripsi negara
const countryData = {
    'Switzerland': {
        image: 'swis2.jpeg',
        description: 'Switzerland is known for its picturesque landscapes and charming cities.',
        moreInfo: 'Switzerland is also famous for its neutrality, precision watches, and skiing resorts.'
    },
    'United Kingdom': {
        image: 'Big Ben.jpeg',
        description: 'The United Kingdom is famous for its rich history and cultural landmarks.',
        moreInfo: 'The UK is a leader in global finance, home to world-class museums and historical monuments.'
    },
    'Indonesia': {
        image: 'indo.jpeg',
        description: 'Indonesia is an archipelago known for its diverse culture and beautiful beaches.',
        moreInfo: 'Indonesia has over 17,000 islands and is the world\'s largest archipelago country.'
    },
    'Australia': {
        image: 'australia.jpeg',
        description: 'Australia is known for its unique wildlife and stunning natural landscapes.',
        moreInfo: 'Australia is home to the Great Barrier Reef and many natural wonders.'
    },
    'Prancis': {
        image: 'paris.jpeg',
        description: 'France is famous for its art, fashion, and cuisine.',
        moreInfo: 'France is also known for the Eiffel Tower, French Revolution, and being a cultural hub in Europe.'
    }
};

// Set konten berdasarkan negara yang dipilih
if (country && countryData[country]) {
    document.getElementById('countryName').textContent = country;
    document.getElementById('countryImage').src = countryData[country].image;
    document.getElementById('countryDescription').textContent = countryData[country].description;

    // Set href untuk tombol 'See More' ke halaman lain dengan parameter negara
    const seeMoreLink = document.getElementById('seeMoreButton');
    seeMoreLink.href = `seemore.html?country=${country}`;
} else {
    document.getElementById('countryName').textContent = 'Negara tidak ditemukan';
}

