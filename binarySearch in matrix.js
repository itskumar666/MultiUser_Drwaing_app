var searchMatrix = function(matrix, target) {

    let row =0;
    let col = matrix.length-1
    let start = matrix[row][matrix[0].length-1];
    let end=matrix[col][matrix[col].length-1]
    let st =0;
    let en=matrix.length-1;
    let count =0;
    var search = function(nums, target) {
        let art =0;
        let en =nums.length-1;
        while(art<=en){
            let mid=Math.floor((art+en)/2);
            if(nums[mid]==target){
                return mid;
            }
            if(nums[mid]<target){
                art =mid+1
            }
            else{
                en=mid-1
            }
        }
        return -1;
    };
    
    if(matrix.length<=1){
        
        let firstel=matrix[0]
       var singlem= search(firstel,target);
       if(singlem != -1){
    //    return new Array(0,singlem)
    return true
    }
       else{
        // return new Array(-1,-1)
        return false
       }
    }
    else{
        let count=0;
    while(st<=en){

        let mid = Math.floor((st+en)/2)
       
        let midel=matrix[mid][matrix[col].length-1]
        console.log(st,en,mid,midel,row,col)
        if(target == midel){
            // return new Array(mid,col)
            return true
        }
        // console.log(midel)
        if(target<midel){
          console.log("checking row operation : " + mid)
           var res= search(matrix[mid],target);
           if(res != -1){
            // return new Array(row,res)
            return true
            
           }
        //    console.log(res)
            row=mid-1;
            en =mid-1;
        }
        if(target>midel){
            row=mid+1;
            st=mid+1;
        }
        
     
        // count++;
        // if(count>5){
        //     break
        // }
    }}
    // return new Array(-1,-1)
    return false
};
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60],[70,80,90,100]] ,100))
console.log(searchMatrix([[-9,-9,-9,-7,-5,-3,-3,-3],[-2,-2,0,1,2,3,3,4],[5,5,5,7,9,11,11,12],[14,14,15,16,18,18,19,20],[21,23,24,25,27,29,30,31],[34,35,37,38,38,38,40,40],[42,44,44,45,47,47,47,48],[50,51,51,52,53,54,56,56],[58,59,60,62,64,64,64,66]],5));
