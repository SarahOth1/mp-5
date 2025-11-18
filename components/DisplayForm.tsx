"use client";
import {LinkType} from "@/types/LinkType";
import LinkForm from "./LinkForm";
import valid from "@/lib/valid";
export default function DisplayForm() {

    return (
        <div className="flex flex-col items-center mt-8">
            <div className=" border-2 w-3/4  p-8 m-4  flex flex-col items-center border-black bg-pink-50 mt-8">
                <h2 className="font-bold m-5 p-2 w-3/4 text-center text-xl text-pink-800 shadow-xl font-serif  border-2  border-black rounded ">Shorten a URL</h2>
                <p className="m-5 p-2 text-l w-1/2 text-center text-pink-800 shadow-xl font-serif  border-2 border-black bg-pink-50 rounded ">Enter a long URL to create a shorter, shareable link</p>
                <LinkForm valid={valid}/>
            </div>
        </div>
    );
}
