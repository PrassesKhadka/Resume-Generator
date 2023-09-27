import React from "react";
import GitHubUser from "../utils/interfaces";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface Props {
  data: GitHubUser;
}

export const Dashboard = ({ data }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Left arrow and hire me section */}
      {data.name ? (
        <>
          <div className=" h-full w-full mb-4 flex justify-between items-start">
            <Link href="/">
              <ArrowLeft />
            </Link>
            {data.hireable ? (
              <button className="bg-orange text-white hover:bg-[orange] pr-12 pl-12 pt-1 pb-1 rounded-sm">
                Hire Me
              </button>
            ) : (
              <button className="bg-red-700 hover:cursor-not-allowed text-white pr-12 pl-12 pt-1 pb-1 rounded-sm">
                Hire Me
              </button>
            )}
          </div>

          {/* main dashboard */}
          <div className="border-2 border-slate-300 p-10 pb-0 pt-0 h-full w-full rounded-md">
            {/* name,email and photo */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[120px] w-[120px] -mt-12 rounded-full border-5 border-blue">
                <Image
                  height={120}
                  width={120}
                  src={data.avatar_url}
                  alt={`${data.name} profile image`}
                  className="w-full h-full object-cover rounded-full"
                ></Image>
              </div>
              <h1 className="m-1">{data.name}</h1>
              <a href={data.html_url} className="-mt-2">
                @{data.name.trim().toLowerCase().split(" ").join("_")}
              </a>
            </div>

            {/* Followers,following and repositories */}
            <div className="flex items-center justify-center">
              {/* followers */}
              <div className="flex flex-col items-center justify-center m-2">
                <p className="text-2xl m-2">{data.followers}</p>
                <button className="bg-slate-300 p-1 pr-3 pl-3 rounded-sm text-sm">
                  Followers
                </button>
              </div>

              {/* following */}
              <div className="flex flex-col items-center justify-center m-2">
                <p className="text-2xl m-2">{data.following}</p>
                <button className="bg-slate-300 p-1 pr-3 pl-3 rounded-sm text-sm">
                  Following
                </button>
              </div>

              {/* repos */}
              <div className="flex flex-col items-center justify-center m-2">
                <p className="text-2xl m-2">{data.public_repos}</p>
                <button className="bg-slate-300 p-1 pr-3 pl-3 rounded-sm text-sm">
                  Repositories
                </button>
              </div>
            </div>

            {/* info and bio */}
            <div className="flex items-start justify-between p-8">
              {/* info */}
              <div className="flex-1 grid grid-row-3 grid-cols-2 gap-5 border-2 m-5 p-5 border-slate-200 h-full w-full bg-white">
                <div>
                  <p>Email</p>
                  <p>{!data.email ? "-" : data.email}</p>
                </div>
                <div>
                  <p>Organization</p>
                  <p>{!data.company ? "-" : data.company}</p>
                </div>
                <div>
                  <p>Location</p>
                  <p>{!data.location ? "-" : data.location}</p>
                </div>
                <div>
                  <p>Joined Date</p>
                  <p>{!data.created_at ? "-" : data.created_at.slice(0, 10)}</p>
                </div>
                <div>
                  <p>Twitter</p>
                  <p>{!data.twitter_username ? "-" : data.twitter_username}</p>
                </div>
                <div>
                  <p>Website</p>
                  <a href={data.blog}>{!data.blog ? "-" : data.blog}</a>
                </div>
              </div>

              {/* bio */}
              <div className="flex-1 border-2 border-slate-20 m-5 p-5 h-full w-full">
                <h1>Bio</h1>
                <p>{data.bio}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <span>Name is not available</span>
      )}
    </div>
  );
};

export default Dashboard;
