const aat=document.querySelector("#aat");
fetch("/get/t.json").then((d)=>d.json()).then((data)=>{
    data.forEach(v => {
        aat.innerHTML+=`
            <a href='/HG' onclick='localStorage.setItem("A","${v.a}");'>${v.n}</a>
        `;
    });

});
const dd=document.querySelectorAll("div.dd");
let str="";
for(let v of dd){
    console.log(v);
    v.addEventListener("click",()=>{
        str+=v.getAttribute("d");
        v.style.color="#c8c8c8";
        if(str === "abc"){
            document.querySelector("a#open").style.display="flex";
        }
        setTimeout(()=>{
            str="";
            for(let k of dd)
                k.style.color="white";
        },5000);
    });
}

