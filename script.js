const translations = {
    'pt-BR': {
        title: 'Calculadora jurosPooolpays',
        capital: 'Capital Inicial ($):',
        ciclo: 'Escolha o Ciclo de Aporte:',
        repeticoes: 'Quantas vezes repetir o ciclo:',
        calcular: 'Calcular Rendimento',
        aguardando: 'Preencha os campos e clique em Calcular.'
    },
    'en': {
        title: 'Pooolpays Compound Interest Calculator',
        capital: 'Initial Capital ($):',
        ciclo: 'Choose the Investment Cycle:',
        repeticoes: 'How many times to repeat the cycle:',
        calcular: 'Calculate Return',
        aguardando: 'Fill in the fields and click Calculate.'
    },
    'es': {
        title: 'Calculadora de Interés Compuesto Pooolpays',
        capital: 'Capital Inicial ($):',
        ciclo: 'Elige el Ciclo de Inversión:',
        repeticoes: 'Cuántas veces repetir el ciclo:',
        calcular: 'Calcular Rendimiento',
        aguardando: 'Rellena los campos y haz clic en Calcular.'
    },
    'hi': {
        title: 'पूलपेज़ चक्रवृद्धि ब्याज कैलकुलेटर',
        capital: 'प्रारंभिक पूंजी ($):',
        ciclo: 'निवेश चक्र चुनें:',
        repeticoes: 'चक्र को कितनी बार दोहराना है:',
        calcular: 'लाभ की गणना करें',
        aguardando: 'फ़ील्ड भरें और गणना पर क्लिक करें।'
    }
};

const flags = {
    'pt-BR': 'https://flagcdn.com/w20/br.png',
    'en': 'https://flagcdn.com/w20/gb.png',
    'es': 'https://flagcdn.com/w20/es.png',
    'hi': 'https://flagcdn.com/w20/in.png'
};

let currentLang = 'pt-BR';

document.getElementById('language-btn').addEventListener('click', () => {
    document.getElementById('language-menu').classList.toggle('hidden');
});

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.getElementById('title').innerText = t.title;
    document.getElementById('label-capital').innerText = t.capital;
    document.getElementById('label-ciclo').innerText = t.ciclo;
    document.getElementById('label-repeticoes').innerText = t.repeticoes;
    document.getElementById('calcular-btn').innerText = t.calcular;
    document.getElementById('resultado').innerText = t.aguardando;

    document.getElementById('flag-icon').src = flags[lang];
    document.getElementById('language-menu').classList.add('hidden');
}

function calcularJurosPooolpays() {
    const capitalInicial = parseFloat(document.getElementById('capital').value);
    const cicloEscolhido = document.getElementById('ciclo').value;
    const repeticoes = parseInt(document.getElementById('repeticoes').value);
    const resultadoElement = document.getElementById('resultado');

    if (isNaN(capitalInicial) || isNaN(repeticoes) || capitalInicial <= 0 || repeticoes <= 0) {
        resultadoElement.innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    const [duracaoCiclo, taxaJuros] = cicloEscolhido.split('-').map(Number);
    const montanteFinal = capitalInicial * Math.pow((1 + taxaJuros), repeticoes);
    const totalJuros = montanteFinal - capitalInicial;

    resultadoElement.innerHTML = `
        <p>${repeticoes}x ciclos de ${duracaoCiclo} dias</p>
        <p>Total de Juros: <strong>$${totalJuros.toFixed(2)}</strong></p>
        <p>Montante Final: <strong>$${montanteFinal.toFixed(2)}</strong></p>
    `;
}
