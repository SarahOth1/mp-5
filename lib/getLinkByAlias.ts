import getCollection, {LINKS_COLLECTION} from "@/db";
import {ObjectId} from "mongodb";
import {LinkType} from "@/types/LinkType";

export default async function getLinkByAlias(
    alias: string,

) : Promise<string | null> {
    //const postId =ObjectId.createFromHexString(id);
    const linksCollection = await getCollection(LINKS_COLLECTION);

    const data = await linksCollection.findOne({alias});

    if (!data ) {
        return null;
    }

    return data.linkUrl

}