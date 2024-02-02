const welcome_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Herzlich Willkommen zum Experiment',
    choices: ['Weiter'],
    data: {type: 'instructions'},
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
    /*
        {
            type: 'multi-choice',
            prompt: "Tätigkeit",
            options: ['Schüler*in'],
            name: 'occupation',
            required: true,
        },
    */
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
    data: {type: 'demographics'},
};

const consent_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Hier Consent',
    choices: ['Weiter'],
    data: {type: 'instructions'},
}

const instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Drücke "d", wenn ein "D" präsentiert wird und "l", wenn ein "L" präsentiert wird. <br/> "D" und "L" wechseln sich meistens ab. Wenn sie sich nicht abwechseln, also z.B. ein "D" nach einem "D" präsentiert wird, drücke die Leertaste.',
    choices: ['Weiter'],
    data: {type: 'instructions'},
}
