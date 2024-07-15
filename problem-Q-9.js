// This is problem solving-Q-9
const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (const subarray of nestedArrays) {
    let sum = 0;
    for (const num of subarray) {
      sum += num;
    }
    console.log(`Sum of [${subarray.join(', ')}] = ${sum}`);//Sum of [1, 2, 3] = 6, Sum of [4, 5, 6] = 15, Sum of [7, 8, 9] = 24
  }