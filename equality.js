function strictEquals (a, b){
    if (Object.is(a, b)){
    return true;
    } else {
        return false;
    }
}