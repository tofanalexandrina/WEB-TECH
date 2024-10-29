const getGitHubProfile=async(username)=>{
    //metoda 1
    fetch(`https://api.github.com/users/${username}`)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
}

//metoda 2
const fetchData=async(username)=>{
    try{
        const response=fetch(`https://api.github.com/users/${username}`);
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
getGitHubProfile('tofanalexandrina')
//fetchData('tofanalexandrina')