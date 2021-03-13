module.exports = function check(expr, bracketsConfig) {
    let equalBrackets = bracketsConfig.filter(elem => elem[0] === elem[1]).map(elem => elem[0])

    let brackets = ''
    bracketsConfig.filter(elem => elem[0] !== elem).forEach(element => {
        brackets += element[0] + element[1]
    });
    let stack = []
    for (let bracket of expr) {
        let bracketsIndex = brackets.indexOf(bracket)

        if (bracketsIndex === -1) {
            continue
        }

        if (bracketsIndex % 2 === 0) {
            if(stack.length > 0 && stack[stack.length - 1] === bracketsIndex+1 && equalBrackets.includes(bracket)) {
                stack.pop()
            }else{
                stack.push(bracketsIndex + 1)
            }
        } else {
            if (stack.pop() !== bracketsIndex) {
                return false;
            }
        }
    }
    return stack.length === 0
}
