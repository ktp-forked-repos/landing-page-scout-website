function isEmail(a){var t=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return t.test(a)}function isEmpty(a){var t=!1;return""!=a&&(t=!0),t}function printMessage(){}$(document).foundation(),$(document).ready(function(a){$('div[id$="-form"] .button').on("click",function(a){var t,e="#"+$(this).data("form")+"-form",s={form:e};void 0!=$(e+" textarea").val()&&(isEmpty($(e+" textarea").val())?s[$(e+" textarea").attr("name")]=$(e+" textarea").val():console.log("Napisz coś!")),$(e+" input").each(function(){if("file"==$(this).attr("type")){var a=this.files[0];console.log(a),s[$(this).attr("name")]=a}else"email"==$(this).attr("type")?(t=isEmail($(this).val()),t&&(s[$(this).attr("name")]=$(this).val())):s[$(this).attr("name")]=$(this).val()}),t?$.post("php/fresh/subscriber.php",s).done(function(a){switch(a){case"OK":$(e+' [type="email"]').val(""),"#share-form"==e&&$(e+" #email").addClass("smallmargin"),$(e+" .help-text").html("Wszystko w porzadku! Dziękujemy za subskrypcję!"),setTimeout(function(){$(e+" .help-text").html("").removeClass("smallmargin")},3e3);break;case"1304":$(e+' [type="email"]').val(""),"#share-form"==e&&$(e+" #email").addClass("smallmargin"),$(e+" .help-text").html("Wszystko w porzadku! Dziękujemy twój mail już jest subskrybentem!"),setTimeout(function(){$(e+" .help-text").html("").removeClass("smallmargin")},3e3)}}):("#share-form"==e&&$(e+" #email").addClass("smallmargin"),$(e+" #email").html("Coś poszło nie tak, sprawdź czy podany adres email jest poprawny."),setTimeout(function(){$(e+" .help-text").html("").removeClass("smallmargin")},3e3))}),$(".akcja").on("click",function(a){console.log($(this).data("target"));var t="#"+$(this).data("target");$('article[id ^="harc-artykul-"]').not(t).addClass("hide"),$(t).hasClass("hide")?($(t).removeClass("hide"),$("html, body").animate({scrollTop:$(t).offset().top},1e3)):$(t).addClass("hide")})});