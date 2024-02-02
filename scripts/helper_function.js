function get_random_stimulus(){
    const stim = Math.random() > 0.5 ? possible_stimuli[0] : possible_stimuli[1];
    return `<p class = "rat-stim">${stim}</p>`;
}

function extract_stim_from_html(string){
    var match = /<p class = "rat-stim">(.+)<\/p>/i.exec(string);
    return match ? match[1] : null;
}

function get_random_repeat(){
    return Math.random() > 0.5 ? 0 : 1;
}

function get_correct(stim, is_repeat){
    if (is_repeat){
        return correct = " ";
    } else {
        const central_stim = extract_stim_from_html(stim);
        return correct = central_stim.toLowerCase();
    }
}