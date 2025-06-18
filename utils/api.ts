const API_KEY = "7592fc2d3f16406e978e8aa4a2f08644";
const BASE_URL = "https://api.rawg.io/api";

export const searchGames = async (query: string) => {
  const res = await fetch(`${BASE_URL}/games?search=${query}&key=${API_KEY}`);
  return res.json();
};

export const getGameDetails = async (id: number) => {
  const res = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  return res.json();
};
