(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{CHqQ:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),l=a.n(r);t.default=function(){return l.a.createElement("div",null,l.a.createElement("h2",{id:"developer-documentation"},"Developer Documentation"),l.a.createElement("p",null,"To build your own app, create a new python class that inherits from"," ",l.a.createElement("code",null,"App"),". When your class is instantiated by the app loader on the braille device, you will have access to useful instance variables and methods that allow you to design your very own app flow."),l.a.createElement("p",null,"For ease of development, the code is portable between the Raspberry Pi with Arduino PCBs (which the braille device works with) and computer-only testing. Thus you are not required to have a device in order to build your own apps. You can switch to Python terminal interaction by setting the variable ",l.a.createElement("code",null,"main_cell")," to"," ",l.a.createElement("code",null,"comp")," instead of ",l.a.createElement("code",null,"arduino")," in the file"," ",l.a.createElement("code",null,"src/app_states/main_state.txt"),". You can run"," ",l.a.createElement("code",null,"python3 src/main.py")," once you have installed all the packages ",l.a.createElement("span",{className:"font-louis"},"louis")," depends on, which can be found in the ",l.a.createElement("code",null,"requirements.txt")," file. The terminal will prompt you for the number of cells you want to work with, and when relevant, prompt you for the button cell index you want to press."),l.a.createElement("p",null,"Additional tools for development are the ",l.a.createElement("code",null,"output_audio")," and"," ",l.a.createElement("code",null,"input_speech"),"variables also found in ",l.a.createElement("code",null,"src/app_states/main_state.txt"),". You can turn on and turn off audio output by setting"," ",l.a.createElement("code",null,"output_audio")," to ",l.a.createElement("code",null,"true"),"and ",l.a.createElement("code",null,"false"),", respectively. The output will always be printed to the terminal. You can turn on and turn off speech input by setting",l.a.createElement("code",null,"input_speech")," to ",l.a.createElement("code",null,"true")," and ",l.a.createElement("code",null,"false"),", respectively. When turned off, the ‘voice’ commands can be given through the terminal instead."),l.a.createElement("h3",{id:"cell"},l.a.createElement("code",null,"Cell")),l.a.createElement("p",null,"The constructor of ",l.a.createElement("code",null,"App")," is passed an array of"," ",l.a.createElement("code",null,"Cell")," objects, whose dynamic length is automatically determined by the number of physical cells that are attached to the braille device (modularity). ",l.a.createElement("code",null,"Cell")," contains methods that allow you to interact with a specific braille cell without having to deal with the low-level hardware code."),l.a.createElement("div",{className:"my-6 border-t border-b border-gray-300 overflow-hidden relative"},l.a.createElement("table",{className:"w-full text-left"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5"},"Method"),l.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"},"Description"))),l.a.createElement("tbody",{className:"align-baseline"},l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"print_character(char letter)"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Prints a given character onto a braille cell.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"wait_for_button_press()"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Waits and returns ",l.a.createElement("code",null,"True")," when the user presses the button on the cell.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"reset()"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Resets the cell to zero, i.e. flat surface."))))),l.a.createElement("h3",{id:"audio"},l.a.createElement("code",null,"Audio")),l.a.createElement("p",null,"Your app receives an instance of ",l.a.createElement("code",null,"Audio")," which provides methods to interact with the microphone and speakers, as well as utilities for speech recognition and synthesis. These functions are essential for the user experience as blind users starting to learn braille heavily rely on audio."),l.a.createElement("div",{className:"my-6 border-t border-b border-gray-300 overflow-hidden relative"},l.a.createElement("table",{className:"w-full text-left"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5"},"Method"),l.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"},"Description"))),l.a.createElement("tbody",{className:"align-baseline"},l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"speak(string text)"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Output the given text string to the speakers using Google Cloud Speech API.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"playsound(string filename)"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Output the contents of a digital audio file to the speakers, for audio output other than text strings.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"recognize_speech(string[] keywords)"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Listens for audio input and returns a string of the transcribed speech. Optional relevant keywords can be passed in order to improve recognition accuracy."))))),l.a.createElement("p",null,"If you would like the ",l.a.createElement("code",null,"Audio")," output to be your own mp3 recording, upload the file in the ",l.a.createElement("code",null,"src/cache")," folder with the md5 hash of the output as filename."),l.a.createElement("h3",{id:"direct"},l.a.createElement("code",null,"Direct")),l.a.createElement("p",null,"The instance of your created class also contains a variety of inherited utility functions."),l.a.createElement("div",{className:"my-6 border-t border-b border-gray-300 overflow-hidden relative"},l.a.createElement("table",{className:"w-full text-left"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5"},"Method"),l.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"},"Description"))),l.a.createElement("tbody",{className:"align-baseline"},l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"print_text(string text)"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Displays a given text over all available cells and implements pagination using the button of the last cell.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"print_character_all_cells(char c)"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Displays the same given character on all available cells.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"print_cells_to_terminal()"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Development helper function that prints the current output on the cells to the terminal, including the normal alphabet character underneath the braille cells.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"print_character_all_cells(char c)"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Displays the same given character on all available cells.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"on_start()"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"This is an abstract method that is called on the launch of your app and needs to be implemented in your class.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"on_quit()"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"This is an abstract method that is called when your app is quit and needs to be implemented in your class.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"reset_cells()"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Resets all cells to zero, i.e. flat surface.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"await_response(string[] desired_responses)"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Listens for audio input, waits for one of the desired responses to be said and returns that option.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"save_settings()"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Saves the settings of your app to the local file system.")),l.a.createElement("tr",null,l.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-purple-700"},"edit_settings()"),l.a.createElement("td",{className:"p-2 border-t border-gray-300 text-xs"},"Provides the user with options to change the editable app settings. The menu can be accessed by the user with the voice command ",l.a.createElement("span",{className:"italic underline"},"help")," at any point."))))),l.a.createElement("p",null,l.a.createElement("code",null,"self.settings")," contains a dictionary of previously stored app settings from the file system. You can add the settings you need for your app to the file ",l.a.createElement("code",null,"[appname]_state.txt")," in the"," ",l.a.createElement("code",null,"src/app_states")," folder. If the setting is user-editable, create a key ",l.a.createElement("code",null,"editable")," which is a dictionary containing the editable settings. Provide a name, description, current value and a dictionary of possible values with their description."))}}}]);
//# sourceMappingURL=23-2f7e32d7d67eedc41c37.js.map