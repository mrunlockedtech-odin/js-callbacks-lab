// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

//removed the () from the function call which allowed the window to encompass the function. It is related to a binding issue

setTimeout(writeDing, 3000);

function writeDing() {
  console.log('Ding!');
}
