# NextAuth Sozlash Yo'riqnomasi

## 1. GitHub OAuth sozlash

1. [GitHub Developer Settings](https://github.com/settings/developers) ga kiring
2. "New OAuth App" tugmasini bosing
3. Quyidagi ma'lumotlarni kiriting:
   - **Application name**: NextAuth Demo
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. "Register application" tugmasini bosing
5. **Client ID** va **Client Secret** ni `.env.local` fayliga qo'shing

## 2. Google OAuth sozlash

1. [Google Cloud Console](https://console.cloud.google.com/) ga kiring
2. Yangi project yarating yoki mavjudini tanlang
3. "APIs & Services" > "Credentials" ga o'ting
4. "Create Credentials" > "OAuth client ID" ni tanlang
5. Application type: **Web application**
6. Quyidagi ma'lumotlarni kiriting:
   - **Authorized JavaScript origins**: `http://localhost:3000`
   - **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google`
7. **Client ID** va **Client Secret** ni `.env.local` fayliga qo'shing

## 3. NEXTAUTH_SECRET yaratish

Terminal'da quyidagi buyruqni bajaring:

```bash
openssl rand -base64 32
```

Yoki Node.js bilan:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Natijani `.env.local` faylidagi `NEXTAUTH_SECRET` ga qo'shing.

## 4. .env.local faylini to'ldiring

```env
GITHUB_CLIENT_ID=sizning_github_client_id
GITHUB_CLIENT_SECRET=sizning_github_client_secret

GOOGLE_CLIENT_ID=sizning_google_client_id
GOOGLE_CLIENT_SECRET=sizning_google_client_secret

NEXTAUTH_SECRET=sizning_random_secret_key
NEXTAUTH_URL=http://localhost:3000
```

## 5. Loyihani ishga tushiring

```bash
npm run dev
```

## Test uchun

### DummyJSON Credentials:
- **Username**: emilys
- **Password**: emilyspass

Boshqa foydalanuvchilar: https://dummyjson.com/users

### Login sahifasi:
http://localhost:3000/login

## Xususiyatlar

✅ DummyJSON API bilan Credentials login
✅ GitHub OAuth
✅ Google OAuth
✅ Session management
✅ Protected routes
✅ User profile display
✅ Logout functionality
