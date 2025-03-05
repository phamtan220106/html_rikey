let inMoney = +prompt("số tiền bạn muốn vay, vì bạn làm gì có tiền:");

//500000

let _1K=0, _2K=0, _5K=0, _10K=0, _20K=0, _50K=0, _100K=0, _200K=0, _500K=0;

function check(inMoney) {
    if (inMoney % 500000 >= 0) {
        _500K = Math.floor(inMoney / 500000);
        inMoney = inMoney - (_500K * 500000);
    }
    if (inMoney % 200000 >= 0) {
        _200K = Math.floor(inMoney / 200000);
        inMoney = inMoney - (_200K * 200000);
    }
    if (inMoney % 100000 >= 0) {
        _100K = Math.floor(inMoney / 100000);
        inMoney = inMoney - (_100K * 100000);
    }
    if (inMoney % 50000 >= 0) {
        _50K = Math.floor(inMoney / 50000);
        inMoney = inMoney - (_50K * 50000);
    }
    if (inMoney % 20000 >= 0) {
        _20K = Math.floor(inMoney / 20000);
        inMoney = inMoney - (_20K * 20000);
    }
    if (inMoney % 10000 >= 0) {
        _10K = Math.floor(inMoney / 10000);
        inMoney = inMoney - (_10K * 10000);
    }
    if (inMoney % 5000 >= 0) {
        _5K = Math.floor(inMoney / 5000);
        inMoney = inMoney - (_5K * 5000);
    }
    if (inMoney % 2000 >= 0) {
        _2K = Math.floor(inMoney / 2000);
        inMoney = inMoney - (_2K * 2000);
    }
    if (inMoney % 1000 >= 0) {
        _1K = Math.floor(inMoney / 1000);
        inMoney = inMoney - (_1K * 1000);
    }
}

function ATMs(inMoney) {
    if (_500K != 0) {
        document.write("500.000 vnd " + _500K + " tờ<br>");
    }
    if (_200K != 0) {
        document.write("200.000 vnd " + _200K + " tờ<br>");
    }
    if (_100K != 0) {
        document.write("100.000 vnd " + _100K + " tờ<br>");
    }
    if (_50K != 0) {
        document.write("50.000 vnd " + _50K + " tờ<br>");
    }
    if (_20K != 0) {
        document.write("20.000 vnd " + _20K + " tờ<br>");
    }
    if (_10K != 0) {
        document.write("10.000 vnd " + _10K + " tờ<br>");
    }
    if (_5K != 0) {
        document.write("5.000 vnd " + _5K + " tờ<br>");
    }
    if (_2K != 0) {
        document.write("2.000 vnd " + _2K + " tờ<br>");
    }
    if (_1K != 0) {
        document.write("1.000 vnd " + _1K + " tờ<br>");
    }
}

check(inMoney);
ATMs(inMoney);

