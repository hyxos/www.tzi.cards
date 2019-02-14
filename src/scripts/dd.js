class DD {
    dd(num) {
        if (num < 10 ) {
            return '0' + num
        }
        else {
            return num
        }
    }
    
}

module.exports = DD;