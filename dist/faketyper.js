const faketyper = {
  init: (options) => new Promise((resolve) => new Faketyper(options, resolve))
};

function Faketyper (options, resolve) {
  this.defaultOptions = {
    delay: 0, // Time to wait before start rendering
    interval: 25, // Time between rendering two letters
    duration: null, // Instead of setting an interval, you can set the duration of whole process
    selector: '.faketyper.auto', // Elements which are 
    showPrompt: false, // Enable command prompt sign blinking after the text
  };
  this.options = options || {};
  this.resolve = resolve;
  this.setup();
}

Faketyper.prototype.setup = function () {
  
  Object.keys(this.defaultOptions)
    .filter((key) => !this.options.hasOwnProperty(key))
    .forEach((key) => this.options[key] = this.defaultOptions[key]);
  
  const containers = Array.prototype.slice.call(document.querySelectorAll(this.options.selector));
  if (containers.length && this.options.showPrompt) {
    containers[0].classList.add('prompt');
  }
  this.setupTyping(containers);
}

Faketyper.prototype.setupTyping = function (containers) {
  
  // Prepare
  const container = containers.shift();
  if (this.options.showPrompt) {
    container.classList.add('prompt')
  }
  
  const textArray = container.innerHTML.split('');
  container.innerHTML = '';
  container.classList.add('visible');
  container.hidden = false;

  const interval = typeof (this.options.duration) === 'number'
    ? this.options.duration / textArray.length
    : this.options.interval;
  
  // Wait for 'this.options.delay' in milliseconds
  setTimeout(() => {
     
    const intervalId = setInterval(() => {
      const nextLetter = textArray.shift();
      if (nextLetter) {
        container.innerHTML += nextLetter;
      } else {

        // Clear current interval and proceed to the next container (if present)
        clearInterval(intervalId);
        if (containers.length) {
          // Remove command prompt sign
          container.classList.remove('prompt');
          // setup next container
          this.setupTyping(containers);
        } else {
          this.resolve();
        }
      }
    }, interval);
  
  }, this.options.delay);
}