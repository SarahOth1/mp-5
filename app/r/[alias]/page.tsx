import {redirect} from "next/navigation";
import getLinkByAlias from "@/lib/getLinkByAlias";

export default async function LinkPage( alias: string) {
    //const {alias} =  params;
    console.log("this is the alias: "+alias);

    // try {
        const link = await getLinkByAlias(alias);
        if (link) {
             redirect(link);
        } else {

        }
    // } catch (error) {
    //     console.error(error);
    //     return redirect("/");
    // }



}