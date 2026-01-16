const divG=document.querySelector("div.g");
const msg=document.querySelector("div.msg");
const sCount=document.querySelector("span.count");
msg.addEventListener("click",(e)=>e.target.style.display="none");
let all=[],randomN=-1;
function k(img){
    img=img.split(".")[0].replace("65","");
    let n=Number(img.replace("89",""));
    if(n>=1 && n<=50)
        return 0;
    else if(n >= 51 && n<= 100)
        return 1;
    else if(n >= 101 && n<= 150)
        return 2;
    else if(n >= 151 && n<= 200)
        return 3;
    else if(n >= 201 && n<= 250)
        return 4;
    else if(n >= 251 && n<= 300)
        return 5;
    else if(n >= 301 && n<= 350)
        return 6;
    else if(n >= 351 && n<= 400)
        return 7;
    else if(n >= 401 && n<= 450)
        return 8;
    else if(n >= 451)
        return 9;
}
function a(all){
    randomN=Math.floor(Math.random()*all.length);
    divG.querySelector("h2").innerText=all[randomN].name;
    let d=[randomN],str="";
    const lRandom=Math.floor(Math.random()*3);
    for(let i=0;i<3;i++){
        let randomN2=-1;
        do{
            randomN2=Math.floor(Math.random()*all.length);
        }while(d.includes(randomN2));
        d.push(randomN2);
        if(i === lRandom)
            str+="#6589#";
        str+=`
            <div style="background-image:url('/Assets/Images/${k(all[randomN2].img)}/${all[randomN2].img}');" onclick='f(this,event,"${all[randomN2].name}");'></div>
        `;
    }
    divG.querySelector("div").innerHTML=str.replace("#6589#",`<div style="background-image:url('/Assets/Images/${k(all[randomN].img)}/${all[randomN].img}');" onclick='f(this,event,"${all[randomN].name}");'></div>`);
}
let count=0;
if(localStorage.getItem("C") !== null){
    count=Number(localStorage.getItem("C"));
    if(count >= 0){
        sCount.style.direction="rtl";
        sCount.textContent=`عدد النقاط (${count})`;
    }
    else {
        sCount.style.direction="ltr";
        sCount.textContent=`Sir(i) thfd(i) :) [${count}]`;
    }
}
function f(t,event,b){
    function k(){
        if(count >= 0){
            sCount.style.direction="rtl";
            sCount.textContent=`عدد النقاط (${count})`;
        }
        else {
            sCount.style.direction="ltr";
            sCount.textContent=`Sir(i) thfd(i) :) [${count}]`;
        }
        localStorage.setItem("C",count);
    }
    if(b === all[randomN].name){
        event.target.style.backgroundColor="green";
        count++;
        k();
        msg.style.display="flex";
        setTimeout(() => {
            msg.style.display="none";
            a(all);
        }, 1000);
        return;
    }
    event.target.style.backgroundColor="red";
    count--;
    k();
    setTimeout(() => {
        event.target.style.backgroundColor="#7b322e";
    }, 1000);
}
fetch("/get/t.json").then((d)=>d.json()).then((data)=>{
    data.forEach(v => {
        if(v.a === localStorage.getItem("A")){
            document.querySelector(".container h1").textContent=`حفظ علامات التشوير الطرقي (${v.n})`;
            return ;
        }
    });
});
fetch(`/get/JSON/${localStorage.getItem("A")}.json`).then((d)=>d.json()).then((data)=>{
    all=data;
    a(all);

});

