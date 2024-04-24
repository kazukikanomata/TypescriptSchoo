// エントリポイントは慣例的に index.ts
// default export された module をさらに named export できる
export { default as function1 } from './default1' // ここのfunction1は便宜上function1にしている→変更もできるよ！
export { default as function2 } from './default2'
// named export された module をさらに named export できる
// どのファイルから、どんな名前でexportするのか？
export { function3, function4 } from './named'
