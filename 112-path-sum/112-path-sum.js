/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    //edge case
    if(root == null)
        return false    
    
    //if child node, check if node value equals to remainder sum
    if ((root.right == null) && (root.left == null))
        return root.val == targetSum 
    
   
    var remainder = targetSum - root.val
    
    // else look for left and right nodes
    
    return hasPathSum (root.right, remainder) || hasPathSum (root.left, remainder)
    
    
};