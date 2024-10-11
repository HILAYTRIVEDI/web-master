class Solution:
    def containsNearbyDuplicate(self, nums, k) -> bool:
        n = len(nums)

        for i in range(n-1):
            for j in range(i+1, n):
                if nums[i] == nums[j]:
                    if abs(i - (j)) <= k:
                        return True
        
        return False

    

solution = Solution()
print(solution.containsNearbyDuplicate([1,2,3,1,2,3], 2))