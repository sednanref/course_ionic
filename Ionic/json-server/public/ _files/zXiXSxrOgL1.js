if (self.CavalryLogger) { CavalryLogger.start_js(["33r6X"]); }

__d("PlaceTagType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CITY:"city",STATE_PROVINCE:"state_province",COUNTRY:"country",PLACE:"place",EVENT:"event",RESIDENCE:"residence",TEXT:"text"};},null);
__d('PlacesDataSource',['DataSource'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('DataSource'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this._origBootstrapEndpoint=this.bootstrapEndpoint;}j.prototype.shouldFetchMoreResults=function(k){'use strict';if(this.queryData.new_js_ranking){return true;}else return i.shouldFetchMoreResults.call(this,k);};j.prototype.mergeUids=function(k,l,m,n){'use strict';if(this.queryData.new_js_ranking){this._checkExtendedMatch(n,k);return this.deduplicateByKey(m.concat(l,k));}else return i.mergeUids.call(this,k,l,m,n);};j.prototype.resetBootstrapEndpoint=function(k){'use strict';this.setBootstrapEndpoint(this._origBootstrapEndpoint,k);return this;};j.prototype.setBootstrapEndpoint=function(k,l){'use strict';if(this.bootstrapEndpoint!==k){this.bootstrapEndpoint=k;if(this._bootstrapped||this._bootstrapping)l=true;}if(l)this.dirty().bootstrap();return this;};j.prototype.getQueryEndpoint=function(){'use strict';return this.queryEndpoint;};j.prototype.getBootstrapData=function(){'use strict';return this.bootstrapData;};f.exports=j;},null);
__d('HubsTypeaheadView',['fbt','Arbiter','AsyncRequest','ContextualTypeaheadView','CSS','DOM','Event','$'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('ContextualTypeaheadView'));j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this,l,m);if(m.allowDedupe)this.subscribe('select',this.selectDuplicates.bind(this));}k.prototype.hide=function(){'use strict';return this.canHide?j.hide.call(this):null;};k.prototype.reset=function(){'use strict';return this.canHide?j.reset.call(this):null;};k.prototype._createFreeFormNode=function(l){'use strict';var m=l;if(this.showCreatePrompt){m=h._("Agregar \"{partial_name}\"",[h.param('partial_name',l)]);}else if(this.showAltCreatePrompt)m=h._("Crear \"{partial_name}\"",[h.param('partial_name',l)]);return {text:m,orig_text:l,type:'addnew calltoaction',uid:'0'};};k.prototype.validateQuery=function(l){'use strict';return this.minQueryLength?l.length>=this.minQueryLength:true;};k.prototype.render=function(l,m,n){'use strict';var o=[],p=Math.max(1,Math.floor(m.length/10));for(var q=p;q<m.length;q++)if(!!m[q].already_added){o.push(m[q]);m.splice(q,1);q--;}m=m.concat(o);if(this.alwaysRender&&l!=='')if(this.allowFreeformEntry){if(this.validateQuery(l))m.push(this._createFreeFormNode(l));}else{var r=l.toLowerCase().trim(),s=false;for(var t=0;t<m.length;t++)if(r==m[t].text.toLowerCase().trim()){s=true;break;}if(!s&&this.validateQuery(l))m.push(this._createFreeFormNode(l));}var u=m.length;for(var v=0;v<m.length;v++)if(m[v].uid==false)u--;if(this.allowDedupe&&u>1&&l.length>=3)m.push({text:h._("Marcar resultados duplicados"),type:'dupelink calltoaction'});return j.render.call(this,l,m,n);};k.prototype.selectDuplicates=function(l,m){'use strict';if(!m.selected.type.match('dupelink'))return;var n=[];for(var o=0;o<this.results.length;o++){if(this.results[o].uid==false)continue;n.push(this.results[o].uid);}var p=c('Arbiter').subscribe('typeahead/'+this.collectionID+'/confirmDupes',function(q,r){var s=this.results.map(function(v){return v.uid;});for(var t=0;t<r.dupe_ids.length;t++){var u=s.indexOf(r.dupe_ids[t]);c('CSS').hide(this.items[u]);}this.hasHiddenDupes=r.dupe_ids.length>0;}.bind(this));c('Arbiter').subscribe('typeahead/'+this.collectionID+'/finishDupes',function(q,r){c('Arbiter').unsubscribe(p);this.canHide=true;this.hasHiddenDupes&&c('CSS').hide(c('DOM').find(this.content,'.dupelink'));this.hasHiddenDupes=false;}.bind(this));this.canHide=false;new (c('AsyncRequest'))('/ajax/typeahead/quality/duplicates').setData({ids:n,surface:c('$')('collections_surface').value,collection_id:this.collectionID}).send();};k.initFreeformBoxes=function(){'use strict';var l=c('DOM').scry(document,'div.fbAddFormDialog')[0];if(!l)return;var m=c('DOM').find(l,'form');c('Event').listen(m,'submit',function(){c('DOM').scry(m,'div.fbFreeformInput').forEach(function(n){if(c('DOM').find(n,'input.inputtext').value)c('CSS').addClass(n.firstChild,'selected');});});};Object.assign(k.prototype,{canHide:true,hasHiddenDupes:false});f.exports=k;},null);
__d("XFamilyMentionsNUXDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/family_mentions\/nux_dialog\/",{__asyncDialog:{type:"Int"}});},null);
__d('FamilyRelationshipMentions',['AsyncDialog','AsyncRequest','FamilyMentionsData','XFamilyMentionsNUXDialogController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(){var i={},j=false;i.shouldShowNUX=function(k){if(c('FamilyMentionsData').hasAcceptedNUX||j)return false;var l=k.family_names;if(l==undefined)return false;for(var m=0;m<l.length;m++)if(l[m]==k.text)return true;return false;};i.showNUX=function(k,l){var m=c('XFamilyMentionsNUXDialogController').getURIBuilder().getURI();c('AsyncDialog').send(new (c('AsyncRequest'))(m),function(n){n.subscribe('cancel',function(){k.text=k.default_name;new (c('AsyncRequest'))().setURI('/ajax/family_mentions/deny_nux').send();l(k);});n.subscribe('confirm',function(){j=true;new (c('AsyncRequest'))().setURI('/ajax/family_mentions/confirm_nux').send();l(k);n.finishHide();});});};return i;}();f.exports=h;},null);
__d('MentionsTypeaheadAreaView',['ContextualTypeaheadView','FamilyRelationshipMentions','Parent'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('ContextualTypeaheadView'));i=h&&h.prototype;j.prototype.getContext=function(){'use strict';return c('Parent').byClass(this.element,'uiMentionsInput');};j.prototype.shouldValidateTypeaheadSelection=function(k){'use strict';return c('FamilyRelationshipMentions').shouldShowNUX(k);};j.prototype.validateTypeaheadSelection=function(k,l){'use strict';c('FamilyRelationshipMentions').showNUX(k,l);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;},null);
__d('ClearableTypeahead',['Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={resetOnCloseButtonClick:function(i,j){c('Event').listen(j,'click',function(){var k=i.getCore();k.getElement().focus();k.reset();});}};f.exports=h;},null);
__d('TypeaheadSetPhotoOnSelect',['CSS','DOM','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';var i=c('DOM').scry(this._typeahead.getElement(),'.photo')[0];if(i){if(!c('DOM').isNodeOfType(i,'img')){var j=c('DOM').create('img',{className:i.className});c('DOM').replace(i,j);i=j;}var k=c('CSS').hide.bind(null,i),l=c('CSS').show.bind(null,i);this._eventListener=c('Event').listen(i,{load:l,error:k,abort:k});this._subscription=this._typeahead.subscribe('select',function(m,n){var o=n.selected.photo||this._typeahead.view.fallbackPhoto;o?i.setAttribute('src',o):k();}.bind(this));}};h.prototype.disable=function(){'use strict';this._eventListener.remove();this._eventListener=null;this._typeahead.unsubscribe(this._subscription);this._subscription=null;};Object.assign(h.prototype,{_eventListener:null,_subscription:null});f.exports=h;},null);
__d('legacy:SetPhotoOnSelectTypeaheadBehavior',['TypeaheadSetPhotoOnSelect'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.setPhotoOnSelect=function(h){h.enableBehavior(c('TypeaheadSetPhotoOnSelect'));};},3);
__d('TypeaheadShowBootstrapOnFocus',['TypeaheadShowResultsOnFocus'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('TypeaheadShowResultsOnFocus'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this._uids=[];}j.prototype.getMaxBootstrapEntries=function(){'use strict';return 3;};j.prototype.cacheUids=function(){'use strict';return true;};j.prototype.firstFetch=function(k,l,m){'use strict';if(!k.bootstrapping){if(this.cacheUids())this._uids=this.getUidsFromData(m);this.respond(l,m);}};j.prototype.respond=function(k,l){'use strict';if(!k.getValue()){k.setValue('');var m=this.cacheUids()?this._uids:this.getUidsFromData(l),n=l.buildUids(' ',m);l.respond('',n);}};j.prototype.getUidsFromData=function(k){'use strict';var l=k.getAllEntries(),m=[];for(var n in l)if(l[n].bootstrapped)m.push({uid:l[n].uid,index:l[n].index});m.sort(function(o,p){return o.index-p.index;});if(this.getMaxBootstrapEntries())m=m.slice(0,this.getMaxBootstrapEntries());return m.map(function(o){return o.uid;});};f.exports=j;},null);