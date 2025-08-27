import axios from "axios";

export default async function handleAddFavourtie(
  anmieId: number = 0,
  userToken: string | null = ""
) {
  if (!anmieId) throw "not found Anmie";
  try {
    const res = await axios.post(
      `https://duck-generous-krill.ngrok-free.app/favourites?animeId=${
        anmieId ?? 0
      }`,
      {},
      { headers: { Authorization: `Bearer ${userToken ?? ""}` } }
    );
    const data = res.data;
    console.log(data);
    return data;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}
