function create_trial(stimulus, is_repeat, correct_response){
  const trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p class = "rat-stim">${stimulus}</p>`,
    choices: possible_response_keys,
    stimulus_duration: stim_duration,
    trial_duration: trial_duration, // Adjust as needed
    response_ends_trial: true,
    on_finish: function(data) {
      // Record accuracy and congruency
      data.accuracy = data.response === correct_response ? 1 : 0;

      data.is_repeat = is_repeat;
    }
  };

  return trial;
}

function create_repeat_list(n_trials, possible_stimuli, percentage_repeat) {
  let stimulus = new Array(n_trials).fill('');
  let is_repeat = new Array(n_trials).fill(null);
  let correct_response = new Array(n_trials);

  if (possible_stimuli.length > 2){
    console.error("Only two stimuli should alternate");
  }

  for (let itrial = 0; itrial < n_trials; itrial++){   
    if (itrial === 0){
      stimulus[itrial] = possible_stimuli[0];
      is_repeat[itrial] = 0;
    } else {
      is_repeat[itrial] = Math.random() < percentage_repeat ? 1 : 0;
    }
    stimulus[itrial] = is_repeat[itrial] === 1 ? stimulus[itrial - 1] : possible_stimuli.find(item => item !== stimulus[itrial - 1]);
    correct_response[itrial] = is_repeat[itrial] ? ' ' : stimulus[itrial].toLowerCase();
  }

  return {
    stimulus: stimulus,
    is_repeat: is_repeat,
    correct_response: correct_response,
  };
}

function create_block(timeline, is_practice, n_trials, possible_stimuli, percentage_repeat) {
  const block_stimlist = create_repeat_list(n_trials, possible_stimuli, percentage_repeat);

  for (let itrial = 0; itrial < n_trials; itrial++){
    const trial = create_trial(block_stimlist.stimulus[itrial], block_stimlist.is_repeat[itrial], block_stimlist.correct_response[itrial]);
    timeline.push(trial);

    if (is_practice) {
      const feedback = create_feedback();
      timeline.push(feedback);
    }

    const fixation_cross = create_fixation_cross(rsi_duration);
    timeline.push(fixation_cross);
  }

  // Self paced break here
  const forced_break = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div class = "normal-text">Kurze Pause. Drücke eine beliebige Taste, um fortzufahren</div>',
    choices: "NO_KEYS", // No keys allowed during fixation
    trial_duration: 2000,
    response_ends_trial: false,
    data: "",
  };

  const block_break = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div class = "normal-text">Kurze Pause. Drücke eine beliebige Taste, um fortzufahren</div>',
    choices: "ALL_KEYS", // No keys allowed during fixation
    response_ends_trial: true,
    data: "",
  };

  timeline.push(forced_break, block_break);

  return timeline
}

function create_fixation_cross(fixation_cross_dur){
  const fixation_cross = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div class = "normal-text">+</div>',
    choices: "NO_KEYS", // No keys allowed during fixation
    trial_duration: fixation_cross_dur, // Duration of fixation in milliseconds
    response_ends_trial: false,
    data: "",
  };

  return fixation_cross;
}

function create_feedback(){
  // Update this
    let feedback = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        const last_trial_correct = jsPsych.data.get().last(1).values()[0].accuracy;
        const last_response = jsPsych.data.get().last(1).values()[0].response;
        const last_is_repeat = jsPsych.data.get().last(1).values()[0].is_repeat;
        if (last_trial_correct) {
          return '<p class = "normal-text"><span style = "color: green">Richtig</span></p>'; 
        } else if (last_is_repeat & (last_response !== " ")){
          return '<p class = "normal-text"><span style = "color: red">Falsch. Bei Wiederholungen die Leertaste drücken</span></p>'; 
        } else {
          return '<p class = "normal-text"><span style = "color: red">Falsch</span></p>'; 
        }
      },
      choices: "NO_KEYS", // No keys allowed during fixation
      trial_duration: feedback_dur, // Duration of fixation in milliseconds
      response_ends_trial: false,
      data: "",
  };

  return feedback;
}

