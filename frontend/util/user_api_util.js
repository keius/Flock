export const editUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: {user}
  });
};

export const fetchGroupUsers = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
    data: {group_id: id}
  });
};

export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};

export const joinGroup = (groupId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/groups/${groupId}/memberships`,
    data: { membership: {group_id: groupId } }
  });
};

export const leaveGroup = (groupId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/groups/${groupId}/memberships`
  });
};
