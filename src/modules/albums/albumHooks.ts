import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getAlbums } from "./albumService";
import { Album } from "./albumTypes";

export const useGetAlbums = (options?: UseQueryOptions<Array<Album>>) => {
  return useQuery({
    queryKey: ["get-albums"],
    queryFn: getAlbums,
    ...options,
  });
};
