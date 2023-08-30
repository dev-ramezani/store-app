let windowHandler = {}

if( process.browser ){
    windowHandler = window
}
else{
    windowHandler = {}
}