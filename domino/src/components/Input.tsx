import React, { useId } from 'react';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React.AriaAttributes  {
    label: string
}

function Input({label, required, ...props}: Props) {
    const id = useId();
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {label} {required && <abbr title="required" className="text-red-600 no-underline">*</abbr>}
            </label>
            <div className="mt-2">
                <input {...props} required={required} id={id} className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" />
            </div>
        </div>
    )
}

export default Input;