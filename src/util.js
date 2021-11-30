export function shuffleArray(array) {
  let i = array.length;
  let randIndex;

  while (0 !== i) {
    randIndex = Math.floor(Math.random() * i);
    i--;

    [array[i], array[randIndex]] = [array[randIndex], array[i]];
  }

  return array;
}

export function prettyDateRange(fromDate, toDate) {
  const fromDateParts = fromDate.toDateString().split(" ");
  const toDateParts = toDate.toDateString().split(" ");

  return {
    fromDate: `${fromDateParts[1]} ${fromDateParts[3]}`,
    toDate: `${toDateParts[1]} ${toDateParts[3]}`,
  };
}

export function getClassNameProp(props) {
  return props.className ? " " + props.className : "";
}
