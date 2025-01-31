# Struktur Folder FE

## 📁 Struktur Folder

```
📦 my-next-app
├── 📂 app                 # App Router (Next.js 15+)
│   ├── 📂 (auth)          # Group route untuk autentikasi
│   │   ├── 📂 login
│   │   │   ├── page.tsx   # Halaman login
│   │   │   ├── layout.tsx # Layout khusus login (opsional)
│   │   ├── 📂 register
│   │   │   ├── page.tsx   # Halaman register
│   ├── 📂 api             # Route handler untuk backend API
│   │   ├── 📂 auth
│   │   │   ├── route.ts   # API untuk autentikasi
│   ├── 📂 (home)          # Khusus "/"
│   │   ├── 📂 modules      # Komponen khusus halaman home
│   │   │   ├── CardFilters.ts
│   │   ├── page.tsx       # Halaman utama
│   │   ├── layout.tsx     # Layout khusus halaman utama
│   ├── 📂 contact         # Route "/contact"
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   ├── 📂 ...
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Entry point utama aplikasi
│   ├── loading.tsx        # Komponen loading global
│   ├── error.tsx          # Komponen error global
│   ├── not-found.tsx      # Komponen 404 global
│   ├── metadata.ts        # Metadata halaman
│   ├── sitemap.ts         # Sitemap untuk SEO
│   ├── middleware.ts      # Middleware Next.js
│
├── 📂 components          # Komponen UI yang bisa digunakan ulang
│   ├── Button.tsx
│   ├── Modal.tsx
│   ├── Input.tsx
│
├── 📂 services            # Service untuk API call
│   ├── authService.ts
│
├── 📂 layouts            # Layouts untuk Layout Custom
│   ├── MainLayout.tsx
│
├── 📂 validations         # Validasi input menggunakan Zod/Yup
│   ├── authValidation.ts
│
├── 📂 hooks               # Custom hooks untuk state atau API
│   ├── useAuth.ts
│
├── 📂 lib                 # Utility & helper functions
│   ├── axios.ts
│
├── 📂 types               # TypeScript types & interfaces
│   ├── auth.ts
│
├── 📂 constants           # Constants dan enums
│   ├── api.ts
│
├── 📂 config              # Konfigurasi aplikasi
│   ├── site.ts
│
├── 📂 styles              # File CSS atau Tailwind
│   ├── globals.css        # CSS global
│
├── 📂 public              # File statis (gambar, ikon, dll.)
│   ├── favicon.ico
│   ├── logo.png
│
├── .env                   # Environment variables
├── .gitignore             # File yang diabaikan Git
├── next.config.js         # Konfigurasi Next.js
├── tailwind.config.ts     # Konfigurasi Tailwind CSS
├── tsconfig.json          # Konfigurasi TypeScript
├── package.json           # Dependencies dan scripts
├── README.md              # Dokumentasi proyek
```

## 📌 Penjelasan Folder

# Struktur Folder Proyek

### 📂 `app` - App Router

- **Folder utama untuk routing aplikasi** menggunakan App Router

#### 📂 `(auth)` - Group route untuk autentikasi

- Mengelompokkan rute-rute terkait autentikasi pengguna.

  - 📂 `login`: Rute untuk halaman login.

    - `page.tsx`: Halaman login.
    - `layout.tsx`: Layout khusus untuk halaman login (opsional).

  - 📂 `register`: Rute untuk halaman registrasi.
    - `page.tsx`: Halaman registrasi.

#### 📂 `api` - Route handler untuk backend API, jika pakai api dari luar maka ini tidak usah dipakai

- Mengelompokkan rute API yang menangani request dari client ke backend.

  - 📂 `auth`: API untuk autentikasi pengguna.

    - `route.ts`: Menangani request terkait autentikasi.

#### 📂 `(home)` - Khusus route `/`

- Halaman utama aplikasi.

  - `page.tsx`: Halaman utama aplikasi.
  - `layout.tsx`: Layout khusus untuk halaman utama.

