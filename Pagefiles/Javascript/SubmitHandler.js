 const sendURL = 'https://script.google.com/macros/s/AKfycbyhferKoM3lawXmfUHRrnjQC1vEexIbDdcYgLl-xY0tH2cjdKBjLNFExw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(sendURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
