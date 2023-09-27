"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export const Main = () => {
  const [name, setName] = useState("");
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Github Profile</h1>
        <h2 className="text-slate-400 -mt-2 mb-4">
          Generate your Github Profile
        </h2>
        <form className="items-center">
          <input
            onChange={(e) => {
              setName(e.target.value.trim().split(" ").join(""));
            }}
            type="text"
            placeholder="Github Username"
            className="p-1 outline-none border-2 border-slate-400 rounded-sm"
          ></input>
          <Link href={`resume/${name}`}>
            <button
              type="submit"
              className="bg-orange hover:bg-red-200 text-white text-center text-sm pr-8 pl-8 pt-1 pb-1 ml-3 rounded-md"
            >
              Generate
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;
