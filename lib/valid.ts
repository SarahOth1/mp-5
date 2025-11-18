"use server";
import {LinkType} from "@/types/LinkType";
import getCollection, {LINKS_COLLECTION} from "@/db";

export default async function valid(newUrl:string, newAlias:string) {
    const res = await fetch(newUrl);

    if (res.status > 299) {
        throw new Error("Your chosen URL is invalid")
    } else {
        const linksCollection = await getCollection(LINKS_COLLECTION);
        const data = await linksCollection.find(
            {alias: newAlias,
        }).toArray();
        if (data.length > 0) {

            throw new Error("Your chosen alias already exists");
        }
    }

}