import {Button} from "@mui/material";

type QuestionNavBarProps = {
    onLoadNext: () => void
    isVoted: boolean
}

export default function QuestionNavBar({onLoadNext, isVoted}: QuestionNavBarProps) {
    return <div
        style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-between",
            minWidth: "200px",
            width: "40vw",
        }}
    >
        <Button>
          View results
        </Button>
        <Button onClick={onLoadNext} disabled={!isVoted}>
          Next
        </Button>
    </div>
}