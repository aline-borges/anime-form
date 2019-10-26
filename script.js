const body = document.querySelector('body')
const avatar = document.querySelector('.user')
const themeList = ['dbz', 'bnh', 'cdz', 'nar', 'fma', 'ble', 'yyh', 'ruk', 'nnt']

function removeAll()
{
    themeList.forEach(function(theme) {
        body.classList.remove(theme)
    })
}

function changeTheme(theme)
{
    removeAll()
    body.classList.add(theme)
    avatar.setAttribute('src', 'img/' + theme + '.png')
}
