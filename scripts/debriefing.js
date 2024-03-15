// here debriefing
var sendMessage = function(msg) {
  // Make sure you are sending a string, and to stringify JSON
  window.parent.postMessage(msg, "*");
};

const debriefing = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Vielen Dank für deine Teilnahme!',
    data: {type: 'instructions'},
    on_start: function() {
      jsPsych.data.get().localSave('csv', experiment_file);
      sendMessage("Experiment done - SL");
        }
  }