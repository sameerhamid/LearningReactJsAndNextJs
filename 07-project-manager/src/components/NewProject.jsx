import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAddProject }) {
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const dueDateRef = useRef('');
    const modalRef = useRef(null)

    const handleSave = () => {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''
        ) {
            // show the error modal
            modalRef.current.open()
            return
        }

        // validation...
        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });

        titleRef.current.value = '';
        descriptionRef.current.value = '';
        dueDateRef.current.value = '';
    };
    return (
        <>
            <Modal ref={modalRef} buttonCaption="Close"
            >
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
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
                            className="px-6 py-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-950"
                        >
                            Save
                        </button>
                    </li>
                </menu>

                <div>
                    {/* first input */}
                    <Input ref={titleRef} label="Title" type="text" />
                    {/* second input */}

                    <Input ref={descriptionRef} label="Description" isTextArea />
                    {/* third input */}

                    <Input ref={dueDateRef} label="Due Date" type="date" />
                </div>
            </div>
        </>
    );
}

export default NewProject;
