// Constant definitions
const TOPICS = [
    'Radio-frequency identification',
    'Real-time location',
    'Wireless sensing',
    'IoT interoperability'
];
const OL_ELEMENTS = [ '#OL1', '#OL2', '#OL3' ];
const TOPIC_UPDATE_MILLISECONDS = 2400;
const OL_UPDATE_MILLISECONDS = 800;


// DOM elements
let topic = document.querySelector('#topic');


// Other variables
let topicIndex = 0;
let olIndex = 0;


// Update the topic
function updateTopic() {
  topicIndex = ++topicIndex % TOPICS.length;
  topic.textContent = TOPICS[topicIndex];
}


// Update the one-liner elements
function updateOL() {
  let currentTerm = document.querySelector(OL_ELEMENTS[olIndex]);
  let previousTerm = document.querySelector(
          OL_ELEMENTS[(olIndex - 1 + OL_ELEMENTS.length) % OL_ELEMENTS.length]);

  currentTerm.setAttribute('class', 'text-body-emphasis');
  previousTerm.setAttribute('class', 'text-body-secondary');

  olIndex = (olIndex + 1) % OL_ELEMENTS.length;
  setTimeout(updateOL, OL_UPDATE_MILLISECONDS);
}


// Begin periodic updates
setInterval(updateTopic, TOPIC_UPDATE_MILLISECONDS);
updateOL();