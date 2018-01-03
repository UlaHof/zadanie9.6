var list = document.getElementById('list'),
    add = document.getElementById('addElem');

  add.addEventListener('click', function(e) {
    var element = document.createElement('li');
    var liElements = document.getElementsByTagName('li');
    element.innerHTML = 'item ' + liElements.length;
    list.appendChild(element);
  })