class InvalidType extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidType";
    }
}

//a is input, b is compress checker
const compress = (a, b = true) => {

    if (typeof a !== 'string' && !(a instanceof String)) {
        throw new InvalidType("InvalidType");
    }
    if (typeof b !== 'boolean') {
        throw new InvalidType("InvalidType");
    }

    if(a=== ""){
        return "";
    }

    //compression
    if(b){
        let result="";
        let count=1;
        //iterating through every character in the input
        for(let i=0;i<a.length;i++){
            //if current character is the same as its successor
            if(a[i]===a[i+1]){
                count++;
            }
            //if it's different we build the result
            else{
                result+=a[i]+(count>1? count : 1);
                //resetting for a new group of characters
                count=1;
            }
        }
        return result;
    }
    //decompression
    else{
        let result="";
        for(let i=0;i<a.length;i++){
            //the character which needs to be decompressed
            let character=a[i];
            let count="";

            //if next character is a digit we add it in count
            while(i+1<a.length&&!isNaN(a[i+1])){
                count+=a[i+1];
                i++;
            }
            result += character.repeat(count ? parseInt(count) : 1);
        }
        return result;
    }


};

module.exports = compress