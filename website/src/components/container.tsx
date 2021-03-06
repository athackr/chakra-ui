import React from "react"
import { Box, BoxProps } from "@hackr/chakra-ui-core"

export const Container = (props: BoxProps) => (
  <Box
    w="full"
    pb="12"
    pt="3"
    mx="auto"
    maxW="1200px"
    px={{ base: "2", md: "6" }}
    {...props}
  />
)

export default Container
