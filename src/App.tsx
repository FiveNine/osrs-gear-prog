import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function App() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Tombs of Amascut Gear Progression
      </div>
      <span className="textrow">November 4 2025</span>
      <Section
        title="Minimum Requirements"
        description="You are highly recommended to have these before starting ToA."
      >
        <Row orderString="zspear-- > tbp-- > swamptrident-- > dds-- > ddef-- > rpick-- > dcb-- > piety--"/>
        <Row orderString="torso-- > fcape-- > bringi-- > dboots-- > fury-- > bgloves-- > keris-- > rpouch-- "/>
        <Row orderString="nezzy-- > occult-- > bbarkt-- > bbarkb-- > saracapei-- > bhidet-- > bhideb-- > accumulator--"/>
      </Section>
      <Section
        title="Core Upgrades"
        description="Start from the left and follow the order."
      >
        <Row
          trail
          orderString="botd > dpick > fang > lb & bgs > rigour > buckler"
        />
        <Row orderString="mbook > anguish > bclaws > torms > feros" />
      </Section>

      <Section
        title="Secondary Upgrades"
        description="Sell items in red to buy the items below them."
      >
        <Row
          trail
          orderString="masorih > masorit > masorib > ayak > cgaunts $ torms > vw $ bclaws"
        />
        <Row
          trail
          orderString="torture > rancour $ torture > virtush > virtusb > virtust > bmoonb"
        />
        <Row orderString="fg > prims" />
      </Section>

      <Section
        title="Shadow Rebuild"
        description="Sell every secondary upgrade for shadow if possible."
      >
        <Row
          trail
          orderString="shadow > torms > virtush > eternals > virtusb > virtust > bclaws"
        />
        <Row
          trail
          orderString="vw $ bclaws > magus > cgaunts > augury > ancestralh $ virtush > ancestralb $ virtusb > bmoonb"
        />
        <Row
          trail
          orderString="torture > rancour $ torture > masorih > masorit > masorib > zcb > ancestralt $ magus & virtust"
        />
        <Row orderString="fg > prims > avernic" />
      </Section>

      <Section
        title="Tertiary Upgrades"
        description="Do NOT sell shadow/ancestral pieces for any of these items, including the twisted bow."
      >
        <Row orderString="atreads > tbow > torvab > torvat > torvah > zvambs" />
      </Section>

      <Section
        title=""
        description="Note: Bow of Faerdhinen setups are inferior to Masori setups.\nThey should only be used by irons or temporarily while obtaining cape upgrades."
      />
    </>
  );
}

export default App;
