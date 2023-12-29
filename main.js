// deklarasi variabel
let cmdHistory = [];
let count = 0;
let cmd = document.querySelector('.command');
let inputCmd = document.getElementById('input-command');
let outputCmd = document.querySelector('.command-output');
let terminalDisplayGroup = document.createElement('div');
let errorText = document.createElement('P');

// dkelarasi isi content
let about = document.createElement('div');
let help = document.createElement('div');
let projects = document.createElement('div');
let certificates = document.createElement('div');
let socials = document.createElement('div');
let contacts = document.createElement('div');


// pembuatan blok ke bawah
inputCmd.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        switch(inputCmd.value) {
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
                window.scrollTo(0, document.body.offsetHeight);
                break;
            case '/chathaulos':
            case '/opus':
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
                terminalDisplayGroup.innerHTML = `<p><span class="vistor-display">visitor</span>@max.desanta:$~ <span class="vistor-display-2">${inputCmd.value}</span></p>`;
                terminalDisplayGroup.classList.add('command-display');
                outputCmd.appendChild(terminalDisplayGroup.cloneNode(true));
                errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
                outputCmd.appendChild(errorText.cloneNode(true));
                break;
        }
        inputCmd.value = '';
    } else if (cmdHistory.length != 0) {
        if (event.keyCode == '38') {
            if (count < cmdHistory.length) {
                count += 1;
                input.value = cmdHistory[count - 1];
            }
        } else if (event.keyCode == '40') {
            if (count <= cmdHistory.length & count > 1) {
                count -= 1;
                input.value = cmdHistory[count - 1];
            } else if (count == 1) {
                count -= 1;
                input.value = ''
            }
        }
    }
})


// pembuatan kondisi menu
function handleMenuCmd(menu) {
    // pembuatan konten buat display cmd
    terminalDisplayGroup.innerHTML = `<p><span class="vistor-display">visitor</span>@max.desanta:$~ <span class="vistor-display-2">${menu}</span></p>`;
    terminalDisplayGroup.classList.add('command-display');
    outputCmd.appendChild(terminalDisplayGroup.cloneNode(true));

    switch (menu) {
        case '/about':
            about.classList.add('command-output-about', 'container');
            about.innerHTML = `
            <p class="p1">Hi, I am Max</p>
            <p class="p2">I am junior web development pased in Tangerang, Indonesia. I have experienced making website with HTML, CSS, Javascript, and ReactJS. I also studying at Jakarta State Polytechnic. Besides as junior web development I also have another skills, like boxing, games, and invesment.</p>
            `;
            outputCmd.appendChild(about.cloneNode(true));
            break;
        case 'help':
            help.classList.add('command-output-help', 'container');
            help.innerHTML = `
            <div class="list-command container">
                <div class="list-title">
                    /about
                </div>
                <div class="list-icon">
                    =>
                </div>
                <div class="list-desc">
                    about max de santa
                </div>
            </div>
            <div class="list-command container">
                <div class="list-title">
                    /projects
                </div>
                <div class="list-icon">
                    =>
                </div>
                <div class="list-desc">
                    check my projects
                </div>
            </div>
            <div class="list-command container">
                <div class="list-title">
                    /contacts
                </div>
                <div class="list-icon">
                    =>
                </div>
                <div class="list-desc">
                    check my contacts
                </div>
            </div>
            <div class="list-command container">
                <div class="list-title">
                    /certificates
                </div>
                <div class="list-icon">
                    =>
                </div>
                <div class="list-desc">
                    check my certificates
                </div>
            </div>
            <div class="list-command container">
                <div class="list-title">
                    /socials
                </div>
                <div class="list-icon">
                    =>
                </div>
                <div class="list-desc">
                    check my socials media
                </div>
            </div>`;
            outputCmd.appendChild(help.cloneNode(true));
            break;
        case '/projects':
            projects.classList.add('command-output-projects', 'container');
            projects.innerHTML = `
            <div class="list-output-project container">
                <div class="project-title">
                    <p>/opus</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="project-desc container">
                    <div class="project-desc-long">
                        <p>opus is todo list website who have four categories. There are Importan Urgent, Important Not Urgent, Not Important Urgent,Not Important Not Urgent</p>
                    </div>
                    <div class="project-icon-list container">
                        <p>Built :</p>
                        <div class="project-icon">
                            <i class='bx bxl-react bx-sm'></i>
                            <i class='bx bxl-redux bx-sm'></i>
                            <i class='bx bxl-javascript bx-sm'></i>
                            <i class='bx bxl-nodejs bx-sm'></i>
                            <iconify-icon icon="devicon-plain:materialui" style="color: #fbe4d8;" width="25" height="25"></iconify-icon>
                            <iconify-icon icon="cib:mysql" style="color: #fbe4d8;" width="23" height="23"></iconify-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-output-project container">
                <div class="project-title">
                    <p>/chathaulos</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="project-desc container">
                    <div class="project-desc-long">
                        <p>chathaulos is profile company web that makes 
                            clothes with combination of regular fabric 
                            and ulos fabric</p>
                    </div>
                    <div class="project-icon-list container">
                        <p>Built :</p>
                        <div class="project-icon">
                            <i class='bx bxl-wordpress bx-sm'></i>
                        </div>
                    </div>
                </div>
            </div>`;
            outputCmd.appendChild(projects.cloneNode(true));
            break;
        case '/contacts':
            contacts.classList.add('command-output-contacts', 'container');
            contacts.innerHTML = `                    
            <div class="list-output-contacts container">
                <div class="contact-title">
                    <p>email</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="contact-desc">
                    <p>maxdesanta1@gmail.com</p>
                </div>
            </div>
            <div class="list-output-contacts container">
                <div class="contact-title">
                    <p>phone</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="contact-desc">
                    <p>+62 8138 5169 580</p>
                </div>
            </div>`;
            outputCmd.appendChild(contacts.cloneNode(true));
            break;
        case '/certificates':
            certificates.classList.add('command-output-certificates', 'container');
            certificates.innerHTML = `
            <div class="list-output-certificates container">
                <div class="certificates-title">
                    <p>/progate</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="certificates-desc">
                    <p>go to link drive</p>
                </div>
            </div> 
            <div class="list-output-certificates container">
                <div class="certificates-title">
                    <p>/sololearn</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="certificates-desc">
                    <p>go to link drive</p>
                </div>
            </div> 
            <div class="list-output-certificates container">
                <div class="certificates-title">
                    <p>/other</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="certificates-desc">
                    <p>go to link drive</p>
                </div>
            </div>`;

            outputCmd.appendChild(certificates.cloneNode(true));
            break;
        case '/socials':
            socials.classList.add('command-output-socials', 'container');
            socials.innerHTML = `                    
            <div class="list-output-socials container">
                <div class="socials-title">
                    <p>/github</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="socials-desc">
                    <p>go to github page</p>
                </div>
            </div> 
            <div class="list-output-socials container">
                <div class="socials-title">
                    <p>/linkedin</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="socials-desc">
                    <p>go to linkedin page</p>
                </div>
            </div> 
            <div class="list-output-socials container">
                <div class="socials-title">
                    <p>/whatsapp</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="socials-desc">
                    <p>go to whatsapp page</p>
                </div>
            </div> 
            <div class="list-output-socials container">
                <div class="socials-title">
                    <p>/instagram</p>
                </div>
                <div class="list-icon">
                    <p>=></p>
                </div>
                <div class="socials-desc">
                    <p>go to instagram page</p>
                </div>
            </div> `;

            outputCmd.appendChild(socials.cloneNode(true));
            break;
        default:
            errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
            break;
    }
}

