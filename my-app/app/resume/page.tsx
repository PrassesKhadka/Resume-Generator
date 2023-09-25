"use client";

import React, { useEffect } from "react";
import axios from "axios";
import GitHubUser from "../interfaces";
import { useQuery } from "@tanstack/react-query";

export const resume = () => {
  const { data, isLoading, isError } = useQuery<GitHubUser>({
    queryKey: ["user"],
    queryFn: async () => {
      const req = axios.get("https://api.github.com/users/prasseskhadka");
      const res = await req;
      return res.data;
    },
  });

  if (isLoading) return "Loading ...";
  if (isError) return "An error has occured ";

  return <div>{data && <div>{data.name}</div>}</div>;
};

export default resume;
