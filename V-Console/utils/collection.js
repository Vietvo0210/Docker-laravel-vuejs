import _ from 'lodash'

export const removeArrayIndex = (array, index) => {
  array.splice(index, 1)
  return array
}

export const uniqueArray = array => _.toArray(new Set(array))

export const mergeObjects = (...objects) => _.extend({}, ...objects)

export const setMany = (object, values) => {
  _.each(values, (value, path) => _.set(object, path, value))
  return object
}
