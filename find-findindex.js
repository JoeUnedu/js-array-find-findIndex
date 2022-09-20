/* 
Write a function called `findUserByUsername` which accepts an array 
of objects, each with a key of username, and a string. 
The function should return the first object 
with the key of username that matches the string 
passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(usersArray, username) {
  let usersHolder = usersArray.find(function (users) {
    //find() , finds by default the  first string using users.username
    if (users.username === username) {
      return users.username;
    }
  });
  return usersHolder;
}
let findUserByUsernameHolder = findUserByUsername(
  [{ username: "mlewis" }, { username: "akagen" }, { username: "msmith" }],
  "mlewis"
);
console.log(`find user that match:`, findUserByUsernameHolder);

/*
Write a function called `removeUser` which accepts an 
array of objects, each with a key of username, and a string.
 The function should remove the object from the array.
  If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let findIdxHolder = usersArray.findIndex(function (findIdx) {
    if (findIdx.username === username) {
      return findIdx.username;
    }
  });
  if (findIdxHolder !== -1) {
    let newCopyHolder = usersArray[findIdxHolder]; // make a  new copy
    // move findIdxHolder to the first  array element  then shift()
    usersArray.splice(usersArray.indexOf(findIdxHolder), 1);
    usersArray.unshift(findIdxHolder); // add findIdxHolder to the begining of array
    usersArray.shift(); // remove the first element in the array
    return newCopyHolder;
  } else {
    return undefined;
  }
  /*
  alternative method using pop()
  let move the middle element to the last item of of the array
  
    for (let i = 0; i < usersArray.length - 1; i++) {
      usersArray[i] = usersArray[i]++;
    }
usersArray.pop();
    return newCopyHolder;
  } else {
    return undefined;
  }

    */
}
let removeUserHolder = removeUser(
  [{ username: "mlewis" }, { username: "akagen" }, { username: "msmith" }],
  "akagen"
);
console.log(` remove user if found:`, removeUserHolder);
