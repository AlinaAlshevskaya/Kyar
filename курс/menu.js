document.getElementById('menu-button').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('open');
});
document.getElementById('close-menu').addEventListener('click',function(){
    document.getElementById('mobile-menu').classList.remove('open');
})