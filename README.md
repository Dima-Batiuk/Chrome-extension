# Chrome-extension
 Extension must load itself into every page (including iframes) and handle actions on
 1) Input elements (type: “text”). 
 2) Contenteditable elements (including divs)
## Example handling:
  You type word “test” and press space → Nothing happens → Then you type word “foo” in text-input element (on any page) → Finish typing word (e.g. by pressing “space” button) → Popup is shown with several replacement options → User chooses “bar” option -> “foo” is replaced with “bar”

### Functional requirements:
 1) Should work properly when you add text inside existing text
 2) Should be possible to continue typing in same location
 3) Should work on all pages, with such elements (including e.g. iframes).
 
### Non-Functional requirements:
 1) Extension must be created with Typescript or ES6
 2) [Optional]: use webpack (any version) to build the app;

#### Dictionary (replacement options) for replacing:
 1) Cat > Dog; Rat; bat;
 2) Helo > hello; Help, Hell;
 3) heldp > help; held; hello;


