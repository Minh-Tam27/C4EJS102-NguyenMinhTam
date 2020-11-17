let m = Number(prompt('Insert the width'));
let n = Number(prompt('Insert the length'));
    if(n <= 0 || m <= 0){
            alert ("Insert again");
        }   
    for(let i = 1; i <= n; i++)    {
        for(let k = 1 ; k <= m; k++){
            console.log('*');
        }
    }