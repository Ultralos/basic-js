

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const sampleNum = Number(sampleActivity);

  if (!sampleNum || sampleNum > MODERN_ACTIVITY || sampleNum < 0) {
    return false;
  }
  const ln = Math.log(MODERN_ACTIVITY / sampleNum);
  return Math.ceil(ln / k);
};

