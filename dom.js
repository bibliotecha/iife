(function domWrapper() {
  function addUserToDom(name) {
    const node = document.createElement("li");
    const text = document.createTextNode(name);
    node.appendChild(text);
    document.querySelector("#list").appendChild(node);
  }

  document.querySelector("#submit").addEventListener("click", function () {
    console.log("hello");
    const input = document.querySelector("#input");
    addUserToDom(input.value);
    input.value = "";
  });

  var users = App.getUsers();
  for (let i = 0; i < users.length - 1; i++) {
    addUserToDom(users[i]);
  }
})();
