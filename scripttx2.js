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
var _0x5b17=['location','hostname','includes','king.','btnT','#bidO','btnP','div.phien-taixiu.ng-binding','btndn','#homepages\x20div.username\x20>\x20span','Dat_King','val','#gametxcontent\x20button.btn-agree','click','getTG','#clock-effect','substr','getLS','attr','title','getP','text','m88.','#gamehisId\x20>\x20li:last','#txtbetpersonOver','btnX','#sessionid','#divHeader\x20>\x20div\x20>\x20div\x20>\x20div.accout\x20>\x20h2','#txtbetpersonUnder','focus','#btnbet\x20>\x20div','disabled','get_SL','checked','#sl_cd','#qlv','prop','#sl_coins','#bt_play','Play','Stop','phien','lose','then','#fm1','slideToggle','slow','#runtt','toggle','getDate','ready'];var _0x3833=function(_0xb1a9f9,_0x4e416a){_0xb1a9f9=_0xb1a9f9-0x0;var _0x3cb914=_0x5b17[_0xb1a9f9];return _0x3cb914;};window['tt']=0x1;window['pl']='';window['tx']={'LS':'','TG':'','btnT':'','btnX':'','btnP':'','btndn':'','getLS':function(){return'';},'getTG':function(){return'';},'getP':function(){return'';},'Dat_King':function(_0x489419,_0x4cdbc2){return'';}};function get_Game(){var _0x322a2b=window[_0x3833('0x0')][_0x3833('0x1')];if(_0x322a2b[_0x3833('0x2')](_0x3833('0x3'))){tx['LS']='div.list-dice-small\x20>\x20ul\x20>\x20li:nth-child(15)\x20>\x20a';tx[_0x3833('0x4')]=$(_0x3833('0x5'));tx['btnX']=$('#bidU');tx[_0x3833('0x6')]=$(_0x3833('0x7'));tx[_0x3833('0x8')]=$(_0x3833('0x9'));tx[_0x3833('0xa')]=function(_0x1b9949,_0x3b09ba){var _0x1e2c54=_0x1b9949==0x1?$(_0x3833('0x5')):$('#bidU');_0x1e2c54['focus']()['keyup']()[_0x3833('0xb')](_0x3b09ba)['keyup']()['focus']();$(_0x3833('0xc'))[_0x3833('0xd')]();};tx[_0x3833('0xe')]=function(){var _0x290af1=$(_0x3833('0xf'))['text']()[_0x3833('0x10')](0x3,0x2);return _0x290af1!='00';};tx[_0x3833('0x11')]=function(){var _0x8407f9=$(this['LS']);return _0x8407f9[_0x3833('0x12')](_0x3833('0x13'))['includes']('T')?'1':'0';};tx[_0x3833('0x14')]=function(){return $(_0x3833('0x7'))[_0x3833('0x15')]();};}else if(_0x322a2b[_0x3833('0x2')](_0x3833('0x16'))){tx['LS']=_0x3833('0x17');tx['btnT']=$(_0x3833('0x18'));tx[_0x3833('0x19')]=$('#txtbetpersonUnder');tx[_0x3833('0x6')]=$(_0x3833('0x1a'));tx[_0x3833('0x8')]=$(_0x3833('0x1b'));tx['Dat_King']=function(_0x56f3f6,_0x4f47ae){var _0x2a141f=$('#txtbetpersonOver');if(_0x56f3f6=='0')_0x2a141f=$(_0x3833('0x1c'));_0x2a141f[_0x3833('0x1d')]();_0x2a141f[_0x3833('0xb')](_0x4f47ae);$(_0x3833('0x1e'))[_0x3833('0xd')]();};tx[_0x3833('0xe')]=function(){var _0x3ca272=$('#txtbetpersonOver');return _0x3ca272['prop'](_0x3833('0x1f'))==![];};tx[_0x3833('0x11')]=function(){var _0x53a78f=$(this['LS']);return _0x53a78f['attr']('title')['includes']('T')?'1':'0';};tx[_0x3833('0x14')]=function(){return $(_0x3833('0x1a'))['text']();};}}function handleTimeout(_0x247964){return new Promise(function(_0x388c18,_0x4bb496){setTimeout(_0x388c18,_0x247964);});}window[_0x3833('0x20')]=function(){var _0xd40513='';_0xd40513=$('#cd')['prop'](_0x3833('0x21'))?'1':0x0;_0xd40513+=$(_0x3833('0x22'))[_0x3833('0xb')]();_0xd40513+=$(_0x3833('0x23'))[_0x3833('0x24')](_0x3833('0x21'))?'1':0x0;_0xd40513+=$('#sl_ql')[_0x3833('0xb')]();_0xd40513+=$(_0x3833('0x25'))[_0x3833('0xb')]();sessionStorage['TT']=_0xd40513;};window['Start']=function(){if($(_0x3833('0x26'))[_0x3833('0x15')]()==_0x3833('0x27')){$(_0x3833('0x26'))[_0x3833('0x15')](_0x3833('0x28'));tt=0x1;sessionStorage[_0x3833('0x29')]='';sessionStorage['kq']='';sessionStorage[_0x3833('0x2a')]=0x1;sessionStorage['Ta']=0x1;Tao_SS();handleTimeout(0x0)[_0x3833('0x2b')](_0x36f54b=>get_SL())[_0x3833('0x2b')](_0x71d09b=>handleTimeout(0x0))[_0x3833('0x2b')](_0x2ad793=>RunTT());pl=setInterval(play,0x3e8);}else{clearInterval(pl);sessionStorage['Ta']=0x0;$('#bt_play')[_0x3833('0x15')](_0x3833('0x27'));}$(_0x3833('0x2c'))[_0x3833('0x2d')](_0x3833('0x2e'));$(_0x3833('0x2f'))[_0x3833('0x30')]();};function Tao_SS(){if(!sessionStorage['TT']){sessionStorage['kq']='';sessionStorage[_0x3833('0x2a')]=0x1;sessionStorage['Ta']=0x0;sessionStorage[_0x3833('0x29')]='';}}function TG(){var _0x4b8ec8=new Date();if(localStorage['tg']){if(localStorage['tg']!=_0x4b8ec8['getDate']()){localStorage['tg']=_0x4b8ec8[_0x3833('0x31')]();localStorage['q']=0x0;}else{localStorage['q']=Number(localStorage['q'])+0x1;if(localStorage['q']>0x5a){clearInterval(pl);alert(_0x3833('0x28'));}}}else{localStorage['tg']=_0x4b8ec8[_0x3833('0x31')]();localStorage['q']=0x0;}}function play(){if(tx[_0x3833('0xe')]()){if(tt==0x1){TG();if(sessionStorage[_0x3833('0x29')]==tx['getP']()){return;}var _0x3ab7a5=sessionStorage['TT'];var _0x4366bc=0x0;if(_0x3ab7a5[0x0]==0x1){if(_0x3ab7a5[0x2]==0x1){_0x4366bc=_0x3ab7a5[0x4]*0x3e8;tx['Dat_King'](tx[_0x3833('0x11')](),_0x4366bc);}else{if(!sessionStorage['kq']||sessionStorage['kq']==tx['getLS']()){_0x4366bc=_0x3ab7a5[0x4]*0x3e8;sessionStorage[_0x3833('0x2a')]=0x1;sessionStorage['kq']=tx[_0x3833('0x11')]();tx['Dat_King'](sessionStorage['kq'],_0x4366bc);}else{sessionStorage['kq']=tx[_0x3833('0x11')]();sessionStorage[_0x3833('0x2a')]=Number(sessionStorage[_0x3833('0x2a')])+0x1;if(sessionStorage['lose']>Number(_0x3ab7a5[0x3])+0x5){_0x4366bc=_0x3ab7a5[0x4]*0x3e8;tx[_0x3833('0xa')](sessionStorage['kq'],_0x4366bc);}else{_0x4366bc=0x2**(sessionStorage[_0x3833('0x2a')]-0x1)*_0x3ab7a5[0x4]*0x3e8;tx['Dat_King'](sessionStorage['kq'],_0x4366bc);}}}}else{if(_0x3ab7a5[0x2]==0x1){sessionStorage['kq']=_0x3ab7a5[0x1];_0x4366bc=_0x3ab7a5[0x4]*0x3e8;tx[_0x3833('0xa')](sessionStorage['kq'],_0x4366bc);}else{if(!sessionStorage['kq']||sessionStorage['kq']==tx['getLS']()){sessionStorage['kq']=_0x3ab7a5[0x1];_0x4366bc=_0x3ab7a5[0x4]*0x3e8;sessionStorage['lose']=0x1;tx[_0x3833('0xa')](sessionStorage['kq'],_0x4366bc);}else{sessionStorage['kq']=_0x3ab7a5[0x1];sessionStorage[_0x3833('0x2a')]=Number(sessionStorage['lose'])+0x1;if(sessionStorage[_0x3833('0x2a')]>Number(_0x3ab7a5[0x3])+0x5){_0x4366bc=_0x3ab7a5[0x4]*0x3e8;tx[_0x3833('0xa')](sessionStorage['kq'],_0x4366bc);}else{_0x4366bc=0x2**(sessionStorage[_0x3833('0x2a')]-0x1)*_0x3ab7a5[0x4]*0x3e8;tx[_0x3833('0xa')](sessionStorage['kq'],_0x4366bc);}}}}}sessionStorage[_0x3833('0x29')]=tx[_0x3833('0x14')]();tt=0x0;}else tt=0x1;}(function(){'use strict';function _0x38e863(){$(document)[_0x3833('0x32')](function(){var _0x22f1f1=window['location'][_0x3833('0x1')];var _0x552cc3='';if(_0x22f1f1['includes']('king.'))_0x552cc3=$(_0x3833('0x9'));else _0x552cc3=$('#divHeader\x20>\x20div\x20>\x20div\x20>\x20div.accout\x20>\x20h2')[_0x3833('0x15')]();if(_0x552cc3!=''){get_Game();Show();RunTT();if(sessionStorage['Ta']==0x1){$(_0x3833('0x26'))[_0x3833('0x15')]('Stop');$(_0x3833('0x2c'))['slideToggle'](_0x3833('0x2e'));$('#runtt')[_0x3833('0x30')]();pl=setInterval(play,0x3e8);}}});}setTimeout(_0x38e863,0x7d0);}());
