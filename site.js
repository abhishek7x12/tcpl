(function(){var m=document.getElementById('lit');if(!m)return;var S=29.530588,a=((Date.now()/864e5-10962.76)%S+S)%S,p=a/S,k=Math.cos(2*Math.PI*p),rx=Math.abs(k)*48,w=p<.5,s2=w?(k>0?0:1):(k>0?1:0);m.setAttribute('d','M50 2A48 48 0 0 '+(w?1:0)+' 50 98A'+rx.toFixed(2)+' 48 0 0 '+s2+' 50 2Z');var t=document.getElementById('moonTxt');if(t)t.textContent='Moon tonight: about '+Math.round((1-k)/2*100)+'% lit, '+(w?'waxing':'waning');})();
(function(){var v=document.getElementById('weave');if(!v)return;var N='http://www.w3.org/2000/svg',P=Math.PI;
function E(n,a,p){var e=document.createElementNS(N,n);for(var k in a)e.setAttribute(k,a[k]);(p||v).appendChild(e);return e}
var R1=250,R2=150,R3=70,o=[],q=[],k,t;
for(k=0;k<27;k++){t=k/27*2*P-P/2;o.push([R1*Math.cos(t),R1*Math.sin(t)])}
for(k=0;k<12;k++){t=k/12*2*P-P/2+.13;q.push([R2*Math.cos(t),R2*Math.sin(t)])}
E('circle',{r:R1,class:'w-ring'});E('circle',{r:R2,class:'w-ring'});E('circle',{r:R3,class:'w-ring dash'});
function L(a,b,c,d){var m=.3,x=(a+c)/2*m,y=(b+d)/2*m;E('path',{d:'M'+a.toFixed(1)+' '+b.toFixed(1)+'Q'+x.toFixed(1)+' '+y.toFixed(1)+' '+c.toFixed(1)+' '+d.toFixed(1),pathLength:1,class:'w-th',style:'--d:'+(Math.random()*1.6).toFixed(2)+'s'})}
for(k=0;k<27;k++){var b=o[(k+10)%27];L(o[k][0],o[k][1],b[0],b[1])}
for(k=0;k<12;k++){var c=q[(k+5)%12];L(q[k][0],q[k][1],c[0],c[1]);v.lastChild.setAttribute('class','w-th g')}
for(k=0;k<27;k++){E('circle',{cx:o[k][0],cy:o[k][1],r:12,class:'w-h',style:'--d:'+(k*.17).toFixed(2)+'s'});E('circle',{cx:o[k][0],cy:o[k][1],r:4.5,class:'w-n'})}
for(k=0;k<12;k++)E('circle',{cx:q[k][0],cy:q[k][1],r:6,class:'w-n g'});
var s=E('g',{class:'w-spin'});E('circle',{cx:R1,r:14,fill:'#E8B95F',opacity:.3},s);E('circle',{cx:R1,r:5,fill:'#E8B95F'},s);
s=E('g',{class:'w-spin b'});E('circle',{cx:R2,r:11,fill:'#E8B95F',opacity:.3},s);E('circle',{cx:R2,r:4,fill:'#E8B95F'},s);
var g=E('g',{class:'w-lotus'});for(k=0;k<8;k++)E('ellipse',{cy:-30,rx:11,ry:28,transform:'rotate('+k*45+')'},g);E('circle',{r:5,fill:'#E8B95F'});
[4,13,22].forEach(function(i,n){var a=i/27*2*P-P/2,h=E('g',{transform:'translate('+(284*Math.cos(a)).toFixed(1)+' '+(284*Math.sin(a)).toFixed(1)+')'}),u=E('g',{class:'bob',style:'--d:'+n*1.3+'s'},h);
E('path',{class:'w-bub',d:'M-14-18h28a6 6 0 0 1 6 6v12a6 6 0 0 1-6 6h-12l-8 8v-8h-8a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6z'},u);[-8,0,8].forEach(function(x){E('circle',{cx:x,cy:-6,r:2,fill:'#E8B95F'},u)})});
})();
document.querySelectorAll('.tile,.gc').forEach(function(t){t.addEventListener('pointermove',function(e){var r=t.getBoundingClientRect();t.style.setProperty('--mx',(e.clientX-r.left)+'px');t.style.setProperty('--my',(e.clientY-r.top)+'px')})});
(function(){var f=document.querySelector('footer.site');if(!f)return;function s(){document.documentElement.style.setProperty('--foot-h',f.offsetHeight+'px')}s();addEventListener('resize',s);addEventListener('load',s);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(s)})();
(function(){var n=document.getElementById('nav');if(!n)return;var L=[].slice.call(n.querySelectorAll('a:not(.btn)')),a=n.querySelector('a[aria-current]');if(!a)return;
function put(e){n.style.setProperty('--px',e.offsetLeft+'px');n.style.setProperty('--py',e.offsetTop+'px');n.style.setProperty('--pw',e.offsetWidth+'px');n.style.setProperty('--ph',e.offsetHeight+'px')}
function fit(){n.classList.remove('on');put(a);void n.offsetWidth;n.classList.add('on')}
var i=L.indexOf(a),p=null;try{p=sessionStorage.getItem('navIdx')}catch(e){}p=p===null?null:L[+p];
if(p&&p!==a&&n.offsetWidth){put(p);void n.offsetWidth;n.classList.add('on');put(a)}else fit();
try{sessionStorage.setItem('navIdx',i)}catch(e){}
L.forEach(function(e){e.addEventListener('click',function(){if(n.offsetWidth&&n.classList.contains('on'))put(e)})});
var t;addEventListener('resize',function(){cancelAnimationFrame(t);t=requestAnimationFrame(fit)});
function again(){put(a)}addEventListener('load',again);document.fonts&&document.fonts.ready.then(again);
var m=document.querySelector('.menu');m&&m.addEventListener('click',function(){requestAnimationFrame(fit)});
})();
(function(){var f=document.getElementById('jf');if(!f)return;
document.querySelectorAll('a[data-cat]').forEach(function(a){a.addEventListener('click',function(){var r=f.querySelector('input[name=cat][value="'+a.getAttribute('data-cat')+'"]');if(r)r.checked=true})});
f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),c=f.querySelector('input[name=cat]:checked'),k=c?c.parentNode.textContent.trim():'';
var L=[['Category',k],['Full name',d.get('name')],['Organization',d.get('org')],['Email',d.get('email')],['Phone',d.get('phone')],['Area of interest',d.get('area')],['Link',d.get('url')],['Introduction',d.get('intro')],['Message',d.get('msg')]];
var b=L.filter(function(x){return x[1]}).map(function(x){return x[0]+': '+x[1]}).join('\n');
location.href='mailto:trovatoindia@protonmail.com?subject='+encodeURIComponent('[Join Our Journey] '+k+' - '+d.get('name'))+'&body='+encodeURIComponent(b)})})();
