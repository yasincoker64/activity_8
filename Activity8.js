var langs = ["ActionScript", "AppleScript", "Asp", "JavaScript","Lisp","Perl","PHP","Python"];
$(document).ready(function() {
    $("#birthday").datepicker();

    $( "#language" ).autocomplete({
        source: langs
        });
  });


