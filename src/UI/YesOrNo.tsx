import { Button } from "@mui/material";


interface YesOrNoProps {
    onVote: (value: boolean) => void
    disabled: boolean
}

export default function YesOrNo({onVote, disabled}: YesOrNoProps) {
    return <div className="boolean-type-wrapper">
         <Button onClick={() => onVote(true)} className="boolean-type-button" variant="contained" size="large" disabled={disabled}>Yes</Button>
         <Button onClick={() => onVote(false)} className="boolean-type-button" variant="contained" size="large" disabled={disabled}>No</Button>
     </div>
}