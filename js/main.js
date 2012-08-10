$(function () {
  var updateOutput = function () {
    console.log($('#names-input').val());
  };

  $('#names-input').change(updateOutput);
});

