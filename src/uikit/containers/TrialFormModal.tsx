import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Input,
  ModalFooter,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl } from "../components/FormControl";

type TrialFormModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

export const TrialFormModal = (props: TrialFormModalProps) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
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
              <Button colorScheme="blue" mr={3} onClick={props.onClose}>
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
  );
};