// pembuatan kondisi link projects
function handleLinkProject(link) {
    terminalDisplayGroup.innerHTML = `<p><span class="vistor-display">visitor</span>@max.desanta:$~ <span class="vistor-display-2">${link}</span></p>`;
    terminalDisplayGroup.classList.add('command-display');
    outputCmd.appendChild(terminalDisplayGroup.cloneNode(true));

    switch (link) {
        case '/chathaulos':
            window.open('https://chathaulos.id/', '_blank');
            break;
        case '/opus':
            window.open('https://spiffy-donut-18bb24.netlify.app/', '_blank');
            break;
        default:
            errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
            break;
    }
}

// pembuatan kondisi link certificates
function handleLinkCertificate(link) {
    terminalDisplayGroup.innerHTML = `<p><span class="vistor-display">visitor</span>@max.desanta:$~ <span class="vistor-display-2">${link}</span></p>`;
    terminalDisplayGroup.classList.add('command-display');
    outputCmd.appendChild(terminalDisplayGroup.cloneNode(true));

    switch (link) {
        case '/progate':
            window.open('https://bit.ly/45rtz2g', '_blank');
            break;
        case '/sololearn':
            window.open('https://bit.ly/3Fjywja', '_blank');
            break;
        case '/other':
            window.open('https://bit.ly/45CN1Jf', '_blank');
            break;
        default:
            errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
            break;
    }
}

// pembuatan kondisi link sosial media
function handleLinkSocials(link) {
    terminalDisplayGroup.innerHTML = `<p><span class="vistor-display">visitor</span>@max.desanta:$~ <span class="vistor-display-2">${link}</span></p>`;
    terminalDisplayGroup.classList.add('command-display');
    outputCmd.appendChild(terminalDisplayGroup.cloneNode(true));

    switch (link) {
        case '/github':
            window.open('https://github.com/maxdesanta', '_blank');
            break;
        case '/linkedin':
            window.open('https://www.linkedin.com/in/marcellinus-ario-xavier-saputra-6b4381175', '_blank');
            break;
        case '/whatsapp':
            window.open('https://api.whatsapp.com/send?phone=6281385169580', '_blank');
            break;
        case '/instagram':
            window.open('https://www.instagram.com/max.desanta', '_blank');
            break;
        default:
            errorText.textContent = 'please type correctly, if you want to see list of commands please type "help"';
            break;
    }
}