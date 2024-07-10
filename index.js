function generate(){
    document.getElementById("render").innerHTML="";
    html2canvas(document.querySelector("#capture")).then(canvas =>{
        document.body.appendChild(canvas)
    });
}




function download(){
    const download=document.getElementById("download");
    let image=document.querySelector("canvas").toDataURL("image/png")
        .replace("image/png","image/octate-stream");
        download.setAttribute("href",image);
    
}




document.querySelector("textarea").addEventListener("keyup",function(){
    const querytext=document.querySelector("h1");
    if(this.value !=""){
        querytext.innerHTML=this.value;
    }
    else{
        querytext.innerHTML="Start typing :)";
    }
})