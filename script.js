// Navigation avec fade-out
function goToPage(page){
    document.body.classList.add('fade-out');
    setTimeout(()=>{ window.location.href = page; }, 500);
}

// Typing effect
document.querySelectorAll('.typing-text').forEach(el=>{
    const text = el.getAttribute('data-text');
    let i=0;
    function type(){
        if(i<text.length){
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type,50);
        }
    }
    type();
});