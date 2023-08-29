function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

  const findMin = (...args) => Math.min(...args)

  const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

  const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

  const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

  const extend = (array1, array2) => {
    return [...array1, ...array2];
  } 
    
  const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val };
}

const removeKey = (obj, key) => {
    ({ [key]: undefined, ...obj } = obj);
    return obj;
}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }

  const update = (obj, key, val) => {
    return { ...obj, [key]: val };
}
