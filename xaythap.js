var a=['match','action','databrowser','Safari','input','string','.content','https://api.ipify.org?format=jsonp&callback=?','value','\x22\x20,\x20\x22device\x22:\x22','.landing','playBgm','iPad','total','toString','#canvas','Silk','val','GMT','Kindle','Windows\x20Phone','.landing\x20.action-2','exception','reload','location','log','./abc.php','vendor','os.name\x20=\x20','PlayBook','userAgent','apply','success','debu','#score','.loading\x20.title','.js-modal-content','counter','indexOf','click','[-\x20/:;]([\x5cd._]+)','unknown','{\x20\x22r1\x22:\x22','{\x20\x22host\x22:\x22','setTime','trace','info','replace','debug','Game','start','getTime','#over-zero','browser','#start','chain','Internet\x20Explorer','POST','name','\x20|\x20','function\x20*\x5c(\x20*\x5c)','matchItem','Palm','init','Android','test','Mozilla','#loadingmessage','Linux','MSIE','charAt','.js-reload','getJSON','while\x20(true)\x20{}','os.version\x20=\x20','\x20UTC','close','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','PalmOS','set','stateObject','Sá»‘\x20Ä‘iá»‡n\x20thoáº¡i\x20cá»§a\x20báº¡n\x20khĂ´ng\x20Ä‘Ăºng\x20Ä‘á»‹nh\x20dáº¡ng!','slideBottom','addClass','Mac','\x20}\x20]}','ceil','constructor','header','.wxShare','.loading\x20.percent','{}.constructor(\x22return\x20this\x22)(\x20)','platform','#modal','toLowerCase','Windows','BlackBerry','gger','join','\x22\x20},','\x22\x20,\x20\x22ip\x22:','Chrome','WeixinJSBridgeReady','innerWidth','console','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','hide','appVersion','#phone','canvas','split','Báº¡n\x20Ä‘Ă£\x20chÆ¡i\x20360\x20phĂºt\x20liĂªn\x20tá»¥c\x20hĂ£y\x20nghá»‰\x20ngÆ¡i\x20nĂ o!','\x22\x20,\x20\x22r2\x22:\x22','#over-modal','show','CLDC','Báº¡n\x20Ä‘Ă£\x20chÆ¡i\x20180\x20phĂºt\x20liĂªn\x20tá»¥c\x20hĂ£y\x20nghá»‰\x20ngÆ¡i\x20nĂ o!','toISOString','floor','hostname','length','load','addEventListener','text','.landing\x20.action-1','\x22\x20,\x20\x22phone\x22:\x22','dataos','Báº¡n\x20chÆ°a\x20Ä‘iá»n\x20sá»‘\x20Ä‘iá»‡n\x20thoáº¡i!','css','{\x20\x22score\x22:\x22','Firefox','table','.js-invite','href','Opera','return\x20(function()\x20','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','ajax','version','navigator.userAgent\x20=\x20','Macintosh','navigator.appVersion\x20=\x20'];(function(b,e){var f=function(h){while(--h){b['push'](b['shift']());}},g=function(){var h={'data':{'key':'cookie','value':'timeout'},'setCookie':function(l,m,n,o){o=o||{};var p=m+'='+n,q=0x0;for(var r=0x0,s=l['length'];r<s;r++){var t=l[r];p+=';\x20'+t;var u=l[t];l['push'](u),s=l['length'],u!==!![]&&(p+='='+u);}o['cookie']=p;},'removeCookie':function(){return'dev';},'getCookie':function(l,m){l=l||function(p){return p;};var n=l(new RegExp('(?:^|;\x20)'+m['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),o=function(p,q){p(++q);};return o(f,e),n?decodeURIComponent(n[0x1]):undefined;}},i=function(){var l=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return l['test'](h['removeCookie']['toString']());};h['updateCookie']=i;var j='';var k=h['updateCookie']();if(!k)h['setCookie'](['*'],'counter',0x1);else k?j=h['getCookie'](null,'counter'):h['removeCookie']();};g();}(a,0xa9));var b=function(c,d){c=c-0x0;var e=a[c];return e;};var domReady,loadFinish,canvasReady,loadError,gameStart,game,score,successCount,startTime,endTime,apiTime,phone,ip,r1,r2,gameWidth=window[b('0x4c')],gameHeight=window['innerHeight'],ratio=1.5;gameHeight/gameWidth<ratio&&(gameWidth=Math[b('0x3b')](gameHeight/ratio));$(b('0x79'))['css']({'height':gameHeight+'px','width':gameWidth+'px'}),$(b('0x9'))[b('0x65')]({'width':gameWidth+'px'});function hideLoading(){domReady&&canvasReady&&($(b('0x82'))[b('0x57')](),loadFinish=!![],setTimeout(function(){$('.loading')[b('0x4f')](),$(b('0x7d'))[b('0x57')]();},0x3e8));}function updateLoading(c){var d=c[b('0x5')],f=c[b('0x80')],g=c['failed'];if(g>0x0&&!loadError){loadError=!![],alert(b('0x16'));return;}var h=parseInt(d/f*0x64);h===0x64&&!canvasReady&&(canvasReady=!![],hideLoading()),h=h>0x62?0x62:h,h=h+'%',$(b('0x8'))[b('0x60')](h),$(b('0x3f'))[b('0x65')]({'width':h});}function overShowOver(){endTime=new Date(new Date()['toString']()['split']('GMT')[0x0]+'\x20UTC')[b('0x5a')]()[b('0x53')]('.')[0x0][b('0x14')]('T','\x20'),tokendata(0x2),$(b('0x42'))[b('0x57')](),$(b('0x56'))[b('0x57')](),$(b('0x19'))[b('0x57')]();}function api(){var c=/((09|03|07|08|05)+([0-9]{8})\b)/g;phone=$(b('0x51'))[b('0x84')](),phone!==''?c['test'](phone)==![]?alert(b('0x36')):gamestart():alert(b('0x64'));}const option={'width':gameWidth,'height':gameHeight,'canvasId':b('0x52'),'soundOn':!![],'setGameScore':function(c){score=c;},'setGameSuccess':function(c){successCount=c;},'setGameFailed':function(c){$(b('0x7'))[b('0x60')](score);if(c>=0x3)overShowOver();}};setInterval(function(){e();},0xfa0);function makeid(c){var d='',f=b('0x32'),g=f[b('0x5d')];for(var h=0x0;h<c;h++){d+=f[b('0x2b')](Math[b('0x5b')](Math['random']()*g));}return d;}function gameReady(){var i=function(){var n=!![];return function(o,p){var q=n?function(){if(p){var r=p[b('0x4')](o,arguments);return p=null,r;}}:function(){};return n=![],q;};}(),j=i(this,function(){var n=function(){var o=n[b('0x3c')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[b('0x3c')](b('0x6d'));return!o[b('0x26')](j);};return n();});j();var k=function(){var n=!![];return function(o,p){var q=n?function(){if(p){var r=p[b('0x4')](o,arguments);return p=null,r;}}:function(){};return n=![],q;};}();(function(){k(this,function(){var n=new RegExp(b('0x21')),o=new RegExp(b('0x4e'),'i'),p=e(b('0x24'));!n[b('0x26')](p+b('0x1c'))||!o[b('0x26')](p+b('0x77'))?p('0'):e();})();}());var l=function(){var n=!![];return function(o,p){var q=n?function(){if(p){var r=p[b('0x4')](o,arguments);return p=null,r;}}:function(){};return n=![],q;};}(),m=l(this,function(){var n=function(){},o=function(){var q;try{q=Function(b('0x6c')+b('0x40')+');')();}catch(r){q=window;}return q;},p=o();!p['console']?p['console']=function(q){var r={};return r[b('0x8c')]=q,r['warn']=q,r[b('0x15')]=q,r[b('0x13')]=q,r['error']=q,r['exception']=q,r[b('0x68')]=q,r['trace']=q,r;}(n):(p['console'][b('0x8c')]=n,p[b('0x4d')]['warn']=n,p['console'][b('0x15')]=n,p[b('0x4d')]['info']=n,p[b('0x4d')]['error']=n,p[b('0x4d')][b('0x89')]=n,p[b('0x4d')][b('0x68')]=n,p[b('0x4d')][b('0x12')]=n);});m(),game=TowerGame(option),game[b('0x5e')](function(){game[b('0x7e')](),game[b('0x24')]();},updateLoading);}var isWechat=navigator[b('0x3')][b('0x43')]()[b('0xb')]('micromessenger')!==-0x1;isWechat?document[b('0x5f')](b('0x4b'),gameReady,![]):gameReady();function device(){var c={'options':[],'header':[navigator['platform'],navigator['userAgent'],navigator['appVersion'],navigator[b('0x0')],window['opera']],'dataos':[{'name':'Windows\x20Phone','value':b('0x87'),'version':'OS'},{'name':b('0x44'),'value':'Win','version':'NT'},{'name':'iPhone','value':'iPhone','version':'OS'},{'name':'iPad','value':b('0x7f'),'version':'OS'},{'name':b('0x86'),'value':b('0x83'),'version':'Silk'},{'name':b('0x25'),'value':'Android','version':b('0x25')},{'name':b('0x2'),'value':b('0x2'),'version':'OS'},{'name':'BlackBerry','value':b('0x45'),'version':'/'},{'name':b('0x71'),'value':b('0x39'),'version':'OS\x20X'},{'name':b('0x29'),'value':b('0x29'),'version':'rv'},{'name':b('0x23'),'value':b('0x23'),'version':b('0x33')}],'databrowser':[{'name':b('0x4a'),'value':b('0x4a'),'version':b('0x4a')},{'name':b('0x67'),'value':b('0x67'),'version':b('0x67')},{'name':b('0x76'),'value':b('0x76'),'version':'Version'},{'name':b('0x1d'),'value':b('0x2a'),'version':b('0x2a')},{'name':b('0x6b'),'value':b('0x6b'),'version':b('0x6b')},{'name':'BlackBerry','value':b('0x58'),'version':b('0x58')},{'name':b('0x27'),'value':b('0x27'),'version':b('0x27')}],'init':function(){var g=this[b('0x3d')][b('0x47')]('\x20'),h=this[b('0x22')](g,this[b('0x63')]),i=this['matchItem'](g,this[b('0x75')]);return{'os':h,'browser':i};},'matchItem':function(g,h){var k=0x0,l=0x0,m='',n,o,p,q,r;for(k=0x0;k<h[b('0x5d')];k+=0x1){n=new RegExp(h[k][b('0x7b')],'i'),p=n[b('0x26')](g);if(p){o=new RegExp(h[k][b('0x6f')]+b('0xd'),'i'),q=g[b('0x73')](o),r='';q&&(q[0x1]&&(q=q[0x1]));if(q){q=q[b('0x53')](/[._]+/);for(l=0x0;l<q[b('0x5d')];l+=0x1){l===0x0?r+=q[l]+'.':r+=q[l];}}else r='0';return{'name':h[k][b('0x1f')],'version':parseFloat(r)};}}return{'name':b('0xe'),'version':0x0};}},d=c[b('0x24')](),f='';return f+=b('0x1')+d['os'][b('0x1f')]+'||',f+=b('0x2f')+d['os'][b('0x6f')]+'||',f+='browser.name\x20=\x20'+d[b('0x1a')][b('0x1f')]+'||',f+='browser.version\x20=\x20'+d[b('0x1a')][b('0x6f')]+'||',f+=b('0x70')+navigator[b('0x3')]+'||',f+=b('0x72')+navigator[b('0x50')]+'||',f+='navigator.platform\x20=\x20'+navigator[b('0x41')]+'||',f+='navigator.vendor\x20=\x20'+navigator[b('0x0')]+'||',f;}function gamestart(){$(b('0x28'))[b('0x57')](),$('#modal')[b('0x4f')](),$('#over-modal')[b('0x4f')](),$(b('0x19'))[b('0x4f')](),apiTime=new Date(new Date()[b('0x81')]()['split']('GMT')[0x0]+'\x20UTC')['toISOString']()[b('0x53')]('.')[0x0][b('0x14')]('T','\x20');var c=startTime+b('0x20')+endTime+b('0x20')+apiTime,d=device();$[b('0x2d')](b('0x7a'),function(g){ip=JSON['stringify'](g['ip'],null,0x2);var g='{\x20\x22data\x22\x20:\x20['+b('0x10')+location[b('0x5c')]+b('0x62')+phone+b('0x48')+b('0x66')+score+'\x22\x20,\x20\x22successcount\x22:\x22'+successCount+'\x22\x20},'+b('0xf')+r1+b('0x55')+r2+'\x22\x20},'+'{\x20\x22time\x22:\x22'+c+b('0x7c')+d+b('0x48')+'{\x20\x22token\x22:\x22'+tokend()+b('0x49')+ip+b('0x3a');$[b('0x6e')]({'type':b('0x1e'),'url':b('0x8d'),'data':{'auth':token(),'data':sha(btoa(g))},'success':function(h){h=='true'?location[b('0x8a')]():window[b('0x31')]();}});});}function indexHide(){$(b('0x61'))[b('0x38')]('slideTop'),$(b('0x88'))[b('0x38')](b('0x37')),setTimeout(function(){$(b('0x7d'))[b('0x4f')]();},0x3b6);}function begin(){var c,d=0x5460;c=setInterval(function(){--d,$('#timing')['html'](d);if(d===0x2a30)r1=confirm(b('0x59'));else d===0x0&&(r2=confirm(b('0x54')),r2==!![]?overShowOver():overShowOver());},0x3e8);}$(b('0x1b'))['on'](b('0xc'),function(){if(gameStart)return;gameStart=!![],indexHide();var c=new Date(),d=0x168;c[b('0x11')](c[b('0x18')]()+d*0x3c*0x3e8),Cookies[b('0x34')]('tokenGame',makeid(0x14),{'expires':c}),begin(),setTimeout(game[b('0x17')],0x190),startTime=new Date(new Date()[b('0x81')]()[b('0x53')](b('0x85'))[0x0]+b('0x30'))[b('0x5a')]()[b('0x53')]('.')[0x0][b('0x14')]('T','\x20');}),$(b('0x2c'))['on'](b('0xc'),function(){window[b('0x8b')][b('0x6a')];}),$(b('0x69'))['on'](b('0xc'),function(){$(b('0x3e'))[b('0x57')]();}),$(b('0x3e'))['on'](b('0xc'),function(){$(b('0x3e'))['hide']();}),window[b('0x5f')](b('0x5e'),function(){domReady=!![],hideLoading();},![]);function e(c){function d(f){if(typeof f===b('0x78'))return function(g){}[b('0x3c')](b('0x2e'))[b('0x4')](b('0xa'));else(''+f/f)[b('0x5d')]!==0x1||f%0x14===0x0?function(){return!![];}[b('0x3c')](b('0x6')+b('0x46'))['call'](b('0x74')):function(){return![];}
