import React from "react";
import Link from "next/link";

export const Main = () => {
  return (
    <div>
      <h1>Github Profile</h1>
      <h2>Generate your Github Profile</h2>
      <form>
        <input type="text" placeholder="Github Username"></input>
        <Link href="resume">
          <button type="submit">Generate</button>
        </Link>
      </form>
    </div>
  );
};

export default Main;
