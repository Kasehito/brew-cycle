# 🚀 QUICK START - Upload BrewCycle ke Vercel

Ikuti langkah ini dengan urutan yang benar.

---

## 🔴 PERSIAPAN (Lakukan 1x)

### 1. Install Git
Download dari https://git-scm.com/
Setelah install, buka Terminal/PowerShell

### 2. Buat GitHub Account
Daftar di https://github.com (gratis)

### 3. Buat Vercel Account
Daftar di https://vercel.com (gratis)

---

## 🟡 SETUP PROJECT

### 1. Buka Terminal di Folder Project

```powershell
cd c:\Users\royac\Documents\Coding\Learn\brew-cycle
```

### 2. Inisialisasi Git

```powershell
git init
git config user.name "Nama Anda"
git config user.email "email@example.com"
```

### 3. Tambahkan Remote Repository

Setelah membuat repo baru di GitHub, copy URL-nya. Contoh: `https://github.com/username/brew-cycle.git`

```powershell
git remote add origin https://github.com/username/brew-cycle.git
```

### 4. Push Code ke GitHub

```powershell
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

---

## 🟢 DEPLOY KE VERCEL

### 1. Buka Vercel Dashboard
https://vercel.com/dashboard

### 2. Click "Add New..." > "Project"

### 3. Import dari GitHub
- Cari repository "brew-cycle"
- Click "Import"

### 4. Configure Project
- **Project Name**: brewcycle
- **Framework Preset**: Laravel
- **Root Directory**: ./

### 5. Set Environment Variables

Click "Environment Variables" dan tambahkan:

| Key | Value |
|-----|-------|
| APP_KEY | base64:GENERATE_DENGAN_ARTISAN |
| APP_NAME | BrewCycle |
| APP_ENV | production |
| APP_DEBUG | false |
| APP_URL | https://brewcycle.vercel.app |
| LOG_CHANNEL | single |

**Untuk APP_KEY**, jalankan di terminal lokal:
```powershell
php artisan key:generate
```

Copy value dari `.env` (dimulai dengan "base64:")

### 6. Click "Deploy"

Tunggu proses build. Ini bisa 3-5 menit.

### 7. ✅ Selesai!

Setelah deployment berhasil, Anda akan mendapat URL seperti:
```
https://brewcycle.vercel.app
```

---

## 📱 TESTING SETELAH DEPLOY

1. Buka URL di browser
2. Test semua halaman:
   - Homepage (/)
   - Partnership (/partnership)
3. Cek apakah style & asset loading dengan baik

---

## 🔄 UPDATE SETELAH DEPLOY

Setiap kali ingin update:

```powershell
git add .
git commit -m "Update: deskripsi perubahan"
git push origin main
```

Vercel akan otomatis build dan deploy ulang!

---

## ⚠️ MASALAH UMUM & SOLUSI

### Error: "Build failed"
- Check logs di Vercel dashboard
- Pastikan `composer.json` dan `package.json` valid
- Pastikan `.env.example` sudah ada

### Error: "APP_KEY not set"
- Generate APP_KEY dengan: `php artisan key:generate`
- Copy ke Vercel environment variables

### Database tidak ada
- SQLite akan di-create otomatis
- Untuk production, upgrade ke MySQL/PostgreSQL

### Asset tidak loading
- Pastikan `npm run build` berhasil
- Check `public/build` folder ada

---

## ✨ NEXT STEPS

1. Setup custom domain (optional)
   - Di Vercel > Project > Settings > Domains
   - Add domain Anda

2. Setup email notifications
   - Agar notif kalau deploy gagal

3. Backup database
   - Export SQLite sebelum production

---

**Butuh bantuan?**
- Vercel Docs: https://vercel.com/docs
- Laravel Docs: https://laravel.com/docs
- GitHub Docs: https://docs.github.com
