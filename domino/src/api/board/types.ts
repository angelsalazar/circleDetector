import { User } from '../auth/types'

export interface SnapCount {
    round: number,
    score: number
}

export interface Board {
    id?: null | string,
    uid: string,
    playersByUid: { [key: string] : User },
    snapCountsByUid: { [key: string] : SnapCount[] }
}