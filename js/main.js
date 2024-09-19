import { about,help,contacts,projects,certificates,socials } from './variabelContent.js';

import { aboutCommand, helpCommand, projectsCommand, contactsCommand, certificatesCommand, socialsCommand } from './commandContent.js';

// deklarasi variabel
let cmdHistory = [];
let count = 0;
let inputCmd = document.getElementById('input-command');
let outputCmd = document.querySelector('.command-output');
let terminalDisplayGroup = document.createElement('div');
let errorText = document.createElement('P');

// fungsi autoscroll bawah
function scrollAuto() {
    // Tunggu sebentar untuk memastikan DOM telah diperbarui
    setTimeout(() => {
        // Scroll ke paling bawah
        window.scrollTo(0, document.body.scrollHeight);
        
        // Fokus ke input command
        inputCmd.focus();
        
        // Scroll lagi untuk memastikan input benar-benar terlihat
        inputCmd.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 0);
}

// pembuatan blok ke bawah
inputCmd.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        switch (inputCmd.value) {
            case 'clear':
                outputCmd.innerHTML = '';
                break;
            case '/about':
            case 'help':
            case '/projects':
            case '/certificates':
            case '/socials':
            case '/contacts':
                handleMenuCmd(inputCmd.value);
                cmdHistory.push(inputCmd.value);
                break;
            case '/chathaulos':
            case '/opus':
            case '/digitalclock':
                handleLinkProject(inputCmd.value);
                cmdHistory.push(inputCmd.value);
                break;
            case '/progate':
            case '/sololearn':
            case '/other':
                handleLinkCertificate(inputCmd.value);
                cmdHistory.push(inputCmd.value);
                break;
            case '/github':
            case '/linkedin':
            case '/whatsapp':
            case '/instagram':
                handleLinkSocials(inputCmd.value);
                cmdHistory.push(inputCmd.value);
                break;
            default:
                handleDisplayKeep(inputCmd.value);
                errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
                outputCmd.appendChild(errorText.cloneNode(true));
                break;
        }
        inputCmd.value = '';
        count = cmdHistory.length;

        scrollAuto()
    }

    if (event.key === "ArrowUp") {
        event.preventDefault();
        if (count > 0) {
            count--;
        }
        inputCmd.value = cmdHistory[count];
    } else if (event.key === "ArrowDown") {
        event.preventDefault();
        if (count < cmdHistory.length - 1) {
            count++;
            inputCmd.value = cmdHistory[count];
        } else {
            inputCmd.value = "";
        }
    }
})


// pembuatan kondisi menu
function handleMenuCmd(menu) {
    handleDisplayKeep(menu.toLowerCase());

    switch (menu.toLowerCase()) {
        case '/about':
            about.classList.add('command-output-about');
            about.innerHTML = aboutCommand;
            outputCmd.appendChild(about.cloneNode(true));
            break;
        case 'help':
            help.classList.add('command-output-help');
            help.innerHTML = helpCommand;
            outputCmd.appendChild(help.cloneNode(true));
            break;
        case '/projects':
            projects.classList.add('command-output-projects');
            projects.innerHTML = projectsCommand;
            outputCmd.appendChild(projects.cloneNode(true));
            break;
        case '/contacts':
            contacts.classList.add('command-output-contacts');
            contacts.innerHTML = contactsCommand;
            outputCmd.appendChild(contacts.cloneNode(true));
            break;
        case '/certificates':
            certificates.classList.add('command-output-certificates');
            certificates.innerHTML = certificatesCommand;
            outputCmd.appendChild(certificates.cloneNode(true));
            break;
        case '/socials':
            socials.classList.add('command-output-socials');
            socials.innerHTML = socialsCommand;
            outputCmd.appendChild(socials.cloneNode(true));
            break;
        default:
            errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
            break;
    }
}

// pembuatan kondisi link projects
function handleLinkProject(link) {
    handleDisplayKeep(link.toLowerCase());

    switch (link.toLowerCase()) {
        case '/chathaulos':
            linktoParameter('https://chathaulos.id/');
            break;
        case '/opus':
            linktoParameter('https://spiffy-donut-18bb24.netlify.app/');
            break;
        case '/digitalclock':
            linktoParameter('https://quiet-biscochitos-0af5c4.netlify.app/');
            break;
        default:
            errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
            break;
    }
}

// pembuatan kondisi link certificates
function handleLinkCertificate(link) {
    handleDisplayKeep(link.toLowerCase());

    switch (link.toLowerCase()) {
        case '/progate':
            linktoParameter('https://bit.ly/45rtz2g');
            break;
        case '/sololearn':
            linktoParameter('https://bit.ly/3Fjywja');
            break;
        case '/other':
            linktoParameter('https://bit.ly/45CN1Jf');
            break;
        default:
            errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
            break;
    }
}

// pembuatan kondisi link sosial media
function handleLinkSocials(link) {
    handleDisplayKeep(link.toLowerCase());

    switch (link.toLowerCase()) {
        case '/github':
            linktoParameter('https://github.com/maxdesanta');
            break;
        case '/linkedin':
            linktoParameter('https://www.linkedin.com/in/marcellinus-ario-xavier-saputra-6b4381175');
            break;
        case '/whatsapp':
            linktoParameter('https://api.whatsapp.com/send?phone=6281385169580');
            break;
        case '/instagram':
            linktoParameter('https://www.instagram.com/max.desanta');
            break;
        default:
            errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
            break;
    }
}

// handle output text
function handleDisplayKeep(text) {
    terminalDisplayGroup.innerHTML = `<p class="py-4"><span class="text-[#B693DA]">visitor</span>@<span class="text-[#DFB6B2]">max.desanta</span>:$~ ${text}</p>`;
    terminalDisplayGroup.classList.add('command-display');
    outputCmd.appendChild(terminalDisplayGroup.cloneNode(true));
}

function linktoParameter(l) {
    window.open(l, '_blank');
}