/**
 * Created by Jeremy on 10/02/2016.
 */
function output(string){
    var n=[];
    var result="";
    for(i=0;i<string.length;i+=19){
        for (j=i;j<string.length&&j<i+19;j++){
            n.push(string[j]);
            if (result===""){result=string[j];}
            else{result=result+string[j];}
        }
        result=result+"<br>";
    }

    return result;

}