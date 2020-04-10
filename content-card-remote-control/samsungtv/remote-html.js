function getRemoteStyle_samsungtv(config) {
   
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

#remote-control-samsungtv {
	position: relative;
	background: url(${base_url}/samsungtv.png) no-repeat;
	width: 252px;
	height: 865px
}

#remote-control-samsungtv h2,
#remote-control-samsungtv span {
	position: absolute;
	left: 5000px
}

#remote-control-samsungtv ul {
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

#remote-control-samsungtv li#power a {
	width: 30px;
	height: 32px;
	left: 45px;
	top: 45px;
	background: url(${base_url}/power.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#source a {
	width: 44px;
	height: 29px;
	left: 167px;
	top: 44px;
	background: url(${base_url}/source.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#source a:hover {
	background: url(${base_url}/source_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#one a {
	width: 13px;
	height: 26px;
	left: 52px;
	top: 101px;
	background: url(${base_url}/one.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#two a {
	width: 19px;
	height: 25px;
	left: 118px;
	top: 101px;
	background: url(${base_url}/two.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#three a {
	width: 21px;
	height: 27px;
	left: 182px;
	top: 101px;
	background: url(${base_url}/three.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#four a {
	width: 21px;
	height: 27px;
	left: 54px;
	top: 148px;
	background: url(${base_url}/four.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#five a {
	width: 20px;
	height: 26px;
	left: 120px;
	top: 148px;
	background: url(${base_url}/five.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#six a {
	width: 21px;
	height: 26px;
	left: 183px;
	top: 148px;
	background: url(${base_url}/six.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#seven a {
	width: 20px;
	height: 26px;
	left: 53px;
	top: 193px;
	background: url(${base_url}/seven.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#eight a {
	width: 20px;
	height: 27px;
	left: 118px;
	top: 193px;
	background: url(${base_url}/eight.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#nine a {
	width: 19px;
	height: 26px;
	left: 181px;
	top: 193px;
	background: url(${base_url}/nine.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#ttx_mix a {
	width: 41px;
	height: 27px;
	left: 41px;
	top: 240px;
	background: url(${base_url}/ttx_mix.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#ttx_mix a:hover {
	background: url(${base_url}/ttx_mix_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#zero a {
	width: 20px;
	height: 27px;
	left: 118px;
	top: 240px;
	background: url(${base_url}/zero.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#pre_ch a {
	width: 43px;
	height: 26px;
	left: 169px;
	top: 240px;
	background: url(${base_url}/pre_ch.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#pre_ch a:hover {
	background: url(${base_url}/pre_ch_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#volume_plus a {
	width: 29px;
	height: 30px;
	left: 51px;
	top: 310px;
	background: url(${base_url}/volume_plus.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#volume_plus a:hover {
	background: url(${base_url}/volume_plus_over.png) no-repeat 0px 0px
}




#remote-control-samsungtv li#volume_minus a {
	width: 29px;
	height: 6px;
	left: 51px;
	top: 389px;
	background: url(${base_url}/volume_minus.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#volume_minus a:hover {
	background: url(${base_url}/volume_minus_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#mute a {
	width: 32px;
	height: 37px;
	left: 110px;
	top: 298px;
	background: url(${base_url}/mute.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#ch_list a {
	width: 31px;
	height: 28px;
	left: 110px;
	top: 361px;
	background: url(${base_url}/ch_list.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#ch_list a:hover {
	background: url(${base_url}/ch_list_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#channel_plus a {
	width: 38px;
	height: 18px;
	left: 170px;
	top: 307px;
	background: url(${base_url}/channel_plus.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#channel_plus a:hover {
	background: url(${base_url}/channel_plus_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#channel_minus a {
	width: 38px;
	height: 18px;
	left: 170px;
	top: 383px;
	background: url(${base_url}/channel_minus.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#channel_minus a:hover {
	background: url(${base_url}/channel_minus_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#media_p a {
	width: 46px;
	height: 11px;
	left: 41px;
	top: 442px;
	background: url(${base_url}/media_p.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#media_p a:hover {
	background: url(${base_url}/media_p_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#menu a {
	width: 38px;
	height: 27px;
	left: 108px;
	top: 430px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#guide a {
	width: 40px;
	height: 12px;
	left: 167px;
	top: 443px;
	background: url(${base_url}/guide.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#guide a:hover {
	background: url(${base_url}/guide_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#tools a {
	width: 49px;
	height: 29px;
	left: 43px;
	top: 489px;
	background: url(${base_url}/tools.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#tools a:hover {
	background: url(${base_url}/tools_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#up a {
	width: 19px;
	height: 20px;
	left: 118px;
	top: 499px;
	background: url(${base_url}/up.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#info a {
	width: 33px;
	height: 29px;
	left: 172px;
	top: 488px;
	background: url(${base_url}/info.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#info a:hover {
	background: url(${base_url}/info_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#left a {
	width: 22px;
	height: 16px;
	left: 61px;
	top: 552px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#centre a {
	width: 27px;
	height: 17px;
	left: 114px;
	top: 557px;
	background: url(${base_url}/centre.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#centre a:hover {
	background: url(${base_url}/centre_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#right a {
	width: 22px;
	height: 17px;
	left: 173px;
	top: 552px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#return a {
	width: 41px;
	height: 28px;
	left: 44px;
	top: 606px;
	background: url(${base_url}/return.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#return a:hover {
	background: url(${base_url}/return_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#down a {
	width: 17px;
	height: 23px;
	left: 119px;
	top: 602px;
	background: url(${base_url}/down.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#exit a {
	width: 39px;
	height: 29px;
	left: 174px;
	top: 606px;
	background: url(${base_url}/exit.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#red a {
	width: 32px;
	height: 24px;
	left: 43px;
	top: 652px;
	background: url(${base_url}/red.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#red a:hover {
	background: url(${base_url}/red_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#green a {
	width: 32px;
	height: 24px;
	left: 89px;
	top: 652px;
	background: url(${base_url}/green.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#green a:hover {
	background: url(${base_url}/green_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#yellow a {
	width: 32px;
	height: 24px;
	left: 134px;
	top: 652px;
	background: url(${base_url}/yellow.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#yellow a:hover {
	background: url(${base_url}/yellow_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#blue a {
	width: 32px;
	height: 24px;
	left: 181px;
	top: 652px;
	background: url(${base_url}/blue.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#blue a:hover {
	background: url(${base_url}/blue_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#e_manual a {
	width: 29px;
	height: 12px;
	left: 43px;
	top: 697px;
	background: url(${base_url}/e_manual.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#e_manual a:hover {
	background: url(${base_url}/e_manual_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#pic_size a {
	width: 29px;
	height: 12px;
	left: 90px;
	top: 697px;
	background: url(${base_url}/pic_size.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#pic_size a:hover {
	background: url(${base_url}/pic_size_over.png) no-repeat 0px 0px
}




#remote-control-samsungtv li#subs a {
	width: 28px;
	height: 12px;
	left: 137px;
	top: 697px;
	background: url(${base_url}/subs.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#subs a:hover {
	background: url(${base_url}/subs_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#stop a {
	width: 14px;
	height: 14px;
	left: 191px;
	top: 697px;
	background: url(${base_url}/stop.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#stop a:hover {
	background: url(${base_url}/stop_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#fast_back a {
	width: 24px;
	height: 13px;
	left: 46px;
	top: 733px;
	background: url(${base_url}/fast_back.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#fast_back a:hover {
	background: url(${base_url}/fast_back_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#play a {
	width: 27px;
	height: 14px;
	left: 97px;
	top: 733px;
	background: url(${base_url}/play.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#play a:hover {
	background: url(${base_url}/play_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#pause a {
	width: 18px;
	height: 14px;
	left: 145px;
	top: 733px;
	background: url(${base_url}/pause.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#pause a:hover {
	background: url(${base_url}/pause_over.png) no-repeat 0px 0px
}



#remote-control-samsungtv li#fast_forward a {
	width: 23px;
	height: 11px;
	left: 185px;
	top: 733px;
	background: url(${base_url}/fast_forward.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#fast_forward a:hover {
	background: url(${base_url}/fast_forward_over.png) no-repeat 0px 0px
}



  `;
}

function getRemoteHtml_samsungtv(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-samsungtv">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-samsungtv"><a href="#" title="power"><span>power</span></a></li>
					<li id="source" class="myButton-samsungtv"><a href="#" title="source"><span>source</span></a></li>
					<li id="one" class="myButton-samsungtv"><a href="#" title="one"><span>one</span></a></li>
					<li id="two" class="myButton-samsungtv"><a href="#" title="two"><span>two</span></a></li>
					<li id="three" class="myButton-samsungtv"><a href="#" title="three"><span>three</span></a></li>
					<li id="four" class="myButton-samsungtv"><a href="#" title="four"><span>four</span></a></li>
					<li id="five" class="myButton-samsungtv"><a href="#" title="five"><span>five</span></a></li>
					<li id="six" class="myButton-samsungtv"><a href="#" title="six"><span>six</span></a></li>
					<li id="seven" class="myButton-samsungtv"><a href="#" title="seven"><span>seven</span></a></li>
					<li id="eight" class="myButton-samsungtv"><a href="#" title="eight"><span>eight</span></a></li>
					<li id="nine" class="myButton-samsungtv"><a href="#" title="nine"><span>nine</span></a></li>
					<li id="ttx_mix" class="myButton-samsungtv"><a href="#" title="ttx_mix"><span>ttx_mix</span></a></li>
					<li id="zero" class="myButton-samsungtv"><a href="#" title="zero"><span>zero</span></a></li>
					<li id="pre_ch" class="myButton-samsungtv"><a href="#" title="pre_ch"><span>pre_ch</span></a></li>
					<li id="volume_plus" class="myButton-samsungtv"><a href="#" title="volume_plus"><span>volume_plus</span></a></li>
					<li id="volume_minus" class="myButton-samsungtv"><a href="#" title="volume_minus"><span>volume_minus</span></a></li>
					<li id="mute" class="myButton-samsungtv"><a href="#" title="mute"><span>mute</span></a></li>
					<li id="ch_list" class="myButton-samsungtv"><a href="#" title="ch_list"><span>ch_list</span></a></li>
					<li id="channel_plus" class="myButton-samsungtv"><a href="#" title="channel_plus"><span>channel_plus</span></a></li>
					<li id="channel_minus" class="myButton-samsungtv"><a href="#" title="channel_minus"><span>channel_minus</span></a></li>
					<li id="media_p" class="myButton-samsungtv"><a href="#" title="media_p"><span>media_p</span></a></li>
					<li id="menu" class="myButton-samsungtv"><a href="#" title="menu"><span>menu</span></a></li>
					<li id="guide" class="myButton-samsungtv"><a href="#" title="guide"><span>guide</span></a></li>
					<li id="tools" class="myButton-samsungtv"><a href="#" title="tools"><span>tools</span></a></li>
					<li id="up" class="myButton-samsungtv"><a href="#" title="up"><span>up</span></a></li>
					<li id="info" class="myButton-samsungtv"><a href="#" title="info"><span>info</span></a></li>
					<li id="left" class="myButton-samsungtv"><a href="#" title="left"><span>left</span></a></li>
					<li id="centre" class="myButton-samsungtv"><a href="#" title="centre"><span>centre</span></a></li>
					<li id="right" class="myButton-samsungtv"><a href="#" title="right"><span>right</span></a></li>
					<li id="return" class="myButton-samsungtv"><a href="#" title="return"><span>return</span></a></li>
					<li id="down" class="myButton-samsungtv"><a href="#" title="down"><span>down</span></a></li>
					<li id="exit" class="myButton-samsungtv"><a href="#" title="exit"><span>exit</span></a></li>
					<li id="red" class="myButton-samsungtv"><a href="#" title="red"><span>red</span></a></li>
					<li id="green" class="myButton-samsungtv"><a href="#" title="green"><span>green</span></a></li>
					<li id="yellow" class="myButton-samsungtv"><a href="#" title="yellow"><span>yellow</span></a></li>
					<li id="blue" class="myButton-samsungtv"><a href="#" title="blue"><span>blue</span></a></li>
					<li id="e_manual" class="myButton-samsungtv"><a href="#" title="e_manual"><span>e_manual</span></a></li>
					<li id="pic_size" class="myButton-samsungtv"><a href="#" title="pic_size"><span>pic_size</span></a></li>
					<li id="subs" class="myButton-samsungtv"><a href="#" title="subs"><span>subs</span></a></li>
					<li id="stop" class="myButton-samsungtv"><a href="#" title="stop"><span>stop</span></a></li>
					<li id="fast_back" class="myButton-samsungtv"><a href="#" title="fast_back"><span>fast_back</span></a></li>
					<li id="play" class="myButton-samsungtv"><a href="#" title="play"><span>play</span></a></li>
					<li id="pause" class="myButton-samsungtv"><a href="#" title="pause"><span>pause</span></a></li>
					<li id="fast_forward" class="myButton-samsungtv"><a href="#" title="fast_forward"><span>fast_forward</span></a></li>

				</ul>

			</div>	
		</div>

`;
}