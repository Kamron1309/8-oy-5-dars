"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  // Loading va Xatolik holatlari uchun oddiy state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Sahifa yangilanib ketishini oldini oladi
    setIsLoading(true);
    setError(null);

    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!name || !password) {
      setError("Iltimos, barcha maydonlarni to'ldiring!");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signIn("credentials", {
        name,
        password,
        redirect: false, // O'zimiz boshqaramiz
      });

      if (result?.error) {
        setError("Login yoki parol noto'g'ri!");
      } else {
        // Muvaffaqiyatli kirganda:
        router.refresh(); // Sessiyani yangilash
        router.push("/"); // Asosiy sahifaga yo'naltirish
      }
    } catch (err) {
      setError("Tizimda xatolik yuz berdi.");
    } finally {
      setIsLoading(false);
    }
  };

  // Agar foydalanuvchi allaqachon kirgan bo'lsa
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-xl mb-4 font-semibold text-gray-800">
            Salom, {session.user?.name}
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Chiqish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 px-4">
      <div className="p-10 mx-auto md:w-full md:max-w-md bg-white shadow-lg rounded-xl">
        <h1 className="font-bold text-center text-2xl mb-6 text-gray-800">Tizimga kirish</h1>

        {/* Xatolik xabari */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
            {error}
          </div>
        )}

        {/* FORM ishlatildi (Enter bosganda ishlashi uchun) */}
        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
          <div className="py-4 space-y-4">
            <div>
              <label className="font-semibold text-sm text-gray-600 block mb-1">
                Name
              </label>
              <input
                ref={nameRef}
                type="text"
                disabled={isLoading}
                className="border rounded-lg px-3 py-2 text-sm w-full text-black outline-none focus:ring-2 focus:ring-blue-500 transition disabled:bg-gray-100"
                placeholder="Ismingizni kiriting"
              />
            </div>

            <div>
              <label className="font-semibold text-sm text-gray-600 block mb-1">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                disabled={isLoading}
                className="border rounded-lg px-3 py-2 text-sm w-full text-black outline-none focus:ring-2 focus:ring-blue-500 transition disabled:bg-gray-100"
                placeholder="Parolingizni kiriting"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2.5 rounded-lg text-sm font-semibold text-white transition duration-200 ${
                isLoading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Yuklanmoqda..." : "Kirish"}
            </button>
          </div>
        </form>

        {/* Social Login */}
        <div className="pt-5 grid grid-cols-2 gap-3">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            type="button"
            className="border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700 flex items-center justify-center gap-2"
          >
            Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            type="button"
            className="border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700 flex items-center justify-center gap-2"
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;