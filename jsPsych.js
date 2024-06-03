// Import jsPsych functions
import { initJsPsych } from "jspsych";

// Import jsPsych plugins
import jsPsychPreload from "@jspsych/plugin-preload";
import jsPsychHtmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";
import jsPsychInstructions from "@jspsych/plugin-instructions";
import jsPsychImageKeyboardResponse from "@jspsych/plugin-image-keyboard-response";

/* Initialize jsPsych (Honeycomb handles this for us) */
const jsPsych = initJsPsych({
  // Display the data after the experiment finishes
  on_finish: () => {
    jsPsych.data.displayData();
  },

  // Log trial after each trial finishes (taken form Honeycomb)
  on_trial_finish: (data) => {
    console.log(`Trial ${data.internal_node_id} just finished:`, data);
  },
});

/*
const timeline = [];

// Trial for preloading all of the images
const preload = {
  type: jsPsychPreload,
  images: ["img/blue.png", "img/orange.png"],
};
timeline.push(preload); // Add trial to the timeline


// Trial for displaying a welcome message
const welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "Welcome to the experiment. Press any key to begin.",
};
timeline.push(welcome); // Add trial to the timeline

// Trial for displaying instructions
const instructions = {
  type: jsPsychInstructions,
  pages: [
    `<p>In this experiment, a circle will appear in the center of the screen.</p>`,
    `<p>If the circle is <strong>blue</strong>, press the letter <strong>F</strong> on the keyboard as fast as you can.</p><br />
    <img src='img/blue.png'></img>`,
    `<p>If the circle is <strong>orange</strong>, press the letter <strong>J</strong> as fast as you can.</p><br /><img src='img/orange.png'></img>`,
    `<p>Press any key to begin.</p>`,
  ],
  show_clickable_nav: true,
  post_trial_gap: 2000,
};
timeline.push(instructions); // Add trial to timeline

// Trial for displaying a fixation cross
const fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: "NO_KEYS",
  // We define this parameter as a function!
  trial_duration: () => {
    return jsPsych.randomization.sampleWithoutReplacement(
      [250, 500, 750, 1000, 1250, 1500, 1750, 2000],
      1
    )[0];
  },
  // And add data to the final object
  data: {
    task: "fixation",
  },
};

// Define the main trial of the experiment
const test = {
  type: jsPsychImageKeyboardResponse,
  // stimulus is pulled from the timeline variable (see below)
  stimulus: jsPsych.timelineVariable("stimulus"),
  choices: ["f", "j"],
  data: {
    task: "response",
    correct_response: jsPsych.timelineVariable("correct_response"),
  },
  on_finish: (data) => {
    data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response);
  },
};

// Define the main procedure of the experiment
const test_procedure = {
  // This trial is a nested timeline with custom variables!
  timeline: [fixation, test],
  timeline_variables: [
    { stimulus: "img/blue.png", correct_response: "f" },
    { stimulus: "img/orange.png", correct_response: "j" },
  ],
  // Here we set the timeline to randomly repeat 3 times!
  repetitions: 3,
  randomize_order: true,
};
timeline.push(test_procedure); // Add procedure to timeline

// Define the debrief trial, displays some results
const debrief = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: () => {
    // Hook into jsPsych and retrieve the data!
    const trials = jsPsych.data.get().filter({ task: "response" });
    const correct_trials = trials.filter({ correct: true });
    const accuracy = Math.round((correct_trials.count() / trials.count()) * 100);
    const rt = Math.round(correct_trials.select("rt").mean());

    return `<p>You responded correctly on ${accuracy}% of the trials.</p>
      <p>Your average response time was ${rt}ms.</p>
      <p>Press any key to complete the experiment. Thank you!</p>`;
  },
};
timeline.push(debrief); // Add trial to the timeline

// Start the experiment!
jsPsych.run(timeline);

*/
