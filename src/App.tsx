import "./App.css";
import Row from "./components/Row";
import Section from "./components/Section";

function App() {
  return (
    <>
      <div className="text-[24px] font-bold fcorange">
        Tombs of Amascut Gear Progression
      </div>
      <span className="textrow">April 11 2025</span>
      <Section
        title="Core Upgrades"
        description="Start from the left and follow the order."
      >
        <Row
          trail
          orderString="botd > dpick > rigour > fang > lb & bgs > buckler "
        />
        <Row
          trail
          orderString="bbarkt & bbarkb > augury > mbook > anguish > torm > bmoonh"
        />
        <Row orderString="obsidianb > feros" />
      </Section>

      <Section
        title="Secondary Upgrades"
        description="Sell items in red to buy the items below them.\n
        Sell everything past the Virtus mask for the ZCB."
      >
        <Row
          trail
          orderString="bclaws > masorih > masorit > masorib > vw $ bclaws"
        />
        <Row
          trail
          orderString="virtush > virtusb $ bbarkb > virtust $ bbarkt > bmoonb > torture"
        />
        <Row orderString="rancour $ torture > fg $ bmoonh > prims > zcb" />
      </Section>

      <Section
        title="Shadow Rebuild"
        description="Sell every secondary upgrade for shadow if possible."
      >
        <Row
          trail
          orderString="shadow > virtush > eternals > virtusb > virtust > bclaws"
        />
        <Row
          trail
          orderString="vw $ bclaws > magus > ancestralh $ virtush > ancestralb $ virtusb > ancestralt $ virtust > bmoonb"
        />
        <Row orderString="torture > rancour $ torture > fg > prims > avernic > zcb" />
      </Section>

      <Section
        title="500+ Invocation Level No-DDS 3-Down Upgrades"
        description="Skip if you do not intend on doing 500+ in the near future.\n
      We strongly recommend getting the infernal cape as it removes the need to buy some Torva pieces.\n
      Items in blue are useful in OD raids only."
      >
        <Row orderString="infernal" />
        <Row orderString="ultor* > rapier* > torvah $ fg > torvab $ bmoonb > torvat" />
      </Section>

      <Section
        title="Tertiary Upgrades"
        description="Do NOT sell shadow/ancestral pieces for any of these items, including the twisted bow."
      >
        <Row orderString="torvah $ fg > tbow $ torvat & torvab > torvab $ bmoonb > torvat > zvambs" />
      </Section>

      <Section
        title=""
        description="Note: Bow of Faerdhinen setups are inferior to Masori + DCB setups.\nThey should only be used by irons or temporarily while obtaining cape upgrades."
      />
    </>
  );
}

export default App;
