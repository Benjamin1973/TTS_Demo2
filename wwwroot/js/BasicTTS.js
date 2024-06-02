export function basicTTS(key, region, ssmlSpeech, audioElement) {
    // Setting up the SDK, which is initted in the _Hosts.cshtml page with     
    // <script src="https://aka.ms/csspeech/jsbrowserpackageraw"></script>
    const sdk = window.SpeechSDK;
    const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
    speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Audio48Khz96KBitRateMonoMp3;
    const speechSynthesizer = new sdk.SpeechSynthesizer(speechConfig, null);

    speechSynthesizer.speakSsmlAsync(
        ssmlSpeech,
        result => {
            speechSynthesizer.close();
            var arrayBuffer = result.audioData;

            // Create a Blob from the ArrayBuffer
            const blob = new Blob([arrayBuffer], { type: 'audio/mp3' });

            // Create a URL for the Blob
            const url = URL.createObjectURL(blob);
            audioElement.src = url;
            audioElement.play();
        },
        error => {
            console.log(error);
            speechSynthesizer.close();
        });
}