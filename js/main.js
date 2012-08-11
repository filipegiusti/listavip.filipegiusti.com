$(function () {
  var $names_input = $('#names-input');
  var $names_output = $('#names-output');

  var updateOutput = function () {
    // Separate some special characters
    var separate_names = $names_input.val().split(/[.,:;\/\-=+\n]/);
    // Remove empty names
    separate_names = separate_names.filter(function (name) { return name.length > 0 });
    // Remove whitespace and lowercase all names 
    var clean_names = $.map(separate_names, function (name) { return name.trim().toLowerCase() });
    // Uppercase all names
    clean_names = $.map(clean_names, function (name) {
      var name_parts = name.split(" ");
      return $.map(name_parts, function (name_part) { return name_part.slice(0,1).toUpperCase() + name_part.slice(1) }).join(" ") ;
    });
    sorted_names = clean_names.sort();

    $names_output.val(sorted_names.join("\n"));
  };

  $names_input.bind('paste change keypress cut input', updateOutput);
});

