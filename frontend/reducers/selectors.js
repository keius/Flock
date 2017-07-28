import { values } from 'lodash';

export const selectAllGroups = (state) => values(state.groups.groups);

export const sortEvents = (events) => {
  const fetchedEvents = values(events);
  return fetchedEvents.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
};
