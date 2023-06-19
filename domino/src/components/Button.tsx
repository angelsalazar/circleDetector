import React from "react";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

function Button({children, ...props} : ButtonProps) {
    return (
        <button {...props} className="inline-flex w-full justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 sm:w-auto">{children}</button>
    )
}

export default Button;