import { signInAnonymously } from 'firebase/auth';

import { auth } from '../../firebase';
import { User } from './types';

export async function logIn(name: string):Promise<User> {
    const userCredential = await signInAnonymously(auth);
    const user = { name, uid : userCredential.user.uid }
    return user;
}