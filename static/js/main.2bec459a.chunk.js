(this["webpackJsonpinterview-take-home"]=this["webpackJsonpinterview-take-home"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),c=t(4),r=t.n(c),l=(t(15),t(2)),o=t(8),s=(t(16),t(5)),u=t(6),m=t(10),h=t(9),x=t(7),d=t(0),j=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"makeArc",value:function(e,n,t,a,i,c){var r=Object(x.a)({x:i,y:c,R:a,r:t,start:e,end:n});return t===a?this.makeSingleArc(r):r}},{key:"makeSingleArc",value:function(e){var n=e.slice(0,e.indexOf("L")-1),t=e.slice(e.indexOf("A"),e.indexOf("L",e.indexOf("A"))-1);return console.log(n,t),"".concat(n," ").concat(t)}},{key:"render",value:function(){console.log("rendering",this.props);var e=this.props,n=e.startAngle,t=e.endAngle,a=e.r,i=e.R,c=e.cx,r=e.cy;return void 0===n||void 0===t?null:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("path",{stroke:"#7BCFFE",strokeLinecap:"round",strokeWidth:5.8,d:this.makeArc(n,t,a,i,c,r)})})}}]),t}(i.a.Component),p=120,g=-120*Math.PI/180,f=(Math.PI,function(e,n,t){return(e<n?n:e>t?t:e)*(240/Math.abs(t-n))+360-p}),b="-110 -110 220 220",O=b.split(" "),v=Object(o.a)(O,4),V={minX:v[0],minY:v[1],width:v[2],height:v[3]};console.log(V,parseInt(V.width,10)+parseInt(2*V.minX,10));var k=[{minValue:0,maxValue:1},{minValue:9,maxValue:10},{minValue:0,maxValue:10},{minValue:-2,maxValue:14},{minValue:4,maxValue:6},{minValue:2,maxValue:7},{minValue:2,maxValue:5}].map((function(e){return{startAngle:f(e.minValue,0,10),endAngle:f(e.maxValue,0,10)}})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{r:95,R:95,cx:parseInt(V.width)+parseInt(2*V.minX,10),cy:parseInt(V.height)+parseInt(2*V.minY,10),viewBox:b})})).map((function(e){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("svg",{style:{height:"400px"},viewBox:e.viewBox,fill:"#22222",children:[Object(d.jsx)("circle",{cx:0,cy:0,r:100,fill:"black"}),Object(d.jsx)(j,Object(l.a)({},e)),Object(d.jsx)("text",{fontSize:"smaller",x:"-100",y:"90",fill:"#7BCFFE",children:"Low: ".concat(e.startAngle," High: ").concat(e.endAngle)})]})},JSON.stringify(e))}));var A=function(){return Object(d.jsx)("div",{className:"App",children:k})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.2bec459a.chunk.js.map