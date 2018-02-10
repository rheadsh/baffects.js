This folder `lib/extras/Sublime Text/Baffects` contains a few build scripts for the text editor [Sublime Text](http://www.sublimetext.com/). This means basically that you can run a Baffects.js script (or any other After Effects CC script) directly from Sublime Text. 

1. Copy the folder `Baffects` (`lib/extras/Sublime Text/Baffects`) to your Sublime Text `Packages` directory e.g. OS X: `~/Library/Application Support/Sublime Text 3/Packages/User/Baffects` or `~/Library/Application Support/Sublime Text 2/Packages/Baffects`
2. Now you should have a new Build System: `Tools -> Build System -> AfterEffects`
3. Open a Baffects.js sketch or any other Adobe After Effects script
4. Press `CMD+B` to run the script

Please note: You still need Adobe's ExtendScript Toolkit for the console output. This solution is currently MacOS only.