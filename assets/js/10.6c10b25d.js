(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{467:function(s,t,a){"use strict";a.r(t);var n=a(30),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"string-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-view"}},[s._v("#")]),s._v(" string_view")]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[a("code",[s._v("std::string_view")]),s._v(" 是C++17引入的一种字符串数据类型，在一些字符串操作上相较于"),a("code",[s._v("std::string")]),s._v("可以提高执行效率。")]),s._v(" "),a("p",[a("code",[s._v("std::string_view")]),s._v("只包含了两个数据成员，与redis中提供的"),a("code",[s._v("SDS(Simple Dynamic String)")]),s._v("很像：")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v("size_t\t    _M_len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" _M_str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("官方在"),a("code",[s._v("string_view")]),s._v("库中对"),a("code",[s._v("string_view")]),s._v("的描述为"),a("code",[s._v("*A non-owning reference to a string.*")]),s._v("，意思是"),a("code",[s._v("string_view")]),s._v("对象并不拥有他所指的内存区域，同时"),a("code",[s._v("_M_str")]),s._v("为"),a("strong",[s._v("const")]),s._v("，意味着"),a("code",[s._v("string_view")]),s._v("对象无法对指向内存进行修改，同时也无从获知指向内存中的字符串是否存在，这也是"),a("code",[s._v("view")]),s._v("的语义，"),a("code",[s._v("string_view")]),s._v("并不创建或拷贝字符串，而是起到查看功能。")]),s._v(" "),a("h2",{attrs:{id:"与std-string的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与std-string的对比"}},[s._v("#")]),s._v(" 与std::string的对比")]),s._v(" "),a("p",[s._v("在对字符串内容的读取上，"),a("code",[s._v("std::string_view")]),s._v("与"),a("code",[s._v("std::string")]),s._v("基本相同，提供了基本相同的API。")]),s._v(" "),a("p",[s._v("同时"),a("code",[s._v("string_view")]),s._v("可以以O（1）的时间复杂度完成下面几个操作：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("substr")]),s._v("\t\t\t\t   //substr O(n)")]),s._v(" "),a("li",[a("code",[s._v("remove_prefix")]),s._v(" // pop_front O(n)")]),s._v(" "),a("li",[a("code",[s._v("remove_suffix")]),s._v(" // pop_back O(n)")])]),s._v(" "),a("p",[s._v("但是对于"),a("code",[s._v("append")]),s._v("操作"),a("code",[s._v("string_view")]),s._v("并不支持，因为他无法对源字符串进行修改，只能够进行取“段”。")]),s._v(" "),a("h2",{attrs:{id:"字符串参数传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串参数传递"}},[s._v("#")]),s._v(" 字符串参数传递")]),s._v(" "),a("p",[s._v("构建一个"),a("code",[s._v("string_view")]),s._v("对象只需要很小的代价（为一个size_t类型对象和一个指针对象赋值，且不需要分配内存）。当一个函数需要接受字符串作为参数时，通常会写为"),a("code",[s._v("const string&")]),s._v("，这样既可以接收"),a("code",[s._v("string")]),s._v("对象，也可以接收C语言风格的字符串，但是当函数接收C语言风格的字符串时，会进行一个隐式转换，构建一个临时string对象供函数使用，这样将会涉及新的内存分配，而使用"),a("code",[s._v("string_view")]),s._v("则会提高执行效率。")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string_view sv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string_view address:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reinterpret_cast")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uintptr_t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("func2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string address:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reinterpret_cast")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uintptr_t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"origin address:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reinterpret_cast")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uintptr_t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("func2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行结果:")]),s._v("\norigin address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4202013")]),s._v("\nstring_view address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4202013")]),s._v("\nstring address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35327032")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("可以看到"),a("code",[s._v("string_view")]),s._v("对象内的数据与初始字符串"),a("code",[s._v("str")]),s._v("是相同的。")]),s._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("h3",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[s._v("#")]),s._v(" 生命周期")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("string_view")]),s._v("一定要注意在自身的生命周期中指向内存不要发生改变，不然会出现不可意料的状况。")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v("string s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstring_view sv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ncout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" sv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果"),a("code",[s._v("s")]),s._v("进行内存重分配，"),a("code",[s._v("sv")]),s._v("可能指向一段没有数据的内存引发错误。")]),s._v(" "),a("h3",{attrs:{id:"输出string-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出string-view"}},[s._v("#")]),s._v(" 输出"),a("code",[s._v("string_view")])]),s._v(" "),a("p",[a("code",[s._v("string_view")]),s._v("、"),a("code",[s._v("string")]),s._v("和普通字符串之间可以互相转换，相比较普通字符串"),a("code",[s._v("string_view")]),s._v("不使用"),a("code",[s._v("\\0")]),s._v("作为结尾标志，在输出的时候需要注意边界。")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("string_view str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出结果")]),s._v("\nabc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://en.cppreference.com/w/cpp/string/basic_string_view",target:"_blank",rel:"noopener noreferrer"}},[s._v("basic_string_view cppreference"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000018387368",target:"_blank",rel:"noopener noreferrer"}},[s._v("【现代C++】性能控的工具箱之string_view"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/20803826/what-is-string-view",target:"_blank",rel:"noopener noreferrer"}},[s._v("what is string view"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);