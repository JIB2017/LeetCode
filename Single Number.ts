function singleNumber(nums: number[]): number {
  let aux = 0;

  for (let nro of nums) {
    aux ^= nro;
  }

  return aux;
}
