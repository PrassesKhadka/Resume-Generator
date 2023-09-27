"use client";

import axios from "axios";
import GitHubUser from "../../utils/interfaces";
import { useQuery } from "@tanstack/react-query";
import Dashboard from "../../components/dashboard";
import { Loader } from "lucide-react";

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

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Loader className="animate-spin" />
      </div>
    );
  if (isError)
    return (
      <div className="text-2xl font-semibold uppercase flex justify-center items-center h-screen w-screen">
        An error has occured while fetching data
      </div>
    );

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
