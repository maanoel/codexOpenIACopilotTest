function UserPolicy(type) {
  const Users = {
    admin: "This user is admin",
    client: "This user is client",
    salesman: "This user is salesman",
    default: "This user is not defined",
  };

  return Users[type] || Users.default;
}

function TestUserPolicy() {
  const user = UserPolicy("admin");
  console.log(user);
}
