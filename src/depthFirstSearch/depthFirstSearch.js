function depthFirstSearch(node, result = []) {
  if (node) {
      result.push(node.value);
      depthFirstSearch(node.left, result);
      depthFirstSearch(node.right, result);
  }
  return result;
}

module.exports = depthFirstSearch;