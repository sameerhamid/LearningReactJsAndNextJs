import React from "react";

function TabButton(props) {

    return (
        <li>
            <button
                className={props.activeTab ? "active" : ""}
                onClick={props.onTabButtonClickHandler}
            >
                {props.children}
            </button>
        </li>
    );
}

export default TabButton;
