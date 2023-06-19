import { Link } from 'react-router-dom'
import ArrowLeft from '../components/icons/ArrowLeft';

function Login() {
    return (
        <div className="h-screen flex flex-col">
            <header className="w-full text-slate-900">
                <div className="px-4 mx-auto max-w-screen-sm">
                    <div className="flex items-center py-7">
                        <div className="mr-4">
                            <Link to="/login">
                                <ArrowLeft className="w-8 h-8"/>
                            </Link>
                        </div>
                        <p className="text-lg font-bold uppercase">domino</p>
                    </div>
                </div>
            </header>
            <main className="w-full mx-auto px-4 max-w-screen-sm flex-1">
                <h1 className="text-2xl">How to Play</h1>
            </main>
        </div>
    );
}

export default Login;