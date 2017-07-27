export function processDate(datetime) {
  const date = new Date(datetime);
  return `${date.toDateString()}, ${date.getHours()%12}`;
}
