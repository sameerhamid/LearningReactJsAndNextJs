import Accordian from "./components/Accordion/Accordian";


/**
 *  learn about compound componets
 Multilple components that don't work standalone but instead together 
 eg: html select and option element
 * 
 */
function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordion">
          <Accordian.Item className="accordion-item"
          >
            <Accordian.Title className="accordion-item-title" id="experience">
              We got 20 years of experience
            </Accordian.Title>
            <Accordian.Content id="experience" className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us</p>
                <p>
                  We are in the bussiness of plannig highly individualized
                  vacation trips for more than 20 years
                </p>
              </article>
            </Accordian.Content>
          </Accordian.Item>
          <Accordian.Item className="accordion-item"

          >
            <Accordian.Title className="accordion-item-title" id="local-guids">
              We're working with local guids
            </Accordian.Title>
            <Accordian.Content id="local-guids" className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us</p>
                <p>
                  We are in the bussiness of plannig highly individualized
                  vacation trips for more than 20 years
                </p>
              </article>
            </Accordian.Content>
          </Accordian.Item>
        </Accordian>
      </section>
    </main>
  );
}

export default App;
