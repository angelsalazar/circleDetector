import { useOutletContext } from "react-router-dom";
import PlayEntry from "../components/PlayEntry";

import { Board } from '../api/board/types'; 
import { User } from '../api/auth/types'; 

function History() {
    const { user, board } = useOutletContext<{ user: User, board: Board }>()
    const snapCounts = board.snapCountsByUid[user.uid];

    return (
        <div className="space-y-4">
            <h1 className="text-2xl text-slate-900">History</h1>

            {snapCounts.length > 0 ? (
                snapCounts.map((entry, index) => (
                    <PlayEntry 
                        key={`${user.uid}-sc-${index}`}
                        short={String(index + 1)}
                        score={entry.score}
                    />
                ))
            ) : (
                <div className="text-center py-10">
                    <p className="font-bold text-slate-500 text-lg">No results found</p>
                </div>
            )}
        </div>
    )
}

export default History;