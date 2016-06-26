if (self.CavalryLogger) { CavalryLogger.start_js(["GhYKZ"]); }

__d('CanvasAppRating.react',['cx','fbt','React','StarsInput.react','shallowCompare'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.shouldComponentUpdate=function(m,n){'use strict';return c('shallowCompare')(this,m,n);};l.prototype.render=function(){'use strict';return (c('React').createElement('div',{className:this.props.className},c('React').createElement('div',{className:"_2k1 _3-94"},i._("\u00bfC\u00f3mo calificar\u00edas este juego?")),c('React').createElement(c('StarsInput.react'),{className:"_3w9p",large:true,onClick:this.props.onStarClick})));};function l(){'use strict';j.apply(this,arguments);}f.exports=l;},null);
__d('FilteredSearchSource',['AbstractSearchSource'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('AbstractSearchSource'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);this.$FilteredSearchSource1=k;this.$FilteredSearchSource2=l;}j.prototype.bootstrapImpl=function(k){'use strict';this.$FilteredSearchSource2.bootstrap(k);};j.prototype.searchImpl=function(k,l,m){'use strict';var n=function(o,p){o=this.$FilteredSearchSource3(o,p);l(o,p);}.bind(this);this.$FilteredSearchSource2.search(k,n,m);};j.prototype.$FilteredSearchSource3=function(k,l){'use strict';var m=this.$FilteredSearchSource1;return k.filter(function(n){return m(n,l);});};f.exports=j;},null);
__d('CanvasAppRecommendation.react',['cx','fbt','FilteredSearchSource','InlineBlock.react','React','WebAsyncSearchSource','XUIButton.react','XUITokenizer.react','shallowCompare'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;function l(m){'use strict';k.constructor.call(this,m);var n=this.props.userID,o=new (c('WebAsyncSearchSource'))({bootstrapRequests:[{data:{filter:['user'],options:['friends_only'],viewer:n},uri:'/ajax/typeahead/first_degree.php'}]}),p=new (c('FilteredSearchSource'))(function(q){return q.getUniqueID()!==n;},o);this.state={friendEntries:[],queryString:'',searchSource:p};}l.prototype.shouldComponentUpdate=function(m,n){'use strict';return c('shallowCompare')(this,m,n);};l.prototype.$CanvasAppRecommendation1=function(m){'use strict';var n=this.state.friendEntries.concat([m]);this.setState({friendEntries:n});};l.prototype.$CanvasAppRecommendation2=function(m){'use strict';var n=this.state.friendEntries.filter(function(o){return o.getUniqueID()!=m.getUniqueID();});this.setState({friendEntries:n});};l.prototype.$CanvasAppRecommendation3=function(){'use strict';this.props.onSubmit(this.state.friendEntries);};l.prototype.render=function(){'use strict';var m=this.state.friendEntries;return (c('React').createElement('div',{className:this.props.className},c('React').createElement(c('InlineBlock.react'),{alignv:'middle'},c('React').createElement(c('XUITokenizer.react'),{className:"_5sp",entries:m,onAddEntryAttempt:function(n){return this.$CanvasAppRecommendation1(n);}.bind(this),onRemoveEntryAttempt:function(n){return this.$CanvasAppRecommendation2(n);}.bind(this),placeholder:i._("Busca amigos para recomendarlo"),searchSource:this.state.searchSource})),c('React').createElement(c('InlineBlock.react'),{alignv:'middle',className:"_3-9a"},c('React').createElement(c('XUIButton.react'),{disabled:m.length<=0,label:i._("Enviar"),onClick:function(){return this.$CanvasAppRecommendation3();}.bind(this),use:'confirm'}))));};f.exports=l;},null);
__d('CanvasPrompt.react',['cx','Image.react','Layout.react','React','XUICloseButton.react','joinClasses','shallowCompare'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('Layout.react').Column;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.shouldComponentUpdate=function(m,n){'use strict';return c('shallowCompare')(this,m,n);};l.prototype.render=function(){'use strict';return (c('React').createElement(c('Layout.react'),{className:c('joinClasses')(this.props.className,"_3mqg")},c('React').createElement(k,null,c('React').createElement(c('Image.react'),{height:80,src:this.props.appLogoURL,width:80})),c('React').createElement(k,{className:"_3-9b"},c('React').createElement('div',{className:"_3mqh _3-94"},this.props.header),this.props.body),c('React').createElement(k,{className:"_3-9b"},c('React').createElement(c('XUICloseButton.react'),{onClick:this.props.onCloseClick,size:'medium'}))));};function l(){'use strict';i.apply(this,arguments);}f.exports=l;},null);
__d('CanvasAppRatingRecommendationPrompt.react',['cx','fbt','invariant','AppInstallLogger','AppInstallLoggerEvents','AsyncRequest','CanvasAppRating.react','CanvasAppRecommendation.react','CanvasGKs','CanvasPrompt.react','React','XUIButton.react','joinClasses','shallowCompare'],function a(b,c,d,e,f,g,h,i,j){var k,l;if(c.__markCompiled)c.__markCompiled();var m=5,n={RATE:'rate',RATE_YES_NO:'rate_yes_no',RECOMMEND:'recommend'};k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;function o(p){'use strict';l.constructor.call(this,p);this.state={isHidden:false,promptType:c('CanvasGKs').pg_canvas_yes_no_rating?n.RATE_YES_NO:n.RATE};}o.prototype.shouldComponentUpdate=function(p,q){'use strict';return c('shallowCompare')(this,p,q);};o.prototype.$CanvasAppRatingRecommendationPrompt1=function(){'use strict';this.setState({isHidden:true});var event=this.state.promptType===n.RATE?c('AppInstallLoggerEvents').GAMES_RATING_PROMPT_CLOSE:c('AppInstallLoggerEvents').GAMES_RECOMMEND_PROMPT_CLOSE;c('AppInstallLogger').log(event,this.props.app.id);};o.prototype.$CanvasAppRatingRecommendationPrompt2=function(p){'use strict';if(c('CanvasGKs').pg_game_user_recommend&&p>=m){this.setState({promptType:n.RECOMMEND});c('AppInstallLogger').log(c('AppInstallLoggerEvents').GAMES_RECOMMEND_PROMPT_SHOW,this.props.app.id);}else this.setState({isHidden:true});var q=this.props.app.id,r={app_id:q,star_rating:p};new (c('AsyncRequest'))('/games/async/app_rating').setMethod('POST').setData(r).send();c('AppInstallLogger').log(c('AppInstallLoggerEvents').GAMES_RATING_PROMPT_RATE,q,{star_rating:p});};o.prototype.$CanvasAppRatingRecommendationPrompt3=function(p){'use strict';this.setState({isHidden:true});var q=p.map(function(s){return s.getUniqueID();}),r={app_id:this.props.app.id,friend_ids:q};new (c('AsyncRequest'))('/games/async/friend_recommend/').setMethod('POST').setData(r).send();};o.prototype.render=function(){'use strict';var p=this.props.app,q=this.state.promptType,r,s=i._("\u00bfTe gusta {game name}?",[i.param('game name',p.name)]);switch(q){case n.RATE:r=c('React').createElement(c('CanvasAppRating.react'),{onStarClick:function(t){return this.$CanvasAppRatingRecommendationPrompt2(t);}.bind(this)});break;case n.RATE_YES_NO:r=c('React').createElement('span',null,c('React').createElement(c('XUIButton.react'),{use:'confirm',label:i._("Yes, I am!"),onClick:function(){return this.$CanvasAppRatingRecommendationPrompt2(5);}.bind(this)}),c('React').createElement(c('XUIButton.react'),{label:i._("Not really"),onClick:function(){return this.$CanvasAppRatingRecommendationPrompt2(1);}.bind(this)}));break;case n.RECOMMEND:r=c('React').createElement(c('CanvasAppRecommendation.react'),{onSubmit:function(t){this.$CanvasAppRatingRecommendationPrompt3(t);}.bind(this),userID:this.props.userID});s=i._("\u00bfQuieres recomendarlo a tus amigos jugadores?");break;default:j(0);}return (c('React').createElement(c('CanvasPrompt.react'),{appLogoURL:p.logoURL,body:r,className:c('joinClasses')(this.props.className,this.state.isHidden?"_2awp":''),header:s,onCloseClick:function(){return this.$CanvasAppRatingRecommendationPrompt1();}.bind(this)}));};f.exports=o;},null);