import PlayerSummary from '../components/PlayerSummary';
import PlayEntry from '../components/PlayEntry';
import Tabset from '../components/Tabset';



function Home() {
    return (
        <div className="space-y-4">
            <PlayerSummary 
                name="John"
                score={500}
                rounds={4}
            />
            <Tabset>
                <Tabset.Tab name="players" label="Players">
                    <PlayEntry short="J" name="John Doe"></PlayEntry>
                    <PlayEntry short="A" name="Angel Doe"></PlayEntry>
                </Tabset.Tab>
                <Tabset.Tab name="leader-board" label="Leader board">
                    <PlayEntry short="T" name="John Doe" score={400}></PlayEntry>
                    <PlayEntry short="T" name="John Doe" score={400}></PlayEntry>
                </Tabset.Tab>
            </Tabset>
           
        </div>
    )
}

export default Home;