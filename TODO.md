# TODO - Animasi Hero/Navbar (Timeline tunggal)

- [ ] Refactor `Navbar.tsx`:
  - Logo AAA beri class `.logo-aaa`
  - Menu Portfolio/Skills/Contact + Resume button beri selector `.nav-item` dan `.resume-button` (tanpa WipeReveal yang auto-animate)
- [ ] Refactor `Hero.tsx`:
  - Label/Title/Desc/Social/Profile image/Ring diberi class sesuai pseudo logic:
    `.hero-label`, `.hero-title`, `.hero-desc`, `.social-icon`, `.profile-image`, `.profile-ring`
  - Pastikan initial style: `clip-path: inset(0 100% 0 0)` dan `opacity:0` pada elemen-elemen tersebut.
- [ ] Implement GSAP timeline utama di `Hero.tsx` (atau digeser ke `Navbar.tsx` bila perlu), dengan urutan wajib:
  - AAA (durasi ~2 detik) dulu, lalu nav-item, resume-button, hero-label/title/desc, social icons, profile image, profile ring.
- [ ] Jalankan `npm run build` untuk memastikan tidak ada error.

