class TreeNode:
    def __init__(self,data):
        self.data = data
        self.children=[]
        self.parent=None
    
    def addChild(self,data):
        child.parent = self
        self.children.append(TreeNode(data))
    
    def remove_last_child(self):
        slef.children.pop()

    def addChildAt(self,data,index):
        self.children.insert(index,TreeNode(data))

    def getLevel(self):
        if self.parent is None:
            return 0
        else:
            return self.parent.getLevel()+1

    def printTree(self):
        for child in self.children:
            print(child.data)
            child.printTree()


if __name__ == "__main__":
    root = TreeNode(1)
    root.addChild(2)
    root.addChild(3)
    root.addChildAt(4,0)
    print(root.getLevel())

    root.printTree()