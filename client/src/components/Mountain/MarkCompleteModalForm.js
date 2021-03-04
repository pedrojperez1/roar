import React from "react"
import { 
  FormControl, 
  FormLabel, 
  Slider, 
  SliderFilledTrack, 
  SliderThumb,
  SliderTrack 
} from "@chakra-ui/react"

const MarkCompleteModalForm = () => {
  return (
    <div className="MarkCompleteModalForm">
      <FormControl>
        <FormLabel>
          How much anxiety did you experience while completing the task?
        </FormLabel>
        <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
  
      </FormControl>

    </div>
  )
}

export default MarkCompleteModalForm
