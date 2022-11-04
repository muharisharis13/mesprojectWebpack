/*! For license information please see hoverIntent.js.LICENSE.txt */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.hoverIntent&&e(jQuery)}((function(e){"use strict";var t,n,i={interval:100,sensitivity:6,timeout:0},o=0,u=function(e){t=e.pageX,n=e.pageY},r=function(e,i,o,v){if(Math.sqrt((o.pX-t)*(o.pX-t)+(o.pY-n)*(o.pY-n))<v.sensitivity)return i.off(o.event,u),delete o.timeoutId,o.isActive=!0,e.pageX=t,e.pageY=n,delete o.pX,delete o.pY,v.over.apply(i[0],[e]);o.pX=t,o.pY=n,o.timeoutId=setTimeout((function(){r(e,i,o,v)}),v.interval)};e.fn.hoverIntent=function(t,n,v){var a=o++,s=e.extend({},i);e.isPlainObject(t)?(s=e.extend(s,t),e.isFunction(s.out)||(s.out=s.over)):s=e.isFunction(n)?e.extend(s,{over:t,out:n,selector:v}):e.extend(s,{over:t,out:t,selector:n});var f=function(t){var n=e.extend({},t),i=e(this),o=i.data("hoverIntent");o||i.data("hoverIntent",o={});var v=o[a];v||(o[a]=v={id:a}),v.timeoutId&&(v.timeoutId=clearTimeout(v.timeoutId));var f=v.event="mousemove.hoverIntent.hoverIntent"+a;if("mouseenter"===t.type){if(v.isActive)return;v.pX=n.pageX,v.pY=n.pageY,i.off(f,u).on(f,u),v.timeoutId=setTimeout((function(){r(n,i,v,s)}),s.interval)}else{if(!v.isActive)return;i.off(f,u),v.timeoutId=setTimeout((function(){!function(e,t,n,i){delete t.data("hoverIntent")[n.id],i.apply(t[0],[e])}(n,i,v,s.out)}),s.timeout)}};return this.on({"mouseenter.hoverIntent":f,"mouseleave.hoverIntent":f},s.selector)}}));