(this["webpackJsonpmovies-rater"]=this["webpackJsonpmovies-rater"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),i=n.n(c),o=n(3),u=(n(23),n(1)),b=function(){return Object(u.jsx)("header",{className:"mb-6",children:Object(u.jsx)("h1",{className:"text-5xl text-gray-800",children:"Rate your favorite movie \ud83e\udd29"})})},l=function(e){var t=e.onChangeFilter,n=e.filterValue;return Object(u.jsx)("input",{type:"text",className:"border-2 border-gray-300 p-2 w-full my-7",placeholder:"Find movies by name...",value:n,onChange:function(e){t(e.target.value)}})},s="phonebook/add",j="phonebook/remove",m="phonebook/changeFilter",d=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.filter}));return Object(u.jsx)(l,{onChangeFilter:function(t){e({type:m,payload:t})},filterValue:t})};function O(e){var t=Math.floor(e/60),n=e%60;return(t=t<10?"0"+t:t)+":"+(n=n<10?"0"+n:n)}var f=[{label:"Movie",name:"movie",type:"text"},{label:"Rating",name:"rating",type:"number"},{label:"Duration",name:"duration",type:"number"}],v=function(e){var t=e.movies;return Object(u.jsxs)("table",{className:"min-w-full table-auto",children:[Object(u.jsx)("thead",{className:"justify-between",children:Object(u.jsx)("tr",{className:"bg-gray-800",children:f.map((function(e){return Object(u.jsx)("th",{className:"px-16 py-2 text-gray-200",children:e.label},e.name)}))})}),Object(u.jsx)("tbody",{className:"bg-gray-200",children:t.map((function(e){var t=e.movie,n=e.rating,r=e.duration;return Object(u.jsxs)("tr",{className:"bg-white border-4 border-gray-200 text-center ml-2 font-semibold",children:[Object(u.jsx)("td",{children:t}),Object(u.jsx)("td",{children:n}),Object(u.jsx)("td",{children:O(r)})]},t)}))})]})},p=function(){var e=Object(o.c)((function(e){return e.filter})),t=Object(o.c)((function(t){return t.movies.filter((function(t){return t.movie.toLowerCase().includes(e.toLowerCase())}))}));return Object(u.jsx)(v,{movies:t})},x=n(14),h=n(5),y=[{label:"Movie",name:"movie",type:"text"},{label:"Rating",name:"rating",type:"number"},{label:"Duration",name:"duration",type:"number"}],g={movie:"",rating:0,duration:0},N=function(e,t){var n=t.type,r=t.payload;switch(n){case"movie":return Object(h.a)(Object(h.a)({},e),{},{movie:r});case"rating":return Object(h.a)(Object(h.a)({},e),{},{rating:r});case"duration":return Object(h.a)(Object(h.a)({},e),{},{duration:r});case"reset":return g;default:return e}},w=function(e){var t=e.onSubmit,n=Object(r.useReducer)(N,g),a=Object(x.a)(n,2),c=a[0],i=a[1],o=function(e){i({type:e.target.name,payload:e.target.value})};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),i({type:"reset"})},children:[y.map((function(e){var t=e.label,n=e.name,r=e.type;return Object(u.jsxs)("label",{children:[Object(u.jsxs)("span",{className:"text-xl text-gray-600",children:[" ",t]}),Object(u.jsx)("input",{required:!0,className:"border-2 border-gray-300 p-2 w-full mb-2",type:r,name:n,value:c[n],onChange:o,max:"durat"===n?"rating"===n?5:1440:"false",min:"0"})]},n)})),Object(u.jsx)("button",{className:"p-3 mt-3 bg-blue-500 text-white hover:bg-blue-400",type:"submit",children:"Submit"})]})},M=function(){var e=Object(o.b)();return Object(u.jsx)(w,{onSubmit:function(t){e({type:s,payload:t})}})};var C,F=function(){return Object(u.jsxs)("div",{className:"container mx-auto py-5",children:[Object(u.jsx)(b,{}),Object(u.jsx)(M,{}),Object(u.jsx)(d,{}),Object(u.jsx)(p,{})]})},k=n(6),S=n(13),R=n(2),D=n(4),J=n(27),L={addMovie:Object(D.b)(s,(function(e,t,n){return{payload:{movie:{id:Object(J.a)(),name:e,rating:t,duration:n}}}})),removeMovie:Object(D.b)(j),changeFilter:Object(D.b)(m)},V=Object(D.c)([],(C={},Object(k.a)(C,L.addMovie,(function(e,t){var n=t.payload;return e.find((function(e){return e.movie===n.movie}))?e.map((function(e){return e.name===n.name?Object(h.a)({},n):e})):[].concat(Object(S.a)(e),[n])})),Object(k.a)(C,L.removeMovie,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),C)),q=Object(D.c)("",Object(k.a)({},L.changeFilter,(function(e,t){return t.payload}))),B=Object(R.b)({movies:V,filter:q}),E=Object(D.a)({reducer:B});i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{store:E,children:Object(u.jsx)(F,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.eb6679d3.chunk.js.map