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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    // time: O(n)
    // space: O(n^2), imbalance tree , all lies to one side, 
    
    var result = []
    //if no path then terminates
    
    if(root == null)
        return  []  
    
    //if leaf node, check if node value equals to remainder sum, return the leaf node
    if ((root.right == null) && (root.left == null))
        return (root.val == targetSum) ?  [[root.val]] : []
    else{
        // if not leaf node : check if left or right nodes found paths
        var remainder = targetSum - root.val
        var leftpath = pathSum (root.left, remainder)
        var rightpath = pathSum (root.right, remainder)
     
       
        console.log('root.val: '+root.val)
        console.log('leftpath '+ leftpath)
        console.log(leftpath)
        console.log('rightpath '+ rightpath)
        console.log(rightpath)
        
        // add path to results
        if( rightpath != null && root.right != null){
            for( const r of rightpath){
                result.push(r)
            }
        }
           
        if( leftpath != null && root.left != null){
             for( const l of leftpath){
                result.push(l)
            }
        }        
    }
    
    console.log(result)
    // add root.val to each path found
    for( i = 0; i < result.length ; i++){
        result[i].unshift(root.val)
    }
    
   // result.forEach( res => res.unshift(root.val));
    console.log('result: ' + result)
    console.log(result)
    // else look for left and right nodes
    
    return  result
    
    
};