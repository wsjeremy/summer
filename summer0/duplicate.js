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