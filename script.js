function submitForm() {
    var İSİMInput = document.querySelector('.app-form-control[placeholder="İSİM"]');
    var emailInput = document.querySelector('.app-form-control[placeholder="EMAIL"]');
    var contactInput = document.querySelector('.app-form-control[placeholder="İLETİŞİM NUMARASI"]');
    var messageInput = document.querySelector('.app-form-control[placeholder="YAZMAK İSTEDİKLERİNİZ"]');
    var statusMessage = document.createElement('div');
  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (İSİMInput.value === '' || emailInput.value === '' || contactInput.value === '' || messageInput.value === '') {
      statusMessage.textContent = 'Lütfen tüm alanları doldurunuz.';
      statusMessage.style.color = 'red';
      statusMessage.classList.add('animate-shake');
  
      setTimeout(function() {
        statusMessage.textContent = '';
        statusMessage.classList.remove('animate-shake');
      }, 3000);
    } else if (!emailPattern.test(emailInput.value)) {
      statusMessage.textContent = 'Lütfen geçerli bir e-posta adresi giriniz.';
      statusMessage.style.color = 'red';
      statusMessage.classList.add('animate-shake');
  
      setTimeout(function() {
        statusMessage.textContent = '';
        statusMessage.classList.remove('animate-shake');
      }, 3000);
    } else {
      statusMessage.textContent = 'Form gönderildi!';
      statusMessage.style.color = 'green';
      İSİMInput.value = '';
      emailInput.value = '';
      contactInput.value = '';
      messageInput.value = '';
  
      var formGroup = document.querySelector('.app-form-group.buttons');
      formGroup.appendChild(statusMessage);
  
      setTimeout(function() {
        statusMessage.classList.add('animate-fade');
        setTimeout(function() {
          statusMessage.textContent = '';
          statusMessage.classList.remove('animate-fade');
        }, 1000);
      }, 3000);
    }
  
    var formGroup = document.querySelector('.app-form-group.buttons');
    formGroup.appendChild(statusMessage);
  }