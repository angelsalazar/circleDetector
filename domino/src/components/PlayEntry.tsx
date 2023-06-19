interface Props {
    short: string,
    score?: number,
    name?: string
}

function PlayEntry({ short, score, name }: Props) {
    return (
        <div className="text-slate-700 flex items-center bg-slate-100 p-2 rounded-3xl pr-4">
            <span className="mr-4 bg-slate-900 text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full">{short}</span>
            <p className="text-lg font-medium">{name && <p>{name}</p>}</p>
            <p className="ml-auto">
                {score && <p><b>{score}</b> points</p>}
            </p>
        </div>
    )
}

export default PlayEntry