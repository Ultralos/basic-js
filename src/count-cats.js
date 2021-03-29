module.exports = function countCats(backyard) {
  let alltrash = [];
  backyard.map((each) => {
    for (let i = 0; i < each.length; i++) {
      alltrash.push(each[i]);
    }
  });
  return alltrash.filter((each) => each === "^^").length;
};
