import { createContext, useContext, useState } from "react"
import { Question } from "../classes/Question"

export type QuestionContextType = {
    voted: boolean
    setVoted: (value: boolean) => void
    question: Question
    setQuestion: (value: Question) => void
}

const QuestionContext = createContext<QuestionContextType>({} as QuestionContextType);

export const QuestionContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [voted, setVoted] = useState(false)
    const [question, setQuestion] = useState<Question>({} as Question)

    return <QuestionContext.Provider value={{voted, setVoted, question, setQuestion}}>{ children }</QuestionContext.Provider>
}

export const useQuestionContext = (): QuestionContextType => {
    const context = useContext(QuestionContext)
    if(context === undefined) {
        throw new Error('useQuestionContext must be used within a QuestionContextProvider')
    }
    return context
}