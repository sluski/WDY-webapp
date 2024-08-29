import {useEffect,  useState} from "react";
import QuestionPanel from "../components/QuestionPanel";
import {Question} from "../classes/Question";
import {useInfiniteQuery, useMutation} from "@tanstack/react-query";
import {getQuestions, postVote, PostVoteBody} from "../utils/api";
import QuestionNavBar from "../components/QuestionNavBar";

export default function QuestionsPage() {
    const [isVoted, setVoted] = useState<boolean>(false)
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [currentPageIndex, setCurrentPageIndex] = useState(0)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const {
        data,
        isFetchingNextPage,
        fetchNextPage,
        error,
        status
    } = useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: getQuestions,
        initialPageParam: true,
        getNextPageParam: () => {return true},
    })

    useEffect(() => {
        if(status === 'success' && !isFetchingNextPage) {
            console.log(`Setting current question for [${currentPageIndex}, ${currentQuestionIndex}]`)
            setCurrentQuestion(data.pages[currentPageIndex][currentQuestionIndex])
        }
    }, [currentPageIndex, currentQuestionIndex, status, isFetchingNextPage]);

    const onLoadNext = () => {
        console.log("Load next question")
        console.log(currentQuestionIndex)
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        if(currentQuestionIndex === 9) {
            console.log("Load next page")
            setCurrentPageIndex(currentPageIndex + 1)
            setCurrentQuestionIndex(0)
            fetchNextPage()
        }
    }

    const onVote = () => {
        setVoted(true)
    }

    switch (status) {
        case "pending":
            return <p>Loading questions</p>
        case "error":
            console.log(error)
            return <p>Error occurred</p>
        case "success":
            if(currentQuestion) {
                return <>
                    <QuestionPanel question={currentQuestion!} onVoteClick={onVote}/>
                    <QuestionNavBar isVoted={isVoted} onLoadNext={onLoadNext}/>
                </>
            } else {
                return <p>
                    Current page index: {currentPageIndex}
                    Current question index: {currentQuestionIndex}
                </p>
            }
    }

}
