var env =window.location.hostname;
if(env=="localhost")
{
	var base_url = 'http://localhost/cw/';
	var front_base_url = 'http://localhost/phase4-site-new/';
}
else if(env=="192.168.1.187")
{
	var base_url = 'http://dev.uiplonline.com/cw/';
	var front_base_url = 'http://192.168.1.187/phase4-site-new/';
}
else if(env=="dev.uiplonline.com")
{
	var base_url = 'http://dev.uiplonline.com/cw/';
	var front_base_url = 'http://dev.uiplonline.com/phase4-site-new/';
}
else
{
	var base_url = 'https://www.unifiedinfotech.net/cw/';
	var front_base_url = 'https://www.unifiedinfotech.net/';
}



