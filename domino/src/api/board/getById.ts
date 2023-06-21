import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Board } from './types';

export async function getById(boardId:string): Promise<Board> {
    const document = await getDoc(doc(db, 'boards', boardId));
    const board = document.data() as Board;
    
    board.id = document.id;

    return board;
}
