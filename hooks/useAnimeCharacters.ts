import { axiosClient } from "@/lib/api/axiosClient";
import { useQuery } from "@tanstack/react-query";

async function FeatchData(anmieId: number) {
  try {
    const res = await axiosClient.get(`/anime/${anmieId}/characters`);
    return res.data.data;
  } catch (err: any) {
    throw err;
  }
}

export default function useAnimeCharacters(anmieId: number) {
  return useQuery({
    queryKey: [`Characters${anmieId}`],
    queryFn: () => FeatchData(anmieId),
  });
}
