function getRemoteStyle_gotv(config) {
   
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

#remote-control-gotv {
	position: relative;
	background: url(${base_url}/gotv.png) no-repeat;
	width: 236px;
	height: 858px
}

#remote-control-gotv h2,
#remote-control-gotv span {
	position: absolute;
}

#remote-control-gotv ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#power_tv a,
#source a,
#power a,
#one a,
#two a,
#three a,
#four a,
#five a,
#six a,
#seven a,
#eight a,
#nine a,
#menu a,
#zero a,
#exit a,
#volume_plus a,
#volume_minus a,
#mute a,
#epg a,
#channel_plus a,
#channel_minus a,
#up a,
#left a,
#ok a,
#right a,
#down a,
#loop a,
#info a,
#questionmark a,
#arrows a,
#ttx a,
#subs a,
#fast_back a,
#play a,
#fast_forward a,
#stop a,
#pause a,
#rec a,
#red a,
#green a,
#yellow a,
#blue a,
#replay a,
#sound a,
#skip a,
#clock a {
	position: absolute;
	display: block
}

#remote-control-gotv li#power_tv a {
	width: 15px;
	height: 16px;
	left: 60px;
	top: 30px;
	background: url(${base_url}/power_tv.png) no-repeat 0px 0px
}

#remote-control-gotv li#power_tv a:hover {
	background: url(${base_url}/power_tv_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#source a {
	width: 20px;
	height: 13px;
	left: 109px;
	top: 31px;
	background: url(${base_url}/source.png) no-repeat 0px 0px
}

#remote-control-gotv li#source a:hover {
	background: url(${base_url}/source_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#power a {
	width: 15px;
	height: 16px;
	left: 165px;
	top: 31px;
	background: url(${base_url}/power.png) no-repeat 0px 0px
}

#remote-control-gotv li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#one a {
	width: 10px;
	height: 11px;
	left: 54px;
	top: 74px;
	background: url(${base_url}/one.png) no-repeat 0px 0px
}

#remote-control-gotv li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#two a {
	width: 27px;
	height: 11px;
	left: 105px;
	top: 74px;
	background: url(${base_url}/two.png) no-repeat 0px 0px
}

#remote-control-gotv li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#three a {
	width: 23px;
	height: 11px;
	left: 158px;
	top: 74px;
	background: url(${base_url}/three.png) no-repeat 0px 0px
}

#remote-control-gotv li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#four a {
	width: 24px;
	height: 11px;
	left: 51px;
	top: 112px;
	background: url(${base_url}/four.png) no-repeat 0px 0px
}

#remote-control-gotv li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#five a {
	width: 23px;
	height: 11px;
	left: 103px;
	top: 110px;
	background: url(${base_url}/five.png) no-repeat 0px 0px
}

#remote-control-gotv li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#six a {
	width: 28px;
	height: 11px;
	left: 158px;
	top: 110px;
	background: url(${base_url}/six.png) no-repeat 0px 0px
}

#remote-control-gotv li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#seven a {
	width: 30px;
	height: 11px;
	left: 50px;
	top: 148px;
	background: url(${base_url}/seven.png) no-repeat 0px 0px
}

#remote-control-gotv li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#eight a {
	width: 26px;
	height: 11px;
	left: 103px;
	top: 148px;
	background: url(${base_url}/eight.png) no-repeat 0px 0px
}

#remote-control-gotv li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#nine a {
	width: 31px;
	height: 11px;
	left: 158px;
	top: 148px;
	background: url(${base_url}/nine.png) no-repeat 0px 0px
}

#remote-control-gotv li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#menu a {
	width: 31px;
	height: 11px;
	left: 47px;
	top: 186px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px
}

#remote-control-gotv li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#zero a {
	width: 24px;
	height: 11px;
	left: 100px;
	top: 186px;
	background: url(${base_url}/zero.png) no-repeat 0px 0px
}

#remote-control-gotv li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#exit a {
	width: 22px;
	height: 11px;
	left: 160px;
	top: 186px;
	background: url(${base_url}/exit.png) no-repeat 0px 0px
}

#remote-control-gotv li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#volume_plus a {
	width: 12px;
	height: 12px;
	left: 53px;
	top: 231px;
	background: url(${base_url}/volume_plus.png) no-repeat 0px 0px
}

