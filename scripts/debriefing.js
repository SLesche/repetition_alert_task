// here debriefing
var sendMessage = function(msg) {
  // Make sure you are sending a string, and to stringify JSON
  window.parent.postMessage(msg, "*");
};

const debriefing = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div class="normal-text">Vielen Dank für Ihre Teilnahme!</br>
    Wir möchten uns ganz herzlich für Ihre Mithilfe bedanken.</br>
    Im Folgenden werden wir Ihnen noch einige Hintergründe zu unserer Studie erläutern. Sie haben zu Beginn der Aufgabe eine Instruktion erhalten. Diese lautete entweder so viele Durchgänge wie möglich richtig zu machen oder so wenige Fehler wie möglich zu machen. Wir untersuchen, ob Unterschiede abhängig von der Instruktion auftreten. Dabei vergleichen wir jeweils die Reaktionszeiten nach einem Fehler. Wenn Sie Interesse an den Ergebnissen haben, schreiben Sie gerne eine Mail an:</br>
    maja.krause01@stud.uni-heidelberg.de</br></div>`,
    choices: ['Weiter'],
    data: {type: 'instructions'},
    on_finish: function() {
      jsPsych.data.get().filter([{type: 'trial'}, {type: 'survey'}]).localSave('csv', experiment_file);
      console.log("Message sent");

      // Send the data, but only with type "trial" or type "survey" 
      sendMessage(JSON.stringify(jsPsych.data.get().filter([{type: 'trial'}, {type: 'survey'}])));
        }
  }