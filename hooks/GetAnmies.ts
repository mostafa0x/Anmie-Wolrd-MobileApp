import { axiosClient } from "@/lib/api/axiosClient";
import { useInfiniteQuery } from "@tanstack/react-query";

async function featchData(pageParam: number, url: string, filter: string) {
  if (!url || !pageParam) return;
  const limitPerPage = 12;
  try {
    const res = await axiosClient.get(
      `${url}?page=${pageParam}&limit=${limitPerPage}&status=${filter}`
    );
    return res.data;
  } catch (err: any) {
    throw err;
  }
}
export function useAnmieByCategory(url: string, filter: string) {
  return useInfiniteQuery({
    queryKey: [filter],
    queryFn: ({ pageParam = 1 }) => featchData(pageParam, url, filter),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage?.pagination?.has_next_page
        ? lastPage?.pagination?.current_page + 1
        : undefined;
    },
  });
}
