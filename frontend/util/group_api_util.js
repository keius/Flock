export const fetchGroups = () => (
  $.ajax({
    method: 'GET',
    url: 'api/groups'
  })
);

export const fetchGroup = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  })
);

export const createGroup = (group) => (
  $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: {group}
  })
);

export const updateGroup = (group) => (
  $.ajax({
    method: 'PATCH',
    url: `api/groups/${group.id}`,
    data: {group}
  })
);

export const deleteGroup = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/groups/${id}`
  })
);

export const joinGroup = (groupId, userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/groups/${groupId}/memberships`,
    data: { membership: {group_id: groupId, user_id: userId } }
  });
};

export const leaveGroup = (groupId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/groups/${groupId}/memberships`
  });
};
