# AI based tic tac toe game
# Author: Hilay Trivedi
# Date: 2022-04-01
# Version: 1.0


# Def to print board
def print_board(board):
    for i , row in enumerate(board):
        row_str = ''
        for j , value in enumerate(row):
            row_str += value
            if j != len(row) - 1:
                row_str += ' | '
        print(row_str)

        if i != len(board) - 1:
            print('---------')

def get_move(board):
    while True:
        # Get the row and column
        row = int(input("Enter the row: "))
        column = int(input("Enter the column: "))

        # Check if the row and column is valid
        if row < 0 or row > 2 or column < 0 or column > 2:
            print("Invalid move. Please try again.")
            return get_move(board)

        # Check if the cell is already filled
        if board[row][column] != ' ':
            print("Cell is already filled. Please try again.")
            return get_move(board)

        # Check if the cell is empty
        if board[row][column] == ' ':
            return row, column
        else:
            print("Invalid move. Please try again.")
            return get_move(board)
    
    board[row][column] = turn

def check_win(board):
    # Check rows
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2]:
            return True
    # Check columns
    for i in range(3):
        if board[0][i] == board[1][i] == board[2][i]:
            return True
    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2]:
        return True
    if board[0][2] == board[1][1] == board[2][0]:
        return True
    return False


# Create 2d borard
board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

print_board(board)