(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,r){t.exports=r(21)},15:function(t,e,r){},21:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(5),c=r.n(a),i=(r(15),r(17),r(7)),l=r(2),s=r(3),u=r(8),p=r(6),m=r(9),f=r(1),h=function(t,e){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var d="styles_scrollable-div__1DOyU";!function(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".styles_scrollable-div__1DOyU {\r\n  max-height: inherit;\r\n  height: inherit;\r\n  overflow-y: auto;\r\n}\r\n");var b=function(t){function e(e){var r=t.call(this,e)||this;return r.bottomRef=Object(f.createRef)(),r.wrapperRef=Object(f.createRef)(),r.handleScroll=r.handleScroll.bind(r),r}return function(t,e){function r(){this.constructor=t}h(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.getSnapshotBeforeUpdate=function(){if(this.wrapperRef.current&&this.bottomRef.current){var t=this.props.viewableDetectionEpsilon;return e.isViewable(this.wrapperRef.current,this.bottomRef.current,t)}return!1},e.prototype.componentDidUpdate=function(t,e,r){var n=this.props,o=n.forceScroll;(0,n.changeDetectionFilter)(t,this.props)&&(o||r)&&this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},e.prototype.componentDidMount=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},e.prototype.scrollParentToChild=function(t,r){var n=this.props.viewableDetectionEpsilon;if(!e.isViewable(t,r,n)){var o=t.getBoundingClientRect(),a=r.getBoundingClientRect().top+t.scrollTop-o.top,c=this.props,i=c.animateScroll,l=c.onScrollComplete;i&&(i(t,a),l())}},e.isViewable=function(t,e,r){r=r||0;var n=t.getBoundingClientRect(),o=e.getBoundingClientRect(),a=o.top>=n.top,c=n.top+t.clientHeight-o.top;return a&&c+r>=0},e.prototype.handleScroll=function(){var t=this.props,r=t.viewableDetectionEpsilon,n=t.onScroll;n&&this.bottomRef.current&&this.wrapperRef.current&&n(e.isViewable(this.wrapperRef.current,this.bottomRef.current,r))},e.prototype.scrollToBottom=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},e.prototype.render=function(){var t=this.props,e=t.children,r=t.className,n=d+(r?" "+r:"");return Object(f.createElement)("div",{className:n,ref:this.wrapperRef,onScroll:this.handleScroll},e,Object(f.createElement)("div",{ref:this.bottomRef}))},e.defaultProps={forceScroll:!1,animateScroll:function(t,e){t.scrollBy?t.scrollBy({top:e}):t.scrollTop=e},onScrollComplete:function(){},changeDetectionFilter:function(){return!0},viewableDetectionEpsilon:2,onScroll:function(){}},e}(f.Component),v=function(){function t(){Object(l.a)(this,t)}return Object(s.a)(t,null,[{key:"get",value:function(){var e=Math.floor(Math.random()*t.colors.length);return t.colors[e]}}]),t}();v.colors=["#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#42d4f4","#f032e6","#fabebe","#469990","#e6beff","#9A6324","#fffac8","#800000","#aaffc3","#000075","#a9a9a9","#000000"];var y=function(t){function e(t){var r;return Object(l.a)(this,e),(r=Object(u.a)(this,Object(p.a)(e).call(this,t))).state={isAtBottom:!0,items:[r.createItem(),r.createItem(),r.createItem(),r.createItem()],interval:void 0},r.scrollableRef=o.a.createRef(),r}return Object(m.a)(e,t),Object(s.a)(e,[{key:"updateIsAtBottomState",value:function(t){this.setState({isAtBottom:t})}},{key:"createItem",value:function(){return{timestamp:(new Date).toISOString(),color:v.get()}}},{key:"addItem",value:function(){var t=this;this.setState(function(e){return{items:Object(i.a)(e.items).concat([t.createItem()])}})}},{key:"pause",value:function(){clearInterval(this.state.interval),this.setState(function(t){return{interval:void 0}})}},{key:"resume",value:function(){var t=this,r=setInterval(function(){t.addItem()},e.intervalDelay);this.setState(function(t){return{interval:r}})}},{key:"clear",value:function(){this.setState(function(t){return{items:[]}})}},{key:"scrollToBottom",value:function(){this.scrollableRef.current.scrollToBottom()}},{key:"render",value:function(){var t=this,e=this.state,r=e.isAtBottom,n=e.items,a=e.interval;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row d-flex justify-content-center mt-5"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body scrollable-wrapper pt-0 pb-0 mt-2"},o.a.createElement(b,{ref:this.scrollableRef,onScroll:function(e){return t.updateIsAtBottomState(e)}},o.a.createElement("ul",{className:"list-group list-group-flush"},n.map(function(t,e){return o.a.createElement("li",{key:e,className:"list-group-item"},o.a.createElement("span",{className:"dot mr-2",style:{backgroundColor:t.color}}),t.timestamp)})))),o.a.createElement("div",{className:"text-center"},o.a.createElement("p",null,n.length," items"),o.a.createElement("button",{onClick:function(){return t.addItem()},type:"button",className:"btn btn-primary m-2"},"Add Item"),a?o.a.createElement("button",{onClick:function(){return t.pause()},type:"button",className:"btn btn-primary m-2"},"Pause"):o.a.createElement("button",{onClick:function(){return t.resume()},type:"button",className:"btn btn-primary m-2"},"Autoplay"),o.a.createElement("button",{onClick:function(){return t.scrollToBottom()},disabled:r,type:"button",className:"btn btn-primary m-2"},"Scroll to Bottom"),o.a.createElement("button",{onClick:function(){return t.clear()},type:"button",className:"btn btn-primary m-2"},"Clear"))))))}}]),e}(n.Component);y.intervalDelay=800,c.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.0bc851e0.chunk.js.map