(this["webpackJsonpttp-assignment8"]=this["webpackJsonpttp-assignment8"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var c=s(0),n=s(1),o=s.n(n),r=s(4),a=s.n(r),l=(s(14),s.p,s(15),s(16),s(3)),i=s(5),j=s(6),d=s(8),b=s(7),u=(s(17),function(t){Object(d.a)(s,t);var e=Object(b.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).addRow=function(){var t=[];if(n.state.cols<2)n.setState({rows:[].concat(Object(l.a)(n.state.rows),[Object(c.jsx)("tr",{children:Object(c.jsx)("td",{})})])});else{for(var e=0;e<n.state.cols-1;e++)t.push(Object(c.jsx)("td",{}));n.setState({rows:[].concat(Object(l.a)(n.state.rows),[Object(c.jsx)("tr",{children:t})])})}},n.delRow=function(){n.setState({rows:n.state.rows.splice(1)})},n.addCol=function(){n.setState({cols:n.state.cols+1});var t=n.state.rows,e=[];console.log(n.state.cols);for(var s=0;s<n.state.cols;s++)e.push(Object(c.jsx)("td",{}));for(var o=0;o<t.length;o++)t[o]=Object(c.jsx)("tr",{children:e});n.setState({rows:t})},n.delCol=function(){if(n.state.cols>0){var t=n.state.rows,e=n.state.cols-1;console.log(e+" "+n.state.cols);for(var s=[],o=0;o<e-1;o++)s.push(Object(c.jsx)("td",{}));for(var r=0;r<t.length;r++)t[r]=Object(c.jsx)("tr",{children:s});n.setState({rows:t,cols:n.state.cols-1})}},n.state={rows:[],cols:2},n}return Object(j.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:this.addRow,children:"Add Row"}),Object(c.jsx)("button",{onClick:this.delRow,children:"del Row"}),Object(c.jsx)("button",{onClick:this.addCol,children:"Add col"}),Object(c.jsx)("button",{onClick:this.delCol,children:"del col"}),Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:this.state.rows})})]})}}]),s}(n.Component));var h=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)("table",{id:"tabl"})]})},O=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(e){var s=e.getCLS,c=e.getFID,n=e.getFCP,o=e.getLCP,r=e.getTTFB;s(t),c(t),n(t),o(t),r(t)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.ec3bebf4.chunk.js.map