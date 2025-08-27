import { axiosClient } from "@/lib/api/axiosClient";
import { useQuery } from "@tanstack/react-query";

async function fetchData(url: string, filter: string) {
  const limitPerPage = 10;

  const res = await axiosClient.get(
    `${url}?limit=${limitPerPage}&filter=${filter}&sfw=true`
  );
  if (res.data.error) {
    throw res.data.error;
  }

  return res.data;
}

export function useTopAnmie(url: string, filter: string) {
  return useQuery({
    queryKey: [filter],
    queryFn: () => fetchData(url, filter),
  });
}
