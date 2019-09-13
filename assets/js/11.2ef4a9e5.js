(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{152:function(t,s,n){"use strict";var a=n(82);n.n(a).a},255:function(t,s,n){"use strict";n.r(s);n(152);var a=n(2),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"legend"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#legend","aria-hidden":"true"}},[t._v("#")]),t._v(" Legend")]),t._v(" "),n("p",[t._v("This legend is a guide to reading and interpreting the table listings under 0NF through 3NF.")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("TableName:")]),t._v(" - Table names will be bolded and end with a colon. (e.g.: "),n("code",[t._v("**TableName:**")]),t._v(")")]),t._v(" "),n("li",[t._v("(Column, Names) - Column names for a table will be enclosed in (rounded parenthesis).")]),t._v(" "),n("li",[n("b",{staticClass:"pk"},[t._v("PrimaryKeyFields")]),t._v(" - Primary key fields will be bold and inside a box. (e.g: "),n("code",[t._v('<b class="pk">PrimaryKeyFields</b>')]),t._v(")")]),t._v(" "),n("li",[n("u",{staticClass:"fk"},[t._v("ForeignKeyFields")]),t._v(" - Foreign key fields will be a wavy underline in italic and green. (e.g.: "),n("code",[t._v('<u class="fk">ForeignKeyFields</u>')]),t._v(")")]),t._v(" "),n("li",[n("b",{staticClass:"rg"},[t._v("{")]),t._v("Repeating Groups"),n("b",{staticClass:"rg"},[t._v("}")]),t._v(" - Groups of repeating fields will be identified in 0NF stage, and will be enclosed in orange curly braces. (e.g.: "),n("code",[t._v('<b class="rg">{</b>Repeating, Group, Fields<b class="rg">}</b>')]),t._v(")")])]),t._v(" "),n("h2",{attrs:{id:"styling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#styling","aria-hidden":"true"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),n("p",[t._v("Most of the styling is done by the default conversion from Markdown (.md) to Markup (.html). Additional styling for primary keys, foreign keys, and notes are made through the following stylesheet. "),n("span",{staticClass:"note"},[t._v("Note:")]),t._v(" Mardown text can include regular HTML elements, but not all elements are rendered on GitHub.com by default (such as the "),n("code",[t._v("<style>")]),t._v(" and "),n("code",[t._v("<script>")]),t._v(" elements).")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token style language-css"}},[t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".md")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("vertical-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" top"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("white-space")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("normal"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".md::before")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'('")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.25em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".md::after")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("')'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.25em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".pk")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 700"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("border")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" thin solid #00f"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("padding")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 2px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("position")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".pk::before")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'P'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(".55em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #72c4f7"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("position")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("left")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -5px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("top")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -15px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("border")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid thin blue"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.4em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.4em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("padding")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("text-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".fk")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-style")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" italic"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("text-decoration")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wavy underline green"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("padding")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 2px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("position")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".fk::before")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'F'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(".65em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("position")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("left")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -1px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("bottom")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -17px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("darkgreen"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #a7dea7"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("border")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dashed thin green"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.4em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.4em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("padding")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("text-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".rg::before")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'\\007B'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" darkorange"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.2em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".rg::after")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'\\007D'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" darkorange"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.2em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".rg")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inherit"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".note")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" brown"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.1em"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])},[],!1,null,null,null);s.default=o.exports},82:function(t,s,n){}}]);