#### 📂 `contact` - Route untuk halaman `/contact`

- Halaman kontak aplikasi.

  - `page.tsx`: Halaman kontak.
  - `layout.tsx`: Layout untuk halaman kontak.

#### File terkait aplikasi:

- `layout.tsx`: Layout global yang digunakan di seluruh aplikasi.
- `loading.tsx`: Komponen loading yang digunakan di seluruh aplikasi.
- `error.tsx`: Komponen untuk menangani error global.
- `not-found.tsx`: Komponen untuk halaman 404 jika rute tidak ditemukan.
- `metadata.ts`: Metadata untuk halaman.
- `sitemap.ts`: Sitemap untuk SEO.
- `middleware.ts`: Middleware Next.js untuk pengaturan request.

---

### 📂 `components` - Komponen UI yang dapat digunakan ulang

- Menyimpan komponen UI yang reusable di berbagai bagian aplikasi.

  - `Button.tsx`: Komponen tombol.
  - `Modal.tsx`: Komponen modal.
  - `Input.tsx`: Komponen input.

### 📂 `services` - Service untuk API call

- Mengelola komunikasi API dengan backend.

  - `authService.ts`: Service yang menangani operasi autentikasi (login, registrasi, dll.).

### 📂 `validations` - Validasi input menggunakan Zod/Yup (jika perlu)

- Menyimpan skema validasi untuk input pengguna.

  - `authValidation.ts`: Validasi untuk form autentikasi (login, registrasi).

### 📂 `hooks` - Custom hooks untuk state atau API (jika perlu)

- Menyimpan hook yang digunakan untuk pengelolaan state atau komunikasi API.

  - `useAuth.ts`: Hook untuk menangani autentikasi pengguna.

### 📂 `lib` - Utility & helper functions

- Menyimpan fungsi utilitas atau helper yang digunakan di berbagai tempat dalam aplikasi.

  - `axios.ts`: Konfigurasi untuk instance axios (untuk melakukan API call).

### 📂 `types` - TypeScript types & interfaces (isinya menyesuaikan aja)

- Menyimpan tipe dan interface untuk TypeScript.

  - `auth.ts`: Tipe dan interface yang digunakan untuk autentikasi pengguna.

### 📂 `constants` - Constants dan enums

- Menyimpan konstanta dan enum yang digunakan di seluruh aplikasi.

  - `api.ts`: Konstanta terkait endpoint API.

### 📂 `config` - Konfigurasi aplikasi

- Menyimpan file konfigurasi aplikasi, seperti pengaturan situs.

  - `site.ts`: Pengaturan situs aplikasi, seperti nama dan URL.

### 📂 `styles` - File CSS

- Menyimpan file terkait styling.

  - `globals.css`: File CSS global yang digunakan di seluruh aplikasi.

### 📂 `public` - File statis (gambar, ikon, dll.)

- Menyimpan file yang dapat diakses langsung oleh pengguna (seperti gambar atau favicon).

  - `favicon.ico`: Ikon favicon aplikasi.
  - `logo.png`: Logo aplikasi.

---

### File Konfigurasi

- `.env`: Menyimpan environment variables.
- `.gitignore`: Menentukan file atau folder yang harus diabaikan oleh Git.
- `next.config.js`: Konfigurasi untuk Next.js.
- `tailwind.config.ts`: Konfigurasi untuk Tailwind CSS.
- `tsconfig.json`: Konfigurasi untuk TypeScript.
- `package.json`: Menyimpan dependencies dan script proyek.
- `README.md`: Dokumentasi untuk proyek.

---

## 📌 Catatan

- **Khusus folder `modules` untuk memisahkan komponen khusus di page tertentu.**
- **Gunakan `services/` untuk memisahkan API call dari komponen.**
- **Validasi input di `validations/` agar kode lebih bersih.**
- **Gunakan `constants/` untuk menyimpan nilai tetap agar mudah diubah nanti.**

---

### 🚀 Harap di baca jika tidak paham diharap bertanya!
