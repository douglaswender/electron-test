var form = document.getElementById('form');
var url = document.getElementById('url');
var btnVerify = document.getElementById('verify');

const notifier = require('electron-notifications');


form.addEventListener('submit', function(e) {

    window.location.href = "https://"+url.value+".previseme.com";

    // impede o envio do form
    e.preventDefault();
});

function notifyMe() {
  const notification = notifier.notify('Calendar', {
    buttons: ['Dismiss', 'Snooze'],
    url: "http://google.com"
  })

  notification.on('buttonClicked', (text, buttonIndex, options) => {
  if (text === 'Snooze') {
    // Snooze!
  } else if(buttonIndex === 1) {
    //open options.url
  }
  notification.close()
})
  }
