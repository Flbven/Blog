(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{495:function(s,a,e){"use strict";e.r(a);var t=e(30),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"bash变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash变量"}},[s._v("#")]),s._v(" Bash变量")]),s._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("Bash变量分为"),e("code",[s._v("环境变量")]),s._v("和"),e("code",[s._v("自定义变量")]),s._v("两类。")]),s._v(" "),e("h3",{attrs:{id:"环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),e("p",[s._v("环境变量是Bash环境自带的变量，进入Shell就已经定义好了。")]),s._v(" "),e("p",[s._v("使用如下命令可以显示所有环境变量。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("printenv")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("查看单个环境变量。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("printenv")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("常见的环境变量：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("BASHPID")]),s._v("：Bash 进程的进程 ID。")]),s._v(" "),e("li",[e("code",[s._v("BASHOPTS")]),s._v("：当前 Shell 的参数，可以用"),e("code",[s._v("shopt")]),s._v("命令修改。")]),s._v(" "),e("li",[e("code",[s._v("DISPLAY")]),s._v("：图形环境的显示器名字，通常是"),e("code",[s._v(":0")]),s._v("，表示 X Server 的第一个显示器。")]),s._v(" "),e("li",[e("code",[s._v("EDITOR")]),s._v("：默认的文本编辑器。")]),s._v(" "),e("li",[e("code",[s._v("HOME")]),s._v("：用户的主目录。")]),s._v(" "),e("li",[e("code",[s._v("HOST")]),s._v("：当前主机的名称。")]),s._v(" "),e("li",[e("code",[s._v("IFS")]),s._v("：词与词之间的分隔符，默认为空格。")]),s._v(" "),e("li",[e("code",[s._v("LANG")]),s._v("：字符集以及语言编码，比如"),e("code",[s._v("zh_CN.UTF-8")]),s._v("。")]),s._v(" "),e("li",[e("code",[s._v("PATH")]),s._v("：由冒号分开的目录列表，当输入可执行程序名后，会搜索这个目录列表。")]),s._v(" "),e("li",[e("code",[s._v("PS1")]),s._v("：Shell 提示符。")]),s._v(" "),e("li",[e("code",[s._v("PS2")]),s._v("： 输入多行命令时，次要的 Shell 提示符。")]),s._v(" "),e("li",[e("code",[s._v("PWD")]),s._v("：当前工作目录。")]),s._v(" "),e("li",[e("code",[s._v("RANDOM")]),s._v("：返回一个0到32767之间的随机数。")]),s._v(" "),e("li",[e("code",[s._v("SHELL")]),s._v("：Shell 的名字。")]),s._v(" "),e("li",[e("code",[s._v("SHELLOPTS")]),s._v("：启动当前 Shell 的"),e("code",[s._v("set")]),s._v("命令的参数，参见《set 命令》一章。")]),s._v(" "),e("li",[e("code",[s._v("TERM")]),s._v("：终端类型名，即终端仿真器所用的协议。")]),s._v(" "),e("li",[e("code",[s._v("UID")]),s._v("：当前用户的 ID 编号。")]),s._v(" "),e("li",[e("code",[s._v("USER")]),s._v("：当前用户的用户名。")])]),s._v(" "),e("p",[s._v("很多环境变量很少变化，而且是只读的，可以视为常量。")]),s._v(" "),e("p",[s._v("注意，Bash变量名区分大小写。")]),s._v(" "),e("h3",{attrs:{id:"特殊变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特殊变量"}},[s._v("#")]),s._v(" 特殊变量")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("$?")]),s._v("：上一个命令的退出码，用于判断上一个命令是否执行成功")]),s._v(" "),e("li",[e("code",[s._v("$$")]),s._v("：当前Shell的进程ID")]),s._v(" "),e("li",[e("code",[s._v("$_")]),s._v("：上一个命令的最后一个参数")]),s._v(" "),e("li",[e("code",[s._v("$!")]),s._v("：最近一个后台执行的异步命令的进程ID")]),s._v(" "),e("li",[e("code",[s._v("$0")]),s._v("：当前Shell的名称")]),s._v(" "),e("li",[e("code",[s._v("$-")]),s._v("：当前Shell的启动参数")]),s._v(" "),e("li",[e("code",[s._v("$@")]),s._v("和"),e("code",[s._v("$#")]),s._v("：脚本的参数数量和脚本的参数值")])]),s._v(" "),e("h3",{attrs:{id:"自定义变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义变量"}},[s._v("#")]),s._v(" 自定义变量")]),s._v(" "),e("p",[s._v("自定义变量是指用户在当前Shell里自己定义的变量，==仅在当前Shell生效==。")]),s._v(" "),e("p",[e("code",[s._v("set")]),s._v("命令可以显示所有变量（包含环境变量和自定义变量），以及所有的Bash函数。")]),s._v(" "),e("h2",{attrs:{id:"变量的相关操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量的相关操作"}},[s._v("#")]),s._v(" 变量的相关操作")]),s._v(" "),e("h3",{attrs:{id:"创建变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建变量"}},[s._v("#")]),s._v(" 创建变量")]),s._v(" "),e("p",[s._v("创建变量的基本语法：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("variable")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("与其他常见编程语言创建变量不同的是在等号两侧不能有空格。")])]),s._v(" "),e("p",[s._v("自定义变量有多种形式：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("z                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量 a 赋值为字符串 z")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a string"')]),s._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量值包含空格，就必须放在引号里面")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("c")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a string and '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v('"')]),s._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量值可以引用其他变量的值")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("d")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),e("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("a string"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量值可以使用转义字符")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("e")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l foo.txt"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量值可以是命令的执行结果")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("f")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量值可以是数学运算的结果")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("读取变量时在变量名前面加上"),e("code",[s._v("$")]),s._v("。")]),s._v(" "),e("p",[s._v("如果要将变量名与其它字符连用，可以使用"),e("code",[s._v("{}")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ a "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a_file")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测a_file变量不存在，输出空字符")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${a}")]),s._v("_file\nfoo_file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("如果要将变量本身解释为其他变量，可以使用"),e("code",[s._v("${!varname}$")]),s._v("的语法：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myvar")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("myvar}")]),s._v("\nroot\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如果将变量设置为自己的名字，并不会进行解释：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myvar")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myvar\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("myvar}")]),s._v("\nmyvar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("变量值包含连续空格时，最好放在双引号里读取：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 2  3"')]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v('"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"删除变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除变量"}},[s._v("#")]),s._v(" 删除变量")]),s._v(" "),e("p",[s._v("事实上删除变量和把变量置空是相同的，所以以下操作都可以删除变量：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" NAME\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"输出变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输出变量"}},[s._v("#")]),s._v(" 输出变量")]),s._v(" "),e("p",[s._v("用户创建的变量仅可用于当前Shell，如果要把变量传递给子Shell，需要使用"),e("code",[s._v("export")]),s._v("，这样输出的变量在子Shell中视为环境变量。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("同时子Shell对继承的变量操作并不会影响到当前Shell。")]),s._v(" "),e("h3",{attrs:{id:"变量的默认值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量的默认值"}},[s._v("#")]),s._v(" 变量的默认值")]),s._v(" "),e("p",[s._v("以下几种语法是为了保证变量不为空，当变量不存在或为空时提供一种默认值。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${varname"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("word}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# varname存在且不为空？返回varname：返回word")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${varname"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v("word}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# varname存在且不为空?返回varname:设置varname为word并返回word")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${varname"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":+")]),s._v("word}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# varname存在且不为空?返回word:返回空")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${varname"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":?")]),s._v("message}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# varname存在且不为空？返回varname:打印varname: message，并中断脚本。")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"变量的相关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量的相关命令"}},[s._v("#")]),s._v(" 变量的相关命令")]),s._v(" "),e("h3",{attrs:{id:"declare命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#declare命令"}},[s._v("#")]),s._v(" declare命令")]),s._v(" "),e("p",[s._v("declare命令用于声明一些有限制条件的变量，它的语法形式如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" OPTION "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VARIABLE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("declare")]),s._v("命令的主要参数（OPTION）如下。")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("-a")]),s._v("：声明数组变量。")]),s._v(" "),e("li",[e("code",[s._v("-f")]),s._v("：输出所有函数定义。")]),s._v(" "),e("li",[e("code",[s._v("-F")]),s._v("：输出所有函数名。")]),s._v(" "),e("li",[e("code",[s._v("-i")]),s._v("：声明整数变量。")]),s._v(" "),e("li",[e("code",[s._v("-l")]),s._v("：声明变量为小写字母。")]),s._v(" "),e("li",[e("code",[s._v("-p")]),s._v("：查看变量信息。")]),s._v(" "),e("li",[e("code",[s._v("-r")]),s._v("：声明只读变量。")]),s._v(" "),e("li",[e("code",[s._v("-u")]),s._v("：声明变量为大写字母。")]),s._v(" "),e("li",[e("code",[s._v("-x")]),s._v("：该变量输出为环境变量。")])]),s._v(" "),e("p",[s._v("如果在函数中使用declare命令，则该变量仅在函数内有效，等同于"),e("code",[s._v("local")]),s._v("命令。")]),s._v(" "),e("p",[s._v("不带任何参数时，"),e("code",[s._v("declare")]),s._v("命令输出当前环境的所有变量，包括函数在内，等同于不带有任何参数的"),e("code",[s._v("set")]),s._v("命令。")]),s._v(" "),e("h3",{attrs:{id:"readonly命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#readonly命令"}},[s._v("#")]),s._v(" readonly命令")]),s._v(" "),e("p",[e("code",[s._v("readonly")]),s._v("等同于"),e("code",[s._v("declare -r")]),s._v("，用于声明只读变量。")]),s._v(" "),e("h3",{attrs:{id:"let命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let命令"}},[s._v("#")]),s._v(" let命令")]),s._v(" "),e("p",[s._v("当使用let命令声明变量时可以直接执行算术表达式，表达式中不能含有空格：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("foo")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("+2\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);