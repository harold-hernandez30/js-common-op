const reducers = require("./my-reducers");

const errors = {
  emailAddress: undefined,
  name: "My Name",
};

console.log(reducers.filterNoValue(errors));
