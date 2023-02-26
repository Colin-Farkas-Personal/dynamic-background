import gradients from '@/styles/gradients/gradients.json';

export default function getLinearGradient(): string {
    // Get gradient from list
    if (!gradients) return "";

    let gradient: string = 'linear-gradient()';

    const degrees: number = getRandomInt(0, 365)
    // txt1.slice(0, 3) + "bar" + txt1.slice(3);
    gradient = `linear-gradient(${degrees}deg,`;

    const gradientIndex: number = getRandomInt(0, (gradients.length) - 1);
    
    const selectedGradient: Array<string> = gradients[gradientIndex];

    selectedGradient.forEach((color, i) => {
        const insertIndex = gradient.length;
        console.log("INDEX: ", i);
        console.log("LENGTH: ", selectedGradient.length);

        if (i >= selectedGradient.length - 1) {
            console.log("B");
            gradient = insert(gradient, insertIndex, ` ${color} 100%)`);
            return;
        }

        console.log("A");
        gradient = insert(gradient, insertIndex, ` ${color} 0%,`);
    })

    return gradient;

    // background: linear-gradient(95deg, rgba(252,234,187,1) 0%, rgba(248,181,0,1) 100%);
}

function insert(str: string, index: number, value: string) {
    return str.substring(0, index) + value + str.substring(index);
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}