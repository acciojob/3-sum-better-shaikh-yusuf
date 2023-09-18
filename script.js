function threeSumClosest(S, target) {
    // Sort the input array
    S.sort((a, b) => a - b);
    
    // Initialize variables
    let closestSum = Infinity;
    
    for (let i = 0; i < S.length - 2; i++) {
        let left = i + 1;
        let right = S.length - 1;
        
        while (left < right) {
            const currentSum = S[i] + S[left] + S[right];
            
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // Found an exact match, return immediately
                return currentSum;
            }
        }
    }
    
    return closestSum;
}

// Example usage:
const S = [-1, 2, 1, -4];
const target = 1;
const closest = threeSumClosest(S, target);
console.log(closest); // Output: 2

