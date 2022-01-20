function getRemoteStyle_samsungtvmt(config) {
   
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

#remote-control-samsungtvmt {
	position: relative;
	background: url(${base_url}/samsungtvmt.png) no-repeat;
	width: 252px;
	height: 865px
}

#remote-control-samsungtvmt h2,
#remote-control-samsungtvmt span {
	position: absolute;
	display: none;
}

#remote-control-samsungtvmt ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#source a,
#one a,
#two a,
#three a,
#four a,
#five a,
#six a,
#seven a,
#eight a,
#nine a,
#ttx_mix a,
#zero a,
#pre_ch a,
#volume_plus a,
#volume_minus a,
#mute a,
#ch_list a,
#channel_plus a,
#channel_minus a,
#media_p a,
#menu a,
#guide a,
#tools a,
#up a,
#info a,
#left a,
#centre a,
#right a,
#return a,
#down a,
#exit a,
#red a,
#green a,
#yellow a,
#blue a,
#e_manual a,
#pic_size a,
#subs a,
#stop a,
#fast_back a,
#play a,
#pause a,
#fast_forward a{
	position: absolute;
	display: block
}

#remote-control-samsungtvmt li#power a {
	width: 30px;
	height: 32px;
	left: 45px;
	top: 45px;
	background: url(${base_url}/power.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#source a {
	width: 44px;
	height: 29px;
	left: 167px;
	top: 44px;
	background: url(${base_url}/source.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#source a:hover {
	background: url(${base_url}/source_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#one a {
	width: 13px;
	height: 26px;
	left: 52px;
	top: 101px;
	background: url(${base_url}/one.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#two a {
	width: 19px;
	height: 25px;
	left: 118px;
	top: 101px;
	background: url(${base_url}/two.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#three a {
	width: 21px;
	height: 27px;
	left: 182px;
	top: 101px;
	background: url(${base_url}/three.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#four a {
	width: 21px;
	height: 27px;
	left: 54px;
	top: 148px;
	background: url(${base_url}/four.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#five a {
	width: 20px;
	height: 26px;
	left: 120px;
	top: 148px;
	background: url(${base_url}/five.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#six a {
	width: 21px;
	height: 26px;
	left: 183px;
	top: 148px;
	background: url(${base_url}/six.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#seven a {
	width: 20px;
	height: 26px;
	left: 53px;
	top: 193px;
	background: url(${base_url}/seven.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#eight a {
	width: 20px;
	height: 27px;
	left: 118px;
	top: 193px;
	background: url(${base_url}/eight.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#nine a {
	width: 19px;
	height: 26px;
	left: 181px;
	top: 193px;
	background: url(${base_url}/nine.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#ttx_mix a {
	width: 41px;
	height: 27px;
	left: 41px;
	top: 240px;
	background: url(${base_url}/ttx_mix.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#ttx_mix a:hover {
	background: url(${base_url}/ttx_mix_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#zero a {
	width: 20px;
	height: 27px;
	left: 118px;
	top: 240px;
	background: url(${base_url}/zero.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#pre_ch a {
	width: 43px;
	height: 26px;
	left: 169px;
	top: 240px;
	background: url(${base_url}/pre_ch.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#pre_ch a:hover {
	background: url(${base_url}/pre_ch_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#volume_plus a {
	width: 29px;
	height: 30px;
	left: 51px;
	top: 310px;
	background: url(${base_url}/volume_plus.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#volume_plus a:hover {
	background: url(${base_url}/volume_plus_over.png) no-repeat 0px 0px
}




#remote-control-samsungtvmt li#volume_minus a {
	width: 29px;
	height: 6px;
	left: 51px;
	top: 389px;
	background: url(${base_url}/volume_minus.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#volume_minus a:hover {
	background: url(${base_url}/volume_minus_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#mute a {
	width: 32px;
	height: 37px;
	left: 110px;
	top: 298px;
	background: url(${base_url}/mute.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#ch_list a {
	width: 31px;
	height: 28px;
	left: 110px;
	top: 361px;
	background: url(${base_url}/ch_list.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#ch_list a:hover {
	background: url(${base_url}/ch_list_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#channel_plus a {
	width: 38px;
	height: 18px;
	left: 170px;
	top: 307px;
	background: url(${base_url}/channel_plus.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#channel_plus a:hover {
	background: url(${base_url}/channel_plus_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#channel_minus a {
	width: 38px;
	height: 18px;
	left: 170px;
	top: 383px;
	background: url(${base_url}/channel_minus.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#channel_minus a:hover {
	background: url(${base_url}/channel_minus_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#media_p a {
	width: 46px;
	height: 11px;
	left: 41px;
	top: 442px;
	background: url(${base_url}/media_p.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#media_p a:hover {
	background: url(${base_url}/media_p_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#menu a {
	width: 38px;
	height: 27px;
	left: 108px;
	top: 430px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#guide a {
	width: 40px;
	height: 12px;
	left: 167px;
	top: 443px;
	background: url(${base_url}/guide.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#guide a:hover {
	background: url(${base_url}/guide_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#tools a {
	width: 49px;
	height: 29px;
	left: 43px;
	top: 489px;
	background: url(${base_url}/tools.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#tools a:hover {
	background: url(${base_url}/tools_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#up a {
	width: 19px;
	height: 20px;
	left: 118px;
	top: 499px;
	background: url(${base_url}/up.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#info a {
	width: 33px;
	height: 29px;
	left: 172px;
	top: 488px;
	background: url(${base_url}/info.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#info a:hover {
	background: url(${base_url}/info_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#left a {
	width: 22px;
	height: 16px;
	left: 61px;
	top: 552px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#centre a {
	width: 27px;
	height: 17px;
	left: 114px;
	top: 557px;
	background: url(${base_url}/centre.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#centre a:hover {
	background: url(${base_url}/centre_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#right a {
	width: 22px;
	height: 17px;
	left: 173px;
	top: 552px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#return a {
	width: 41px;
	height: 28px;
	left: 44px;
	top: 606px;
	background: url(${base_url}/return.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#return a:hover {
	background: url(${base_url}/return_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#down a {
	width: 17px;
	height: 23px;
	left: 119px;
	top: 602px;
	background: url(${base_url}/down.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#exit a {
	width: 39px;
	height: 29px;
	left: 174px;
	top: 606px;
	background: url(${base_url}/exit.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#red a {
	width: 32px;
	height: 24px;
	left: 43px;
	top: 652px;
	background: url(${base_url}/red.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#red a:hover {
	background: url(${base_url}/red_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#green a {
	width: 32px;
	height: 24px;
	left: 89px;
	top: 652px;
	background: url(${base_url}/green.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#green a:hover {
	background: url(${base_url}/green_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#yellow a {
	width: 32px;
	height: 24px;
	left: 134px;
	top: 652px;
	background: url(${base_url}/yellow.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#yellow a:hover {
	background: url(${base_url}/yellow_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#blue a {
	width: 32px;
	height: 24px;
	left: 181px;
	top: 652px;
	background: url(${base_url}/blue.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#blue a:hover {
	background: url(${base_url}/blue_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#e_manual a {
	width: 29px;
	height: 12px;
	left: 43px;
	top: 697px;
	background: url(${base_url}/e_manual.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#e_manual a:hover {
	background: url(${base_url}/e_manual_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#pic_size a {
	width: 29px;
	height: 12px;
	left: 90px;
	top: 697px;
	background: url(${base_url}/pic_size.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#pic_size a:hover {
	background: url(${base_url}/pic_size_over.png) no-repeat 0px 0px
}




#remote-control-samsungtvmt li#subs a {
	width: 28px;
	height: 12px;
	left: 137px;
	top: 697px;
	background: url(${base_url}/subs.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#subs a:hover {
	background: url(${base_url}/subs_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#stop a {
	width: 14px;
	height: 14px;
	left: 191px;
	top: 697px;
	background: url(${base_url}/stop.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#stop a:hover {
	background: url(${base_url}/stop_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#fast_back a {
	width: 24px;
	height: 13px;
	left: 46px;
	top: 733px;
	background: url(${base_url}/fast_back.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#fast_back a:hover {
	background: url(${base_url}/fast_back_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#play a {
	width: 27px;
	height: 14px;
	left: 97px;
	top: 733px;
	background: url(${base_url}/play.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#play a:hover {
	background: url(${base_url}/play_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#pause a {
	width: 18px;
	height: 14px;
	left: 145px;
	top: 733px;
	background: url(${base_url}/pause.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#pause a:hover {
	background: url(${base_url}/pause_over.png) no-repeat 0px 0px
}



#remote-control-samsungtvmt li#fast_forward a {
	width: 23px;
	height: 11px;
	left: 185px;
	top: 733px;
	background: url(${base_url}/fast_forward.png) no-repeat 0px 0px
}

#remote-control-samsungtvmt li#fast_forward a:hover {
	background: url(${base_url}/fast_forward_over.png) no-repeat 0px 0px
}



  `;
}

function getRemoteHtml_samsungtvmt(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-samsungtvmt">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="source" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="one" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="two" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="three" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="four" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="five" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="six" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="seven" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="eight" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="nine" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="ttx_mix" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="zero" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="pre_ch" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="volume_plus" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="volume_minus" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="mute" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="ch_list" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="channel_plus" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="channel_minus" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="media_p" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="menu" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="guide" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="tools" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="up" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="info" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="left" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="centre" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="right" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="return" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="down" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="exit" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="red" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="green" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="yellow" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="blue" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="e_manual" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="pic_size" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="subs" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="stop" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="fast_back" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="play" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="pause" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>
					<li id="fast_forward" class="myButton-samsungtvmt"><a href="#" title=" "><span> </span></a></li>

				</ul>

			</div>	
		</div>

`;
}