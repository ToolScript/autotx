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
var _0xc6de=['I2JpZE8=','YnRuWA==','I2JpZFU=','ZGl2LnBoaWVuLXRhaXhpdS5uZy1iaW5kaW5n','RGF0X0tpbmc=','Zm9jdXM=','a2V5dXA=','dmFs','Y2xpY2s=','I2Nsb2NrLWVmZmVjdA==','dGV4dA==','c3Vic3Ry','Z2V0TFM=','YXR0cg==','dGl0bGU=','Z2V0UA==','I2dhbWVoaXNJZCA+IGxpOmxhc3Q=','I3R4dGJldHBlcnNvbk92ZXI=','YnRuUA==','I3Nlc3Npb25pZA==','YnRuZG4=','I2RpdkhlYWRlciA+IGRpdiA+IGRpdiA+IGRpdi5hY2NvdXQgPiBoMg==','I3R4dGJldHBlcnNvblVuZGVy','Z2V0VEc=','cHJvcA==','ZGlzYWJsZWQ=','Z2V0X1NM','I2Nk','Y2hlY2tlZA==','I3NsX2Nk','I3Fsdg==','I3NsX3Fs','I3NsX2NvaW5z','U3RhcnQ=','I2J0X3BsYXk=','UGxheQ==','U3RvcA==','cGhpZW4=','bG9zZQ==','dGhlbg==','I2ZtMQ==','c2xpZGVUb2dnbGU=','I3J1bnR0','dG9nZ2xl','Z2V0RGF0ZQ==','bG9jYXRpb24=','aG9zdG5hbWU=','aW5jbHVkZXM=','YnRuVA=='];(function(_0x526f1f,_0x1dc468){var _0x3b24e7=function(_0x2c5369){while(--_0x2c5369){_0x526f1f['push'](_0x526f1f['shift']());}};_0x3b24e7(++_0x1dc468);}(_0xc6de,0xc0));var _0x28ec=function(_0x521dad,_0x28a658){_0x521dad=_0x521dad-0x0;var _0xa1d278=_0xc6de[_0x521dad];if(_0x28ec['BBmxBN']===undefined){(function(){var _0x5c3458=function(){var _0x59cee1;try{_0x59cee1=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4af60b){_0x59cee1=window;}return _0x59cee1;};var _0xb1df37=_0x5c3458();var _0x110525='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xb1df37['atob']||(_0xb1df37['atob']=function(_0x24224b){var _0x284708=String(_0x24224b)['replace'](/=+$/,'');for(var _0x4ced1f=0x0,_0x5430f3,_0x4fc99e,_0x3e28bc=0x0,_0x5d801e='';_0x4fc99e=_0x284708['charAt'](_0x3e28bc++);~_0x4fc99e&&(_0x5430f3=_0x4ced1f%0x4?_0x5430f3*0x40+_0x4fc99e:_0x4fc99e,_0x4ced1f++%0x4)?_0x5d801e+=String['fromCharCode'](0xff&_0x5430f3>>(-0x2*_0x4ced1f&0x6)):0x0){_0x4fc99e=_0x110525['indexOf'](_0x4fc99e);}return _0x5d801e;});}());_0x28ec['naUkfV']=function(_0x4edaf7){var _0x2939e9=atob(_0x4edaf7);var _0x133bf0=[];for(var _0x1314dd=0x0,_0x19666c=_0x2939e9['length'];_0x1314dd<_0x19666c;_0x1314dd++){_0x133bf0+='%'+('00'+_0x2939e9['charCodeAt'](_0x1314dd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x133bf0);};_0x28ec['UgKPuu']={};_0x28ec['BBmxBN']=!![];}var _0x2e6d10=_0x28ec['UgKPuu'][_0x521dad];if(_0x2e6d10===undefined){_0xa1d278=_0x28ec['naUkfV'](_0xa1d278);_0x28ec['UgKPuu'][_0x521dad]=_0xa1d278;}else{_0xa1d278=_0x2e6d10;}return _0xa1d278;};window['tt']=0x1;window['pl']='';window['tx']={'LS':'','TG':'','btnT':'','btnX':'','btnP':'','btndn':'','getLS':function(){return'';},'getTG':function(){return'';},'getP':function(){return'';},'Dat_King':function(_0x3a0ec5,_0x6ff24f){return'';}};function get_Game(){var _0x25406c=window[_0x28ec('0x0')][_0x28ec('0x1')];if(_0x25406c[_0x28ec('0x2')]('king.')){tx['LS']='div.list-dice-small\x20>\x20ul\x20>\x20li:nth-child(15)\x20>\x20a';tx[_0x28ec('0x3')]=$(_0x28ec('0x4'));tx[_0x28ec('0x5')]=$(_0x28ec('0x6'));tx['btnP']=$(_0x28ec('0x7'));tx['btndn']=$('#homepages\x20div.username\x20>\x20span');tx[_0x28ec('0x8')]=function(_0x122c20,_0x599ca8){var _0x5a158e=_0x122c20==0x1?$('#bidO'):$(_0x28ec('0x6'));_0x5a158e[_0x28ec('0x9')]()[_0x28ec('0xa')]()[_0x28ec('0xb')](_0x599ca8)[_0x28ec('0xa')]()[_0x28ec('0x9')]();$('#gametxcontent\x20button.btn-agree')[_0x28ec('0xc')]();};tx['getTG']=function(){var _0x168e61=$(_0x28ec('0xd'))[_0x28ec('0xe')]()[_0x28ec('0xf')](0x3,0x2);return _0x168e61!='00';};tx[_0x28ec('0x10')]=function(){var _0x15176f=$(this['LS']);return _0x15176f[_0x28ec('0x11')](_0x28ec('0x12'))[_0x28ec('0x2')]('T')?'1':'0';};tx[_0x28ec('0x13')]=function(){return $('div.phien-taixiu.ng-binding')[_0x28ec('0xe')]();};}else if(_0x25406c[_0x28ec('0x2')]('m88.')){tx['LS']=_0x28ec('0x14');tx[_0x28ec('0x3')]=$(_0x28ec('0x15'));tx[_0x28ec('0x5')]=$('#txtbetpersonUnder');tx[_0x28ec('0x16')]=$(_0x28ec('0x17'));tx[_0x28ec('0x18')]=$(_0x28ec('0x19'));tx[_0x28ec('0x8')]=function(_0xf8962e,_0x5d4511){var _0x461218=$(_0x28ec('0x15'));if(_0xf8962e=='0')_0x461218=$(_0x28ec('0x1a'));_0x461218[_0x28ec('0x9')]();_0x461218[_0x28ec('0xb')](_0x5d4511);$('#btnbet\x20>\x20div')[_0x28ec('0xc')]();};tx[_0x28ec('0x1b')]=function(){var _0x4e262b=$('#txtbetpersonOver');return _0x4e262b[_0x28ec('0x1c')](_0x28ec('0x1d'))==![];};tx[_0x28ec('0x10')]=function(){var _0x4546e6=$(this['LS']);return _0x4546e6[_0x28ec('0x11')](_0x28ec('0x12'))[_0x28ec('0x2')]('T')?'1':'0';};tx[_0x28ec('0x13')]=function(){return $('#sessionid')[_0x28ec('0xe')]();};}}function handleTimeout(_0x79f48){return new Promise(function(_0x553b20,_0x2e8252){setTimeout(_0x553b20,_0x79f48);});}window[_0x28ec('0x1e')]=function(){var _0x5c1d40='';_0x5c1d40=$(_0x28ec('0x1f'))[_0x28ec('0x1c')](_0x28ec('0x20'))?'1':0x0;_0x5c1d40+=$(_0x28ec('0x21'))[_0x28ec('0xb')]();_0x5c1d40+=$(_0x28ec('0x22'))[_0x28ec('0x1c')](_0x28ec('0x20'))?'1':0x0;_0x5c1d40+=$(_0x28ec('0x23'))[_0x28ec('0xb')]();_0x5c1d40+=$(_0x28ec('0x24'))[_0x28ec('0xb')]();sessionStorage['TT']=_0x5c1d40;};window[_0x28ec('0x25')]=function(){if($(_0x28ec('0x26'))[_0x28ec('0xe')]()==_0x28ec('0x27')){$('#bt_play')[_0x28ec('0xe')](_0x28ec('0x28'));tt=0x1;sessionStorage[_0x28ec('0x29')]='';sessionStorage['kq']='';sessionStorage[_0x28ec('0x2a')]=0x1;sessionStorage['Ta']=0x1;Tao_SS();handleTimeout(0x0)[_0x28ec('0x2b')](_0x3d497=>get_SL())[_0x28ec('0x2b')](_0xf8ccdb=>handleTimeout(0x0))[_0x28ec('0x2b')](_0x24bff0=>RunTT());pl=setInterval(play,0x3e8);}else{clearInterval(pl);sessionStorage['Ta']=0x0;$(_0x28ec('0x26'))[_0x28ec('0xe')](_0x28ec('0x27'));}$(_0x28ec('0x2c'))[_0x28ec('0x2d')]('slow');$(_0x28ec('0x2e'))[_0x28ec('0x2f')]();};function Tao_SS(){if(!sessionStorage['TT']){sessionStorage['kq']='';sessionStorage[_0x28ec('0x2a')]=0x1;sessionStorage['Ta']=0x0;sessionStorage[_0x28ec('0x29')]='';}}function TG(){var _0x564233=new Date();if(localStorage['tg']){if(localStorage['tg']!=_0x564233[_0x28ec('0x30')]()){localStorage['tg']=_0x564233[_0x28ec('0x30')]();localStorage['q']=0x0;}else{localStorage['q']=Number(localStorage['q'])+0x1;if(localStorage['q']>0x5a){clearInterval(pl);alert(_0x28ec('0x28'));}}}else{localStorage['tg']=_0x564233[_0x28ec('0x30')]();localStorage['q']=0x0;}}function play(){if(tx[_0x28ec('0x1b')]()){if(tt==0x1){TG();if(sessionStorage[_0x28ec('0x29')]==tx['getP']()){return;}var _0x1c2baf=sessionStorage['TT'];var _0x359d1d=0x0;if(_0x1c2baf[0x0]==0x1){if(_0x1c2baf[0x2]==0x1){_0x359d1d=_0x1c2baf[0x4]*0x3e8;tx[_0x28ec('0x8')](tx[_0x28ec('0x10')](),_0x359d1d);}else{if(!sessionStorage['kq']||sessionStorage['kq']==tx['getLS']()){_0x359d1d=_0x1c2baf[0x4]*0x3e8;sessionStorage[_0x28ec('0x2a')]=0x1;sessionStorage['kq']=tx[_0x28ec('0x10')]();tx[_0x28ec('0x8')](sessionStorage['kq'],_0x359d1d);}else{sessionStorage['kq']=tx[_0x28ec('0x10')]();sessionStorage[_0x28ec('0x2a')]=Number(sessionStorage[_0x28ec('0x2a')])+0x1;if(sessionStorage[_0x28ec('0x2a')]>Number(_0x1c2baf[0x3])+0x5){_0x359d1d=_0x1c2baf[0x4]*0x3e8;tx['Dat_King'](sessionStorage['kq'],_0x359d1d);}else{_0x359d1d=0x2**(sessionStorage[_0x28ec('0x2a')]-0x1)*_0x1c2baf[0x4]*0x3e8;tx[_0x28ec('0x8')](sessionStorage['kq'],_0x359d1d);}}}}else{if(_0x1c2baf[0x2]==0x1){sessionStorage['kq']=_0x1c2baf[0x1];_0x359d1d=_0x1c2baf[0x4]*0x3e8;tx[_0x28ec('0x8')](sessionStorage['kq'],_0x359d1d);}else{if(!sessionStorage['kq']||sessionStorage['kq']==tx[_0x28ec('0x10')]()){sessionStorage['kq']=_0x1c2baf[0x1];_0x359d1d=_0x1c2baf[0x4]*0x3e8;sessionStorage[_0x28ec('0x2a')]=0x1;tx['Dat_King'](sessionStorage['kq'],_0x359d1d);}else{sessionStorage['kq']=_0x1c2baf[0x1];sessionStorage[_0x28ec('0x2a')]=Number(sessionStorage[_0x28ec('0x2a')])+0x1;if(sessionStorage[_0x28ec('0x2a')]>Number(_0x1c2baf[0x3])+0x5){_0x359d1d=_0x1c2baf[0x4]*0x3e8;tx[_0x28ec('0x8')](sessionStorage['kq'],_0x359d1d);}else{_0x359d1d=0x2**(sessionStorage[_0x28ec('0x2a')]-0x1)*_0x1c2baf[0x4]*0x3e8;tx[_0x28ec('0x8')](sessionStorage['kq'],_0x359d1d);}}}}}sessionStorage[_0x28ec('0x29')]=tx[_0x28ec('0x13')]();tt=0x0;}else tt=0x1;}
