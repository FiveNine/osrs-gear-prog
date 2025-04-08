type ItemLiterals = "botd" | "dpick" | "rigour" | "fang";
type RowString<T extends ItemLiterals> = T;

const t: RowString<"test"> = "test";
