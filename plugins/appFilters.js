import Vue from 'vue'

export function capitalize (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const filters = { capitalize }

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default filters