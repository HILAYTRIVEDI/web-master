#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'dynamicArray' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY queries
#

def dynamicArray(n, queries):
    # Initialize the sequences (list of n empty lists)
    seqList = [[] for _ in range(n)]
    lastAnswer = 0
    result = []

    # Iterate over all queries
    for query in queries:
        queryType, x, y = query

        # Calculate the index using the formula (x ^ lastAnswer) % n
        index = (x ^ lastAnswer) % n

        if queryType == 1:
            seqList[index].append(y)
        elif queryType == 2:
            # Query type 2: retrieve element at position y % size of seqList[index]
            value = seqList[index][y % len(seqList[index])]
            lastAnswer = value
            result.append(lastAnswer)
    
    return result


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    q = int(first_multiple_input[1])

    queries = []

    for _ in range(q):
        queries.append(list(map(int, input().rstrip().split())))

    result = dynamicArray(n, queries)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
