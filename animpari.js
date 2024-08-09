const p1 = Promise.resolve("calling next");
const p2 = p1.catch((reason) => {
  console.error("catch p1!");
  console.error(reason);
});
p2.then(
  (value) => {
    console.log("next promise's onFulfilled");
    console.log(value); // calling next
  },
  (reason) => {
    console.log("next promise's onRejected");
    console.log(reason);
  }
);
