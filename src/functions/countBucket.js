export function countBucket(arr) {
  return arr.reduce(
    (prev, el) => {
      return +(Number(prev) + Number(el.price)*el.quantity).toFixed(2);
    },
    0
  );
}
