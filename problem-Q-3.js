// This is problem solving-Q-3
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3));        // 6
  console.log(sum(10, 20, 30, 40)); // 100
  console.log(sum(5));              // 5