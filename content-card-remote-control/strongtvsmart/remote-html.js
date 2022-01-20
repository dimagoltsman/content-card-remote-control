function getRemoteStyle_strongtvsmart(config) {
   
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

#remote-control-strongtvsmart {
	position: relative;
	background: url(${base_url}/strongtvsmart.png) no-repeat;
	width: 167px;
	height: 869px
}

#remote-control-strongtvsmart h2,
#remote-control-strongtvsmart span {
	position: absolute;
	display: none;
}

#remote-control-strongtvsmart ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#audio a,
#power a,
#mute a,
#one a,
#two a,
#three a,
#four a,
#five a,
#six a,
#seven a,
#eight a,
#nine a,
#fav a,
#zero a,
#list a,
#volume_up a,
#volume_down a,
#tv a,
#smart a,
#channel_up a,
#channel_down a,
#home a,
#menu a,
#up a,
#left a,
#ok a,
#back a,
#source a,
#right a,
#down a,
#back a,
#source a,
#exit a,
#zoom a,
#settings a,
#info a,
#epg a,
#lang a,
#usb a,
#subt a,
#text a,
#red a,
#green a,
#yellow a,
#blue a,
#fast_back a,
#play a,
#pause a,
#fast_forward a,
#skip_back a,
#stop a,
#skip_forward a,
#record a,
#netflix a,
#youtube a {
	position: absolute;
	display: block
}


#remote-control-strongtvsmart li#power a {
	width: 19px;
	height: 21px;
	left: 32px;
	top: 25px;
	background: url(${base_url}/power.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#power a:hover {
	background: url(${base_url}/audio_over.png) no-repeat 0px 0px
}


#remote-control-strongtvsmart li#mute a {
	width: 15px;
	height: 15px;
	left: 125px;
	top: 28px;
	background: url(${base_url}/mute.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}


#remote-control-strongtvsmart li#one a {
	width: 3px;
	height: 10px;
	left: 40px;
	top: 68px;
	background: url(${base_url}/one.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0px 0px
}


