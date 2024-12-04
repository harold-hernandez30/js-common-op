// Objects - clear undefined

exports.filterNoValue = (obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => (obj[key] ? (acc[key] = obj[key]) : acc),
    {}
  );
};
