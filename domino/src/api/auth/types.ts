import { Board } from '../board/types';

export interface User {
    uid: string,
    name: string,
    score?: number, 
    board?: null | Board
}