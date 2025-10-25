# OSRS Gear Prog Maker
## Usage
### Formatting
There are only two React elements used in this: `Section` and `Row`:
```ts
function Section({
  children,
  title,
  description,
}: SectionProps)

type SectionProps = {
  children?: React.ReactNode[] | React.ReactNode;
  title: string;
  description?: string;
};
```

```ts
function Row({
  orderString,
  lead,
  trail,
}: {
  orderString: string;
  lead?: boolean;
  trail?: boolean;
})
```
The `orderString` parameter takes in a specially-formatted string, which is then parsed into the images and their corresponding order.\
The item names used here have to exactly match the name of the corresponding image in `/assets`.

`>`: Simple prog right-arrow\
`bbarkh > bbarkt > bbarkl`\
<img width="229" height="62" alt="image" src="https://github.com/user-attachments/assets/2e5100f4-8618-4935-b650-f27dc2e4af8d" />

`$`\: Indicates that item should be sold by placing it on top and marking it red\
`virtush $ bbarkh > virtust $ bbarkt > virtusb $ bbarkb`\
<img width="233" height="115" alt="image" src="https://github.com/user-attachments/assets/17adaa44-6368-4503-9820-d81223fbe22b" />

`*`\: Used for marking other "special" items by marking them blue\
`*ultor > rapier`\
<img width="149" height="63" alt="image" src="https://github.com/user-attachments/assets/9c559afb-bf63-41a7-aede-c4deac8900dd" />

`&`\: Groups items similarly to `$`, but without the background\
`ayak & conflictiong`\
<img width="65" height="115" alt="image" src="https://github.com/user-attachments/assets/f8388a39-aa90-43eb-b0ba-49a9ae6a38be" />

`+`\: Replaces the right-arrow with a + icon\
`bgs + lb`\
<img width="141" height="61" alt="image" src="https://github.com/user-attachments/assets/806f80c2-6e0d-482e-9d84-5299faf67796" />

Any of the 5 above can be combined, as shown:\
`ayak & cgauntlets + ancestralh & ancestralt & ancestralb`\
<img width="156" height="168" alt="image" src="https://github.com/user-attachments/assets/5d317f31-00be-445c-bc1e-b57345274356" />

### Image naming scheme
1. Pieces of armor are named after their names + `h`/`t`/`b` (head/top/bottoms).\
Example: `torvat` for Torva platebody.
2. For long item names such as Confliction gauntlets, we take the equipment-word and contract the name.\
We follow `zvambs` for similar items and use the first syllable of the equipment-word, keeping pluralization.\
Example: `cgaunts` for Confliction gauntlets; `bgloves` for Barrows gloves.
4. For common abbreviations, such as `ultor` for Ultor ring and `rapier` for Ghrazi rapier, we stick with them for ease of use.
Note: I may consider standardizing these and adding aliases instead.
