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
            id="experience"
          >
            <Accordian.Title className="accordion-item-title" >
              We got 20 years of experience
            </Accordian.Title>
            <Accordian.Content className="accordion-item-content">
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
            id="local-guids"
          >
            <Accordian.Title className="accordion-item-title" >
              We're working with local guids
            </Accordian.Title>
            <Accordian.Content className="accordion-item-content">
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
