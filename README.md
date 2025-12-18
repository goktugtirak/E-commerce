# 🛡️ Secure E-Commerce REST API (DevSecOps Focus)

![CI/CD Pipeline](https://github.com/goktugtirak/E-commerce/actions/workflows/main.yml/badge.svg)
![Security Status](https://img.shields.io/badge/Security-Snyk%20%26%20Gitleaks-blue)
![Docker Image](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)
![Uptime](https://img.shields.io/badge/Status-Live-success)

## 🚀 Proje Hakkında
Bu proje, modern **DevSecOps** prensipleri kullanılarak geliştirilmiş, güvenli ve ölçeklenebilir bir E-Ticaret Backend altyapısıdır.

Projenin temel amacı, sadece çalışan bir API yazmak değil; güvenli kod geliştirme yaşam döngüsünü (SDLC) otomatize etmek ve canlı sisteme (Production) güvenli bir dağıtım hattı kurmaktır.

**🔗 Canlı URL (Base Endpoint):** [https://nodejs-shop-project-q4r3.onrender.com](https://nodejs-shop-project-q4r3.onrender.com)

---

## ⚙️ DevSecOps Pipeline Mimarisi

Her `git push` işlemi, GitHub Actions üzerinde çalışan şu güvenlik ve otomasyon adımlarını tetikler:

1.  **Secret Scanning (Gitleaks):** Kod içerisine yanlışlıkla eklenmiş şifre veya API anahtarlarını tespit eder ve işlemi durdurur.
2.  **Static Code Analysis (Linting):** Kod standartlarını kontrol eder.
3.  **SCA (Software Composition Analysis):** `Snyk` kullanarak bağımlılıklardaki (dependencies) güvenlik açıklarını tarar.
4.  **Containerization:** Uygulamayı `Docker` ile paketler ve Docker Hub'a gönderir (Build & Push).
5.  **Automated Deployment:** Güncel ve güvenli imajı otomatik olarak `Render` bulut sunucusuna dağıtır.

---

## 🛠️ Teknoloji Yığını (Tech Stack)

* **Backend:** Node.js, Express.js
* **Veritabanı:** MongoDB Atlas (Cloud)
* **DevOps:** Docker, GitHub Actions
* **Güvenlik Araçları:** Snyk, Gitleaks, NPM Audit
* **Cloud Provider:** Render

---

## 💻 Kurulum ve Çalıştırma

Projeyi lokal ortamda test etmek için:

1.  **Repoyu Klonlayın:**
    ```bash
    git clone [https://github.com/goktugtirak/E-commerce.git](https://github.com/goktugtirak/E-commerce.git)
    cd E-commerce/server
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Environment Variables (.env):**
    `server` klasörü içinde `.env` dosyası oluşturun:
    ```env
    MONGO_URI=your_mongodb_atlas_connection_string
    SESSION_SECRET=your_random_secret
    PORT=3000
    NODE_ENV=development
    ```

4.  **Başlatın:**
    * Geliştirme Modu: `npm run dev` (Nodemon ile)
    * Production Modu: `npm start` (Node ile)

---

## 📧 İletişim
**Göktuğ Tırak**
* 💼 LinkedIn: [Göktuğ Tırak](https://www.linkedin.com/in/g%C3%B6ktu%C4%9F-t%C4%B1rak/)
* 🐙 GitHub: [@goktugtirak](https://github.com/goktugtirak)