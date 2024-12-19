
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  console.log('received input:', text);
  text = text.trim(); // remove leading and trailing whitespace
  if (text === 'quit' || text ==='exit') {    // /n  newline character
    quit();
  }
  else if(text === 'hello'){
    hello();
  }
  else if(text === 'battata'){
    battata(); 
  }
  else if (text === 'help'){
    help()
  }
  else{
    unknownCommand(text);
  }
}



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}


//defining battata 
function battata() {
  console.log('Battata function called!');
  // Add any additional logic you want to execute when 'battata' is received
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}
//exit refers to the quit function
const exit = quit; //constant so we won't able t change them except manually 

//help function 
/**
 * list the commands above 
 *
 * @returns {void}
 */
function help(){
  console.log('Available commands:');
  console.log('1. hello() - Greets the user.');
  console.log('3. exit() or quit() - Exits the application.');
  console.log('4. unknownCommand() - Handles unknown commands.');}


// The following line starts the application
startApp("Qamar")
