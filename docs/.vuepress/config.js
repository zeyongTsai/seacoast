/*
 * @Author: caizeyong
 * @Date: 2021-04-17 14:47:21
 * @Description: 
 */
module.exports = {
  title: 'Hello Sea Coast',
  description: 'Welcom to here!',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Hello Sea Coast',
      description: 'Welcom to here!'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '你好 Sea Coast',
      description: '欢迎来到这里'
    }
  }
}