(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var st=$('st-t');if(st){var ws=[].slice.call(st.querySelectorAll('span'));function sw(){var r=st.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.85-r.top)/(r.height+innerHeight*.35)));var n=Math.round(p*ws.length);ws.forEach(function(w,i){w.classList.toggle('on',rm||i<n);});}addEventListener('scroll',sw,{passive:true});sw();}
var fa=$('fd-a');if(fa){var A={reformer:['Full toeless, dense grip','Small dots over the whole sole hold your feet on the footbar and in the straps, and bare toes let you feel the bar.',1,3.2,'Dense, all-over dots'],
 mat:['Full toeless, light grip','On a mat you mostly need a little hold on transitions. Bare toes help you spread and balance in standing work.',1,2.4,'Light, spaced dots'],
 barre:['Half toe, pads at ball and heel','Barre work rises onto the balls of the feet, so grip pads where you push and toe sleeves for a neater line.',.5,3,'Pads under the ball and heel'],
 yoga:['Full toeless, light grip','Yoga mats already grip well. Choose a thin sock with light dots that will not catch as you move between poses.',1,2,'Light, spaced dots'],
 dance:['Half toe, smooth turn spot','Dance needs grip and release. Look for a smooth patch under the ball so you can turn without sticking.',.5,2.6,'Grip with a smooth turn spot'],
 home:['Full toe, cosy grip','At home warmth matters more than feel. A closed toe with grips keeps you steady on hard floors.',0,2.8,'All-over dots, softer knit']},
 F={wood:['Wood is smooth and often polished, so go one step grippier.',.4],mat:['A studio mat adds its own grip, so a lighter pattern is fine.',-.5],tile:['Tile and vinyl get slippery when damp: choose dense dots and keep soles clean.',.6]},a='reformer',f='wood';
 function fd(){var x=A[a],y=F[f],r=Math.max(1.4,x[3]+y[1]),g='',ball=a==='barre'||a==='dance';for(var i=0;i<16;i++)for(var j=0;j<22;j++){var cx=24+i*11+(j%2?5:0),cy=40+j*11;if(ball&&cy>150&&cy<215)continue;if(a==='dance'&&cy>225&&cx>70&&cx<150)continue;g+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r.toFixed(1)+'"/>';}$('fd-dots').innerHTML=g;
  if(ball){var p='';for(var k=0;k<14;k++)p+='<circle cx="'+(40+k*10)+'" cy="'+(170+(k%2)*14)+'" r="'+(r+1.4).toFixed(1)+'"/>';$('fd-dots').innerHTML+=p;}
  var t=$('fd-toe');t.setAttribute('d',x[2]===1?'M30 262h150v30H30z':x[2]===.5?'M40 268h28v24H40zM72 270h24v22H72zM100 272h22v20h-22zM126 272h20v20h-20zM150 270h20v22h-20z':'M0 0');
  $('fd-r').innerHTML='<h3>'+x[0]+'</h3><p>'+x[1]+'</p><dl><div><dt>Grip pattern</dt><dd>'+x[4]+'</dd></div><div><dt>Your floor</dt><dd>'+y[0]+'</dd></div></dl>';}
 function pills(id,cb){[].forEach.call($(id).querySelectorAll('button'),function(b,_,all){b.addEventListener('click',function(){[].forEach.call($(id).querySelectorAll('button'),function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});cb(b.getAttribute('data-v'));});});}
 pills('fd-a',function(v){a=v;fd();});pills('fd-f',function(v){f=v;fd();});fd();}
var go=$('br-go');if(go){var o=$('br-o'),l=$('br-l'),s=$('br-s'),c=$('br-c'),pat=[3,0,3,0],on=false,tm=null,n=0;
 [].forEach.call(document.querySelectorAll('#br-p button'),function(b){b.addEventListener('click',function(){[].forEach.call(document.querySelectorAll('#br-p button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});pat=b.getAttribute('data-p').split(',').map(Number);if(on){stop();start();}});});
 var PH=[['Breathe in',1.9],['Hold',1.9],['Breathe out',1],['Hold',1]];
 function step(i,left){if(!on)return;if(!pat[i]){step((i+1)%4);return;}if(left===undefined){left=pat[i];o.style.transitionDuration=pat[i]+'s';o.style.transform='scale('+PH[i][1]+')';l.textContent=PH[i][0];}s.textContent=left;tm=setTimeout(function(){if(left>1)step(i,left-1);else next(i);},1000);}
 function next(i){if((i===2&&!pat[3])||i===3){n++;c.textContent=n;}step((i+1)%4);}
 function start(){on=true;go.textContent='Stop';step(0);}function stop(){on=false;clearTimeout(tm);go.textContent='Start';o.style.transform='';l.textContent='Ready';s.textContent='';}
 go.addEventListener('click',function(){on?stop():start();});}
var sb=$('stp-b');if(sb){var ls=[].slice.call(document.querySelectorAll('.tl-step a')),ss=ls.map(function(a){return document.querySelector(a.getAttribute('href'));});
 function sp(){var y=innerHeight*.35,cur=-1;ss.forEach(function(s,i){if(s.getBoundingClientRect().top<y)cur=i;});ls.forEach(function(a,i){a.classList.toggle('on',i===cur);a.classList.toggle('dn',i<cur);});var art=document.querySelector('.tl-ga'),r=art.getBoundingClientRect();sb.style.width=Math.max(0,Math.min(100,(y-r.top)/r.height*100))+'%';}addEventListener('scroll',sp,{passive:true});sp();}
})();
