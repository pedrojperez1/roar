import { Container, Progress } from "@chakra-ui/react"
import React, { useCallback, useState } from "react"
import NewLadderStep0 from "./NewLadderStep0"
import NewLadderStep1 from "./NewLadderStep1"
import NewLadderStep2 from "./NewLadderStep2"
import NewLadderStep3 from "./NewLadderStep3"
import NewLadderStep4 from "./NewLadderStep4"

const NewMountainForm = () => {
    const [step, setStep] = useState(0)
    const renderStepForm = useCallback(
        () => {
            switch (step) {
                case 0:
                    return <NewLadderStep0 step={step} setStep={setStep}/>
                case 1:
                    return <NewLadderStep1 step={step} setStep={setStep}/>
                case 2:
                    return <NewLadderStep2 step={step} setStep={setStep}/>
                case 3:
                    return <NewLadderStep3 step={step} setStep={setStep}/>
                case 4:
                    return <NewLadderStep4 step={step} setStep={setStep}/>
                default:
                    return "Uh oh. Something went wrong."
            }
        }
    )
    
    return (
        <>
            <Container maxW="xl">
                <Progress hasStripe value={(step / 4) * 100} colorScheme="green" mb={10}/>
            </Container>
            {renderStepForm()}
        </>
    )
}

export default NewMountainForm