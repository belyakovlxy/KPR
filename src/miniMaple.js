class MiniMaple{
    diff(inputFunction)
    {
        if (inputFunction === '') return 'Error! Empty input function.';

        let inputParticles = inputFunction.split(',');
        if (inputParticles.length != 2) return 'Error! Wrong input style (must be: \"function, diff variable\")';

        if (inputFunction.match(/\//g) != null) return 'Error! Undefined operator was used.';

        for (let i = 0; i < inputParticles.length; ++i)
        {
            inputParticles[i] = inputParticles[i].replace(/\s/g, '');
            if (inputParticles[i] === '')
                {
                    if (i == 0) return 'Error! Function was missed.';
                    else return 'Error! Differentiable variable was missed.';
                }
        }

        let functionText = inputParticles[0];
        let variable = inputParticles[1];

        let diffedFunc = this.#differentiateFunc(functionText, variable);
        diffedFunc = diffedFunc.substring(1, diffedFunc.length);
        if (diffedFunc[0] == '+') diffedFunc = diffedFunc.substring(2, diffedFunc.length);

        return diffedFunc;
    }

    #differentiateFunc(functionText, variable)
    {
        let diffedFunc = '';

        if (!'+-'.includes(functionText[0])) {
            functionText = '+' + functionText;
        }

        let delimIndex = 0;
        let delimArr = [functionText.indexOf('-', 1), functionText.indexOf('+', 1)];
        
        if (Math.min(...delimArr) != Math.max(...delimArr))
            {
                if (Math.min(...delimArr) == -1)
                {
                    delimIndex = Math.max(...delimArr);
                }
                else
                {
                    delimIndex = Math.min(...delimArr);
                }

                return diffedFunc + this.#differentiateFunc(functionText.substring(0, delimIndex), variable) + 
                this.#differentiateFunc(functionText.substring(delimIndex, functionText.length), variable);
            }
        else // if (Math.min(...delimArr) == Math.max(...delimArr))
        {
            let varIndex = functionText.indexOf(variable);

            if (varIndex == -1) return '';

            let coeff = 1;
            let power = 1;
            if (functionText[varIndex + 1] == '^')
            {
                power = parseInt(functionText.substring(varIndex + 2, functionText.length));
            }
            
            if (functionText[varIndex - 1] == '*')
            {
                coeff = parseInt(functionText.substring(1, varIndex - 1));
            }

            let newCoeff = coeff * power;
            let returningPart = ' ' + functionText[0];
            if (newCoeff == 1) returningPart = returningPart + ' 1';

            if (newCoeff > 1)
            {
                returningPart = returningPart + ' ' + (newCoeff);
                if (power != 1) returningPart = returningPart + ' *';
            } 

            if (power >= 2) returningPart = returningPart + ' ' + variable;

            if (power > 2) returningPart = returningPart + ' ^ ' + (power - 1);
            
            return returningPart;
        }
    }
}

export {MiniMaple}