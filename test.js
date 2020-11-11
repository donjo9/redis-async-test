const redis = require("redis");
let client = redis.createClient();
const { promisify } = require("util");
// Method 1
//client._quit = promisify(client.quit).bind(client);

// Method 2
client._quit = () => {
  return new Promise((resolve, reject) => {
    client.quit((err, d) => {
      if (!err) {
        console.log("This prints second");
        return resolve(d);
      } else {
        return reject(err);
      }
    });
    // if (!result) {
    //     return reject(new Error("client/connection does not exist"))
    // }
  });
};

 exports.client = client;
