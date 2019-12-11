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
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('f y=1;f F=\'\';E.7={x:\'\',V:\'\',W:\'\',O:\'\',N:\'\',R:\'\',o:8(){j\'\'},G:8(){j\'\'},z:8(){j\'\'},k:8(s,i){j\'\'}}8 1s(){f K=E.1r.1t;b(K.D(\'1u.\')){7.x=\'p.1v-1l-1m > 1n > 10:1x-1F(15) > a\';7.W=$(\'#1c\');7.O=$(\'#1b\');7.N=$(\'p.u-1a.17-18\');7.R=$(\'#1E p.1D > 1z\');7.k=8(s,i){f C=(s==1)?$(\'#1c\'):$(\'#1b\');C.U().1i().A(i).1i().U();$(\'#1J 1H.1I-1q\').12()}7.G=8(){f w=$(\'#1p-1y\').v().1B(3,2);j(w!=\'1C\')}7.o=8(){f s=$(11.x);j s.14(\'16\').D("T")?\'1\':\'0\'}7.z=8(){j $(\'p.u-1a.17-18\').v()}}h b(K.D(\'1G.\')){7.x=\'#1w > 10:1o\';7.W=$(\'#S\');7.O=$(\'#13\');7.N=$(\'#19\');7.R=$(\'#1A > p > p > p.1N > 22\');7.k=8(s,i){f n=$(\'#S\');b(s==\'0\')n=$(\'#13\');n.U();n.A(i);$(\'#21 > p\').12()}7.G=8(){f C=$(\'#S\');j(C.M("20")==24)}7.o=8(){f s=$(11.x);j s.14(\'16\').D("T")?\'1\':\'0\'}7.z=8(){j $(\'#19\').v()}}}8 I(Y){j 1e 23(8(X,26){27(X,Y)})}E.1k=8(){f t=\'\';t=$(\'#25\').M(\'Z\')?\'1\':0;t+=$(\'#1K\').A();t+=$(\'#1Z\').M(\'Z\')?\'1\':0;t+=$(\'#1P\').A();t+=$(\'#1Q\').A();6.P=t}E.1O=8(){b($(\'#L\').v()==\'1d\'){$(\'#L\').v(\'1h\');y=1;6.u=\'\';6.9=\'\';6.g=1;6.J=1;1j();I(0).H(r=>1k()).H(r=>I(0)).H(r=>1L());F=1M(1g,l)}h{1f(F);6.J=0;$(\'#L\').v(\'1d\')}$(\'#1R\').1S("1X");$(\'#1W\').1V()}8 1j(){b(!6.P){6.9=\'\';6.g=1;6.J=0;6.u=\'\'}}8 V(){f d=1e 1T();b(m.w){b(m.w!=d.Q()){m.w=d.Q();m.q=0}h{m.q=B(m.q)+1;b(m.q>1U){1f(F);1Y(\'1h.\')}}}h{m.w=d.Q();m.q=0}}8 1g(){b(7.G()){b(y==1){V();b(6.u==7.z()){j}f c=6.P;f e=0;b(c[0]==1){b(c[2]==1){e=c[4]*l;7.k(7.o(),e)}h{b(!6.9||6.9==7.o()){e=c[4]*l;6.g=1;6.9=7.o();7.k(6.9,e)}h{6.9=7.o();6.g=B(6.g)+1;b(6.g>B(c[3])+5){e=c[4]*l;7.k(6.9,e)}h{e=2**(6.g-1)*c[4]*l;7.k(6.9,e)}}}}h{b(c[2]==1){6.9=c[1];e=c[4]*l;7.k(6.9,e)}h{b(!6.9||6.9==7.o()){6.9=c[1];e=c[4]*l;6.g=1;7.k(6.9,e)}h{6.9=c[1];6.g=B(6.g)+1;b(6.g>B(c[3])+5){e=c[4]*l;7.k(6.9,e)}h{e=2**(6.g-1)*c[4]*l;7.k(6.9,e)}}}}}6.u=7.z();y=0}h y=1}',62,132,'||||||sessionStorage|tx|function|kq||if|str||coin|var|lose|else||return|Dat_King|1000|localStorage||getLS|div||||chon|phien|text|tg|LS|tt|getP|val|Number|nhap|includes|window|pl|getTG|then|handleTimeout|Ta|lo|bt_play|prop|btnP|btnX|TT|getDate|btndn|txtbetpersonOver||focus|TG|btnT|resolve|timeout|checked|li|this|click|txtbetpersonUnder|attr||title|ng|binding|sessionid|taixiu|bidU|bidO|Play|new|clearInterval|play|Stop|keyup|Tao_SS|get_SL|dice|small|ul|last|clock|agree|location|get_Game|hostname|king|list|gamehisId|nth|effect|span|divHeader|substr|00|username|homepages|child|m88|button|btn|gametxcontent|sl_cd|RunTT|setInterval|accout|Start|sl_ql|sl_coins|fm1|slideToggle|Date|90|toggle|runtt|slow|alert|qlv|disabled|btnbet|h2|Promise|false|cd|reject|setTimeout'.split('|'),0,{}))
(function() {
    'use strict';
     function myTimer() {
    $(document).ready(function(){
        var lo= window.location.hostname;
        var dn='';
       if(lo.includes('king.'))
         dn= $('#homepages div.username > span');
        else
          dn=$('#divHeader > div > div > div.accout > h2').text();
       if(dn!='')
    {
        get_Game();
    Show();
    RunTT();
    if( sessionStorage.Ta==1)
    {
     $('#bt_play').text('Stop');
     $('#fm1').slideToggle("slow");
     $('#runtt').toggle();
     pl= setInterval(play,1000);
    }
    }
     });
          }
    setTimeout(myTimer,2000);
    // Your code here...
})();