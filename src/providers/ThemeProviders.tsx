"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function ThemeProviders({ children }: PropsWithChildren) {
  return <ChakraProvider resetCSS>{children}</ChakraProvider>;
}
