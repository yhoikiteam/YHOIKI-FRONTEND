# Dokumentasi Konfigurasi ESLint, Prettier, dan Husky

Dokumentasi ini menjelaskan konfigurasi dan fungsi dari **ESLint**, **Prettier**, dan **Husky** dalam proyek **Yhoiki** menggunakan **TypeScript**. Ketiga alat ini bekerja bersama untuk memastikan kode tetap rapi, sesuai standar, dan bebas dari kesalahan sebelum dikomit ke repository.

## 1. ESLint

**ESLint** adalah alat untuk mendeteksi dan memperbaiki masalah dalam kode JavaScript/TypeScript. Dalam proyek ini, konfigurasi ESLint telah disesuaikan dengan standar terbaik untuk **Next.js**, **TypeScript**, dan **Prettier**.

### Penjelasan Konfigurasi

- **extends**: Mewarisi aturan dari berbagai konfigurasi yang direkomendasikan:

  - `next/core-web-vitals`: Aturan khusus untuk proyek Next.js agar sesuai dengan praktik terbaik.
  - `next`: Aturan tambahan dari framework Next.js.
  - `plugin:@typescript-eslint/recommended`: Aturan untuk TypeScript dari ESLint.
  - `plugin:prettier/recommended`: Mengintegrasikan Prettier dengan ESLint agar format kode sesuai standar Prettier.

- **plugins**:

  - `@typescript-eslint`: Plugin untuk mendukung aturan TypeScript.
  - `prettier`: Plugin untuk memastikan format kode sesuai Prettier.
  - `tailwindcss`: Plugin untuk memastikan urutan class Tailwind rapi.

- **parser**: Menggunakan `@typescript-eslint/parser` agar ESLint bisa memahami sintaks TypeScript.

- **parserOptions**: Menentukan proyek TypeScript yang digunakan (`tsconfig.json`).

- **ignorePatterns**: Mengabaikan direktori yang tidak perlu diperiksa (`node_modules`, `.next`, `dist`).

- **rules**:
  - `@typescript-eslint/no-unused-vars`: Memperingatkan jika ada variabel yang tidak digunakan.
  - `@typescript-eslint/no-explicit-any`: Memperingatkan jika menggunakan `any` secara eksplisit.
  - `@typescript-eslint/consistent-type-imports`: Mendorong penggunaan impor tipe yang konsisten.
  - `prettier/prettier`: Memastikan kode tetap sesuai aturan Prettier.
  - `tailwindcss/classnames-order`: Memastikan urutan class Tailwind sesuai standar.

## 2. Prettier

**Prettier** digunakan untuk memformat kode secara otomatis agar tetap konsisten dalam proyek.

### Penjelasan Konfigurasi

- **semi**: `true` → Menambahkan titik koma di akhir pernyataan.
- **tabWidth**: `2` → Menggunakan indentasi 2 spasi.
- **singleQuote**: `false` → Menggunakan tanda kutip ganda untuk string.
- **trailingComma**: `all` → Menambahkan koma di akhir objek dan array agar lebih mudah dibaca dalam diffs.
- **bracketSpacing**: `true` → Menambahkan spasi di dalam kurung kurawal.
- **arrowParens**: `always` → Selalu menggunakan tanda kurung pada parameter fungsi panah.
- **endOfLine**: `lf` → Menggunakan **Line Feed (LF)** sebagai akhir baris.
- **plugins**:

  - `@trivago/prettier-plugin-sort-imports`: Mengurutkan impor agar lebih terstruktur.
  - `prettier-plugin-tailwindcss`: Mengurutkan class Tailwind secara otomatis.

- **importOrder**: Mengatur urutan impor berdasarkan kategori:
  - `react` dan `next` diurutkan pertama.
  - Modul pihak ketiga (`<THIRD_PARTY_MODULES>`) diletakkan setelahnya.
  - Impor dari proyek (`@/`) sebelum impor relatif (`./`).

## 3. Husky

**Husky** digunakan untuk menjalankan perintah sebelum commit agar memastikan kode yang dikomit sudah memenuhi standar.

### Penjelasan Konfigurasi

Husky dikonfigurasi dengan hook `pre-commit`, yang akan menjalankan **lint-staged** dan build sebelum commit dilakukan.

- **Lint-Staged**: Memeriksa dan memperbaiki kode yang mengalami perubahan sebelum commit.
- **Build Check**: Memastikan kode bisa dikompilasi tanpa error sebelum commit diterima.

### Isi `.husky/pre-commit`

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Jalankan lint-staged untuk validasi kode
if ! npx lint-staged; then
  echo 'Linting failed. Please fix the issues and try again.'
  exit 1
fi

# Jalankan build untuk memastikan kode tidak rusak
if ! npm run build; then
  echo 'Build failed. Please fix the errors above and try again.'
  exit 1
fi

# Jika semua berhasil
echo 'All checks passed. Proceeding with commit...'
exit 0
```

## Kesimpulan

- **ESLint**: Menjaga kualitas kode dengan mendeteksi kesalahan dan memastikan standar yang ketat.
- **Prettier**: Memformat kode secara otomatis untuk menjaga konsistensi.
- **Husky**: Menjalankan pemeriksaan sebelum commit agar kode yang masuk ke repository selalu dalam kondisi baik.

Dengan konfigurasi ini, proyek akan lebih mudah dikelola dan terhindar dari masalah kode yang tidak terformat atau tidak sesuai standar.
