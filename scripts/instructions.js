var subject_number_entry = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: '<div class = "normal-text">Was ist deine Versuchspersonennummer</div>', name: "vpnummer"},
    ],
    button_label: "Weiter",
    data: {type: 'survey'},
    on_finish: function(data){
        subject_number = data.response.vpnummer;
        jsPsych.data.addProperties({
            subject: subject_number,
            condition: current_condition
          });
          
    }
}
var welcome_screen = {
    type: jsPsychInstructions,
    pages: [
     '<div class = "normal-text">Liebe Teilnehmerin, lieber Teilnehmer,</br>Vielen Dank, dass du unsere Studie unterstützt!</br>Insgesamt wird die Studie ca. (?) Minuten dauern. Bitte lies dir die Instruktionen genau durch.</br>Achte bitte darauf, die Studie auf einem Computer mit Tastatur durchzuführen.</div>',
     '<div class = "normal-text" style="text-align:justify">Vielen Dank für dein Interesse an diesem Online-Experiment zur Untersuchung von Unterschieden bei Reaktionszeiten. Bevor du dich dazu entscheidest teilzunehmen, möchten wir dich über den Ablauf und das Ziel der Untersuchung informieren. Lies dir dazu bitte die nachfolgenden Informationen sorgfältig durch.</div>',
     '<div class = "normal-text" style="text-align:justify"><p>Wir sind Bachelor-Studierende an der Universität Heidelberg und führen die Studie im Rahmen eines Empra (Empirisches Praktikum) Seminares in der Abteilung der Differentiellen Psychologie durch.</p><p>Die Studie wird insgesamt ca. (?) Minuten dauern und kann online am Computer mit funktionierender Internetverbindung durchgeführt werden. Du wirst nach der Angabe einiger demographischer Daten eine Reaktionszeitaufgabe bearbeiten. Im Anschluss wirst du noch einige weitere Fragen beantworten. Um teilnehmen zu können, musst du zunächst eine Einverständniserklärung abgeben und damit bestätigen, dass du ausreichend Informationen über die geplanten Untersuchungen und die darin erhobenen Daten erhalten und diese verstanden hast.</p><p>Mit deiner Teilnahme unterstützt du die wissenschaftliche Forschung zum Verständnis der Unterschiede bei Reaktionszeitaufgaben. Die Forschungsergebnisse werden als Teil unseres Seminares ausgewertet.</p><p>Es werden keine Nachteile durch die Teilnahme an der Studie erwartet. Solltest du dich unwohl fühlen, kannst du jederzeit durch das Schließen des Browsers aus der Studie aussteigen.</p><p>Teilnahmeberechtigt sind Personen, die über 18 Jahre alt sind und über ausreichende Kenntnisse der deutschen Sprache verfügen.</br>Die Studienteilnahme ist freiwillig. Du wirst in die Studie also nur dann einbezogen, wenn du dazu deine Einwilligung erklärst. Du kannst deine Studienteilnahme jederzeit widerrufen, indem du das Browserfenster schließt. Im Falle eines Rücktritts entstehen für dich keinerlei Kosten oder anderweitige Nachteile.</p><p>Deine Daten werden anonymisiert gespeichert. Es wird uns und Dritten zu keinem Zeitpunkt möglich sein, die Daten deiner Person zuzuordnen. Eine Veröffentlichung der Daten erfolgt in den Forschungsberichten ausschließlich in anonymisierter Form.</p><p>Als Studienteilnehmende kannst du jederzeit Fragen über alle Angelegenheiten im Zusammenhang mit der Studie stellen. Bei Rückfragen stehen wir dir unter der E-Mail-Adresse: maja.krause01@stud.uni-heidelberg.de gerne zur Verfügung. Für deine Bereitschaft und deine Unterstützung bedanken wir uns im Voraus.</p></div>',
    ],
    show_clickable_nav: true, 
    data: {type: 'instructions'},
    button_label_next: "Weiter",
    button_label_previous: "Zurück",
}

var consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class = "normal-text" style="text-align:justify"><b>Einverständniserklärung</b></br>Ich habe die Studieninformationen erhalten, gelesen und verstanden. Ich hatte ausreichend Zeit, mich für oder gegen die Teilnahme an dieser Studie zu entscheiden. Ich nehme freiwillig an dieser Studie teil. Ich habe verstanden, dass es mir jederzeit und ohne Angabe von Gründen freisteht, von dieser Studie zurückzutreten. Ich bin damit einverstanden, dass die im Rahmen der Studie erhobenen Daten in der Weise verarbeitet werden, wie es in den Studieninformationen beschrieben wurde. Ich stimme zu, dass die im Rahmen dieser Studie erhobenen Daten für wissenschaftliche Zwecke und im Rahmen der wissenschaftlichen Ausbildung verwendet werden.</br>Ich gebe mein Einverständnis zur Teilnahme an dieser Studie.</div>',
    choices: ['Ja', 'Nein'],
    data: {type: 'instructions'},
    on_finish: function(data){
        if(data.response == 1){
          jsPsych.endExperiment("Das Experiment wurde erfolgreich abgebrochen");
        }
      }
}

