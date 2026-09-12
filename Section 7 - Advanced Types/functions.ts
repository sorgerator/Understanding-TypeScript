function getLength(val: any[]): number;
function getLength(val: string): string;

function getLength(val: string | any[]) {
  // return val.length;
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }

  return val.length;
}

const numOfWords = getLength("does this work?") as string;
// numOfWords.length;
const numIntems = getLength(["Sports", "Cooking"]);
