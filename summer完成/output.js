/**
 * Created by Jeremy on 5/02/2016.
 */
function output(array){
    var n=[];
    var result="";
    for(i=0;i<array.length;i+=6){
        for (j=i;j<array.length&&j<i+6;j++){
            n.push(array[j]);
            if (result===""){result=array[j];}
            else{result=result+' , '+array[j];}
        }
        result=result+"<br>";
    }

return result;

}