import {redirect} from "next/navigation";
import getLinkByAlias from "@/lib/getLinkByAlias";

export default async function LinkPage(
    {params,} : {params: { alias: string } }
) {
    const {alias} =  params;
    try {
        const link = await getLinkByAlias(alias);
        if (link) {
            return redirect(link.linkUrl);
        } else {
            return redirect("/");
        }
    } catch (error) {
        console.error(error);
        return redirect("/");
    }



}