import moment from 'moment';

export function processDate(datetime) {
  const date = new Date(datetime);
  return moment(date).format('LLL');
}

export function processDay(datetime) {
  const date = new Date(datetime);
  const day = date;
}
