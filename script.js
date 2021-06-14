const inputWindow = document.getElementById('inputWindow');
const history = document.querySelector('#history textarea');
let isDone = false;


document.getElementById('btn_clr').addEventListener('click', function () {
    inputWindow.value = '0';
});
document.querySelector('.buttons div:nth-child(1) > button:nth-child(1)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '1';
});
document.querySelector('.buttons div:nth-child(1) > button:nth-child(2)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '2';
});
document.querySelector('.buttons div:nth-child(1) > button:nth-child(3)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '3';
});
document.querySelector('.buttons div:nth-child(1) > button:nth-child(4)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + ' + ';
});
document.querySelector('.buttons div:nth-child(2) > button:nth-child(1)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '4';
});
document.querySelector('.buttons div:nth-child(2) > button:nth-child(2)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '5';
});
document.querySelector('.buttons div:nth-child(2) > button:nth-child(3)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '6';
});
document.querySelector('.buttons div:nth-child(2) > button:nth-child(4)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + ' - ';
});
document.querySelector('.buttons div:nth-child(3) > button:nth-child(1)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '7';
});
document.querySelector('.buttons div:nth-child(3) > button:nth-child(2)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '8';
});
document.querySelector('.buttons div:nth-child(3) > button:nth-child(3)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '9';
});
document.querySelector('.buttons div:nth-child(3) > button:nth-child(4)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + ' * ';
});
document.querySelector('.buttons div:nth-child(4) > button:nth-child(1)').addEventListener('click', function () {
    if(isDone)
    {
        inputWindow.value = '0';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '.';
});
document.querySelector('.buttons div:nth-child(4) > button:nth-child(2)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '0';
});
document.querySelector('.buttons div:nth-child(4) > button:nth-child(3)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '√';
});
document.querySelector('.buttons div:nth-child(4) > button:nth-child(4)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + ' / ';
});
document.querySelector('.buttons div:nth-child(5) > button:nth-child(1)').addEventListener('click', function () {
    if(isDone || ((inputWindow.value)[0] == '0' && (inputWindow.value).length < 2))
    {
        inputWindow.value = '';
        isDone = false;
    }
    inputWindow.value = inputWindow.value + '-';
});
document.querySelector('.buttons div:nth-child(5) > button:nth-child(2)').addEventListener('click', function () {
    inputWindow.value = inputWindow.value + '=';
    let fistnumber = '';
    let secondnumber = '';
    let SorF = false;
    let IsSQRT = false;
    let sign;
    for (var i = 0; i < (inputWindow.value).length - 1 ; i++) 
    {   if (inputWindow.value[i] == '√') 
        {
            IsSQRT = true;
        }
        else
        {
            if ((inputWindow.value[i] == '+' || inputWindow.value[i] == '-' || inputWindow.value[i] == '*' || inputWindow.value[i] == '/') && ((inputWindow.value[i] == '+' || inputWindow.value[i] == '-' || inputWindow.value[i] == '*' || inputWindow.value[i] == '/') && (inputWindow.value[i-1]==' ' && inputWindow.value[i+1]==' ')))
            {
                sign = inputWindow.value[i];
                SorF = !SorF
            }
            else 
            {
                if (inputWindow.value[i]!=' ')
                {
                    if (!SorF) 
                    {
                        fistnumber += inputWindow.value[i];
                    }
                    else 
                    {
                        secondnumber+= inputWindow.value[i];
                    }
                }
            }
        }
    }
    fistnumber = parseFloat(fistnumber);
    secondnumber = parseFloat(secondnumber);
    if (IsSQRT)
    {
        inputWindow.value += Math.sqrt(fistnumber).toFixed(6);
    }
    else
    {
        if (sign == '+')
        {
            inputWindow.value += (fistnumber + secondnumber).toFixed(6);
        }
        if (sign == '-')
        {
            inputWindow.value += (fistnumber - secondnumber).toFixed(6);
        }
        if (sign == '*')
        {
            inputWindow.value += (fistnumber * secondnumber).toFixed(6);
        }
        if (sign == '/')
        {
            inputWindow.value += (fistnumber / secondnumber).toFixed(6);
        }
    }
    isDone = true;
    history.value = history.value + inputWindow.value + '\n';
});