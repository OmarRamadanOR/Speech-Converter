const textareaEl = document.getElementById('textarea');
const btn = document.querySelector(".btn");

let isSpeaking = true;

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textareaEl.value;

    if (!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synth.speak(utternace);
    }
    if (text.length > 50) {
        if (synth.speaking && isSpeaking) {
            btn.innerText = 'Pause';
            synth.pause();
            isSpeaking = false;
        } else {
            btn.innerText = 'Resume';
            synth.resume();
            isSpeaking = true;
        }
    }
    // else {
    //     isSpeaking = false;
    //     btn.innerText = 'Speaking';
    // }

    // setInterval(() => {
    //     if (!synth.speaking && !isSpeaking) {
    //         isSpeaking = true;
    //         btn.innerText = 'Covert To Speech';
    //     }
    // })
}

btn.addEventListener('click', textToSpeech);