const PROD = {
  apiBaseUrl: "https://jsonplaceholder.typicode.com/",
};
const STAGING = {
  apiBaseUrl: "https://jsonplaceholder.typicode.com/",
};
const DEV = {
  apiBaseUrl: "https://jsonplaceholder.typicode.com/",
};
const config =
  process.env.REACT_APP_BASE_URL === "prod"
    ? PROD
    : process.env.REACT_APP_ENV === "staging"
    ? STAGING
    : DEV;
