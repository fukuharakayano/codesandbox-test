// let val2 = "let変数";
// console.log(val2);
// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);
// //letは再宣言不可能
// let val2 = "let変数を再宣言"；

//const変数は上書きも再宣言も不可
// const val3 = "const変数";
// console.log(val3);

//constで定義したオブジェクトでも、プロパティを追加したり、削除したり、上書きしたりすることができる
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "jak";
// val4.address = "Hirosima";
// console.log(val4);

//constで定義した配列でも、プロパティを追加したり、削除したり、上書きしたりすることができる

// const animals = ['dog','cat'];
// console.log(animals[1]);
// animals[0] = 'bird';
// console.log(animals[0]);
// animals.push('monkey');
// console.log(animals);

/**
 *テンプレート文字列
 */

// const name = "じゃけぇ";
// const age = 28;
// //「私の名前はじゃけぇです。年齢は28歳です。」
// //従来の方法
// const message1 = "私の名前は" 　+ name +  "です。年齢は"　 + age + "歳です。";
// console.log(message1);
// ///テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
// // 関数　　　　　　　　()の中にfunc1という関数に渡す引数を書く
//   return str;
//   //{}の中に処理を書く
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};
//処理が１行で終わるような単一式の場合returnを省略可能
//const func2 = (str) => str;

console.log(func2("func2です"));

//引数を２つ渡す場合
// const func3 = (num1,num2) => {
//   return num1 + num2;
// };
const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };

// const message1 = `名前は${myProfiel.name}です。年齢は${myProfiel.age}歳です。`;
// console.log(message1);
// //myProfielと毎回書かなければいけないので、設定項目が多かったり変数名が長かったりすると読みづらくなる

// const { name, age } = myProfile;
// // オブジェクトから指定のプロパティを引き出して使う
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//
// const myProfile = ['じゃけぇ',28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// //配列の分割代入
// const [name,age] = myProfile;
// //配列はオブジェクトのように名前が決まってないので、順番で受け取る
// //myProfileの最初の要素が最初に設定した変数に入る。次からも同様
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値値、因数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// // nameに初期値を設定しておくことで、何も引数を設定せずに呼び出した場合でもundefinedが出なくなる
// sayHello();

/**
 * スプレッド構文　 ...
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// // ... をつけると、先程は配列だったのが１と２という配列の中身を展開してくれる
// console.log(...arr1);

// const sumFunc = (num1,num2) =>  console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中","山田","じゃけぇ"];
// // for ( let i = 0; i < nameArr.length ; i++ ) {
// //   console.log(`${i　　+ 1}番目は${nameArr[i]}です`);
// // }

// // const nameArr2 = nameArr.map((name)=>{
// //   return name;
// // })
// // console.log(nameArr2);

// // nameArr.map((name,i) => console.log(`${i+1}番目は${name}です`));

// //filter

// // const numArr = [1,2,3,4,5];
// // const newNumArr = numArr.filter((num)=> {
// //   return num % 2 === 1;
// // });
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件　？　　条件がtrueの時　　：　　条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1+num2 >　　100 ? `100を超えています！！`　: `許容範囲内です`;
// };
// console.log(checkSum(50,20));

/**
 * 論理演算子の本当の意味を知ろう　 && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("１か２はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("１も２もtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
