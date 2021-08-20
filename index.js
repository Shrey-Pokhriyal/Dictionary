console.log("hello");
let btn=document.getElementById("search");
btn.addEventListener('click',SearchWord);
function SearchWord()
{
let val=getword();
    const xhr=new XMLHttpRequest();
    xhr.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en_US/${val}`,true);

    xhr.onload= function()
    {
        if(this.status==200)
        {
            let obj = JSON.parse(this.responseText);
            // console.log(obj[0].meanings[0].definitions[0].definition);
            let x=obj[0].meanings[0].definitions[0].definition;
            console.log(x);
            let str=`<div class="card text-center mx-5 my-5">
            <div class="card-header">
              <h3>${val}</h3>
            </div>
            <div class="card-body">
              <h5 class="card-title" style="color:brown">${x}</h5>
            </div>
          </div>`;
          let cont=document.getElementById("helloworld");
          cont.innerHTML=str;
        }
        else
        {
            let str=`<div class="card text-center mx-5 my-5">
            <div class="card-header">
              <h3><b>${val}</b><div style="color:red">SORRY WORD NOT FOUND</div></h3>
            </div>
          </div>`;
          let cont=document.getElementById("helloworld");
          cont.innerHTML=str;
        }
    }
    xhr.send();
}
function getword()
{
    let word=document.getElementById("var").value;
    return word;
}
let ref=document.getElementById("refresh");
ref.addEventListener("click",function(e){
    document.getElementById("var").value="";
})