import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function featchData(userToken: string | null) {
  try {
    const res = await axios.get(
      "https://duck-generous-krill.ngrok-free.app/favourites",
      {
        headers: {
          Authorization: `Bearer ${userToken ?? ""}`,
        },
      }
    );
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    console.log(err);

    throw err;
  }
}

export default function useMyFavourties(userToken: string | null) {
  return useQuery({
    queryKey: ["myFav"],
    queryFn: () => featchData(userToken),
  });
}
