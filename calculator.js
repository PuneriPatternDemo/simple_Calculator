function calculate()
{
    let form= document.forms['calculator'];

    const n1=form['num1'].value;
    const n2=form['num2'].value;
    const op=form['op'].value;

    let num1=parseInt(n1);
    let num2=parseInt(n2);

    const result=document.getElementById("ans");

    switch(op)
    {
        case "add": result.innerHTML='<p>Add is : '+(num1+num2) +'</p>';break;
        case "sub": result.innerHTML='<p>Substraction is : '+(num1-num2) +'</p>';break;
        case "mult" : result.innerHTML='<p>Multiplication is : '+(num1*num2) +'</p>';break;
        case "div": result.innerHTML='<p>division is : '+(num1/num2) +'</p>';break;
    }
}