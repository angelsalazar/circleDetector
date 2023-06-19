import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Login from './pages/Login';
import HowTo from './pages/HowTo';
import Home from './pages/Home';
import History from './pages/History';
import SnapCount from './pages/SnapCount';


import Root from './components/Root';

const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    children: [{
        path: '/',
        element: <Home />
    }, {
        path: 'history',
        element: <History />
    }]
}, {
    path: 'snap-count',
    element: <SnapCount />
}, {
    path: 'login',
    element: <Login />
}, {
    path: 'how-to-play',
    element: <HowTo />
}]);

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
