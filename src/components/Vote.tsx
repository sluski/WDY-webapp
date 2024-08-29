import Rating from "../UI/Rating";
import YesOrNo from "../UI/YesOrNo";
import { Question } from "../classes/Question";
import {useEffect, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {postVote, PostVoteBody} from "../utils/api";

type VoteProps = {
    question: Question
    onVoteCall: () => void
}

export default function Vote({ question, onVoteCall }: VoteProps) {
    const { type } = question
    const [ voteDisabled, setVotedDisabled ] = useState<boolean>(false)

    const mutation = useMutation({
        mutationFn: (voteData: PostVoteBody) => postVote(voteData)
    })

    const onVote = (value: any) => {
        setVotedDisabled(true)
        onVoteCall()
        mutation.mutate({
            questionId: question.id,
            value: value
        })
    }

    useEffect(() => {
        setVotedDisabled(false)
    }, [question]);

    if(type === 'rating') {
        return <Rating onVote={onVote} question={question} disabled={voteDisabled}  />
    } else if (type === 'boolean') {
        return <YesOrNo onVote={onVote} disabled={voteDisabled} />
    }
    return <p>Invalid question type</p>
}

