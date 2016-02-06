/**
 * Created by Jeremy on 31/01/2016.
 */
/**
 * Created by Jeremy on 17/12/2015.
 */

function unique(array){
    var n = []; //一个新的临时数组

    //遍历当前数组

    for(var i = 0; i < array.length; i++){
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (n.indexOf(array[i]) == -1)
        //  等于-1,  说明array里面的这个数,   在n里面没有
        //正是因为  没有,    就把这个没有的数  push进 n这个新的临时数组里面


            n.push(array[i].trim());
        //trim去除空格
        //怕万一   array[1]的形式是:  "jeremy    "
        //使用 trim, 把  空格都去掉

    }

    return n;

}






