const btnMobile = document.querySelector('button#btn-mobile') //Recebe o botão do menu

function toggleMenu(event){ //Função responsavel pelo evento de click para o menu MOBILE
    if (event.type === 'touchstart'){ //teste para saber se o evento de click utilizado é touch ou não para que nao ocorra o erro de abrifecha
        event.preventDefault()
    }
    const nav = document.querySelector('nav#nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    }
    else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)