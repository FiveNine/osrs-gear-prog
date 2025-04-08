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
  const splitItems = itemName.split("&").map((i) => i.trim());
  const separatorImg =
    separator == "+" ? `${IMG_DIR}/plus.png` : `${IMG_DIR}/arr-right.png`;
  return (
    <Fragment key={key}>
      <div className="flex flex-col">
        {splitItems.map((itemName, i) => (
          <Fragment key={i}>
            <div className="iblock">
              <a href="https://google.com/">
                <img src={`${IMG_DIR}/${itemName}.png`} />
              </a>
            </div>
            <br className="block content-[''] mt-1" />
          </Fragment>
        ))}
      </div>
      {separator && (
        <div className="iseparator">
          <img src={separatorImg} />
        </div>
      )}
    </Fragment>
  );
}

export { parseProg, formatItem };
