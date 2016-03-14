/**
 * Created by Jeremy on 4/01/2016.
 */
/**
 * Created by Jeremy on 10/12/2015.
 */

//permu(arr);



//function Rectangle(height, width) {
//    this.height = height;
//    this.width = width;
//
//    this.getHeight = function() {
//        return this.height;
//    };
//    this.getWidth = function(){
//        return this.width;
//    }
//}

//function Combin(rec, recO) {
//    this.rec = rec;
//    this.recO = recO;
//    this.getRec = function() {
//        return this.rec;
//    };
//    this.getRecO = function(){
//        return this.recO;
//    }
//}

//function permu(arr){
//    var result=[];
//    for (var i=0;i<arr.length-1;i++){
//        result.push(new Combin(arr[i],arr[i+1]));
//    }
//    if (arr.length%2!=0){
//        result.push(new Combin(arr[arr.length-1],arr[0]));
//    }
//    console.log(result);
//}

function k_combinations(set, k) {
    var i, j, combs, head, tailcombs;

    if (k > set.length || k <= 0) {
        return [];
    }

    if (k == set.length) {
        return [set];
    }

    if (k == 1) {
        combs = [];
        for (i = 0; i < set.length; i++) {
            combs.push([set[i]]);
        }
        return combs;
    }

    // Assert {1 < k < set.length}

    combs = [];
    for (i = 0; i < set.length - k + 1; i++) {

        head = set.slice(i, i+1);

        tailcombs = k_combinations(set.slice(i + 1), k - 1);

        for (j = 0; j < tailcombs.length; j++) {

            combs.push(head.concat(tailcombs[j]));
        }
    }
    //console.log(combs);
    return combs;

}