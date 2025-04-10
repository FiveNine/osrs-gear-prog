import { Fragment } from "react";
const IMG_DIR = "src/assets";

function parseProg(progString: string): [string[][], number] {
  const splitString = progString
    .split(">")
    .map((x) => x.split("+").map((y) => y.trim()));

  const numItems = splitString.map((x) => x.length).reduce((p, c) => p + c);
  const width = numItems * 50 + (numItems - 1) * 30;
  return [splitString, width];
}

function formatItem(itemName: string, key: number, separator?: string) {
  const splitItems = itemName
    .split("$")
    .slice(0, 2)
    .map((i) =>
      i
        .trim()
        .split("&")
        .map((j) => j.trim())
    )
    .reverse();

  const overrideSeparator = splitItems
    .flat(2)
    .map((i) => i.includes("--"))
    .reduce((state, j) => state || j);

  const sell = splitItems.length > 1;

  const separatorImg =
    separator == "+" ? `${IMG_DIR}/plus.png` : `${IMG_DIR}/arr-right.png`;
  return (
    <Fragment key={key}>
      <div
        className={`flex flex-col ${
          overrideSeparator && key > 0
            ? "ml-[15px] mr-[15px]"
            : overrideSeparator && key == 0
            ? "mr-[15px]"
            : ""
        }`}
      >
        {splitItems.map((itemGroup, i) =>
          itemGroup.map((itemName, j) => (
            <Fragment key={j}>
              <div
                className={`iblock bg-opacity-20 ${
                  sell && i == 0
                    ? "bg-[#B22222]/50"
                    : itemName.includes("*")
                    ? "bg-[#35c6d7]/50"
                    : "bg-[#010101]/20"
                }`}
              >
                <a href="https://google.com/">
                  <img
                    src={`${IMG_DIR}/${itemName.replace(/(--|\*)/g, "")}.png`}
                  />
                </a>
              </div>
              <br className="block content-[''] mt-1" />
            </Fragment>
          ))
        )}
      </div>
      {separator && !overrideSeparator && (
        <div className="iseparator">
          <img src={separatorImg} />
        </div>
      )}
    </Fragment>
  );
}

export { parseProg, formatItem };
