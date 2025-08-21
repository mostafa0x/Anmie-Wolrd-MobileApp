import { axiosClient } from "@/lib/api/axiosClient";
import { useInfiniteQuery } from "@tanstack/react-query";

async function featchData(pageParam: number, url: string, filter: string) {
  const limitPerPage = 12;
  try {
    const res = await axiosClient.get(
      `${url}?page=${pageParam}&limit=${limitPerPage}&filter=${filter}`
    );

    return {
      data: res.data.data ?? [],
      pagination: res.data.pagination ?? {},
    };
  } catch (err: any) {
    throw err;
  }
}
export function useAnmieByCategory(url: string, filter: string) {
  return useInfiniteQuery({
    queryKey: ["AnmieByCategory", filter],
    queryFn: ({ pageParam = 1 }) => featchData(pageParam, url, filter),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const hasNext: boolean = lastPage?.pagination?.has_next_page ?? false;
      const currentPage: number = lastPage?.pagination?.current_page ?? 1;

      return hasNext ? currentPage + 1 : undefined;
    },
  });
}
