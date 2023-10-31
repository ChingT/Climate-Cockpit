export default function ScoreCard() {
    return (
        <>
            {/* 10 of this */}
            <ScoreCardCategory/>
            <>Statement</>
            <>Total Score</>
        </>
    );
}

function ScoreCardCategory() {
    return (
        <>
            <>ScoreCardCategory Name</>
            <>Level</>
            <>Level Tags</>
            <>Sum</>
        </>
    );
}
