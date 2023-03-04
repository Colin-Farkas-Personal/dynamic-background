import gradients from '@/styles/gradients/gradients.json';

let generatedGradient: Array<string> = [];

function getRandomGradientColors(): void {
    const gradientIndex: number = getRandomInt(0, (gradients.length) - 1);
    generatedGradient = gradients[gradientIndex];
}

// box-shadow: 0px 0px 100px 30px rgba(163, 209, 76, 0.123);
export function getBoxShadowStyle(): string {
    if (!gradients) return '';

    const selectedGradient: Array<string> = generatedGradient;
    const selectedColorIndex: number = getRandomInt(0, selectedGradient.length - 1);

    const alpha = '40';
    let colorHex: string = selectedGradient[selectedColorIndex];
    colorHex = insert(colorHex, colorHex.length, alpha);

    return `0px 0px 200px 40px ${colorHex}`;
}

// background: linear-gradient(95deg, rgba(252,234,187,1) 0%, rgba(248,181,0,1) 100%);
export function getLinearGradientStyle(): string {
    // Get gradient from list
    if (!gradients) return '';

    let gradient: string = 'linear-gradient()';

    const degrees: number = getRandomInt(0, 365)
    gradient = `linear-gradient(${degrees}deg,`;
    
    getRandomGradientColors();
    const selectedGradient = generatedGradient; 

    selectedGradient.forEach((color, i) => {
        const insertIndex = gradient.length;

        if (i >= selectedGradient.length - 1) {
            gradient = insert(gradient, insertIndex, ` ${color} 100%)`);
            return;
        }

        gradient = insert(gradient, insertIndex, ` ${color} 0%,`);
    })

    return gradient;
}

function insert(str: string, index: number, value: string) {
    return str.substring(0, index) + value + str.substring(index);
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}