// starting and ending time of the scheduler
const dayStart = 6
const dayEnd = 18

// empty array into which we will write new instances of stored data.
let savedData = [];

// a loop for the 24 hours in a day that then pushed blank strings into the array fields that will be filled by user inputs
for (let i = 0; i < 25; i++){
    savedData.push('');
};

let storedData = JSON.parse(localStorage.getItem('tasks'));

// Checking for an existing instance of stored data. If it exists, it is written to savedData which is an empty array so that it can be displayed to the page.
if (storedData) {
    savedData = storedData;
};

// Now come all page elements

for (let i = dayStart; i < dayEnd; i++){

    let row = $('<div>').addClass('row time-block').attr('id', i);

    let currentDate = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATE_HUGE);

    $('#currentDay').text(currentDate);

    let currentHour = luxon.DateTime.fromObject({hour: i}).toLocaleString(luxon.DateTime.TIME_SIMPLE);

    let hours = $('<div>').addClass('hour col-1').text('currentHour');

    let input = $('<textarea>').addClass('description col-10 past').attr('id', 'input').attr('data-id', i).val(savedData[i]);

    let saveBtn = $('<button>').addClass('btn saveBtn col-1').html('<i class="fas fa-save"></i>').attr('data-id', i);

    // this will append our lets from above inside the container class
    row.append(hours, input, saveBtn);
    $('.container').append(row)
}

// now the colors for present or future

const curHourColor = () => {
    let currenthour = luxon.DateTime.now().hour;

    let curTextEl = $('#' + currenthour).children('textarea');
    curTextEl.removeClass('past').addClass('present');

    for (let i = currenthour + 1; i < dayEnd; i++) {
        let row = $(`#${i}`);
        row.children('textarea').removeClass('past').addClass('future');
    }
}


// when the save button is clicked on the app, it saves the related value to local storage
const saveBtnClick = saveInput => {
    let saveTask = $(`textarea[data-id='${saveInput}']`).val();

    savedData[saveInput] = saveTask;
    localStorage.setItem('tasks', JSON.stringify(savedData));
}

// now we will make functions for if the sava button is clicked. If it's clicked, the new data is saved, if it is not, the changes are not saved and the app is reverted to the previous save state, if any, or the vanilla build of the app.

$('textarea').on('blur', function(event){
    let textAreaID = $(this).attr('data-id');

    if(event.relatedTarget){
        if(event.relatedTarget.dataset.id === $(`button[data-dit="${textAreaID}"]`).attr('data-id')){
            let savedText = $('#storage-updated')

            saveBtnClick(textAreaID);

            savedText.html('Task saved to local storage ' + `<i class="fas fa-check-double"></i>`).addClass('text-center').show();
            setTimeout(() => {
                savedText.hide()
            }, 2000);
        } else {
            $(this).val(savedData[textAreaID]);
        }
    } else {
        $(this).val(savedData[textAreaID]);
    }
});

curHourColor();


