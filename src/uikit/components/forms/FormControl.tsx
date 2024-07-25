import {
  FormErrorMessage,
  FormLabel,
  FormControl as ChakraFormControl,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export type FormControlProps = {
  htmlFor: string;
  id: string;
  label: string;
  errors?: string;
  isRequired?: boolean;
};

export const FormControl = (props: PropsWithChildren<FormControlProps>) => {
  return (
    <ChakraFormControl isRequired={props.isRequired} isInvalid={!!props.errors}>
      <FormLabel htmlFor="name">{props.label}</FormLabel>
      {props.children}
      {props.errors && <FormErrorMessage>{props.errors}</FormErrorMessage>}
    </ChakraFormControl>
  );
};
