class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # merge 2 arrays
        nums = nums1 + nums2
        nums.sort()

        # Find the middle element
        middle = len(nums) // 2

        # If the length of the array is odd, return the middle element
        if len(nums) % 2 == 1:
            return nums[middle]

        # If the length of the array is even, return the average of the two middle elements
        else:
            return (nums[middle - 1] + nums[middle]) / 2

            