/**
 * Created by Jeremy on 18/12/2015.
 */


function duplicate(arr){

    var sorted_arr = arr.sort(); // You can define the comparing function here.
                                 // JS by default uses a crappy string compare.
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }

    return results;

}

function checkDuplicate(array1,array2){

    return array1.filter(function(element) {
        return array2.indexOf(element) != -1;

        //filter相当于是一个循环的操作
        // array1 例如  ["a","b","c"]
        // array2 例如  ["a","e"]


        // array1.filter(function(element)
        // element就是   循环的在   array1中拿元素
        //依次 拿    "a","b","c"
        //  array2.indexOf(a)=0, 因为是在array第0个元素的地方吻合
        //就会返回   true
        //这个全素就自动的  放入一个 新的数组

    });

}