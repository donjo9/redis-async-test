const {client} = require("./test")
const test = async () => {
  await client._quit();
  console.log("This prints last");

}

test();
console.log("This should print first");