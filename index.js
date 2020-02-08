function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode;
  if (newNode.data < rootNode.data) {
    currentNode = rootNode.left;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.left = newNode;
    }
  } else if (newNode.data > rootNode.data) {
    currentNode = rootNode.right;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.right = newNode;
    }
  }
  return true;
}

const max = nodeTree => {
  return nodeTree;
// let rootNode = nodeTree.data;
// if (rootNode.right) {
//   return rootNode.right.data;
// }
}

// {data: 5, left:
//      {data: 3, left: null, right: null},
//           right: {data: 7, left: null,
//              right: {data: 9, left: null, right: null}
//                       }}