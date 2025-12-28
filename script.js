// Kata-kata romantis
const romanticQuotes = [
    { text: "Kamu adalah alasan aku tersenyum setiap hari.", author: "Dari hati saya" },
    { text: "Dunia menjadi lebih indah sejak kamu ada di dalamnya.", author: "Dari hati saya" },
    { text: "Kamu bukan hanya cinta saya, kamu adalah rumah saya.", author: "Dari hati saya" },
    { text: "Setiap momen bersamamu adalah momen terbaik dalam hidupku.", author: "Dari hati saya" },
    { text: "Aku jatuh cinta bukan karena penampilan, tapi karena cara kamu membuat hatiku bahagia.", author: "Dari hati saya" },
    { text: "Kamu adalah mimpi yang menjadi kenyataan.", author: "Dari hati saya" },
    { text: "Dalam kehidupanku yang kacau, kamu adalah ketenangan yang aku cari.", author: "Dari hati saya" },
    { text: "Cintaku padamu lebih dalam dari lautan dan lebih tinggi dari langit.", author: "Dari hati saya" },
    { text: "Kamu membuatku ingin menjadi versi terbaik dari diri saya.", author: "Dari hati saya" },
    { text: "Bersama kamu, aku menemukan hal terpenting dalam hidup: cinta sejati.", author: "Dari hati saya" },
];

// Kata-kata lucu
const funnyQuotes = [
    { text: "Kamu cantik sih, tapi kalau ketawa berdehem dulu.", author: "Dari hati saya" },
    { text: "Aku suka kamu, tapi jangan bilang ke anyone... nanti jadi mahal.", author: "Dari hati saya" },
    { text: "Kamu dan aku sama seperti 2 + 2... kita tujuh.", author: "Dari hati saya" },
    { text: "Jangan pernah tinggalkan aku... nanti siapa yang buka pintu kulkas saat aku males?", author: "Dari hati saya" },
    { text: "Aku suka kamu lebih dari pizza. Ya, aku serius.", author: "Dari hati saya" },
    { text: "Kamu adalah pasword terbaik yang pernah ada di hati saya.", author: "Dari hati saya" },
    { text: "Jika kamu adalah satu persen, berarti 99% dari dunia ku habis.", author: "Dari hati saya" },
    { text: "Aku bukan ahli, tapi aku rasa kamu agak bagus... agak banyak.", author: "Dari hati saya" },
    { text: "Smile, karena kamu membuat orang lain ingin tersenyum... terutama aku.", author: "Dari hati saya" },
    { text: "Kamu tahu gak sih? Kamu mirip WiFi... sulit untuk diputus dan bikin stress.", author: "Dari hati saya" },
];

// Gabung semua quotes
const allQuotes = [...romanticQuotes, ...funnyQuotes];

let quoteCount = 0;
let usedQuotes = [];

function startSurprise() {
    const splash = document.getElementById('splash');
    const storyScreen = document.getElementById('storyScreen');
    
    splash.classList.add('fade-out');
    
    setTimeout(() => {
        splash.style.display = 'none';
        storyScreen.style.display = 'block';
    }, 800);
}

function showQuestionTeaser() {
    const storyScreen = document.getElementById('storyScreen');
    const questionTeaser = document.getElementById('questionTeaser');
    
    storyScreen.style.animation = 'fadeOut 0.5s ease';
    
    setTimeout(() => {
        storyScreen.style.display = 'none';
        questionTeaser.style.display = 'block';
    }, 500);
}

function goToQuestions() {
    const questionTeaser = document.getElementById('questionTeaser');
    const quotesScreen = document.getElementById('quotesScreen');
    
    questionTeaser.style.animation = 'fadeOut 0.5s ease';
    
    setTimeout(() => {
        questionTeaser.style.display = 'none';
        quotesScreen.style.display = 'block';
        generateQuote();
    }, 500);
}

function moveButton() {
    const btn = document.getElementById('malesBtn');
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    btn.style.transition = 'transform 0.3s ease';
}

function showPocong() {
    const storyScreen = document.getElementById('storyScreen');
    const pocongScreen = document.getElementById('pocongScreen');
    
    storyScreen.style.opacity = '0';
    storyScreen.style.pointerEvents = 'none';
    
    pocongScreen.style.display = 'flex';
    
    // Pocong will show with animation
    setTimeout(() => {
        document.getElementById('pocongImage').style.animation = 'pocongJump 0.3s ease';
    }, 100);
    
    // Auto redirect to quotes after 3 seconds
    setTimeout(() => {
        const quotesScreen = document.getElementById('quotesScreen');
        pocongScreen.style.display = 'none';
        storyScreen.style.opacity = '1';
        storyScreen.style.display = 'none';
        quotesScreen.style.display = 'block';
        generateQuote();
    }, 3000);
}

function generateQuote() {
    // Jika sudah semua quotes ditampilkan, reset
    if (usedQuotes.length === allQuotes.length) {
        usedQuotes = [];
    }

    let randomQuote;
    let randomIndex;

    // Cari quote yang belum ditampilkan
    do {
        randomIndex = Math.floor(Math.random() * allQuotes.length);
        randomQuote = allQuotes[randomIndex];
    } while (usedQuotes.includes(randomIndex));

    usedQuotes.push(randomIndex);
    quoteCount++;

    // Update DOM
    document.getElementById('quote').textContent = randomQuote.text;
    document.getElementById('author').textContent = `— ${randomQuote.author}`;
    document.getElementById('count').textContent = quoteCount;

    // Animasi
    const quoteBox = document.querySelector('.quote-box');
    quoteBox.style.animation = 'none';
    setTimeout(() => {
        quoteBox.style.animation = 'slideIn 0.5s ease';
    }, 10);

    // Simpan ke localStorage
    localStorage.setItem('quoteCount', quoteCount);
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load dark mode preference
window.addEventListener('load', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedCount = localStorage.getItem('quoteCount');

    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }

    if (savedCount) {
        quoteCount = parseInt(savedCount);
        if (document.getElementById('count')) {
            document.getElementById('count').textContent = quoteCount;
        }
    }
});

// Keyboard shortcut: space bar untuk next quote
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.getElementById('quotesScreen').style.display === 'block') {
        e.preventDefault();
        generateQuote();
    }
});
