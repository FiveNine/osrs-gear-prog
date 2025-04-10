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
        <Row
          trail
          orderString="bbarkt & bbarkb > augury > mbook > anguish > torm > bmoonh"
        />
        <Row orderString="obsidianb > feros" />
      </Section>

      <Section title="Secondary Upgrades">
        <Row trail orderString="bclaws > masorih > masorit > masorib > vw" />
        <Row
          trail
          orderString="virtush > virtusb > virtust > bmoonb > rancour"
        />
        <Row orderString="fg > prims > zcb" />
      </Section>

      <Section
        title="Shadow Rebuild"
        description="Sell every secondary upgrade for Shadow if possible.\n
        Sell items in green to buy the items below it."
      >
        <Row
          trail
          orderString="shadow > virtush > eternals > virtusb > virtust"
        />
        <Row
          trail
          orderString="bclaws > vw $ bclaws > magus > ancestralh $ virtush > ancestralb $ virtusb > ancestralt $ virtust"
        />
        <Row orderString="bmoonb > rancour > fg > prims > zcb" />
      </Section>

      <Section title="500+ 3-down upgrades" description="Skip this order if you do not intend on doing 500+ in the near future.">
        <Row orderString="torvah"/>
      </Section>
    </>
  );
}

export default App;
