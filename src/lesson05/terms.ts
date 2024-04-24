class Person {
  // プロパティ
  name: string
  age: number

  // コンストラクタ
  // クラスからインスタンスを生成する際に行う初期化
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // メソッド
  introduceMyself(): void {
    // thisを使う（クラスの中にある、物を参照している）
    // thisがないと外部から参照していることを意味してしまう
    console.log(`My name is ${this.name}. I am ${this.age} years old`)
  }
}

// インスタンス
// クラスから生成されたオブジェクト
const me = new Person("Takaaki", 30)
me.introduceMyself()
