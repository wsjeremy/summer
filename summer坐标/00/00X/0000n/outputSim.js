/**
 * Created by Jeremy on 10/02/2016.
 */
function outputSim(string){
    var n=[];
    var result="";
    for(i=0;i<string.length;i+=1){
        for (j=i;j<string.length&&j<i+1;j++){
            n.push(string[j]);
            if (result===""){result=string[j];}
            else{result=result+string[j];}
        }
        result=result+"<br>";
    }

    return result;

}