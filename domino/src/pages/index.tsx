import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'

import Root from '../components/Root';

import Login from './Login';
import HowTo from './HowTo';
import Home from './Home';
import History from './History';
import SnapCount from './SnapCount';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="how-to" element={<HowTo />} />
            <Route path="history" element={<History />} />
            <Route path="snap-count" element={<SnapCount />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
)