!function(w){var registrationFunction=(document.registerElement||document.register).bind(document);if(void 0!==registrationFunction){var registerReact=function(t,e){var r=Object.create(HTMLElement.prototype);r.createdCallback=function(){this.reactiveElement={},this.reactiveElement=new e(getPropertiesFromAttributes(this.attributes)),extend(this,this.reactiveElement),getterSetter(this,"props",function(){return this.reactiveElement.props},function(t){this.reactiveElement.props=t}),React.renderComponent(this.reactiveElement,this)},r.attributeChangedCallback=function(){this.reactiveElement.props=getPropertiesFromAttributes(this.attributes),this.reactiveElement.forceUpdate()},registrationFunction(t,{prototype:r})};document.registerReact=registerReact,void 0!==w.xtag&&(w.xtag.registerReact=registerReact);var extend=function(t,e){for(var r in e)void 0===t[r]&&(t[r]="function"==typeof e[r]?e[r].bind(e):e[r])},getPropertiesFromAttributes=function(t){for(var e={},r=0;r<t.length;r++){var n=t[r];e[n.name]=parseAttributeValue(t[r].value)}return e},parseAttributeValue=function(value){var regexp=/\{.*?\}/g,matches=value.match(regexp);return null!==matches&&void 0!==matches&&matches.length>0&&(value=eval(matches[0].replace("{","").replace("}",""))),value},getterSetter=function(t,e,r,n){Object.defineProperty?Object.defineProperty(t,e,{get:r,set:n}):document.__defineGetter__&&(t.__defineGetter__(e,r),t.__defineSetter__(e,n)),t["get"+e]=r,t["set"+e]=n}}}(window),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),r=this,n=function(){},i=function(){return r.apply(this instanceof n&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,i.prototype=new n,i});