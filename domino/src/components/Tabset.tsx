import React, { ReactElement, useState } from 'react';

interface TabProps {
    name: string,
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
        <div>
            <ul>
                {React.Children.map(children, (child) => {
                    return (<li>{child.props.label}</li>)
                })}
            </ul>
            {children[activeTab]}
        </div>
    );
}

Tabset.Tab = Tab;

export default Tabset;