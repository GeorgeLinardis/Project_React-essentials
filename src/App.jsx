import { useState } from 'react';

import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleClick(topic) {
    setSelectedTopic(topic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            { CORE_CONCEPTS.map((concept, index) => (
                <CoreConcept key={concept.title} {...concept} />
              ))
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((exampleKey) => (
              <TabButton
                key={exampleKey}
                isSelected={exampleKey === selectedTopic}
                onClick={() => handleClick(exampleKey)}
              >
                {EXAMPLES[exampleKey].title}
              </TabButton>
            ))}
          </menu>
          {!selectedTopic
            ? <p>Please select a topic</p>
            : (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>{EXAMPLES[selectedTopic].code}</pre>
              </div>
            )
          }
        </section>
      </main>
    </div>
  );
}

export default App;
