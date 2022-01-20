function getRemoteStyle_strongtv(config) {
   
   const template = config.remote_template;
   const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;
    
  return `
  ha-card{
    	background-color:transparent;
    	box-shadow:var(--paper-material-elevation-0_-_box-shadow);
    }
    body {
	margin: 0;
	padding: 20px;
	font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
	width: 360px;
	margin: 0 auto
}

#remote-control-strongtv {
	position: relative;
	background: url(${base_url}/strongtv.png) no-repeat;
	width: 214px;
	height: 870px
}

#remote-control-strongtv h2,
#remote-control-strongtv span {
	position: absolute;
	display: none;
}

#remote-control-strongtv ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#audio a,
#back a,
#blue a,
#button a,
#ch_down a,
#ch_up a,
#down a,
#eco a,
#eight a,
#epg a,
#fast_back a,
#fast_forward a,
#fav a,
#five a,
#four a,
#green a,
#home a,
#info a,
#left a,
#list a,
#loop a,
#menu a,
#mute a,
#netflix a,
#nine a,
#ok a,
#one a,
#option a,
#play_pause a,
#power a,
#record a,
#red a,
#right a,
#seven a,
#six a,
#skip_back a,
#skip_forward a,
#sleep a,
#source a,
#stop a,
#sub a,
#text a,
#three a,
#tv a,
#two a,
#up a,
#usb a,
#volume_minus a,
#volume_plus a,
#yellow a,
#youtube a,
#zero a,
#zoom_in a,
#zoom_out a {
	position: absolute;
	display: block
}


#remote-control-strongtv li#audio a {
	width: 26px;
	height: 9px;
	left: 163px;
	top: 744px;
	background: url(${base_url}/audio.png) no-repeat 0px 0px
}

#remote-control-strongtv li#audio a:hover {
	background: url(${base_url}/audio_over.png) no-repeat 0px 0px
}

#remote-control-strongtv li#back a {
	width: 24px;
	height: 10px;
	left: 29px;
	top: 554px;
	background: url(${base_url}/back.png) no-repeat 0px 0px
}

#remote-control-strongtv li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px
}

#remote-control-strongtv li#blue a {
	width: 32px;
	height: 20px;
	left: 160px;
	top: 616px;
	background: url(${base_url}/blue.png) no-repeat 0px 0px
}

#remote-control-strongtv li#blue a:hover {
	background: url(${base_url}/blue_over.png) no-repeat 0px 0px
}

#remote-control-strongtv li#button a {
	width: 16px;
	height: 11px;
	left: 167px;
	top: 554px;
	background: url(${base_url}/button.png) no-repeat 0px 0px
}

#remote-control-strongtv li#button a:hover {
	background: url(${base_url}/button_over.png) no-repeat 0px 0px
}

#remote-control-strongtv li#ch_down a {
	width: 20px;
	height: 13px;
	left: 162px;
	top: 323px;
	background: url(${base_url}/ch_down.png) no-repeat 0px 0px
}

#remote-control-strongtv li#ch_down a:hover {
	background: url(${base_url}/ch_down_over.png) no-repeat 0px 0px
}

#remote-control-strongtv li#ch_up a {
	width: 20px;
	height: 13px;
	left: 155px;
	top: 249px;
	background: url(${base_url}/ch_up.png) no-repeat 0px 0px
}

#remote-control-strongtv li#ch_up a:hover {
	background: url(${base_url}/ch_up_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#down a {
	width: 27px;
	height: 7px;
	left: 97px;
	top: 525px;
	background: url(${base_url}/down.png) no-repeat 0px 0px
}

#remote-control-strongtv li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#eco a {
	width: 14px;
	height: 8px;
	left: 166px;
	top: 682px;
	background: url(${base_url}/eco.png) no-repeat 0px 0px
}

#remote-control-strongtv li#eco a:hover {
	background: url(${base_url}/eco_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#eight a {
	width: 15px;
	height: 22px;
	left: 98px;
	top: 158px;
	background: url(${base_url}/eight.png) no-repeat 0px 0px
}

#remote-control-strongtv li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#epg a {
	width: 17px;
	height: 10px;
	left: 166px;
	top: 404px;
	background: url(${base_url}/epg.png) no-repeat 0px 0px
}

#remote-control-strongtv li#epg a:hover {
	background: url(${base_url}/epg_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#fast_back a {
	width: 14px;
	height: 10px;
	left: 36px;
	top: 715px;
	background: url(${base_url}/fast_back.png) no-repeat 0px 0px
}

#remote-control-strongtv li#fast_back a:hover {
	background: url(${base_url}/fast_back_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#fast_forward a {
	width: 14px;
	height: 10px;
	left: 78px;
	top: 715px;
	background: url(${base_url}/fast_forward.png) no-repeat 0px 0px
}

#remote-control-strongtv li#fast_forward a:hover {
	background: url(${base_url}/fast_forward_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#fav a {
	width: 17px;
	height: 10px;
	left: 157px;
	top: 365px;
	background: url(${base_url}/fav.png) no-repeat 0px 0px
}

#remote-control-strongtv li#fav a:hover {
	background: url(${base_url}/fav_over.png) no-repeat 0px 0px
}




#remote-control-strongtv li#five a {
	width: 11px;
	height: 20px;
	left: 103px;
	top: 117px;
	background: url(${base_url}/five.png) no-repeat 0px 0px
}

#remote-control-strongtv li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#four a {
	width: 13px;
	height: 20px;
	left: 46px;
	top: 119px;
	background: url(${base_url}/four.png) no-repeat 0px 0px
}

#remote-control-strongtv li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#green a {
	width: 32px;
	height: 20px;
	left: 72px;
	top: 616px;
	background: url(${base_url}/green.png) no-repeat 0px 0px
}

#remote-control-strongtv li#green a:hover {
	background: url(${base_url}/green_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#home a {
	width: 18px;
	height: 16px;
	left: 42px;
	top: 201px;
	background: url(${base_url}/home.png) no-repeat 0px 0px
}

#remote-control-strongtv li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#info a {
	width: 22px;
	height: 10px;
	left: 96px;
	top: 364px;
	background: url(${base_url}/info.png) no-repeat 0px 0px
}

#remote-control-strongtv li#info a:hover {
	background: url(${base_url}/info_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#left a {
	width: 8px;
	height: 26px;
	left: 59px;
	top: 479px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-strongtv li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#list a {
	width: 16px;
	height: 8px;
	left: 168px;
	top: 653px;
	background: url(${base_url}/list.png) no-repeat 0px 0px
}

#remote-control-strongtv li#list a:hover {
	background: url(${base_url}/list_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#loop a {
	width: 11px;
	height: 12px;
	left: 126px;
	top: 684px;
	background: url(${base_url}/loop.png) no-repeat 0px 0px
}

#remote-control-strongtv li#loop a:hover {
	background: url(${base_url}/loop_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#menu a {
	width: 28px;
	height: 10px;
	left: 32px;
	top: 406px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px
}

#remote-control-strongtv li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#mute a {
	width: 16px;
	height: 16px;
	left: 154px;
	top: 36px;
	background: url(${base_url}/mute.png) no-repeat 0px 0px
}

#remote-control-strongtv li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#netflix a {
	width: 49px;
	height: 13px;
	left: 81px;
	top: 586px;
	background: url(${base_url}/netflix.png) no-repeat 0px 0px
}

#remote-control-strongtv li#netflix a:hover {
	background: url(${base_url}/netflix_over.png) no-repeat 0px 0px
}




#remote-control-strongtv li#nine a {
	width: 12px;
	height: 20px;
	left: 158px;
	top: 157px;
	background: url(${base_url}/nine.png) no-repeat 0px 0px
}

#remote-control-strongtv li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#ok a {
	width: 19px;
	height: 14px;
	left: 98px;
	top: 479px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-strongtv li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#one a {
	width: 8px;
	height: 20px;
	left: 46px;
	top: 75px;
	background: url(${base_url}/one.png) no-repeat 0px 0px
}

#remote-control-strongtv li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#option a {
	width: 35px;
	height: 10px;
	left: 30px;
	top: 361px;
	background: url(${base_url}/option.png) no-repeat 0px 0px
}

#remote-control-strongtv li#option a:hover {
	background: url(${base_url}/option_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#play_pause a {
	width: 14px;
	height: 10px;
	left: 76px;
	top: 742px;
	background: url(${base_url}/play_pause.png) no-repeat 0px 0px
}

#remote-control-strongtv li#play_pause a:hover {
	background: url(${base_url}/play_pause_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#power a {
	width: 22px;
	height: 24px;
	left: 42px;
	top: 28px;
	background: url(${base_url}/power.png) no-repeat 0px 0px
}

#remote-control-strongtv li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#record a {
	width: 8px;
	height: 8px;
	left: 39px;
	top: 745px;
	background: url(${base_url}/record.png) no-repeat 0px 0px
}

#remote-control-strongtv li#record a:hover {
	background: url(${base_url}/record_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#red a {
	width: 32px;
	height: 20px;
	left: 27px;
	top: 616px;
	background: url(${base_url}/red.png) no-repeat 0px 0px
}

#remote-control-strongtv li#red a:hover {
	background: url(${base_url}/red_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#right a {
	width: 8px;
	height: 25px;
	left: 149px;
	top: 475px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-strongtv li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#seven a {
	width: 11px;
	height: 20px;
	left: 46px;
	top: 158px;
	background: url(${base_url}/seven.png) no-repeat 0px 0px
}

#remote-control-strongtv li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#six a {
	width: 12px;
	height: 20px;
	left: 158px;
	top: 118px;
	background: url(${base_url}/six.png) no-repeat 0px 0px
}

#remote-control-strongtv li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#skip_back a {
	width: 8px;
	height: 10px;
	left: 129px;
	top: 716px;
	background: url(${base_url}/skip_back.png) no-repeat 0px 0px
}

#remote-control-strongtv li#skip_back a:hover {
	background: url(${base_url}/skip_back_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#skip_forward a {
	width: 9px;
	height: 10px;
	left: 170px;
	top: 716px;
	background: url(${base_url}/skip_forward.png) no-repeat 0px 0px
}

#remote-control-strongtv li#skip_forward a:hover {
	background: url(${base_url}/skip_forward_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#sleep a {
	width: 24px;
	height: 9px;
	left: 30px;
	top: 651px;
	background: url(${base_url}/sleep.png) no-repeat 0px 0px
}

#remote-control-strongtv li#sleep a:hover {
	background: url(${base_url}/sleep_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#source a {
	width: 41px;
	height: 11px;
	left: 89px;
	top: 289px;
	background: url(${base_url}/source.png) no-repeat 0px 0px
}

#remote-control-strongtv li#source a:hover {
	background: url(${base_url}/source_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#stop a {
	width: 9px;
	height: 9px;
	left: 126px;
	top: 745px;
	background: url(${base_url}/stop.png) no-repeat 0px 0px
}

#remote-control-strongtv li#stop a:hover {
	background: url(${base_url}/stop_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#sub a {
	width: 16px;
	height: 9px;
	left: 81px;
	top: 684px;
	background: url(${base_url}/sub.png) no-repeat 0px 0px
}

#remote-control-strongtv li#sub a:hover {
	background: url(${base_url}/sub_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#text a {
	width: 19px;
	height: 8px;
	left: 35px;
	top: 683px;
	background: url(${base_url}/text.png) no-repeat 0px 0px
}

#remote-control-strongtv li#text a:hover {
	background: url(${base_url}/text_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#three a {
	width: 11px;
	height: 20px;
	left: 158px;
	top: 76px;
	background: url(${base_url}/three.png) no-repeat 0px 0px
}

#remote-control-strongtv li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#tv a {
	width: 14px;
	height: 11px;
	left: 98px;
	top: 249px;
	background: url(${base_url}/tv.png) no-repeat 0px 0px
}

#remote-control-strongtv li#tv a:hover {
	background: url(${base_url}/tv_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#two a {
	width: 11px;
	height: 20px;
	left: 98px;
	top: 77px;
	background: url(${base_url}/two.png) no-repeat 0px 0px
}

#remote-control-strongtv li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#up a {
	width: 27px;
	height: 7px;
	left: 96px;
	top: 435px;
	background: url(${base_url}/up.png) no-repeat 0px 0px
}

#remote-control-strongtv li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#usb a {
	width: 21px;
	height: 11px;
	left: 95px;
	top: 325px;
	background: url(${base_url}/usb.png) no-repeat 0px 0px
}

#remote-control-strongtv li#usb a:hover {
	background: url(${base_url}/usb_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#volume_minus a {
	width: 15px;
	height: 2px;
	left: 36px;
	top: 329px;
	background: url(${base_url}/volume_minus.png) no-repeat 0px 0px
}

#remote-control-strongtv li#volume_minus a:hover {
	background: url(${base_url}/volume_minus_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#volume_plus a {
	width: 16px;
	height: 16px;
	left: 36px;
	top: 257px;
	background: url(${base_url}/volume_plus.png) no-repeat 0px 0px
}

#remote-control-strongtv li#volume_plus a:hover {
	background: url(${base_url}/volume_plus_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#yellow a {
	width: 32px;
	height: 20px;
	left: 117px;
	top: 616px;
	background: url(${base_url}/yellow.png) no-repeat 0px 0px
}

#remote-control-strongtv li#yellow a:hover {
	background: url(${base_url}/yellow_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#youtube a {
	width: 38px;
	height: 9px;
	left: 146px;
	top: 203px;
	background: url(${base_url}/youtube.png) no-repeat 0px 0px
}

#remote-control-strongtv li#youtube a:hover {
	background: url(${base_url}/youtube_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#zero a {
	width: 12px;
	height: 20px;
	left: 98px;
	top: 198px;
	background: url(${base_url}/zero.png) no-repeat 0px 0px
}

#remote-control-strongtv li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#zoom_in a {
	width: 31px;
	height: 9px;
	left: 75px;
	top: 650px;
	background: url(${base_url}/zoom_in.png) no-repeat 0px 0px
}

#remote-control-strongtv li#zoom_in a:hover {
	background: url(${base_url}/zoom_in_over.png) no-repeat 0px 0px
}



#remote-control-strongtv li#zoom_out a {
	width: 27px;
	height: 9px;
	left: 119px;
	top: 650px;
	background: url(${base_url}/zoom_out.png) no-repeat 0px 0px
}

#remote-control-strongtv li#zoom_out a:hover {
	background: url(${base_url}/zoom_out_over.png) no-repeat 0px 0px
}




  `;
}

function getRemoteHtml_strongtv(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-strongtv">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="audio" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="back" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="blue" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="button" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="ch_down" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="ch_up" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="down" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="eco" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="eight" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="epg" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="fast_back" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="fast_forward" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="fav" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="five" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="four" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="green" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="home" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="info" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="left" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="list" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="loop" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="menu" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="mute" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="netflix" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="nine" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="ok" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="one" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="option" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="play_pause" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="power" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="record" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="red" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="right" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="seven" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="six" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="skip_back" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="skip_forward" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="sleep" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="source" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="stop" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
                                        <li id="sub" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="text" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="three" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="tv" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="two" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="up" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="usb" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="volume_minus" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="volume_plus" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="yellow" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="youtube" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="zero" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="zoom_in" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>
					<li id="zoom_out" class="myButton-strongtv"><a href="#" title=" "><span> </span></a></li>



				</ul>

			</div>	
		</div>

`;
}