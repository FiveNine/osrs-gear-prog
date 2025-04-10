import "./App.css";
import Row from "./components/Row";
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
          orderString="botd > dpick > rigour > fang > lb & bgs > buckler "
        />
        <Row orderString="bbarkt & bbarkb > anguish > 99ranged > augury > mbook > torm > 99magic" />
      </Section>

      <Section title="Secondary Upgrades">
        <Row trail orderString="bmoonh > obsidianb > feros > bclaws" />
        <Row trail orderString="masorih > masorit > masorib" />
        <Row trail orderString="virtush > virtust > virtusb" />
        <Row orderString="bmoonb > rancour > fg > prims " />
      </Section>
    </>
  );
}

export default App;
