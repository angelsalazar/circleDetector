import PlayEntry from "../components/PlayEntry";

function History() {
    return (
        <div className="space-y-4">
            <PlayEntry 
                short="3"
                score={200}
            />
            <PlayEntry 
                short="2"
                score={200}
            />
            <PlayEntry 
                short="1"
                score={100}
            />
        </div>
    )
}

export default History;