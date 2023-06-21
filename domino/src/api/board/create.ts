import { collection, addDoc } from "firebase/firestore"
import { User } from '../auth/types';
import { Board } from './types';
import { db } from '../../firebase';

export async function create(user: User): Promise<Board> { 
    const board = {
        uid: user.uid,
        playersByUid: {
            [user.uid]: user
        },
        snapCountsByUid: {
            [user.uid]: []
        }
    } as Board;
    
    const document = await addDoc(collection(db, 'boards'), board);
    board.id = document.id;
    return board;
}