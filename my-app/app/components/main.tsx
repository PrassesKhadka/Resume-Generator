"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export const Main = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Github Profile</h1>
      <h2>Generate your Github Profile</h2>
      <form>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Github Username"
        ></input>
        <Link href={`resume/${name}`}>
          <button type='submit'>Generate</button>
        </Link>
      </form>
    </div>
  );
};

export default Main;
