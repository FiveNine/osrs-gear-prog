import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

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
        <Row orderString="bbarkt & bbarkb > anguish > augury > mbook > torm" />
      </Section>

      <Section title="Secondary Upgrades">
        <Row trail orderString="bmoonh > obsidianb > feros > bclaws" />
        <Row trail orderString="masorih > masorit > masorib" />
        <Row trail orderString="virtush > virtust > virtusb" />
        <Row trail orderString="bmoonb > rancour > fg > prims " />
        <Row orderString="zcb"/>
      </Section>

      <Section title="Shadow Rebuild">
        <Row orderString="shadow & zcb > ancestralh > ancestralb > ancestralt"/>
      </Section>
    </>
  );
}

export default App;
