$_$wp(1);
function getAllProducts(array) {
    $_$wf(1);
    let newArray = ($_$w(1, 0), []);
    for (let i = 0; $_$w(1, 1), i < array.length; i++) {
        let copyArr = ($_$w(1, 2), [...array]);
        $_$w(1, 3), copyArr[i] = null;
        $_$w(1, 4), newArray.push(copyArr.reduce((acc, cV) => {
            $_$wf(1);
            if ($_$w(1, 5), cV) {
                $_$w(1, 6), acc *= cV;
            }
            return $_$w(1, 7), acc;
        }, 1));
    }
    return $_$w(1, 8), newArray;
}
$_$w(1, 9), module.exports = getAllProducts;
$_$wpe(1);