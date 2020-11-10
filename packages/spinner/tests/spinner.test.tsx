import * as React from "react"
import { render } from "@hackr/chakra-ui-test-utils"
import { Spinner } from "../src"

test("Spinner renders correctly", () => {
  const { asFragment } = render(<Spinner />)
  expect(asFragment()).toMatchSnapshot()
})
