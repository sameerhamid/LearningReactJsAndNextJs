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
          <Accordian.Item title="We got 20 years of experience" className="accordion-item"
            id="experience"
          >
            <article>
              <p>You can&apos;t go wrong with us</p>
              <p>
                We are in the bussiness of plannig highly individualized
                vacation trips for more than 20 years
              </p>
            </article>
          </Accordian.Item>
          <Accordian.Item title="We're working with local guids" className="accordion-item"
            id="local-guids"
          >
            <article>
              <p>You can&apos;t go wrong with us</p>
              <p>
                We are in the bussiness of plannig highly individualized
                vacation trips for more than 20 years
              </p>
            </article>
          </Accordian.Item>
        </Accordian>
      </section>
    </main>
  );
}

export default App;
