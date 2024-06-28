import React from "react";

function Input({ label, invalid, ...props }) {
    let labelClasses = "block mb-2 text-xs font-bold tracking-wide"
    let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow"
    if (invalid) {
        labelClasses += " text-red-400"
        inputClasses += " border-red-500 bg-red-100 border-red-300"
    } else {
        labelClasses += " text-stone-300"
        inputClasses += " text-gray-700 bg-stone-300"
    }

    return (
        <>
            <label className={labelClasses}>
                {label}
            </label>
            <input
                {...props}
                className={inputClasses}
            />
        </>
    );
}

export default Input;
