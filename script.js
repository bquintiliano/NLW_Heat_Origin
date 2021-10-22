const linksSocialMedia = {
    github: 'bquintiliano',
    youtube:'',
    facebook: '',
    instagram: 'bquintiliano2',
    twitter: 'bquintiliano2	'
    }

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
         const social = li.getAttribute('class')
         li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            _name.textContent = data.name
            _userGitHub.textContent = data.login
            userImage.src = data.avatar_url
        })
}

changeSocialMediaLinks()
getGitHubProfileInfos()