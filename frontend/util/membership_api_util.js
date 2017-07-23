export const createMembership = (membership) => {
  return $.ajax({
    method: 'POST',
    url: 'api/memberships',
    data: {membership}
  });
};

export const deleteMembership = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/memberships/${id}`,
  });
};