const survey_trial = {
    type: jsPsychSurvey,
    pages: [
        [
        {
            type: 'text',
            prompt: "Alter",
            name: 'age',
            textbox_columns: 5,
            required: true,
        },
        {
            type: 'multi-choice',
            prompt: "Geschlecht",
            options: ['weiblich', 'männlich', 'divers', 'sonstige'],
            name: 'gender',
            required: true,
        },
        {
            type: 'text',
            prompt: "Tätigkeit",
            name: 'occupation',
            required: true,
        },
        {
            type: 'text',
            prompt: "Studienfach (bei Studierenden)",
            name: 'subject',
            required: false,
        },
        ]
    ],
    title: 'Demographische Daten',
    button_label_next: 'Weiter',
    button_label_back: 'Zurück',
    button_label_finish: 'Weiter',
    show_question_numbers: 'onPage',
    data: {type: 'survey'},
};


var instructions = {
    type: jsPsychInstructions,
    pages: function(){
        if(current_condition == "approach"){
            return [
                '<div class = "normal-text"><p>Du wirst gleich eine Reaktionszeitaufgabe bearbeiten. Manche Teilnehmende sind darin deutlich besser als andere.</p><p>Heute hast du die Möglichkeit zu beweisen, dass du zu den Besten gehörst.</p><p>Schaffe so viele richtige Durchgänge wie möglich</p></div>',
                '<div class = "normal-text">Drücke "D", wenn ein "D" präsentiert wird. </br> Drücke "L", wenn ein "L" präsentiert wird. </br> "D" und "L" wechseln sich meistens ab. Wenn sie sich nicht abwechseln, also z.B. ein "D" nach einem "D" präsentiert wird, drücke die Leertaste. </br> Im Folgenden wird kurz die Präsentation von "D" und "L" geübt.</div>',
            ]
        } else {
            return [
                '<div class = "normal-text"><p>Du wirst gleich eine Reaktionszeitaufgabe bearbeiten. Manche Teilnehmende sind darin deutlich schlechter als andere.</p><p>Heute hast du die Möglichkeit zu beweisen, dass du nicht zu den Schlechtesten gehörst.</p><p>Mache so wenig Fehler wie möglich</p></div>',
                '<div class = "normal-text">Drücke "D", wenn ein "D" präsentiert wird. </br> Drücke "L", wenn ein "L" präsentiert wird. </br> "D" und "L" wechseln sich meistens ab. Wenn sie sich nicht abwechseln, also z.B. ein "D" nach einem "D" präsentiert wird, drücke die Leertaste. </br> Im Folgenden wird kurz die Präsentation von "D" und "L" geübt.</div>',
            ]
        }
    },
    show_clickable_nav: true, 
    data: {type: 'instructions'},
    button_label_next: "Weiter",
    button_label_previous: "Zurück",
}

const nogo_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div class = "normal-text">Drücke weiterhin "D", wenn ein "D" präsentiert wird </br> Drücke "L", wenn ein "L" präsentiert wird. </br> Jetzt wird es auch Durchgänge geben, in denen sich "D" und "L" nicht abwechseln. <br> Wenn z.B. ein "D" nach einem "D" präsentiert wird, drücke die Leertaste.</br>${condition_instruction}</div>`,
    choices: ['Weiter'],
    data: {type: 'instructions'},
}

const experiment_begins = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div class = "normal-text">Die Übungsdurchgänge sind jetzt beendet. </br> Drücke weiterhin "D", wenn ein "D" präsentiert wird. </br> Drücke "L", wenn ein "L" präsentiert wird. </br> Aber drücke die Leertaste, wenn sich "D" und "L" nicht abwechseln.</br>${condition_instruction}</div>`,
    choices: ['Weiter'],
    data: {type: 'instructions'},
}


var slider_labels = [
    '1<br>stimme überhaupt nicht zu',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7<br>stimme voll und ganz zu'
]

var slider_survey = {
    type: jsPsychSurveyLikert,
    questions: [
        {prompt: '<div class = "normal-text">Mein Ziel in der vorausgegangenen Reaktionszeitaufgabe war es, in der Aufgabe möglichst gut abzuschneiden.</div>', name: "gut-abschneiden", labels: slider_labels},
        {prompt: '<div class = "normal-text">Das Bearbeiten der Reaktionszeitaufgabe war für mich eine positive Herausforderung.</div>', name: "pos-herausforderung", labels: slider_labels},
        {prompt: '<div class = "normal-text">Mein Ziel in der vorausgegangenen Reaktionszeitaufgabe war es, die Aufgabe möglichst fehlerfrei zu bearbeiten.</div>', name: "fehler-vermeiden", labels: slider_labels},
        {prompt: '<div class = "normal-text">Das Bearbeiten der Reaktionszeitaufgabe war für mich eine stressige und herausfordernde Situation.</div>', name: "neg-stress", labels: slider_labels}
    ],
    randomize_question_order: false,
    data: {type: 'survey'}
  }

var open_question = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: '<div class = "normal-text">Was war dein Ziel in der Studie?</div>', name: "ziel"},
    ],
    button_label: "Weiter",
    data: {type: 'survey'}
}
