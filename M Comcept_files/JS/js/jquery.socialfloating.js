/*!
 * socialfloating.js 0.1.0
 * https://github.com/ixtlistudios/jquery.socialfloating.js
 *
 * Copyright 2020, Ixtli Studios
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
!function(s){"use strict";s.socialfloating=function(a){var t=s.extend({},{theme:"light",opaque:!1,effect:null,icons:"fontawesome5",showHideButton:!0,container:"socialfloating",position:"right",buttons:{}},a),e=s("#"+t.container);if(0===e.length){if(s("body").append('<div id="'+t.container+'" class="contact-bar '+t.position+'">'),(e=s("#"+t.container)).addClass(t.effect),!0===t.showHideButton){var i;switch(t.icons){case"fontawesome4":switch(t.position){case"right":i='<a class="cb-link toggle-bar"><span class="fa fa-angle-right" aria-hidden="true"></span></a>';break;default:i='<a class="cb-link toggle-bar"><span class="fa fa-angle-left" aria-hidden="true"></span></a>'}break;case"semanticui":switch(t.position){case"right":i='<a class="cb-link toggle-bar"><i class="angle right icon"></i></a>';break;default:i='<a class="cb-link toggle-bar"><i class="angle left icon"></i></a>'}break;default:switch(t.position){case"right":i='<a class="cb-link toggle-bar"><span class="fas fa-angle-right" aria-hidden="true"></span></a>';break;default:i='<a class="cb-link toggle-bar"><span class="fas fa-angle-left" aria-hidden="true"></span></a>'}}e.append(i)}!function a(t,e,i,s){var n,o="";for(n in e)if(Array.isArray(e[n]))a(t,e[n],i,s),i=!0;else{1==i?i=!(o=" separated"):o="";var l=e[n];if(l.enabled){var c;switch(s){case"fontawesome4":c='<span class="'+l.icon+'" aria-hidden="true"></span>';break;case"semanticui":c='<i class="'+l.icon+' icon"></i>';break;default:c='<span class="'+l.icon+'" aria-hidden="true"></span>'}var r='<a href="'+l.link+'" class="cb-link cb-anchor'+o+'" '+(l.color?'style="background-color: '+l.color+'"':"")+(l.title?'title="'+l.title+'"':"")+(l.extras?l.extras:"")+">"+c+"</a>";t.append(r)}}}(e,t.buttons,!1,t.icons),setTimeout(function(){switch(t.position){case"right":e.animate({right:0});break;default:e.animate({left:0})}},200),s("body").on("click",".toggle-bar",function(a){switch(a.preventDefault(),a.stopImmediatePropagation(),t.icons){case"fontawesome4":s(".toggle-bar").find(".fa").toggleClass("fa-angle-right fa-angle-left"),e.find(".cb-anchor").toggleClass("cb-hidden");break;case"semanticui":s(".toggle-bar").find(".icon").toggleClass("right left"),e.find(".cb-anchor").toggleClass("cb-hidden");break;default:s(".toggle-bar").find(".fas").toggleClass("fa-angle-right fa-angle-left"),e.find(".cb-anchor").toggleClass("cb-hidden")}})}},s(function(){var t=s(".contact-bar.slide-on-scroll");t.attr("data-top",t.css("top")),s(window).scroll(function(){clearTimeout(s.data(this,"scrollCheck")),s.data(this,"scrollCheck",setTimeout(function(){var a=s(window).scrollTop()+parseInt(t.attr("data-top"));t.animate({top:a},500)},250))})})}(jQuery);