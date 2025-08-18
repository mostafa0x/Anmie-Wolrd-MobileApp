import { axiosClient } from "@/lib/api/axiosClient";
import { useQuery } from "@tanstack/react-query";

async function fetchData(url: string, filter: string) {
  const limitPerPage = 20;
  try {
    const res = await axiosClient.get(
      `${url}?limit=${limitPerPage}&filter=${filter}`
    );
    return res.data;
  } catch (err: any) {
    throw err;
  }
}

export function useTopAnmie(url: string, filter: string) {
  return useQuery({
    queryKey: [filter],
    queryFn: () => fetchData(url, filter),
  });
}
