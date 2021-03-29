module.exports = class DepthCalculator {
  calculateDepth(arr, currentDepth = 1, bigestDepths = []) {
    const noMoreArrays = arr.every(v => !Array.isArray(v));
    if (noMoreArrays) {
      bigestDepths.push(currentDepth);
    } else {
      arr.forEach(element => {
        if (Array.isArray(element)) {
          this.calculateDepth(element, currentDepth + 1, bigestDepths);
        }
      });
    }
    return bigestDepths.length ? Math.max(...bigestDepths) : 1;
  }
};
