const friends = [
  {
    "_id": "5c8a1dfa2f8fb814b56fa181",
    "name": "Lourdes Browning",
    "email": "loulou@example.com",
    "role": "user",
    "active": true,
    "photo": "user-2.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "_id": "5c8a1e1a2f8fb814b56fa182",
    "name": "Sophie Louise Hart",
    "email": "sophie@example.com",
    "role": "user",
    "active": true,
    "photo": "user-3.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "_id": "5c8a1ec62f8fb814b56fa183",
    "name": "Ayla Cornell",
    "email": "ayls@example.com",
    "role": "user",
    "active": true,
    "photo": "user-4.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "_id": "5c8a1f292f8fb814b56fa184",
    "name": "Leo Gillespie",
    "email": "leo@example.com",
    "role": "guide",
    "active": true,
    "photo": "user-5.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "_id": "5c8a1f4e2f8fb814b56fa185",
    "name": "Jennifer Hardy",
    "email": "jennifer@example.com",
    "role": "guide",
    "active": true,
    "photo": "user-6.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "_id": "5c8a201e2f8fb814b56fa186",
    "name": "Kate Morrison",
    "email": "kate@example.com",
    "role": "guide",
    "active": true,
    "photo": "user-7.jpg",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

exports.getAllFriends = (req, res) => {
  res.status(200).json({
    friends
  });
}

exports.getFriend = (req, res) => {
  let friendId = req.params.friendId
  let friend = friends.find(friend => friend._id == friendId)
  res.status(200).json({
    friend
  })
}