# NextAuth Demo - To'liq Authentication Tizimi

Next.js 16 va NextAuth v4 bilan yaratilgan to'liq authentication tizimi.

## 🚀 Xususiyatlar

- ✅ **DummyJSON API** - Credentials login (username/password)
- ✅ **GitHub OAuth** - GitHub akkaunt bilan kirish
- ✅ **Google OAuth** - Google akkaunt bilan kirish
- ✅ **Session Management** - Foydalanuvchi sessiyasini boshqarish
- ✅ **Protected Routes** - Himoyalangan sahifalar
- ✅ **Responsive Design** - Barcha qurilmalarda ishlaydi
- ✅ **Tailwind CSS** - Zamonaviy dizayn

## 📦 O'rnatish

```bash
# Dependencies o'rnatish
npm install

# Development server ishga tushirish
npm run dev
```

Server http://localhost:3000 da ishga tushadi.

## 🔑 Test uchun

### DummyJSON Credentials Login

Quyidagi ma'lumotlar bilan login qilishingiz mumkin:

| Username | Password |
|----------|----------|
| emilys | emilyspass |
| michaelw | michaelwpass |
| sophiab | sophiabpass |

Barcha foydalanuvchilar: https://dummyjson.com/users

### GitHub va Google OAuth

GitHub va Google login ishlashi uchun OAuth sozlash kerak. Batafsil yo'riqnoma `SETUP.md` faylida.

## 📁 Loyiha Strukturasi

```
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts          # NextAuth API route
│   ├── components/
│   │   ├── header/
│   │   │   └── index.tsx             # Header komponenti
│   │   └── SessionProvider.tsx       # Session provider
│   ├── config/
│   │   └── index.ts                  # NextAuth konfiguratsiyasi
│   ├── login/
│   │   └── page.tsx                  # Login sahifasi
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Home sahifa
├── components/
│   └── ui/
│       └── button.tsx                # Button komponenti
├── .env.local                        # Environment variables
└── SETUP.md                          # OAuth sozlash yo'riqnomasi
```

## 🛠️ Texnologiyalar

- **Next.js 16** - React framework
- **NextAuth v4** - Authentication
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **DummyJSON API** - Test backend
- **Shadcn UI** - UI komponentlar

## 📝 Qanday ishlaydi?

1. **Login sahifasi** (`/login`) - 3 xil login usuli:
   - Username/Password (DummyJSON API)
   - GitHub OAuth
   - Google OAuth

2. **Home sahifa** (`/`) - Faqat login qilgan foydalanuvchilar ko'radi:
   - Foydalanuvchi ma'lumotlari
   - Profile rasmi
   - Logout tugmasi

3. **Header** - Barcha sahifalarda:
   - Navigation
   - Login holati
   - Logout funksiyasi

## 🔐 Environment Variables

`.env.local` faylida quyidagi o'zgaruvchilar mavjud:

```env
# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# NextAuth
NEXTAUTH_SECRET=your_random_secret_key
NEXTAUTH_URL=http://localhost:3000
```

## 📚 Qo'shimcha Ma'lumot

- NextAuth dokumentatsiyasi: https://next-auth.js.org
- DummyJSON API: https://dummyjson.com
- Next.js dokumentatsiyasi: https://nextjs.org/docs

## 🎯 Keyingi Qadamlar

1. `.env.local` faylini to'ldiring
2. `npm run dev` bilan ishga tushiring
3. http://localhost:3000/login ga o'ting
4. `emilys / emilyspass` bilan login qiling

GitHub va Google OAuth sozlash uchun `SETUP.md` faylini o'qing.

## 📄 License

MIT
