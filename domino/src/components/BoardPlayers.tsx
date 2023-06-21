import PlayEntry from './PlayEntry';
import Tabset from './Tabset';

import { useBoard } from '../hooks/useBoard';

interface Props {
    boardId: string
}

function BoardPlayers({ boardId }: Props) {
    const { status, error, board } = useBoard(boardId);

    if (status === 'loading') {
        return (
            <
        )
    }



    return (
        <div>
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

export default BoardPlayers;