function checkPronic(num) {
    var flag = 0;
    for (let i = 0; i <= 100; i++) {
        if (i * (i + 1) === num) {
            flag = flag + 1;
        }
    }
    if (flag !== 0) {
        return "Pronic"
    } else {
        return "Not Pronic"
    }
}
