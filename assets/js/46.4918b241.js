(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{502:function(v,_,e){"use strict";e.r(_);var s=e(30),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"命令提示符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令提示符"}},[v._v("#")]),v._v(" 命令提示符")]),v._v(" "),e("h2",{attrs:{id:"环境变量-ps1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量-ps1"}},[v._v("#")]),v._v(" 环境变量 PS1")]),v._v(" "),e("p",[v._v("命令提示符通常是美元符号"),e("code",[v._v("$")]),v._v("，对于根用户则是井号"),e("code",[v._v("#")]),v._v("。这个符号是环境变量"),e("code",[v._v("PS1")]),v._v("决定的，执行下面的命令，可以看到当前命令提示符的定义。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("$ echo $PS1\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("Bash 允许用户自定义命令提示符，只要改写这个变量即可。改写后的"),e("code",[v._v("PS1")]),v._v("，可以放在用户的 Bash 配置文件"),e("code",[v._v(".bashrc")]),v._v("里面，以后新建 Bash 对话时，新的提示符就会生效。要在当前窗口看到修改后的提示符，可以执行下面的命令。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("$ source ~/.bashrc\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("命令提示符的定义，可以包含特殊的转义字符，表示特定内容。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("\\a")]),v._v("：响铃，计算机发出一记声音。")]),v._v(" "),e("li",[e("code",[v._v("\\d")]),v._v("：以星期、月、日格式表示当前日期，例如“Mon May 26”。")]),v._v(" "),e("li",[e("code",[v._v("\\h")]),v._v("：本机的主机名。")]),v._v(" "),e("li",[e("code",[v._v("\\H")]),v._v("：完整的主机名。")]),v._v(" "),e("li",[e("code",[v._v("\\j")]),v._v("：运行在当前 Shell 会话的工作数。")]),v._v(" "),e("li",[e("code",[v._v("\\l")]),v._v("：当前终端设备名。")]),v._v(" "),e("li",[e("code",[v._v("\\n")]),v._v("：一个换行符。")]),v._v(" "),e("li",[e("code",[v._v("\\r")]),v._v("：一个回车符。")]),v._v(" "),e("li",[e("code",[v._v("\\s")]),v._v("：Shell 的名称。")]),v._v(" "),e("li",[e("code",[v._v("\\t")]),v._v("：24小时制的"),e("code",[v._v("hours:minutes:seconds")]),v._v("格式表示当前时间。")]),v._v(" "),e("li",[e("code",[v._v("\\T")]),v._v("：12小时制的当前时间。")]),v._v(" "),e("li",[e("code",[v._v("\\@")]),v._v("：12小时制的"),e("code",[v._v("AM/PM")]),v._v("格式表示当前时间。")]),v._v(" "),e("li",[e("code",[v._v("\\A")]),v._v("：24小时制的"),e("code",[v._v("hours:minutes")]),v._v("表示当前时间。")]),v._v(" "),e("li",[e("code",[v._v("\\u")]),v._v("：当前用户名。")]),v._v(" "),e("li",[e("code",[v._v("\\v")]),v._v("：Shell 的版本号。")]),v._v(" "),e("li",[e("code",[v._v("\\V")]),v._v("：Shell 的版本号和发布号。")]),v._v(" "),e("li",[e("code",[v._v("\\w")]),v._v("：当前的工作路径。")]),v._v(" "),e("li",[e("code",[v._v("\\W")]),v._v("：当前目录名。")]),v._v(" "),e("li",[e("code",[v._v("\\!")]),v._v("：当前命令在命令历史中的编号。")]),v._v(" "),e("li",[e("code",[v._v("\\#")]),v._v("：当前 shell 会话中的命令数。")]),v._v(" "),e("li",[e("code",[v._v("\\$")]),v._v("：普通用户显示为"),e("code",[v._v("$")]),v._v("字符，根用户显示为"),e("code",[v._v("#")]),v._v("字符。")]),v._v(" "),e("li",[e("code",[v._v("\\[")]),v._v("：非打印字符序列的开始标志。")]),v._v(" "),e("li",[e("code",[v._v("\\]")]),v._v("：非打印字符序列的结束标志。")])]),v._v(" "),e("p",[v._v("举例来说，"),e("code",[v._v("[\\u@\\h \\W]\\$")]),v._v("这个提示符定义，显示出来就是"),e("code",[v._v("[user@host ~]$")]),v._v("（具体的显示内容取决于你的系统）。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("[user@host ~]$ echo $PS1\n[\\u@\\h \\W]\\$\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])]),e("p",[v._v("改写"),e("code",[v._v("PS1")]),v._v("变量，就可以改变这个命令提示符。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v('$ PS1="\\A \\h \\$ "\n17:33 host $\n')])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])]),e("p",[v._v("注意，"),e("code",[v._v("$")]),v._v("后面最好跟一个空格，这样的话，用户的输入与提示符就不会连在一起。")]),v._v(" "),e("h2",{attrs:{id:"颜色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#颜色"}},[v._v("#")]),v._v(" 颜色")]),v._v(" "),e("p",[v._v("默认情况下，命令提示符是显示终端预定义的颜色。Bash 允许自定义提示符颜色。")]),v._v(" "),e("p",[v._v("使用下面的代码，可以设定其后文本的颜色。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("\\033[0;30m")]),v._v("：黑色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;30m")]),v._v("：深灰色")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;31m")]),v._v("：红色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;31m")]),v._v("：浅红色")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;32m")]),v._v("：绿色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;32m")]),v._v("：浅绿色")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;33m")]),v._v("：棕色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;33m")]),v._v("：黄色")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;34m")]),v._v("：蓝色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;34m")]),v._v("：浅蓝色")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;35m")]),v._v("：粉红")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;35m")]),v._v("：浅粉色")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;36m")]),v._v("：青色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;36m")]),v._v("：浅青色")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;37m")]),v._v("：浅灰色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;37m")]),v._v("：白色")])]),v._v(" "),e("p",[v._v("举例来说，如果要将提示符设为红色，可以将"),e("code",[v._v("PS1")]),v._v("设成下面的代码。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("PS1='\\[\\033[0;31m\\]<\\u@\\h \\W>\\$'\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("但是，上面这样设置以后，用户在提示符后面输入的文本也是红色的。为了解决这个问题， 可以在结尾添加另一个特殊代码"),e("code",[v._v("\\[\\033[00m\\]")]),v._v("，表示将其后的文本恢复到默认颜色。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("PS1='\\[\\033[0;31m\\]<\\u@\\h \\W>\\$\\[\\033[00m\\]'\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("除了设置前景颜色，Bash 还允许设置背景颜色。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("\\033[0;40m")]),v._v("：蓝色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;44m")]),v._v("：黑色")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;41m")]),v._v("：红色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;45m")]),v._v("：粉红")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;42m")]),v._v("：绿色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;46m")]),v._v("：青色")]),v._v(" "),e("li",[e("code",[v._v("\\033[0;43m")]),v._v("：棕色")]),v._v(" "),e("li",[e("code",[v._v("\\033[1;47m")]),v._v("：浅灰色")])]),v._v(" "),e("p",[v._v("下面是一个带有红色背景的提示符。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("PS1='\\[\\033[0;41m\\]<\\u@\\h \\W>\\$\\[\\033[0m\\] '\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("h2",{attrs:{id:"环境变量-ps2-ps3-ps4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量-ps2-ps3-ps4"}},[v._v("#")]),v._v(" 环境变量 PS2，PS3，PS4")]),v._v(" "),e("p",[v._v("除了"),e("code",[v._v("PS1")]),v._v("，Bash 还提供了提示符相关的另外三个环境变量。")]),v._v(" "),e("p",[v._v("环境变量"),e("code",[v._v("PS2")]),v._v("是命令行折行输入时系统的提示符，默认为"),e("code",[v._v(">")]),v._v("。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v('$ echo "hello\n> world"\n')])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])]),e("p",[v._v("上面命令中，输入"),e("code",[v._v("hello")]),v._v("以后按下回车键，系统会提示继续输入。这时，第二行显示的提示符就是"),e("code",[v._v("PS2")]),v._v("定义的"),e("code",[v._v(">")]),v._v("。")]),v._v(" "),e("p",[v._v("环境变量"),e("code",[v._v("PS3")]),v._v("是使用"),e("code",[v._v("select")]),v._v("命令时，系统输入菜单的提示符。")]),v._v(" "),e("p",[v._v("环境变量"),e("code",[v._v("PS4")]),v._v("默认为"),e("code",[v._v("+")]),v._v("。它是使用 Bash 的"),e("code",[v._v("-x")]),v._v("参数执行脚本时，每一行命令在执行前都会先打印出来，并且在行首出现的那个提示符。")]),v._v(" "),e("p",[v._v("比如下面是脚本"),e("code",[v._v("test.sh")]),v._v("。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v('#!/bin/bash\n\necho "hello world"\n')])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])]),e("p",[v._v("使用"),e("code",[v._v("-x")]),v._v("参数执行这个脚本。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("$ bash -x test.sh\n+ echo 'hello world'\nhello world\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br")])]),e("p",[v._v("上面例子中，输出的第一行前面有一个"),e("code",[v._v("+")]),v._v("，这就是变量"),e("code",[v._v("PS4")]),v._v("定义的。")])])}),[],!1,null,null,null);_.default=a.exports}}]);