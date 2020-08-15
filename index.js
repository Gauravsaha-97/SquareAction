const core = require('@actions/core');
const github = require('@actions/github');

try {
    const side = core.getInput('Enter the Side of the Square');
    let area = side * side;
    console.log(`Hello,The Area of Square is ${area}`);
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}