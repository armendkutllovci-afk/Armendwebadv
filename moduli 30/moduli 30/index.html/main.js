var age = 18;
var answer= document.getElementById('pergjigja')

if(age>=18){
answer.innerHTML = 'Ti ki drejt vote'

}

else{
    answer.innerHTML = 'Ti ski drejt vote'
}




var input = document.getElementById('input_id')
var button = document.getElementById('btn_id')
var text = document.getElementById('text_id')


button.onclick = function()
{
   if(input.value > 10)
   {
     text.innerHTML = "input value is greater than 10"
   }
   else if(input.value < 10)
   {
    text.innerHTML = "input value is less than 10"
   }
   else
   {
    text.innerHTML = "input value is equal to 10"
   }

}