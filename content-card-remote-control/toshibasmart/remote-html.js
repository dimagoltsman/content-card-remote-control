function getRemoteStyle_toshibasmart(config) {
   
   const base_url = `/local/content-card-remote-control/${config.remote_template}`;    
    
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

#remote-control-toshibasmart {
	position: relative;
	background: url(${base_url}/toshibasmart.png) no-repeat;
	width: 214px;
	height: 872px
}

#remote-control-toshibasmart h2,
#remote-control-toshibasmart span {
	position: absolute;
	left: 5000px
}

#remote-control-toshibasmart ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

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
#lang a,
#zero a,
#message a,
#volume_plus a,
#volume_minus a,
#mute a,
#g_assist a,
#prg_up a,
#prg_down a,
#home a,
#g_menu a,
#up a,
#info a,
#left a,
#ok a,
#right a,
#back a,
#down a,
#exit a,
#netflix a,
#youtube a,
#menu a,
#source a,
#red a,
#green a,
#yellow a,
#blue a,
#ff_back a,
#stop a,
#ff_forward a,
#record a,
#pause_play a,
#text a {
	position: absolute;
	display: block
}

#remote-control-toshibasmart li#power a {
	width: 49px;
	height: 19px;
	left: 82px;
	top: 40px;
	background: url(${base_url}/power.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#one a {
	width: 25px;
	height: 26px;
	left: 45px;
	top: 79px;
	background: url(${base_url}/one.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#two a {
	width: 25px;
	height: 25px;
	left: 93px;
	top: 79px;
	background: url(${base_url}/two.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#three a {
	width: 24px;
	height: 26px;
	left: 141px;
	top: 77px;
	background: url(${base_url}/three.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#four a {
	width: 29px;
	height: 27px;
	left: 43px;
	top: 118px;
	background: url(${base_url}/four.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#five a {
	width: 27px;
	height: 25px;
	left: 92px;
	top: 118px;
	background: url(${base_url}/five.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#six a {
	width: 28px;
	height: 26px;
	left: 139px;
	top: 116px;
	background: url(${base_url}/six.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0px 0px
}


#remote-control-toshibasmart li#seven a {
	width: 27px;
	height: 25px;
	left: 43px;
	top: 158px;
	background: url(${base_url}/seven.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#eight a {
	width: 28px;
	height: 26px;
	left: 91px;
	top: 156px;
	background: url(${base_url}/eight.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#nine a {
	width: 29px;
	height: 26px;
	left: 139px;
	top: 156px;
	background: url(${base_url}/nine.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#lang a {
	width: 30px;
	height: 14px;
	left: 42px;
	top: 202px;
	background: url(${base_url}/lang.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#lang a:hover {
	background: url(${base_url}/lang_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#zero a {
	width: 26px;
	height: 24px;
	left: 93px;
	top: 197px;
	background: url(${base_url}/zero.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#message a {
	width: 22px;
	height: 19px;
	left: 143px;
	top: 200px;
	background: url(${base_url}/message.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#message a:hover {
	background: url(${base_url}/message_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#volume_plus a {
	width: 30px;
	height: 22px;
	left: 45px;
	top: 247px;
	background: url(${base_url}/volume_plus.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#volume_plus a:hover {
	background: url(${base_url}/volume_plus_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#volume_minus a {
	width: 23px;
	height: 21px;
	left: 42px;
	top: 314px;
	background: url(${base_url}/volume_minus.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#volume_minus a:hover {
	background: url(${base_url}/volume_minus_over.png) no-repeat 0px 0px
}


#remote-control-toshibasmart li#mute a {
	width: 22px;
	height: 23px;
	left: 95px;
	top: 253px;
	background: url(${base_url}/mute.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#g_assist a {
	width: 24px;
	height: 28px;
	left: 95px;
	top: 298px;
	background: url(${base_url}/g_assist.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#g_assist a:hover {
	background: url(${base_url}/g_assist_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#prg_up a {
	width: 27px;
	height: 13px;
	left: 141px;
	top: 245px;
	background: url(${base_url}/prg_up.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#prg_up a:hover {
	background: url(${base_url}/prg_up_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#prg_down a {
	width: 26px;
	height: 18px;
	left: 142px;
	top: 314px;
	background: url(${base_url}/prg_down.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#prg_down a:hover {
	background: url(${base_url}/prg_down_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#home a {
	width: 42px;
	height: 22px;
	left: 86px;
	top: 359px;
	background: url(${base_url}/home.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#g_menu a {
	width: 24px;
	height: 16px;
	left: 41px;
	top: 405px;
	background: url(${base_url}/g_menu.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#g_menu a:hover {
	background: url(${base_url}/g_menu_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#up a {
	width: 19px;
	height: 20px;
	left: 99px;
	top: 406px;
	background: url(${base_url}/up.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#info a {
	width: 20px;
	height: 20px;
	left: 149px;
	top: 403px;
	background: url(${base_url}/info.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#info a:hover {
	background: url(${base_url}/info_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#left a {
	width: 22px;
	height: 16px;
	left: 56px;
	top: 448px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#ok a {
	width: 25px;
	height: 17px;
	left: 94px;
	top: 448px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#right a {
	width: 22px;
	height: 17px;
	left: 135px;
	top: 448px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}


#remote-control-toshibasmart li#back a {
	width: 22px;
	height: 19px;
	left: 41px;
	top: 492px;
	background: url(${base_url}/back.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#down a {
	width: 17px;
	height: 23px;
	left: 101px;
	top: 484px;
	background: url(${base_url}/down.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#exit a {
	width: 26px;
	height: 12px;
	left: 145px;
	top: 496px;
	background: url(${base_url}/exit.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#netflix a {
	width: 58px;
	height: 16px;
	left: 42px;
	top: 533px;
	background: url(${base_url}/netflix.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#netflix a:hover {
	background: url(${base_url}/netflix_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#youtube a {
	width: 43px;
	height: 16px;
	left: 122px;
	top: 534px;
	background: url(${base_url}/youtube.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#youtube a:hover {
	background: url(${base_url}/youtube_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#menu a {
	width: 52px;
	height: 14px;
	left: 43px;
	top: 567px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#source a {
	width: 43px;
	height: 16px;
	left: 122px;
	top: 565px;
	background: url(${base_url}/source.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#source a:hover {
	background: url(${base_url}/source_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#red a {
	width: 32px;
	height: 20px;
	left: 33px;
	top: 599px;
	background: url(${base_url}/red.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#red a:hover {
	background: url(${base_url}/red_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#green a {
	width: 32px;
	height: 20px;
	left: 70px;
	top: 599px;
	background: url(${base_url}/green.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#green a:hover {
	background: url(${base_url}/green_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#yellow a {
	width: 32px;
	height: 20px;
	left: 108px;
	top: 599px;
	background: url(${base_url}/yellow.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#yellow a:hover {
	background: url(${base_url}/yellow_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#blue a {
	width: 32px;
	height: 20px;
	left: 146px;
	top: 599px;
	background: url(${base_url}/blue.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#blue a:hover {
	background: url(${base_url}/blue_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#ff_back a {
	width: 29px;
	height: 13px;
	left: 43px;
	top: 640px;
	background: url(${base_url}/ff_back.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#ff_back a:hover {
	background: url(${base_url}/ff_back_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#stop a {
	width: 29px;
	height: 13px;
	left: 93px;
	top: 641px;
	background: url(${base_url}/stop.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#stop a:hover {
	background: url(${base_url}/stop_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#ff_forward a {
	width: 29px;
	height: 12px;
	left: 143px;
	top: 641px;
	background: url(${base_url}/ff_forward.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#ff_forward a:hover {
	background: url(${base_url}/ff_forward_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#record a {
	width: 30px;
	height: 13px;
	left: 42px;
	top: 670px;
	background: url(${base_url}/record.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#record a:hover {
	background: url(${base_url}/record_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#pause_play a {
	width: 32px;
	height: 14px;
	left: 91px;
	top: 669px;
	background: url(${base_url}/pause_play.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#pause_play a:hover {
	background: url(${base_url}/pause_play_over.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#text a {
	width: 29px;
	height: 12px;
	left: 143px;
	top: 669px;
	background: url(${base_url}/text.png) no-repeat 0px 0px
}

#remote-control-toshibasmart li#text a:hover {
	background: url(${base_url}/text_over.png) no-repeat 0px 0px
}


  `;
}

function getRemoteHtml_toshibasmart(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-toshibasmart">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-toshibasmart"><a href="#" title="power"><span>power</span></a></li>
					<li id="one" class="myButton-toshibasmart"><a href="#" title="one"><span>one</span></a></li>
					<li id="two" class="myButton-toshibasmart"><a href="#" title="two"><span>two</span></a></li>
					<li id="three" class="myButton-toshibasmart"><a href="#" title="three"><span>three</span></a></li>
					<li id="four" class="myButton-toshibasmart"><a href="#" title="four"><span>four</span></a></li>
					<li id="five" class="myButton-toshibasmart"><a href="#" title="five"><span>five</span></a></li>
					<li id="six" class="myButton-toshibasmart"><a href="#" title="six"><span>six</span></a></li>
					<li id="seven" class="myButton-toshibasmart"><a href="#" title="seven"><span>seven</span></a></li>
					<li id="eight" class="myButton-toshibasmart"><a href="#" title="eight"><span>eight</span></a></li>
					<li id="nine" class="myButton-toshibasmart"><a href="#" title="nine"><span>nine</span></a></li>
					<li id="lang" class="myButton-toshibasmart"><a href="#" title="lang"><span>lang</span></a></li>
					<li id="zero" class="myButton-toshibasmart"><a href="#" title="zero"><span>zero</span></a></li>
					<li id="message" class="myButton-toshibasmart"><a href="#" title="message"><span>message</span></a></li>
					<li id="volume_plus" class="myButton-toshibasmart"><a href="#" title="volume_plus"><span>volume_plus</span></a></li>
					<li id="volume_minus" class="myButton-toshibasmart"><a href="#" title="volume_minus"><span>volume_minus</span></a></li>
					<li id="mute" class="myButton-toshibasmart"><a href="#" title="mute"><span>mute</span></a></li>
					<li id="g_assist" class="myButton-toshibasmart"><a href="#" title="g_assist"><span>g_assist</span></a></li>
					<li id="prg_up" class="myButton-toshibasmart"><a href="#" title="prg_up"><span>prg_up</span></a></li>
					<li id="prg_down" class="myButton-toshibasmart"><a href="#" title="prg_down"><span>prg_down</span></a></li>
					<li id="home" class="myButton-toshibasmart"><a href="#" title="home"><span>home</span></a></li>
					<li id="g_menu" class="myButton-toshibasmart"><a href="#" title="g_menu"><span>g_menu</span></a></li>
					<li id="up" class="myButton-toshibasmart"><a href="#" title="up"><span>up</span></a></li>
					<li id="info" class="myButton-toshibasmart"><a href="#" title="info"><span>info</span></a></li>
					<li id="left" class="myButton-toshibasmart"><a href="#" title="left"><span>left</span></a></li>
					<li id="ok" class="myButton-toshibasmart"><a href="#" title="ok"><span>ok</span></a></li>
					<li id="right" class="myButton-toshibasmart"><a href="#" title="right"><span>right</span></a></li>
					<li id="back" class="myButton-toshibasmart"><a href="#" title="back"><span>back</span></a></li>
					<li id="down" class="myButton-toshibasmart"><a href="#" title="down"><span>down</span></a></li>
					<li id="exit" class="myButton-toshibasmart"><a href="#" title="exit"><span>exit</span></a></li>
					<li id="netflix" class="myButton-toshibasmart"><a href="#" title="netflix"><span>netflix</span></a></li>
					<li id="youtube" class="myButton-toshibasmart"><a href="#" title="youtube"><span>youtube</span></a></li>
					<li id="menu" class="myButton-toshibasmart"><a href="#" title="menu"><span>menu</span></a></li>
					<li id="source" class="myButton-toshibasmart"><a href="#" title="source"><span>source</span></a></li>
					<li id="red" class="myButton-toshibasmart"><a href="#" title="red"><span>red</span></a></li>
					<li id="green" class="myButton-toshibasmart"><a href="#" title="green"><span>green</span></a></li>
					<li id="yellow" class="myButton-toshibasmart"><a href="#" title="yellow"><span>yellow</span></a></li>
					<li id="blue" class="myButton-toshibasmart"><a href="#" title="blue"><span>blue</span></a></li>
					<li id="ff_back" class="myButton-toshibasmart"><a href="#" title="ff_back"><span>ff_back</span></a></li>
					<li id="stop" class="myButton-toshibasmart"><a href="#" title="stop"><span>stop</span></a></li>
					<li id="ff_forward" class="myButton-toshibasmart"><a href="#" title="ff_forward"><span>ff_forward</span></a></li>
					<li id="record" class="myButton-toshibasmart"><a href="#" title="record"><span>record</span></a></li>
					<li id="pause_play" class="myButton-toshibasmart"><a href="#" title="pause_play"><span>pause_play</span></a></li>
					<li id="text" class="myButton-toshibasmart"><a href="#" title="text"><span>text</span></a></li>

					
					



				</ul>

			</div>	
		</div>

`;
}