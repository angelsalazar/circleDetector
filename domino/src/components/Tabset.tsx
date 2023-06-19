import React, { ReactElement, useState } from 'react';
import clsx from 'clsx';

interface TabProps {
    label: string,
    children: ReactElement | ReactElement[]
}

interface TabsetProps {
    children: ReactElement[]
}

function Tab({ children }: TabProps) {
    return (
        <div>{children}</div>
    );
}

function Tabset({ children }: TabsetProps) {
    const [activeTab, setActivateTab] = useState(0);

    return (
        <div className="space-y-4">
            <ul className="flex">
                {React.Children.map(children, (child, index) => {
                    return (
                        <li className="flex-1">
                            <button 
                                className={clsx('py-5 border-b w-full text-center', activeTab == index && 'border-slate-900 border-b-2 font-bold')} 
                                onClick={() => setActivateTab(index)}>
                                {child.props.label}
                            </button>
                        </li>    
                    )
                })}
            </ul>
            {children[activeTab]}
        </div>
    );
}

Tabset.Tab = Tab;

export default Tabset;