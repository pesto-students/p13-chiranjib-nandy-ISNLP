function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNums.push(numbers[i]);
      } else {
        oddNums.push(numbers[i]);
      }
    }
  
    evenNums.sort(function(a, b) {
      return a - b;
    });
  
    oddNums.sort(function(a, b) {
      return a - b;
    });
  
    console.log("Even numbers:");
    if (evenNums.length > 0) {
      for (let i = 0; i < evenNums.length; i++) {
        console.log(evenNums[i]);
      }
    } else {
      console.log("None");
    }
  
    console.log("Odd numbers:");
    if (oddNums.length > 0) {
      for (let i = 0; i < oddNums.length; i++) {
        console.log(oddNums[i]);
      }
    } else {
      console.log("None");
    }
  }
  
  let nums = [4, 2, 8, 10, 9, 1, 8];
  divideArray(nums);
  