!function(h){h.fn.idTabs=function(){for(var e={},t=0;t<arguments.length;++t){var s=arguments[t];switch(s.constructor){case Object:h.extend(e,s);break;case Boolean:e.change=s;break;case Number:e.start=s;break;case Function:e.click=s;break;case String:"."==s.charAt(0)?e.selected=s:"!"==s.charAt(0)?e.event=s:e.start=s}}return"function"==typeof e.return&&(e.change=e.return),this.each(function(){h.idTabs(this,e)})},h.idTabs=function(n,e){var t=h.metadata?h(n).metadata():{},r=h.extend({},h.idTabs.settings,t,e);"."==r.selected.charAt(0)&&(r.selected=r.selected.substr(1)),"!"==r.event.charAt(0)&&(r.event=r.event.substr(1)),null==r.start&&(r.start=-1);var s=function(){if(h(this).is("."+r.selected))return r.change;var e="#"+this.href.split("#")[1],t=[],s=[];if(h("a",n).each(function(){this.href.match(/#/)&&(t.push(this),s.push("#"+this.href.split("#")[1]))}),r.click&&!r.click.apply(this,[e,s,n,r]))return r.change;for(i in t)h(t[i]).removeClass(r.selected);for(i in s)h(s[i]).hide();return h(this).addClass(r.selected),h(e).show(),r.change},a=h("a[href*='#']",n).unbind(r.event,s).bind(r.event,s);a.each(function(){h("#"+this.href.split("#")[1]).hide()});var c=!1;return(c=a.filter("."+r.selected)).length||"number"==typeof r.start&&(c=a.eq(r.start)).length||"string"==typeof r.start&&(c=a.filter("[href*='#"+r.start+"']")).length,c&&(c.removeClass(r.selected),c.trigger(r.event)),r},h.idTabs.settings={start:0,change:!1,click:null,selected:".selected",event:"!click"},h.idTabs.version="2.2",h(function(){h(".idTabs").idTabs()})}(jQuery);
