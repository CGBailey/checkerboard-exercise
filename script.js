for (var i = 0; i < 3000; i++) {
  var body = document.querySelector('body');
  body.style.marginLeft = '-4px';
  body.style.marginRight = '-4px';
  body.style.marginTop = '-4px';
  body.style.marginBottom = '-4px';

  var redCheck = document.createElement('div');
  redCheck.style.width = '11.1%';
  redCheck.style.float = 'left';
  redCheck.style.paddingBottom = '11.1%';
  redCheck.style.backgroundColor = 'red';

  var blackCheck = document.createElement('div');
  blackCheck.style.width = '11.1%';
  blackCheck.style.float = 'left';
  blackCheck.style.paddingBottom = '11.1%';
  blackCheck.style.backgroundColor = 'black';

  if (i % 2 == 0) {
    body.appendChild(blackCheck);
  } else {
    body.appendChild(redCheck);
  }
};
