import {useEffect, useState} from "react";
import RatingOrg from '@mui/material/Rating';
import {Question} from "../classes/Question";

interface RatingProps {
    question: Question
    onVote: (value: number) => void
    disabled?: boolean
}

const textScale = [
    "Hate it",
    "Dislike it",
    "Neutral",
    "Appreciate it",
    "Enjoy it",
    "Love it!"
];

export default function Rating({onVote, question, disabled}: RatingProps) {
    const [hover, setHover] = useState<number>(-1);
    const [value, setValue] = useState<number | null>(null);

    useEffect(() => {
        setValue(null)
        setHover(-1)
    }, [question])

    const hoverInfoBox = <p style={{fontSize: "0.8em", textAlign: 'center'}}>{textScale[hover - 1]}</p>

    return <div>
            <RatingOrg 
                size="large"
                value={value}
                max={question.scale ? question.scale : 6}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    onVote(newValue!)
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                disabled={disabled}
            />
            {hover  >= 0 ? hoverInfoBox : null}
        </div>
}