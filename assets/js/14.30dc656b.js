(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{155:function(i,e,s){i.exports=s.p+"assets/img/Merge-ESP-1and2.cd8ae504.png"},258:function(i,e,s){"use strict";s.r(e);var t=s(2),r=Object(t.a)({},function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[t("h1",{attrs:{id:"merging-erds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merging-erds","aria-hidden":"true"}},[i._v("#")]),i._v(" Merging ERDs")]),i._v(" "),t("p",[i._v("In the "),t("router-link",{attrs:{to:"/demos/esp/specs/ESP-1-Specs.html"}},[i._v("specs for the first part")]),i._v(" for ESP database design, two views were analyzed and ERDs generated for each of them.")],1),i._v(" "),t("table",[t("thead",[t("tr",[t("th",[i._v("Customer Details View")]),i._v(" "),t("th",[i._v("Customer Orders View")])])]),i._v(" "),t("tbody",[t("tr",[t("td",[t("img",{attrs:{src:s(89),alt:""}})]),i._v(" "),t("td",[t("img",{attrs:{src:s(63),alt:""}})])])])]),i._v(" "),t("p",[i._v("The "),t("strong",[i._v("Customer")]),i._v(" entity that appears in both ERDs is essentially the same, having only minor differences in the naming of some attributes. As such, merging the two ERDs produces the same result as the ERD from the "),t("em",[i._v("Customer Orders View")]),i._v(".")]),i._v(" "),t("p",[i._v("The ERD from the "),t("router-link",{attrs:{to:"/demos/esp/specs/ESP-2-Specs.html"}},[i._v("second part")]),i._v(" has some overlap and a more thoughtful merging is required to produce a single comprehensive ERD.")],1),i._v(" "),t("table",[t("thead",[t("tr",[t("th",[i._v("ESP Part 1 ERD")]),i._v(" "),t("th",[i._v("Payment Log View")])])]),i._v(" "),t("tbody",[t("tr",[t("td",[t("img",{attrs:{src:s(63),alt:""}})]),i._v(" "),t("td",[t("img",{attrs:{src:s(83),alt:""}})])])])]),i._v(" "),t("p",[i._v("The "),t("strong",[i._v("Customer")]),i._v(" entity from both ERDs are essentially the same. The second version of "),t("strong",[i._v("Customer")]),i._v(" appears to just be a subset of the first version, with some minor differences in attribute names. As such, the larger "),t("strong",[i._v("Customer")]),i._v(" entity will be used for the merged ERD.")]),i._v(" "),t("p",[i._v("The remaining entities from the two ERDs have different names, but upon closer examination it would appear that the "),t("strong",[i._v("Order")]),i._v(" and "),t("strong",[i._v("PaymentsLog")]),i._v(" entities are actually the "),t("em",[i._v("same")]),i._v(" entity, just with different names. How did we make that determination? It was made based in part upon the "),t("strong",[i._v("primary keys")]),i._v(" of the two entities: "),t("em",[t("strong",[i._v("OrderNumber")])]),i._v(". It's not just that these keys have the same name; rather, it's that they they refer to the same "),t("em",[i._v("concept")]),i._v(" in the business - an identifier for a "),t("em",[i._v("Customer Order")]),i._v(". So, in essence, the "),t("strong",[i._v("PaymentsLog")]),i._v(" identifies the "),t("em",[i._v("Customer Order")]),i._v(" against which a payment is made. With this discovery, the remaining attributes can be compared and are found to be similar with minor differences in their names. The "),t("strong",[i._v("Order")]),i._v(" entity already contains all the attributes described in the "),t("strong",[i._v("PaymentsLog")]),i._v(", so the larger "),t("strong",[i._v("Order")]),i._v(" entity will be used for the merged ERD.")]),i._v(" "),t("p",[i._v("The final entities - "),t("strong",[i._v("OrderDetail")]),i._v(", "),t("strong",[i._v("Item")]),i._v(", and "),t("strong",[i._v("PaymentLogDetails")]),i._v(" - all appear to be distinct, so they will be included in the merged ERD as-is.")]),i._v(" "),t("p",[t("img",{attrs:{src:s(155),alt:""}})])])},[],!1,null,null,null);e.default=r.exports},63:function(i,e,s){i.exports=s.p+"assets/img/ESP-1-ERD-CustomerOrdersView.40628f59.png"},83:function(i,e,s){i.exports=s.p+"assets/img/ESP-2-ERD-PaymentLogView.3f72a51c.png"},89:function(i,e){i.exports="data:image/png;base64,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"}}]);