(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{264:function(e,r,t){"use strict";t.r(r);var a=t(2),s=Object(a.a)({},function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"esp-document-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp-document-3","aria-hidden":"true"}},[e._v("#")]),e._v(" ESP Document 3")]),e._v(" "),a("p",[e._v("The third specifications document for Emergency Service & Product (ESP) presented two additional paper-based forms: "),a("strong",[e._v("Inventory Control Sheet")]),e._v(" and "),a("strong",[e._v("Purchase Orders")]),e._v(". This portion of the sample lab solution details how this form was analyzed and integrated into the database design from the previous documents. The styling conforms to the associated [Legend.md](normalization legend).")]),e._v(" "),a("h2",{attrs:{id:"inventory-control-sheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inventory-control-sheet","aria-hidden":"true"}},[e._v("#")]),e._v(" Inventory Control Sheet")]),e._v(" "),a("p",[e._v("The Inventory Control Sheet and its resulting tables are based on the following form (taken from the original documentation).")]),e._v(" "),a("p",[a("img",{attrs:{src:t(88),alt:""}})]),e._v(" "),a("p",[e._v("This form was analyzed according to the rules of 0NF (Zero-Normal Form), 1NF (First-Normal Form), 2NF (Second-Normal Form), and 3NF (Third-Normal Form).")]),e._v(" "),a("h3",{attrs:{id:"_0nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 0NF")]),e._v(" "),a("p",[e._v("After performing Zero-Normal Form, a single table was generated: "),a("strong",[e._v("Inventory")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Inventory")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("ItemNumber")]),e._v(", ItemDescription, CurrentSalePrice, "),a("b",{staticClass:"rg"},[e._v("{")]),e._v("Date, SupplierNumber, PONumber, Quantity, Cost"),a("b",{staticClass:"rg"},[e._v("}")]),e._v(",  InStockCount, ReorderValue)")]),e._v(" "),a("h3",{attrs:{id:"_1nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 1NF")]),e._v(" "),a("p",[e._v("After performing First-Normal Form, a single table was generated: "),a("strong",[e._v("OrderHistory")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Inventory")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("ItemNumber")]),e._v(", ItemDescription, CurrentSalePrice, InStockCount, ReorderValue)")]),e._v(" "),a("p",[a("strong",[e._v("OrderHistory")]),e._v(" ("),a("b",{staticClass:"pk"},[a("u",{staticClass:"fk"},[e._v("ItemNumber")]),e._v(", PONumber")]),e._v(", SupplierNumber, Date, Quantity, Cost)")]),e._v(" "),a("h3",{attrs:{id:"_2nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 2NF")]),e._v(" "),a("p",[e._v("After performing First-Normal Form, a single table was generated: "),a("strong",[e._v("PurchaseOrder")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("OrderHistory")]),e._v(" ("),a("b",{staticClass:"pk"},[a("u",{staticClass:"fk"},[e._v("ItemNumber")]),e._v(", "),a("u",{staticClass:"fk"},[e._v("PONumber")])]),e._v(", Quantity, Cost)")]),e._v(" "),a("p",[a("strong",[e._v("PurchaseOrder")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("PONumber")]),e._v(", SupplierNumber, Date)")]),e._v(" "),a("h3",{attrs:{id:"_3nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 3NF")]),e._v(" "),a("p",[e._v("When performing Third-Normal Form, no transitive dependencies were identified, and the tables have not changed.")]),e._v(" "),a("h3",{attrs:{id:"erd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erd","aria-hidden":"true"}},[e._v("#")]),e._v(" ERD")]),e._v(" "),a("p",[a("img",{attrs:{src:t(86),alt:""}})]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"purchase-orders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purchase-orders","aria-hidden":"true"}},[e._v("#")]),e._v(" Purchase Orders")]),e._v(" "),a("p",[e._v("The Purchase Order and its resulting tables are based on the following form (taken from the original documentation).")]),e._v(" "),a("p",[a("img",{attrs:{src:t(87),alt:""}})]),e._v(" "),a("p",[e._v("This form was analyzed according to the rules of 0NF (Zero-Normal Form), 1NF (First-Normal Form), 2NF (Second-Normal Form), and 3NF (Third-Normal Form).")]),e._v(" "),a("h3",{attrs:{id:"_0nf-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0nf-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 0NF")]),e._v(" "),a("p",[e._v("After performing Zero-Normal Form, a single table was generated: "),a("strong",[e._v("PurchaseOrder")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("PurchaseOrder")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("PurchaseOrderNumber")]),e._v(", SupplierName, SupplierNumber, Address, City, Province, PostalCode, Phone, Date, "),a("b",{staticClass:"rg"},[e._v("{")]),e._v("ItemNumber, SupplierItemNumber, SupplierDescription, Quantity, Cost, Amount"),a("b",{staticClass:"rg"},[e._v("}")]),e._v(",  SubTotal, GST, Total)")]),e._v(" "),a("h3",{attrs:{id:"_1nf-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1nf-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 1NF")]),e._v(" "),a("p",[e._v("After performing First-Normal Form, a single table was generated: "),a("strong",[e._v("PurchaseOrderItem")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("PurchaseOrder")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("PurchaseOrderNumber")]),e._v(", SupplierName, SupplierNumber, Address, City, Province, PostalCode, Phone, Date, SubTotal, GST, Total)")]),e._v(" "),a("p",[a("strong",[e._v("PurchaseOrderItem")]),e._v(" ("),a("b",{staticClass:"pk"},[a("u",{staticClass:"fk"},[e._v("PurchaseOrderNumber")]),e._v(", ItemNumber")]),e._v(", SupplierItemNumber, SupplierDescription, Quantity, Cost, Amount)")]),e._v(" "),a("h3",{attrs:{id:"_2nf-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2nf-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 2NF")]),e._v(" "),a("p",[e._v("After performing Second-Normal Form, no clear partial dependencies were identified; therefore, the tables have not changed.")]),e._v(" "),a("blockquote",[a("p",[e._v("At first glance, it might appear that SupplierItemNumber and SupplierDescription are partial dependencies on ItemNumber (perhaps along with the Cost). However, further reflection reveals that this tracking of what name and price the supplier uses for the item is far too difficult to maintain; we should only be concerned with tracking the items belonging to ESP.\nTracking supplier inventory names, numbers & costs is a \"rabbit trail\" of volatile data that we can't (and don't want to) pursue.")])]),e._v(" "),a("h3",{attrs:{id:"_3nf-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3nf-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 3NF")]),e._v(" "),a("p",[e._v("After performing Third-Normal Form, a new table was generated: "),a("strong",[e._v("Supplier")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("PurchaseOrder")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("PurchaseOrderNumber")]),e._v(", "),a("u",{staticClass:"fk"},[e._v("SupplierNumber")]),e._v(", Date, SubTotal, GST, Total)")]),e._v(" "),a("p",[a("strong",[e._v("Supplier")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("SupplierNumber")]),e._v(", SupplierName, Address, City, Province, PostalCode, Phone)")]),e._v(" "),a("p",[a("strong",[e._v("PurchaseOrderItem")]),e._v("("),a("b",{staticClass:"pk"},[a("u",{staticClass:"fk"},[e._v("PurchaseOrderNumber")]),e._v(", ItemNumber")]),e._v(", SupplierItemNumber, SupplierDescription, Quantity, Cost, Amount)")]),e._v(" "),a("h3",{attrs:{id:"erd-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erd-2","aria-hidden":"true"}},[e._v("#")]),e._v(" ERD")]),e._v(" "),a("p",[a("img",{attrs:{src:t(85),alt:"ERD"}})])])},[],!1,null,null,null);r.default=s.exports},85:function(e,r,t){e.exports=t.p+"assets/img/ESP-3-ERD-Purchase-Orders-View.a538692a.png"},86:function(e,r,t){e.exports=t.p+"assets/img/ESP-3-ERD-Inventory-Control-View.035f952a.png"},87:function(e,r,t){e.exports=t.p+"assets/img/ESP-3-Purchase-Orders-View.56b0efed.png"},88:function(e,r,t){e.exports=t.p+"assets/img/ESP-3-Inventory-Control-View.a6309142.png"}}]);