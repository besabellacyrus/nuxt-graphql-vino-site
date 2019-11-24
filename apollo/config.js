import cache from './cache'

export default function(context) {
  return {
    httpEndpoint: 'http://headless-cms.test/graphql',
    httpLinkOptions: {
      credentials: 'same-origin'
    },
    cache
  }
}