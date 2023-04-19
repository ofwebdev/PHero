const addToLocalStorage = (id) => {
  let friends = {};

  const storedFriend = localStorage.getItem("friends");

  if (storedFriend) {
    friends = JSON.parse(storedFriend);
  } else {
    friends = {};
  }

  const check = friends[id];
  if (check) {
    const newFriends = check + 1;
    friends[id] = newFriends;
  } else {
    friends[id] = 1;
  }

  localStorage.setItem("friends", JSON.stringify(friends));
};

export { addToLocalStorage };
