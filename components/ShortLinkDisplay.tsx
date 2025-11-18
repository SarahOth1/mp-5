"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function ShortLinkDisplay({alias}: {alias: string}) {
    const pathname = usePathname();
    console.log(pathname);
    //const searchParams = useSearchParams();
    const domain = window.location.origin
    return <div className="flex flex-col items-center">
        <p className="p-4 bg-pink-100 text-pink-800 font-serif">Your shortened URL:</p>
        <p className="p-4  text-pink-800 font-serif w-3/4 text-centerborder-black bg-pink-50">{domain}/r/{alias}</p>
    </div>

}