const linksSocialMedia = {
    nome:'Bruno Quintiliano',
    github: 'bquintiliano',
    youtube:'',
    facebook: '',
    instagram: 'bquintiliano2',
    twitter: ''
    }

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
         const social = li.getAttribute('class')
         li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}
