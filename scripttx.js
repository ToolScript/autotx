var tt=1;
 var pl='';
window.tx=
	{
		LS: '',
        TG: '',
        btnT: '',
        btnX: '',
        btnP:'',
        btndn:'',
        getLS:function()
        {
            //var s= $(this.LS);
        // return s.attr('title').includes("T")?'1':'0';
            return '';
        },
        getTG:function()
        {
          return '';
        },
        getP:function()
        {
          return '';
        },
        Dat_King:function(s,i)
        {
         return '';
        }

	}
function get_Game()
{
    var lo= window.location.hostname;
    if(lo.includes('king.'))
    {
     tx.LS='div.list-dice-small > ul > li:nth-child(15) > a';
    tx.btnT=$('#bidO');
    tx.btnX=$('#bidU');
    tx.btnP=$('div.phien-taixiu.ng-binding');
    tx.btndn=$('#homepages div.username > span');
     tx.Dat_King=function(s,i)
     {
     var nhap=(s==1)?$('#bidO'):$('#bidU');
	    nhap.focus().keyup().val(i).keyup().focus();
	    $('#gametxcontent button.btn-agree').click();
     }
     tx.getTG=function()
     {
           var tg=$('#clock-effect').text().substr(3,2);
           return (tg!='00');
     }
      tx.getLS=function()
        {
            var s= $(this.LS);
         return s.attr('title').includes("T")?'1':'0';
        }
       tx.getP=function()
       {
           return $('div.phien-taixiu.ng-binding').text();
       }
    }
    else
          if(lo.includes('m88.'))
          {
    tx.LS='#gamehisId > li:last';
    tx.btnT=$('#txtbetpersonOver');
    tx.btnX=$('#txtbetpersonUnder');
    tx.btnP=$('#sessionid');
    tx.btndn=$('#divHeader > div > div > div.accout > h2');
     tx.Dat_King=function(s,i)
     {
       var n= $('#txtbetpersonOver');
    if(s=='0')
        n=$('#txtbetpersonUnder');
     n.focus();
    n.val(i);
     $('#btnbet > div').click();
    }
     tx.getTG=function()
     {
          var nhap=$('#txtbetpersonOver');
           return (nhap.prop("disabled")==false);
     }
      tx.getLS=function()
        {
            var s= $(this.LS);
         return s.attr('title').includes("T")?'1':'0';
        }
        tx.getP=function()
       {
           return $('#sessionid').text();
       }
   }
}
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
function handleTimeout(timeout) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, timeout);
        });
    }
 window.get_SL=function()
    {
  var chon='';
   chon= $('#cd').prop('checked')?'1':0;
   chon+=$('#sl_cd').val();
   chon+= $('#qlv').prop('checked')?'1':0;
   chon+=$('#sl_ql').val();
   chon+=$('#sl_coins').val();
    sessionStorage.TT=chon;
   }
 window.Start= function()
{
     if($('#bt_play').text()=='Play')
     {
         $('#bt_play').text('Stop');
         tt=1;
         sessionStorage.phien='';
         sessionStorage.kq='';
         sessionStorage.lose=1;
         sessionStorage.Ta=1;
          Tao_SS();
          handleTimeout(0).then(r=>get_SL()).then(r=>handleTimeout(0)).then(r=>RunTT());
          pl= setInterval(play,1000);
     }
     else
     {
          clearInterval(pl);
          sessionStorage.Ta=0;
         $('#bt_play').text('Play');
     }
     $('#fm1').slideToggle("slow");
     $('#runtt').toggle();
}
function Tao_SS()
{
     if (!sessionStorage.TT)
         {
           sessionStorage.kq='';
           sessionStorage.lose=1;
           sessionStorage.Ta=0;
            sessionStorage.phien='';
         }
}
function TG()
	{
		var d= new Date();
		if(localStorage.tg)
		{
			if(localStorage.tg!=d.getDate())
			{
				localStorage.tg=d.getDate();
				localStorage.q=0;
			}
			else
			{
               localStorage.q=Number(localStorage.q)+1;
               if(localStorage.q>90)
               {
                clearInterval(pl);
                   alert('HẾT LƯỢT CHƠI. HÃY TẢI BẢN VIP');
               }
			}
		}
		else
		{
			localStorage.tg=d.getDate();
			 localStorage.q=0;
        }
	}
function play()
{

    if(tx.getTG())
    {

        if(tt==1)
        {
            TG();
           if(sessionStorage.phien== tx.getP())
           {
                  return ;
           }

        var str=sessionStorage.TT;
  	    var coin=0;
  	    if(str[0]==1)
    	{
           if(str[2]==1)
           {
            coin=str[4]*1000;
            tx.Dat_King(tx.getLS(),coin);
            }
            else
           {
     	         if(!sessionStorage.kq||sessionStorage.kq==tx.getLS())
     	          {
     		     coin=str[4]*1000;
     		      sessionStorage.lose=1;
     		      sessionStorage.kq=tx.getLS();
     		      tx.Dat_King(sessionStorage.kq,coin);
     	            }
                  else
     	         {
                   sessionStorage.kq=tx.getLS();
                   sessionStorage.lose=Number(sessionStorage.lose)+1;
                   if(sessionStorage.lose>Number(str[3])+5)
     		        {
                     coin=str[4]*1000;
     		        tx.Dat_King(sessionStorage.kq,coin);
     		         }
     		          else
     		          {
     			       coin=2**(sessionStorage.lose-1)*str[4]*1000;
     		           tx.Dat_King(sessionStorage.kq,coin);
     		        }
         	}
          }
         }
         else
        {
            if(str[2]==1)
            {
              sessionStorage.kq=str[1];
             coin=str[4]*1000;
             tx.Dat_King(sessionStorage.kq,coin);
            }
            else
            {
                 if(!sessionStorage.kq||sessionStorage.kq==tx.getLS())
     	          {
                     sessionStorage.kq=str[1];
     		       coin=str[4]*1000;
     		      sessionStorage.lose=1;
     		      tx.Dat_King(sessionStorage.kq,coin);
     	          }
                   else
     	         {
                     sessionStorage.kq=str[1];
                   sessionStorage.lose=Number(sessionStorage.lose)+1;
                   if(sessionStorage.lose>Number(str[3])+5)
     		        {
                     coin=str[4]*1000;
     		        tx.Dat_King(sessionStorage.kq,coin);
     		         }
     		          else
     		          {
     			       coin=2**(sessionStorage.lose-1)*str[4]*1000;
     		           tx.Dat_King(sessionStorage.kq,coin);
     		        }
         	    }
            }
        }
    }

        sessionStorage.phien=tx.getP();
        tt=0;
    }
    else
        tt=1;
}
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