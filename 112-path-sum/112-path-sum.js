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
    
    
    if(root == null)
        return false
    
    console.log(root.val,  targetSum)
    
    if ((root.right == null) && (root.left == null)){
       // if(targetSum == rp)
        console.log('test')
        return root.val == targetSum ;
    }

    
    
    var remainder = targetSum - root.val
    
   // console.log('test', remainder)
    
    return hasPathSum (root.right, remainder) || hasPathSum (root.left, remainder)
    
    
};