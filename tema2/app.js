
function render(input, values){
    if(typeof input!== 'object' || typeof values!== 'object'|| input===null||values===null){
        throw new Error('InvalidType');    
    }

    if(Object.keys(input).length===0){
        return '';
    }

    function renderObject(obj){
        //aici stochez rezultatul final(tag-urile html)
        let result='';

        for(let key in obj){
            //pentru fiecare key obtinem value care poate fi
            let value=obj[key]
            //1. obiect
            if(typeof value==='object'){
                //construim structura ierarhica de tag-uri(se foloseste apel recursiv)
                result+=`<${key}>${renderObject(value)}</${key}>`;
            }//2. string
            else{
                //primul parametru detecteaza orice token de forma ${key}
                let substitutedValue=value.replace(/\$\{(\w+)\}/g, (match, token)=>{
                    return values[token]||'';
                });
                result +=`<${key}>${substitutedValue}</${key}>`;
            }
        }
        return result;
    }
    return renderObject(input);
}

module.exports = {
    render
}