import { Link } from 'react-router-dom'

import Close from '../components/icons/Close';
import GoBack from '../components/icons/GoBack';
import Marker from '../components/icons/Marker';
import Check from '../components/icons/Check';

function SnapCount() {
    return (
        <main className="h-screen flex flex-col">
            <div className="flex-1 flex justify-center items-center">
                <p className="text-slate-500">Image Preview Here</p>
            </div>
            <div className="w-full bg-slate-900">
                <div className="px-4 mx-auto max-w-screen-sm">
                    <div className="py-2">
                        <div className="flex">
                            <Link to="/" className="p-2 inline-flex justify-center items-center">
                                <Close className="w-7 h-7 fill-white"/>
                            </Link>

                            <div className="ml-auto space-x-2">
                                <button className="p-2 inline-flex justify-center items-center">
                                    <GoBack className="w-7 h-7 fill-white"/>
                                </button>
                                <button className="p-2 inline-flex justify-center items-center">
                                    <Marker className="w-7 h-7 fill-white"/>
                                </button>
                                <button className="p-2 inline-flex justify-center items-center">
                                    <Check className="w-7 h-7 fill-white"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex py-7">
                        a
                    </div> */}
                </div>
            </div>
        </main>
    )
}

export default SnapCount;