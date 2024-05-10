// XOR solution
// Time complexity: O(n)
// Spacial complexity: O(1)
function singleNumber(nums: number[]): number {
  let aux = 0;

  for (let nro of nums) {
    aux ^= nro;
  }

  return aux;
}

// HashMap solution
// Time complexity: O(n)
// Spacial complexity: O(n)
function singleNumber2(array: number[]): number | null {
  let map = new Map();

  for (let nro of array) {
    if (map.has(nro)) {
      map.set(nro, map.get(nro) + 1);
    } else {
      map.set(nro, 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }
  return null;
}
