function showModal (modalID) {

  const modal = document.getElementById(modalID)

  if (modal) {
   
    modal.classList.add('o-exit-modal--visible')
    
    modal.addEventListener('click', (e) => {

      const targetId = e.target.id

      if (targetId == 'button-close-modal' || 
          targetId == 'button-thanks' || 
          targetId == 'button-answer' || 
          targetId == modalID) {

        modal.classList.remove('o-exit-modal--visible')

      } 
      
      if (targetId == 'button-answer') {
        window.scrollTo(0, 0)
      }

    })

  }

}

function onMouseOut (event) {
  // If the mouse is near the top of the window, show the popup
  if (event.clientY < 50) {
    // Remove this event listener
    // document.removeEventListener("mouseout", onMouseOut);

    // Show the popup
    // showModal('exit-intent-modal')
    $('#exit-intent-modal').modal('show')
  }
}

document.addEventListener("mouseout", onMouseOut);