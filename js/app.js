// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

//removed the () from the function call which allowed the window to encompass the function. It is related to a binding issue

setTimeout(writeDing, 3000);

function writeDing() {
  console.log('Ding!');
}


// Exercise 2

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write the sorting callback as a named function declaration

// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

// The sort method sorts "in place", that is, it modifies the array
words.sort(/* pass in a named callback here */);

// Check that logging words now outputs
// ["nice", "short", "medium", "lengthy", "delicious"]