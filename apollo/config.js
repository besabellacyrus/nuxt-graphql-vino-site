import cache from "./cache";
// process.env.VUE_APP_BASEURL http://157.245.62.130/wp-api/graphql
console.log({ eeee: process.env.baseUrl });
export default function(context) {
  return {
    httpEndpoint: process.env.baseUrl,
    httpLinkOptions: {
      credentials: "same-origin"
    },
    cache
  };
}
