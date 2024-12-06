//Create two functions

const { run } = require("node:test");
/*For `launchBrowser`, use `if-else` to check if `browserName` is "chrome"*/

function launchBrowser(browserName) {
    if(browserName === "chrome"){
        return `The ${browserName} browser is launched successfully`;
    } else {
        return `The other browser is launched instead of ${browserName}`;
    }
}
/*For`runTests`, use a `switch` statement to handle different `testType` values, including a default case.
function runtests(testTypes)*/
{
    switch(testTypes)
    {
        case 'smoke':
            return 'smoke test';
            break;
        case 'Santiy':
            return 'Sanity test';
            break;
        case 'regression':
            return 'Regression Test';
            break;
        default:
            return 'smoke testtype'
            break;
    }

}

//Call that function from the javascript

console.log(launchBrowser('chrome'));
console.log(runtests('smoke'));