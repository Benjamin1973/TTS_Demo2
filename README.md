This is a basic demo project showing how to use Microsoft Cognitive Services Speech in Blazor.

Note the following:
1. rendermode = InteractiveServer
2. This project uses the ***javascript*** version of the SDK, not the .Net one, which can only generate audio on Desktop Apps.
3. The following link is added to the body of App.razor:
   
   ```<script src="https://aka.ms/csspeech/jsbrowserpackageraw"></script>```

   This is what creates ```window.SpeechSDK``` which is used in the JS module

Also note: you should always load Javascript modules after rendering.
