/*
In Western music, a major chord (major third) starts at a root note and adds the note 4 semitones and 7 semitones above it.
A minor chord (minor third) starts at a root note and adds the note 3 semitones and 7 semitones above it.
Given a root note root, please return an array of the major chord and the minor chord for that root.
The notes are C, C#, D, D#, E, F, F#, G, G#, A, A#, B –– you are given this as a constant
For a music theory kata from a different point of view (figuring out whether a given set of notes is a major chord or minor chord 
or neither), try this kata from aniametz.
*/

// My solution

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function chords(root) {
var majorChord = [];
var minorChord = [];
var i = notes.indexOf(root);
var a = (i + 7);
majorChord.push(notes[i], i > 7 ? notes[i + 4 - 12] : notes[i + 4], i > 4 ? notes[i - 5] : notes[a]);
minorChord.push(notes[i], i > 8 ? notes[i + 3 - 12] : notes[i + 3], i > 4 ? notes[i - 5] : notes[a]);
return [majorChord, minorChord];
}
