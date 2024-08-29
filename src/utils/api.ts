import {get, post} from "./http";
import {Question} from "../classes/Question";

export type PostVoteBody = {
    questionId: number
    value: any
}

export const getQuestions = async (): Promise<Question[]> => {
    return get<Question[]>('http://localhost:8080/questions')
}

export const postVote = async (body: PostVoteBody) => {
    return post(`http://localhost:8080/vote`, body)
}