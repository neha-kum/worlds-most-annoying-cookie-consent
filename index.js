const modal=document.getElementById('modal')
const modalCloseBtn=document.getElementById('modal-close-btn')
const modalChoiceBtns=document.getElementById('modal-choice-btns')
const consentForm=document.getElementById('consent-form')
const modalText=document.getElementById('modal-text')
const declineBtn=document.getElementById('decline-btn')

setTimeout(function(){
  modal.style.display = 'inline'
  console.log('running')
}, 500)

modalCloseBtn.addEventListener('click', function(){
  modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
  modalChoiceBtns.classList.toggle('reverse')
})

consentForm.addEventListener('submit', function(event){
event.preventDefault()

  const consentFormData = new FormData(consentForm)
  const fullName = consentFormData.get('fullName')
  console.log(consentFormData)

modalText.innerHTML = `
<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
      <p id="upload-text">
      Uploading your data to the dark web....
      </p>
  </div>`
  
  setTimeout(function(){
    document.getElementById('upload-text').innerText= ` Making the sale..... `
  }, 3000)
  
  setTimeout(function(){
    document.getElementById('modal-inner').innerHTML=`
    <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p> We just sold the rights to your eternal soul. </p>
    <div class="idiot-gif">
    <img src="https://c.tenor.com/PwkHNWcHm_IAAAAC/hehe-pirate.giff">
    </div>
    `
  }, 6000)
 
  modalCloseBtn.disabled = false
  
})





