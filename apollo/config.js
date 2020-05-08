import cache from "./cache";

export default function(context) {
  return {
    httpEndpoint: "http://bitbucket-wp-api-vino.test/graphql",
    httpLinkOptions: {
      credentials: "same-origin"
    },
    cache
  };
}
