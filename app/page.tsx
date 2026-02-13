"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Xush kelibsiz! 👋
        </h1>
        
        {session.user?.image && (
          <img
            src={session.user.image}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-indigo-200"
          />
        )}

        <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Ism:</span>
            <span className="text-gray-800">{session.user?.name || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Email:</span>
            <span className="text-gray-800 text-sm">{session.user?.email || "N/A"}</span>
          </div>
        </div>

        <Button
          onClick={() => signOut({ callbackUrl: "/login" })}
          variant="destructive"
          className="w-full"
        >
          Chiqish
        </Button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          ℹ️ Ma'lumot
        </h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>✅ Siz muvaffaqiyatli tizimga kirdingiz</p>
          <p>✅ Session aktiv</p>
          <p>✅ NextAuth ishlayapti</p>
        </div>
      </div>
    </div>
  );
}
