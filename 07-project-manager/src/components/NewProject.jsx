import React, { useRef } from "react";
import Input from "./Input";

function NewProject() {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const dueDateRef = useRef(null)

    const handleSave = () => { }
    return (
        <div className="w-[35rem] mt-60">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button>
                </li>
                <li>
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-950">
                        Save
                    </button>
                </li>
            </menu>

            <div>
                {/* first input */}
                <Input label="Title" type="text" ref={titleRef} />
                {/* second input */}

                <Input label="Description" isTextArea ref={descriptionRef} />
                {/* third input */}

                <Input label="Due Date" type="date" ref={dueDateRef} />
            </div>
        </div>
    );
}

export default NewProject;
