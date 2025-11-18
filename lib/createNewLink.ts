"use server";
import {LinkType} from "@/types/LinkType"
import getCollection, {LINKS_COLLECTION} from "@/db";

export default async function createNewLink(
    link: string,
    alias: string
): Promise<LinkType> {
    console.log("Creating new link");
    const p = {
        linkUrl: link,
        alias: alias,
    }

    const linksCollection = await getCollection(LINKS_COLLECTION);
    const res = await linksCollection.insertOne({...p});

    if (!res.acknowledged) {
        throw new Error("DB insert failed")
    }
    return {...p, id: res.insertedId.toHexString()};
}