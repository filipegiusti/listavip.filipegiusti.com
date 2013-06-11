(function() {
  var selectAllFriends = function () {
    var elems = document.getElementsByName('checkableitems[]');
    for(el in elems) {
      elems[el].click();
    }
  }

  selectAllFriends();
})();

