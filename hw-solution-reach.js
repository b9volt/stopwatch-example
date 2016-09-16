// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var App = {
  counts: [],
  incrementCounter: function(i){
    this.counts[i]++;
  },
  getCountValue: function(i){
    return this.counts[i];
  },
  addNewCount: function(){
    this.counts.push(0);
  },
  lastIndex : function(){
    return this.counts.length - 1;
  }
};

var UI = {
  newCounterHTML: function(i){
    return `<div class='counter' data-index=${i}>
      <h3>Count: <span>0</span></h3>
      <button> +1 </button>
      <button> Delete Counter </button>
    </div>`
  },
  addNewCounter: function(){
    // Change underlying data
    App.addNewCount();
    // Create new element
    var newCounter = $(UI.newCounterHTML(App.lastIndex()));
    // Add event handlers
    newCounter.children('button').eq(0).on('click', function(){
      var i = Number(newCounter.data('index'));
      // Update underlying data
      App.incrementCounter(i);
      // Change UI
      newCounter.find('span').html(App.getCountValue(i));
    });
    newCounter.children('button').eq(1).on('click', function(){
      $(newCounter, '#counter-list').remove();
    });
    // Change UI by inserting new counter into page
    $('#counter-list').append(newCounter);
  }
};

window.onload = function(){
  $('#new-counter').on('click', UI.addNewCounter);
};
