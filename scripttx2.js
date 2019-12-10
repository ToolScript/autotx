function Show()
{
    $('body').append(`<div id='show_tt'  style='
		  top: 60px;
		  left: 0;
		  width:300px;
		  height:auto;
          z-index: 999999;
          position: fixed;
		  background-color: #A9A9A9;
		  border: 3px solid white;'><form  style=" border: 1px solid black;">
         <h2 style="text-align: center;" >Auto Script Tài Xủi</h2>
    <div id='fm1'> <fieldset style=" margin: 10px;">
   <legend>Cách đánh:</legend>
   <input type="radio" id='cd' name="btncd" value="0" checked > Ra gì đánh đó<br>
   <input type="radio" name="btncd" value="1" >Cố định
   <select id="sl_cd">
    <option value="0">Xủi</option>
    <option value="1">Tài</option>
  </select><br>
</fieldset>
<fieldset style=" margin: 10px;">
 <legend>Quản lý vốn:</legend>
   <input type="radio" id='qlv' name="btnv" value="0" checked > Cố định<br>
   <input type="radio" name="btnv" value="1" >Gấp thép tối đa
     <select id="sl_ql">
    <option value="0">5 lần</option>
    <option value="1">6 lần</option>
    <option value="2">7 lần</option>
    <option value="3">8 lần</option>
  </select><br>
</fieldset>
<fieldset style=" margin: 10px;">
  <legend>Chơi Game TX:</legend>
  Coin: <select id="sl_coins">
    <option value="1">1000</option>
    <option value="2">2000</option>
    <option value="3">3000</option>
    <option value="4">4000</option>
    <option value="5">5000</option>
  </select>
</fieldset></div>
</form>  <button id='bt_play' style="width: 50px;height:  50px;margin-left: 50px; background:#ff0000;margin-left: 120px;" type="button" onclick="Start()">Play</button>
<div id='runtt' style='display:none;'>jjjj</div></div>
`)
}
function RunTT()
{
    var cd='',von='';
    var s=sessionStorage.TT;
     if(s==undefined)
         return;
    else
    {
        if(s[0]==1)
          cd='Ra gì đánh đó';
        else
            cd=(s[1]=='0')?'Cố định Xủi':'Cố định Tài';
        if(s[2]==1)
          von='Cố định';
        else
            von ='Gấp thép tối đa '+(Number(s[3])+5)+' lần';
        var c=s[4]*1000;
    }
    var htm=`<h2 style="color: red">TOOL ĐANG CHẠY </h2><br>
	CÁCH ĐÁNH: ${cd}<br>
    QUẢN LÝ VỐN: ${von}</br>
    COIN: ${c}`;
   $('#runtt').html(htm);
}
var a=['I2JpZFU=','ZGl2LnBoaWVuLXRhaXhpdS5uZy1iaW5kaW5n','YnRuZG4=','I2hvbWVwYWdlcyBkaXYudXNlcm5hbWUgPiBzcGFu','RGF0X0tpbmc=','Zm9jdXM=','a2V5dXA=','dmFs','Y2xpY2s=','c3Vic3Ry','YXR0cg==','dGl0bGU=','Z2V0UA==','dGV4dA==','I2dhbWVoaXNJZCA+IGxpOmxhc3Q=','I3R4dGJldHBlcnNvbk92ZXI=','YnRuWA==','YnRuUA==','I3Nlc3Npb25pZA==','I2RpdkhlYWRlciA+IGRpdiA+IGRpdiA+IGRpdi5hY2NvdXQgPiBoMg==','I3R4dGJldHBlcnNvblVuZGVy','Z2V0VEc=','cHJvcA==','ZGlzYWJsZWQ=','Z2V0X1NM','I2Nk','I3NsX2Nk','I3Fsdg==','Y2hlY2tlZA==','I3NsX3Fs','I3NsX2NvaW5z','U3RhcnQ=','I2J0X3BsYXk=','UGxheQ==','U3RvcA==','cGhpZW4=','dGhlbg==','I2ZtMQ==','I3J1bnR0','dG9nZ2xl','bG9zZQ==','Z2V0RGF0ZQ==','Z2V0TFM=','aG9zdG5hbWU=','c2xpZGVUb2dnbGU=','bG9jYXRpb24=','aW5jbHVkZXM=','a2luZy4=','ZGl2Lmxpc3QtZGljZS1zbWFsbCA+IHVsID4gbGk6bnRoLWNoaWxkKDE1KSA+IGE=','YnRuVA==','I2JpZE8='];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0xc6));var b=function(c,d){c=c-0x0;var e=a[c];if(b['zBrLWt']===undefined){(function(){var f=function(){var g;try{g=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(h){g=window;}return g;};var i=f();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');for(var m=0x0,n,o,p=0x0,q='';o=l['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?q+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=j['indexOf'](o);}return q;});}());b['ASdbZL']=function(r){var s=atob(r);var t=[];for(var u=0x0,v=s['length'];u<v;u++){t+='%'+('00'+s['charCodeAt'](u)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(t);};b['tRvXMH']={};b['zBrLWt']=!![];}var w=b['tRvXMH'][c];if(w===undefined){e=b['ASdbZL'](e);b['tRvXMH'][c]=e;}else{e=w;}return e;};window['tt']=0x1;window['pl']='';window['tx']={'LS':'','TG':'','btnT':'','btnX':'','btnP':'','btndn':'','getLS':function(){return'';},'getTG':function(){return'';},'getP':function(){return'';},'Dat_King':function(c,d){return'';}};function get_Game(){var e=window[b('0x0')]['hostname'];if(e[b('0x1')](b('0x2'))){tx['LS']=b('0x3');tx[b('0x4')]=$(b('0x5'));tx['btnX']=$(b('0x6'));tx['btnP']=$(b('0x7'));tx[b('0x8')]=$(b('0x9'));tx[b('0xa')]=function(f,g){var h=f==0x1?$(b('0x5')):$(b('0x6'));h[b('0xb')]()[b('0xc')]()[b('0xd')](g)[b('0xc')]()[b('0xb')]();$('#gametxcontent\x20button.btn-agree')[b('0xe')]();};tx['getTG']=function(){var i=$('#clock-effect')['text']()[b('0xf')](0x3,0x2);return i!='00';};tx['getLS']=function(){var j=$(this['LS']);return j[b('0x10')](b('0x11'))['includes']('T')?'1':'0';};tx[b('0x12')]=function(){return $(b('0x7'))[b('0x13')]();};}else if(e[b('0x1')]('m88.')){tx['LS']=b('0x14');tx[b('0x4')]=$(b('0x15'));tx[b('0x16')]=$('#txtbetpersonUnder');tx[b('0x17')]=$(b('0x18'));tx[b('0x8')]=$(b('0x19'));tx[b('0xa')]=function(k,l){var m=$(b('0x15'));if(k=='0')m=$(b('0x1a'));m[b('0xb')]();m[b('0xd')](l);$('#btnbet\x20>\x20div')[b('0xe')]();};tx[b('0x1b')]=function(){var n=$(b('0x15'));return n[b('0x1c')](b('0x1d'))==![];};tx['getLS']=function(){var o=$(this['LS']);return o[b('0x10')](b('0x11'))[b('0x1')]('T')?'1':'0';};tx[b('0x12')]=function(){return $(b('0x18'))[b('0x13')]();};}}function handleTimeout(p){return new Promise(function(r,s){setTimeout(r,p);});}window[b('0x1e')]=function(){var t='';t=$(b('0x1f'))['prop']('checked')?'1':0x0;t+=$(b('0x20'))['val']();t+=$(b('0x21'))['prop'](b('0x22'))?'1':0x0;t+=$(b('0x23'))[b('0xd')]();t+=$(b('0x24'))[b('0xd')]();sessionStorage['TT']=t;};window[b('0x25')]=function(){if($(b('0x26'))[b('0x13')]()==b('0x27')){$(b('0x26'))[b('0x13')](b('0x28'));tt=0x1;sessionStorage[b('0x29')]='';sessionStorage['kq']='';sessionStorage['lose']=0x1;sessionStorage['Ta']=0x1;Tao_SS();handleTimeout(0x0)['then'](u=>get_SL())[b('0x2a')](v=>handleTimeout(0x0))[b('0x2a')](w=>RunTT());pl=setInterval(play,0x3e8);}else{clearInterval(pl);sessionStorage['Ta']=0x0;$(b('0x26'))[b('0x13')](b('0x27'));}$(b('0x2b'))['slideToggle']('slow');$(b('0x2c'))[b('0x2d')]();};function Tao_SS(){if(!sessionStorage['TT']){sessionStorage['kq']='';sessionStorage[b('0x2e')]=0x1;sessionStorage['Ta']=0x0;sessionStorage[b('0x29')]='';}}function TG(){var x=new Date();if(localStorage['tg']){if(localStorage['tg']!=x[b('0x2f')]()){localStorage['tg']=x[b('0x2f')]();localStorage['q']=0x0;}else{localStorage['q']=Number(localStorage['q'])+0x1;if(localStorage['q']>0x5a){clearInterval(pl);alert(b('0x28'));}}}else{localStorage['tg']=x[b('0x2f')]();localStorage['q']=0x0;}}function play(){if(tx['getTG']()){if(tt==0x1){TG();if(sessionStorage[b('0x29')]==tx[b('0x12')]()){return;}var y=sessionStorage['TT'];var z=0x0;if(y[0x0]==0x1){if(y[0x2]==0x1){z=y[0x4]*0x3e8;tx[b('0xa')](tx[b('0x30')](),z);}else{if(!sessionStorage['kq']||sessionStorage['kq']==tx['getLS']()){z=y[0x4]*0x3e8;sessionStorage[b('0x2e')]=0x1;sessionStorage['kq']=tx['getLS']();tx[b('0xa')](sessionStorage['kq'],z);}else{sessionStorage['kq']=tx[b('0x30')]();sessionStorage[b('0x2e')]=Number(sessionStorage[b('0x2e')])+0x1;if(sessionStorage[b('0x2e')]>Number(y[0x3])+0x5){z=y[0x4]*0x3e8;tx[b('0xa')](sessionStorage['kq'],z);}else{z=0x2**(sessionStorage['lose']-0x1)*y[0x4]*0x3e8;tx['Dat_King'](sessionStorage['kq'],z);}}}}else{if(y[0x2]==0x1){sessionStorage['kq']=y[0x1];z=y[0x4]*0x3e8;tx['Dat_King'](sessionStorage['kq'],z);}else{if(!sessionStorage['kq']||sessionStorage['kq']==tx[b('0x30')]()){sessionStorage['kq']=y[0x1];z=y[0x4]*0x3e8;sessionStorage[b('0x2e')]=0x1;tx[b('0xa')](sessionStorage['kq'],z);}else{sessionStorage['kq']=y[0x1];sessionStorage[b('0x2e')]=Number(sessionStorage[b('0x2e')])+0x1;if(sessionStorage[b('0x2e')]>Number(y[0x3])+0x5){z=y[0x4]*0x3e8;tx['Dat_King'](sessionStorage['kq'],z);}else{z=0x2**(sessionStorage[b('0x2e')]-0x1)*y[0x4]*0x3e8;tx[b('0xa')](sessionStorage['kq'],z);}}}}}sessionStorage[b('0x29')]=tx[b('0x12')]();tt=0x0;}else tt=0x1;}(function(){'use strict';function A(){$(document)['ready'](function(){var B=window[b('0x0')][b('0x31')];var C='';if(B[b('0x1')](b('0x2')))C=$(b('0x9'));else C=$(b('0x19'))[b('0x13')]();if(C!=''){get_Game();Show();RunTT();if(sessionStorage['Ta']==0x1){$(b('0x26'))[b('0x13')](b('0x28'));$(b('0x2b'))[b('0x32')]('slow');$(b('0x2c'))[b('0x2d')]();pl=setInterval(play,0x3e8);}}});}setTimeout(A,0x7d0);}());
