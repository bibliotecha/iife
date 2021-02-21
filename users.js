1(
  // - How we used to do things...

  // function usersWrapper() {
  //   var users = ["Tyler", "Sarah", "Dan"];

  //   function getUsers() {
  //     return users;
  //   }

  //   App.getUsers = getUsers;
  // };

  // usersWrapper()

  // 2.
  // - Don't want to include any function names to the global name space

//   function () {
//     var users = ["Tyler", "Sarah", "Dan"];

//     function getUsers() {
//       return users;
//     }

//     App.getUsers = getUsers;
//   }
// )();

// 3.
// - Want to avoid using IIFE's (not pretty)
// - Don't want to include any variables (functions) to the global name space

// CommonJS Approach
// var users = ["Tyler", "Sarah", "Dan"];

// function getUsers() {
//   return users;
// }

// module.exports.getUsers = getUsers;

// - No more IIFE's!
// - No need to create App object (which will be exposed as global namespace)
