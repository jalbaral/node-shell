// process.stdin.on("data", (data) => {
//   const cmd = data.toString().trim();

//   if (cmd === "pwd") {
//     console.log(__dirname);
//   }
// });

module.exports = function () {
  console.log(__dirname);
};
