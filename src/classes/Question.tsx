export type QuestionType = 'rating' | 'boolean'

export interface Question {
    id: number
    text: string
    type: QuestionType
    scale: number
}

