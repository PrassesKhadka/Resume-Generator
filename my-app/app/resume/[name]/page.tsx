"use client";

import axios from "axios";
import GitHubUser from "../../utils/interfaces";
import { useQuery } from "@tanstack/react-query";
import Dashboard from "../../components/dashboard";

interface Params {
  name: string;
}

interface Props {
  params: Params;
}

export const Resume = ({ params }: Props) => {
  const { data, isLoading, isError } = useQuery<GitHubUser>({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${params.name}`
      );
      return data;
    },
  });

  if (isLoading) return "Loading ...";
  if (isError) return "An error has occured ";

  return (
    <div className="h-full w-full p-10">
      {data ? (
        <Dashboard data={data} />
      ) : (
        "Failed to retrieve data from the server"
      )}
    </div>
  );
};

export default Resume;
