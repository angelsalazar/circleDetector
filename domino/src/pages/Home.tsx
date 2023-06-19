import PlayEntry from '../components/PlayEntry';
import Tabset from '../components/Tabset';

function Home() {
    return (
        <div className="space-y-4">
            <Tabset>
                <Tabset.Tab label="Players">
                    <div className="space-y-4">
                        <PlayEntry short="J" name="John Doe"></PlayEntry>
                        <PlayEntry short="A" name="Angel Doe"></PlayEntry>
                    </div>
                </Tabset.Tab>
                <Tabset.Tab label="Leader board">
                    <div className="space-y-4">
                        <PlayEntry short="T" name="John Doe" score={400}></PlayEntry>
                        <PlayEntry short="T" name="John Doe" score={400}></PlayEntry>
                    </div>
                </Tabset.Tab>
            </Tabset>
           
        </div>
    )
}

export default Home;