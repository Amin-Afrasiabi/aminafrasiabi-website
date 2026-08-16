const toggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});}
document.querySelectorAll('.nav-links a').forEach(a=>{a.addEventListener('click',()=>{links?.classList.remove('open');toggle?.setAttribute('aria-expanded','false')})});
(()=>{const p=location.pathname.replace(/index\.html$/,'');document.querySelectorAll('.nav-links a').forEach(a=>{const h=new URL(a.href,location.origin).pathname;if((h==='/'&&p==='/')||(h!=='/'&&p.startsWith(h)))a.setAttribute('aria-current','page')})})();
