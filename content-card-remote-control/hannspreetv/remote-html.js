function getRemoteStyle_hannspreetv(config) {
   
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

#remote-control-hannspreetv {
	position: relative;
	background: url(${base_url}/hannspreetv.png) no-repeat;
	width: 220px;
	height: 888px
}

#remote-control-hannspreetv h2,
#remote-control-hannspreetv span {
	position: absolute;
	left: 5000px
}

#remote-control-hannspreetv ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

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
#eco a,
#zero a,
#guide a,
#menu a,
#up a,
#exit a,
#left a,
#ok a,
#right a,
#option a,
#down a,
#return a,
#volume_plus a,
#volume_minus a,
#info a,
#mute a,
#channel_plus a,
#channel_minus a,
#text a,
#sub a,
#list a,
#tv a,
#red a,
#green a,
#yellow a,
#blue a{
	position: absolute;
	display: block
}


#remote-control-hannspreetv li#source a {
	width: 27px;
	height: 9px;
	left: 38px;
	top: 54px;
	background: url(${base_url}/source.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#source a:hover {
	background: url(${base_url}/source_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#power a {
	width: 22px;
	height: 24px;
	left: 154px;
	top: 49px;
	background: url(${base_url}/power.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#one a {
	width: 7px;
	height: 16px;
	left: 45px;
	top: 116px;
	background: url(${base_url}/one.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#two a {
	width: 9px;
	height: 16px;
	left: 103px;
	top: 116px;
	background: url(${base_url}/two.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#three a {
	width: 9px;
	height: 16px;
	left: 162px;
	top: 116px;
	background: url(${base_url}/three.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#four a {
	width: 10px;
	height: 16px;
	left: 45px;
	top: 169px;
	background: url(${base_url}/four.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#five a {
	width: 9px;
	height: 16px;
	left: 105px;
	top: 169px;
	background: url(${base_url}/five.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#six a {
	width: 10px;
	height: 16px;
	left: 163px;
	top: 169px;
	background: url(${base_url}/six.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#seven a {
	width: 9px;
	height: 16px;
	left: 46px;
	top: 220px;
	background: url(${base_url}/seven.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#eight a {
	width: 9px;
	height: 16px;
	left: 106px;
	top: 215px;
	background: url(${base_url}/eight.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#nine a {
	width: 9px;
	height: 16px;
	left: 163px;
	top: 220px;
	background: url(${base_url}/nine.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#eco a {
	width: 17px;
	height: 10px;
	left: 44px;
	top: 273px;
	background: url(${base_url}/eco.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#eco a:hover {
	background: url(${base_url}/eco_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#zero a {
	width: 9px;
	height: 16px;
	left: 104px;
	top: 269px;
	background: url(${base_url}/zero.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#guide a {
	width: 29px;
	height: 10px;
	left: 152px;
	top: 273px;
	background: url(${base_url}/guide.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#guide a:hover {
	background: url(${base_url}/guide_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#menu a {
	width: 24px;
	height: 8px;
	left: 35px;
	top: 329px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#up a {
	width: 20px;
	height: 20px;
	left: 99px;
	top: 333px;
	background: url(${base_url}/up.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#exit a {
	width: 17px;
	height: 8px;
	left: 163px;
	top: 329px;
	background: url(${base_url}/exit.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#left a {
	width: 20px;
	height: 20px;
	left: 44px;
	top: 386px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#ok a {
	width: 22px;
	height: 17px;
	left: 98px;
	top: 389px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#right a {
	width: 20px;
	height: 20px;
	left: 152px;
	top: 386px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#option a {
	width: 25px;
	height: 7px;
	left: 35px;
	top: 462px;
	background: url(${base_url}/option.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#option a:hover {
	background: url(${base_url}/option_over.png) no-repeat 0px 0px
}




#remote-control-hannspreetv li#down a {
	width: 20px;
	height: 20px;
	left: 99px;
	top: 441px;
	background: url(${base_url}/down.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#return a {
	width: 26px;
	height: 7px;
	left: 160px;
	top: 462px;
	background: url(${base_url}/return.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#return a:hover {
	background: url(${base_url}/return_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#volume_plus a {
	width: 16px;
	height: 16px;
	left: 41px;
	top: 516px;
	background: url(${base_url}/volume_plus.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#volume_plus a:hover {
	background: url(${base_url}/volume_plus_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#volume_minus a {
	width: 16px;
	height: 3px;
	left: 41px;
	top: 580px;
	background: url(${base_url}/volume_minus.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#volume_minus a:hover {
	background: url(${base_url}/volume_minus_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#info a {
	width: 19px;
	height: 8px;
	left: 98px;
	top: 517px;
	background: url(${base_url}/info.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#info a:hover {
	background: url(${base_url}/info_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#mute a {
	width: 16px;
	height: 16px;
	left: 101px;
	top: 572px;
	background: url(${base_url}/mute.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#channel_plus a {
	width: 20px;
	height: 13px;
	left: 159px;
	top: 514px;
	background: url(${base_url}/channel_plus.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#channel_plus a:hover {
	background: url(${base_url}/channel_plus_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#channel_minus a {
	width: 20px;
	height: 13px;
	left: 159px;
	top: 575px;
	background: url(${base_url}/channel_minus.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#channel_minus a:hover {
	background: url(${base_url}/channel_minus_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#text a {
	width: 25px;
	height: 25px;
	left: 32px;
	top: 621px;
	background: url(${base_url}/text.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#text a:hover {
	background: url(${base_url}/text_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#sub a {
	width: 25px;
	height: 25px;
	left: 75px;
	top: 621px;
	background: url(${base_url}/sub.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#sub a:hover {
	background: url(${base_url}/sub_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#list a {
	width: 25px;
	height: 25px;
	left: 119px;
	top: 621px;
	background: url(${base_url}/list.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#list a:hover {
	background: url(${base_url}/list_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#tv a {
	width: 25px;
	height: 25px;
	left: 162px;
	top: 621px;
	background: url(${base_url}/tv.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#tv a:hover {
	background: url(${base_url}/tv_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#red a {
	width: 25px;
	height: 25px;
	left: 32px;
	top: 664px;
	background: url(${base_url}/red.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#red a:hover {
	background: url(${base_url}/red_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#green a {
	width: 25px;
	height: 25px;
	left: 75px;
	top: 664px;
	background: url(${base_url}/green.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#green a:hover {
	background: url(${base_url}/green_over.png) no-repeat 0px 0px
}




#remote-control-hannspreetv li#yellow a {
	width: 25px;
	height: 25px;
	left: 119px;
	top: 664px;
	background: url(${base_url}/yellow.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#yellow a:hover {
	background: url(${base_url}/yellow_over.png) no-repeat 0px 0px
}



#remote-control-hannspreetv li#blue a {
	width: 25px;
	height: 25px;
	left: 162px;
	top: 664px;
	background: url(${base_url}/blue.png) no-repeat 0px 0px
}

#remote-control-hannspreetv li#blue a:hover {
	background: url(${base_url}/blue_over.png) no-repeat 0px 0px
}


  `;
}

function getRemoteHtml_hannspreetv(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-hannspreetv">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="source" class="myButton-hannspreetv"><a href="#" title="source"><span>source</span></a></li>
					<li id="power" class="myButton-hannspreetv"><a href="#" title="power"><span>power</span></a></li>
					<li id="one" class="myButton-hannspreetv"><a href="#" title="one"><span>one</span></a></li>
					<li id="two" class="myButton-hannspreetv"><a href="#" title="two"><span>two</span></a></li>
					<li id="three" class="myButton-hannspreetv"><a href="#" title="three"><span>three</span></a></li>
					<li id="four" class="myButton-hannspreetv"><a href="#" title="four"><span>four</span></a></li>
					<li id="five" class="myButton-hannspreetv"><a href="#" title="five"><span>five</span></a></li>
					<li id="six" class="myButton-hannspreetv"><a href="#" title="six"><span>six</span></a></li>
					<li id="seven" class="myButton-hannspreetv"><a href="#" title="seven"><span>seven</span></a></li>
					<li id="eight" class="myButton-hannspreetv"><a href="#" title="eight"><span>eight</span></a></li>
					<li id="nine" class="myButton-hannspreetv"><a href="#" title="nine"><span>nine</span></a></li>
					<li id="eco" class="myButton-hannspreetv"><a href="#" title="eco"><span>eco</span></a></li>
					<li id="zero" class="myButton-hannspreetv"><a href="#" title="zero"><span>zero</span></a></li>
					<li id="guide" class="myButton-hannspreetv"><a href="#" title="guide"><span>guide</span></a></li>
					<li id="menu" class="myButton-hannspreetv"><a href="#" title="menu"><span>menu</span></a></li>
					<li id="up" class="myButton-hannspreetv"><a href="#" title="up"><span>up</span></a></li>
					<li id="exit" class="myButton-hannspreetv"><a href="#" title="exit"><span>exit</span></a></li>
					<li id="left" class="myButton-hannspreetv"><a href="#" title="left"><span>left</span></a></li>
					<li id="ok" class="myButton-hannspreetv"><a href="#" title="ok"><span>ok</span></a></li>
					<li id="right" class="myButton-hannspreetv"><a href="#" title="right"><span>right</span></a></li>
					<li id="option" class="myButton-hannspreetv"><a href="#" title="option"><span>option</span></a></li>
					<li id="down" class="myButton-hannspreetv"><a href="#" title="down"><span>down</span></a></li>
					<li id="return" class="myButton-hannspreetv"><a href="#" title="return"><span>return</span></a></li>
					<li id="volume_plus" class="myButton-hannspreetv"><a href="#" title="volume_plus"><span>volume_plus</span></a></li>
					<li id="volume_minus" class="myButton-hannspreetv"><a href="#" title="volume_minus"><span>volume_minus</span></a></li>
					<li id="info" class="myButton-hannspreetv"><a href="#" title="info"><span>info</span></a></li>
					<li id="mute" class="myButton-hannspreetv"><a href="#" title="mute"><span>mute</span></a></li>
					<li id="channel_plus" class="myButton-hannspreetv"><a href="#" title="channel_plus"><span>channel_plus</span></a></li>
					<li id="channel_minus" class="myButton-hannspreetv"><a href="#" title="channel_minus"><span>channel_minus</span></a></li>
					<li id="text" class="myButton-hannspreetv"><a href="#" title="text"><span>text</span></a></li>
					<li id="sub" class="myButton-hannspreetv"><a href="#" title="sub"><span>sub</span></a></li>
					<li id="list" class="myButton-hannspreetv"><a href="#" title="list"><span>list</span></a></li>
					<li id="tv" class="myButton-hannspreetv"><a href="#" title="tv"><span>tv</span></a></li>
					<li id="red" class="myButton-hannspreetv"><a href="#" title="red"><span>red</span></a></li>
					<li id="green" class="myButton-hannspreetv"><a href="#" title="green"><span>green</span></a></li>
					<li id="yellow" class="myButton-hannspreetv"><a href="#" title="yellow"><span>yellow</span></a></li>
					<li id="blue" class="myButton-hannspreetv"><a href="#" title="blue"><span>blue</span></a></li>				
					
				</ul>

			</div>	
		</div>

`;
}