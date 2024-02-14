function calculatePivot() {
    const numsInput = document.getElementById('numsInput').value;
    const nums = numsInput.split(',').map(Number);
    
    let pivotIndex = findPivotIndex(nums);
    
    const resultElement = document.getElementById('result');
    if (pivotIndex !== -1) {
        resultElement.textContent = `Pivot Index: ${pivotIndex}`;
    } else {
        resultElement.textContent = 'No pivot index found.';
    }
  }
  
  function findPivotIndex(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];
  
        if (leftSum === rightSum) {
            return i;
        }
  
        leftSum += nums[i];
    }
  
    return -1;
  }