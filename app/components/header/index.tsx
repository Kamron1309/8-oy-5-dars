import Link from "next/link";
import React from "react";

const Header=()=>{
    return(
        <header className="flex items-center justify- center gap-4 bg-red-500 p-4">
        <link href={"/"}>home</link>
        <link href={"/login"}>login</link>
        </header>
    );
};

export default Header;