/**
 * @description 有效括号
 * @author CH
 * @LeetCode20
 * 1.遇到左括号{([就压栈
 * 2.遇到右括号就判断栈顶，匹配则出栈，一个不匹配就为false
 * 3.最后判断length是否为0
 */

// // 功能测试
// const str = '{a(b[c]d)e}f'
// console.info(123123, matchBracket(str))
