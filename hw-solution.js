// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

window.onload = function(){
  var counts = [];

  var incrementCounter = function(i){
    counts[i]++;
  };

  var addNewCounter = function(){
    // Change underlying data
    counts.push(0);
    // // Create new element
    // var newCounter = document.createElement('div');
    var newCounter = $("<div></div>");
    // newCounter.innerHTML =  "<h3>Count: <span>0</span></h3>";
    // newCounter.innerHTML += "<button> +1 </button>";
    // newCounter.innerHTML += "<button> Delete Counter </button>";
    newCounter.html(
      '<h3>Count: <span>0</span></h3>' +
      '<button> +1 </button>' +
      '<button> Delete Counter </button>'
    );
    // // Add properties
    // newCounter.className += ' counter';
    newCounter.addClass('counter');
    // newCounter.dataset.index = counts.length - 1;
    newCounter.data('index', counts.length - 1);

    //// Alternatively, you can do all of the above in a single step.
    // var newCounter = $(`<div class='counter' data-index=${counts.length - 1}>
    //   <h3>Count: <span>0</span></h3>
    //   <button> +1 </button>
    //   <button> Delete Counter </button>
    // </div>`);

    // Add event handlers
    // newCounter.children[1].onclick = function(){
    newCounter.children('button').eq(0).on('click', function(){
      var i = Number(newCounter.data('index'));
      // Update underlying data
      incrementCounter(i);
      // Change UI
      // newCounter.children[0].children[0].innerHTML = counts[i];
      newCounter.find('span').html(counts[i]);
    });
    // newCounter.children[2].onclick = function(){
    newCounter.children('button').eq(1).on('click', function(){
      // newCounter.parentNode.removeChild(newCounter);
      $(newCounter, '#counter-list').remove();
    });
    // Change UI by inserting new counter into page
    // document.querySelector('#counter-list').appendChild(newCounter);
    $('#counter-list').append(newCounter);
  };

  // document.querySelector('#new-counter').onclick = addNewCounter;
  $('#new-counter').on('click', addNewCounter);
};
