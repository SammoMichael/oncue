(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},13:function(e,t,a){e.exports=a(23)},19:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),i=(a(19),a(7)),m=a.n(i),c=a(8),u=a(1),p=a(2),s=a(4),h=a(3),v=a(5),d=a(12),E=a.n(d),b=(a(22),a(9)),f=a(6),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).callBackendAPI=function(){var e=Object(c.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/api/trucks",t);case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",start_time:"7am",end_time:"8pm"},a.update=a.update.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"update",value:function(e){var t=this;return function(a){return t.setState(Object(b.a)({},e,a.target.value))}}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}};this.callBackendAPI(a).then(function(e){return t.setState({data:e})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("form",{className:"truck-form",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name",r.a.createElement("input",{placeholder:"Name of truck",type:"text",value:this.state.name,onChange:this.update("name")})),r.a.createElement("label",null,"Start Time:",r.a.createElement("select",{placeholder:"Choose a start time",required:!0,name:"Start Time",type:"text",value:this.state.start_time,onChange:this.update("start_time")},r.a.createElement("option",{value:"7am"},"7am"),r.a.createElement("option",{value:"8am"},"8am"),r.a.createElement("option",{value:"9am"},"9am"),r.a.createElement("option",{value:"10am"},"10am"),r.a.createElement("option",{value:"11am"},"11am"),r.a.createElement("option",{value:"12am"},"12am"),r.a.createElement("option",{value:"1pm"},"1pm"),r.a.createElement("option",{value:"2pm"},"2pm"),r.a.createElement("option",{value:"3pm"},"3pm"),r.a.createElement("option",{value:"4pm"},"4pm"),r.a.createElement("option",{value:"5pm"},"5pm"),r.a.createElement("option",{value:"6pm"},"6pm"),r.a.createElement("option",{value:"7pm"},"7pm"),r.a.createElement("option",{value:"8pm"},"8pm"))),r.a.createElement("label",null,"End Time:",r.a.createElement("select",{placeholder:"Choose a end time",required:!0,name:"End Time",type:"text",value:this.state.end_time,onChange:this.update("end_time")},r.a.createElement("option",{value:"7am"},"7am"),r.a.createElement("option",{value:"8am"},"8am"),r.a.createElement("option",{value:"9am"},"9am"),r.a.createElement("option",{value:"10am"},"10am"),r.a.createElement("option",{value:"11am"},"11am"),r.a.createElement("option",{value:"12am"},"12am"),r.a.createElement("option",{value:"1pm"},"1pm"),r.a.createElement("option",{value:"2pm"},"2pm"),r.a.createElement("option",{value:"3pm"},"3pm"),r.a.createElement("option",{value:"4pm"},"4pm"),r.a.createElement("option",{value:"5pm"},"5pm"),r.a.createElement("option",{value:"6pm"},"6pm"),r.a.createElement("option",{value:"7pm"},"7pm"),r.a.createElement("option",{value:"8pm"},"8pm"))),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("li",null,this.props.name),r.a.createElement("li",null,this.props.date),r.a.createElement("li",null,this.props.start_time),r.a.createElement("li",null,this.props.end_time))}}]),t}(n.Component),k=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.jobs.map(function(e){return r.a.createElement(y,Object.assign({key:e.id},e))});return r.a.createElement("div",null,this.props.name," assignments",r.a.createElement("ul",null,e,e,e))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).callBackendAPI=function(){var e=Object(c.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/api/jobs",t);case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",start_time:"7am",end_time:"8pm",date:"",truck_id:null},a.update=a.update.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.availability=a.availability.bind(Object(f.a)(a)),a.check_available=a.check_available.bind(Object(f.a)(a)),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"update",value:function(e){var t=this;return function(a){return t.setState(Object(b.a)({},e,a.target.value))}}},{key:"check_available",value:function(e){var t=this;return e.filter(function(e){return!(t.state.start_time<e.start_time&&t.state.end_time<=e.start_time||t.state.start_time>=e.end_time&&t.state.end_time>e.end_time)}).length}},{key:"availability",value:function(){for(var e=this,t=[],a=Object.values(this.props).length,n=0;n<a;n++){var r=this.props[n],l=r.props.jobs;console.log(l);var o=l.filter(function(t){return t.date===e.state.date});this.check_available(o)||t.push(r.props.id),console.log(t)}return t.length?this.setState({truck_id:t[0]}):this.setState({truck_id:null}),t[0]}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.setState({truck_id:this.availability()}),null===this.state.truck_id)return alert("No Availability choose another time");var a={method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}};this.callBackendAPI(a).then(function(e){return t.setState({data:e})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("form",{className:"truck-form",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name",r.a.createElement("input",{placeholder:"Name of person",type:"text",value:this.state.name,onChange:this.update("name")})),r.a.createElement("label",null,"Move Date",r.a.createElement("input",{placeholder:"dd/mm/yyyy",type:"text",value:this.state.date,onChange:this.update("date")})),r.a.createElement("label",null,"Start Time:",r.a.createElement("select",{placeholder:"Choose a start time",required:!0,name:"Start Time",type:"text",value:this.state.start_time,onChange:this.update("start_time")},r.a.createElement("option",{value:"7am"},"7am"),r.a.createElement("option",{value:"8am"},"8am"),r.a.createElement("option",{value:"9am"},"9am"),r.a.createElement("option",{value:"10am"},"10am"),r.a.createElement("option",{value:"11am"},"11am"),r.a.createElement("option",{value:"12am"},"12am"),r.a.createElement("option",{value:"1pm"},"1pm"),r.a.createElement("option",{value:"2pm"},"2pm"),r.a.createElement("option",{value:"3pm"},"3pm"),r.a.createElement("option",{value:"4pm"},"4pm"),r.a.createElement("option",{value:"5pm"},"5pm"),r.a.createElement("option",{value:"6pm"},"6pm"),r.a.createElement("option",{value:"7pm"},"7pm"),r.a.createElement("option",{value:"8pm"},"8pm"))),r.a.createElement("label",null,"End Time:",r.a.createElement("select",{placeholder:"Choose a end time",required:!0,name:"End Time",type:"text",value:this.state.end_time,onChange:this.update("end_time")},r.a.createElement("option",{value:"7am"},"7am"),r.a.createElement("option",{value:"8am"},"8am"),r.a.createElement("option",{value:"9am"},"9am"),r.a.createElement("option",{value:"10am"},"10am"),r.a.createElement("option",{value:"11am"},"11am"),r.a.createElement("option",{value:"12am"},"12am"),r.a.createElement("option",{value:"1pm"},"1pm"),r.a.createElement("option",{value:"2pm"},"2pm"),r.a.createElement("option",{value:"3pm"},"3pm"),r.a.createElement("option",{value:"4pm"},"4pm"),r.a.createElement("option",{value:"5pm"},"5pm"),r.a.createElement("option",{value:"6pm"},"6pm"),r.a.createElement("option",{value:"7pm"},"7pm"),r.a.createElement("option",{value:"8pm"},"8pm"))),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:null},a.callBackendAPI=Object(c.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/api/trucks");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e)})),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.callBackendAPI().then(function(t){return e.setState({data:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e,t=this.state.data;return e=this.state.data?t.trucks.map(function(e,t){return r.a.createElement(k,Object.assign({key:t},e))}):"...loading",console.log(e),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"Oncue"),r.a.createElement(j,null),r.a.createElement(O,e),e))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.d355cba5.chunk.js.map