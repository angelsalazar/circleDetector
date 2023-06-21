import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

import { Board } from '../api/board/types';

export interface ScoreSummary {
    score: number,
    uid: string,
    name: string
}


function getPlayerSummaries(board: Board) {
    return Object.keys(board.snapCountsByUid).reduce((map, uid) => {
        const snapCounts = board.snapCountsByUid[uid] || [];
        const score = snapCounts.reduce((total, entry) => total + entry.score, 0);
        map[uid] = {
            uid,
            score,
            name: board.playersByUid[uid].name
        }
        return map;
    }, {} as { [key: string]: ScoreSummary  });
} 

export function useBoard(boardId: undefined | null | string) {
    const [status, setStatus] = useState<'loading' | 'error' | 'loaded'>('loading');
    const [error, setError] = useState<null | string>(null);
    const [board, setBoard] = useState<null | Board>(null);
    const [scoresByUid, setScoresByUid] = useState<{[key:string]: ScoreSummary }>({});


    useEffect(() => {
        if (!boardId) {
            setStatus('loaded');
            return;
        }
        // if (boardId === undefined || boardId === null) {
        //     setError('boardId is required and cannot be null');
        //     setStatus('error');
        //     return;
        // } 

        return onSnapshot(doc(db, 'boards', boardId), document => {
            if (!document.exists()) {
                setError(`Board ${boardId} not found`);
                setStatus('error');
                return;
            }

            const board = document.data() as Board;
            setBoard(board);
            setScoresByUid(getPlayerSummaries(board));
            setStatus('loaded');
        }); 
    }, [boardId])


    return {
        status,
        board,
        scoresByUid,
        error
    }
}