import { Album } from "./albumTypes";

export const getAlbums = async (): Promise<Array<Album>> => {
  return fetch("https://jsonplaceholder.typicode.com/albums").then((r) =>
    r.json()
  );
};
