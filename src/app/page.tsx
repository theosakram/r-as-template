"use client";

import { FormControl } from "@/uikit/components/forms/FormControl";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required("Cannot be empty"),
  })
  .required();

export default function Home() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <h1>Hehe</h1>

      <Button colorScheme="orange" onClick={onOpen}>
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit((d) => console.log({ d }))}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing="1rem">
                <FormControl
                  htmlFor="name"
                  id="name"
                  label="Name"
                  errors={formState.errors.name?.message}
                >
                  <Input type="text" {...register("name")} />
                </FormControl>
                <FormControl
                  htmlFor="age"
                  id="age"
                  label="Age"
                  errors={formState.errors.age?.message}
                >
                  <Input {...register("age")} type="number" />
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Flex w="100%">
                <Button variant="unstyled" onClick={() => reset()}>
                  Reset
                </Button>
                <Spacer />
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost" type="submit">
                  Submit
                </Button>
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
