// search button
document.querySelector("#add-time")
    // when clicking the button
    .addEventListener('click', cloneField)

// action execution
function cloneField() {
    // double fields
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) /* Node --> DOM --> objecto html */

    // getting fields
    const fields =  newFieldContainer.querySelectorAll('input')
    // reseting each field
    fields.forEach(function(field) {
        // getting and reseting current field 
        field.value = ""
    }) 

    // place on page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}