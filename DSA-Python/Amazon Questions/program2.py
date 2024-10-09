#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'numberOfItems' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. STRING s
#  2. INTEGER_ARRAY startIndices
#  3. INTEGER_ARRAY endIndices
#

def numberOfItems(s, startIndices, endIndices):
    n = [0] * len(s)

    for start, end in zip(startIndices, endIndices):
        n[start:end+1] = [1] * (end - start + 1)

        

if __name__ == '__main__':

    s = input()

    startIndices_count = int(input().strip())

    startIndices = []

    for _ in range(startIndices_count):
        startIndices_item = int(input().strip())
        startIndices.append(startIndices_item)

    endIndices_count = int(input().strip())

    endIndices = []

    for _ in range(endIndices_count):
        endIndices_item = int(input().strip())
        endIndices.append(endIndices_item)

    result = numberOfItems(s, startIndices, endIndices)

    print(result)
