import { axiosClient } from "@/lib/api/axiosClient";
import { useInfiniteQuery } from "@tanstack/react-query";

async function FeatchData(
  page: number,
  q: string,
  status: string,
  genresID: string
) {
  const limitPage = 12;
  try {
    const res = await axiosClient.get(
      `/anime?page=${page}&limit=${limitPage}&q=${q}&status=${status}&sfw=true&sort=desc&genres=${genresID}`
    );

    return res.data;
  } catch (err: any) {
    throw err;
  }
}
export function useSerachAnmie(q: string, status: string, genresID: string) {
  return useInfiniteQuery({
    queryKey: [`${q + status + genresID}`],
    queryFn: ({ pageParam = 1 }) => FeatchData(pageParam, q, status, genresID),
    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      const hasNext: boolean = lastPage?.pagination?.has_next_page ?? false;
      const currentPage: number = lastPage?.pagination?.current_page ?? 1;

      return hasNext ? currentPage + 1 : undefined;
    },
  });
}
