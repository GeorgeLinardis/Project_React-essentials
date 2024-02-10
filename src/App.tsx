import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import CoreConcept from "./components/CoreConcept/CoreConcept.tsx";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  function handleClick(topic: string) {
    setSelectedTopic(topic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            { CORE_CONCEPTS.map((concept) => (
                <CoreConcept key={concept.title} {...concept} />
              ))
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((exampleKey: string) => (
              <TabButton
                key={exampleKey}
                isSelected={exampleKey === selectedTopic}
                onClick={() => handleClick(exampleKey)}
              >
                {EXAMPLES[exampleKey as keyof typeof EXAMPLES].title}
              </TabButton>
            ))}
          </menu>
          {!selectedTopic
            ? <p>Please select a topic</p>
            : (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].title}</h3>
                <p>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].description}</p>
                <pre>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].code}</pre>
              </div>
            )
          }
        </section>
      </main>
    </div>
  );
}

export default App;
