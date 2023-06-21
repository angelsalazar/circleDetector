import { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

import { logOut } from '../api/auth/logOut';

import Share from '../components/icons/Share';
import Close from '../components/icons/Close';
import Info from '../components/icons/Info';
import ArrowLeft from '../components/icons/ArrowLeft';
import TabNav from '../components/TabNav';

import { User } from '../api/auth/types';
import { useBoard } from '../hooks/useBoard';

function Root() {
    const [user, setUser] = useState<null|User>(null);
    const { status, error, board, scoresByUid } = useBoard(user?.board?.id);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const encodedUser = localStorage.getItem('__user__');
        if (encodedUser == null) {
            navigate('login');
        }
        setUser(encodedUser !== null ? JSON.parse(encodedUser) : null);
    }, [navigate]);

    async function handleLogout() {
        await logOut();
        localStorage.removeItem('__user__')
        setUser(null);
        navigate('/login');
    }

    function handleShare() {
        if (user && user.board && user.board.id) {
            navigator.clipboard.writeText(`${window.location.origin}/join?board=${user.board.id}`);
        }
    }

    if (error) {
        return (
            <div className="h-screen bg-white">
                <div className="h-full flex items-center justify-center">
                    <p className="text-2xl font-semibold text-slate-900">
                        {error}
                    </p>
                </div>
            </div>
        );
    }

    if (status === 'loading') {
        return (
            <div className="h-screen bg-white">
                <div className="h-full flex items-center justify-center">
                    <p className="text-2xl font-semibold text-slate-900">
                        Loading...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col relative">
            <header className="w-full text-slate-900 border-b-2">
                <div className="px-4 mx-auto max-w-screen-sm">
                    <div className="flex py-7">
                        {user == null && location.pathname == '/how-to-play' && (
                            <div className="mr-4">
                                 <Link to="/login">
                                    <ArrowLeft className="w-8 h-8"/>
                                 </Link>
                            </div>
                        )}
                        <p className="text-lg font-bold uppercase">domino</p>
                        <div className="ml-auto flex space-x-4">
                            {
                                user == null ? (
                                    <Link to="/how-to-play">
                                        <Info className="w-8 h-8"/>
                                    </Link>
                                ) : (
                                    <>
                                        <button onClick={handleShare}>
                                            <Share className="w-8 h-8"/>
                                        </button>
                                        <button onClick={handleLogout}>
                                            <Close className="w-8 h-8"/>
                                        </button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-full mx-auto px-4 max-w-screen-sm flex-1 pt-4">
                <Outlet context={{ user, board, scoresByUid, setUser }}/> 
            </main>
            {user !== null && (
                <TabNav />
            )}
        </div>
    );
}

export default Root;