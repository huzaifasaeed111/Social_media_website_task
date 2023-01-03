
var data;

 async function load(){
    let res = await fetch('https://dummyjson.com/posts');
    const data = await res.json();
    let viewPost = document.getElementById('postz');
    for(let i=0;i<data.length ; i++){
        let obj =data[i];
        console.log(obj);
        body.innerHTML= obj.body;

        let body = document.getElementByClassName('post-content');
        body.appendChild(body);
        viewPost.appendChild(body);
    }
    
}

