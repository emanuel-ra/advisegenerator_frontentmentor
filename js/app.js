const init = {
    advice:{
        get:function(){
            let adivce = document.getElementById('advice_text');
            let adivce_no = document.getElementById('advice_no');
            let request = new XMLHttpRequest();
            request.open("GET","https://api.adviceslip.com/advice");
            request.send();
            request.onload = () => {
                if(request.status === 200){
                    let result = JSON.parse(request.response);
                    adivce_no.innerText = `ADVICE #${result.slip.id}`;
                    adivce.innerText = `“${result.slip.advice}"”`;
                }else{
                    console.log(`error ${request.status} ${request.statusText}`);
                }
            }
        }
    }
}