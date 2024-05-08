let jsPsych = initJsPsych(
    /**
    {
        on_finish: function() {
            jsPsych.data.get().localSave('csv', experiment_file);
        },
    } 
    */  
);

const experiment_name = "Repetition Alert Task";
const experiment_short_name = "rep_alert_task";
let init_date = new Date();
    jsPsych.data.addProperties({
        date: ("0" + init_date.getDate()).slice(-2) + '_' + ("0" + (init_date.getMonth() + 1)).slice(-2) + '_' + init_date.getFullYear(),
        time: init_date.getHours() + "_" + init_date.getMinutes() + "_" + init_date.getSeconds(),
    });

let init_time = init_date.getFullYear() + "_" + (init_date.getMonth() + 1) + "_" + init_date.getDate() + "_" + init_date.getHours() + "_" + init_date.getMinutes() + "_" + init_date.getSeconds()
let timeline = [];

const n_trials = 1;
const n_blocks = 2;
const n_practice = 1;
const n_alternating_start = 5;
const n_repeat_trials = 1;
const practice_repeat_percentage = 0;
const possible_response_keys = ["d", "l", " "];
const possible_stimuli = ["D", "L"]

const percentage_repeat = 0.25;
const trial_duration = 1000;
const stim_duration = 200;
const feedback_dur = 400;
const fixation_dur = 200;
const rsi_duration = 500;

// Remove later
var subject_number = jsPsych.randomization.randomID(6);

const possible_conditions = ["approach", "avoidance"];
const current_condition = jsPsych.randomization.sampleWithoutReplacement(possible_conditions, 1)[0];

const condition_instruction = current_condition == "avoidance" ? `<p>Denke dran so wenig Fehler wie möglich zu machen</p>` : `<p>Denke dran so viele richtige Durchgänge wie möglich zu schaffen</p>`;

// record the condition assignment in the jsPsych data
// this adds a property called 'subject' and a property called 'condition' to every trial
const experiment_file = "./data/" + experiment_short_name + "_" + subject_number + "_" + init_time + ".csv"
