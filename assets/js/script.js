let valorEscrever = document.getElementById('elementToAlter');
    let valorInit = 0;
    function increment(){
        valorInit = valorInit +1;
        valorEscrever.innerHTML = valorInit;
    }
    function decrement(){
        valorInit = valorInit-1
        valorEscrever.innerHTML = valorInit
    }