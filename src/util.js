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

export function groupBy(collection, keyGrabber) {
  return collection.reduce((acc, current) => {
    const key = keyGrabber(current);
    if (key in acc) acc[key].push(current);
    else acc[key] = Array.of(current);
    return acc;
  }, {});
}
