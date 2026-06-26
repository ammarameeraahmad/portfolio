<<<<<<< HEAD

# portfolio
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
=======
# AAA | Portfolio
>>>>>>> c8dc8dc (first init)

Personal portfolio website for web developer and data analyst.

## Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

## Cara Install

```bash
npm install
```

## Cara Run (Development)

```bash
npm run dev
```

Buka http://localhost:3000

## Cara Build

```bash
npm run build
```

## Cara Deploy ke Vercel

1. Push repository ke GitHub/GitLab/Bitbucket.
2. Buka https://vercel.com/new dan import repository.
3. Klik **Deploy**.
4. Tambahkan environment variables di Vercel Dashboard:
   - `GOOGLE_SHEETS_API_KEY`
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SHEET_RANGE` (default: `Portfolio!A:G`)

## Cara Menyambungkan Google Sheets

1. Buat Google Spreadsheet baru.
2. Buat sheet bernama **Portfolio**.
3. Set header kolom di baris pertama:
   `title`, `description`, `image`, `url`, `tags`, `featured`, `order`
4. Isi data portfolio mulai dari baris kedua.
5. Ambil **Sheet ID** dari URL spreadsheet:
   `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
6. Buat API key di [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
7. Aktifkan **Google Sheets API**.
8. Set spreadsheet menjadi **Anyone with the link can view**.
9. Masukkan API key dan Sheet ID ke file `.env.local`:

```env
GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_SHEET_RANGE=Portfolio!A:G
```

## Cara Mengganti Foto Profil

<<<<<<< HEAD
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
Ganti file `public/profile.jpg` dengan foto profil Anda.

## Cara Mengganti Resume

Masukkan file resume Anda ke `public/resume.pdf`.
>>>>>>> c8dc8dc (first init)
