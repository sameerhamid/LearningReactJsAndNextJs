import React from "react";

function Input({ isTextArea, label, ...props }) {
    const inputTClasses = `w-full p-1 
    border-b-2 rounded-sm
    border-stone-300
    bg-stone-200
    text-stone-600
    focus:outline-none
    focus:border-stone-600`;

    return (
        <p className="flex flex-col gap-1 my-4">
            <label htmlFor={label} className="text-sm font-bold text-stone-500">
                {label}
            </label>
            {isTextArea ? (
                <textarea id={label} {...props} className={inputTClasses} />
            ) : (
                <input id={label} {...props} className={inputTClasses} />
            )}
        </p>
    );
}

export default Input;
