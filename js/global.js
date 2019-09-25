var Octocv = Octocv||{};

Octocv.FacebookLogin = {
	initialized: false,
	setup: function(){
		if(!this.initialized) {
			this.initialized = true;
			window.fbAsyncInit = function() {
				FB.init({
					appId: "221184025235764",
					cookie: true,
					xfbml: true,
					version: "v2.10"
				})
			};
			
			try {
				e=document,i="script",n="facebook-jssdk",o=e.getElementsByTagName(i)[0],e.getElementById(n)||((t=e.createElement(i)).id=n,t.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(t,o))
			} catch(c){}
			
			var e,i,n,t,o;
			$("#auth_facebook").on("click",function(i){
				i.preventDefault(),FB.login(function(e){
					e.authResponse&&(window.location=i.currentTarget.href)
				},{scope:"public_profile,email,user_friends"})
			})
		}
	}
};
