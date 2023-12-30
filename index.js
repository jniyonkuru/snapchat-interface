const username=document.getElementById('username');
const usernameLabel=document.querySelector('label[for="username"]');
const password= document.querySelector('#current-password');
const passwordLabel=document.querySelector('label[for="current-password"]');

username.addEventListener('focus',()=>{
 username.setAttribute('placeholder','');
 usernameLabel.style.visibility='visible';
})
username.addEventListener('blur',()=>{
    if(!username.value.trim()) {
        username.setAttribute('placeholder','Email or username');
        usernameLabel.style.visibility='hidden'; 
    }
})
password.addEventListener('focus',()=>{
    password.placeholder='';
    passwordLabel.style.visibility='visible';
})
password.addEventListener('blur',()=>{
    password.setAttribute('placeholder','Password');
    passwordLabel.style.visibility='hidden';
}
)