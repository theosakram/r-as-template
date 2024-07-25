"use client";

import { AlbumContainer } from "@/uikit/containers/AlbumContainer";
import { TrialFormModal } from "@/uikit/containers/TrialFormModal";
import { Button, Flex, Link, useDisclosure } from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex gap="1rem">
      <h1>Hehe</h1>

      <Button colorScheme="orange" onClick={onOpen}>
        Open Modal
      </Button>

      <TrialFormModal isOpen={isOpen} onClose={onClose} />
      <AlbumContainer />

      <Link href="/settings" textDecoration="underline">
        To Settings Page
      </Link>
    </Flex>
  );
}
