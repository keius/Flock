import {values} from 'lodash';

export const allGroups = (groups) => {
  let arr = [];
  if (groups) {
    let keys = Object.keys(groups);
    keys.forEach( key => arr.push(groups[key]));
  }
  return arr;
};
