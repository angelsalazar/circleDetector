import { 
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import Root from './components/Root';

import Login from './pages/Login';
import HowTo from './pages/HowTo';
import Home from './pages/Home';
import History from './pages/History';
import SnapCount from './pages/SnapCount';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="how-to-play" element={<HowTo />} />
            <Route path="history" element={<History />} />
            <Route path="snap-count" element={<SnapCount />} />
            <Route path="login" element={<Login />} />
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
