
"use client";
import {Link, Textarea} from "@mui/joy";
import {FormEvent, useState} from "react";
import {Button, FormHelperText, TextField} from "@mui/material";
import {LinkType} from "@/types/LinkType";
import createNewLink from "@/lib/createNewLink";
import {useParams} from "next/navigation";
import ShortLinkDisplay from "@/components/ShortLinkDisplay";


export default function LinkForm(
    {valid,
    }: {
        valid: (newUrl: string, newAlias: string) => Promise<void>;
    }
) {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");
    const [createdLink, setCreatedLink] = useState<LinkType|null>(null); // track successful submission

    return (
        <form
            className="w-1/2 rounded-xl m-4 p-4 bg-pink-100 border-2 text-center"
            onSubmit={async (event) => {
                event.preventDefault();
                try {
                    await valid(url, alias);
                    const newLink = await createNewLink(url, alias);
                    setCreatedLink(newLink);
                    setError("")
                } catch (err: any) {
                    setError("Either your URL is invalid or the alias is already taken. Please try again.");
                }
            }}>
            <TextField
                variant="filled"
                sx={{backgroundColor: "white", width: "100%",  bgcolor: "white",}}
                label="your-chosen-URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <Textarea
                sx={{padding: "0.5rem",
                    height: "100px",
                    width: "100%",
                    borderRadius: 0,
                    bgcolor: "white",
                }}
                variant="soft"
                placeholder="your-custom-alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <FormHelperText>URL must be valid</FormHelperText>
            <div className="w-full flex justify-center">
                <Button
                    sx={{width: "80px", margin: "5%", color: "darkred", bgcolor: "white"}}
                    variant="contained"
                    type="submit"
                    disabled={url === "" || alias === ""}>

                    Create
                </Button>

            </div>
            <div><p className=" p-4 bg-pink-100 text-pink-800 font-serif">{error}</p></div>
            {createdLink && error==="" && <ShortLinkDisplay alias={alias}/> }

            {/*<Link href={`/r/${alias}`}>LINK TO URL</Link>*/}

        </form>
    );
}