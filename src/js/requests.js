



let restrictions = [];

export async cfunction getRestWithUrl(url){

/*[{id,class,tag,..},{...}]*/

try{
    const response = await fetch("");
    const data = await response.json();
    }catch(error){
        console.error(`Erreur lors du téléchargement : ${error.message}`);
    }


}


export async function postRest(url,rest){
    const response = fetch("",{
        method:"POST",
        headers:{
            Content-Type:"application/json"
        },
        body: JSON.stringify(rest);
    })
    if(response.status===201){
        console.log(response.json());
    }
}






