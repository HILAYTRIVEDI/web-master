monthlyExpense = {
    "January": 2200,
    "February": 2350,
    "March": 2600,
    "April": 2130,
    "May": 2190
}

# 1. In Feb, how many dollars you spent extra compare to January?
print( "In Feb I spent" , monthlyExpense["February"] - monthlyExpense["January"] , "dollars more than January" )

# 2. Find out your total expense in first quarter (first three months) of the year.
print("My total expense in first quarter of the year is" , monthlyExpense["January"] + monthlyExpense["February"] + monthlyExpense["March"] )

# 3. Find out if you spent exactly 2000 dollars in any month
# Check if any value in the dictionary is equal to 2000 using the in operator
for key, value in monthlyExpense.items():
    if value == 2000:
        print("You spent exactly 2000 dollars in" , key)
        break
    else:
        print("You didn't spend exactly 2000 dollars in" , key)
        continue


# 4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
monthlyExpense['june'] = 1980
print("June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list")

# 5. You returned an item that you bought in a month of April and got a refund of 200$. Make a correction to your monthly expense list based on this
monthlyExpense['April'] = monthlyExpense['April'] + 200
print("April Expense updated to", monthlyExpense['April'])