# 💕 Bentar Ajaa Senam Jari Hehe - Surprise Website

Website surprise romantis interaktif untuk orang terkasih dengan berbagai pilihan dan animasi menarik!

🌐 **Live Website:** https://buatkamuyayaaa.vercel.app/

---

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Alur Website](#alur-website)
- [Teknologi](#teknologi)
- [Struktur File](#struktur-file)
- [Cara Deploy](#cara-deploy)
- [Cara Menggunakan](#cara-menggunakan)
- [Catatan Penting](#catatan-penting)

---

## ✨ Fitur Utama

### 1. **Splash Screen (Halaman Awal)**
- Greeting romantis: "Hai Sayangkuuuu!!!"
- Message: "Aku Sayang Sama Kamuuuuu 💕 Pencet pencet sama aku bentar yuuuk 😘"
- Love emoji dengan animasi berdetak
- Tombol "Lanjut 💕" untuk melanjutkan

### 2. **Story Screen**
- Pertanyaan: "Gimana Hari Ini Sayang? Ceritain yaa nanti?"
- **Pilihan A: ✨ Ceritain** → Lanjut ke Question Teaser
- **Pilihan B: 😅 Ga Ceritain** → Jumpscare Pocong (lol.png) selama 3 detik, balik ke Story Screen

### 3. **Question Teaser Screen**
- Message: "Yeayyy! Akhirnya kamu mau cerita, tapi sebelum lanjut, aku ada pertanyaan nih..."
- **Pilihan A: ❓ Pertanyaan apa tuhh kepo aku** → Lanjut ke Forgiveness Question
- **Pilihan B: 😴 Males** → Button yang KABUR! Setiap klik/hover pindah posisi (Fleeing Button)

### 4. **Forgiveness Question Screen**
- Message: "Kamu masih marah yaa sayangkuu? Maafin aku yang imoet ini yaa sayangg? pweaassee 🥺"
- **Pilihan A: ✨ Iyaa aku maafin** → Forgiven Screen dengan animasi pesta
- **Pilihan B: 😤 Gaa aku masih marah** → Angry Screen (tampil lol1.jpg) dengan tombol balik

### 5. **Angry Screen (Kondisional)**
- Tampil gambar lol1.jpg dengan efek shake
- Message: "Dasar bocil masa iyaa aku ga dimaapin, tegaa banget kamuu ishhh 😭"
- Tombol "← Balik ke pilihan" untuk kembali ke Forgiveness Screen

### 6. **Forgiven Screen**
- Message: "Yeayyy Dimaapin! Makasii sayangkuu 😘 Aku cinta kamu 💕"
- Animasi pop-in dengan gradient background
- Emoji dengan animasi kiss dan heartbeat
- Tombol "➜ Lanjut" untuk lanjut ke WhatsApp Screen

### 7. **WhatsApp Screen (Final)**
- Message: "Okeey kita lanjut di wa aja yaa? Masih innget nomer wa ku kann? Kamu save kann? 📱"
- Tombol "📞 Langsung Call Aja Kalo Engga VC Aku Yaa" → **Direct redirect ke WhatsApp** (wa.me/6287849882512)

### 8. **Quotes Screen (Bonus)**
- Tampilan quotes romantis & lucu
- **20 quotes** (10 romantis + 10 lucu)
- Tombol "💕 Next Quote" untuk lihat quote berikutnya
- Tombol "🌙 Dark Mode" untuk toggle dark theme
- Counter quotes yang sudah ditonton
- Shortcut: Tekan **SPACEBAR** untuk next quote

---

## 🎬 Alur Website

```
START
  ↓
┌─────────────────────┐
│ Splash Screen       │ ← "Hai Sayangkuuuu!!!"
│ (Klik "Lanjut")    │
└─────────────────────┘
  ↓
┌─────────────────────┐
│ Story Screen        │
├─────────────────────┤
│ ✨ Ceritain    ───→ │ → Question Teaser
│ 😅 Ga Ceritain ───→ │ → Pocong Jump → Balik ke Story
└─────────────────────┘
  ↓
┌──────────────────────┐
│ Question Teaser      │
├──────────────────────┤
│ ❓ Tanya      ───→ │ → Forgiveness Question
│ 😴 Males     ───→ │ → Button Kabur-kabur
└──────────────────────┘
  ↓
┌──────────────────────────┐
│ Forgiveness Question     │
├──────────────────────────┤
│ ✨ Maafin   ───→ │ → Forgiven Screen
│ 😤 Marah    ───→ │ → Angry Screen
└──────────────────────────┘
  ↓
┌──────────────────────┐
│ Forgiven Screen      │ ← "Yeayyy Dimaapin!"
│ (Klik "Lanjut")     │
└──────────────────────┘
  ↓
┌──────────────────────┐
│ WhatsApp Screen      │
│ (Klik tombol)       │ → Redirect ke WhatsApp
└──────────────────────┘
  ↓
END (Chat di WhatsApp!)
```

---

## 🛠️ Teknologi

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Hosting:** Vercel
- **Repository:** GitHub (d3mong/Surprise-Vercel)
- **Deployment:** Automatic (push ke GitHub → auto deploy di Vercel)

**Browser Support:**
- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (Android Chrome, Safari iOS)

---

## 📁 Struktur File

```
d:\Gabut\
├── index.html          # Main HTML file dengan semua screen
├── style.css           # Styling & animasi
├── script.js           # Logic & interaktivitas
├── lol.png            # Gambar pocong (jumpscare)
├── lol1.jpg           # Gambar bocil (angry screen)
└── README.md          # File dokumentasi ini
```

### File Descriptions:

**index.html** (1,273 bytes)
- Struktur HTML dengan 7 screen berbeda
- ID unik untuk setiap screen untuk kontrol JavaScript
- Link ke CSS & JavaScript files

**style.css** (3,772 bytes)
- Gradient backgrounds (purple theme)
- Animasi: bounce, shake, pop, heartbeat, rotate, float, wink, kiss
- Responsive design (mobile-friendly)
- Dark mode support
- Button hover effects

**script.js** (4,218 bytes)
- Fungsi navigasi antar screen
- Fleeing button logic (moveButton)
- Quote generator dengan randomization
- Dark mode toggle
- LocalStorage untuk save preferences

---

## 🚀 Cara Deploy

### Sudah ter-deploy! 
Website sudah live di: **https://buatkamuyayaaa.vercel.app/**

### Untuk Re-deploy setelah ada perubahan:

```bash
cd d:\Gabut

# Edit file (HTML/CSS/JS)
# Contoh: edit style.css untuk ubah warna

# Push ke GitHub
git add .
git commit -m "Deskripsi perubahan"
git push

# Vercel otomatis deploy dalam 1-2 menit!
```

---

## 📱 Cara Menggunakan

### Untuk User (Pacar):
1. Buka link: **https://buatkamuyayaaa.vercel.app/**
2. Ikuti alurnya dari awal sampai akhir
3. Pilih berbagai opsi yang tersedia
4. Di akhir, akan diarahkan langsung ke WhatsApp

### Untuk Developer (Pemilik):

**Mengubah quotes:**
- Edit `script.js`
- Ubah array `romanticQuotes` dan `funnyQuotes`
- Push ke GitHub → auto update

**Mengubah text/message:**
- Edit `index.html`
- Cari text yang ingin diubah
- Push ke GitHub → auto update

**Mengubah warna/style:**
- Edit `style.css`
- Ubah gradient colors, animations, font sizes
- Push ke GitHub → auto update

**Menambah gambar baru:**
- Upload file ke `d:\Gabut\`
- Reference di HTML dengan `<img src="filename.jpg">`
- Push ke GitHub

**Mengubah nomor WhatsApp:**
- Edit `index.html`
- Cari `wa.me/6287849882512`
- Ganti dengan nomor WhatsApp baru (format: 62 + nomor tanpa 0 di awal)
- Push ke GitHub

---

## 🎨 Customization Guide

### Mengubah Warna Theme:

**Current Theme:** Purple-Gradient (`#667eea` → `#764ba2`)

Edit di `style.css`:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Ganti warna hex di atas */
}
```

### Mengubah Font:

Di `style.css`:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Ganti dengan font pilihan */
}
```

### Menambah Animasi Baru:

Edit `style.css` dan tambah `@keyframes`:
```css
@keyframes newAnimation {
    from {
        /* starting state */
    }
    to {
        /* ending state */
    }
}
```

---

## 🔧 Troubleshooting

### Gambar tidak muncul?
- Cek nama file (case-sensitive)
- Pastikan file sudah di-commit ke GitHub
- Refresh browser dengan `Ctrl + Shift + R`

### Button tidak responsive?
- Cek console (F12 → Console)
- Pastikan JavaScript file ter-load

### Dark mode tidak bekerja?
- Cek localStorage di browser
- Clear browser cache
- Refresh page

### Animasi lambat?
- Update browser ke versi terbaru
- Disable extension browser yang heavy
- Clear browser cache

---

## 📊 Statistics

- **Total Screens:** 7 + 1 bonus (quotes)
- **Total Quotes:** 20 (10 romantic + 10 funny)
- **Animasi:** 15+ jenis berbeda
- **Responsive:** ✅ (Mobile, Tablet, Desktop)
- **Dark Mode:** ✅ Supported
- **Size:** ~10KB (uncompressed)

---

## 💡 Tips & Tricks

### Menggunakan Keyboard Shortcuts:
- **SPACEBAR** di Quotes Screen → Next Quote
- **ESC** → (kosong, bisa diimplementasikan)

### Untuk Mobile Users:
- Website fully responsive
- Semua tombol besar & mudah diklik
- Landscape & portrait mode supported

### Browser DevTools:
- `F12` untuk buka developer console
- Check console untuk error messages
- Check Network tab untuk loading status

---

## 📝 Changelog

### v1.0 (28 Dec 2025)
- ✅ Splash Screen dengan romantic greeting
- ✅ Story Screen dengan 2 pilihan
- ✅ Jumpscare Pocong
- ✅ Question Teaser dengan fleeing button
- ✅ Forgiveness Question flow
- ✅ Angry Screen dengan image
- ✅ Forgiven Screen dengan animasi
- ✅ WhatsApp Screen dengan direct link
- ✅ Bonus Quotes Screen (20 quotes)
- ✅ Dark Mode support
- ✅ Mobile responsive
- ✅ Deploy ke Vercel

---

## 📧 Contact & Support

**Created by:** d3mong  
**Repository:** https://github.com/d3mong/Surprise-Vercel  
**Live Website:** https://buatkamuyayaaa.vercel.app/  
**WhatsApp Direct:** wa.me/6287849882512

---

## 📄 License

This project is free to use and modify for personal use. 

**Credits:**
- Vercel untuk hosting gratis
- GitHub untuk repository
- Inspirasi dari cinta dan kasih sayang ❤️

---

## 🎉 Akhir Kata

Website ini dibuat dengan penuh cinta dan kasih sayang untuk orang terkasih. Semoga surprise ini membawa senyuman dan kebahagiaan! 💕

Enjoy your surprise! 🎊

---

**Last Updated:** 28 December 2025  
**Status:** ✅ Live & Fully Functional
