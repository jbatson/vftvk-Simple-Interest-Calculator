function compute()
{
    var principal = document.getElementById("principal").value;

    // check if principal is greater than 0
    if(principal <= 0)
    {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = principal * years * rate /100;
    var year = new Date();
    var fullyear = year.getFullYear() + parseInt(years);
    var displayrate = rate + '%';

    // create message result
    var message = 'If you deposit <span class="highlight">' + principal + '</span><br>';
    message += 'at an interest rate of <span class="highlight">' + displayrate + '</span>' + '<br>';
    message += 'You will receive an amount of <span class="highlight">' + interest + '</span><br>';
    message += 'in the year <span class="highlight">' + fullyear + '</span><br>';

    document.getElementById('result').innerHTML = message;
}
        
function updateRate()
{
    // update rate for slider
    var rateval= document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval + '%';
}