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

export function formatDateRange(fromDate, untilDate, current = false) {
  const from = new Date(fromDate).toDateString().split(' ');
  const until = new Date(untilDate).toDateString().split(' ');

  const prettyFrom = `${from[1]} ${from[3]}`;
  const prettyUntil = current ? `current` : `${until[1]} ${until[3]}`;

  return `${prettyFrom} - ${prettyUntil}`;
}