#remote-control-strongtvsmart li#two a {
	width: 6px;
	height: 11px;
	left: 84px;
	top: 68px;
	background: url(${base_url}/two.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#three a {
	width: 6px;
	height: 11px;
	left: 129px;
	top: 68px;
	background: url(${base_url}/three.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#four a {
	width: 6px;
	height: 10px;
	left: 38px;
	top: 102px;
	background: url(${base_url}/four.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#five a {
	width: 6px;
	height: 10px;
	left: 84px;
	top: 102px;
	background: url(${base_url}/five.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#six a {
	width: 6px;
	height: 11px;
	left: 129px;
	top: 102px;
	background: url(${base_url}/six.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#seven a {
	width: 6px;
	height: 10px;
	left: 38px;
	top: 138px;
	background: url(${base_url}/seven.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#eight a {
	width: 6px;
	height: 11px;
	left: 84px;
	top: 138px;
	background: url(${base_url}/eight.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#nine a {
	width: 6px;
	height: 11px;
	left: 130px;
	top: 138px;
	background: url(${base_url}/nine.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#fav a {
	width: 21px;
	height: 15px;
	left: 31px;
	top: 172px;
	background: url(${base_url}/fav.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#fav a:hover {
	background: url(${base_url}/fav_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#zero a {
	width: 6px;
	height: 11px;
	left: 84px;
	top: 172px;
	background: url(${base_url}/zero.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#list a {
	width: 25px;
	height: 11px;
	left: 121px;
	top: 172px;
	background: url(${base_url}/list.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#list a:hover {
	background: url(${base_url}/list_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#volume_up a {
	width: 10px;
	height: 11px;
	left: 33px;
	top: 208px;
	background: url(${base_url}/volume_up.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#volume_up a:hover {
	background: url(${base_url}/volume_up_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#volume_down a {
	width: 10px;
	height: 2px;
	left: 33px;
	top: 254px;
	background: url(${base_url}/volume_down.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#volume_down a:hover {
	background: url(${base_url}/volume_down_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#tv a {
	width: 15px;
	height: 11px;
	left: 77px;
	top: 211px;
	background: url(${base_url}/tv.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#tv a:hover {
	background: url(${base_url}/tv_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#smart a {
	width: 21px;
	height: 5px;
	left: 77px;
	top: 250px;
	background: url(${base_url}/smart.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#smart a:hover {
	background: url(${base_url}/smart_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#channel_up a {
	width: 10px;
	height: 11px;
	left: 125px;
	top: 210px;
	background: url(${base_url}/channel_up.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#channel_up a:hover {
	background: url(${base_url}/channel_up_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#channel_down a {
	width: 10px;
	height: 2px;
	left: 125px;
	top: 254px;
	background: url(${base_url}/channel_down.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#channel_down a:hover {
	background: url(${base_url}/channel_down_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#home a {
	width: 15px;
	height: 14px;
	left: 28px;
	top: 281px;
	background: url(${base_url}/home.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#menu a {
	width: 14px;
	height: 11px;
	left: 127px;
	top: 281px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#up a {
	width: 27px;
	height: 7px;
	left: 75px;
	top: 298px;
	background: url(${base_url}/up.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#left a {
	width: 8px;
	height: 26px;
	left: 47px;
	top: 325px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#ok a {
	width: 17px;
	height: 11px;
	left: 78px;
	top: 333px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#right a {
	width: 8px;
	height: 25px;
	left: 117px;
	top: 325px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#down a {
	width: 27px;
	height: 7px;
	left: 75px;
	top: 369px;
	background: url(${base_url}/down.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#back a {
	width: 20px;
	height: 17px;
	left: 26px;
	top: 379px;
	background: url(${base_url}/back.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#source a {
	width: 16px;
	height: 11px;
	left: 128px;
	top: 383px;
	background: url(${base_url}/source.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#source a:hover {
	background: url(${base_url}/source_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#exit a {
	width: 23px;
	height: 9px;
	left: 27px;
	top: 416px;
	background: url(${base_url}/exit.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#zoom a {
	width: 26px;
	height: 8px;
	left: 72px;
	top: 416px;
	background: url(${base_url}/zoom.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#zoom a:hover {
	background: url(${base_url}/zoom_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#settings a {
	width: 12px;
	height: 13px;
	left: 125px;
	top: 414px;
	background: url(${base_url}/settings.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#settings a:hover {
	background: url(${base_url}/settings_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#info a {
	width: 24px;
	height: 10px;
	left: 26px;
	top: 446px;
	background: url(${base_url}/info.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#info a:hover {
	background: url(${base_url}/info_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#epg a {
	width: 21px;
	height: 10px;
	left: 74px;
	top: 446px;
	background: url(${base_url}/epg.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#epg a:hover {
	background: url(${base_url}/epg_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#lang a {
	width: 24px;
	height: 12px;
	left: 119px;
	top: 444px;
	background: url(${base_url}/lang.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#lang a:hover {
	background: url(${base_url}/lang_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#usb a {
	width: 20px;
	height: 9px;
	left: 28px;
	top: 475px;
	background: url(${base_url}/usb.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#usb a:hover {
	background: url(${base_url}/usb_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#subt a {
	width: 27px;
	height: 9px;
	left: 73px;
	top: 475px;
	background: url(${base_url}/subt.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#subt a:hover {
	background: url(${base_url}/subt_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#text a {
	width: 24px;
	height: 8px;
	left: 120px;
	top: 475px;
	background: url(${base_url}/text.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#text a:hover {
	background: url(${base_url}/text_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#red a {
	width: 14px;
	height: 3px;
	left: 28px;
	top: 512px;
	background: url(${base_url}/red.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#red a:hover {
	background: url(${base_url}/red_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#green a {
	width: 14px;
	height: 3px;
	left: 61px;
	top: 512px;
	background: url(${base_url}/green.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#green a:hover {
	background: url(${base_url}/green_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#yellow a {
	width: 14px;
	height: 3px;
	left: 93px;
	top: 512px;
	background: url(${base_url}/yellow.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#yellow a:hover {
	background: url(${base_url}/yellow_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#blue a {
	width: 14px;
	height: 3px;
	left: 127px;
	top: 512px;
	background: url(${base_url}/blue.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#blue a:hover {
	background: url(${base_url}/blue_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#fast_back a {
	width: 14px;
	height: 10px;
	left: 29px;
	top: 538px;
	background: url(${base_url}/fast_back.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#fast_back a:hover {
	background: url(${base_url}/fast_back_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#play a {
	width: 8px;
	height: 10px;
	left: 64px;
	top: 538px;
	background: url(${base_url}/play.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#play a:hover {
	background: url(${base_url}/play_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#pause a {
	width: 6px;
	height: 9px;
	left: 96px;
	top: 538px;
	background: url(${base_url}/pause.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#pause a:hover {
	background: url(${base_url}/pause_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#fast_forward a {
	width: 14px;
	height: 10px;
	left: 126px;
	top: 538px;
	background: url(${base_url}/fast_forward.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#fast_forward a:hover {
	background: url(${base_url}/fast_forward_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#skip_back a {
	width: 8px;
	height: 10px;
	left: 32px;
	top: 569px;
	background: url(${base_url}/skip_back.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#skip_back a:hover {
	background: url(${base_url}/skip_back_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#stop a {
	width: 9px;
	height: 9px;
	left: 64px;
	top: 569px;
	background: url(${base_url}/stop.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#stop a:hover {
	background: url(${base_url}/stop_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#skip_forward a {
	width: 9px;
	height: 10px;
	left: 98px;
	top: 569px;
	background: url(${base_url}/skip_forward.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#skip_forward a:hover {
	background: url(${base_url}/skip_forward_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#record a {
	width: 8px;
	height: 8px;
	left: 132px;
	top: 569px;
	background: url(${base_url}/record.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#record a:hover {
	background: url(${base_url}/record_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#netflix a {
	width: 50px;
	height: 13px;
	left: 60px;
	top: 607px;
	background: url(${base_url}/netflix.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#netflix a:hover {
	background: url(${base_url}/netflix_over.png) no-repeat 0px 0px
}



#remote-control-strongtvsmart li#youtube a {
	width: 47px;
	height: 11px;
	left: 60px;
	top: 644px;
	background: url(${base_url}/youtube.png) no-repeat 0px 0px
}

#remote-control-strongtvsmart li#youtube a:hover {
	background: url(${base_url}/youtube_over.png) no-repeat 0px 0px
}




  `;
}

function getRemoteHtml_strongtvsmart(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-strongtvsmart">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="mute" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="one" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="two" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="three" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="four" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="five" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="six" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="seven" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="eight" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="nine" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="fav" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="zero" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="list" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="volume_up" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="volume_down" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="tv" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="smart" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="channel_up" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="channel_down" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="home" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="menu" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="up" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="left" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="ok" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="right" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="down" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="back" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="source" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="exit" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="zoom" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="settings" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="info" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="epg" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="lang" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="usb" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="subt" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="text" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="red" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="green" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="yellow" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="blue" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="fast_back" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="play" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="pause" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="fast_forward" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="skip_back" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="stop" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="skip_forward" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="record" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="netflix" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
					<li id="youtube" class="myButton-strongtvsmart"><a href="#" title=" "><span> </span></a></li>
				</ul>

			</div>	
		</div>

`;
}