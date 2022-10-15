//  var img=document.getElementsByTagName("img")
//img.addEventListener("mouseover",function()
//{
//img.style.opacity=0.1;
//})


function decreasesOpacity(img)
{

    img.style.opacity=1;
    var x=  setInterval(()=>
    {
        if (img.style.opacity >=0.3){
            var opacity=parseFloat(img.style.opacity);
            img.style.opacity=opacity-0.1;
        }else{

            clearInterval(x);
        }
    
    },100);
}

function increasesOpacity(img)
{    
    img.style.opacity=0.2;
    var y= setInterval(()=>
    {
        if(img.style.opacity <1)
        {
            var opacity=parseFloat(img.style.opacity);
            img.style.opacity=opacity+0.1;


        }
        else{

        clearInterval(y);
    }
    },100);

}

var colors=["red","blue","green","orange","yellow","brown","gray"];

function changeColor()
{
    var spans=document.getElementsByTagName("span") ;
    for(var i=0 ; i<spans.length ;i++)
    {
        var randomColor= Math.floor(Math.random()*colors.length);
        spans[i].style.color= colors[randomColor] ;
        spans[i].style.backgroundColor=colors[randomColor+1]
    }


}

function changeType()
{
    var input=document.getElementById("password");
    var type =input.getAttribute("type");
    if(type=="password")
    {
        input.setAttribute("type","text")
    }
    else if(type=="text")
    {
    input.setAttribute("type","password")
    }
}

var questiens=["questien 1","questien 2","questien 3","questien 4","questien 5","questien 6","questien 7","questien 8","questien 9","questien 10"];
var i=-1;
document.getElementById ("questien").innerText="press next to start";

function next(){

    document.getElementById ("questien").innerText=questiens[++i];
    if (i>9)
    {
        document.getElementById ("questien").innerText="finished";
        i=10;
    }

}

function previous(){ 
    document.getElementById ("questien").innerText=questiens[--i];
    if (i<0)
    {
        document.getElementById ("questien").innerText="press next to start";
        i=-1;
    }
  
}

var input=document.getElementById("input");
var type='';
var exp="";
function display(num)
{
    input.setAttribute("value",num);
    exp+=num;    
}
function getOperator (operator)
{
    type =operator ;
    exp+=type;
}
function calculate()
{
    if(exp=='')
    input.setAttribute("value",0);
    else{
         var result =eval(exp);
        input.setAttribute("value",result);
        exp='';
    }
}

function del()
{
input.setAttribute("value",0);
}



