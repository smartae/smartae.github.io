const aat=document.querySelector("#aat");
fetch("/get/t.json").then((d)=>d.json()).then((data)=>{
    data.forEach(v => {
        aat.innerHTML+=`
            <a href='/HG' onclick='localStorage.setItem("A","${v.a}");'>${v.n}</a>
        `;
    });
});