import React from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

const buttonsData = ["Components", "JSX", "Props", "State"];

function App() {
  const [activeTab, setActiveTab] = React.useState("Components");

  const onTabButtonClickHandler = (selectedButton) => {
    setActiveTab(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => (
              <CoreConcept {...concepts} />
            ))}
          </ul>
        </section>

        {/* examples */}

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
      </main>
    </div>
  );
}

export default App;
