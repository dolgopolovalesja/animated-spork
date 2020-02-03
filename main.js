$(document).ready(function(){console.log('ready');$('.toform').on('click',function(e){e.preventDefault();$('html, body').stop().animate({scrollTop:($('.form').offset().top)},1000);});if(Cookies.get('name')){$('.comment_hide').show();$('#commName').text(Cookies.get('name'));$('#commText').text(Cookies.get('comment'));$('#date').text(Cookies.get('date'));}
	var dat=new Date();
	var i=0;
	function getRandom(min,max)
	{
		var res=Math.floor(Math.random()*(max-min+1)+min);if(res<10){return'0'+res;}
		else{return res;}
	}
	function commentDate(daysago,hourTag,current)
	{
		var date=new Date();if(current==0)
		{i++;date.setDate(date.getDate()-daysago);
			var newDay=date.getDate()<10?'0'+date.getDate():date.getDate();
			var newMonth=(date.getMonth()+1)<10?'0'+(date.getMonth()+1):date.getMonth()+1;
			var newYear=date.getFullYear();
			var newHour=getRandom(0,23);
			if(hourTag==1){newHour=getRandom(0,11);}
			else if(hourTag==2){newHour=getRandom(12,23);}
			var newMinutes=getRandom(0,59);
			var newSeconds=getRandom(0,59);
			if(daysago==0){date.setMinutes(date.getMinutes()-date.getMinutes()/2);
				newMinutes=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();newHour=date.getHours()<10?'0'+date.getHours():date.getHours();}
				var commentDate='('+newDay+'.'+newMonth+'.'+newYear+', '+newHour+':'+newMinutes+':'+newSeconds+')';
				Cookies.set('commdate'+i,commentDate,{expires:365});}
				else
				{
					var date=new Date();
					var newDay=date.getDate()<10?'0'+date.getDate():date.getDate();
					var newMonth=(date.getMonth()+1)<10?'0'+(date.getMonth()+1):date.getMonth()+1;
					var newYear=date.getFullYear();
					var newHour=date.getHours()<10?'0'+date.getHours():date.getHours();
					var newMinutes=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
					var newSeconds=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
				}
					var commentDate=':'+newMinutes+':'+newSeconds+')';return commentDate;}
					if(Cookies.get('commdate1')){$('#commDate1')
						.text(Cookies.get('commdate1'));$('#commDate2')
					.text(Cookies.get('commdate2'));$('#commDate3')
					.text(Cookies.get('commdate3'));$('#commDate4')
					.text(Cookies.get('commdate4'));$('#commDate5')
					.text(Cookies.get('commdate5'));$('#commDate6')
					.text(Cookies.get('commdate6'));$('#commDate7')
					.text(Cookies.get('commdate7'));$('#commDate8')
					.text(Cookies.get('commdate8'));$('#commDate9')
					.text(Cookies.get('commdate9'));$('#commDate10')
					.text(Cookies.get('commdate10'));$('#commDate11')
					.text(Cookies.get('commdate11'));$('#commDate12')
					.text(Cookies.get('commdate12'));$('#commDate13')
					.text(Cookies.get('commdate13'));$('#commDate14')
					.text(Cookies.get('commdate14'));$('#commDate15')
					.text(Cookies.get('commdate15'));$('#commDate16')
					.text(Cookies.get('commdate16'));$('#commDate17')
					.text(Cookies.get('commdate17'));$('#commDate18')
					.text(Cookies.get('commdate18'));$('#commDate19')
					.text(Cookies.get('commdate19'));$('#commDate20')
					.text(Cookies.get('commdate20'));$('#commDate21')
					.text(Cookies.get('commdate21'));$('#commDate22')
					.text(Cookies.get('commdate22'));$('#commDate23')
					.text(Cookies.get('commdate23'));$('#commDate24')
					.text(Cookies.get('commdate24'));$('#commDate25')
					.text(Cookies.get('commdate25'));$('#commDate26')
					.text(Cookies.get('commdate26'));$('#commDate27')
					.text(Cookies.get('commdate27'));$('#commDate28')
					.text(Cookies.get('commdate28'));$('#commDate29')
					.text(Cookies.get('commdate29'));$('#commDate30')
					.text(Cookies.get('commdate30'));$('#commDate31')
					.text(Cookies.get('commdate31'));$('#commDate32')
					.text(Cookies.get('commdate32'));
				}
				else
					{
						$('#commDate1').text(commentDate(0,0,0));$('#commDate2')
						.text(commentDate(2,0,0));$('#commDate3')
						.text(commentDate(4,0,0));$('#commDate4')
						.text(commentDate(7,0,0));$('#commDate5')
						.text(commentDate(10,0,0));$('#commDate6')
						.text(commentDate(17,0,0));$('#commDate7')
						.text(commentDate(21,0,0));$('#commDate8')
						.text(commentDate(32,0,0));$('#commDate9')
						.text(commentDate(38,2,0));$('#commDate10')
						.text(commentDate(40,1,0));$('#commDate11')
						.text(commentDate(41,0,0));$('#commDate12')
						.text(commentDate(42,0,0));$('#commDate13')
						.text(commentDate(43,0,0));$('#commDate14')
						.text(commentDate(44,0,0));$('#commDate15')
						.text(commentDate(45,0,0));$('#commDate16')
						.text(commentDate(46,0,0));$('#commDate17')
						.text(commentDate(47,0,0));$('#commDate18')
						.text(commentDate(48,0,0));$('#commDate19')
						.text(commentDate(49,0,0));$('#commDate20')
						.text(commentDate(50,0,0));$('#commDate21')
						.text(commentDate(50,0,0));$('#commDate22')
						.text(commentDate(51,0,0));$('#commDate23')
						.text(commentDate(52,0,0));$('#commDate24')
						.text(commentDate(53,0,0));$('#commDate25')
						.text(commentDate(54,0,0));$('#commDate26')
						.text(commentDate(55,0,0));$('#commDate27')
						.text(commentDate(56,0,0));$('#commDate28')
						.text(commentDate(57,0,0));$('#commDate29')
						.text(commentDate(58,0,0));$('#commDate30')
						.text(commentDate(59,0,0));$('#commDate31')
						.text(commentDate(59,0,0));$('#commDate32')
						.text(commentDate(60,0,0));
					}
					var form=$('form');form.on('submit',function(e){e.preventDefault();
						var name=form.find('input[name="name"]').val();
						var email=form.find('input[name="email"]').val();
						var comment=form.find('textarea[name="comment"]')
						.val();if(Cookies.get('name'))
						{alert('Вы уже отправили свой комментарий!');return;}
						if(name==''||email==''||comment=='')
						{alert('Пожалуйста, заполните все поля!');return;}
					var currentDate=commentDate(0,0);Cookies.set('name',name,{expires:365});Cookies.set('email',email,{expires:365});Cookies.set('comment',comment,{expires:365});Cookies.set('date',currentDate,{expires:365});
					alert('Ваш комментарий отправлен!');
					$('.comment_hide').fadeIn();
					$('#commName').text(name);
					$('#commText').text(comment);
					$('#date').text(currentDate);
					$('html, body').stop().animate({scrollTop:($('.comment_hide')
						.offset().top)},1000);form.trigger('reset');});
					var golosov=3894;if(Cookies.get('golos')){golosov++;}
					$('#golosov').text(golosov);$('.opros_result, input[type="radio"]').on('click',function(e){e.preventDefault();if(Cookies.get('golos')){alert('Вы уже голосовали!');return;}$('#no_result').hide();$('#result').show();$('#golosov').text(golosov+1);Cookies.set('golos','1',{expires:365});});var peoplePerDay=2100;var date=new Date();var totalPeople=Math.round((peoplePerDay/1040)*(date.getHours()*60+date.getMinutes()));var zakazPeople=Math.round(totalPeople*0.1564);var nowPeople=getRandom(10,50);$('.totalPeople').text(totalPeople);$('.zakazPeople').text(zakazPeople);$('.nowPeople').text(nowPeople);});$(window).load(function(){var obj=$('.recommend');var offset=obj.offset();var topOffset=offset.top;var leftOffset=offset.left;var marginTop=obj.css("marginTop");var marginLeft=obj.css("marginLeft");$(window).scroll(function(){var scrollTop=$(window).scrollTop();if(scrollTop>=topOffset){obj.css({marginTop:0,left:leftOffset,top:0,position:'fixed',});}if(scrollTop<topOffset){obj.css({marginTop:marginTop,left:0,position:'relative',});}});});