class Solution:
    def isHappy(self, n: int) -> bool:
        # Check if the number is single digit
        if n < 10:
            return False
    
        # split the number into its digits
        digits = list(str(n))

        # Check if the sums quare of each digit is equal to 1 it not continue the loop
        for i in range(len(digits)):
            if int(digits[i]) ** 2 != 1:
                print(int(digits[i]) ** 2)
                return False
        
        return True



solution = Solution()
print(solution.isHappy(19))