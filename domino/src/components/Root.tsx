import { Outlet, Link } from 'react-router-dom'

import Share from '../components/icons/Share';
import Close from '../components/icons/Close';
import TabNav from '../components/TabNav';

function Root() {
    return (
        <div className="h-screen flex flex-col">
            <header className="w-full text-slate-900 border-b-2">
                <div className="px-4 mx-auto max-w-screen-sm">
                    <div className="flex py-7">
                        <p className="text-lg font-bold uppercase">domino</p>
                        <div className="ml-auto flex">
                            <div className="mr-4">
                                <Share className="w-8 h-8"/>
                            </div>
                            <Link to="/login">
                                <Close className="w-8 h-8"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-full mx-auto px-4 max-w-screen-sm flex-1 pt-4">
                <Outlet/>
            </main>
            <TabNav />
        </div>
    );
}

export default Root;