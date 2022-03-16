(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{497:function(a,s,e){"use strict";e.r(s);var r=e(30),t=Object(r.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"算术运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算术运算"}},[a._v("#")]),a._v(" 算术运算")]),a._v(" "),e("h2",{attrs:{id:"算术表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算术表达式"}},[a._v("#")]),a._v(" 算术表达式")]),a._v(" "),e("p",[e("code",[a._v("((...))")]),a._v("语法可以进行整数的算术运算，对于非整数会报错并无法执行。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("((")]),a._v("foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("))")])]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$foo")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("在算数表达式中自动忽略空格。")]),a._v(" "),e("p",[e("code",[a._v("((...))")]),a._v("语法支持的运算符如下：")]),a._v(" "),e("p",[a._v("==算术运算符==：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("+")]),a._v("：加法")]),a._v(" "),e("li",[e("code",[a._v("-")]),a._v("：减法")]),a._v(" "),e("li",[e("code",[a._v("*")]),a._v("：乘法")]),a._v(" "),e("li",[e("code",[a._v("/")]),a._v("：除法（整除）")]),a._v(" "),e("li",[e("code",[a._v("%")]),a._v("：余数")]),a._v(" "),e("li",[e("code",[a._v("**")]),a._v("：指数")]),a._v(" "),e("li",[e("code",[a._v("++")]),a._v("：自增运算（前缀或后缀）")]),a._v(" "),e("li",[e("code",[a._v("--")]),a._v("：自减运算（前缀或后缀）")])]),a._v(" "),e("p",[a._v("==位运算符==：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("<<")]),a._v("：位左移运算，把一个数字的所有位向左移动指定的位。")]),a._v(" "),e("li",[e("code",[a._v(">>")]),a._v("：位右移运算，把一个数字的所有位向右移动指定的位。")]),a._v(" "),e("li",[e("code",[a._v("&")]),a._v("：位的“与”运算，对两个数字的所有位执行一个"),e("code",[a._v("AND")]),a._v("操作。")]),a._v(" "),e("li",[e("code",[a._v("|")]),a._v("：位的“或”运算，对两个数字的所有位执行一个"),e("code",[a._v("OR")]),a._v("操作。")]),a._v(" "),e("li",[e("code",[a._v("~")]),a._v("：位的“否”运算，对一个数字的所有位取反。")]),a._v(" "),e("li",[e("code",[a._v("^")]),a._v("：位的异或运算（exclusive or），对两个数字的所有位执行一个异或操作。")])]),a._v(" "),e("p",[a._v("==逻辑运算符==：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("<")]),a._v("：小于")]),a._v(" "),e("li",[e("code",[a._v(">")]),a._v("：大于")]),a._v(" "),e("li",[e("code",[a._v("<=")]),a._v("：小于或相等")]),a._v(" "),e("li",[e("code",[a._v(">=")]),a._v("：大于或相等")]),a._v(" "),e("li",[e("code",[a._v("==")]),a._v("：相等")]),a._v(" "),e("li",[e("code",[a._v("!=")]),a._v("：不相等")]),a._v(" "),e("li",[e("code",[a._v("&&")]),a._v("：逻辑与")]),a._v(" "),e("li",[e("code",[a._v("||")]),a._v("：逻辑或")]),a._v(" "),e("li",[e("code",[a._v("!")]),a._v("：逻辑否")]),a._v(" "),e("li",[e("code",[a._v("expr1?expr2:expr3")]),a._v("：三元条件运算符。若表达式"),e("code",[a._v("expr1")]),a._v("的计算结果为非零值（算术真），则执行表达式"),e("code",[a._v("expr2")]),a._v("，否则执行表达式"),e("code",[a._v("expr3")]),a._v("。")])]),a._v(" "),e("p",[a._v("其中自增运算符与C/C++中的自增运算符使用方式基本相同。")]),a._v(" "),e("p",[a._v("在"),e("code",[a._v("$(())$")]),a._v("中，字符串会被解析为变量名，如果找不到该变量，则使用0代替，不会报错。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# hello变量不存在")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v(" hello "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("同时如果变量的值仍然为字符串，bash会进行递归解析，直到解析为数字或找不到变量为止。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("f")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("fo\n$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("fo")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("foo\n$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("foo")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("fooo\n$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("fooo")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("f "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("26")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h2",{attrs:{id:"数值的进制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数值的进制"}},[a._v("#")]),a._v(" 数值的进制")]),a._v(" "),e("p",[a._v("Bash中的数值默认为十进制，但是可以在算术表达式中使用其他进制。")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("number")]),a._v("：没有任何特殊表示法的数字是十进制数（以10为底）。")]),a._v(" "),e("li",[e("code",[a._v("0number")]),a._v("：八进制数。")]),a._v(" "),e("li",[e("code",[a._v("0xnumber")]),a._v("：十六进制数。")]),a._v(" "),e("li",[e("code",[a._v("base#number")]),a._v("："),e("code",[a._v("base")]),a._v("进制的数。")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0xff")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("255")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v("#"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h2",{attrs:{id:"赋值运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#赋值运算"}},[a._v("#")]),a._v(" 赋值运算")]),a._v(" "),e("p",[a._v("同样，在"),e("code",[a._v("$(())$")]),a._v("中也可以执行赋值运算：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("a"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[e("code",[a._v("$((...))")]),a._v("支持的赋值运算符，有以下这些。")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("parameter = value")]),a._v("：简单赋值。")]),a._v(" "),e("li",[e("code",[a._v("parameter += value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter + value")]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("parameter -= value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter – value")]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("parameter *= value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter * value")]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("parameter /= value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter / value")]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("parameter %= value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter % value")]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("parameter <<= value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter << value")]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("parameter >>= value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter >> value")]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("parameter &= value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter & value")]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("parameter |= value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter | value")]),a._v("。")]),a._v(" "),e("li",[e("code",[a._v("parameter ^= value")]),a._v("：等价于"),e("code",[a._v("parameter = parameter ^ value")]),a._v("。")])]),a._v(" "),e("h2",{attrs:{id:"求值运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#求值运算"}},[a._v("#")]),a._v(" 求值运算")]),a._v(" "),e("p",[a._v("逗号"),e("code",[a._v(",")]),a._v("在表达式内部是求职运算符，执行前后两个表达式，并返回后一个表达式的值。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$foo")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h2",{attrs:{id:"expr命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expr命令"}},[a._v("#")]),a._v(" expr命令")]),a._v(" "),e("p",[a._v("直接进行算术运算，而无需使用"),e("code",[a._v("(())")]),a._v("语法：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("expr")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" + "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("不同的是当遇到有字符串时，"),e("code",[a._v("expr")]),a._v("命令并不会替换为0或是变量替换，而是原样输出：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("hello")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("expr")]),a._v(" hello + "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\nhello + "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("如果要进行变量替换，要在变量前加上"),e("code",[a._v("$")]),a._v("：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("expr")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$hello")]),a._v(" + "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);