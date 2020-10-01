const chars = 'ABCDEFGIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');


const generateCode = () => {


    for (let i = 0; i <= 1000; i++) {
        let code = '';
        const div = document.createElement('div');

        section.appendChild(div);

        for (let i = 0; i <= 5; i++) {
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }

        div.textContent = code
    }
}


btn.addEventListener('click', generateCode)