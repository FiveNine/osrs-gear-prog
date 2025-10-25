import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function App() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Tombs of Amascut Gear Progression
      </div>
      <span className="textrow">October 25 2025</span>
      <Section
        title="Core Upgrades"
        description="Start from the left and follow the order."
      >
        <Row
          trail
          orderString="botd > dpick > fang > lb & bgs > rigour > buckler "
        />
        <Row orderString="mbook > anguish > bclaws > torm > feros" />
      </Section>

      <Section
        title="Secondary Upgrades"
        description="Sell items in red to buy the items below them."
      >
        <Row
          trail
          orderString="masorih > masorit > masorib > ayak > conflictiong $ torm > vw $ bclaws"
        />
        <Row
          trail
          orderString="torture > rancour $ torture > virtush > virtusb > virtust > bmoonb "
        />
        <Row orderString="fg > prims " />
      </Section>

      <Section
        title="Shadow Rebuild"
        description="Sell every secondary upgrade for shadow if possible."
      >
        <Row
          trail
          orderString="shadow > torm > virtush > eternals > augury > virtusb > virtust"
        />
        <Row
          trail
          orderString="bclaws > vw $ bclaws > magus > conflictiong > ancestralh $ virtush > ancestralb $ virtusb > ancestralt $ virtust"
        />
        <Row
          trail
          orderString="bmoonb > torture > rancour $ torture > masorih > masorit > masorib > zcb"
        />
        <Row orderString="fg > prims > avernic" />
      </Section>

      <Section
        title="Tertiary Upgrades"
        description="Do NOT sell shadow/ancestral pieces for any of these items, including the twisted bow."
      >
        <Row orderString="atreads $ magus > tbow > torvab > torvat > torvah > zvambs" />
      </Section>

      <Section
        title=""
        description="Note: Bow of Faerdhinen setups are inferior to Masori setups.\nThey should only be used by irons or temporarily while obtaining cape upgrades."
      />
    </>
  );
}

export default App;
