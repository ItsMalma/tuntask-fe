export function findGreatest(array: number[]) {
  if (array.length < 1) return null;

  let greatest = array[0];

  for (const element of array) {
    if (element > greatest) {
      greatest = element;
    }
  }

  return greatest;
}
