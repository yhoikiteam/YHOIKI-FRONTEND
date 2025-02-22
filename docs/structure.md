# Dokumentasi Struktur Folder

## 📁 Struktur Folder

```
📦 my-next-app
├── 📂 app                 # App Router (Next.js 15+)
│   ├── 📂 (auth)          # Group route untuk autentikasi
│   │   ├── 📂 login
│   │   │   ├── page.tsx   # Halaman login
│   │   │   ├── layout.tsx # Layout khusus login (opsional)
│   │   ├── 📂 register
│   │   │   ├── page.tsx   # Halaman registrasi
│   ├── 📂 (public)        # Group route untuk halaman yang tidak butuh autentikasi
│   │   ├── 📂 (home)
│   │   │   ├── 📂 _partials # Komponen khusus route home
│   │   │   │   ├── HomeSection.ts
│   │   │   ├── page.tsx   # Halaman utama
│   │   │   ├── layout.tsx # Layout khusus home (opsional)
│   │   ├── 📂 about
│   │   │   ├── 📂 partials # Komponen khusus route about
│   │   │   │   ├── AboutSection.ts
│   │   │   ├── page.tsx   # Halaman about
│   │   │   ├── layout.tsx # Layout khusus about (opsional)
│   │   ├── 📂 dst...
│   ├── 📂 (protected)     # Group route untuk halaman yang butuh autentikasi
│   │   ├── 📂 dashboard
│   │   │   ├── 📂 partials
│   │   │   │   ├── DashboardSection.ts
│   │   │   ├── page.tsx   # Halaman dashboard
│   │   │   ├── layout.tsx # Layout khusus dashboard (opsional)
│   │   ├── 📂 dst...
│   ├── 📂 api             # Route handler untuk backend API
│   │   ├── 📂 auth
│   │   │   ├── route.ts   # API untuk autentikasi
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Entry point utama aplikasi
│   ├── loading.tsx        # Komponen loading global
│   ├── error.tsx          # Komponen error global
│   ├── not-found.tsx      # Komponen 404 global
│   ├── metadata.ts        # Metadata halaman
│   ├── sitemap.ts         # Sitemap untuk SEO
│   ├── middleware.ts      # Middleware Next.js
│
├── 📂 components          # Komponen UI yang dapat digunakan ulang
│   ├── Button.tsx
│   ├── Modal.tsx
│   ├── Input.tsx
│
├── 📂 services            # Service untuk API call
│   ├── authService.ts
│
├── 📂 layouts             # Layouts untuk tampilan khusus
│   ├── MainLayout.tsx
│   ├── DashboardLayout.tsx
│   ├── dst...
│
├── 📂 validations         # Validasi input menggunakan Zod/Yup
│   ├── authValidation.ts
│
├── 📂 hooks               # Custom hooks untuk state atau API
│   ├── useAuth.ts
│
├── 📂 libs                # Helper functions dan konfigurasi eksternal
│   ├── axios.ts
│
├── 📂 types               # TypeScript types & interfaces
│   ├── auth.ts
│
├── 📂 constants           # Konstanta dan enums
│   ├── api.ts
│
├── 📂 config              # Konfigurasi aplikasi
│   ├── env.ts
│
├── 📂 utils               # Utility functions
│   ├── formatCurrency.ts
│   ├── cn.ts
│
├── 📂 public              # File statis (gambar, ikon, dll.)
│   ├── 📂 fonts
│   ├── 📂 images
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

### 📂 `app` - App Router

- Folder utama untuk routing aplikasi menggunakan App Router Next.js 15+.

### 📂 `(auth)` - Group route untuk autentikasi

- Mengelompokkan rute-rute autentikasi seperti login dan register.

### 📂 `api` - Route handler untuk backend API

- Jika menggunakan API dari luar, folder ini bisa diabaikan.

### 📂 `(public)` dan `(protected)` - Grouping Route

- **`(public)`** berisi halaman yang dapat diakses tanpa autentikasi.
- **`(protected)`** berisi halaman yang hanya bisa diakses setelah login.

### 📂 `partials` - Route handler untuk backend API

- Komponen khusus route tertentu sesuai dimana dia berada

### 📂 `components` - Komponen UI yang reusable

- Berisi komponen UI umum seperti tombol, modal, input, dll.

### 📂 `services` - Service untuk API call

- Memisahkan API call dari komponen untuk kode yang lebih bersih.

### 📂 `layouts` - Layouts untuk tampilan khusus

- Berisi berbagai layout yang digunakan dalam aplikasi.

### 📂 `validations` - Validasi input menggunakan Zod/Yup

- Menyimpan validasi untuk form login, registrasi, dll.

### 📂 `hooks` - Custom hooks

- Menyimpan hook yang digunakan untuk pengelolaan state atau API.

### 📂 `libs` - Helper functions dan konfigurasi

- Berisi fungsi utilitas seperti konfigurasi axios untuk API call.

### 📂 `types` - TypeScript types & interfaces

- Menyimpan tipe dan interface TypeScript agar lebih terorganisir.

### 📂 `constants` - Konstanta dan enums

- Menyimpan nilai tetap agar mudah dikelola dan diubah nanti.

### 📂 `config` - Konfigurasi aplikasi

- Berisi pengaturan environment dan konfigurasi lainnya.

### 📂 `utils` - Utility functions

- Berisi fungsi umum seperti format currency, manipulasi className, dll.

### 📂 `public` - File statis

- Berisi aset statis seperti gambar, ikon, dan font.

## 📌 Catatan

- **Gunakan folder `_partials` di dalam route tertentu untuk memisahkan komponent yang sifatnya tidak rouseble.**
- **Gunakan `/components` untuk memisahkan komponent yang sifatnya rouseble.**
- **Struktur ini fleksibel dan bisa disesuaikan sesuai kebutuhan proyek.**

### 🚀 Jika ada pertanyaan, silakan bertanya!
