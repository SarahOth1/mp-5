import getCollection, {LINKS_COLLECTION} from "@/db";
import {ObjectId} from "mongodb";
import {LinkType} from "@/types/LinkType";

export default async function getLinkByAlias(
    alias: string,

) : Promise<LinkType | null> {
    //const postId =ObjectId.createFromHexString(id);
    const linksCollection = await getCollection(LINKS_COLLECTION);

    const data = await linksCollection.findOne({alias});

    if (!data ) {
        return null;
    }

    return {
        id: data._id.toString(),
        linkUrl: data.linkUrl,
        alias: data.alias,
    };

}