"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Header = () => {
    const { data: session } = useSession();

    return (
        <header className="flex items-center justify-between gap-4 bg-red-500 p-4 text-white">
            <div className="flex gap-4">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                {!session && (
                    <Link href="/login" className="hover:underline">
                        Login
                    </Link>
                )}
            </div>
            
            {session && (
                <div className="flex items-center gap-4">
                    <span className="text-sm">
                        {session.user?.name || session.user?.email}
                    </span>
                    <Button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        variant="secondary"
                        size="sm"
                    >
                        Chiqish
                    </Button>
                </div>
            )}
        </header>
    );
};

export default Header;