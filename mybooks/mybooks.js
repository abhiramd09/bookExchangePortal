var books = {};

$(document).ready(function() {
    $.ajax(
        {
            url: "../books.json",
            success: function(result) {
                loadlent(result[1]);
                loadborrowed(result[2]);
                loadunlent(result[3]);
                $('.Card-container').html(books['lent']+books['borrowed']+books['unlent']);
            }
        }
    );
});

function getHTMLString(book) {

   var returnString = `
   <div class="card mb-3" style="max-width: 540px;">
 <div class="row g-0">
   <div class="col-md-4">
     <img src="${book.img}" class="img-fluid rounded-start" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${book.title}</h5>
       <p class="card-text">${book.description}</p>
       <p class="card-text"><small class="text-muted">${book.Author}</small></p>
     </div>
   </div>
 </div>
</div>`;
    
    return returnString;
}

function loadlent(lent) {
    // Populate lent books
    tools['lent'] = lent.map(e => getHTMLString(e)).join('');
}

function loadborrowed(borrowed) {
    // Populate borrowed books
    tools['borrowed'] = borrowed.map(e => getHTMLString(e)).join('');
}

function loadunlent(unlent) {
   // Populate unlent books
   tools['unlent'] = unlent.map(e => getHTMLString(e)).join('');
}



// function to highlight selected tab on batchButton
$("#batchButtons button").on("click", function() {
    var buttons = $('#batchButtons').children();
    for (button of buttons) {
        $(button).removeClass("active-batch");
    }
    $(this).addClass("active-batch");
});

// function to highlight selected tab on "allMembersButtons" Bar
$("#allMembersButtons button").on("click", function() {
    var buttons = $('#allMembersButtons').children();
    for (button of buttons) {
        $(button).removeClass("active-batch");
    }
    $(this).addClass("active-batch");
   
    // if "presentMembers" tab selected, make "all" as selected Tab on "batchButtons"
    if (this == buttons[0])
    {
        let allbuttons = $('#batchButtons').children();
        for (allbutton of allbuttons) {
            $(allbutton).removeClass("active-batch");
        }
        $(allbuttons[0]).addClass("active-batch");
    }

});



function clickAllBooks() {
    $('.Card-container').html(books['lent']+books['borrowed']+books['unlent']);
    $("#batchButtons").css("display", "inline-block");
}

function clickLentBooks() {
    $('.Card-container').html(books['lent']);
}

function clickBorrowedBooks() {
    $('.Card-container').html(books['borrowed']);
}

function clickUnlentBooks() {
   $('.Card-container').html(books['unlent']);
}