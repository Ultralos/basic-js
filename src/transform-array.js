module.exports = function transform(arr) {
  let newArr = [];

  let discardPrev = false;
  let discardNext = false;
  let doublePrev = false;
  let doubleNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (discardNext) {
      discardNext = false;
      continue;
    }
    if (doubleNext) {
      doubleNext = false;
      newArr.push(arr[i]);
    }
    if (discardPrev) {
      discardPrev = false;

      newArr.pop();
    }
    if (doublePrev) {
      doublePrev = false;

      newArr.push(newArr[newArr.length - 1]);
    }

    if (arr[i] === "--discard-prev") {
      if (i === 0) {
        continue;
      }
      if (i >= 2 && arr[i - 2] === "--discard-next") {
        continue;
      }
      if (i === arr.length - 1) {
        newArr.pop();
      }
      discardPrev = true;
      continue;
    }
    if (arr[i] === "--discard-next") {
      discardNext = true;
      continue;
    }
    if (arr[i] === "--double-prev") {
      if (i === 0) {
        continue;
      }

      if (i >= 2 && arr[i - 2] === "--discard-next") {
        continue;
      }
      if (i === arr.length - 1) {
        newArr.push(newArr[newArr.length - 1]);
      }
      doublePrev = true;
      continue;
    }
    if (arr[i] === "--double-next") {
      doubleNext = true;
      continue;
    }

    newArr.push(arr[i]);
  }

  return newArr;
};
