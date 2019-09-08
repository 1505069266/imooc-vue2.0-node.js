
function randomNum() {
    // var p = document.createElement('p');
    // verCode.appendChild(p);
    // 方法一：
    var randomNu = ('000000' + Math.floor(Math.random() * 999999)).slice(-6);

    // 方法二：随机字符，从数组的尾部选取元素6个数字
    // var randomNum = Math.random().toString().slice(-6);


    // 方法三： 四舍五入取到小数点后六位数，从数组的尾部选取6个元素
    //var randomNum = Math.random().toFixed(6).slice(-6); 

    // 方法四：for循环
    //var randomNum = "";
    // for (var i = 0; i < 6; i++) {
    //   randomNum += Math.floor(Math.random() * 10);
    //}
    return randomNu
}

module.exports = randomNum

    