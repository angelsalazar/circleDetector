import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import Button from '../components/Button';
import Input from '../components/Input';

import logo from '../assets/Logo.svg';
import { logIn } from '../api/auth/logIn';
import { User } from '../api/auth/types';
import { create } from '../api/board/create';

interface FormElements extends HTMLFormControlsCollection {
    username : HTMLInputElement
}

interface LoginFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

function Login() {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState<null | string>(null);
    const { setUser } = useOutletContext<{ setUser: (user: User) => void }>();
    const navigate = useNavigate();

    async function handleSubmit(ev:React.FormEvent<LoginFormElement>) {
        ev.preventDefault();
        setStatus('loading');

        try {
            const user = await logIn(ev.currentTarget.elements.username.value);
            const board = await create(Object.assign({}, user));
            user.board = board;
            localStorage.setItem('__user__', JSON.stringify(user));
            setUser(user);
            navigate('/');
        } catch (ex) {
            console.log(ex);
            setError('Oops something went wrong');
            setStatus('idle');
        }
    }


    return (
        <>
            <div className="py-8">
                <div className="flex justify-center items-center">
                    <img src={logo} className="rotate-[30deg]" />
                </div>
            </div>

            <div className="space-y-4">
                <h1 className="text-2xl font-semibold text-slate-900">Log in</h1>

                {error && (
                    <div className="bg-red-100 text-red-600 rounded-md p-4">
                        <h3 className=" font-bold">Error</h3>
                        <p>{error}</p>
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input label="Name" name="username" required/>
                    <Button type="submit" disabled={status === 'loading'}>
                        {status === 'idle' ? 'Start' : 'Starting...'}
                    </Button>
                </form>
            </div>
        </>
    );
}

export default Login;