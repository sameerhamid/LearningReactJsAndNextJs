import React from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton'
const buttonsData = ["Components", "JSX", "Props", "State"];
function Examples() {
    const [activeTab, setActiveTab] = React.useState("Components");

    const onTabButtonClickHandler = (selectedButton) => {
        setActiveTab(selectedButton);
    };
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {buttonsData.map((buttonTxt, index) => (
                    <TabButton
                        key={index}
                        activeTab={activeTab === buttonTxt}
                        onTabButtonClickHandler={() => onTabButtonClickHandler(buttonTxt)}
                    >
                        {buttonTxt}
                    </TabButton>
                ))}
            </menu>
            <div id="tab-content">
                <h3>{EXAMPLES[activeTab].title}</h3>
                <p>{EXAMPLES[activeTab].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[activeTab].code}
                    </code>
                </pre>
            </div>


        </section>
    )
}

export default Examples
