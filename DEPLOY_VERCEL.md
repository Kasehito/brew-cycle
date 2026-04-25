# 🚀 Panduan Deploy BrewCycle ke Vercel

Berikut adalah langkah-langkah lengkap untuk mengupload project BrewCycle ke Vercel.

## ✅ Prerequisites

Sebelum memulai, pastikan Anda sudah memiliki:

1. **Git** - Sudah terinstall dan configured
2. **GitHub Account** - Untuk push code
3. **Vercel Account** - Daftar di https://vercel.com
4. **Terminal/PowerShell** - Untuk menjalankan command

---

## 📋 Step-by-Step Guide

### **Step 1: Persiapkan GitHub Repository**

Jika belum ada repository, buat yang baru:

```powershell
# Buka folder project
cd c:\Users\royac\Documents\Coding\Learn\brew-cycle

# Initialize git (jika belum)
git init

# Add remote repository
git remote add origin https://github.com/USERNAME/brew-cycle.git
# Ganti USERNAME dengan username GitHub Anda
```

### **Step 2: Push Code ke GitHub**

```powershell
# Add all files
git add .

# Commit
git commit -m "Initial commit: BrewCycle project ready for deployment"

# Push ke GitHub (pastikan branch main/master)
git branch -M main
git push -u origin main
```

### **Step 3: Setup Environment Variables di Vercel**

Setelah project di GitHub, buat environment variables:

1. Buka https://vercel.com/dashboard
2. Klik "New Project"
3. Import dari GitHub repository brew-cycle
4. Di tahap Environment Variables, tambahkan:

```
APP_KEY=                    # Akan di-generate
APP_NAME=BrewCycle
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.vercel.app
LOG_CHANNEL=single
DB_CONNECTION=sqlite
SESSION_DRIVER=database
QUEUE_CONNECTION=database
CACHE_STORE=database
```

### **Step 4: Generate APP_KEY**

Jika Anda tidak memiliki APP_KEY, generate dengan command:

```powershell
php artisan key:generate
```

Copy value dari `.env` file yang dimulai dengan "base64:"

Di Vercel environment variables, set:
```
APP_KEY=base64:YOUR_KEY_HERE
```

### **Step 5: Configure Build & Deployment**

Di Vercel settings:

**Build Command:**
```
npm run build && php artisan optimize
```

**Start Command:**
```
npm run dev
```

**Output Directory:**
```
public
```

### **Step 6: Deploy**

1. Klik "Deploy" di Vercel
2. Tunggu proses build selesai
3. Setelah selesai, Anda akan mendapat URL deployment

---

## 🔧 Troubleshooting

### ❌ Error: "PHP version not compatible"
**Solusi:** Pastikan `.php-version` file ada di root project dengan konten:
```
8.3
```

### ❌ Error: "Cannot find module 'vite'"
**Solusi:** Pastikan `npm install` berhasil. Check `package.json` sudah benar.

### ❌ Error: "APP_KEY not set"
**Solusi:** Generate APP_KEY dan set di environment variables Vercel.

### ❌ Database Error
**Solusi:** Karena menggunakan SQLite, database file harus di folder yang writable. Vercel sudah support ini.

---

## 🌐 Alternative Hosting Options

Jika ingin menggunakan hosting lain:

### **Railway.app** (Recommended untuk Laravel)
```bash
railway link
railway up
```

### **Heroku**
```bash
heroku create brewcycle
git push heroku main
```

### **DigitalOcean App Platform**
- Connect GitHub repository
- Set buildpack ke PHP
- Set start command

---

## 📝 Important Notes

1. **SQLite Database**: Vercel ephemeral filesystem berarti database akan di-reset setiap deploy. Untuk production, gunakan PostgreSQL atau MySQL.

2. **Static Assets**: Pastikan asset di-generate dengan `npm run build` sebelum deploy.

3. **Environment Variables**: Jangan commit `.env` file. Gunakan environment variables di Vercel.

4. **Build Duration**: Free tier Vercel memiliki timeout 60 detik untuk build.

---

## ✨ Setelah Deploy Berhasil

1. Test semua halaman:
   - Homepage: `/`
   - Partnership: `/partnership`
   - Navbar links

2. Check console di browser untuk errors

3. Monitor logs di Vercel dashboard

4. Setup custom domain (optional):
   - Di Vercel dashboard > Settings > Domain
   - Update APP_URL di environment variables

---

## 🎉 Selesai!

Project BrewCycle sekarang live di Vercel!

Untuk update selanjutnya, cukup push ke GitHub dan Vercel akan otomatis deploy.

```bash
git add .
git commit -m "Update: new features"
git push origin main
```

---

**Pertanyaan?** Hubungi team development Anda atau check Vercel documentation: https://vercel.com/docs
