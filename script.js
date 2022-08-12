document.body.setAttribute("style","font-size:15px;background-color:rgb(228, 177, 225)")

// button declaration

var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","book");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";
button.addEventListener("click",searchbyname);

div.append(input,button);
document.body.append(div);

function foo(tg)
{
   
    let target=tg;
    console.log(target);
    let row1=document.createElement('tr');
    row1.innerHTML=`
    <tr style="width:20px; height:20px">
    <td>${target.name}</td>
    <td>${target.isbn}</td>
    <td>${target.numberOfPages}</td>
    <td>${target.authors}</td>
    <td>${target.publisher}</td>
     <td>${target.released}</td>
    </tr>`;
       document.body.append(row1);
}

async function searchbyname()
{
try{
        var res=await fetch("https://www.anapioficeandfire.com/api/books");
        var result=await res.json();
   
    var searchbook=document.getElementById("book").value;
    var index = result.findIndex(x => x.name ===searchbook);
   
    var target={};
    console.log(target);

var returnedTarget = Object.assign(target, result[index]);


let div2=document.createElement("div");
div2.innerHTML=foo(target);


    
} catch (error) {
console.log("error");
}
}
// books
async function books()
{
    try {
        var res=await fetch("https://www.anapioficeandfire.com/api/books");
        var result=await res.json();
        
    console.log(result);
    let myTable = document.querySelector('#table');
    
    let headers = ['Name', 'isbn', 'Number of pages','Author','Publisher','Release'];
    let table = document.createElement('table');
    table.setAttribute("style","background-color: rgb(211, 221, 125)");
    
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    document.body.append(table);
    for( let i in result)
    {
    let row=document.createElement('tr');
    row.innerHTML=`<tr>
    <td>${result[i].name}</td>
    <td>${result[i].isbn}</td>
    <td>${result[i].numberOfPages}</td>
    <td>${result[i].authors}</td>
    <td>${result[i].publisher}</td>
    <td>${result[i].released}</td>
    </tr>`;
       table.append(row);
    
    } }
    catch (error) {
        console.log(error);
    }
  
}
books();