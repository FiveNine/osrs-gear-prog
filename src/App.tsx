import "./App.css";
import Row from "./Row";
import Section from "./Section";

function App() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Tombs of Amascut Gear Progression
      </div>
      <Section
        title="Core Upgrades"
        description="Start from the left and follow the order."
      >
        <Row
          trail
          orderString="botd > dpick > rigour > fang > lb & bgs > buckler > 99magic & 99ranged"
        />
        <Row
          lead
          orderString="bbarkh & bbarkb & bbarkl > augury > mbook > torm"
        />
      </Section>

      <Section title="Secondary Upgrades">
        <Row trail orderString="bmoonh > olegs > feros > bclaws" />
        <Row lead trail orderString="masorim > masorit > masorib" />
        <Row lead trail orderString="vmask > vtop > vbottom" />
        <Row lead orderString="bmoont > rancour > fg > prims " />
      </Section>
    </>
  );
}

export default App;
