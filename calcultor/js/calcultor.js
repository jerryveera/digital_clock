var btn_add = document.getElementById("btn_add")
btn_add.addEventListener("click",function()
{
   
    var num1 = document.getElementById("num1").value
    
    var num2 = document.getElementById("num2").value

    var sum = Number(num1) + Number(num2)
    console.log(sum)
   
    var result = document.getElementById("result")
    result.textContent= "the result of addition is :" + sum;
    var div2 = document.getElementById("div2")
    div1.style.display="none"
    div2.style.display="block"

});

var btn_mul = document.getElementById("btn_mul")
btn_mul.addEventListener("click",function()
{
    var num1 = document.getElementById("num1").value;
    
    var num2 = document.getElementById("num2").value
    var sum1 = Number(num1) * Number(num2)
    console.log(sum1)
    var result = document.getElementById("result")
    result.textContent= "the result of multiple is :" + sum1; 
    var div2 = document.getElementById("div2")
    div1.style.display="none"
    div2.style.display="block"
});

var btn_sub = document.getElementById("btn_sub")
btn_sub.addEventListener("click",function()
{
    var num1 = document.getElementById("num1").value;
    
    var num2 = document.getElementById("num2").value
    
    
    var sum2 = Number(num1) - Number(num2)
    console.log(sum2)

    var result = document.getElementById("result")
    result.textContent= "the result of subtraction is :" + sum2; 
    var div2 = document.getElementById("div2")
    div1.style.display="none"
    div2.style.display="block"
});

var btn_div = document.getElementById("btn_div")
btn_div.addEventListener("click",function()
{
    var num1 = document.getElementById("num1").value;
    
    var num2 = document.getElementById("num2").value
    
    
    var sum3 = Number(num1) / Number(num2)
    console.log(sum3)

    var result = document.getElementById("result")
    result.textContent= "the result of division is :" + sum3; 
    var div2 = document.getElementById("div2")
    div1.style.display="none"
    div2.style.display="block"
});