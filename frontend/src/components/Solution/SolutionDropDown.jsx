import {CategoryLabel, ImpactIcon} from "./solution.style.js";

export default function SolutionDropDown() {
    return (
        <>
            <ImpactIcon />
            <CategoryLabel />
            <>Description</>
            <>Progress Bar</>
            <Resources/>
            <>Level Buttons</>
        </>
    );
}

function Resources() {
    return (
        <>
            <>Tabs(videos, news, books)</>
            <>Embedded videos / links</>
        </>
    );
}
