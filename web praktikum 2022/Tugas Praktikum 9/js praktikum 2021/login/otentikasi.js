const button = document.querySelector('#login');
button.addEventListener('click', function(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if(username === "daffa" && password === "oke"){
        alert('password benar')
        location.replace('berhasil.html');
    }else{
        alert("Username dan Password yang anda masukkan salah!!!\n \nsilahkan masukkan: \nusername : daffa \npassword : oke")
    }
})