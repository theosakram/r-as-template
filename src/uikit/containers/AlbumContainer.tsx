import { useGetAlbums } from "@/modules/albums/albumHooks";
import { Button, Flex, Spinner, VStack } from "@chakra-ui/react";
import { useMemo } from "react";

export const AlbumContainer = () => {
  const { data, isLoading, isError, refetch, isRefetching } = useGetAlbums();
  const filteredData = useMemo(() => {
    if (data) {
      return data.slice(0, 10);
    }

    return [];
  }, [data]);

  return (
    <VStack align="start">
      {(isLoading || isRefetching) && <Spinner />}
      {isError && <h1>Error fetching</h1>}
      {filteredData.map((datum) => (
        <Flex key={datum.id}>
          <h1>{datum.title}</h1>
        </Flex>
      ))}

      <Button onClick={() => refetch()}>Refetch</Button>
    </VStack>
  );
};
