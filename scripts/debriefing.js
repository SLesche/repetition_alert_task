// here debriefing
const debriefing = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Debriefing here',
    data: {type: 'instructions'},
    on_start: function() {
      jsPsych.data.get().localSave('csv', experiment_file);
        }
  }