(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e){e.exports=[{name:"2018",data:[{category:"Site (cadastro)",value:53.8,color:"#9de219"},{category:"Google (ads)",value:16.1,color:"#90cc38"},{category:"Facebook",value:11.3,color:"#068c35"},{category:"Blog",value:9.6,color:"#006634"},{category:"Outbound",value:5.2,color:"#004d38"},{category:"Newsletter",value:3.6,color:"#033939"}]}]},133:function(e){e.exports=[{stat:"Mailing ",count:4348,color:"#0e5a7e"},{stat:"Qualifica\xe7\xe3o/agendamento",count:3568,color:"#166f99"},{stat:"Apresenta\xe7\xe3o da parceria",count:2800,color:"#2185b4"},{stat:"Fechamento Parceira",count:1903,color:"#319fd2"},{stat:"Recebimento de carteira de clientes",count:1203,color:"#3eaee2"}]},147:function(e,t,a){e.exports=a.p+"static/media/funil-de-contas.87d22494.png"},155:function(e,t,a){e.exports=a(280)},247:function(e,t,a){},257:function(e,t,a){},259:function(e,t,a){},261:function(e,t,a){},263:function(e,t,a){},265:function(e,t,a){},274:function(e,t,a){},276:function(e,t,a){},278:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),l=a(14),c=a(12),o=a(13),i=a(63),s=a(0),u=a.n(s),m=a(9),d=a.n(m),p=(a(45),a(161),a(284)),E=a(283),b=(a(163),a(19)),f=["Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],k=[{name:"Consultoria",data:[4,8,8,9,9,10,4,8,10,7]},{name:"Com\xe9rcio",data:[5,7,7,6,8,9,5,8,4,4]},{name:"Restaurante",data:[0,0,1,1,4,3,10,5,4,20]}],g=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(b.a,null,u.a.createElement(b.i,{text:"Leads por segmento"}),u.a.createElement(b.e,{position:"top",orientation:"horizontal"}),u.a.createElement(b.c,null,u.a.createElement(b.d,{categories:f,startAngle:45})),u.a.createElement(b.f,null,k.map(function(e,t){return u.a.createElement(b.g,{key:t,type:"column",data:e.data,name:e.name})})))}}]),t}(u.a.Component),h=a(132),y=function(e){return"".concat(e.category,": \n ").concat(e.value,"%")},v=function(){return u.a.createElement(b.a,null,u.a.createElement(b.j,{render:function(e){var t=e.point||e,a=t.category,n=t.series,r=t.value;return u.a.createElement("div",null,a," (",n.name,"): ",r,"%")}}),u.a.createElement(b.i,{text:"Origem dos Leads"}),u.a.createElement(b.e,{visible:!1}),u.a.createElement(b.b,{background:"none"}),u.a.createElement(b.f,null,h.map(function(e,t,a){return u.a.createElement(b.g,{type:"donut",startAngle:150,name:e.name,data:e.data,field:"value",categoryField:"category",colorField:"color",key:t},t===a.length-1&&u.a.createElement(b.h,{position:"outsideEnd",background:"none",content:y}))})))},O=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(v,null)}}]),t}(u.a.Component),j=a(133),C=function(e){var t=e.point;return(void 0===t?{}:t).category},x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={dynamicSlope:!0,dynamicHeight:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.dynamicSlope,a=e.dynamicHeight;return u.a.createElement("div",null,u.a.createElement(b.a,{style:{margin:"0 auto",width:300}},u.a.createElement(b.i,{text:"Funil de vendas"}),u.a.createElement(b.f,null,u.a.createElement(b.g,{type:"funnel",data:j,categoryField:"stat",field:"count",colorField:"color",dynamicSlope:t,dynamicHeight:a},u.a.createElement(b.h,{color:"white",background:"none",format:"N0"}))),u.a.createElement(b.j,{render:C}),u.a.createElement(b.e,{visible:!1})))}}]),t}(u.a.Component),I=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(p.a,null,u.a.createElement(E.a,{span:24},u.a.createElement(g,null))),u.a.createElement(p.a,null,u.a.createElement(E.a,{span:12},u.a.createElement(O,null)),u.a.createElement(E.a,{span:12},u.a.createElement(x,null))))}}]),t}(u.a.Component),F=a(29),w=a(18),D=a(31),S=a(32),A=a(40),R={tasks:{"task-1":{id:"task-1",content:"Donatello",price:0,segment:"Consultoria"},"task-2":{id:"task-2",content:"Caravaggio",price:0,segment:"Com\xe9rcio"},"task-3":{id:"task-3",content:"Michelangelo",price:229,segment:"Consultoria"},"task-4":{id:"task-4",content:"Rafael",price:0,segment:"Com\xe9rcio "},"task-5":{id:"task-5",content:"Sandro Botticelli",price:229,segment:"Restaurante"},"task-6":{id:"task-6",content:"Filippo Brunelleschi",price:229,segment:"Consultoria"},"task-7":{id:"task-7",content:"Ticiano",price:0,segment:"Consultoria"},"task-8":{id:"task-8",content:"Giotto di Bondone",price:0,segment:"Restaurante"},"task-9":{id:"task-9",content:"Jan van Eyck",price:350,segment:"Consultoria"},"task-10":{id:"task-10",content:"Giorgio Vasari",price:229,segment:"Com\xe9rcio"}},columns:{"column-1":{id:"column-1",title:"Mailing",taskIds:["task-1","task-2","task-3","task-4","task-5"]},"column-2":{id:"column-2",title:"Qualifica\xe7\xe3o/agendamento",taskIds:["task-6","task-7","task-8"]},"column-3":{id:"column-3",title:"Apresenta\xe7\xe3o da parceria",taskIds:["task-9","task-10"]},"column-4":{id:"column-4",title:"Fechamento Parceira",taskIds:[]},"column-5":{id:"column-5",title:"Recebimento de carteira de clientes",taskIds:[]}},columnOrder:["column-1","column-2","column-3","column-4","column-5"]},M=a(16),T=a(287),L=a(288);function P(){var e=Object(D.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    padding: 8px;\n    margin-bottom: 8px;\n    background-color: ",";\n"]);return P=function(){return e},e}var N=S.a.div(P(),function(e){return e.isDragging?"lightblue":"white"}),z=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(T.a,{to:"/lead"},u.a.createElement(A.b,{draggableId:this.props.task.id,index:this.props.index},function(t,a){return u.a.createElement(N,Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef,isDragging:a.isDragging}),u.a.createElement(p.a,null,u.a.createElement(E.a,null,u.a.createElement(M.a,{type:"user"}),"  ".concat(e.props.task.content))),u.a.createElement(p.a,null,u.a.createElement(E.a,null,u.a.createElement("span",null,"R$ ".concat(e.props.task.price," ").concat(e.props.task.segment)))))}))}}]),t}(u.a.Component),V=Object(L.a)(z);function Q(){var e=Object(D.a)(["\n    padding: 8px;\n    transition: background-color 0.2s ease;\n    background-color: ",";\n    flex-grow: 1;\n    min-height:100px;\n"]);return Q=function(){return e},e}function B(){var e=Object(D.a)([""]);return B=function(){return e},e}function J(){var e=Object(D.a)(["\n    padding: 8px;\n    font-size: 16px;\n    -webkit-clip-path: polygon(0% 0%, 95% 0, 100% 50%, 95% 100%, 0% 100%);\n    clip-path: polygon(0% 0%, 95% 0, 100% 50%, 95% 100%, 0% 100%);\n    background: #CCC;\n"]);return J=function(){return e},e}function G(){var e=Object(D.a)(["\n    border: 1px;\n    border-color: lighgrey;\n    border-radius: 2px;\n    width:20%;\n    display: flex;\n    flex-direction: column;\n"]);return G=function(){return e},e}var H=S.a.div(G()),K=S.a.h3(J()),U=S.a.span(B()),q=S.a.div(Q(),function(e){return e.isDraggingOver?"#001529":"white"}),$=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tasks.map(function(e){return e.price}),a=0;return t.length>0&&(a=t.reduce(function(e,t){return e+t})),u.a.createElement(H,null,u.a.createElement(K,null,u.a.createElement("div",null,this.props.column.title),u.a.createElement(U,null,"R$ ".concat(a," [").concat(this.props.column.taskIds.length," Leads]"))),u.a.createElement(A.c,{droppableId:this.props.column.id},function(t,a){return u.a.createElement(q,Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:a.isDraggingOver}),e.props.tasks.map(function(e,t){return u.a.createElement(V,{key:e.id,task:e,index:t})}),t.placeholder)}))}}]),t}(u.a.Component),W=a(291);function _(){var e=Object(D.a)(["\n  display: flex\n"]);return _=function(){return e},e}var X=W.a.Option;function Y(e){}var Z=S.a.div(_()),ee=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state=R,a.handleChange=function(e){console.log("selected ".concat(e)),a.setState(R)},a.myTasks=function(){return a.state.columnOrder.map(function(e){return a.state.columns[e].taskIds.map(function(e){return a.state.tasks[e]})})},a.somaTotal=function(){var e=a.myTasks(),t=0,n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var i=c.value,s=!0,u=!1,m=void 0;try{for(var d,p=i[Symbol.iterator]();!(s=(d=p.next()).done);s=!0){t+=d.value.price}}catch(E){u=!0,m=E}finally{try{s||null==p.return||p.return()}finally{if(u)throw m}}}}catch(E){r=!0,l=E}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return t},a.onDragEnd=function(e){var t,n=e.destination,r=e.source,l=e.draggableId;if(n&&(n.droppableId!==r.droppableId||n.index!==r.index)){var c=a.state.columns[r.droppableId],o=a.state.columns[n.droppableId],i=Array.from(c.taskIds);if(i.splice(r.index,1),i.splice(n.index,0,l),c!==o){var s=Array.from(c.taskIds);s.splice(r.index,1);var u=Object(w.a)({},c,{taskIds:s}),m=Array.from(o.taskIds);m.splice(n.index,0,l);var d=Object(w.a)({},o,{taskIds:m}),p=Object(w.a)({},a.state,{columns:Object(w.a)({},a.state.columns,(t={},Object(F.a)(t,u.id,u),Object(F.a)(t,d.id,d),t))});a.setState(p)}else{var E=Object(w.a)({},c,{taskIds:i}),b=Object(w.a)({},a.state,{columns:Object(w.a)({},a.state.columns,Object(F.a)({},E.id,E))});a.setState(b)}}},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(W.a,{defaultValue:"Funil Contas",style:{width:140},onChange:Y},u.a.createElement(X,{value:"Funil Inbound"},u.a.createElement(T.a,{to:"/funil/1"},"Funil Inbound")),u.a.createElement(X,{value:"Funil Contas"},u.a.createElement(T.a,{to:"/funil/2"},"Funil Contas")),u.a.createElement(X,{value:"Funil Vendas"},u.a.createElement(T.a,{to:"/funil/3"},"Funil Vendas"))),u.a.createElement("b",null,"  R$ ".concat(this.somaTotal()," [").concat(Object.keys(this.state.tasks).length," Leads]")),u.a.createElement(A.a,{onDragEnd:this.onDragEnd,onDragStart:this.onDragStart,onDragUpdate:this.onDragUpdate},u.a.createElement(Z,null,this.state.columnOrder.map(function(t){var a=e.state.columns[t],n=a.taskIds.map(function(t){return e.state.tasks[t]});return u.a.createElement($,{key:a.id,column:a,tasks:n})}))))}}]),t}(u.a.Component),te={tasks:{"task-1":{id:"task-1",content:"Salvador Dal\xed",price:0,segment:"Consultoria"},"task-2":{id:"task-2",content:"Pablo Picasso",price:229,segment:"Com\xe9rcio"},"task-3":{id:"task-3",content:"Joan Mir\xf3",price:0,segment:"Consultoria"},"task-4":{id:"task-4",content:"Ren\xe9 Magritte",price:0,segment:"Com\xe9rcio "},"task-5":{id:"task-5",content:"Frida Kahlo",price:229,segment:"Restaurante"},"task-6":{id:"task-6",content:"Andr\xe9 Breton",price:0,segment:"Consultoria"},"task-7":{id:"task-7",content:"Max Ernst",price:0,segment:"Consultoria"},"task-8":{id:"task-8",content:"Marc Chagall",price:350,segment:"Restaurante"},"task-9":{id:"task-9",content:"Marcel Duchamp",price:350,segment:"Consultoria"},"task-10":{id:"task-10",content:"Man Ray",price:350,segment:"Com\xe9rcio"},"task-11":{id:"task-11",content:"Giorgio de Chirico",price:0,segment:"Com\xe9rcio"},"task-12":{id:"task-12",content:"Vladimir Kush",price:0,segment:"Com\xe9rcio"},"task-13":{id:"task-13",content:"Leonora Carrington",price:350,segment:"Com\xe9rcio"}},columns:{"column-1":{id:"column-1",title:"Qualifica\xe7\xe3o/agendamento",taskIds:["task-1","task-2","task-3","task-4","task-5","task-11","task-12"]},"column-2":{id:"column-2",title:"Diagn\xf3stico",taskIds:["task-6","task-7","task-8","task-13"]},"column-3":{id:"column-3",title:"Demonstra\xe7\xe3o do sistema",taskIds:["task-9","task-10"]},"column-4":{id:"column-4",title:"Fechamento",taskIds:[]}},columnOrder:["column-1","column-2","column-3","column-4"]};function ae(){var e=Object(D.a)(["\n  display: flex\n"]);return ae=function(){return e},e}var ne=W.a.Option;function re(e){}var le=S.a.div(ae()),ce=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state=te,a.handleChange=function(e){console.log("selected ".concat(e)),a.setState(te)},a.myTasks=function(){return a.state.columnOrder.map(function(e){return a.state.columns[e].taskIds.map(function(e){return a.state.tasks[e]})})},a.somaTotal=function(){var e=a.myTasks(),t=0,n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var i=c.value,s=!0,u=!1,m=void 0;try{for(var d,p=i[Symbol.iterator]();!(s=(d=p.next()).done);s=!0){t+=d.value.price}}catch(E){u=!0,m=E}finally{try{s||null==p.return||p.return()}finally{if(u)throw m}}}}catch(E){r=!0,l=E}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return t},a.onDragEnd=function(e){var t,n=e.destination,r=e.source,l=e.draggableId;if(n&&(n.droppableId!==r.droppableId||n.index!==r.index)){var c=a.state.columns[r.droppableId],o=a.state.columns[n.droppableId],i=Array.from(c.taskIds);if(i.splice(r.index,1),i.splice(n.index,0,l),c!==o){var s=Array.from(c.taskIds);s.splice(r.index,1);var u=Object(w.a)({},c,{taskIds:s}),m=Array.from(o.taskIds);m.splice(n.index,0,l);var d=Object(w.a)({},o,{taskIds:m}),p=Object(w.a)({},a.state,{columns:Object(w.a)({},a.state.columns,(t={},Object(F.a)(t,u.id,u),Object(F.a)(t,d.id,d),t))});a.setState(p)}else{var E=Object(w.a)({},c,{taskIds:i}),b=Object(w.a)({},a.state,{columns:Object(w.a)({},a.state.columns,Object(F.a)({},E.id,E))});a.setState(b)}}},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(W.a,{defaultValue:"Funil Vendas",style:{width:140},onChange:re},u.a.createElement(ne,{value:"Funil Inbound"},u.a.createElement(T.a,{to:"/funil/1"},"Funil Inbound")),u.a.createElement(ne,{value:"Funil Contas"},u.a.createElement(T.a,{to:"/funil/2"},"Funil Contas")),u.a.createElement(ne,{value:"Funil Vendas"},u.a.createElement(T.a,{to:"/funil/3"},"Funil Vendas"))),u.a.createElement("b",null,"  R$ ".concat(this.somaTotal()," [").concat(Object.keys(this.state.tasks).length," Leads]")),u.a.createElement(A.a,{onDragEnd:this.onDragEnd,onDragStart:this.onDragStart,onDragUpdate:this.onDragUpdate},u.a.createElement(le,null,this.state.columnOrder.map(function(t){var a=e.state.columns[t],n=a.taskIds.map(function(t){return e.state.tasks[t]});return u.a.createElement($,{key:a.id,column:a,tasks:n})}))))}}]),t}(u.a.Component),oe={tasks:{"task-1":{id:"task-1",content:"Pablo Picasso",price:0,segment:"Consultoria"},"task-2":{id:"task-2",content:"Georges Braque",price:229,segment:"Com\xe9rcio"},"task-3":{id:"task-3",content:"Salvador Dal\xed",price:0,segment:"Consultoria"},"task-4":{id:"task-4",content:"Paul C\xe9zanne",price:0,segment:"Com\xe9rcio "},"task-5":{id:"task-5",content:"Juan Gris",price:229,segment:"Restaurante"},"task-6":{id:"task-6",content:"Marcel Duchamp",price:0,segment:"Consultoria"},"task-7":{id:"task-7",content:"Pieter Cornelis Mondrian",price:0,segment:"Consultoria"},"task-8":{id:"task-8",content:"Carmen Frida Kahlo",price:350,segment:"Restaurante"},"task-9":{id:"task-9",content:"Fernand L\xe9ger",price:350,segment:"Consultoria"},"task-10":{id:"task-10",content:"Paul Klee",price:350,segment:"Com\xe9rcio"},"task-11":{id:"task-11",content:"Marc Chagall",price:0,segment:"Com\xe9rcio"},"task-12":{id:"task-12",content:"Kazimir Malevich",price:0,segment:"Com\xe9rcio"},"task-13":{id:"task-13",content:"Diego Rivera",price:350,segment:"Com\xe9rcio"},"task-14":{id:"task-14",content:"Romero Britto",price:229,segment:"Com\xe9rcio"},"task-15":{id:"task-15",content:"Robert Delaunay",price:0,segment:"Com\xe9rcio"},"task-16":{id:"task-16",content:"David Hockney",price:0,segment:"Com\xe9rcio"},"task-17":{id:"task-17",content:"Jean Metzinger",price:350,segment:"Com\xe9rcio"},"task-18":{id:"task-18",content:"Jean Metzinger",price:0,segment:"Com\xe9rcio"},"task-19":{id:"task-19",content:"Franz Marc",price:350,segment:"Com\xe9rcio"},"task-20":{id:"task-20",content:"Francis Picabia",price:229,segment:"Com\xe9rcio"}},columns:{"column-1":{id:"column-1",title:"Captura Lead",taskIds:["task-1","task-2","task-3","task-4","task-5","task-11","task-12","task-14","task-15","task-16","task-17"]},"column-2":{id:"column-2",title:"Qualifica\xe7\xe3o/Agendamento",taskIds:["task-6","task-7","task-8","task-13","task-18","task-19"]},"column-3":{id:"column-3",title:"Diagn\xf3stico",taskIds:["task-9","task-10","task-20"]},"column-4":{id:"column-4",title:"Demonstra\xe7\xe3o do Sistema",taskIds:[]},"column-5":{id:"column-5",title:"Fechamento",taskIds:[]}},columnOrder:["column-1","column-2","column-3","column-4","column-5"]};function ie(){var e=Object(D.a)(["\n  display: flex\n"]);return ie=function(){return e},e}var se=W.a.Option;function ue(e){}var me=S.a.div(ie()),de=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state=oe,a.handleChange=function(e){console.log("selected ".concat(e)),a.setState(oe)},a.myTasks=function(){return a.state.columnOrder.map(function(e){return a.state.columns[e].taskIds.map(function(e){return a.state.tasks[e]})})},a.somaTotal=function(){var e=a.myTasks(),t=0,n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var i=c.value,s=!0,u=!1,m=void 0;try{for(var d,p=i[Symbol.iterator]();!(s=(d=p.next()).done);s=!0){t+=d.value.price}}catch(E){u=!0,m=E}finally{try{s||null==p.return||p.return()}finally{if(u)throw m}}}}catch(E){r=!0,l=E}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return t},a.onDragEnd=function(e){var t,n=e.destination,r=e.source,l=e.draggableId;if(n&&(n.droppableId!==r.droppableId||n.index!==r.index)){var c=a.state.columns[r.droppableId],o=a.state.columns[n.droppableId],i=Array.from(c.taskIds);if(i.splice(r.index,1),i.splice(n.index,0,l),c!==o){var s=Array.from(c.taskIds);s.splice(r.index,1);var u=Object(w.a)({},c,{taskIds:s}),m=Array.from(o.taskIds);m.splice(n.index,0,l);var d=Object(w.a)({},o,{taskIds:m}),p=Object(w.a)({},a.state,{columns:Object(w.a)({},a.state.columns,(t={},Object(F.a)(t,u.id,u),Object(F.a)(t,d.id,d),t))});a.setState(p)}else{var E=Object(w.a)({},c,{taskIds:i}),b=Object(w.a)({},a.state,{columns:Object(w.a)({},a.state.columns,Object(F.a)({},E.id,E))});a.setState(b)}}},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(W.a,{defaultValue:"Funil Inbound",style:{width:140},onChange:ue},u.a.createElement(se,{value:"Funil Inbound"},u.a.createElement(T.a,{to:"/funil/1"},"Funil Inbound")),u.a.createElement(se,{value:"Funil Contas"},u.a.createElement(T.a,{to:"/funil/2"},"Funil Contas")),u.a.createElement(se,{value:"Funil Vendas"},u.a.createElement(T.a,{to:"/funil/3"},"Funil Vendas"))),u.a.createElement("b",null,"  R$ ".concat(this.somaTotal()," [").concat(Object.keys(this.state.tasks).length," Leads]")),u.a.createElement(A.a,{onDragEnd:this.onDragEnd,onDragStart:this.onDragStart,onDragUpdate:this.onDragUpdate},u.a.createElement(me,null,this.state.columnOrder.map(function(t){var a=e.state.columns[t],n=a.taskIds.map(function(t){return e.state.tasks[t]});return u.a.createElement($,{key:a.id,column:a,tasks:n})}))))}}]),t}(u.a.Component),pe=a(147),Ee=a.n(pe),be=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("img",{src:Ee.a,alt:""})}}]),t}(s.Component),fe=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("h1",null,"Relatorio!")}}]),t}(s.Component),ke=a(296),ge=(a(247),a(295)),he=a(289),ye=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(ge.a,{title:"Person",className:"textSider",type:"inner",extra:[u.a.createElement(M.a,{type:"edit"}),u.a.createElement(M.a,{type:"colum-height"}),u.a.createElement(M.a,{type:"setting"})]},u.a.createElement("div",{className:"corpoCard"},u.a.createElement(he.a,{size:"large",icon:"user"}),u.a.createElement("h3",null,"Gama")),u.a.createElement("div",{className:"labels"},u.a.createElement("label",null,"Label"),u.a.createElement("br",null),u.a.createElement("label",null,"Email"),u.a.createElement("br",null),u.a.createElement("label",null,"Instant messenge"),u.a.createElement("br",null),u.a.createElement("label",null,"Postal address"),u.a.createElement("br",null),u.a.createElement("label",null,"Qualifica\xe7\xe3o"),u.a.createElement("br",null),u.a.createElement("label",null,"Tipo do Contato")),u.a.createElement("hr",null),u.a.createElement(ge.a,null))}}]),t}(u.a.Component),ve=(a(257),a(281)),Oe=ve.a.TabPane,je=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(ve.a,{defaultActiveKey:"1",style:{background:"#FFF",padding:10}},u.a.createElement(Oe,{tab:u.a.createElement("span",null,u.a.createElement(M.a,{type:"file-text"}),"Anota\xe7\xf5es"),key:"1"},"Cliquei aqui para fazer anota\xe7\xf5es..."),u.a.createElement(Oe,{tab:u.a.createElement("span",null,u.a.createElement(M.a,{type:"calendar"}),"Agende atividade"),key:"2"},"Tab 2"),u.a.createElement(Oe,{tab:u.a.createElement("span",null,u.a.createElement(M.a,{type:"mail"}),"Manda email"),key:"3"},"Tab 3"),u.a.createElement(Oe,{tab:u.a.createElement("span",null,u.a.createElement(M.a,{type:"paper-clip"}),"Arquivos"),key:"4"},"Tab 4"))}}]),t}(u.a.Component),Ce=(a(259),a(300)),xe=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(Ce.a,{style:{background:"#FFF",margin:"10px 10px 0 0",padding:10}},u.a.createElement(Ce.a.Item,null,"Ligar 2015-09-01"),u.a.createElement(Ce.a.Item,null,"Solve initial network problems 2015-09-01"),u.a.createElement(Ce.a.Item,{dot:u.a.createElement(M.a,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),u.a.createElement(Ce.a.Item,null,"Network problems being solved 2015-09-01"))}}]),t}(u.a.Component),Ie=(a(261),a(292)),Fe=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(ge.a,{title:"OVERVIEW",className:"textSider",type:"inner"},u.a.createElement("div",null,u.a.createElement(p.a,null,u.a.createElement(E.a,{span:12},u.a.createElement("h4",null,"Deal age")),u.a.createElement(E.a,{span:4,offset:8},"78 days"),u.a.createElement(Ie.a,{showInfo:!1,percent:100,status:"exception"}),u.a.createElement(Ie.a,{showInfo:!1,percent:30})),u.a.createElement(p.a,null,u.a.createElement(E.a,{span:12},"Avg time to Won"),u.a.createElement(E.a,{span:4,offset:8},"16 days")),u.a.createElement(p.a,null,u.a.createElement(E.a,{span:12},"Inactive (days)"),u.a.createElement(E.a,{span:4,offset:8},"0")),u.a.createElement(p.a,null,u.a.createElement(E.a,{span:12},"Created"),u.a.createElement(E.a,{span:4,offset:8},"17/09/2018")),u.a.createElement("h4",null,"Top activities"),u.a.createElement(Ie.a,{percent:60,successPercent:33,showInfo:!1}),u.a.createElement(p.a,{type:"flex",justify:"space-between"},u.a.createElement(E.a,{span:8},"Deadline"),u.a.createElement(E.a,{span:4},"9 "),u.a.createElement(E.a,{span:4},"60%")),u.a.createElement(p.a,{type:"flex",justify:"space-between"},u.a.createElement(E.a,{span:8},"Call"),u.a.createElement(E.a,{span:4},"5 "),u.a.createElement(E.a,{span:4},"33%")),u.a.createElement(p.a,{type:"flex",justify:"space-between"},u.a.createElement(E.a,{span:8},"Meeting"),u.a.createElement(E.a,{span:4},"1"),u.a.createElement(E.a,{span:4},"7%")),u.a.createElement("h4",null,"Most active users"),u.a.createElement(Ie.a,{percent:100,showInfo:!1}),u.a.createElement(p.a,{type:"flex",justify:"space-between"},u.a.createElement(E.a,{span:8},"Anny Martins"),u.a.createElement(E.a,{span:4},"15"),u.a.createElement(E.a,{span:4},"100%"))))}}]),t}(u.a.Component),we=(a(263),a(100)),De=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(ge.a,{title:"Participants (1)",className:"card",extra:[u.a.createElement(M.a,{type:"plus-square"})]},u.a.createElement("p",null,u.a.createElement(M.a,{type:"user"})," Anny Martins"),u.a.createElement(we.a,{className:"botao"},"View all"))}}]),t}(u.a.Component),Se=(a(265),a(150)),Ae=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(ge.a,{className:"card",title:"DETAILS",extra:[u.a.createElement(M.a,{type:"edit"}),u.a.createElement(M.a,{type:"colum-height"}),u.a.createElement(Se.Button,{size:"small"},"Customise fields")],key:"details"},u.a.createElement(p.a,null,u.a.createElement(E.a,{span:24},"Nome Skype:")),u.a.createElement(p.a,null,u.a.createElement(E.a,{span:24},"Origem do Lead:")),u.a.createElement(p.a,null,u.a.createElement(E.a,{span:8},"Respons\xe1vel Canal - Informa\xe7\xe3o Interna"),u.a.createElement(E.a,{span:8})))}}]),t}(u.a.Component),Re=(a(274),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(ge.a,{title:"Organization",className:"textSider",type:"inner",extra:[u.a.createElement(M.a,{type:"edit"}),u.a.createElement(M.a,{type:"colum-height"}),u.a.createElement(M.a,{type:"setting"})]},u.a.createElement("div",{className:"corpoCard"},u.a.createElement(he.a,{size:"large",icon:"user"}),u.a.createElement("h3",null,"Gama")),u.a.createElement("div",{className:"labels"},u.a.createElement("label",null,"Label"),u.a.createElement("br",null),u.a.createElement("label",null,"Address"),u.a.createElement("br",null),u.a.createElement("label",null,"Quantidade de fornecedores"),u.a.createElement("br",null),u.a.createElement("label",null,"Quantidade de Cota\xe7\xf5es por m\xeas"),u.a.createElement("br",null),u.a.createElement("label",null,"Quantidade de pedidos m\xeas+"),u.a.createElement("br",null),u.a.createElement("label",null,"Quantos compradores na sua empresa??")),u.a.createElement("hr",null),u.a.createElement(ge.a,null))}}]),t}(u.a.Component)),Me=(a(276),a(282)),Te={background:"#08a742",width:"20%",WebkitClipPath:"polygon(0% 0%, 98% 0, 100% 50%, 98% 100%, 0% 100%)",clipPath:"polygon(0% 0%, 98% 0, 100% 50%, 98% 100%, 0% 100%)",borderRight:"1px solid #FFF",color:"#FFF"},Le=Object(w.a)({},Te,{background:"#DDD"}),Pe=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(p.a,{type:"flex",justify:"space-between"},u.a.createElement(E.a,{span:8},u.a.createElement("h3",null,"Neg\xf3cio Telsign Consultoria em Telecom Ltda")),u.a.createElement(E.a,{span:3},u.a.createElement(he.a,{size:"small",icon:"user"}),"Anny Martins",u.a.createElement(we.a,{size:"small"},"Wow"),u.a.createElement(we.a,{type:"danger",size:"small"},"Lost"))),u.a.createElement(p.a,{type:"flex",justify:"start"},u.a.createElement(E.a,{span:4},"R$ 0Add products"),u.a.createElement(E.a,{span:4},u.a.createElement(M.a,{type:"user"}),"Marcelo Constantino"),u.a.createElement(E.a,{span:8},u.a.createElement(M.a,{type:"shop"}),"Telsign Consultoria em Telecom Ltda")),u.a.createElement(p.a,{type:"flex",style:{margin:"8px 0"}},u.a.createElement(Me.a,{title:u.a.createElement("p",null,"Mailing (enviado pelo marketing)"),placement:"bottom"},u.a.createElement(we.a,{style:Te},"5 Dias")),u.a.createElement(Me.a,{title:u.a.createElement("p",null,"Qualifica\xe7\xe3o/agendamento  (SDR Contas - Call)"),placement:"bottom"},u.a.createElement(we.a,{style:Le})),u.a.createElement(Me.a,{title:u.a.createElement("p",null,"Apresenta\xe7\xe3o da parceria (Executivo de contas \u2013 videoconfer\xeancia)"),placement:"bottom"},u.a.createElement(we.a,{style:Le})),u.a.createElement(Me.a,{title:u.a.createElement("p",null,"Fechamento Parceira (Executivo de contas)"),placement:"bottom"},u.a.createElement(we.a,{style:Le})),u.a.createElement(Me.a,{title:u.a.createElement("p",null,"Recebimento de planilha com carteira de clientes (Executivo de contas)"),placement:"bottom"},u.a.createElement(we.a,{style:Le}))))}}]),t}(u.a.Component),Ne=ke.a.Sider,ze=ke.a.Content,Ve=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"App"},u.a.createElement(Pe,null),u.a.createElement(ke.a,{style:{padding:"10px 0",background:"#e7e7e7"}},u.a.createElement(Ne,{style:{padding:"10px 0",margin:"10px",background:"#e7e7e7"},width:400},u.a.createElement(Ae,null),u.a.createElement(Re,null),u.a.createElement(ye,null),u.a.createElement(De,null),u.a.createElement(Fe,null)),u.a.createElement(ze,null,u.a.createElement(je,null),u.a.createElement(xe,null))))}}]),t}(s.Component),Qe=a(299),Be=a(290),Je=a(301),Ge=(a(278),a(293)),He=a(297),Ke=a(298),Ue=a(294),qe=ke.a.Header,$e=ke.a.Sider,We=ke.a.Content,_e=Ge.a.Search,Xe=u.a.createElement(He.a,null,u.a.createElement(He.a.Item,null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},"1st menu item")),u.a.createElement(He.a.Item,null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"2nd menu item")),u.a.createElement(He.a.Item,null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"},"3rd menu item"))),Ye=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={collapsed:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.escFunction=a.escFunction.bind(Object(i.a)(Object(i.a)(a))),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"escFunction",value:function(e){27===e.keyCode&&function(){var e=u.a.createElement("a",{href:"/lead"},u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(M.a,{type:"user"}),"Michelangelo"),u.a.createElement("span",null,"Consultoria")));Ke.a.open({message:"Voc\xea tem um novo Lead!",description:e,style:{width:600,marginLeft:-265},duration:2})}()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){return u.a.createElement(Qe.a,null,u.a.createElement("div",null,u.a.createElement(ke.a,null,u.a.createElement(Be.a,null,u.a.createElement($e,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,style:{minHeight:"100vh"}},u.a.createElement("div",{className:"logo"}),u.a.createElement(He.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},u.a.createElement(He.a.Item,{key:"1"},u.a.createElement(T.a,{to:"/"},u.a.createElement(M.a,{type:"bar-chart"}),u.a.createElement("span",null,"Dashboard"))),u.a.createElement(He.a.Item,{key:"2"},u.a.createElement(T.a,{to:"/funil/1"},u.a.createElement(M.a,{type:"filter"}),u.a.createElement("span",null,"Funil"))),u.a.createElement(He.a.Item,{key:"3"},u.a.createElement(T.a,{to:"/fluxo"},u.a.createElement(M.a,{type:"cluster"}),u.a.createElement("span",null,"Fluxo"))),u.a.createElement(He.a.Item,{key:"4"},u.a.createElement(T.a,{to:"/relatorio"},u.a.createElement(M.a,{type:"file-pdf"}),u.a.createElement("span",null,"Relat\xf3rio")))))),u.a.createElement(ke.a,null,u.a.createElement(Be.a,null,u.a.createElement(qe,{style:{background:"#fff",padding:0,display:"flex",justifyContent:"space-between"}},u.a.createElement(M.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),u.a.createElement("div",null,u.a.createElement(_e,{placeholder:"Fa\xe7a a sua busca...",onSearch:function(e){return console.log(e)},style:{width:200,height:32}}),u.a.createElement(we.a,null,u.a.createElement(M.a,{type:"question-circle"})),u.a.createElement(Ue.a,{overlay:Xe,placement:"bottomRight"},u.a.createElement(we.a,null,u.a.createElement(M.a,{type:"bell"}))),u.a.createElement(Ue.a,{overlay:Xe,placement:"bottomRight"},u.a.createElement(we.a,{style:{marginRight:20}},u.a.createElement(M.a,{type:"global"})))))),u.a.createElement(We,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},u.a.createElement(Je.a,null,u.a.createElement(Be.a,{path:"/",exact:!0,component:I}),u.a.createElement(Be.a,{path:"/funil/1",exact:!0,component:de}),u.a.createElement(Be.a,{path:"/funil/2",exact:!0,component:ee}),u.a.createElement(Be.a,{path:"/funil/3",exact:!0,component:ce}),u.a.createElement(Be.a,{path:"/fluxo",component:be}),u.a.createElement(Be.a,{path:"/relatorio",component:fe}),u.a.createElement(Be.a,{path:"/lead",component:Ve})))))))}}]),t}(u.a.Component);d.a.render(u.a.createElement(Ye,null),document.getElementById("root"))}},[[155,2,1]]]);
//# sourceMappingURL=main.20f9b948.chunk.js.map