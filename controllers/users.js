const { v4: uuidv4 } = require("uuid");

let users = [];

export default getUsers = (req, res) => {
  res.send(users);
};

export default createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with name ${user.firstName} added to db`);
};

export default getUsers = (req, res) => {
  const { id } = req.params;
  //find user with this id
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export default deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with id ${id} has been deleted`);
};

export default updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  let user = users.find((user) => user.id === id);
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`user with the id ${id} has been updated`);
};
