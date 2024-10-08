# Class to represnt indivual element in linked list
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Class to represent linked list
class LinkedList:
    def __init__(self):
        self.head = None
    
    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def insert_at_end(self, data):
        new_node = Node(data)
        temp = self.head
        while temp.next:
            temp = temp.next
        temp.next = new_node

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    def arrange_in_ascending_order(self):
        if self.head is None:
            return  # If the list is empty, nothing to sort

        swapped = True
        while swapped:
            swapped = False
            temp = self.head

            while temp.next:  # Traverse until the second last node
                if temp.data > temp.next.data:  # Compare adjacent nodes
                    # Swap the data
                    temp.data, temp.next.data = temp.next.data, temp.data
                    swapped = True  # Set swapped to True if a swap happens
                temp = temp.next






if __name__ == "__main__":
    linked_list = LinkedList()
    linked_list.insert_at_beginning(10)
    linked_list.insert_at_beginning(20)
    linked_list.insert_at_end(30)
    linked_list.arrange_in_ascending_order()
    linked_list.print_list()