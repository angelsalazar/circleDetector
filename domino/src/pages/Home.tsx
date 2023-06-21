import { useOutletContext } from 'react-router-dom';
import PlayerSummary from '../components/PlayerSummary';
import PlayEntry from '../components/PlayEntry';
import Tabset from '../components/Tabset';

import { User } from '../api/auth/types';
import { Board } from '../api/board/types';
import { ScoreSummary } from '../hooks/useBoard';

function Home() {
    const { user, board, scoresByUid } = useOutletContext<{ user : User, board: Board, scoresByUid: { [key: string] : ScoreSummary } }>();
    const players = Object.values(board?.playersByUid || {});
    const sortedSummaries = Object.values(scoresByUid).sort((a, b) => {
        return b.score - a.score 
    });

    return (
        <div className="space-y-4">
            <h1 className="text-2xl text-slate-900">Players</h1>
            <PlayerSummary 
                name={user.name}
                score={scoresByUid[user.uid].score}
                rounds={Object.keys(board?.snapCountsByUid[user.uid] || {}).length}
            />
            <Tabset>
                <Tabset.Tab label="Players">
                    <div className="space-y-4">
                        {players.map(player => {
                            return (
                                <PlayEntry 
                                    key={player.uid} 
                                    short={player.name[0].toUpperCase()} 
                                    name={player.name} 
                                />
                            )
                        })}
                    </div>
                </Tabset.Tab>
                <Tabset.Tab label="Leader board">
                    <div className="space-y-4">
                        {sortedSummaries.map(scoreSummary => (
                            <PlayEntry 
                                key={scoreSummary.uid}
                                short={scoreSummary.name[0].toUpperCase()} 
                                name={scoreSummary.name} 
                                score={scoreSummary.score} 
                            />
                        ))}
                    </div>
                </Tabset.Tab>
            </Tabset>
        </div>
    )
}

export default Home;