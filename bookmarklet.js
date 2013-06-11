(function() {
  var selectAllFriends = function () {
    alert('Pode levar alguns segundos até todos os amigos serem marcados, por favor aguarde.');

    var elems = document.getElementsByName('checkableitems[]');
    for(el in elems) {
      elems[el].click();
    }
  }

  selectAllFriends();
})();

