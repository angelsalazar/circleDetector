import clsx from 'clsx';
import { NavLink, Link } from "react-router-dom";

import Lens from '../components/icons/Lens';
import Group from '../components/icons/Group';
import OrderedList from '../components/icons/OrderedList';

function TabNav() {
    return (
        <nav className="flex border-t-2">
            <NavLink to="/" className={({ isActive }) => (
                clsx(isActive && 'bg-gray-50 text-slate-900', 'text-slate-700 flex-1 py-4  flex items-center justify-center')
            )}>
                <span>
                    <Group className="w-6 h-6 mx-auto" />
                    <span className="uppercase font-semibold text-xs">players</span>
                </span>
            </NavLink>
            <Link to="/snap-count" className="flex-1 py-4  flex items-center justify-center">
                <span>
                    <Lens className="w-10 h-10 mx-auto" />
                </span>
            </Link>
            <NavLink to="/history" className={({ isActive }) => (
                clsx(isActive && 'bg-gray-50 text-slate-900', 'text-slate-700 flex-1 py-4  flex items-center justify-center')
            )}>
                <span>
                    <OrderedList className="w-5 h-5 mx-auto" />
                    <span className="uppercase font-semibold text-xs">history</span>
                </span>
            </NavLink>
        </nav>
    )
}

export default TabNav;