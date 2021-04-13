/**
 * About.test.js
 */
import React from "react"
import { render } from "@testing-library/react"
import About from "./About"

describe("testing About.js", () => {
  it("renders without crashing", () => {
    render(<About />)
  })
})