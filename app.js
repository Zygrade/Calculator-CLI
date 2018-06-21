const program = require('commander');
const math = require('mathjs');

program
      .version('1.0.0')
      .description('A CLI Calculator')
      .description('Type calc or c followed by a space and an input string that needs to be evaluated');

program
      .command('calc <input>')
      .alias('c')
      .action(function(input){
            if(typeof input !== 'string'){
              console.log('Argument after calc | c must be a String');
            } else {
            console.log('Input : ' + process.argv[process.argv.length-1]);
            console.log('Output : ' + math.eval(process.argv[process.argv.length-1]));
          }
      });

program.parse(process.argv);
