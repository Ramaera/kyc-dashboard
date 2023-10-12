const allUsersUpdater = (usersList, updatedUser) => {
  let updatedAllUsers = [];
  usersList.map((user) => {
    if (updatedUser.id === user?.id) {
      updatedAllUsers.push(updatedUser);
    } else updatedAllUsers.push(user);
  });
  return updatedAllUsers;
};

export default allUsersUpdater;
