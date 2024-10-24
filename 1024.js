//新增變數
//ts編譯js tsc1024.ts(於終端機) 會出現js不聲明類型的寫法
var a = 1;
console.log(a);
//ts編譯js tsc1024.ts(於終端機) 聲明類型的寫法
var b;
b = 2;
console.log(b);
//node 1024.js(會直接列印))
var c = 122;
console.log(c);
//迴圈
for (var i = 0; i < 3; i++) {
    console.log("迴圈:" + i);
}
console.log("結束迴圈,但此行會錯，因為 i 已在區塊萬無效。");
console.log("由於上一航的錯誤，程式執行中斷，這一航不會被列印");
//多重迴圈
for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
    }
}
