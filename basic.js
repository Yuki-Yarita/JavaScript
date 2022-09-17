//1.プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。
/*
プロパティとメソッドの違いは、属性であるか動作であり、プロパティはオブジェクトの属性を示し、メソッドはオブジェクトの動作に当たる部分をいう
*/

let object = {
  showText: function() {
    console.log("メソッド")
  }
}
object.showText();

const addNum = {
  number: function() {
    console.log(5 + 12)
  }
}
addNum.number();

var  river= {
  change: function() {
    console.log(3 * 6)
  }
}
river.change();


function fruit(name, price) {
const result = name + "の値段は" + price + "円です。"
return result
};
//コンソールに表示

console.log(fruit('リンゴ', 530));


function addTax(price, func) {
// priceは値段
// funcは実行する関数名
// 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
const taxPrice = Math.round(price * 1.10);
func(fruits, taxPrice);
}
const price = function price(fruits,price) {
  console.log(fruits + "の値段は" + price + "円です");
}

// トマトの税込み価格をコンソールに表示させる処理
let fruits = "トマト";
addTax(120,price);
// 玉ねぎの税込み価格をコンソールに表示させる処理
fruits = "玉ねぎ";
addTax(240,price);
