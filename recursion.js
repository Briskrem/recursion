/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i == nums.length) return 1

  x = nums[i] * product(nums, i + 1)

  console.log(x)

  return x

}
// product([2,2,2,2,2])
/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {

  if(i == words.length) {
    console.log(i)
    return 0
  }
  // let a = words[0].length
  // console.log(a)
  // longest(words, i + 1)


  if( words[i].length > longest(words, i + 1)){
    console.log(words[i], i)
    return words[i].length
  }else{
    console.log(longest(words, i + 1), i)
    return longest(words, i + 1)
  }
  
}
// longest(['hey', 'hhhhh', 'g'])

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  let nuString = str.split()
  if(i == nuString.length || i % 2 == 0 ) return ''
  // if(i % 2 !== 0){
  //   return ''
  // }else{
  //   return nuString[i]
  // }
  console.log([nuString[i], everyOther(str, i + 1)].join(''), 'heeeee')
  return [nuString[i], everyOther(str, i + 1)].join('')
}
// everyOther('hello', i=0)

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0, store = 0) {
  if(i == arr.length) return store
  if(arr[i] == val){
    console.log('win', i)
    return i
  }
  console.log(store)
  return findIndex(arr, val, i + 1, store)
}
// findIndex([11,22,33,44,55,66,77], 33)

/** revString: return a copy of a string, but in reverse. */
// without using reverse...

function revString(str, i=str.length -1, s = '') {

  s += str[i]
  if(i == 0) return s
  return revString(str, i - 1, s )

}
// console.log(revString('zap'))

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i=0, state = []) {
  
  let values = Object.values(obj)
  if(i == values.length) {
    console.log('yyyyyyeerr')
    return state
  }
  if(typeof values[i] == 'object') state.push(...gatherStrings(values[i], i=0, state =[]))
  if(typeof values[i] == 'string') state.push(values[i])
  console.log(values, i, state)
  return gatherStrings(obj, i + 1, state)
}
let whiskey = {
  name: "Whiskey",
  age: 5,
  favFood: "popcorn",
  color: "black",
  barks: false
};
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  name:'pease',
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};
console.log(gatherStrings(nestedObj))

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
