import React from "react";
import GitHubUser from "../utils/interfaces";

interface Props {
  data: GitHubUser;
}

export const Dashboard = ({ data }: Props) => {
  return (
    <div className="border-8 border-yellow h-screen w-screen flex flex-col bg-red-300 justify-center items-center">
      <div className="border-2 border-black p-10">
        {/* name,email and photo */}
        <div className="flex flex-col items-center justify-center">
          <div className="h-[150px] w-[150px] rounded-full border-5 border-blue">
            <img
              src={data.avatar_url}
              alt={`${data.name} profile image`}
              className="w-full h-full object-cover rounded-full"
            ></img>
          </div>
          <h1>{data.name}</h1>
          <a href={data.html_url}>@github</a>
        </div>

        {/* Followers,following and repositories */}
        <div className="flex items-center justify-center">
          {/* followers */}
          <div className="flex flex-col items-center justify-center m-2">
            <p>{data.followers}</p>
            <button>Followers</button>
          </div>

          {/* following */}
          <div className="flex flex-col items-center justify-center m-2">
            <p>{data.following}</p>
            <button>Following</button>
          </div>

          {/* repos */}
          <div className="flex flex-col items-center justify-center m-2">
            <p>{data.public_repos}</p>
            <button>Repositories</button>
          </div>
        </div>

        {/* info and bio */}
        <div className="flex items-center justify-between border-2">
          {/* info */}
          <div className="grid grid-row-3 grid-cols-2 border-2 m-5 p-2 border-black h-full w-full bg-white">
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
              <p>{!data.created_at ? "-" : data.created_at}</p>
            </div>
            <div>
              <p>Twitter</p>
              <p>{!data.twitter_username ? "-" : data.twitter_username}</p>
            </div>
            <div>
              <p>Website</p>
              <p>{!data.blog ? "-" : data.blog}</p>
            </div>
          </div>

          {/* bio */}
          <div className="h-full w-full border-2 border-black m-5 p-2">
            <h1>Bio</h1>
            <p>{data.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
