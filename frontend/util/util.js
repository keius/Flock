export function processDate(datetime) {
  const date = new Date(datetime);
  const day = date.toUTCString();
  // const time = () => {
  //   if (date.getHours() > 12) {
  //     return `${date.getHours()%12} PM`;
  //   } else {
  //     return `${date.getHours()} AM`;
  //   }
  // };
  return `${day}`;
}
