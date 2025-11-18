import {redirect} from "next/navigation";
import getLinkByAlias from "@/lib/getLinkByAlias";

export default async function LinkPage({params,}: {params: Promise<{alias: string}>;}) {
    const {alias} =  await params;
    console.log("this is the alias: "+alias);

    try {
        const link = await getLinkByAlias(alias);
        if (link) {
             redirect(link);
        } else {
            redirect("/");
        }
    } catch (error) {
        console.error(error);
        return redirect("/");
    }



}