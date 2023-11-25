(function() {
   $(".grid").height($(window).height());

   var contents = $("iframe").contents(),
       body = contents.find("body"),
       styleTag = $("<style></style>").appendTo(contents.find("head"));

   $("textarea.edit").keyup(function() {
      var $this = $(this);
      if ($this.attr("id") === "html") {
         body.html($this.val());
      } else {
         // it had to be css
         styleTag.text($this.val());
      }
   });
})();

// Модальное окно в случае перезагрузки

window.addEventListener('beforeunload', function(e) {
   e.preventDefault();
   e.returnValue = '';
 });
 
 window.addEventListener('unload', function() {
   // Здесь можно добавить код, который будет выполняться перед перезагрузкой страницы
 });
 
 window.addEventListener('load', function() {
   var confirmExit = true;
 
   // Здесь можно добавить код, который будет выполняться после загрузки страницы
 
   if (confirmExit) {
     window.addEventListener('beforeunload', function(e) {
       var confirmationMessage = 'Вы уверены, что хотите покинуть страницу? Весь контент будет потерян.';
       e.returnValue = confirmationMessage;
       return confirmationMessage;
     });
   }
 });
 