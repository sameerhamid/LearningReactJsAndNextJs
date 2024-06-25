import React from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton'
import Section from './Section';
const buttonsData = ["Components", "JSX", "Props", "State"];
function Examples() {
    const [activeTab, setActiveTab] = React.useState("Components");

    const onTabButtonClickHandler = (selectedButton) => {
        setActiveTab(selectedButton);
    };
    return (
        <Section id="examples" title="Examples">
            <menu>
                {buttonsData.map((buttonTxt, index) => (
                    <TabButton
                        key={index}
                        activeTab={activeTab === buttonTxt}
                        onClick={() => onTabButtonClickHandler(buttonTxt)}
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
        </Section>
    )
}

export default Examples
