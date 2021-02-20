(function usersWrapper() {
  var users = ["Tyler", "Sarah", "Dan"];

  function getUsers() {
    return users;
  }

  App.getUsers = getUsers;
})();