#remote-control-gotv li#volume_plus a:hover {
	background: url(${base_url}/volume_plus_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#volume_minus a {
	width: 14px;
	height: 4px;
	left: 49px;
	top: 275px;
	background: url(${base_url}/volume_minus.png) no-repeat 0px 0px
}

#remote-control-gotv li#volume_minus a:hover {
	background: url(${base_url}/volume_minus_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#mute a {
	width: 16px;
	height: 16px;
	left: 111px;
	top: 224px;
	background: url(${base_url}/mute.png) no-repeat 0px 0px
}

#remote-control-gotv li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#epg a {
	width: 20px;
	height: 11px;
	left: 111px;
	top: 262px;
	background: url(${base_url}/epg.png) no-repeat 0px 0px
}

#remote-control-gotv li#epg a:hover {
	background: url(${base_url}/epg_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#channel_plus a {
	width: 12px;
	height: 12px;
	left: 172px;
	top: 231px;
	background: url(${base_url}/channel_plus.png) no-repeat 0px 0px
}

#remote-control-gotv li#channel_plus a:hover {
	background: url(${base_url}/channel_plus_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#channel_minus a {
	width: 14px;
	height: 4px;
	left: 172px;
	top: 272px;
	background: url(${base_url}/channel_minus.png) no-repeat 0px 0px
}

#remote-control-gotv li#channel_minus a:hover {
	background: url(${base_url}/channel_minus_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#up a {
	width: 27px;
	height: 7px;
	left: 109px;
	top: 318px;
	background: url(${base_url}/up.png) no-repeat 0px 0px
}

#remote-control-gotv li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#left a {
	width: 8px;
	height: 26px;
	left: 67px;
	top: 359px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-gotv li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#ok a {
	width: 15px;
	height: 11px;
	left: 111px;
	top: 365px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-gotv li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#right a {
	width: 8px;
	height: 25px;
	left: 164px;
	top: 358px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-gotv li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#down a {
	width: 27px;
	height: 7px;
	left: 105px;
	top: 415px;
	background: url(${base_url}/down.png) no-repeat 0px 0px
}

#remote-control-gotv li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#loop a {
	width: 19px;
	height: 20px;
	left: 41px;
	top: 440px;
	background: url(${base_url}/loop.png) no-repeat 0px 0px
}

#remote-control-gotv li#loop a:hover {
	background: url(${base_url}/loop_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#info a {
	width: 22px;
	height: 12px;
	left: 175px;
	top: 440px;
	background: url(${base_url}/info.png) no-repeat 0px 0px
}

#remote-control-gotv li#info a:hover {
	background: url(${base_url}/info_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#questionmark a {
	width: 6px;
	height: 14px;
	left: 116px;
	top: 470px;
	background: url(${base_url}/questionmark.png) no-repeat 0px 0px
}

#remote-control-gotv li#questionmark a:hover {
	background: url(${base_url}/questionmark_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#arrows a {
	width: 31px;
	height: 16px;
	left: 45px;
	top: 506px;
	background: url(${base_url}/arrows.png) no-repeat 0px 0px
}

#remote-control-gotv li#arrows a:hover {
	background: url(${base_url}/arrows_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#ttx a {
	width: 25px;
	height: 14px;
	left: 105px;
	top: 506px;
	background: url(${base_url}/ttx.png) no-repeat 0px 0px
}

#remote-control-gotv li#ttx a:hover {
	background: url(${base_url}/ttx_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#subs a {
	width: 31px;
	height: 16px;
	left: 162px;
	top: 506px;
	background: url(${base_url}/subs.png) no-repeat 0px 0px
}

#remote-control-gotv li#subs a:hover {
	background: url(${base_url}/subs_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#fast_back a {
	width: 22px;
	height: 15px;
	left: 45px;
	top: 556px;
	background: url(${base_url}/fast_back.png) no-repeat 0px 0px
}

#remote-control-gotv li#fast_back a:hover {
	background: url(${base_url}/fast_back_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#play a {
	width: 12px;
	height: 16px;
	left: 113px;
	top: 556px;
	background: url(${base_url}/play.png) no-repeat 0px 0px
}

