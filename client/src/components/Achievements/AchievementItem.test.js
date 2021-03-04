/**
 * AchievementItem.test.js
 */
import React from "react"
import { render } from "@testing-library/react"
import AchievementItem from "./AchievementItem"

it("renders without crashing", () => {
  render(
    <AchievementItem 
      name="achievement"
      description="this is a test achievement"
      type="test"
      level={1}
    />
  )
})
