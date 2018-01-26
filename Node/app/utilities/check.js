// Check
const check = require('check-types');

function checkTodoProperties(params) {
    const request = {
        text: params.text
    };

    const checkTypes = {
        text: check.string
    };

    const test = check.map(request, checkTypes);

    return check.all(test);
}

module.exports = {
    checkTodoProperties: checkTodoProperties
};
