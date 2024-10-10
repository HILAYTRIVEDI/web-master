class BinarySearchTreeNode:

    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def add_child(self, data):
        if data == self.data:
            return
        
        if data < self.data:
            if self.left:
                self.left.add_child(data)
            else:
                self.left = BinarySearchTreeNode(data)
        
        else:
            if self.right:
                self.right.add_child(data)
            else:
                self.right = BinarySearchTreeNode(data)

    def get_max(self):
        if self.right:
            return self.right.get_max()
        else:
            return self.data

    def get_min(self):
        if self.left:
            return self.left.get_min()
        else:
            return self.data
    
    def get_level(self):
        if self.left and self.right:
            return 1 + max(self.left.get_level(), self.right.get_level())
        else:
            return 0
    
    def delete(self, data):
        if data == self.data:
            if self.left and self.right:
                self.data = self.right.get_min()
                self.right.delete(self.data)
            else:
                self.data = self.left.get_max()
                self.left.delete(self.data)
        
        elif data < self.data:
            if self.left:
                self.left.delete(data)
            else:
                self.data = self.left.get_max()
                self.left.delete(self.data)
        
        else:
            if self.right:
                self.right.delete(data)
            else:
                self.data = self.right.get_min()
                self.right.delete(self.data)