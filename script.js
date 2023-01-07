(function()
{
    const formdata = document.getElementById('one');

    formdata.addEventListener('submit',function(e){
        e.preventDefault();

    const msg = document.getElementById('msg');
    const feedback = document.querySelector('.feedback');
    const result = document.getElementById('res');

    if(msg.value === ''){
        feedback.style.display = 'block';
    }
    else
    {
        result.textContent = msg.value;
        msg.value = ''
    }
}
)
}) ()
