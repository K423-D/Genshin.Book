var f=Object.defineProperty,w=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var g=(s,t,u)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[t]=u,p=(s,t)=>{for(var u in t||(t={}))$.call(t,u)&&g(s,u,t[u]);if(_)for(var u of _(t))k.call(t,u)&&g(s,u,t[u]);return s},b=(s,t)=>w(s,v(t));var n=(s,t,u)=>new Promise((e,r)=>{var l=B=>{try{c(u.next(B))}catch(D){r(D)}},y=B=>{try{c(u.throw(B))}catch(D){r(D)}},c=B=>B.done?e(B.value):Promise.resolve(B.value).then(l,y);c((u=u.apply(s,t)).next())});import{d,o as E,c as F,b as a,n as q,t as M,g as h,f as I,h as R,a as A,_ as W,F as x,e as o,u as i}from"./index.edb4fd7b.js";const S={class:"cursor-pointer flex flex-col items-center justify-between shadow-xl rounded-lg transition-all transform hover:-translate-y-1"},j=["src"],G={class:"dark:bg-white px-1 w-16 text-center rounded-b-lg text-black text-xs md:text-sm lg:text-sm xl:text-sm md:w-24 lg:w-24 xl:w-24 truncate"},N=d({name:"ItemBox"}),m=d(b(p({},N),{props:{name:{type:String,required:!0},url:{type:String,required:!0},star:{type:Number,default:0}},setup(s){const t=s;return(u,e)=>(E(),F("div",S,[a("div",{class:q(["w-16 h-16 rounded-t-lg md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24",`bg-${t.star}-star`])},[a("img",{src:t.url,loading:"lazy"},null,8,j)],2),a("div",G,M(t.name),1)]))}})),z=()=>n(void 0,null,function*(){return h({url:"/GenshinItem/Avatars"})}),V=()=>n(void 0,null,function*(){return h({url:"/GenshinItem/Weapons"})}),L=()=>n(void 0,null,function*(){return h({url:"/GenshinItem/Reliquaries"})}),P={\u8FEA\u5362\u514B10000016:{star:5},\u523B\u667410000042:{star:5},\u6E29\u8FEA10000022:{star:5},\u80E1\u684310000046:{star:5},\u949F\u79BB10000030:{star:5},\u7518\u96E810000037:{star:5},\u83AB\u5A1C10000041:{star:5},\u67AB\u539F\u4E07\u53F610000047:{star:5},\u96F7\u7535\u5C06\u519B10000052:{star:5},\u82AD\u82AD\u62C910000014:{star:4},\u884C\u79CB10000025:{star:4},\u73ED\u5C3C\u727910000032:{star:4},\u8FBE\u8FBE\u5229\u4E9A10000033:{star:5},\u9999\u83F110000023:{star:4},\u8FEA\u5965\u5A1C10000039:{star:4},\u743410000003:{star:5},\u53EF\u838910000029:{star:5},\u91CD\u4E9110000036:{star:4},\u51DD\u514910000027:{star:4},\u83F2\u8C22\u5C1410000031:{star:4},\u51EF\u4E9A10000015:{star:4},\u5B89\u67CF10000021:{star:4},\u6258\u9A6C10000050:{star:4},\u57C3\u6D1B\u4F0A10000062:{star:5},\u4E03\u4E0310000035:{star:5},\u4E3D\u838E10000006:{star:4},\u5317\u659710000024:{star:4},\u8BFA\u827E\u5C1410000034:{star:4},\u7802\u7CD610000043:{star:4},\u8F9B\u713110000044:{star:4},\u7F57\u838E\u8389\u4E9A10000045:{star:4},\u65E9\u67DA10000053:{star:4},\u4E5D\u6761\u88DF\u7F5710000056:{star:4},\u65C5\u884C\u800510000007:{star:5},\u96F7\u6CFD10000020:{star:4},\u4E91\u580710000064:{star:4},\u795E\u91CC\u7EEB\u534E10000002:{star:5},\u7533\u9E6410000063:{star:5},\u70DF\u7EEF10000048:{star:4},\u4E94\u90CE10000055:{star:4},\u65C5\u884C\u800510000005:{star:5},\u73CA\u745A\u5BAB\u5FC3\u6D7710000054:{star:5},\u4F18\u83C810000051:{star:5},\u9B4810000026:{star:5},\u8352\u6CF7\u4E00\u659710000057:{star:5},\u963F\u8D1D\u591A10000038:{star:5},\u5BB5\u5BAB10000049:{star:5},\u516B\u91CD\u795E\u5B5010000058:{star:5},\u795E\u91CC\u7EEB\u4EBA10000066:{star:5},\u591C\u517010000060:{star:5},\u4E45\u5C90\u5FCD10000065:{star:4}},T={\u72FC\u7684\u672B\u8DEF12502:{star:5},\u9ED1\u525111409:{star:4},\u7EDD\u5F2615402:{star:4},\u62A4\u6469\u4E4B\u675613501:{star:5},\u8BD5\u4F5C\u6FB9\u670815406:{star:4},\u56DB\u98CE\u539F\u517814502:{star:5},\u94C1\u8702\u523A11407:{star:4},\u8599\u8349\u4E4B\u7A3B\u514913509:{star:5},\u8BA8\u9F99\u82F1\u6770\u8C2D14302:{star:3},\u796D\u793C\u525111403:{star:4},\u5929\u7A7A\u4E4B\u520311502:{star:5},\u5F13\u85CF15405:{star:4},\u5929\u7A7A\u4E4B\u810A13502:{star:5},\u796D\u793C\u5F1315403:{star:4},\u98CE\u9E70\u525111501:{star:5},\u561F\u561F\u53EF\u6545\u4E8B\u96C614413:{star:4},\u8BD5\u4F5C\u53E4\u534E12406:{star:4},\u5C18\u4E16\u4E4B\u950114504:{star:5},\u98CE\u82B1\u4E4B\u988215413:{star:4},\u8150\u6B96\u4E4B\u525111413:{star:4},"\u300C\u6E14\u83B7\u300D13415":{star:4},\u897F\u98CE\u730E\u5F1315401:{star:4},\u8BD5\u4F5C\u91D1\u73C014406:{star:4},\u96E8\u88C112405:{star:4},\u949F\u525112402:{star:4},\u796D\u793C\u6B8B\u7AE014403:{star:4},\u897F\u98CE\u5927\u525112401:{star:4},\u897F\u98CE\u957F\u67AA13407:{star:4},\u796D\u793C\u5927\u525112403:{star:4},\u82CD\u7FE0\u730E\u5F1315409:{star:4},\u8BD5\u4F5C\u65A9\u5CA911406:{star:4},\u8854\u73E0\u6D77\u768712412:{star:4},\u51B3\u6597\u4E4B\u67AA13405:{star:4},\u5929\u76EE\u5F71\u6253\u520011414:{star:4},\u9ED1\u7F28\u67AA13303:{star:3},\u963F\u83AB\u65AF\u4E4B\u5F1315502:{star:5},\u96EA\u846C\u7684\u661F\u94F612411:{star:4},\u98DE\u5929\u5FA1\u525111306:{star:3},\u9F99\u810A\u957F\u67AA13409:{star:4},\u9ECE\u660E\u795E\u525111302:{star:3},\u65E0\u950B\u525111101:{star:1},\u4E07\u56FD\u8BF8\u6D77\u56FE\u8C3114407:{star:4},\u730E\u5F1315101:{star:1},\u7834\u9B54\u4E4B\u5F1315414:{star:4},\u8BAD\u7EC3\u5927\u525112101:{star:1},\u5323\u91CC\u9F99\u541F11405:{star:4},\u5323\u91CC\u706D\u8FB013401:{star:4},\u5F02\u4E16\u754C\u884C\u8BB014303:{star:3},\u4FE1\u4F7F15305:{star:3},\u4EE5\u7406\u670D\u4EBA12305:{star:3},\u7B1B\u525111402:{star:4},\u662D\u5FC314409:{star:4},\u5B66\u5F92\u7B14\u8BB014101:{star:1},\u65B0\u624B\u957F\u67AA13101:{star:1},\u897F\u98CE\u525111401:{star:4},\u87AD\u9AA8\u525112409:{star:4},\u5929\u7A7A\u4E4B\u7FFC15501:{star:5},\u65AD\u6D6A\u957F\u9CCD13416:{star:4},\u6D41\u6D6A\u4E50\u7AE014402:{star:4},\u7532\u7EA7\u5B9D\u73CF14305:{star:3},\u7FE1\u7389\u6CD5\u740314304:{star:3},\u51B7\u520311301:{star:3},\u767D\u5F71\u525112407:{star:4},\u767D\u7F28\u67AA13301:{star:3},\u6C90\u6D74\u9F99\u8840\u7684\u525112302:{star:3},\u96FE\u5207\u4E4B\u56DE\u514911509:{star:5},\u8FB0\u7802\u4E4B\u7EBA\u952411415:{star:4},\u78D0\u5CA9\u7ED3\u7EFF11505:{star:5},\u7EC8\u672B\u55DF\u53F9\u4E4B\u8BD715503:{star:5},\u63A0\u98DF\u800515415:{star:4},\u897F\u98CE\u79D8\u517814401:{star:4},\u548C\u749E\u9E2213505:{star:5},\u5343\u5CA9\u957F\u67AA13406:{star:4},\u6842\u6728\u65A9\u957F\u6B6312414:{star:4},\u8BD5\u4F5C\u661F\u957013402:{star:4},\u51AC\u6781\u767D\u661F15507:{star:5},\u82CD\u53E4\u81EA\u7531\u4E4B\u8A9311503:{star:5},\u677E\u7C41\u54CD\u8D77\u4E4B\u65F612503:{star:5},\u4E0D\u706D\u6708\u534E14506:{star:5},\u606F\u707E13507:{star:5},\u8D64\u89D2\u77F3\u6E83\u677512510:{star:5},\u8D2F\u8679\u4E4B\u69CA13504:{star:5},\u98DE\u96F7\u4E4B\u5F26\u632F15509:{star:5},\u6697\u5DF7\u730E\u624B15410:{star:4},\u5929\u7A7A\u4E4B\u50B212501:{star:5},\u5343\u5CA9\u53E4\u525112410:{star:4},\u5323\u91CC\u65E5\u670814405:{star:4},\u795E\u5C04\u624B\u4E4B\u8A9315302:{star:3},\u5FCD\u51AC\u4E4B\u679C14412:{star:4},\u5F39\u5F1315304:{star:3},\u6697\u5DF7\u95EA\u514911410:{star:4},\u5B97\u5BA4\u5927\u525112404:{star:4},\u94A2\u8F6E\u5F1315407:{star:4},\u5929\u7A7A\u4E4B\u537714501:{star:5},\u9ED1\u5CA9\u957F\u525111408:{star:4},\u65C5\u884C\u525111303:{star:3},\u53CD\u66F2\u5F1315303:{star:3},\u98DE\u5929\u5927\u5FA1\u525112306:{star:3},\u767D\u94C1\u5927\u525112303:{star:3},\u66DA\u4E91\u4E4B\u670815416:{star:4},\u6D41\u6708\u948813403:{star:4},\u5B97\u5BA4\u957F\u5F1315404:{star:4},\u65E0\u5DE5\u4E4B\u525112504:{star:5},\u9B54\u5BFC\u7EEA\u8BBA14301:{star:3},\u9ED1\u5CA9\u6218\u5F1315408:{star:4},\u94BA\u77DB13302:{star:3},\u5E7D\u591C\u534E\u5C14\u517915412:{star:4},\u6076\u738B\u4E3812416:{star:4},\u65AB\u5CF0\u4E4B\u520311504:{star:5},\u964D\u4E34\u4E4B\u525111412:{star:4},\u9ED1\u5CA9\u523A\u67AA13404:{star:4},\u767D\u8FB0\u4E4B\u73AF14414:{star:4},\u9E26\u7FBD\u5F1315301:{star:3},\u94C1\u5F71\u9614\u525112301:{star:3},\u5403\u864E\u9C7C\u520011305:{star:3},\u6697\u5DF7\u7684\u9152\u4E0E\u8BD714410:{star:4},\u6697\u94C1\u525111304:{star:3},\u559C\u591A\u9662\u5341\u6587\u5B5713414:{star:4},\u9ED1\u5CA9\u65A9\u520012408:{star:4},\u4F63\u5175\u91CD\u525112201:{star:2},\u94C1\u5C16\u67AA13201:{star:2},\u9ED1\u5CA9\u7EEF\u738914408:{star:4},\u53E3\u888B\u9B54\u5BFC\u4E6614201:{star:2},\u5B97\u5BA4\u957F\u525111404:{star:4},\u5B97\u5BA4\u730E\u67AA13408:{star:4},\u5386\u7EC3\u7684\u730E\u5F1315201:{star:2},\u94F6\u525111201:{star:2},\u795E\u4E50\u4E4B\u771F\u610F14509:{star:5},\u8BC1\u8A93\u4E4B\u660E\u77B314415:{star:4},\u5B97\u5BA4\u79D8\u6CD5\u5F5514404:{star:4},\u6CE2\u4E71\u6708\u767D\u7ECF\u6D2511510:{star:5},\u843D\u971E15411:{star:4},\u82E5\u6C3415508:{star:5}},H={\u70BD\u70C8\u7684\u708E\u4E4B\u9B54\u59732150061:{star:5},\u6614\u65E5\u5B97\u5BA4\u4E4B\u4EEA2150071:{star:5},\u7FE0\u7EFF\u4E4B\u5F712150021:{star:5},\u5343\u5CA9\u7262\u56FA2150171:{star:5},\u6D41\u6D6A\u5927\u5730\u7684\u4E50\u56E22150031:{star:5},\u7EDD\u7F18\u4E4B\u65D7\u53702150201:{star:5},\u88AB\u601C\u7231\u7684\u5C11\u59732140041:{star:5},\u6C89\u6CA6\u4E4B\u5FC32150161:{star:5},\u89D2\u6597\u58EB\u7684\u7EC8\u5E55\u793C2150011:{star:5},\u51B0\u98CE\u8FF7\u9014\u7684\u52C7\u58EB2140011:{star:5},\u9006\u98DE\u7684\u6D41\u661F2150151:{star:5},\u82CD\u767D\u4E4B\u706B2150181:{star:5},\u534E\u9986\u68A6\u9192\u5F62\u9AB8\u8BB02150211:{star:5},\u6218\u72C22100051:{star:4},\u60A0\u53E4\u7684\u78D0\u5CA92150141:{star:5},\u6E21\u8FC7\u70C8\u706B\u7684\u8D24\u4EBA2140031:{star:5},\u6E38\u533B2100131:{star:3},\u6559\u5B982100071:{star:4},\u5192\u9669\u5BB62100101:{star:3},\u8FFD\u5FC6\u4E4B\u6CE8\u8FDE2150191:{star:5},\u6D77\u67D3\u7817\u78F22150221:{star:5},\u5982\u96F7\u7684\u76DB\u60122150051:{star:5},\u67D3\u8840\u7684\u9A91\u58EB\u90532150081:{star:5},\u5E73\u606F\u9E23\u96F7\u7684\u5C0A\u80052140021:{star:5},\u6D41\u653E\u80052100091:{star:4},\u5B66\u58EB2100121:{star:4},\u884C\u8005\u4E4B\u5FC32100011:{star:4},\u5E78\u8FD0\u513F2100111:{star:3},\u52C7\u58EB\u4E4B\u5FC32100021:{star:4},\u5B88\u62A4\u4E4B\u5FC32100031:{star:4},\u6B66\u4EBA2100061:{star:4},\u8D4C\u5F922100081:{star:4},\u5947\u8FF92100041:{star:4},\u8FB0\u7802\u5F80\u751F\u5F552150231:{star:5},\u6765\u6B46\u4F59\u54CD2150241:{star:5}},C={characterMap:P,weaponMap:T,reliquariesMap:H},J=I("genshinItem",{state:()=>({avatars:void 0,weapons:void 0,reliquaries:void 0}),getters:{genshinItems(s){return p({},s)}},actions:{setAvatar(s){this.$patch({avatars:s})},setWeapon(s){this.$patch({weapons:s})},setReliquaries(s){this.$patch({reliquaries:s})},fetchAvatar(){return n(this,null,function*(){let t=(yield z()).map(u=>(u.star=C.characterMap[`${u.name}${u.id}`]?C.characterMap[`${u.name}${u.id}`].star:0,u));t.sort((u,e)=>u.id-e.id),this.setAvatar(t)})},fetchWeapon(){return n(this,null,function*(){let t=(yield V()).map(u=>(u.star=C.weaponMap[`${u.name}${u.id}`]?C.weaponMap[`${u.name}${u.id}`].star:0,u));t.sort((u,e)=>u.id-e.id),this.setWeapon(t)})},fetchReliquries(){return n(this,null,function*(){let t=(yield L()).map(u=>(u.star=C.reliquariesMap[`${u.name}${u.id}`]?C.reliquariesMap[`${u.name}${u.id}`].star:0,u));t.sort((u,e)=>u.id-e.id),this.setReliquaries(t)})},resetAll(){this.$reset()}}}),K={class:"dark:text-slate-400 dark:bg-slate-900 min-h-screen"},O=a("main",{class:"max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl"},[a("div",{class:"pt-8 pb-7 sm:pb-8 sm:text-center"},[a("h1",{class:"relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"},[a("span",{class:"border-b-2 border-b-cyan-500"},"\u89D2\u8272")])])],-1),Q={class:"space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44"},U={class:"flex flex-wrap items-center justify-center py-6 sm:px-20 lg:px-36 xl:px-20"},X=a("main",{class:"max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl"},[a("div",{class:"pt-8 pb-7 sm:pb-8 sm:text-center"},[a("h1",{class:"relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"},[a("span",{class:"border-b-2 border-b-cyan-500"},"\u6B66\u5668")])])],-1),Y={class:"space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44"},Z={class:"flex flex-wrap items-center justify-center py-6 sm:px-20 lg:px-36 xl:px-20"},uu=a("main",{class:"max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl"},[a("div",{class:"pt-8 pb-7 sm:pb-8 sm:text-center"},[a("h1",{class:"relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"},[a("span",{class:"border-b-2 border-b-cyan-500"},"\u5723\u9057\u7269")])])],-1),tu={class:"space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44"},su={class:"flex flex-wrap items-center justify-center py-6 sm:px-20 lg:px-36 xl:px-20"},eu=d({__name:"index",setup(s){const t=J();return t.fetchAvatar(),t.fetchWeapon(),t.fetchReliquries(),R(()=>{}),(u,e)=>(E(),F("div",K,[A(W),O,a("article",Q,[a("ul",U,[(E(!0),F(x,null,o(i(t).avatars,(r,l)=>(E(),F("li",{key:l*1.1,class:"px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"},[A(m,{name:r.name,url:r.url,star:r.star},null,8,["name","url","star"])]))),128))])]),X,a("article",Y,[a("ul",Z,[(E(!0),F(x,null,o(i(t).weapons,(r,l)=>(E(),F("li",{key:l*1.1,class:"px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"},[A(m,{name:r.name,url:r.url,star:r.star},null,8,["name","url","star"])]))),128))])]),uu,a("article",tu,[a("ul",su,[(E(!0),F(x,null,o(i(t).reliquaries,(r,l)=>(E(),F("li",{key:l*1.1,class:"px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"},[A(m,{name:r.name,url:r.url,star:r.star},null,8,["name","url","star"])]))),128))])])]))}});export{eu as default};
