"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function ShortLinkDisplay({alias}: {
    alias: string
}) {
    const pathname = usePathname();
    //const searchParams = useSearchParams();

    return <p className="p-4 bg-pink-100 text-pink-800 font-serif">Your shortened URL: {pathname}/r/{alias}</p>;
}