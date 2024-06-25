import React from "react";

function TabButton({ activeTab, children, ...props }) {

    return (
        <li>
            <button
                className={activeTab ? "active" : ""}
                {...props}
            >
                {children}
            </button>
        </li>
    );
}

export default TabButton;
