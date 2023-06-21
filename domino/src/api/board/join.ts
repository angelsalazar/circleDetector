import { updateDoc, doc } from "firebase/firestore"
import { db } from '../../firebase';
import { getById } from "./getById";

import { User } from '../auth/types';
import { Board, SnapCount } from './types';

export async function join(boardId: string, user: User): Promise<Board> { 
    const board = await getById(boardId);
    const updatedPlayersByUid = {...board.playersByUid} as ({ [key:string]: User });
    const updatedSnapCountsByUid = {...board.snapCountsByUid} as ({ [key:string]: SnapCount[] });

    updatedPlayersByUid[user.uid] = user;
    updatedSnapCountsByUid[user.uid] = [];

    await updateDoc(doc(db, 'boards', boardId), {
        playersByUid: updatedPlayersByUid,
        snapCountsByUid: updatedSnapCountsByUid
    });

    return board;
}