import cache from './cache'

export default function (context) {
  return {
    httpEndpoint: 'http://157.245.62.130/wp-api/graphql',
    httpLinkOptions: {
      credentials: 'same-origin'
    },
    cache
  }
}