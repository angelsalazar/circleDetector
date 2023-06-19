interface Props {
    rounds : number,
    name: string,
    score: number
}

function PlayerSummary({ name, score, rounds }: Props) {
    return (
        <div className="px-8 py-5 bg-slate-900 text-white rounded-md">
            <div>
                <p className="text-lg">{name}</p>
                <p className="text-3xl"><b>{score}</b> points</p>
                <p className="text-md"><b>{rounds}</b> rounds</p>
            </div>
        </div>
    );    
}

export default PlayerSummary;