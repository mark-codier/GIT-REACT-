import { useState } from "react";
import { conceptsArr, examplesObj } from "../data.js";
import UL from "./cards/cardsTemplate.jsx";
import Section from "./section";
import ExampleTabs from "./Examples/ExampleTabs.jsx";
import { Menu, Examples } from "./Examples/examples";
export default function Main() {
  //=====================HOOKS=========================================

  const [stateObj, setStateObject] = useState(examplesObj["components"]);

  //=====================VARIABLES=====================================

  const examplesArr = Object.values(examplesObj);

  //=====================FUNCTIONS=====================================

  function handler(title) {
    setStateObject(examplesObj[title]);
  }

  //=====================RETURN`========================================
  return (
    <main>
      <Section id="core-concepts" title="Основные концепции">
        <UL dataArr={conceptsArr} />
      </Section>
      <ExampleTabs id="examples" title="Examples" buttons={
        <Menu Arr={examplesArr} handler={handler} />
      }>
        <Examples obj={stateObj} id="tab-content" />
      </ExampleTabs>
    </main> //;
  );
}
