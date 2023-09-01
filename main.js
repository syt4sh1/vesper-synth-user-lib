// Import necessary modules and dependencies
import { Synth, Filter, Envelope, LFO } from 'vesper-synth-user-lib';

// Create a new instance of the Synth
const synth = new Synth();

// Initialize the synth parameters
synth.set({
  oscillatorType: 'sine',
  filterType: 'lowpass',
  filterFrequency: 500,
  envelopeAttack: 0.1,
  envelopeDecay: 0.2,
  envelopeSustain: 0.5,
  envelopeRelease: 0.2,
});

// Create an AudioContext for the synth
const audioContext = new AudioContext();

// Connect the synth to the audio context's destination
synth.connect(audioContext.destination);

// Create event listeners or user interactions to control the synth
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');
const frequencyInput = document.getElementById('frequency-input');

playButton.addEventListener('click', () => {
  const frequency = parseFloat(frequencyInput.value);
  synth.triggerNoteOn(frequency);
});

stopButton.addEventListener('click', () => {
  synth.triggerNoteOff();
});

// Additional advanced features (expand as needed)
const filter = new Filter();
filter.setType('lowpass');
filter.setFrequency(1000);

const envelope = new Envelope();
envelope.setAttack(0.2);
envelope.setDecay(0.3);
envelope.setSustain(0.6);
envelope.setRelease(0.2);

const lfo = new LFO();
lfo.setType('sine');
lfo.setFrequency(2); // Adjust the frequency as needed
lfo.connect(filter.frequency);

// You can create more advanced features like modulation routing, effects, etc.

// Start and stop the audio context (consider user interactions)
function startAudioContext() {
  if (audioContext.state === 'suspended') {
    audioContext.resume().then(() => {
      console.log('Audio context started.');
    });
  }
}

// Handle any cleanup or additional functionality as needed

// Remember to handle errors gracefully and provide user feedback

// You may also want to encapsulate your code in functions or classes for better organization.

// Start the audio context on page load (consider a user gesture)
document.addEventListener('DOMContentLoaded', () => {
  startAudioContext();
});
