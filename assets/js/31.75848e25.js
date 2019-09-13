(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{275:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"default-and-check-constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-and-check-constraints","aria-hidden":"true"}},[t._v("#")]),t._v(" Default and Check Constraints")]),t._v(" "),a("h2",{attrs:{id:"customers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customers","aria-hidden":"true"}},[t._v("#")]),t._v(" Customers")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token keyword"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("          "),a("span",{attrs:{class:"token keyword"}},[t._v("datetime")]),t._v("            "),a("span",{attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Subtotal        money\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_Orders_Subtotal\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Subtotal "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),a("span",{attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GST             money\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_Orders_GST\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GST "),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("            "),a("span",{attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"orders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orders","aria-hidden":"true"}},[t._v("#")]),t._v(" Orders")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("    CurrentSalePrice    money\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_InventoryItems_CurrentSalePrice\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CurrentSalePrice "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("The following sample is a table-level constraint, ensuring that the GST is either 5% of the Subtotal or zero.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("-- Table-level constraint on two columns being compared to each other")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_Orders_Subtotal_GST\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GST "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Subtotal "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v(".05")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("OR")]),t._v(" GST "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"inventoryitems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventoryitems","aria-hidden":"true"}},[t._v("#")]),t._v(" InventoryItems")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("    CurrentSalePrice    money\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_InventoryItems_CurrentSalePrice\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CurrentSalePrice "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"orderdetails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orderdetails","aria-hidden":"true"}},[t._v("#")]),t._v(" OrderDetails")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("    Quantity        "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" DF_OrderDetails_Quantity\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_OrderDetails_Quantity\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Quantity "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),a("span",{attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SellingPrice    money\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_OrderDetails_SellingPrice\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SellingPrice "),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);