// Constant definitions
const TOPICS = [
    'Radio-frequency identification',
    'Real-time location',
    'Wireless sensing',
    'IoT interoperability'
];
const TOPIC_UPDATE_MILLISECONDS = 2400;


// DOM elements
let topic = document.querySelector('#topic');


// Other variables
let topicIndex = 0;


// Update the topic
function updateTopic() {
  topicIndex = ++topicIndex % TOPICS.length;
  topic.textContent = TOPICS[topicIndex];
}

setInterval(updateTopic, TOPIC_UPDATE_MILLISECONDS);