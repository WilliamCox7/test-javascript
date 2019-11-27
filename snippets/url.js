function url(base, params = []) {
  let u = base;
  for (var key in params) {
    if (u === base) u += "?";
    u += `${key}=${params[key]}`;
  }
  return u;
}

let test = url(
  "https://www.test.com",
  {
    test: "blue"
  }
);

console.log(test);