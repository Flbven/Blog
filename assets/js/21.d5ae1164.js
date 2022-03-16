(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{477:function(s,t,e){"use strict";e.r(t);var a=e(30),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"flex-布局教程-语法篇【转】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局教程-语法篇【转】"}},[s._v("#")]),s._v(" Flex 布局教程：语法篇【转】")]),s._v(" "),e("p",[s._v("作者： "),e("a",{attrs:{href:"https://www.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("日期： "),e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/07/",target:"_blank",rel:"noopener noreferrer"}},[s._v("2015年7月10日"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("原文地址：https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html")]),s._v(" "),e("p",[s._v("网页布局（layout）是 CSS 的一个重点应用。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif",alt:"img"}})]),s._v(" "),e("p",[s._v("布局的传统解决方案，基于"),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box_model",target:"_blank",rel:"noopener noreferrer"}},[s._v("盒状模型"),e("OutboundLink")],1),s._v("，依赖 "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("display")]),e("OutboundLink")],1),s._v(" 属性 + "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("position")]),e("OutboundLink")],1),s._v("属性 + "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/float",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("float")]),e("OutboundLink")],1),s._v("属性。它对于那些特殊布局非常不方便，比如，"),e("a",{attrs:{href:"https://css-tricks.com/centering-css-complete-guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("垂直居中"),e("OutboundLink")],1),s._v("就不容易实现。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071002.png",alt:"img"}})]),s._v(" "),e("p",[s._v("2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071003.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("Flex 布局将成为未来布局的首选方案。本文介绍它的语法，"),e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下一篇文章"),e("OutboundLink")],1),s._v("给出常见布局的 Flex 写法。网友 "),e("a",{attrs:{href:"http://vgee.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("JailBreak"),e("OutboundLink")],1),s._v(" 为本文的所有示例制作了 "),e("a",{attrs:{href:"http://static.vgee.cn/static/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Demo"),e("OutboundLink")],1),s._v("，也可以参考。")]),s._v(" "),e("p",[s._v("以下内容主要参考了下面两篇文章："),e("a",{attrs:{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",target:"_blank",rel:"noopener noreferrer"}},[s._v("A Complete Guide to Flexbox"),e("OutboundLink")],1),s._v(" 和 "),e("a",{attrs:{href:"https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties",target:"_blank",rel:"noopener noreferrer"}},[s._v("A Visual Guide to CSS3 Flexbox Properties"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"一、flex-布局是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、flex-布局是什么"}},[s._v("#")]),s._v(" 一、Flex 布局是什么？")]),s._v(" "),e("p",[s._v('Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。')]),s._v(" "),e("p",[s._v("任何一个容器都可以指定为 Flex 布局。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[s._v("行内元素也可以使用 Flex 布局。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[s._v("Webkit 内核的浏览器，必须加上"),e("code",[s._v("-webkit")]),s._v("前缀。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Safari */")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("p",[s._v("注意，设为 Flex 布局以后，子元素的"),e("code",[s._v("float")]),s._v("、"),e("code",[s._v("clear")]),s._v("和"),e("code",[s._v("vertical-align")]),s._v("属性将失效。")]),s._v(" "),e("h2",{attrs:{id:"二、基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[s._v("#")]),s._v(" 二、基本概念")]),s._v(" "),e("p",[s._v('采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。')]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png",alt:"img"}})]),s._v(" "),e("p",[s._v("容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做"),e("code",[s._v("main start")]),s._v("，结束位置叫做"),e("code",[s._v("main end")]),s._v("；交叉轴的开始位置叫做"),e("code",[s._v("cross start")]),s._v("，结束位置叫做"),e("code",[s._v("cross end")]),s._v("。")]),s._v(" "),e("p",[s._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做"),e("code",[s._v("main size")]),s._v("，占据的交叉轴空间叫做"),e("code",[s._v("cross size")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"三、容器的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、容器的属性"}},[s._v("#")]),s._v(" 三、容器的属性")]),s._v(" "),e("p",[s._v("以下6个属性设置在容器上。")]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("flex-direction")]),s._v(" "),e("li",[s._v("flex-wrap")]),s._v(" "),e("li",[s._v("flex-flow")]),s._v(" "),e("li",[s._v("justify-content")]),s._v(" "),e("li",[s._v("align-items")]),s._v(" "),e("li",[s._v("align-content")])])]),s._v(" "),e("h3",{attrs:{id:"_3-1-flex-direction属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-flex-direction属性"}},[s._v("#")]),s._v(" 3.1 flex-direction属性")]),s._v(" "),e("p",[e("code",[s._v("flex-direction")]),s._v("属性决定主轴的方向（即项目的排列方向）。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row | row-reverse | column | column-reverse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png",alt:"img"}})]),s._v(" "),e("p",[s._v("它可能有4个值。")]),s._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[s._v("row")]),s._v("（默认值）：主轴为水平方向，起点在左端。")]),s._v(" "),e("li",[e("code",[s._v("row-reverse")]),s._v("：主轴为水平方向，起点在右端。")]),s._v(" "),e("li",[e("code",[s._v("column")]),s._v("：主轴为垂直方向，起点在上沿。")]),s._v(" "),e("li",[e("code",[s._v("column-reverse")]),s._v("：主轴为垂直方向，起点在下沿。")])])]),s._v(" "),e("h3",{attrs:{id:"_3-2-flex-wrap属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-flex-wrap属性"}},[s._v("#")]),s._v(" 3.2 flex-wrap属性")]),s._v(" "),e("p",[s._v('默认情况下，项目都排在一条线（又称"轴线"）上。'),e("code",[s._v("flex-wrap")]),s._v("属性定义，如果一条轴线排不下，如何换行。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png",alt:"img"}})]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap | wrap | wrap-reverse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[s._v("它可能取三个值。")]),s._v(" "),e("p",[s._v("（1）"),e("code",[s._v("nowrap")]),s._v("（默认）：不换行。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png",alt:"img"}})]),s._v(" "),e("p",[s._v("（2）"),e("code",[s._v("wrap")]),s._v("：换行，第一行在上方。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("（3）"),e("code",[s._v("wrap-reverse")]),s._v("：换行，第一行在下方。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg",alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:"_3-3-flex-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-flex-flow"}},[s._v("#")]),s._v(" 3.3 flex-flow")]),s._v(" "),e("p",[e("code",[s._v("flex-flow")]),s._v("属性是"),e("code",[s._v("flex-direction")]),s._v("属性和"),e("code",[s._v("flex-wrap")]),s._v("属性的简写形式，默认值为"),e("code",[s._v("row nowrap")]),s._v("。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-flow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <flex-direction> || <flex-wrap>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("h3",{attrs:{id:"_3-4-justify-content属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-justify-content属性"}},[s._v("#")]),s._v(" 3.4 justify-content属性")]),s._v(" "),e("p",[e("code",[s._v("justify-content")]),s._v("属性定义了项目在主轴上的对齐方式。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png",alt:"img"}})]),s._v(" "),e("p",[s._v("它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。")]),s._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[s._v("flex-start")]),s._v("（默认值）：左对齐")]),s._v(" "),e("li",[e("code",[s._v("flex-end")]),s._v("：右对齐")]),s._v(" "),e("li",[e("code",[s._v("center")]),s._v("： 居中")]),s._v(" "),e("li",[e("code",[s._v("space-between")]),s._v("：两端对齐，项目之间的间隔都相等。")]),s._v(" "),e("li",[e("code",[s._v("space-around")]),s._v("：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。")])])]),s._v(" "),e("h3",{attrs:{id:"_3-5-align-items属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-align-items属性"}},[s._v("#")]),s._v(" 3.5 align-items属性")]),s._v(" "),e("p",[e("code",[s._v("align-items")]),s._v("属性定义项目在交叉轴上如何对齐。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | baseline | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png",alt:"img"}})]),s._v(" "),e("p",[s._v("它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。")]),s._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[s._v("flex-start")]),s._v("：交叉轴的起点对齐。")]),s._v(" "),e("li",[e("code",[s._v("flex-end")]),s._v("：交叉轴的终点对齐。")]),s._v(" "),e("li",[e("code",[s._v("center")]),s._v("：交叉轴的中点对齐。")]),s._v(" "),e("li",[e("code",[s._v("baseline")]),s._v(": 项目的第一行文字的基线对齐。")]),s._v(" "),e("li",[e("code",[s._v("stretch")]),s._v("（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。")])])]),s._v(" "),e("h3",{attrs:{id:"_3-6-align-content属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-align-content属性"}},[s._v("#")]),s._v(" 3.6 align-content属性")]),s._v(" "),e("p",[e("code",[s._v("align-content")]),s._v("属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png",alt:"img"}})]),s._v(" "),e("p",[s._v("该属性可能取6个值。")]),s._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[s._v("flex-start")]),s._v("：与交叉轴的起点对齐。")]),s._v(" "),e("li",[e("code",[s._v("flex-end")]),s._v("：与交叉轴的终点对齐。")]),s._v(" "),e("li",[e("code",[s._v("center")]),s._v("：与交叉轴的中点对齐。")]),s._v(" "),e("li",[e("code",[s._v("space-between")]),s._v("：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),s._v(" "),e("li",[e("code",[s._v("space-around")]),s._v("：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),s._v(" "),e("li",[e("code",[s._v("stretch")]),s._v("（默认值）：轴线占满整个交叉轴。")])])]),s._v(" "),e("h3",{attrs:{id:"四、项目的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、项目的属性"}},[s._v("#")]),s._v(" 四、项目的属性")]),s._v(" "),e("p",[s._v("以下6个属性设置在项目上。")]),s._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[s._v("order")])]),s._v(" "),e("li",[e("code",[s._v("flex-grow")])]),s._v(" "),e("li",[e("code",[s._v("flex-shrink")])]),s._v(" "),e("li",[e("code",[s._v("flex-basis")])]),s._v(" "),e("li",[e("code",[s._v("flex")])]),s._v(" "),e("li",[e("code",[s._v("align-self")])])])]),s._v(" "),e("h3",{attrs:{id:"_4-1-order属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-order属性"}},[s._v("#")]),s._v(" 4.1 order属性")]),s._v(" "),e("p",[e("code",[s._v("order")]),s._v("属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <integer>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png",alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:"_4-2-flex-grow属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-flex-grow属性"}},[s._v("#")]),s._v(" 4.2 flex-grow属性")]),s._v(" "),e("p",[e("code",[s._v("flex-grow")]),s._v("属性定义项目的放大比例，默认为"),e("code",[s._v("0")]),s._v("，即如果存在剩余空间，也不放大。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 0 */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png",alt:"img"}})]),s._v(" "),e("p",[s._v("如果所有项目的"),e("code",[s._v("flex-grow")]),s._v("属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的"),e("code",[s._v("flex-grow")]),s._v("属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。")]),s._v(" "),e("h3",{attrs:{id:"_4-3-flex-shrink属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-flex-shrink属性"}},[s._v("#")]),s._v(" 4.3 flex-shrink属性")]),s._v(" "),e("p",[e("code",[s._v("flex-shrink")]),s._v("属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 1 */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("如果所有项目的"),e("code",[s._v("flex-shrink")]),s._v("属性都为1，当空间不足时，都将等比例缩小。如果一个项目的"),e("code",[s._v("flex-shrink")]),s._v("属性为0，其他项目都为1，则空间不足时，前者不缩小。")]),s._v(" "),e("p",[s._v("负值对该属性无效。")]),s._v(" "),e("h3",{attrs:{id:"_4-4-flex-basis属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-flex-basis属性"}},[s._v("#")]),s._v(" 4.4 flex-basis属性")]),s._v(" "),e("p",[e("code",[s._v("flex-basis")]),s._v("属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为"),e("code",[s._v("auto")]),s._v("，即项目的本来大小。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <length> | auto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default auto */")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[s._v("它可以设为跟"),e("code",[s._v("width")]),s._v("或"),e("code",[s._v("height")]),s._v("属性一样的值（比如350px），则项目将占据固定空间。")]),s._v(" "),e("h3",{attrs:{id:"_4-5-flex属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-flex属性"}},[s._v("#")]),s._v(" 4.5 flex属性")]),s._v(" "),e("p",[e("code",[s._v("flex")]),s._v("属性是"),e("code",[s._v("flex-grow")]),s._v(", "),e("code",[s._v("flex-shrink")]),s._v(" 和 "),e("code",[s._v("flex-basis")]),s._v("的简写，默认值为"),e("code",[s._v("0 1 auto")]),s._v("。后两个属性可选。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none | [ <"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-grow'")]),s._v("> <"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-shrink'")]),s._v(">? || <"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-basis'")]),s._v("> ]\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[s._v("该属性有两个快捷值："),e("code",[s._v("auto")]),s._v(" ("),e("code",[s._v("1 1 auto")]),s._v(") 和 none ("),e("code",[s._v("0 0 auto")]),s._v(")。")]),s._v(" "),e("p",[s._v("建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")]),s._v(" "),e("h3",{attrs:{id:"_4-6-align-self属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-align-self属性"}},[s._v("#")]),s._v(" 4.6 align-self属性")]),s._v(" "),e("p",[e("code",[s._v("align-self")]),s._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),e("code",[s._v("align-items")]),s._v("属性。默认值为"),e("code",[s._v("auto")]),s._v("，表示继承父元素的"),e("code",[s._v("align-items")]),s._v("属性，如果没有父元素，则等同于"),e("code",[s._v("stretch")]),s._v("。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto | flex-start | flex-end | center | baseline | stretch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png",alt:"img"}})]),s._v(" "),e("p",[s._v("该属性可能取6个值，除了auto，其他都与align-items属性完全一致。")]),s._v(" "),e("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=n.exports}}]);