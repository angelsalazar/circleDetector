import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Input from '../components/Input';
import Info from '../components/icons/Info';

import logo from '../assets/Logo.svg';

function Login() {
    return (
        <div className="h-screen flex flex-col">
            <header className="w-full text-slate-900">
                <div className="px-4 mx-auto max-w-screen-sm">
                    <div className="flex py-7">
                        <p className="text-lg font-bold uppercase">domino</p>
                        <div className="ml-auto">
                            <Link to="/how-to-play">
                                <Info className="w-8 h-8"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-full mx-auto px-4 max-w-screen-sm flex-1">
                <div className="flex justify-center items-center">
                    <img src={logo} className="rotate-[30deg]" />
                </div>
                <form className="space-y-4 mt-4">
                    <Input label="Name" required/>
                    <Button type="button">Start</Button>
                </form>
            </main>
        </div>
    );
}

export default Login;