#remote-control-gotv li#play a:hover {
	background: url(${base_url}/play_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#fast_forward a {
	width: 22px;
	height: 14px;
	left: 170px;
	top: 556px;
	background: url(${base_url}/fast_forward.png) no-repeat 0px 0px
}

#remote-control-gotv li#fast_forward a:hover {
	background: url(${base_url}/fast_forward_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#stop a {
	width: 13px;
	height: 12px;
	left: 52px;
	top: 596px;
	background: url(${base_url}/stop.png) no-repeat 0px 0px
}

#remote-control-gotv li#stop a:hover {
	background: url(${base_url}/stop_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#pause a {
	width: 9px;
	height: 13px;
	left: 113px;
	top: 595px;
	background: url(${base_url}/pause.png) no-repeat 0px 0px
}

#remote-control-gotv li#pause a:hover {
	background: url(${base_url}/pause_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#rec a {
	width: 24px;
	height: 14px;
	left: 166px;
	top: 595px;
	background: url(${base_url}/rec.png) no-repeat 0px 0px
}

#remote-control-gotv li#rec a:hover {
	background: url(${base_url}/rec_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#red a {
	width: 33px;
	height: 33px;
	left: 37px;
	top: 627px;
	background: url(${base_url}/red.png) no-repeat 0px 0px
}

#remote-control-gotv li#red a:hover {
	background: url(${base_url}/red_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#green a {
	width: 33px;
	height: 33px;
	left: 80px;
	top: 627px;
	background: url(${base_url}/green.png) no-repeat 0px 0px
}

#remote-control-gotv li#green a:hover {
	background: url(${base_url}/green_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#yellow a {
	width: 33px;
	height: 33px;
	left: 124px;
	top: 627px;
	background: url(${base_url}/yellow.png) no-repeat 0px 0px
}

#remote-control-gotv li#yellow a:hover {
	background: url(${base_url}/yellow_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#blue a {
	width: 33px;
	height: 33px;
	left: 170px;
	top: 627px;
	background: url(${base_url}/blue.png) no-repeat 0px 0px
}

#remote-control-gotv li#blue a:hover {
	background: url(${base_url}/blue_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#replay a {
	width: 35px;
	height: 10px;
	left: 43px;
	top: 685px;
	background: url(${base_url}/replay.png) no-repeat 0px 0px
}

#remote-control-gotv li#replay a:hover {
	background: url(${base_url}/replay_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#sound a {
	width: 21px;
	height: 16px;
	left: 103px;
	top: 685px;
	background: url(${base_url}/sound.png) no-repeat 0px 0px
}

#remote-control-gotv li#sound a:hover {
	background: url(${base_url}/sound_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#skip a {
	width: 21px;
	height: 10px;
	left: 165px;
	top: 685px;
	background: url(${base_url}/skip.png) no-repeat 0px 0px
}

#remote-control-gotv li#skip a:hover {
	background: url(${base_url}/skip_over.png) no-repeat 0px 0px
}



#remote-control-gotv li#clock a {
	width: 15px;
	height: 15px;
	left: 110px;
	top: 720px;
	background: url(${base_url}/clock.png) no-repeat 0px 0px
}

#remote-control-gotv li#clock a:hover {
	background: url(${base_url}/clock_over.png) no-repeat 0px 0px
}




  `;
}


function getRemoteHtml_gotv(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-gotv">
				<h2>
			
				</h2>
				<ul>
					<li id="power_tv" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="source" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="power" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="one" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="two" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="three" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="four" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="five" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="six" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="seven" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="eight" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="nine" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="menu" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="zero" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="exit" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="volume_plus" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="volume_minus" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="mute" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="epg" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="channel_plus" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="channel_minus" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="up" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="left" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="ok" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="right" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="down" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="loop" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="info" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="questionmark" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="ttx" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="arrows" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="subs" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="fast_back" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="play" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="fast_forward" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="stop" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="pause" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="rec" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="red" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="green" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="yellow" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="blue" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="replay" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="sound" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="skip" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>
					<li id="clock" class="myButton-${config.remote_template}"><a href="#" title=" "><span> </span></a></li>			
                </ul>

			</div>	
		</div>

`;
}