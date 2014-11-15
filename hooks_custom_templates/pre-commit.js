var exec = require('child_process').exec;

exec('grunt {{task}}', function (err, stdout, stderr) {

  console.log(stdout);

  var exitCode = 0;
  if (err) {
    console.log(stderr);
    require('child_process').exec('say "' + getMessage(failArray) + '"');
    exitCode = -1;
  } else {
    require('child_process').exec('say "'+getMessage(passArray) + ', hacked"');
  }

  process.exit(exitCode);
});

function getMessage(array) {
    var random = Math.floor((Math.random() * array.length),10);
    return array[random];
}

const
    passArray = [
        "Area 51", "The Statue of Liberty", "Illuminarti", "Wall Street",
        "The Pentagon", "The F.B.I.", "M.I. 5", "Buckingham Palace",
        "The White House", "The Kremlin", "Tokyo", "Mainframe", "Matrix"
        ],
    failArray = [
        "Stop being crap", "You're embarrassing yourself",
        "You're family should be disappointed", "I wish you were never born",
        "Jesus hates you", "I don't know why I even bother",
        "I don't understand how you're getting paid for this",
        "Put that code back where it came from, or so help me",
        "That code was gross", "You must be kidding me",
        "Here's an idea - be less bad", "Let's pretend this never happened",
        "Ha ha ha - I assume that commit was meant as some kind of joke",
        "I told you once"
        ];



