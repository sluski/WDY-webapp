import {Button} from "@mui/material";

export default function NavBar() {
    return <div className="nav-bar">
        <Button href="/">Home</Button>
        <Button>Random</Button>
        <Button href="/questions">Questions</Button>
        <Button>About</Button>
    </div>
}