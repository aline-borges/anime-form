let removeDbz = document.querySelector("body").classList.remove('dbz')
let removeBnh = document.querySelector("body").classList.remove('bnh')
let removeCdz = document.querySelector("body").classList.remove('cdz')
let removeNar = document.querySelector("body").classList.remove('nar')
let removeFma = document.querySelector("body").classList.remove('fma')
let removeBle = document.querySelector("body").classList.remove('ble')
let removeYyh = document.querySelector("body").classList.remove('yyh')
let removeRuk = document.querySelector("body").classList.remove('ruk')
let removeNnt = document.querySelector("body").classList.remove('nnt')

let removeList = [removeDbz,removeBnh,removeCdz,removeNar,removeFma,removeBle,removeYyh,removeRuk,removeNnt]

let addDbz = document.querySelector("body").classList.add('dbz')
let addBnh = document.querySelector("body").classList.add('bnh')
let addCdz = document.querySelector("body").classList.add('cdz')
let addNar = document.querySelector("body").classList.add('nar')
let addFma = document.querySelector("body").classList.add('fma')
let addBle = document.querySelector("body").classList.add('ble')
let addYyh = document.querySelector("body").classList.add('yyh')
let addRuk = document.querySelector("body").classList.add('ruk')
let addNnt = document.querySelector("body").classList.add('nnt')


function removeAll(){
    return removeList
}


function Dbz(){
    removeAll()
    return addDbz
}

function Bnh(){
    removeAll()
    return addBnh
    
}

function Cdz(){
    removeAll()
    return addCdz
}

function Nar(){
    removeAll()
    return addNar
}

function Fma(){
    removeAll()
    return addFma
}

function Ble(){
    removeAll()
    return addBle
}

function Yyh(){
    removeAll()
    return addYyh
}

function Ruk(){
    removeAll()
    return addRuk
}

function Nnt(){
    removeAll()
    return addNnt
}
