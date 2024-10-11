import Accordian from "./components/Accordion/Accordian";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "../Place";
const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];
/**
 *  learn about compound componets
 Multilple components that don't work standalone but instead together 
 eg: html select and option element
 * 
 */
function App() {
  return (
    <main>
      {/* Multilple components that don't work standalone but instead together
      eg: html select and option element */}
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


      {/* using render props */}
      <SearchableList items={["first", "second", "third"]} itemKey={item => item}>
        {
          (item) => item
        }
      </SearchableList>
      <SearchableList items={PLACES} itemKey={item => item.id}>
        {
          (item) => < Place item={item} />
        }
      </SearchableList>
    </main>
  );
}

export default App;
