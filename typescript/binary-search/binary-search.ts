export default class BinarySearch {
  array: Array<number> | undefined;

  constructor(arr: Array<number>) {
    if (this.isArraySorted(arr)) {
      this.array = arr;
    }
  }

  isArraySorted = (array: Array<number>) =>
    array
      .slice(0) // clone array
      .sort((a: number, b: number) => a - b) // sort it
      .every((el: number, i: number) => el === array[i]);

  indexOf = (x: number): number => {
    if (this.array === undefined) {
      return -1;
    }
    // this achieves the same check:
    // this.array = this.array!;

    let l = 0;
    let r = this.array.length;

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);

      if (this.array[mid] === x) {
        return mid;
      } else if (this.array[mid] < x) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return -1;

    // def binarySearch(arr, l, r, x):

    // while l <= r:

    //     mid = l + (r - l) // 2;

    //     # Check if x is present at mid
    //     if arr[mid] == x:
    //         return mid

    //     # If x is greater, ignore left half
    //     elif arr[mid] < x:
    //         l = mid + 1

    //     # If x is smaller, ignore right half
    //     else:
    //         r = mid - 1

    // # If we reach here, then the element
    // # was not present
    // return -1

    // return this.array.indexOf(value);
  };
}
