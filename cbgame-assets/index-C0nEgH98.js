var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n={GAME_NAME:`轨道城市`,SAVE_FORMAT:`rail-city-save`,SAVE_VERSION:2,MAP_FORMAT:`cb-map`,MAP_VERSION:2,CELL_M:250,ZONE:4,ZONE_MAX:4096,SIZES:[{key:`s`,name:`小 (24km)`,W:96,H:96},{key:`m`,name:`中 (40km)`,W:160,H:160},{key:`l`,name:`大 (64km)`,W:256,H:256},{key:`xl`,name:`超大 (96km)`,W:384,H:384}],DEFAULT_SIZE:`m`,time:{secPerDay1x:3,speeds:[1,4,15,60],startYear:1990,daysPerMonth:30,monthsPerYear:12},walk:{mPerMin:75,accessM:1e3,transferWalkM:400,weight:1.6},modes:{metro:{key:`metro`,name:`地铁`,icon:`🚇`,trackPerKm:{underground:3e4,surface:6e3,elevated:12e3},stationCost:{underground:25e3,surface:8e3,elevated:13e3},waterPerKm:{underground:22e3,surface:16e3,elevated:16e3},speedKmh:34,capPerTrain:1860,headwayMin:[2,12],serviceKmCost:.006,stationDaily:2.6,color:`#4fc3f7`,types:[`underground`,`surface`,`elevated`],typeNames:{underground:`地下`,surface:`地面`,elevated:`高架`},defaultType:`underground`,minSpacingM:400},hsr:{key:`hsr`,name:`高铁`,icon:`🚄`,trackPerKm:{underground:9e4,surface:6e4,elevated:75e3},stationCost:{underground:9e4,surface:8e4,elevated:8e4},waterPerKm:{underground:1e5,surface:84e3,elevated:84e3},speedKmh:240,capPerTrain:1200,headwayMin:[10,60],serviceKmCost:.022,stationDaily:8,color:`#ef5350`,types:[`surface`,`elevated`,`underground`],typeNames:{underground:`隧道`,surface:`地面`,elevated:`桥梁`},defaultType:`surface`,minSpacingM:5e3},tram:{key:`tram`,name:`电车`,icon:`🚊`,trackPerKm:{surface:3e3},stationCost:{surface:1e3},waterPerKm:{surface:12e3},speedKmh:16,capPerTrain:250,headwayMin:[4,15],serviceKmCost:.0025,stationDaily:.6,color:`#66bb6a`,types:[`surface`],typeNames:{surface:`地面`},defaultType:`surface`,minSpacingM:250}},facility:{airport:{key:`airport`,name:`机场`,icon:`✈️`,cost:8e4,upkeepDaily:15,catchM:3e3,desc:`产生航空客流，需轨道交通接驳；带动就业`},railhub:{key:`railhub`,name:`火车站`,icon:`🚉`,cost:4e4,upkeepDaily:10,catchM:1500,desc:`普速铁路枢纽，产生城际客流，汇聚人气`},port:{key:`port`,name:`港口`,icon:`⚓`,cost:25e3,upkeepDaily:6,catchM:1500,desc:`须临水建设；增加贸易岗位与财政收入`},wharf:{key:`wharf`,name:`码头`,icon:`⚓`,cost:8e3,upkeepDaily:2,catchM:1e3,desc:`小型泊位，须临水；可多建，带来贸易与零散客流`}},cost:{inflation:.035,demolishFactor:.5,maxNameLen:12},sim:{tripRatePop:2.2,tripRateJob:2.4,decayKm:6,topK:32,theta:.065,waitWeight:1.5,transferPen:5,boardPen:3,carSpeedKmh:26,carPenalty:9,fareRef:2,votYuanH:30,crowdingK:.35,targetLF:.85},economy:{startFunds:3e5,debtLimit:-15e4,grantBase:[[1990,9e3],[2e3,2e4],[2010,45e3],[2020,7e4],[2050,12e4]],fareDefault:2,airportPax:[[1990,8e3],[2010,4e4],[2020,8e4],[2050,14e4]],railhubPax:[[1990,2e4],[2010,5e4],[2020,7e4],[2050,9e4]],portTrade:[[1990,3e3],[2020,12e3],[2050,2e4]],paxFee:.006},growth:{years:130,popCurve:[[1990,22e5],[2e3,32e5],[2010,46e5],[2020,56e5],[2035,64e5],[2120,7e6]],jobsRatio:.52,stationPullM:1250,resCapPerCell:3e3,jobCapPerCell:4200},perf:{jumpSliceMs:10,solveSliceMs:6,maxTrains:160,saveSlots:8}},r=class{x=0;y=0;zoom=6;minZoom=1.2;maxZoom=28;vw=100;vh=100;dpr=1;screenToWorld(e,t){return[this.x+(e-this.vw/2)/this.zoom,this.y+(t-this.vh/2)/this.zoom]}worldToScreen(e,t){return[(e-this.x)*this.zoom+this.vw/2,(t-this.y)*this.zoom+this.vh/2]}zoomAt(e,t,n){let[r,i]=this.screenToWorld(e,t);this.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.zoom*n)),this.x=r-(e-this.vw/2)/this.zoom,this.y=i-(t-this.vh/2)/this.zoom}pan(e,t){this.x-=e/this.zoom,this.y-=t/this.zoom}clamp(e,t){let n=this.vw/this.zoom/2,r=this.vh/this.zoom/2;this.x=Math.max(Math.min(n,e/2),Math.min(this.x,e-Math.min(n,e/2))),this.y=Math.max(Math.min(r,t/2),Math.min(this.y,t-Math.min(r,t/2))),e*this.zoom<this.vw&&(this.x=e/2),t*this.zoom<this.vh&&(this.y=t/2)}visibleCells(e,t){let[n,r]=this.screenToWorld(0,0),[i,a]=this.screenToWorld(this.vw,this.vh);return[Math.max(0,Math.floor(n)-1),Math.max(0,Math.floor(r)-1),Math.min(e-1,Math.ceil(i)+1),Math.min(t-1,Math.ceil(a)+1)]}},i=[{code:`Aa`,name:`村舍`,pop:50,jobs:15,color:`#c9b899`,cat:`res`,buildable:!0},{code:`Ab`,name:`住宅`,pop:300,jobs:80,color:`#c2a284`,cat:`res`,buildable:!0},{code:`Ac`,name:`多层住宅`,pop:1200,jobs:300,color:`#b8927a`,cat:`res`,buildable:!0},{code:`Ad`,name:`高层住宅`,pop:3e3,jobs:800,color:`#a98272`,cat:`res`,buildable:!0},{code:`Ba`,name:`店铺`,pop:20,jobs:150,color:`#a99bb0`,cat:`com`,buildable:!0},{code:`Bb`,name:`商场`,pop:60,jobs:1200,color:`#8d95ad`,cat:`com`,buildable:!0},{code:`Bc`,name:`写字楼`,pop:150,jobs:4200,color:`#7f8ba3`,cat:`com`,buildable:!0},{code:`Da`,name:`工厂`,pop:10,jobs:800,color:`#9d8d76`,cat:`ind`,buildable:!0},{code:`Db`,name:`仓库`,pop:10,jobs:400,color:`#a5947c`,cat:`ind`,buildable:!0},{code:`Ea`,name:`机场`,pop:0,jobs:400,color:`#8f948f`,cat:`infra`,buildable:!1,facility:`airport`},{code:`Eb`,name:`火车站`,pop:0,jobs:300,color:`#95918a`,cat:`infra`,buildable:!1,facility:`railhub`},{code:`Ec`,name:`码头`,pop:0,jobs:150,color:`#9a8f7a`,cat:`infra`,buildable:!1,facility:`wharf`},{code:`Ed`,name:`港口`,pop:0,jobs:600,color:`#8d8a80`,cat:`infra`,buildable:!1,facility:`port`},{code:`Ca`,name:`黑土地`,pop:40,jobs:60,color:`#8f9a5f`,cat:`soil`,buildable:!0},{code:`Cb`,name:`黄土`,pop:25,jobs:30,color:`#b7b98a`,cat:`soil`,buildable:!0},{code:`Cc`,name:`草地`,pop:10,jobs:8,color:`#a8b878`,cat:`soil`,buildable:!0},{code:`Cd`,name:`沙地`,pop:0,jobs:0,color:`#d6cfa8`,cat:`soil`,buildable:!0},{code:`Fa`,name:`水面`,pop:0,jobs:0,color:`#3f6e9e`,cat:`water`,buildable:!1},{code:`Fb`,name:`深水`,pop:0,jobs:0,color:`#33587e`,cat:`water`,buildable:!1},{code:`Fc`,name:`河流`,pop:0,jobs:0,color:`#4a7aa8`,cat:`water`,buildable:!1},{code:`Ga`,name:`密林`,pop:0,jobs:0,color:`#4a7a4f`,cat:`green`,buildable:!1},{code:`Gb`,name:`树丛`,pop:0,jobs:0,color:`#5d8a57`,cat:`green`,buildable:!0},{code:`Gc`,name:`公园`,pop:5,jobs:30,color:`#79a860`,cat:`green`,buildable:!0},{code:`Ha`,name:`丘陵`,pop:0,jobs:0,color:`#8a8663`,cat:`hill`,buildable:!1},{code:`Hb`,name:`高山`,pop:0,jobs:0,color:`#77735a`,cat:`hill`,buildable:!1}].map((e,t)=>({...e,id:t})),a=new Map;for(let e of i)a.set(e.code,e.id);var o={VILLAGE:a.get(`Aa`),HOUSE:a.get(`Ab`),MIDRISE:a.get(`Ac`),TOWER:a.get(`Ad`),SHOP:a.get(`Ba`),MALL:a.get(`Bb`),OFFICE:a.get(`Bc`),FACTORY:a.get(`Da`),WAREHOUSE:a.get(`Db`),AIRPORT:a.get(`Ea`),RAILHUB:a.get(`Eb`),WHARF:a.get(`Ec`),PORT:a.get(`Ed`),BLACKSOIL:a.get(`Ca`),LOAM:a.get(`Cb`),GRASS:a.get(`Cc`),SAND:a.get(`Cd`),WATER:a.get(`Fa`),DEEP:a.get(`Fb`),RIVER:a.get(`Fc`),FOREST:a.get(`Ga`),GROVE:a.get(`Gb`),PARK:a.get(`Gc`),HILL:a.get(`Ha`),MOUNT:a.get(`Hb`)},s=e=>i[e].cat===`water`,c=e=>i[e].cat===`hill`,l=e=>{let t=i[e].cat;return t===`res`||t===`com`||t===`ind`||t===`infra`},u=new Float32Array(i.map(e=>e.pop)),d=new Float32Array(i.map(e=>e.jobs)),f=i.map(e=>e.color),p=[o.BLACKSOIL,o.LOAM,o.VILLAGE,o.HOUSE,o.MIDRISE,o.TOWER],m=[o.LOAM,o.SHOP,o.MALL,o.OFFICE],h=[o.GRASS,o.FACTORY,o.WAREHOUSE];function g(e,t){let n=t.indexOf(e);return n<0||n>=t.length-1?-1:t[n+1]}function _(e,t){let n=t.indexOf(e);return n<=0?-1:t[n-1]}var v=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,ee=new Map;for(let e=0;e<52;e++)ee.set(v[e],e);function te(e){return i[e].code}function ne(e){return a.get(e)??-1}function re(e){let t=[],n=0;for(;n<e.length;){let r=e[n],i=1;for(;n+i<e.length&&e[n+i]===r&&i<9999;)i++;t.push((i>1?String(i):``)+te(r)),n+=i}return t.join(``)}function ie(e,t){let n=new Uint8Array(t),r=0,i=0;for(;i<e.length&&r<t;){let a=1,o=0;for(;i+o<e.length&&e[i+o]>=`0`&&e[i+o]<=`9`;)o++;if(o>0){if(a=parseInt(e.slice(i,i+o),10),!Number.isFinite(a)||a<=0)throw Error(`非法数量 @${r}`);i+=o}let s=e.slice(i,i+2),c=ne(s);if(c<0)throw Error(`未知瓦片码「${s}」@${r}`);i+=2;let l=Math.min(t,r+a);n.fill(c,r,l),r=l}if(r<t)throw Error(`瓦片串长度不足（${r}/${t}）`);return n}var ae={airport:o.AIRPORT,railhub:o.RAILHUB,wharf:o.WHARF,port:o.PORT},y=32,b=2,oe=[`#c08a5f`,`#b57f63`,`#c99a6d`,`#a87f68`,`#bd8f70`],se=[`#8d95ad`,`#7f8ba3`,`#98a0b4`],ce=[`#9d8d76`,`#93846f`,`#a5947c`];function le(e){let t=e*2654435761>>>0;return t^=t>>>13,t=t*1540483477>>>0,(t>>>8&15)/15-.5}function x(e,t){let n=e*374761393+t*668265263>>>0;return n=(n^n>>>13)*1274126177>>>0,(n>>>8&1023)/1024}function S(e,t){let n,r,i;if(e.charCodeAt(0)===35){let t=parseInt(e.slice(1),16);n=t>>16&255,r=t>>8&255,i=t&255}else{let t=e.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);if(!t)return e;n=+t[1],r=+t[2],i=+t[3]}let a=t*255,o=e=>Math.max(0,Math.min(255,e+a))|0;return`rgb(${o(n)},${o(r)},${o(i)})`}var ue=class{grid;detail=new Map;order=[];maxChunks=200;queue=[];overview=null;overviewReady=!1;overviewBudgetMs=12;tilesVersion=-1;detailBudgetMs=5;constructor(e){this.grid=e,this.markTilesChanged()}setGrid(e){this.grid=e,this.detail.clear(),this.order=[],this.queue=[],this.overview=null,this.overviewReady=!1,this.markTilesChanged()}markTilesChanged(){this.tilesVersion=this.grid.version,this.detail.clear(),this.order=[],this.overview&&(this.overviewReady=!1)}invalidateOverview(){this.overviewReady=!1}update(){if(this.grid.version!==this.tilesVersion&&this.markTilesChanged(),this.overview&&this.overview.width===this.grid.W*b||this.buildOverviewCanvas(),!this.overviewReady){this.paintOverview(this.overviewBudgetMs);return}let e=performance.now();for(;this.queue.length&&performance.now()-e<this.detailBudgetMs;){let e=this.queue.shift();if(this.detail.has(e))continue;let[t,n,r]=e.split(`:`).map(Number),i=this.renderChunk(16,n,r);if(this.detail.size>=this.maxChunks){let e=this.order.shift();e&&this.detail.delete(e)}this.detail.set(e,i),this.order.push(e)}}buildOverviewCanvas(){let e=document.createElement(`canvas`);e.width=this.grid.W*b,e.height=this.grid.H*b,this.overview=e,this.overviewReady=!1}paintOverview(e){if(!this.overview)return;let t=this.overview.getContext(`2d`),n=this.grid,r=b,i=this,a=i._ovRow||0,o=a===0?Math.max(e,80):e,s=performance.now(),c=a;for(;c<n.H;c++){for(let e=0;e<n.W;e++)t.fillStyle=f[n.tiles[c*n.W+e]],t.fillRect(e*r,c*r,r,r);if(performance.now()-s>o)break}i._ovRow=c,c>=n.H&&(i._ovRow=0,this.overviewReady=!0)}draw(e,t){let n=this.grid;if(this.overview){let[r,i]=t.worldToScreen(0,0);e.imageSmoothingEnabled=t.zoom<b,e.drawImage(this.overview,r,i,n.W*t.zoom,n.H*t.zoom)}if(t.zoom>5&&this.overviewReady){let[r,i,a,o]=t.visibleCells(n.W,n.H),s=Math.floor(r/y),c=Math.floor(i/y),l=Math.floor(a/y),u=Math.floor(o/y),d=[];for(let r=c;r<=u;r++)for(let i=s;i<=l;i++){if(i<0||r<0||i*y>=n.W||r*y>=n.H)continue;let a=`16:${i}:${r}`;d.push(a);let o=this.detail.get(a);if(!o){this.queue.includes(a)||this.queue.unshift(a);continue}let s=i*y,c=r*y,l=Math.min(y,n.W-s),u=Math.min(y,n.H-c),[f,p]=t.worldToScreen(s,c);e.imageSmoothingEnabled=!1,e.drawImage(o,f,p,l*t.zoom,u*t.zoom)}if(this.queue.length>400){let e=new Set(d);this.queue=this.queue.filter(t=>e.has(t))}}else this.queue.length=0}renderChunk(e,t,n){let r=e,i=document.createElement(`canvas`),a=this.grid,o=Math.min(y,a.W-t*y),c=Math.min(y,a.H-n*y);i.width=o*r,i.height=c*r;let l=i.getContext(`2d`);for(let e=0;e<c;e++)for(let i=0;i<o;i++){let o=(n*y+e)*a.W+(t*y+i);this.drawTile(l,o,i*r,e*r,r)}l.strokeStyle=`rgba(20,40,60,0.35)`,l.lineWidth=1;for(let e=0;e<c;e++)for(let i=0;i<o;i++){let o=(n*y+e)*a.W+(t*y+i);if(!s(a.tiles[o]))continue;let c=t*y+i,u=n*y+e;l.beginPath(),u>0&&!s(a.tiles[o-a.W])&&(l.moveTo(i*r,e*r),l.lineTo((i+1)*r,e*r)),u<a.H-1&&!s(a.tiles[o+a.W])&&(l.moveTo(i*r,(e+1)*r),l.lineTo((i+1)*r,(e+1)*r)),c>0&&!s(a.tiles[o-1])&&(l.moveTo(i*r,e*r),l.lineTo(i*r,(e+1)*r)),c<a.W-1&&!s(a.tiles[o+1])&&(l.moveTo((i+1)*r,e*r),l.lineTo((i+1)*r,(e+1)*r)),l.stroke()}return i}drawTile(e,t,n,r,a){let s=this.grid,c=s.tiles[t],u=i[c],d=le(t)*(u.cat===`water`?.05:.09),f=S(u.color,d);if(l(c)){let e=Math.min(1,(s.pop[t]+s.jobs[t]*1.5)/1800);f=S(f,-.12*e)}switch(e.fillStyle=f,e.fillRect(n,r,a,a),u.cat){case`water`:return;case`green`:if(c===o.FOREST||c===o.GROVE){let i=c===o.FOREST?3+Math.floor(x(t,1)*3):2;for(let o=0;o<i;o++){let i=n+(.15+x(t,10+o)*.7)*a,s=r+(.15+x(t,20+o)*.7)*a,c=a*(.13+x(t,30+o)*.1);e.fillStyle=S(u.color,(x(t,40+o)-.5)*.2),e.beginPath(),e.arc(i,s,c,0,Math.PI*2),e.fill()}}else c===o.PARK&&(e.fillStyle=S(f,.08),e.fillRect(n+a*.1,r+a*.1,a*.8,a*.8),e.fillStyle=`#4f7d48`,e.beginPath(),e.arc(n+a*(.3+x(t,3)*.4),r+a*(.3+x(t,4)*.4),a*.14,0,Math.PI*2),e.fill());return;case`hill`:e.strokeStyle=`rgba(60,55,35,0.3)`,e.lineWidth=1,e.beginPath(),e.arc(n+a*.5,r+a*.5,a*(.22+x(t,5)*.12),.4,2.6),e.stroke();return;case`soil`:a>=8&&(e.strokeStyle=`rgba(255,255,255,0.12)`,e.lineWidth=1,e.beginPath(),x(t,6)>.5?(e.moveTo(n,r+a*.5),e.lineTo(n+a,r+a*.5)):(e.moveTo(n+a*.5,r),e.lineTo(n+a*.5,r+a)),e.stroke()),c===o.BLACKSOIL&&x(t,7)>.7&&this.drawHouseAt(e,t,0,n,r,a,.5);return;case`infra`:this.drawInfra(e,t,c,n,r,a);return}let p=Math.min(1,(s.pop[t]+s.jobs[t]*1.5)/1800);if(u.cat===`com`||c===o.TOWER){let i=p>.75?2:1;for(let o=0;o<i;o++){let i=a*(.34+x(t,50+o)*.22),s=a*(.34+x(t,60+o)*.22),c=n+(.08+x(t,70+o)*(.84-i/a))*a,l=r+(.08+x(t,80+o)*(.84-s/a))*a,u=se[Math.floor(x(t,90+o)*se.length)];if(e.fillStyle=`rgba(30,30,40,0.35)`,e.fillRect(c+a*.06,l+a*.06,i,s),e.fillStyle=u,e.fillRect(c,l,i,s),e.fillStyle=S(u,.14),e.fillRect(c,l,i,s*.3),p>.4){e.fillStyle=`rgba(255,240,180,0.5)`;let t=Math.max(1,Math.floor(s/(a*.12)));for(let n=0;n<t;n++)e.fillRect(c+i*.15,l+s*(.2+n/t*.7),i*.7,Math.max(1,a*.03))}}}else if(u.cat===`ind`){let i=a*(.55+x(t,51)*.3),o=a*(.3+x(t,61)*.15),s=n+(.05+x(t,71)*(.9-i/a))*a,c=r+(.1+x(t,81)*(.8-o/a))*a,l=ce[Math.floor(x(t,91)*ce.length)];e.fillStyle=`rgba(30,30,40,0.3)`,e.fillRect(s+a*.05,c+a*.05,i,o),e.fillStyle=l,e.fillRect(s,c,i,o),e.strokeStyle=S(l,-.2),e.lineWidth=1,e.strokeRect(s,c,i,o)}else{let i=c===o.VILLAGE?1+Math.floor(x(t,2)*2):2+Math.floor(x(t,2)*3);for(let o=0;o<i;o++)this.drawHouseAt(e,t,o,n,r,a,p)}}drawHouseAt(e,t,n,r,i,a,o){let s=n%2*.5,c=Math.floor(n/2)*.5,l=a*(.16+x(t,100+n)*.1)*(.8+o*.4),u=a*(.16+x(t,110+n)*.1)*(.8+o*.4),d=r+(s+.06+x(t,120+n)*.2)*a,f=i+(c+.06+x(t,130+n)*.2)*a,p=oe[Math.floor(x(t,140+n)*oe.length)];e.fillStyle=`rgba(40,35,30,0.28)`,e.fillRect(d+a*.025,f+a*.025,l,u),e.fillStyle=S(p,-.22),e.fillRect(d,f,l,u),e.fillStyle=p,e.fillRect(d,f,l,u*.62),e.fillStyle=S(p,.16),e.fillRect(d,f,l,Math.max(1,u*.18))}drawInfra(e,t,n,r,i,a){let s=this.grid;if(n===o.AIRPORT)e.fillStyle=`#6f7370`,e.fillRect(r,i,a,a),e.fillStyle=`rgba(255,255,255,0.75)`,x(t,200)>.5?e.fillRect(r,i+a*.4,a,a*.2):e.fillRect(r+a*.4,i,a*.2,a);else if(n===o.RAILHUB)e.fillStyle=`#8a857c`,e.fillRect(r+a*.08,i+a*.08,a*.84,a*.84),e.fillStyle=`#b5aa96`,e.fillRect(r+a*.08,i+a*.08,a*.84,a*.3),e.strokeStyle=`rgba(40,40,45,0.6)`,e.lineWidth=1,e.strokeRect(r+a*.08,i+a*.08,a*.84,a*.84);else if(n===o.WHARF||n===o.PORT){let c=t%s.W,l=t/s.W|0,u=-1;if(s.isWater(c,l-1)?u=0:s.isWater(c+1,l)?u=1:s.isWater(c,l+1)?u=2:s.isWater(c-1,l)&&(u=3),e.fillStyle=n===o.PORT?`#8d8a80`:`#9a8f7a`,e.fillRect(r,i,a,a),u>=0){e.fillStyle=`#a08a62`;let t=a*.28;u===0?e.fillRect(r+a*.2,i-t*.8,a*.6,t):u===1?e.fillRect(r+a-t*.2,i+a*.2,t,a*.6):u===2?e.fillRect(r+a*.2,i+a-t*.2,a*.6,t):e.fillRect(r-t*.8,i+a*.2,t,a*.6),e.strokeStyle=`rgba(90,70,40,0.5)`,e.lineWidth=1,e.strokeRect(u===1?r+a-t*.2:u===3?r-t*.8:r+a*.2,u===0?i-t*.8:u===2?i+a-t*.2:i+a*.2,u===0||u===2?a*.6:t,u===0||u===2?t:a*.6)}n===o.PORT&&(e.strokeStyle=`#4a4640`,e.lineWidth=Math.max(1.5,a*.08),e.beginPath(),e.moveTo(r+a*.25,i+a*.75),e.lineTo(r+a*.75,i+a*.25),e.stroke())}}},de={menu:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-menu"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />
</svg>
`,pause:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-pause"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="14" y="3" width="5" height="18" rx="1" />
  <rect x="5" y="3" width="5" height="18" rx="1" />
</svg>
`,coins:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-coins"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" />
  <path d="M15 6h1v4" />
  <path d="m6.134 14.768.866-.5 2 3.464" />
  <circle cx="16" cy="8" r="6" />
</svg>
`,users:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-users"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
</svg>
`,map:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-map"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
  <path d="M15 5.764v15" />
  <path d="M9 3.236v15" />
</svg>
`,pointer:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-mouse-pointer-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
</svg>
`,train:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-train-front"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
  <path d="m9 15-1-1" />
  <path d="m15 15 1-1" />
  <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
  <path d="m8 19-2 3" />
  <path d="m16 19 2 3" />
</svg>
`,track:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-train-track"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 17 17 2" />
  <path d="m2 14 8 8" />
  <path d="m5 11 8 8" />
  <path d="m8 8 8 8" />
  <path d="m11 5 8 8" />
  <path d="m14 2 8 8" />
  <path d="M7 22 22 7" />
</svg>
`,tram:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-tram-front"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="16" height="16" x="4" y="3" rx="2" />
  <path d="M4 11h16" />
  <path d="M12 3v8" />
  <path d="m8 19-2 3" />
  <path d="m18 22-2-3" />
  <path d="M8 15h.01" />
  <path d="M16 15h.01" />
</svg>
`,building:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-building-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 12h4" />
  <path d="M10 8h4" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
</svg>
`,hammer:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-hammer"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" />
  <path d="m18 15 4-4" />
  <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
</svg>
`,chart:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-chart-column"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M18 17V9" />
  <path d="M13 17V5" />
  <path d="M8 17v-3" />
</svg>
`,plane:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-plane"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
</svg>
`,anchor:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-anchor"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 6v16" />
  <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
  <path d="M9 11h6" />
  <circle cx="12" cy="4" r="2" />
</svg>
`,plus:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="M12 5v14" />
</svg>
`,folder:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-folder-open"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
</svg>
`,help:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-circle-help"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5" />
  <path d="M12 17h.01" />
</svg>
`,x:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,check:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 6 9 17l-5-5" />
</svg>
`,undo:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-undo-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9 14 4 9l5-5" />
  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
</svg>
`,target:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-target"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="6" />
  <circle cx="12" cy="12" r="2" />
</svg>
`,news:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-newspaper"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 18h-5" />
  <path d="M18 14h-8" />
  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
  <rect width="8" height="4" x="10" y="6" rx="1" />
</svg>
`,save:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-save"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
  <path d="M7 3v4a1 1 0 0 0 1 1h7" />
</svg>
`,download:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-download"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`,upload:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-upload"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
</svg>
`,settings:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-settings"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,landmark:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-landmark"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 18v-7" />
  <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
  <path d="M14 18v-7" />
  <path d="M18 18v-7" />
  <path d="M3 22h18" />
  <path d="M6 18v-7" />
</svg>
`,ticket:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-ticket"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
  <path d="M13 5v2" />
  <path d="M13 17v2" />
  <path d="M13 11v2" />
</svg>
`,play:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-play"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
</svg>
`,chevron:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,home:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-home"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
</svg>
`,alert:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-triangle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
</svg>
`,flag:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-flag"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
</svg>
`,layers:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-layers"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
</svg>
`,fire:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-flame"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
</svg>
`,eye:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-eye"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,trash:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-trash-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
`};function C(e,t=16,n=``){let r=de[e];return r=r.replace(/width="24"/,`width="${t}"`).replace(/height="24"/,`height="${t}"`),n&&(r=r.replace(`<svg`,`<svg class="${n}"`)),r}var fe=new Map;function pe(e,t){let n=de[e];return n.includes(`xmlns`)||(n=n.replace(`<svg`,`<svg xmlns="http://www.w3.org/2000/svg"`)),n=n.replace(/currentColor/g,t),`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`}function me(e,t){let n=`${e}:${t}`,r=fe.get(n);return r||(r=new Image,r.src=pe(e,t),fe.set(n,r)),r}function he(e,t,n,r,i,a=`#1c232e`){let o=me(t,a);o.complete&&o.naturalWidth&&e.drawImage(o,n-i/2,r-i/2,i,i)}var ge=class{canvas;grid;net;facilities;sim;session;cam=new r;ground;overlay=`none`;overlayCnv=document.createElement(`canvas`);overlayDirty=!0;agentsT=0;constructor(e,t,n,r,i,a){this.canvas=e,this.grid=t,this.net=n,this.facilities=r,this.sim=i,this.session=a,this.ground=new ue(t),this.cam.x=t.W/2,this.cam.y=t.H/2,this.fitMap()}setGrid(e){this.grid=e,this.ground.setGrid(e),this.cam.x=e.W/2,this.cam.y=e.H/2,this.overlayDirty=!0,this.fitMap()}fitMap(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=Math.min(e/this.grid.W,t/this.grid.H)*.95;this.cam.zoom=Math.max(this.cam.minZoom,Math.min(this.cam.maxZoom,n)),this.cam.x=this.grid.W/2,this.cam.y=this.grid.H/2}invalidateOverlay(){this.overlayDirty=!0}invalidateGround(){this.ground.markTilesChanged()}render(e){let t=window.devicePixelRatio||1,n=this.canvas.clientWidth,r=this.canvas.clientHeight;(this.canvas.width!==Math.round(n*t)||this.canvas.height!==Math.round(r*t))&&(this.canvas.width=Math.round(n*t),this.canvas.height=Math.round(r*t)),this.cam.vw=n,this.cam.vh=r,this.cam.dpr=t,this.cam.clamp(this.grid.W,this.grid.H),this.ground.update();let i=this.canvas.getContext(`2d`);i.setTransform(t,0,0,t,0,0),i.fillStyle=`#f7f6f3`,i.fillRect(0,0,n,r),this.ground.draw(i,this.cam),this.overlay!==`none`&&this.drawOverlay(i),this.drawNetwork(i),this.drawFacilities(i),this.drawAgents(i,e);let a=this.session();a&&this.drawDraft(i,a),this.drawLabels(i);let o=window.__rcDebug;o&&(o.frames=(o.frames||0)+1,o.vw=n,o.vh=r,o.dpr=t,o.zoom=this.cam.zoom,o.camX=this.cam.x,o.camY=this.cam.y,o.mapPx0=Math.round((0-this.cam.x)*this.cam.zoom+n/2),o.mapPy0=Math.round((0-this.cam.y)*this.cam.zoom+r/2),o.mapSize=Math.round(this.grid.W*this.cam.zoom))}drawOverlay(e){let[t,n,r,i]=this.cam.visibleCells(this.grid.W,this.grid.H),a=r-t+1,o=i-n+1;if(a<=0||o<=0)return;let s=this.cam.zoom>8?4:2,c=this.overlayCnv;if(this.overlayDirty||c.width!==a*s||c.height!==o*s){c.width=a*s,c.height=o*s;let e=c.getContext(`2d`);e.clearRect(0,0,c.width,c.height);let r=this.sim();for(let i=0;i<o;i++)for(let o=0;o<a;o++){let a=(n+i)*this.grid.W+(t+o),c=0,l=``;this.overlay===`pop`?(c=Math.min(1,(this.grid.pop[a]+this.grid.jobs[a])/3500),l=`rgba(255,170,40,`):this.overlay===`cov`?(c=r.covCell.length?r.covCell[a]:0,l=`rgba(80,220,140,`):this.overlay===`flow`&&(c=0,l=`rgba(255,90,90,`),c<=.02||(e.fillStyle=`${l}${(c*.55).toFixed(3)})`,e.fillRect(o*s,i*s,s,s))}this.overlayDirty=!1}let[l,u]=this.cam.worldToScreen(t,n);e.save(),e.imageSmoothingEnabled=!0,e.globalAlpha=.85,e.drawImage(c,l,u,a*this.cam.zoom,o*this.cam.zoom),e.restore()}linePath(e,t){let n=[];for(let r=0;r<e.stationIds.length;r++){let i=this.net.stations.get(e.stationIds[r]);if(i&&(n.push(i.x,i.y),r<e.stationIds.length-1)){let i=this.findSeg(e.id,e.stationIds[r],e.stationIds[r+1]);if(i){for(let e=0;e<i.pts.length;e+=2)n.push(i.pts[e],i.pts[e+1]);t&&t.push(i.id)}}}return n}findSeg(e,t,n){for(let r of this.net.segments.values())if(r.line===e&&(r.a===t&&r.b===n||r.a===n&&r.b===t))return r;return null}drawNetwork(e){let t=Math.max(3,this.cam.zoom*.25);e.lineJoin=`round`,e.lineCap=`round`;for(let n of this.net.lines.values())if(!(n.stationIds.length<2))for(let r=0;r+1<n.stationIds.length;r++){let i=this.net.stations.get(n.stationIds[r]),a=this.net.stations.get(n.stationIds[r+1]);if(!i||!a)continue;let o=this.findSeg(n.id,i.id,a.id),s=o?[i.x,i.y,...o.pts,a.x,a.y]:[i.x,i.y,a.x,a.y];if(s.length<4)continue;let c=[];for(let e=0;e<s.length;e+=2){let[t,n]=this.cam.worldToScreen(s[e],s[e+1]);c.push(t,n)}this.strokeTrack(e,c,o?o.type:`surface`,n,t)}e.setLineDash([]),e.globalAlpha=1;let n=Math.max(3,Math.min(7,this.cam.zoom*.3));for(let t of this.net.stations.values()){let[r,i]=this.cam.worldToScreen(t.x,t.y);if(r<-20||i<-20||r>this.cam.vw+20||i>this.cam.vh+20)continue;let a=t.lines.some(e=>this.net.lines.get(e)?.mode===`hsr`),o=t.lines.length>1;e.beginPath(),a?e.rect(r-n-1,i-n-1,(n+1)*2,(n+1)*2):e.arc(r,i,n,0,Math.PI*2);let s=this.sim().stationFlow.get(t.id)||0;e.fillStyle=s>8e4?`#ffb199`:s>35e3?`#ffe0a3`:`#fff`,e.fill(),e.lineWidth=Math.max(1.5,n*.45);let c=t.lines.length&&this.net.lines.get(t.lines[0])?.color||`#888`;e.strokeStyle=o?`#333`:c,e.stroke(),o&&(e.beginPath(),e.arc(r,i,n+2.5,0,Math.PI*2),e.strokeStyle=`rgba(255,255,255,0.85)`,e.lineWidth=1.2,e.stroke())}}strokeTrack(e,t,n,r,i){let a=r.mode,o=0,s=[0];for(let e=2;e<t.length;e+=2)o+=Math.hypot(t[e]-t[e-2],t[e+1]-t[e-1]),s.push(o);if(o<=0)return;let c=new Path2D;c.moveTo(t[0],t[1]);for(let e=2;e<t.length;e+=2)c.lineTo(t[e],t[e+1]);if(n===`underground`){e.save(),e.globalAlpha=.5,e.strokeStyle=`#20262f`,e.lineWidth=i+2,e.setLineDash([]),e.stroke(c),e.globalAlpha=.85,e.strokeStyle=r.color,e.lineWidth=Math.max(2,i*.55),e.setLineDash([i*1.4,i*1]),e.stroke(c),e.restore();return}if(n===`elevated`){e.save(),e.strokeStyle=`rgba(225,228,232,0.9)`,e.lineWidth=i+3,e.setLineDash([]),e.stroke(c),e.strokeStyle=`rgba(140,145,152,0.9)`,e.lineWidth=i+1,e.stroke(c);let n=new Path2D;for(let e=14;e<o;e+=Math.max(22,i*4)){let r=this.alongPts(t,s,e);r&&(n.moveTo(r[0],r[1]),n.lineTo(r[0],r[1]+i*1.1))}e.strokeStyle=`rgba(105,110,118,0.95)`,e.lineWidth=Math.max(1.5,i*.3),e.stroke(n),e.strokeStyle=r.color,e.lineWidth=Math.max(2,i*.5),e.stroke(c),e.restore();return}if(e.save(),e.setLineDash([]),a===`tram`)e.strokeStyle=`#a8a49a`,e.lineWidth=i+3,e.stroke(c),e.strokeStyle=`#8f8b82`,e.lineWidth=i+1,e.stroke(c);else{let t=a===`hsr`?i+6:i+4;e.strokeStyle=`#9c9078`,e.lineWidth=t,e.stroke(c),e.strokeStyle=`#877c66`,e.lineWidth=t-2,e.stroke(c)}let l=a===`hsr`?6:8,u=new Path2D,d=a===`tram`?i*.9:i*1.25;for(let e=3;e<o;e+=l){let n=this.alongPts(t,s,e);if(!n)continue;let r=this.alongPts(t,s,Math.min(o,e+1.5)),i=1,a=0;if(r){i=r[0]-n[0],a=r[1]-n[1];let e=Math.hypot(i,a)||1;i/=e,a/=e}let c=-a,l=i;u.moveTo(n[0]-c*d/2,n[1]-l*d/2),u.lineTo(n[0]+c*d/2,n[1]+l*d/2)}e.strokeStyle=a===`tram`?`rgba(70,66,60,0.75)`:`rgba(62,55,42,0.85)`,e.lineWidth=Math.max(1,i*.22),e.stroke(u),e.strokeStyle=r.color,e.lineWidth=Math.max(1.8,i*.42),e.stroke(c),a===`hsr`&&(e.strokeStyle=`rgba(255,255,255,0.65)`,e.lineWidth=1,e.stroke(c)),e.restore()}alongPts(e,t,n){for(let r=1;r<t.length;r++)if(t[r]>=n){let i=(n-t[r-1])/Math.max(1e-4,t[r]-t[r-1]);return[e[(r-1)*2]+(e[r*2]-e[(r-1)*2])*i,e[(r-1)*2+1]+(e[r*2+1]-e[(r-1)*2+1])*i]}return null}drawFacilities(e){let t=14+this.cam.zoom*.4;for(let n of this.facilities.list){let[r,i]=this.cam.worldToScreen(n.x,n.y);r<-30||i<-30||r>this.cam.vw+30||i>this.cam.vh+30||(e.beginPath(),e.arc(r,i,t*.72,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,0.94)`,e.fill(),e.lineWidth=2,e.strokeStyle=`#263238`,e.stroke(),he(e,n.kind===`airport`?`plane`:n.kind===`port`?`anchor`:`landmark`,r,i,t*.9,`#1c232e`))}}drawAgents(e,t){this.agentsT+=t;let r=this.sim(),i=this.agentsT,a=0;e.save();for(let t of this.net.lines.values()){if(t.stationIds.length<2||a>=n.perf.maxTrains)continue;let o=this.linePath(t);if(o.length<4)continue;let s=0,c=[0];for(let e=2;e<o.length;e+=2)s+=Math.hypot(o[e]-o[e-2],o[e+1]-o[e-1]),c.push(s);if(s<=0)continue;let l=r.lineHeadway.get(t.id)||10,u=s*this.grid.cellM/1e3/n.modes[t.mode].speedKmh*60*2,d=Math.max(1,Math.min(24,Math.round(u/Math.max(l,1)))),f=n.modes[t.mode].speedKmh*1e3/3600/this.grid.cellM*this.agentsSpeedFactor();for(let r=0;r<d&&a<n.perf.maxTrains;r++){let n=(i/(s/f*2)+r/d)%1*s*2,l=n<s?n:s*2-n,u=n<s?1:-1,p=this.posAlong(o,c,l);if(!p)continue;let[m,h]=this.cam.worldToScreen(p[0],p[1]);if(m<-10||h<-10||m>this.cam.vw+10||h>this.cam.vh+10){a++;continue}let g=p[2]+(u>0?0:Math.PI);e.translate(m,h),e.rotate(g);let _=Math.max(5,this.cam.zoom*.5),v=Math.max(2.5,this.cam.zoom*.2);e.fillStyle=t.color,e.beginPath(),e.roundRect(-_/2,-v/2,_,v,v/2),e.fill(),e.strokeStyle=`rgba(0,0,0,0.35)`,e.lineWidth=.8,e.stroke(),e.setTransform(window.devicePixelRatio||1,0,0,window.devicePixelRatio||1,0,0),a++}}e.restore()}agentsSpeedFactor(){return this.speedRef?this.speedRef():1}speedRef=null;posAlong(e,t,n){for(let r=1;r<t.length;r++)if(t[r]>=n){let i=(n-t[r-1])/Math.max(1e-4,t[r]-t[r-1]),a=e[(r-1)*2],o=e[(r-1)*2+1],s=e[r*2],c=e[r*2+1];return[a+(s-a)*i,o+(c-o)*i,Math.atan2(c-o,s-a)]}return null}drawDraft(e,t){if(t.kind===`build`&&t.lineId!=null){let n=this.net.lines.get(t.lineId);if(n&&n.stationIds.length>=1){let t=this.linePath(n);if(t.length>=2){e.beginPath();let[r,i]=this.cam.worldToScreen(t[0],t[1]);e.moveTo(r,i);for(let n=2;n<t.length;n+=2){let[r,i]=this.cam.worldToScreen(t[n],t[n+1]);e.lineTo(r,i)}e.strokeStyle=n.color,e.globalAlpha=.75,e.lineWidth=Math.max(3,this.cam.zoom*.22),e.setLineDash([10,6]),e.stroke(),e.setLineDash([]),e.globalAlpha=1}}}else if(t.kind===`demolish`){e.strokeStyle=`#ff5252`,e.fillStyle=`rgba(255,82,82,0.25)`,e.lineWidth=2;for(let n of t.removedStations){let t=this.net.stations.get(n);if(!t)continue;let[r,i]=this.cam.worldToScreen(t.x,t.y);e.beginPath(),e.arc(r,i,9,0,Math.PI*2),e.fill(),e.stroke()}for(let e of t.addedFacilities);for(let n of t.removedFacilities){let t=this.facilities.get(n);if(!t)continue;let[r,i]=this.cam.worldToScreen(t.x,t.y);e.beginPath(),e.arc(r,i,12,0,Math.PI*2),e.fill(),e.stroke()}}else if(t.kind===`facility`&&t.facilityKind){let r=n.facility[t.facilityKind].catchM;if(this.ghost){let[t,n]=this.cam.worldToScreen(this.ghost[0],this.ghost[1]);e.beginPath(),e.arc(t,n,r/this.grid.cellM*this.cam.zoom,0,Math.PI*2),e.strokeStyle=`rgba(255,255,255,0.5)`,e.setLineDash([6,6]),e.stroke(),e.setLineDash([])}}}ghost=null;drawLabels(e){if(this.cam.zoom<4.5)return;e.font=`${Math.max(9,Math.min(12,this.cam.zoom*.9))}px system-ui,sans-serif`,e.textAlign=`center`,e.textBaseline=`top`;let[t,n,r,i]=this.cam.visibleCells(this.grid.W,this.grid.H);for(let a of this.net.stations.values()){if(a.x<t||a.x>r||a.y<n||a.y>i)continue;let[o,s]=this.cam.worldToScreen(a.x,a.y),c=Math.max(3,Math.min(7,this.cam.zoom*.3)),l=a.name,u=e.measureText(l).width;e.fillStyle=`rgba(255,255,255,0.88)`,e.fillRect(o-u/2-3,s+c+2,u+6,14),e.fillStyle=`#111`,e.fillText(l,o,s+c+3)}}},_e=class{canvas;host;pointers=new Map;downX=0;downY=0;moved=!1;pinchD=0;pinchCx=0;pinchCy=0;longTimer=null;downTime=0;constructor(e,t){this.canvas=e,this.host=t,e.addEventListener(`pointerdown`,e=>this.down(e)),e.addEventListener(`pointermove`,e=>this.move(e)),e.addEventListener(`pointerup`,e=>this.up(e)),e.addEventListener(`pointercancel`,e=>this.up(e)),e.addEventListener(`wheel`,e=>this.wheel(e),{passive:!1}),e.style.touchAction=`none`}down(e){if(this.canvas.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.offsetX,y:e.offsetY}),this.pointers.size===1)this.downX=e.offsetX,this.downY=e.offsetY,this.moved=!1,this.downTime=performance.now(),this.host.onLongPress&&(this.longTimer=window.setTimeout(()=>{if(!this.moved){let[t,n]=this.host.cam.screenToWorld(e.offsetX,e.offsetY);this.host.onLongPress(t,n)}},550));else if(this.pointers.size===2){let[e,t]=[...this.pointers.values()];this.pinchD=Math.hypot(e.x-t.x,e.y-t.y),this.pinchCx=(e.x+t.x)/2,this.pinchCy=(e.y+t.y)/2,this.moved=!0,this.longTimer&&=(clearTimeout(this.longTimer),null)}}move(e){let t=this.pointers.get(e.pointerId);if(!t)return;let n=e.offsetX-t.x,r=e.offsetY-t.y;if(t.x=e.offsetX,t.y=e.offsetY,this.pointers.size===1){if(!this.moved&&Math.hypot(e.offsetX-this.downX,e.offsetY-this.downY)>8&&(this.moved=!0,this.longTimer&&=(clearTimeout(this.longTimer),null)),this.moved){this.host.cam.pan(-n,-r);let e=this.host.grid;e&&this.host.cam.clamp(e.W,e.H)}}else if(this.pointers.size===2){let[e,t]=[...this.pointers.values()],n=Math.hypot(e.x-t.x,e.y-t.y),r=(e.x+t.x)/2,i=(e.y+t.y)/2;if(this.pinchD>0){let e=n/this.pinchD;this.host.cam.zoomAt(this.pinchCx,this.pinchCy,e),this.host.cam.pan(this.pinchCx-r,this.pinchCy-i)}this.pinchD=n,this.pinchCx=r,this.pinchCy=i}}up(e){let t=this.pointers.delete(e.pointerId);if(this.longTimer&&=(clearTimeout(this.longTimer),null),t){if(this.pointers.size===0&&!this.moved&&performance.now()-this.downTime<600){let[t,n]=this.host.cam.screenToWorld(e.offsetX,e.offsetY);this.host.onTap(t,n,e.offsetX,e.offsetY)}this.pointers.size<2&&(this.pinchD=0)}}wheel(e){e.preventDefault();let t=e.deltaY<0?1.15:1/1.15;this.host.cam.zoomAt(e.offsetX,e.offsetY,t)}isPanning(){return this.moved&&this.pointers.size>0}},ve=(e,t,n)=>e+(t-e)*n;function w(e,t){if(t<=e[0][0])return e[0][1];let n=e[e.length-1];if(t>=n[0])return n[1];for(let n=1;n<e.length;n++)if(t<=e[n][0]){let[r,i]=e[n-1],[a,o]=e[n];return ve(i,o,(t-r)/(a-r))}return n[1]}function T(e,t=!1){let n=t&&e>0?`+`:``;return Math.abs(e)>=1e4?`${n}${(e/1e4).toFixed(2)} 亿`:`${n}${Math.round(e).toLocaleString(`zh-CN`)} 万`}function E(e){return e>=1e8?`${(e/1e8).toFixed(2)} 亿`:e>=1e4?`${(e/1e4).toFixed(1)} 万`:Math.round(e).toLocaleString(`zh-CN`)}function D(e){return(1+n.cost.inflation)**+Math.max(0,e-1990)}function ye(e,t,n,r){return Math.hypot(n-e,r-t)}function be(e){let t=0;for(let n=2;n<e.length;n+=2)t+=ye(e[n-2],e[n-1],e[n],e[n+1]);return t}function xe(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0).toString(16)}var O=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.innerHTML=n),r},k=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};function Se(e,t,r,i){let a=n.modes[r],o=D(i),s=e.lengthM/1e3,c=a.trackPerKm[e.type]??a.trackPerKm.surface,l=a.waterPerKm[e.type]??a.waterPerKm.surface,u=e.waterM/1e3,d=s*c*o,f=u*l*o,p=[{kind:`track`,label:`${a.typeNames[e.type]||`轨道`} ${s.toFixed(1)} km`,wan:d}];return f>0&&p.push({kind:`water`,label:`跨水 ${u.toFixed(1)} km`,wan:f}),{items:p,total:d+f}}function Ce(e,t,r){let i=n.modes[e];return(i.stationCost[t]??i.stationCost.surface)*D(r)}function we(e,t,r,i,a){D(a);let o=0;for(let r of t){let t=e.segments.get(r);t&&(o+=Se(t,e,i,a).total*n.cost.demolishFactor)}for(let t of r){let r=e.stations.get(t);if(r)for(let i of r.lines){let r=e.lines.get(i);r&&(o+=Ce(r.mode,Te(e,t),a)*n.cost.demolishFactor)}}return o}function Te(e,t){for(let n of e.segments.values())if(n.a===t||n.b===t)return n.type;return`surface`}function Ee(e,t,r,i,a,o){let s=[],c=n.modes[r];if(!t.inMap(Math.round(i),Math.round(a)))return s.push({level:`error`,msg:`超出地图范围`}),s;t.isWater(Math.round(i),Math.round(a))&&s.push({level:`error`,msg:`不能建在水面上（可从两岸穿越）`}),t.isHill(Math.round(i),Math.round(a))&&s.push({level:`warn`,msg:`山体地形：地铁需隧道、造价高`});for(let n of e.stations.values()){if(!n.lines.some(t=>{let n=e.lines.get(t);return n&&n.mode===r&&n.id!==o}))continue;let l=Math.hypot(i-n.x,a-n.y)*t.cellM;if(l>0&&l<c.minSpacingM){s.push({level:`error`,msg:`${c.name}站间距不足（${Math.round(l)}m < ${c.minSpacingM}m）`});break}}return s}function De(e,t,n){let r=e.lines.get(t);if(!r)return null;let i=0,a=0,o=r.stationIds.length;for(let n of e.segments.values())n.line===t&&(i+=n.lengthM,a+=n.waterM);return{lenKm:i/1e3,waterKm:a/1e3,stations:o,line:r}}var A=[{id:`first-line`,name:`开通第一条线路`,desc:`建设一条至少 2 站的线路`,reward:5e3,check:e=>[...e.net.lines.values()].some(e=>e.stationIds.length>=2)},{id:`riders-1k`,name:`日客流破千`,desc:`全网日均乘降达到 1,000 人次`,reward:8e3,check:e=>e.sim.totalRiders>=1e3,progress:e=>Math.min(1,e.sim.totalRiders/1e3)},{id:`profit-month`,name:`单月盈利`,desc:`任意一个月收支结余为正`,reward:1e4,check:e=>e.econ.history.some(e=>e.net>0)},{id:`three-lines`,name:`三线成网`,desc:`同时运营 3 条线路`,reward:15e3,check:e=>[...e.net.lines.values()].filter(e=>e.stationIds.length>=2).length>=3},{id:`hub`,name:`枢纽通航`,desc:`建成机场或火车站，并与轨道接驳`,reward:2e4,check:e=>[...e.sim.hubPax.values()].some(e=>e>0)},{id:`riders-30k`,name:`日客流破三万`,desc:`全网日均乘降达到 30,000 人次`,reward:25e3,check:e=>e.sim.totalRiders>=3e4,progress:e=>Math.min(1,e.sim.totalRiders/3e4)},{id:`hsr`,name:`高铁通车`,desc:`建成一条至少 2 站的高铁线路`,reward:3e4,check:e=>[...e.net.lines.values()].some(e=>e.mode===`hsr`&&e.stationIds.length>=2)},{id:`cov-half`,name:`覆盖过半`,desc:`轨道覆盖范围容纳过半常住人口`,reward:3e4,check:e=>Oe(e)>=.5,progress:e=>Oe(e)},{id:`port`,name:`开港通商`,desc:`建成一座港口`,reward:15e3,check:e=>e.facilities.byKind(`port`).length>0},{id:`line-20k`,name:`王牌线路`,desc:`单条线路日客流达到 20,000 人次`,reward:4e4,check:e=>[...e.sim.lineRiders.values()].some(e=>e>=2e4),progress:e=>Math.min(1,Math.max(0,...e.sim.lineRiders.values())/2e4)},{id:`pop-3m`,name:`迈向大城`,desc:`常住人口达到 300 万`,reward:6e4,check:e=>e.pop>=3e6,progress:e=>Math.min(1,e.pop/3e6)},{id:`riders-200k`,name:`轨道都市`,desc:`全网日均乘降达到 200,000 人次`,reward:1e5,check:e=>e.sim.totalRiders>=2e5,progress:e=>Math.min(1,e.sim.totalRiders/2e5)}];function Oe(e){let t=e.sim.covCell;if(!t.length)return 0;let n=0,r=0;for(let i=0;i<e.grid.cells;i++)r+=e.grid.pop[i],t[i]>.15&&(n+=e.grid.pop[i]);return r>0?n/r:0}var ke=class{done=new Set;orderIdx=0;checkAll(e){let t=[];for(let n of A)this.done.has(n.id)||n.check(e)&&(this.done.add(n.id),t.push(n));for(;this.orderIdx<A.length&&this.done.has(A[this.orderIdx].id);)this.orderIdx++;return t}current(){for(let e=this.orderIdx;e<A.length;e++)if(!this.done.has(A[e].id))return A[e];return null}allDone(){return this.done.size>=A.length}serialize(){return[...this.done]}loadIds(e){for(this.done=new Set(e);this.orderIdx<A.length&&this.done.has(A[this.orderIdx].id);)this.orderIdx++}},j=class{W;H;cells;cellM;tiles;pop;jobs;version=0;constructor(e,t,r=n.CELL_M){this.W=e,this.H=t,this.cells=e*t,this.cellM=r,this.tiles=new Uint8Array(this.cells),this.pop=new Float32Array(this.cells),this.jobs=new Float32Array(this.cells)}idx(e,t){return t*this.W+e}inMap(e,t){return e>=0&&t>=0&&e<this.W&&t<this.H}setTile(e,t,n){let r=this.idx(e,t);this.tiles[r]=n,this.pop[r]=u[n],this.jobs[r]=d[n],this.version++}rederive(){for(let e=0;e<this.cells;e++){let t=this.tiles[e];this.pop[e]=u[t],this.jobs[e]=d[t]}this.version++}get zoneSize(){let e=n.ZONE;for(;this.W/e*(this.H/e)>n.ZONE_MAX;)e+=2;return e}get zW(){return Math.ceil(this.W/this.zoneSize)}get zH(){return Math.ceil(this.H/this.zoneSize)}get zoneCount(){return this.zW*this.zH}totalPop(){let e=0;for(let t=0;t<this.pop.length;t++)e+=this.pop[t];return e}totalJobs(){let e=0;for(let t=0;t<this.jobs.length;t++)e+=this.jobs[t];return e}isWater(e,t){return this.inMap(e,t)&&s(this.tiles[this.idx(e,t)])}isHill(e,t){return this.inMap(e,t)&&c(this.tiles[this.idx(e,t)])}isBuilt(e,t){return this.inMap(e,t)&&l(this.tiles[this.idx(e,t)])}lu(e){switch(i[this.tiles[e]].cat){case`water`:return 0;case`green`:return this.tiles[e]===o.PARK?3:1;case`hill`:return 2;case`res`:return 5;case`com`:return 6;case`ind`:return 7;default:return 4}}resCapOf(e){return u[e]}},Ae=class e{list=[];nextId=1;add(e,t,r,i,a){let o={id:this.nextId++,kind:e,x:t,y:r,openYear:i,name:a||n.facility[e].name};return this.list.push(o),o}remove(e){this.list=this.list.filter(t=>t.id!==e)}get(e){return this.list.find(t=>t.id===e)}byKind(e){return this.list.filter(t=>t.kind===e)}cost(e,t){return n.facility[e].cost*D(t)}tileOf(e){return ae[e]}serialize(){return{nextId:this.nextId,list:this.list}}static load(t){let n=new e;return n.nextId=t.nextId,n.list=t.list,n}},je=.5;function*Me(e,t,r,i,a){n.sim;let o=Ne(e);yield`分区`;let s=Pe(e,o,r);yield`出行需求`;let{covCell:c,covZ:l,near:u}=Fe(e,t,o);yield`步行覆盖`;let d=Ie(t);yield`线网耗时`;let f=Be(t,o,s,u,d,a,i);return f.zones=o,f.od=s,f.covZ=l,f.covCell=c,f.solvedAt={y:i,m:0},He(t,r,f,i,u,d),yield`枢纽客流`,Ue(t,f),f}function Ne(e){let t=e.zoneSize,n=e.zW,r=e.zH,i=new Float64Array(n*r),a=new Float64Array(n*r),o=new Float64Array(n*r*2);for(let r=0;r<e.H;r++)for(let s=0;s<e.W;s++){let c=e.idx(s,r),l=(r/t|0)*n+(s/t|0);i[l]+=e.pop[c],a[l]+=e.jobs[c],o[l*2]+=s*(e.pop[c]+e.jobs[c]),o[l*2+1]+=r*(e.pop[c]+e.jobs[c])}let s=[];for(let e=0;e<n*r;e++){let r=i[e]+a[e];s.push({id:e,x:r>0?o[e*2]/r:(e%n+.5)*t,y:r>0?o[e*2+1]/r:((e/n|0)+.5)*t,pop:i[e],jobs:a[e]})}return s}function Pe(e,t,r){let i=n.sim,a=e.zoneSize,o=e.zW,s=new Float64Array(t.length),c=[];for(let e=0;e<t.length;e++)s[e]=t[e].pop+t[e].jobs*1.3,s[e]>30&&c.push(e);for(let e of r.list){let t=(e.y/a|0)*o+(e.x/a|0);s[t]!==void 0&&(s[t]+=3e4,c.includes(t)||c.push(t))}let l=i.decayKm*5*1e3/e.cellM,u=[];for(let n of c){let r=t[n],a=r.pop*i.tripRatePop+r.jobs*i.tripRateJob;if(a<1)continue;let o=[];for(let a of c){if(a===n)continue;let c=t[a],u=c.x-r.x,d=c.y-r.y;if(u>l||u<-l||d>l||d<-l)continue;let f=Math.hypot(u,d)*e.cellM/1e3,p=s[a]*Math.exp(-f/i.decayKm);p>.5&&o.push([a,p])}if(o.length===0)continue;o.sort((e,t)=>t[1]-e[1]);let d=o.slice(0,i.topK),f=d.reduce((e,t)=>e+t[1],0);if(!(f<=0))for(let[e,t]of d)u.push({o:n,d:e,trips:a*t/f})}return u}function Fe(e,t,r){let i=new Float32Array(e.cells),a=e.zoneSize,o=e.zW,s=new Float64Array(r.length),c=new Float64Array(r.length),l=n.walk.accessM/e.cellM,u=[...t.stations.values()],d=r.map(()=>[]);for(let t of u){let n=Math.max(0,Math.floor(t.x-l)),r=Math.min(e.W-1,Math.ceil(t.x+l)),u=Math.max(0,Math.floor(t.y-l)),d=Math.min(e.H-1,Math.ceil(t.y+l));for(let f=u;f<=d;f++)for(let u=n;u<=r;u++){let n=Math.hypot(u-t.x,f-t.y);if(n>l)continue;let r=1-n/l,d=e.idx(u,f);r>i[d]&&(i[d]=r);let p=(f/a|0)*o+(u/a|0);s[p]+=r,c[p]++}}let f=new Float32Array(r.length);for(let e=0;e<r.length;e++)f[e]=c[e]>0?s[e]/c[e]:0;for(let t of u)for(let i=0;i<r.length;i++){let a=Math.hypot(t.x-r[i].x,t.y-r[i].y)*e.cellM/n.walk.mPerMin,o=d[i];o.length<2?(o.push({st:t,walkMin:a}),o.sort((e,t)=>e.walkMin-t.walkMin)):a<o[1].walkMin&&(o[1]={st:t,walkMin:a},o.sort((e,t)=>e.walkMin-t.walkMin))}return{covCell:i,covZ:f,near:d}}function Ie(e){let t=new Map;for(let n of e.segments.values()){let r=e.lines.get(n.line);if(!r)continue;let i=Re(n,r.mode);M(t,n.a,{to:n.b,time:i,line:r.id,seg:n.id}),M(t,n.b,{to:n.a,time:i,line:r.id,seg:n.id})}let r=[...e.stations.values()],i=new Map;for(let e=0;e<r.length;e++)for(let t=e+1;t<r.length;t++){let a=r[e],o=r[t],s=Math.hypot(a.x-o.x,a.y-o.y)*250;if(s>n.walk.transferWalkM)continue;let c=s/n.walk.mPerMin*n.walk.weight+1;M(i,a.id,{to:o.id,walkMin:c}),M(i,o.id,{to:a.id,walkMin:c})}let a=new Map;for(let n of r)t.has(n.id)&&a.set(n.id,ze(e,n.id,t,i));return a}var Le=class{a=[];get size(){return this.a.length}push(e){let t=this.a;t.push(e);let n=t.length-1;for(;n>0;){let e=n-1>>1;if(t[e][0]<=t[n][0])break;[t[e],t[n]]=[t[n],t[e]],n=e}}pop(){let e=this.a;if(!e.length)return;let t=e[0],n=e.pop();if(e.length){e[0]=n;let t=0;for(;;){let n=t*2+1,r=n+1,i=t;if(n<e.length&&e[n][0]<e[i][0]&&(i=n),r<e.length&&e[r][0]<e[i][0]&&(i=r),i===t)break;[e[i],e[t]]=[e[t],e[i]],t=i}}return t}};function M(e,t,n){let r=e.get(t);r?r.push(n):e.set(t,[n])}function Re(e,t){return e.lengthM/1e3/n.modes[t].speedKmh*60+je}function ze(e,t,r,i){let a=1e5,o=new Map,s=new Map,c=new Le,l=new Set,u=new Map;for(let e of r.get(t)||[]){let r=t*a+e.line,i=e.time+n.sim.boardPen;i<(o.get(r)??1/0)&&(o.set(r,i),s.set(r,e.line),c.push([i,r]))}for(;c.size;){let[e,t]=c.pop();if(l.has(t))continue;l.add(t);let d=t/a|0,f=s.get(t)??-1,p=u.get(d);(!p||e<p.time)&&u.set(d,{time:e,boardLine:f});for(let i of r.get(d)||[]){let r=i.to*a+i.line,l=e+i.time+(i.line===t%a?0:n.sim.transferPen);l<(o.get(r)??1/0)&&(o.set(r,l),s.set(r,f),c.push([l,r]))}for(let t of i.get(d)||[])for(let i of r.get(t.to)||[]){let r=t.to*a+i.line,l=e+t.walkMin+i.time+n.sim.transferPen;l<(o.get(r)??1/0)&&(o.set(r,l),s.set(r,f),c.push([l,r]))}}return u}function Be(e,t,r,i,a,o,s){let c=n.sim,l={zones:t,od:r,covZ:new Float32Array,covCell:new Float32Array,lineRiders:new Map,linePeak:new Map,stationFlow:new Map,segLoad:new Map,lineHeadway:new Map,totalRiders:0,totalTrips:0,hubPax:new Map,solvedAt:{y:s,m:0}},u=o/c.votYuanH*60,d=new Map;for(let t of e.segments.values())d.set(t.id,t.line);for(let e of r){let r=t[e.o],o=t[e.d];l.totalTrips+=e.trips;let s=i[e.o]||[],d=i[e.d]||[];if(!s.length||!d.length)continue;let f=Math.hypot(o.x-r.x,o.y-r.y)*.25/c.carSpeedKmh*60+c.carPenalty,p=1/0,m=-1,h=-1,g=-1;for(let e of s){let t=a.get(e.st.id);if(t)for(let r of d){let i=t.get(r.st.id);if(!i)continue;let a=n.walk.weight*(e.walkMin+r.walkMin)+i.time+u;a<p&&(p=a,m=e.st.id,h=r.st.id,g=i.boardLine)}}if(p===1/0||g<0)continue;let _=1/(1+Math.exp(c.theta*(p-f))),v=e.trips*_*Ve(i,e.o)*Ve(i,e.d);v<.5||(l.totalRiders+=v,N(l.lineRiders,g,v),N(l.stationFlow,m,v),N(l.stationFlow,h,v))}return l}function Ve(e,t){let n=e[t];if(!n||!n.length)return 0;let r=n[0].walkMin;return r<=10?1:r>=30?.15:1-(r-10)/20*.85}function N(e,t,n){e.set(t,(e.get(t)||0)+n)}function He(e,t,r,i,a,o){let s=r.zones.reduce((e,t)=>e+t.pop,0)/5e6||0;for(let a of t.list){let t;if(a.kind===`airport`)t=w(n.economy.airportPax,i);else if(a.kind===`railhub`)t=w(n.economy.railhubPax,i);else if(a.kind===`wharf`)t=w(n.economy.airportPax,i)*.02;else continue;let o=t*Math.max(.2,s),c=n.facility[a.kind].catchM/250,l=null,u=c;for(let t of e.stations.values()){let e=Math.hypot(t.x-a.x,t.y-a.y);e<u&&(u=e,l=t)}let d=l?1:.25;if(r.hubPax.set(a.id,o*d),l){N(r.stationFlow,l.id,o*d);for(let e of l.lines){N(r.lineRiders,e,o*d/Math.max(1,l.lines.length));break}}}}function Ue(e,t){for(let r of e.lines.values()){if(r.stationIds.length<2){t.lineHeadway.set(r.id,n.modes[r.mode].headwayMin[1]);continue}if(r.headway>0){t.lineHeadway.set(r.id,r.headway);continue}let i=0;for(let n of e.segments.values()){if(n.line!==r.id)continue;let e=t.segLoad.get(n.id)||0,a=(t.lineRiders.get(r.id)||0)*.4;i=Math.max(i,e+a*.2)}i<=0&&(i=(t.lineRiders.get(r.id)||0)*.35);let a=n.modes[r.mode],o=i*.09/a.capPerTrain,s=o>.1?Math.max(a.headwayMin[0],Math.min(a.headwayMin[1],60/o)):a.headwayMin[1];t.lineHeadway.set(r.id,Math.round(s*10)/10)}}function We(e,t,r,i){let a=n.modes[t.mode],o=r?.lineHeadway.get(t.id)??a.headwayMin[1],s=0;for(let n of e.segments.values())n.line===t.id&&(s+=n.lengthM/1e3);if(s===0||t.stationIds.length<2)return{trainKm:0,cost:0};let c=1080/o*2*s;return{trainKm:c,cost:c*a.serviceKmCost+t.stationIds.length*a.stationDaily}}function Ge(){return{zones:[],od:[],covZ:new Float32Array,covCell:new Float32Array,lineRiders:new Map,linePeak:new Map,stationFlow:new Map,segLoad:new Map,lineHeadway:new Map,totalRiders:0,totalTrips:0,hubPax:new Map,solvedAt:{y:0,m:0}}}var Ke=`东风路.人民广场.滨江.中山公园.火车站.文体中心.梧桐里.望江.南屏.文昌阁.会展中心.科技园.大学城.东湖.西关.北苑.双井.白鹭洲.钢铁厂.汽车城.渔人码头.银杏道.环岛.长风湾.青石桥.桃源.曲水亭.榴花渡.银盆岭.观澜.朝阳村.红星桥.海棠湾.云谷.麒麟山.梅林.香樟园.月牙湖.金三角.火炬路.清水塘.黄泥井.鲤鱼洲.大河沿.古塔`.split(`.`),qe=0;function Je(){qe=0}function Ye(){let e=Ke[qe%Ke.length],t=Math.floor(qe/Ke.length);return qe++,t>0?`${e}${t+1}`:e}var Xe=[`#e53935`,`#1e88e5`,`#43a047`,`#fb8c00`,`#8e24aa`,`#00acc1`,`#d81b60`,`#7cb342`,`#fdd835`,`#5e35b1`,`#00897b`,`#f4511e`],Ze=0;function Qe(){Ze=0}function $e(){return Xe[Ze++%Xe.length]}var et=class e{stations=new Map;segments=new Map;lines=new Map;nextId=1;nextLineNum={};uid(){return this.nextId++}serialize(){let e=[...this.stations.values()],t=new Map;return e.forEach((e,n)=>t.set(e.id,n)),{nextId:this.nextId,lineNums:this.nextLineNum,stations:e.map(e=>({x:e.x,y:e.y,name:e.name})),lines:[...this.lines.values()].map(e=>({mode:e.mode,name:e.name,color:e.color,headway:e.headway,openYear:e.openYear,stops:e.stationIds.map(e=>t.get(e)??-1),paths:e.stationIds.slice(0,-1).flatMap((n,r)=>{let i=e.stationIds[r+1],a=[...this.segments.values()].find(t=>t.line===e.id&&(t.a===n&&t.b===i||t.a===i&&t.b===n));if(!a)return[];let o=t.get(n)??-1,s=t.get(i)??-1;return[{type:a.type,pts:a.pts,a:o,b:s}]})}))}}static load(t){let n=new e;if(n.nextId=t.nextId,n.nextLineNum=t.lineNums||{},t.stations.length>0&&`id`in t.stations[0]){for(let e of t.stations)n.stations.set(e.id,e);for(let e of t.segments||[])n.segments.set(e.id,e);for(let e of t.lines)n.lines.set(e.id,e);return n}let r=[];for(let e of t.stations){let t=n.uid();r.push(t),n.stations.set(t,{id:t,x:e.x,y:e.y,name:e.name,lines:[]})}for(let e of t.lines){let t={id:n.uid(),mode:e.mode,name:e.name,color:e.color,headway:e.headway??0,openYear:e.openYear??1990,stationIds:e.stops.map(e=>r[e]).filter(Boolean)};n.lines.set(t.id,t);for(let i of e.paths||[]){let e=n.stations.get(r[i.a]),a=n.stations.get(r[i.b]);if(!e||!a)continue;let o={id:n.uid(),line:t.id,a:e.id,b:a.id,pts:i.pts||[],type:i.type||`surface`,lengthM:0,waterM:0};n.segments.set(o.id,o)}for(let e of t.stationIds){let r=n.stations.get(e);r&&!r.lines.includes(t.id)&&r.lines.push(t.id)}}return n}newLine(e,t){let r=this.nextLineNum[e]=(this.nextLineNum[e]||0)+1,i={id:this.uid(),mode:e,name:t||`${n.modes[e].name}${r}`,color:$e(),headway:0,stationIds:[],openYear:1990};return this.lines.set(i.id,i),i}addStation(e,t,n){let r={id:this.uid(),x:e,y:t,name:n||Ye(),lines:[]};return this.stations.set(r.id,r),r}stationNear(e,t,n){let r=null,i=n;for(let n of this.stations.values()){let a=ye(e,t,n.x,n.y);a<=i&&(i=a,r=n)}return r}makeSegment(e,t,n,r,i,a){let o={id:this.uid(),line:e.id,a:t.id,b:n.id,pts:r,type:i,lengthM:0,waterM:0};return tt(o,this,a),o}refreshGeom(e){for(let t of this.segments.values())tt(t,this,e)}stationDeg(e){let t=[],n=new Set;for(let r of this.segments.values())(r.a===e.id||r.b===e.id)&&(t.push(r),n.add(r.line));return{segs:t,lines:n}}removeStation(e,t){let n=this.stations.get(e);if(!n)return[];let r=new Set,{segs:i}=this.stationDeg(n),a=new Map;for(let e of i){r.add(e.line);let t=a.get(e.line)||[];t.push(e),a.set(e.line,t)}for(let[n,r]of a){let i=this.lines.get(n);if(r.length===2){let[n,a]=r,o=n.a===e?n.b:n.a,s=a.a===e?a.b:a.a;if(o!==s){let r=[...n.a===e?n.pts.slice().reverse():n.pts,...a.a===e?a.pts:a.pts.slice().reverse()];this.segments.delete(n.id),this.segments.delete(a.id);let c=this.makeSegment(i,this.stations.get(o),this.stations.get(s),r,n.type,t);this.segments.set(c.id,c),i.stationIds=i.stationIds.filter(t=>t!==e);continue}}for(let e of r)this.segments.delete(e.id)}this.stations.delete(e);for(let t of n.lines){let n=this.lines.get(t);n&&(n.stationIds=n.stationIds.filter(t=>t!==e),r.add(t))}return this.normalizeLines(t),[...r]}removeSegment(e,t){let n=this.segments.get(e);return n?(this.segments.delete(e),this.normalizeLines(t),[n.line]):[]}removeLine(e,t){let n=this.lines.get(e);if(!n)return[];for(let t of[...this.segments.values()])t.line===e&&this.segments.delete(t.id);for(let t of n.stationIds){let n=this.stations.get(t);n&&(n.lines=n.lines.filter(t=>t!==e),n.lines.length===0&&this.stations.delete(t))}return this.lines.delete(e),[e]}normalizeLines(e){for(let e of[...this.lines.values()]){let t=[...this.segments.values()].filter(t=>t.line===e.id);if(t.length===0)continue;let n=new Map;for(let e of t)(n.get(e.a)||n.set(e.a,[]).get(e.a)).push(e.b),(n.get(e.b)||n.set(e.b,[]).get(e.b)).push(e.a);let r=new Set,i=[];for(let e of n.keys()){if(r.has(e))continue;let t=[],a=[e];for(r.add(e);a.length;){let e=a.pop();t.push(e);for(let t of n.get(e)||[])r.has(t)||(r.add(t),a.push(t))}i.push(t)}i.sort((e,t)=>t.length-e.length);let a=e=>{let t=new Set(e),r=new Map;for(let i of e)r.set(i,(n.get(i)||[]).filter(e=>t.has(e)).length);let i=e.find(e=>(r.get(e)||0)===1)??e[0],a=[],o=new Set,s=i;for(;s!==void 0&&!o.has(s);)o.add(s),a.push(s),s=(n.get(s)||[]).filter(e=>t.has(e)&&!o.has(e))[0];return a},o=i[0],s=new Set(e.stationIds);e.stationIds=a(o);for(let n=1;n<i.length;n++){let r=this.newLine(e.mode,`${e.name}(拆)`);r.color=e.color,r.stationIds=a(i[n]);let o=new Set(r.stationIds);for(let e of t)o.has(e.a)&&o.has(e.b)&&(e.line=r.id);for(let t of r.stationIds){let n=this.stations.get(t);n&&(n.lines.includes(r.id)||n.lines.push(r.id),n.lines=n.lines.filter(t=>t===r.id||t!==e.id))}}for(let t of e.stationIds){let n=this.stations.get(t);n&&!n.lines.includes(e.id)&&n.lines.push(e.id)}for(let t of s){if(e.stationIds.includes(t))continue;let n=this.stations.get(t);n&&(n.lines=n.lines.filter(t=>t!==e.id),n.lines.length===0&&this.stations.delete(t))}e.stationIds.length===0&&this.lines.delete(e.id)}}};function tt(e,t,n){let r=t.stations.get(e.a),i=t.stations.get(e.b);if(!r||!i)return;let a=[r.x,r.y,...e.pts,i.x,i.y];e.lengthM=be(a)*n.cellM;let o=0,s=.25,c=nt(a,s);for(let e=2;e<c.length;e+=2){let t=(c[e-2]+c[e])/2,r=(c[e-1]+c[e+1])/2,i=Math.round(t),a=Math.round(r);n.isWater(i,a)&&(o+=s)}e.waterM=o*n.cellM}function nt(e,t){let n=[e[0],e[1]],r=0;for(let i=2;i<e.length;i+=2){let a=e[i-2],o=e[i-1],s=e[i],c=e[i+1],l=Math.hypot(s-a,c-o);for(;r+l>=t&&l>1e-9;){let e=(t-r)/l;a+=(s-a)*e,o+=(c-o)*e,n.push(a,o),l=Math.hypot(s-a,c-o),r=0}r+=l}return n.push(e[e.length-2],e[e.length-1]),n}var rt=class{net;grid;facilities;econ;year;kind;mode=null;facilityKind=null;lineId=null;addedStations=new Set;addedSegments=new Set;addedFacilities=new Set;removedStations=new Set;removedSegments=new Set;removedFacilities=new Set;affectedLines=new Set;undoStack=[];snap0;constructor(e,t,n,r,i,a){this.net=t,this.grid=n,this.facilities=r,this.econ=i,this.year=a,this.kind=e,this.snap0=this.snapshot()}touched=new Set;writeTile(e,t,n){this.touched.add(this.grid.idx(e,t)),this.grid.setTile(e,t,n)}snapshot(){let e=[...this.touched].map(e=>[e,this.grid.tiles[e]]);return JSON.stringify({net:this.net.serialize(),fac:this.facilities.serialize(),tiles:e})}restore(e){let t=JSON.parse(e),n=et.load(t.net);if(this.net.stations=n.stations,this.net.segments=n.segments,this.net.lines=n.lines,this.net.nextId=n.serialize().nextId,this.facilities.list=t.fac.list,this.facilities.nextId=t.fac.nextId,t.tiles)for(let[e,n]of t.tiles)this.grid.setTile(e%this.grid.W,e/this.grid.W|0,n)}startLine(e,t){if(this.mode=e,t!=null&&this.net.lines.has(t))this.lineId=t;else{let t=this.net.newLine(e);this.lineId=t.id}return this.lineId}addPoint(e,t){if(this.lineId==null||!this.mode)return`未选择线路`;let r=this.net.lines.get(this.lineId),i=n.modes[this.mode],a=Math.max(.8,i.minSpacingM/2/this.grid.cellM),o=this.net.stationNear(e,t,a),s=!o;o||=this.net.addStation(Math.round(e),Math.round(t));let c=r.stationIds[r.stationIds.length-1];if(c===o.id)return`end`;if(r.stationIds.includes(o.id))return s&&this.net.stations.delete(o.id),`暂不支持成环：请选择新位置或其它线路的车站`;if(this.pushUndo(),r.stationIds.length===0)return r.stationIds.push(o.id),o.lines.includes(r.id)||o.lines.push(r.id),s&&this.addedStations.add(o.id),this.affectedLines.add(r.id),`ok`;for(let e of this.net.segments.values())if(e.line===r.id&&(e.a===c&&e.b===o.id||e.a===o.id&&e.b===c))return s&&this.net.stations.delete(o.id),this.popUndoDiscard(),`两站间已有区段`;let l=this.net.stations.get(c),u=this.net.makeSegment(r,l,o,[],i.defaultType,this.grid);return this.net.segments.set(u.id,u),r.stationIds.push(o.id),o.lines.includes(r.id)||o.lines.push(r.id),s&&this.addedStations.add(o.id),this.addedSegments.add(u.id),this.affectedLines.add(r.id),`ok`}pickDemolish(e,t,n){let r=this.facilities.list.find(r=>Math.hypot(r.x-e,r.y-t)<n);if(r)return{type:`facility`,id:r.id};let i=this.net.stationNear(e,t,n);if(i)return{type:`station`,id:i.id};let a=null;for(let n of this.net.segments.values()){let r=this.net.stations.get(n.a),i=this.net.stations.get(n.b);if(!r||!i)continue;let o=[r.x,r.y,...n.pts,i.x,i.y];for(let r=2;r<o.length;r+=2){let i=o[r-2],s=o[r-1],c=o[r],l=o[r+1],u=(c-i)**2+(l-s)**2,d=u>0?((e-i)*(c-i)+(t-s)*(l-s))/u:0;d=Math.max(0,Math.min(1,d));let f=Math.hypot(e-(i+d*(c-i)),t-(s+d*(l-s)));(!a||f<a.d)&&(a={id:n.id,d:f})}}return a&&a.d<n?{type:`segment`,id:a.id}:null}demolish(e){if(this.pushUndo(),e.type===`facility`){let t=this.facilities.get(e.id);t&&this.writeTile(t.x,t.y,o.LOAM),this.facilities.remove(e.id),this.removedFacilities.add(e.id)}else if(e.type===`station`){let t=this.net.removeStation(e.id,this.grid);this.removedStations.add(e.id),t.forEach(e=>this.affectedLines.add(e))}else{let t=this.net.removeSegment(e.id,this.grid);this.removedSegments.add(e.id),t.forEach(e=>this.affectedLines.add(e))}}placeFacility(e,t,r){let i=Math.round(t),a=Math.round(r);if(!this.grid.inMap(i,a))return`超出地图范围`;if(this.grid.isWater(i,a))return`不能建在水面上`;if(e===`port`&&!this.gridNearWater(i,a))return`港口必须临水建设`;if(e===`wharf`&&!this.gridNearWater(i,a))return`码头必须临水建设`;if(e!==`wharf`){for(let t of this.facilities.list)if(t.kind===e&&Math.hypot(t.x-i,t.y-a)*this.grid.cellM<8e3)return`已有${n.facility[e].name}，距离过近`}return this.pushUndo(),this.facilities.add(e,i,a,this.year()),this.addedFacilities.add(this.facilities.list[this.facilities.list.length-1].id),this.writeTile(i,a,this.facilities.tileOf(e)),null}gridNearWater(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++){let i=e+r,a=t+n;if(this.grid.isWater(i,a))return!0}return!1}costPreview(){let e=this.year(),t=[],r=0;if(this.kind===`build`&&this.mode){let n=0,i=0,a=0;for(let t of this.addedSegments){let r=this.net.segments.get(t);if(!r)continue;let a=Se(r,this.net,this.mode,e);n+=a.items.filter(e=>e.kind===`track`).reduce((e,t)=>e+t.wan,0),i+=a.items.filter(e=>e.kind===`water`).reduce((e,t)=>e+t.wan,0)}if(this.lineId!=null){let t=this.net.lines.get(this.lineId);if(t)for(let n of t.stationIds)this.addedStations.has(n)&&(a+=Ce(this.mode,it(this.net,n),e))}n>0&&t.push({label:`轨道`,wan:n}),i>0&&t.push({label:`跨水`,wan:i}),a>0&&t.push({label:`车站`,wan:a}),r=n+i+a}else if(this.kind===`demolish`)r=we(this.net,[...this.removedSegments],[...this.removedStations],`metro`,e),r>0&&t.push({label:`拆除费`,wan:r});else if(this.kind===`facility`&&this.facilityKind){let i=Math.max(1,this.addedFacilities.size);r=this.facilities.cost(this.facilityKind,e)*i,t.push({label:`${n.facility[this.facilityKind].name} ×${i}`,wan:r})}return{items:t,total:r}}commit(){let{total:e}=this.costPreview();if(this.kind===`build`&&e>0){if(!this.econ.spend(e,`construction`))return{ok:!1,msg:`资金不足，无法确认建设`}}else if(this.kind===`demolish`&&e>0){if(!this.econ.spend(e,`demolish`))return{ok:!1,msg:`资金不足，无法支付拆除费`}}else if(this.kind===`facility`&&e>0&&this.facilityKind&&!this.econ.spend(e,`construction`))return{ok:!1,msg:`资金不足，无法建设设施`};return{ok:!0,msg:``}}cancel(){this.restore(this.snap0)}pushUndo(){this.undoStack.push(this.snapshot()),this.undoStack.length>40&&this.undoStack.shift()}undo(){let e=this.undoStack.pop();e&&this.restore(e),this.recomputeTracked()}popUndoDiscard(){this.undoStack.pop()}recomputeTracked(){for(let e of this.addedStations)this.net.stations.has(e)||this.addedStations.delete(e);for(let e of this.addedSegments)this.net.segments.has(e)||this.addedSegments.delete(e)}get canUndo(){return this.undoStack.length>0}};function it(e,t){for(let n of e.segments.values())if(n.a===t||n.b===t)return n.type;return`surface`}function at(e,t){return w(n.growth.popCurve,e)*t}function ot(e){let{grid:t}=e,n=t.totalPop(),r=at(e.year,e.popScale)-n,i=t;return r>1?st(i,Math.max(4,Math.min(Math.ceil(i.cells*.02),Math.ceil(r/900)+2)),e):r<-n*.02&&ct(i,Math.max(2,Math.ceil(-r/2e3))),lt(i,e),{pop:i.totalPop(),jobs:i.totalJobs()}}function st(e,t,n){let r=[];for(let t=0;t<e.cells;t++){let i=e.tiles[t],a=0;if(i===o.BLACKSOIL||i===o.LOAM||i===o.GRASS)a=u[i]*.5+20;else if(i===o.VILLAGE||i===o.HOUSE||i===o.MIDRISE||i===o.SHOP||i===o.MALL)a=60;else continue;n.stationCells&&n.stationCells[t]&&(a*=2.2);let s=t%e.W,c=t/e.W|0,d=0;for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)n===0&&t===0||!e.inMap(s+n,c+t)||l(e.tiles[e.idx(s+n,c+t)])&&d++;a*=.4+d*.2,a>0&&r.push([t,a])}if(!r.length)return;r.sort((e,t)=>t[1]-e[1]);let i=Math.min(t,r.length);for(let t=0;t<i;t++){let n=r[t][0],i=e.tiles[n],a=n%e.W,s=n/e.W|0,c=p;if(i===o.GRASS)c=h;else if(i===o.SHOP||i===o.MALL)c=m;else if(i===o.BLACKSOIL||i===o.LOAM){let t=0;for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++)r===0&&n===0||!e.inMap(a+r,s+n)||l(e.tiles[e.idx(a+r,s+n)])&&t++;c=t>=6?m:p}let u=-1;if(l(i))u=g(i,c);else{let e=c.indexOf(i);if(e>=0){for(let t=e+1;t<c.length;t++)if(l(c[t])){u=c[t];break}}}u>=0&&e.setTile(a,s,u)}}function ct(e,t){let n=[];for(let t=0;t<e.cells;t++){let r=e.tiles[t];(r===o.MIDRISE||r===o.TOWER||r===o.OFFICE||r===o.MALL)&&n.push(t)}let r=Math.min(t,n.length);for(let t=0;t<r;t++){let r=n[t*7919%n.length],i=e.tiles[r],a=_(i,p.includes(i)?p:m);a>=0&&e.setTile(r%e.W,r/e.W|0,a)}}function lt(e,t){let r=e.totalJobs(),i=at(t.year,t.popScale)*n.growth.jobsRatio*(1+t.portBoost);if(r>=i)return;let a=Math.min(6,Math.ceil((i-r)/1500)),s=0;for(let n=0;n<e.cells&&s<a;n++){let r=e.tiles[n];if(r===o.HOUSE||r===o.MIDRISE){let i=n%e.W,a=n/e.W|0;t.stationCells&&t.stationCells[n]&&(e.setTile(i,a,r===o.HOUSE?o.SHOP:o.MALL),s++)}}}function ut(e,t){let r=new Uint8Array(e.cells),i=n.growth.stationPullM/e.cellM;for(let n of t){let t=Math.max(0,Math.floor(n.x-i)),a=Math.min(e.W-1,Math.ceil(n.x+i)),o=Math.max(0,Math.floor(n.y-i)),s=Math.min(e.H-1,Math.ceil(n.y+i));for(let c=o;c<=s;c++)for(let o=t;o<=a;o++)Math.hypot(o-n.x,c-n.y)<=i&&(r[e.idx(o,c)]=1)}return r}var dt=class{map=new Map;on(e,t){let n=this.map.get(e);n||this.map.set(e,n=new Set),n.add(t)}off(e,t){this.map.get(e)?.delete(t)}emit(e,t){let n=this.map.get(e);if(n)for(let e of[...n])e(t)}},ft=class{meta;grid;net;facilities=new Ae;clock;econ;sim=Ge();speed=0;failed=!1;session=null;goals=new ke;news=[];monthGen=null;monthPhase=``;solveIter=null;jumpTarget=0;pullDirty=!0;pullCache=null;em=new dt;lastAutosaveMs=0;constructor(e,t,n,r,i,a){this.meta=e,this.grid=t,this.net=n,this.clock=r,this.econ=i,a&&(this.facilities=a)}get year(){return this.clock.y}get pop(){return this.grid.totalPop()}get absMonth(){return(this.clock.y-1990)*12+this.clock.m-1}update(e){if(this.failed)return;if(this.jumpTarget>0){this.stepJump(e);return}if(this.monthGen){this.stepGen(this.monthGen,n.perf.jumpSliceMs);return}if(this.solveIter){this.stepSolve();return}if(this.speed<=0)return;let t=this.clock.advance(e,this.speed);t===`day`?this.endDay():t===`month`&&this.startMonth()}stepGen(e,t){let n=performance.now();try{for(;performance.now()-n<t;){let t=e.next();if(t.done){this.monthGen=null,this.em.emit(`month`,{y:this.clock.y,m:this.clock.m});break}this.monthPhase=t.value}}catch(e){console.error(`monthGen error`,e),this.monthGen=null}this.em.emit(`tick`)}stepSolve(){if(!this.solveIter)return;let e=performance.now();try{for(;performance.now()-e<n.perf.solveSliceMs;){let e=this.solveIter.next();if(e.done){this.sim=e.value,this.solveIter=null,this.em.emit(`sim`,this.sim);break}}}catch(e){console.error(`solve error`,e),this.solveIter=null}}endDay(){let e=this.sim,t=0;for(let n of this.net.lines.values())t+=We(this.net,n,e,this.grid).cost;let{hubFee:n,upkeep:r,trade:i}=this.facilityDaily();this.econ.day(e.totalRiders,t,n+i,r,this.pop),this.em.emit(`day`)}facilityDaily(){let e=0,t=0,r=0;for(let[,t]of this.sim.hubPax)e+=t*n.economy.paxFee;let i=w(n.economy.portTrade,this.clock.y);for(let e of this.facilities.list)t+=n.facility[e.kind].upkeepDaily,e.kind===`port`?r+=i/30:e.kind===`wharf`&&(r+=i/3/30);return{hubFee:e,upkeep:t,trade:r}}startMonth(){let e=this;function*t(){yield`城市发展`,ot({grid:e.grid,year:e.clock.y,popScale:e.meta.popScale,stationCells:e.stationPull(),portBoost:e.facilities.byKind(`port`).length*.04}),yield`客流计算`;let t=Me(e.grid,e.net,e.facilities,e.clock.y,e.econ.fare),n=t.next();for(;!n.done;)yield n.value,n=t.next();e.sim=n.value,e.em.emit(`sim`,e.sim),yield`目标检查`,e.checkGoals(),yield`月度账目`;let{failed:r,record:i}=e.econ.monthClose(e.clock.y,e.clock.m,e.pop,e.sim.totalRiders);if(e.em.emit(`econ`,i),i.m===1&&e.addNews(`${e.clock.y} 年开年：人口 ${(e.pop/1e4).toFixed(0)} 万，日客流 ${(e.sim.totalRiders/1e4).toFixed(1)} 万`,`city`),e.econ.mode===`challenge`&&i.net<0){e.econ.history.filter(e=>e.net<0).length;let t=e.econ.history.slice(-3);t.every(e=>e.net<0)&&t.length===3&&e.addNews(`连续三个月亏损（本月 ${Math.round(i.net)} 万），请留意资金`,`warn`)}r&&e.econ.mode===`challenge`?(e.failed=!0,e.em.emit(`failed`,i)):(yield`自动存档`,e.em.emit(`autosave`))}this.monthGen=t()}stationPull(){return(this.pullDirty||!this.pullCache)&&(this.pullCache=ut(this.grid,[...this.net.stations.values()]),this.pullDirty=!1),this.pullCache}addNews(e,t){this.news.unshift({y:this.clock.y,m:this.clock.m,text:e,kind:t}),this.news.length>60&&this.news.pop(),this.em.emit(`news`)}checkGoals(){let e=this.goals.checkAll(this);for(let t of e)this.econ.grant(t.reward),this.addNews(`目标达成「${t.name}」，获得奖励 ${t.reward} 万`,`goal`),this.em.emit(`toast`,`目标达成：${t.name}（奖励 ${t.reward} 万）`),this.goals.allDone()&&this.addNews(`所有目标全部达成！这座城市的轨道网络因你而伟大。`,`city`);this.em.emit(`goals`)}markNetDirty(){this.pullDirty=!0,this.em.emit(`net`),!this.solveIter&&!this.monthGen&&(this.solveIter=Me(this.grid,this.net,this.facilities,this.clock.y,this.econ.fare))}setSpeed(e){this.speed=e,this.em.emit(`speed`,e)}jumpMonths(e){this.monthGen||(this.solveIter=null,this.jumpStart=this.absMonth,this.jumpTarget=this.absMonth+Math.max(1,e),this.em.emit(`jump`,{total:e,done:0}))}get jumping(){return this.jumpTarget<=0?null:{total:this.jumpTarget-this.jumpStart,done:this.absMonth-this.jumpStart}}jumpStart=0;stepJump(e){let t=performance.now();for(;this.jumpTarget>0&&this.absMonth<this.jumpTarget&&performance.now()-t<n.perf.jumpSliceMs;){if(this.clock.dayFrac=0,this.clock.d=1,this.applyMonthEcon(30),this.clock.m++,this.clock.m>12&&(this.clock.m=1,this.clock.y++),this.startMonth(),this.monthGen){let e=0;for(;this.monthGen&&e++<2e4;)if(this.monthGen.next().done){this.monthGen=null,this.em.emit(`month`,{y:this.clock.y,m:this.clock.m});break}}if(this.failed){this.jumpTarget=0;return}}this.em.emit(`jump`,{total:this.jumpTarget-this.jumpStart,done:this.absMonth-this.jumpStart}),this.absMonth>=this.jumpTarget&&(this.jumpTarget=0,this.em.emit(`jumpDone`))}applyMonthEcon(e){let t=this.sim,n=0;for(let e of this.net.lines.values())n+=We(this.net,e,t,this.grid).cost;let{hubFee:r,upkeep:i,trade:a}=this.facilityDaily();this.econ.day(t.totalRiders*e,n*e,(r+a)*e,i*e,this.pop)}beginBuild(e,t){this.cancelSession();let n=new rt(`build`,this.net,this.grid,this.facilities,this.econ,()=>this.clock.y);return n.mode=e,n.startLine(e,t),this.session=n,this.em.emit(`session`,n),n}beginDemolish(){this.cancelSession();let e=new rt(`demolish`,this.net,this.grid,this.facilities,this.econ,()=>this.clock.y);return this.session=e,this.em.emit(`session`,e),e}beginFacility(e){this.cancelSession();let t=new rt(`facility`,this.net,this.grid,this.facilities,this.econ,()=>this.clock.y);return t.facilityKind=e,this.session=t,this.em.emit(`session`,t),t}commitSession(){if(!this.session)return{ok:!1,msg:`无进行中的建设`};let e=this.session,t=e.commit();if(t.ok){let t=e.addedSegments.size,r=e.addedStations.size,i=e.addedFacilities.size,a=t>0||r>0||e.removedStations.size>0||e.removedSegments.size>0||i>0||e.removedFacilities.size>0;if(e.kind===`build`&&r>0&&e.lineId!=null){let t=this.net.lines.get(e.lineId);t&&this.addNews(`${t.name}开通，设 ${t.stationIds.length} 座车站`,`build`)}if(e.kind===`facility`&&i>0&&e.facilityKind){let t=n.facility[e.facilityKind];this.addNews(`${t.icon} ${t.name}建成投运`,`build`)}this.session=null,a&&this.markNetDirty(),a&&this.checkGoals(),this.em.emit(`session`,null)}return t}cancelSession(){this.session&&(this.session.cancel(),this.session=null,this.em.emit(`session`,null))}undoSession(){this.session?.undo(),this.em.emit(`net`)}setFare(e){this.econ.fare=e,this.em.emit(`econ`),!this.solveIter&&!this.monthGen&&(this.solveIter=Me(this.grid,this.net,this.facilities,this.clock.y,this.econ.fare))}get targetPopNum(){return at(this.clock.y,this.meta.popScale)}},pt=class e{y;m;d;dayFrac=0;weekday=1;constructor(e,t=1,n=1){this.y=e,this.m=t,this.d=n}get yearFrac(){return(this.m-1+(this.d-1+this.dayFrac)/n.time.daysPerMonth)/n.time.monthsPerYear}get isWeekend(){return this.weekday>=6}advance(e,t){if(t<=0)return`none`;this.dayFrac+=e*t/n.time.secPerDay1x;let r=`none`,i=0;for(;this.dayFrac>=1&&i++<400;)--this.dayFrac,this.d++,this.weekday=this.weekday%7+1,r=`day`,this.d>n.time.daysPerMonth&&(this.d=1,this.m++,this.m>n.time.monthsPerYear&&(this.m=1,this.y++),r=`month`);return r}serialize(){return{y:this.y,m:this.m,d:this.d,dayFrac:this.dayFrac,weekday:this.weekday}}static load(t){let n=new e(t.y,t.m,t.d);return n.dayFrac=t.dayFrac||0,n.weekday=t.weekday||1,n}},mt=()=>({fare:0,hubFee:0,subsidy:0,reward:0,ops:0,facilityUpkeep:0,construction:0,demolish:0,interest:0}),ht=class e{mode;funds;fare;cur=mt();history=[];negMonths=0;constructor(e,t){this.mode=e,this.funds=e===`free`?0:n.economy.startFunds,this.fare=n.economy.fareDefault}get canBuild(){return this.mode===`free`||this.funds>0}spend(e,t){return this.mode===`free`?!0:this.funds-e<n.economy.debtLimit?!1:(this.funds-=e,this.cur[t]+=e,!0)}grant(e){this.mode!==`free`&&(this.funds+=e,this.cur.reward+=e)}monthlySubsidy(e){return this.mode===`free`?0:w(n.economy.grantBase,this._year||1990)*Math.max(.25,Math.min(1.6,e/4e6))}_year=1990;day(e,t,n,r,i){if(this.mode===`free`)return;let a=e*this.fare/1e4;this.cur.fare+=a,this.cur.ops+=t,this.cur.hubFee+=n,this.cur.facilityUpkeep+=r,this.funds+=a-t-n-r}monthClose(e,t,r,i){let a=mt();Object.assign(a,this.cur),this._year=e;let o=this.monthlySubsidy(r);a.subsidy=o;let s=this.funds+o;if(this.mode===`challenge`&&s<0){let e=-s*.004;a.interest=e,s-=e}this.funds=s;let c={y:e,m:t,riders:i,pop:r,net:a.fare+a.hubFee+a.subsidy-a.ops-a.facilityUpkeep-a.construction-a.demolish-a.interest,fundsAfter:s,fare:a.fare,hubFee:a.hubFee,subsidy:a.subsidy,reward:a.reward,ops:a.ops,facilityUpkeep:a.facilityUpkeep,construction:a.construction,demolish:a.demolish,interest:a.interest};return this.history.push(c),this.history.length>1200&&this.history.shift(),this.cur=mt(),this.mode===`challenge`?(this.negMonths=this.funds<0?this.negMonths+1:0,{failed:this.funds<n.economy.debtLimit||this.negMonths>24,record:c}):{failed:!1,record:c}}serialize(){return{mode:this.mode,funds:this.funds,fare:this.fare,negMonths:this.negMonths,cur:this.cur,history:this.history.slice(-240)}}static load(t){let n=new e(t.mode,1990);return n.funds=t.funds,n.fare=t.fare,n.negMonths=t.negMonths||0,n.cur=t.cur||mt(),n.history=t.history||[],n}},gt=t({downloadSave:()=>wt,saveGame:()=>L});function _t(e){let t=e.grid,n=vt(t.lu,t.W*t.H),r=yt(t.pop,t.W*t.H),i=yt(t.jobs,t.W*t.H),a=[o.WATER,o.FOREST,o.HILL,o.PARK,o.LOAM,o.HOUSE,o.MALL,o.FACTORY],s=new Uint8Array(t.W*t.H);for(let e=0;e<s.length;e++){let t=a[n[e]]??o.LOAM;t===o.HOUSE?r[e]>2e3||i[e]>3e3?t=o.TOWER:r[e]>900||i[e]>1400?t=o.MIDRISE:r[e]<120&&(t=o.VILLAGE):(t===o.MALL||t===o.FACTORY)&&i[e]>3e3&&(t=o.OFFICE),s[e]=t}return{W:t.W,H:t.H,cellM:t.cellM,tiles:s}}function vt(e,t){let n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);let i=new Uint8Array(t),a=0;for(let e=0;e<r.length-1&&a<t;e+=2)i.fill(r[e+1],a,Math.min(t,a+r[e])),a+=r[e];return i}function yt(e,t){let n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);let i=new Uint16Array(r.buffer,0,Math.floor(r.byteLength/2)),a=new Float32Array(t);for(let e=0;e<t&&e<i.length;e++)a[e]=i[e];return a}function bt(e){let t={meta:e.meta,clock:e.clock.serialize(),map:{W:e.grid.W,H:e.grid.H,cellM:e.grid.cellM,tiles:re(e.grid.tiles)},net:e.net.serialize(),facilities:e.facilities.serialize(),econ:e.econ.serialize(),goals:e.goals.serialize(),news:e.news.slice(0,40)},r=JSON.stringify(t);return{format:n.SAVE_FORMAT,version:2,savedAt:Date.now(),name:e.meta.name,checksum:xe(r),body:r}}function xt(e){if(e.format!==n.SAVE_FORMAT)throw Error(`不是本游戏的存档文件`);if(e.version>2)throw Error(`存档版本较新，请升级游戏`);let t=JSON.parse(e.body),r,i,a,o;if(t.map)({W:r,H:i,cellM:a}=t.map),o=ie(t.map.tiles,r*i);else if(t.grid)({W:r,H:i,cellM:a}=t.grid),{tiles:o}=_t(t);else throw Error(`存档缺少地图数据`);let s=new j(r,i,a);s.tiles.set(o),s.rederive();let c=et.load(t.net);c.refreshGeom(s);let l=Ae.load(t.facilities),u=pt.load(t.clock),d=ht.load(t.econ),f=new ft(t.meta,s,c,u,d,l);return t.goals&&f.goals.loadIds(t.goals),t.news&&(f.news=t.news),f}var St=`rail-city`,P=`rc1.`;function F(){return new Promise((e,t)=>{let n=indexedDB.open(St,1);n.onupgradeneeded=()=>{n.result.createObjectStore(`slots`)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}var I={async put(e,t){try{let n=await F();await new Promise((r,i)=>{let a=n.transaction(`slots`,`readwrite`);a.objectStore(`slots`).put(t,e),a.oncomplete=()=>r(),a.onerror=()=>i(a.error)}),n.close()}catch{try{localStorage.setItem(P+e,JSON.stringify(t))}catch{throw Error(`存储空间不足，请删除部分存档`)}}},async get(e){try{let t=await F(),n=await new Promise((n,r)=>{let i=t.transaction(`slots`,`readonly`).objectStore(`slots`).get(e);i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)});if(t.close(),n)return n}catch{}let t=localStorage.getItem(P+e);return t?JSON.parse(t):null},async list(){let e=[];try{let t=await F(),n=await new Promise((e,n)=>{let r=t.transaction(`slots`,`readonly`).objectStore(`slots`).openCursor(),i=[];r.onsuccess=()=>{let t=r.result;t?(i.push({key:t.key,env:t.value}),t.continue()):e(i)},r.onerror=()=>n(r.error)});t.close(),e.push(...n)}catch{for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);n.startsWith(P)&&e.push({key:n.slice(4),env:JSON.parse(localStorage.getItem(n))})}}return e.sort((e,t)=>t.env.savedAt-e.env.savedAt),e},async delete(e){try{let t=await F();await new Promise((n,r)=>{let i=t.transaction(`slots`,`readwrite`);i.objectStore(`slots`).delete(e),i.oncomplete=()=>n(),i.onerror=()=>r(i.error)}),t.close()}catch{localStorage.removeItem(P+e)}}};function Ct(e){let t=document.createElement(`canvas`);t.width=160,t.height=120;let n=t.getContext(`2d`),r=Math.max(160/e.width,120/e.height),i=e.width*r,a=e.height*r;n.drawImage(e,(160-i)/2,(120-a)/2,i,a);try{return t.toDataURL(`image/jpeg`,.6)}catch{return``}}async function L(e,t,n){let r=bt(e);r.thumb=Ct(t),await I.put(n,r)}function wt(e){let t=new Blob([JSON.stringify(e)],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t);let r=new Date(e.savedAt);n.download=`${e.name}-${r.getFullYear()}${String(r.getMonth()+1).padStart(2,`0`)}${String(r.getDate()).padStart(2,`0`)}.cbsave.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),5e3)}function Tt(e){let t=JSON.parse(e);if(t.format!==n.SAVE_FORMAT||!t.body)throw Error(`不是本游戏的存档文件`);if(xe(t.body)!==t.checksum)throw Error(`存档校验失败，文件可能已损坏`);return t}var Et=`modulepreload`,Dt=function(e,t){return new URL(e,t).href},Ot={},kt=function(e){return e.pathname.endsWith(`.css`)},At=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},jt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Dt(t,n);let r=s(t),i=kt(r);return At(Ot,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Et,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},R=null;function Mt(){return R||(R=O(`div`),R.id=`sheet`,R.innerHTML=`<div id="sheet-grab"></div><div id="sheet-title"><span id="sheet-title-text"></span><button id="sheet-close">${C(`x`,14)}</button></div><div id="sheet-body"></div>`,document.getElementById(`app`).append(R),R.querySelector(`#sheet-close`).onclick=z),R}function z(){R?.classList.remove(`show`)}function B(e,t){let n=Mt();n.querySelector(`#sheet-title-text`).textContent=e;let r=n.querySelector(`#sheet-body`);k(r),r.append(t),n.classList.add(`show`)}function Nt(e,t,r){let i=e.game,a=O(`div`);if(r!=null&&t<0){let t=i.facilities.get(r);if(!t)return;let o=n.facility[t.kind],s=i.sim.hubPax.get(t.id)||0;a.innerHTML=`
      <div class="stat-row"><span>${C(t.kind===`airport`?`plane`:t.kind===`port`?`anchor`:`landmark`,15)} ${t.name}</span><b>${s>0?E(s)+` 旅客/日`:``}</b></div>
      <div class="muted" style="padding:6px 0">${o.desc}</div>
      <div class="stat-row"><span>维护成本</span><span>${o.upkeepDaily} 万/日</span></div>
      <div class="stat-row"><span>接驳状态</span><span>${Pt(i,t.x,t.y,o.catchM)}</span></div>`;let c=O(`button`,`menu-btn`,`${C(`hammer`,15)} 拆除此设施`);c.onclick=()=>{e.setTool(`demolish`),i.beginDemolish().demolish({type:`facility`,id:t.id}),z(),e.refreshDraftBar()},a.append(c),B(`${t.name}`,a);return}let o=i.net.stations.get(t);if(!o)return;a.innerHTML=`
    <div class="stat-row"><span>日均乘降</span><b>${E(i.sim.stationFlow.get(o.id)||0)} 人次</b></div>
    <div class="stat-row"><span>服务线路</span><span id="st-lines"></span></div>`;let s=a.querySelector(`#st-lines`);for(let t of o.lines){let n=i.net.lines.get(t);if(!n)continue;let r=O(`div`,`stat-row`);r.innerHTML=`<span><span class="dot" style="background:${n.color}"></span>${n.name}</span>`;let a=O(`div`,`save-ops`),o=O(`button`,``,`延伸`);o.onclick=()=>{z(),e.buildMode=n.mode,e.setTool(`build`),i.beginBuild(n.mode,n.id),e.refreshDraftBar(),e.toast(`延伸 ${n.name}：点击地图加站`)};let c=O(`button`,``,`整线拆除`);c.onclick=()=>{z(),e.setTool(`demolish`);let t=i.beginDemolish();for(let e of[...i.net.segments.values()])e.line===n.id&&t.demolish({type:`segment`,id:e.id});e.refreshDraftBar()},a.append(o,c),r.append(a),s.append(r)}o.lines.length||(s.innerHTML=`<span class="muted">尚未接入线路</span>`),B(o.name,a)}function Pt(e,t,n,r){let i=r/e.grid.cellM;for(let r of e.net.stations.values())if(Math.hypot(r.x-t,r.y-n)<=i)return`已接驳轨道 ✓`;return`未接驳（旅客少量流失）`}function Ft(e){let t=e.game,n=O(`div`);for(let e of A){let r=t.goals.done.has(e.id),i=t.goals.current()?.id===e.id,a=O(`div`,`stat-row goal-row`+(r?` done`:i?` current`:``)),o=r?`check`:i?`target`:`chevron`,s=!r&&i&&e.progress?e.progress(t):void 0,c=s!==void 0&&s>.02?` <span class="muted">${Math.round(s*100)}%</span>`:``;a.innerHTML=`
      <span class="goal-ic">${C(o,14)}</span>
      <span class="grow">${e.name}${c}<div class="muted">${e.desc}</div></span>
      <span class="muted">+${(e.reward/1e4).toFixed(1)} 亿</span>`,n.append(a)}n.append(O(`h2`,`sec`,`城市快讯`));let r=O(`div`);t.news.length||(r.innerHTML=`<div class="muted">暂无动态，建设线路或推进时间试试。</div>`);for(let e of t.news.slice(0,25)){let t=O(`div`,`stat-row news-row`);t.innerHTML=`<span class="goal-ic">${C(e.kind===`goal`?`target`:e.kind===`warn`?`alert`:e.kind===`build`?`building`:`news`,13)}</span><span class="grow">${e.text}<div class="muted">${e.y}年${e.m}月</div></span>`,r.append(t)}n.append(r),B(`目标与快讯`,n)}function It(e){let t=e.game,n=O(`div`),r=O(`div`,`seg-tabs`),i={},a=[[`lines`,`线路`,()=>Lt(t)],[`stations`,`车站`,()=>Rt(t)],[`finance`,`财务`,()=>zt(e)],[`city`,`城市`,()=>Bt(t)]];for(let[e,t,n]of a){let a=O(`button`,e===`lines`?`on`:``,t);a.onclick=()=>{for(let[t,n]of Object.entries(i))n.style.display=t===e?``:`none`;for(let e of r.querySelectorAll(`button`))e.classList.remove(`on`);a.classList.add(`on`)},r.append(a);let o=n();o.style.display=e===`lines`?``:`none`,i[e]=o}n.append(r,...Object.values(i)),B(`统计`,n)}function Lt(e){let t=O(`div`),n=[...e.net.lines.values()].map(t=>{let n=De(e.net,t.id,e.grid),r=e.sim.lineRiders.get(t.id)||0,i=e.sim.lineHeadway.get(t.id)||0;return{line:t,lenKm:n?.lenKm||0,riders:r,hw:i}}).sort((e,t)=>t.riders-e.riders);if(!n.length)return t.innerHTML=`<div class="muted" style="padding:14px 0">尚无线路。用底部工具栏开始建设 →</div>`,t;for(let e of n){let n=O(`div`,`stat-row`);n.innerHTML=`
      <span class="dot" style="background:${e.line.color}"></span>
      <span class="grow">${e.line.name}<div class="muted">${e.lenKm.toFixed(1)} km · ${e.line.stationIds.length} 站 · 间隔 ${e.hw?e.hw.toFixed(0)+` 分`:`—`}</div></span>
      <b>${E(e.riders)}</b>`,t.append(n)}let r=O(`div`,`stat-row`);return r.innerHTML=`<span>全网合计</span><b>${E(e.sim.totalRiders)} 人次/日</b>`,t.append(r),t}function Rt(e){let t=O(`div`),n=[...e.sim.stationFlow.entries()].map(([t,n])=>({st:e.net.stations.get(t),flow:n})).filter(e=>e.st).sort((e,t)=>t.flow-e.flow).slice(0,30);return n.length?(n.forEach((e,n)=>{let r=O(`div`,`stat-row`);r.innerHTML=`<span class="muted" style="width:20px">${n+1}</span><span class="grow">${e.st.name}</span><b>${E(e.flow)}</b>`,t.append(r)}),t):(t.innerHTML=`<div class="muted" style="padding:14px 0">暂无车站客流数据</div>`,t)}function zt(e){let t=e.game,n=O(`div`),r=O(`div`,`form-row`);r.innerHTML=`<label>票价</label>`;let i=O(`input`);i.type=`range`,i.min=`1`,i.max=`10`,i.step=`0.5`,i.value=String(t.econ.fare);let a=O(`span`,``,`${t.econ.fare} 元`);i.oninput=()=>{a.textContent=`${i.value} 元`},i.onchange=()=>{t.setFare(Number(i.value)),e.toast(`票价已调整，客流重新计算中…`)},r.append(i,a),n.append(r);let o=t.econ.history;n.append(O(`h2`,`sec`,`最近 12 个月（万元）`));let s=O(`div`),c=o.slice(-12).reverse();c.length||(s.innerHTML=`<div class="muted">暂无账目，推进时间后生成。</div>`);for(let e of c){let t=O(`div`,`stat-row`),n=e.net<0;t.innerHTML=`
      <span class="muted" style="width:74px">${e.y}/${e.m}</span>
      <span class="grow">收 ${T(e.fare+e.hubFee+e.subsidy+e.reward)} · 支 ${T(e.ops+e.facilityUpkeep+e.construction+e.demolish+e.interest)}</span>
      <b style="color:${n?`#ff8a80`:`#a5d6a7`}">${T(e.net,!0)}</b>`,s.append(t)}if(n.append(s),o.length){n.append(O(`h2`,`sec`,`当前资金`));let e=O(`div`,`stat-row`);e.innerHTML=`<span>资金（${t.econ.mode===`free`?`自由模式`:`挑战模式`}）</span><b>${t.econ.mode===`free`?`∞`:T(t.econ.funds)}</b>`,n.append(e)}let l=O(`div`,`screen-actions`),u=O(`button`,`menu-btn`,`${C(`save`,15)} 保存到存档位`);u.onclick=async()=>{await L(t,e.canvas,`m${Date.now()%1e5}`),e.toast(`已保存，可在存档管理查看`)};let d=O(`button`,`menu-btn`,`${C(`download`,15)} 导出存档文件`);return d.onclick=()=>{wt(bt(t))},l.append(u,d),n.append(l),n}function Bt(e){let t=O(`div`),r=e.sim.totalTrips>0?(e.sim.totalRiders/e.sim.totalTrips*100).toFixed(1):`0`;t.innerHTML=`
    <div class="stat-row"><span>常住人口</span><b>${E(e.pop)}</b></div>
    <div class="stat-row"><span>发展目标</span><b>${E(e.targetPopNum)}</b></div>
    <div class="stat-row"><span>岗位</span><b>${E(e.grid.totalJobs())}</b></div>
    <div class="stat-row"><span>日出行总量</span><b>${E(e.sim.totalTrips)} 人次</b></div>
    <div class="stat-row"><span>轨道出行占比</span><b>${r}%</b></div>
    <div class="stat-row"><span>线路</span><b>${e.net.lines.size} 条 · ${e.net.stations.size} 站</b></div>`;let i=O(`div`),a={airport:`plane`,railhub:`landmark`,port:`anchor`,wharf:`anchor`};for(let t of Object.keys(n.facility)){let r=e.facilities.byKind(t).length;if(r>0){let e=O(`div`,`stat-row`);e.innerHTML=`<span>${C(a[t]||`building`,14)} ${n.facility[t].name}</span><b>${r}</b>`,i.append(e)}}i.children.length&&t.append(O(`h2`,`sec`,`设施`),i);let o=e.econ.history.slice(-36);if(o.length>2){t.append(O(`h2`,`sec`,`客流量趋势（月）`));let e=O(`canvas`);e.width=400,e.height=90,e.style.width=`100%`;let n=e.getContext(`2d`),r=Math.max(...o.map(e=>e.riders),1);n.strokeStyle=`#4fc3f7`,n.lineWidth=2,n.beginPath(),o.forEach((e,t)=>{let i=t/(o.length-1)*396+2,a=86-e.riders/r*80;t===0?n.moveTo(i,a):n.lineTo(i,a)}),n.stroke(),t.append(e)}return t}function Vt(e){let t=e.game,r=O(`div`);r.innerHTML=`<div class="muted" style="padding-bottom:8px">枢纽设施：产生客流与经济收益，需要轨道接驳才能充分发挥作用。</div>`;let i={airport:`plane`,railhub:`landmark`,port:`anchor`,wharf:`anchor`};for(let a of Object.keys(n.facility)){let o=n.facility[a],s=t.facilities.cost(a,t.clock.y),c=O(`div`,`map-card`);c.innerHTML=`
      <div class="map-thumb" style="display:flex;align-items:center;justify-content:center;background:#232b38">${C(i[a]||`building`,30)}</div>
      <div class="map-info">
        <b>${o.name} · ${T(s)}</b>
        <div class="muted">${o.desc} · 维护 ${o.upkeepDaily} 万/日</div>
      </div>`,c.onclick=()=>e.pickFacility(a),r.append(c)}B(`建设设施`,r)}var Ht=class{s;constructor(e){this.s=e>>>0||1}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}};function V(e,t=256){let n=new Float32Array(t*t);for(let t=0;t<n.length;t++)n[t]=e.next();let r=(e,r)=>n[(r%t+t)%t*t+(e%t+t)%t],i=e=>e*e*(3-2*e),a=(e,t)=>{let n=Math.floor(e),a=Math.floor(t),o=i(e-n),s=i(t-a),c=r(n,a),l=r(n+1,a),u=r(n,a+1),d=r(n+1,a+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s};return(e,t,n=4,r=.5)=>{let i=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=a(e*o,t*o)*i,c+=i,i*=r,o*=2;return s/c}}function Ut(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function H(e,t,n,r){let i=new Float32Array(e.cells),a=r*r;for(let o=0;o<e.H;o++)for(let s=0;s<e.W;s++){let c=(s-t)*(s-t)+(o-n)*(o-n);c<a&&(i[o*e.W+s]=(1-Math.sqrt(c)/r)**1.4)}return i}function Wt(e){return e>.62?o.BLACKSOIL:e>.45?o.LOAM:e>.28?o.GRASS:o.SAND}function U(e,t){let n=V(t);for(let t=0;t<e.H;t++)for(let r=0;r<e.W;r++){let i=t*e.W+r,a=n(r*.03,t*.03,4);e.tiles[i]=Wt(a)}}function W(e,t,n,r){let i=V(t),a=r.reduce((e,t)=>e+t,0);for(let c=0;c<e.cells;c++){let l=e.tiles[c];if(s(l)||l===o.HILL||l===o.MOUNT||l===o.FOREST)continue;let u=0;for(let e=0;e<n.length;e++)u+=n[e][c]*(r[e]/a);if(u<=.02)continue;let d=i(c%e.W,c/e.W|0,3)*.25,f=u+d-.12;f>.66?e.tiles[c]=i(c*7,3.3,2)>.5?o.OFFICE:o.MALL:f>.52?e.tiles[c]=o.FACTORY:f>.42?e.tiles[c]=o.MIDRISE:f>.3?e.tiles[c]=o.HOUSE:f>.16?e.tiles[c]=i(c*3,9.1,2)>.4?o.SHOP:o.VILLAGE:t.next()<.18&&(e.tiles[c]=o.PARK)}}function Gt(e,t,n,r){let i=V(t),a=n?e.W:e.H,s=n?e.H:e.W,c=s/2;for(let t=0;t<a;t++){let a=c+(i(t*.02,7.3,3)-.5)*s*.5,l=r*(.7+i(t*.05,3.1,2)*.9);for(let r=0;r<s;r++)if(Math.abs(r-a)<l){let i=n?t:r,s=n?r:t;e.tiles[s*e.W+i]=Math.abs(r-a)<l*.55?o.RIVER:o.WATER}}}function Kt(e,t,n,r){let i=V(t);for(let t=0;t<e.H;t++)for(let a=0;a<e.W;a++){let s=n<2?t:a,c=n===0?e.W-1-a:n===1?a:n===2?e.H-1-t:t,l=(e.W<e.H?e.W:e.H)*.22,u=(i(s*.02,n*11+3,3)-.5)*l*r;c<l*.8+u&&(e.tiles[t*e.W+a]=c<l*.35?o.DEEP:o.WATER)}}function G(e,t,n,r,i){let a=V(t);for(let t=0;t<e.H;t++)for(let o=0;o<e.W;o++){let c=t*e.W+o;s(e.tiles[c])||a(o*i,t*i,4)>r&&(e.tiles[c]=n)}}var qt=[{key:`coast`,name:`沿海单核`,desc:`一湾海岸，单中心集聚，适合首条地铁`,startYear:1990,popScale:1,colors:`linear-gradient(135deg,#1a6b8f,#3ba7c9 55%,#d9c489)`,gen:(e,t)=>{U(e,t),Kt(e,t,0,1),G(e,t,o.FOREST,.72,.04),W(e,t,[H(e,e.W*.42,e.H*.48,e.W*.36)],[1])}},{key:`river`,name:`江河两岸`,desc:`大江穿城，两岸双心，跨江通道是命脉`,startYear:1990,popScale:1.15,colors:`linear-gradient(135deg,#28567f,#4f93b8 45%,#7fb069)`,gen:(e,t)=>{U(e,t),Gt(e,t,!0,Math.max(2,e.W*.012)),G(e,t,o.FOREST,.7,.04),W(e,t,[H(e,e.W*.4,e.H*.26,e.W*.32),H(e,e.W*.58,e.H*.74,e.W*.34)],[1,.9])}},{key:`mountain`,name:`山地组团`,desc:`群山之间的多个河谷组团，隧道造价高`,startYear:1995,popScale:.85,colors:`linear-gradient(135deg,#5d6b4f,#8a9a5b 50%,#e0d8b0)`,gen:(e,t)=>{U(e,t);let n=V(t);for(let t=0;t<e.cells;t++)n(t%e.W*.045,(t/e.W|0)*.045,4)>.66&&(e.tiles[t]=o.HILL);let r=[[.3,.3],[.68,.4],[.4,.72],[.75,.75]].map(([t,n])=>H(e,e.W*t,e.H*n,e.W*.24));for(let t=0;t<e.cells;t++){let n=0;for(let e of r)n+=e[t];n>.25&&(e.tiles[t]===o.HILL||e.tiles[t]===o.MOUNT)&&(e.tiles[t]=o.LOAM)}W(e,t,r,[1,.8,.9,.6])}},{key:`plain`,name:`平原多城`,desc:`沃野上的城镇群，适合市域快线与高铁`,startYear:2e3,popScale:1.3,colors:`linear-gradient(135deg,#8f9a3f,#b5c05a 55%,#e8e4c9)`,gen:(e,t)=>{U(e,t);for(let t=0;t<e.cells;t++)(e.tiles[t]===o.LOAM||e.tiles[t]===o.GRASS)&&(e.tiles[t]=o.BLACKSOIL);G(e,t,o.FOREST,.78,.03),W(e,t,[[.32,.35],[.66,.3],[.35,.72],[.7,.68]].map(([t,n])=>H(e,e.W*t,e.H*n,e.W*.22)),[1.2,1,.8,.7])}},{key:`islands`,name:`群岛城市`,desc:`海湾群岛，跨海昂贵，港口与机场大有可为`,startYear:1990,popScale:.8,colors:`linear-gradient(135deg,#0f4c6e,#2d8fa8 50%,#89c9a3)`,gen:(e,t)=>{let n=V(t);e.tiles.fill(o.DEEP);let r=[[.38,.4,.24],[.68,.32,.14],[.3,.7,.13],[.62,.68,.17]];for(let i=0;i<e.H;i++)for(let a=0;a<e.W;a++){let s=-.15;for(let[t,o,c]of r){let r=Math.hypot(a/e.W-t,i/e.H-o);s=Math.max(s,c-r+(n(a*.05,i*.05,3)-.5)*.12)}let c=i*e.W+a;s>0?e.tiles[c]=o.LOAM:s>-.05&&t.next()<.4&&(e.tiles[c]=o.WATER)}G(e,t,o.FOREST,.62,.05),W(e,t,r.map(([t,n,r])=>H(e,e.W*t,e.H*n,e.W*r*.8)),[1,.4,.35,.55])}}];function Jt(){let e=new j(64,64),t=new Ht(7);U(e,t);for(let t=0;t<64;t++){let n=46+Math.round(4*Math.sin(t/64*Math.PI*2));for(let r=n;r<64;r++)e.tiles[t*64+r]=r>n+6?o.DEEP:o.WATER}for(let t=0;t<64;t++){let n=30+Math.round(3*Math.sin(t/64*Math.PI*1.5));for(let r=n-1;r<=n+1;r++)s(e.tiles[r*64+t])||(e.tiles[r*64+t]=o.RIVER)}for(let t=8;t<18;t++)for(let n=8;n<20;n++)s(e.tiles[t*64+n])||(e.tiles[t*64+n]=o.FOREST);for(let t=44;t<56;t++)for(let n=6;n<16;n++)s(e.tiles[t*64+n])||(e.tiles[t*64+n]=o.FOREST);for(let t=24;t<30;t++)for(let n=24;n<31;n++)e.tiles[t*64+n]=o.PARK;return W(e,t,[H(e,28,20,18),H(e,34,44,13),H(e,14,36,10)],[1,.55,.4]),e.rederive(),e}function Yt(e,t,n,r){let i=new j(t,n),a=new Ht(Ut(r));return e.gen(i,a),i.rederive(),i}function Xt(){return Math.floor(Math.random()*1e9).toString(36)}function Zt(e,t,n,r){let i=new j(t,n),a=document.createElement(`canvas`);a.width=t,a.height=n;let s=a.getContext(`2d`,{willReadFrequently:!0});s.drawImage(e,0,0,t,n);let c=s.getImageData(0,0,t,n).data,l=new Float32Array(t*n);for(let e=0;e<t*n;e++){let t=c[e*4]/255,n=c[e*4+1]/255,r=c[e*4+2]/255,a=Math.max(t,n,r),s=a>0?(a-Math.min(t,n,r))/a:0,u=.3*t+.6*n+.1*r;r>.45&&r>t*1.18&&r>n*1.08?(i.tiles[e]=o.WATER,l[e]=0):n>.36&&n>t*1.15&&n>r*1.15?(i.tiles[e]=s>.35?o.FOREST:o.PARK,l[e]=.1):u<.42&&s<.22?(i.tiles[e]=o.MIDRISE,l[e]=1):u<.55&&s<.24?(i.tiles[e]=o.HOUSE,l[e]=.9):u<.68&&s<.28?(i.tiles[e]=o.VILLAGE,l[e]=.6):(i.tiles[e]=o.BLACKSOIL,l[e]=.05)}return Qt(i,r.popTotal,l),i.rederive(),i}function Qt(e,t,n){let r=rn(e);if(r<=0)return;let i=t/r;if(Math.abs(i-1)<.08)return;let a=i>1,o=[];for(let t=0;t<e.cells;t++)s(e.tiles[t])||n[t]>.15&&o.push(t);o.sort((e,t)=>a?n[t]-n[e]:n[e]-n[t]);let c=Math.min(o.length,Math.ceil(Math.abs(Math.log(i))*o.length*.55));for(let t of o){if(c<=0)break;let n=e.tiles[t],r=en(n)||tn(n)||nn(n);if(!r)continue;let i=a?g(n,r):$t(n,r);i<0||(e.tiles[t]=i,c--)}e.rederive()}function $t(e,t){let n=t.indexOf(e);return n<=0?-1:t[n-1]}function en(e){return p.includes(e)?p:null}function tn(e){return m.includes(e)?m:null}function nn(e){return h.includes(e)?h:null}function rn(e){let t=0;for(let n=0;n<e.cells;n++)t+=u[e.tiles[n]];return t}function an(e){if(e.format!==`cb-map`)throw Error(`不是有效的 cb-map 地图文件`);let t=e.W,r=e.H;if(!t||!r||t>512||r>512)throw Error(`地图尺寸需在 512 以内`);let i=new j(t,r,e.cellM||n.CELL_M);if(i.tiles.fill(o.LOAM),e.tiles){let n=ie(e.tiles,t*r);i.tiles.set(n)}else if(e.terrain){let n;if(typeof e.terrain==`string`){let t=atob(e.terrain);n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e)}else n=new Uint8Array(e.terrain);let a=[o.WATER,o.FOREST,o.HILL,o.PARK,o.LOAM,o.HOUSE,o.MALL,o.FACTORY],s=new Uint8Array(t*r),c=0;for(let e=0;e<n.length-1&&c<t*r;e+=2){let i=n[e],l=n[e+1];s.fill(a[l]??o.LOAM,c,Math.min(t*r,c+i)),c+=i}i.tiles.set(s)}else{for(let n of e.water||[])for(let e=Math.max(0,n.y-n.r);e<=Math.min(r-1,n.y+n.r);e++)for(let r=Math.max(0,n.x-n.r);r<=Math.min(t-1,n.x+n.r);r++)(r-n.x)**2+(e-n.y)**2<=n.r**2&&(i.tiles[i.idx(r,e)]=o.WATER);let n=new Float32Array(t*r);for(let i of e.centers||[])for(let e=0;e<r;e++)for(let r=0;r<t;r++){let a=Math.hypot(r-i.x,e-i.y)/Math.max(1,i.r);a<1&&(n[e*t+r]=Math.max(n[e*t+r],(1-a)*(i.w??1)))}for(let e=0;e<t*r;e++)n[e]>.55?i.tiles[e]=o.HOUSE:n[e]>.35&&(i.tiles[e]=o.VILLAGE)}return i.rederive(),e.popTotal&&Qt(i,e.popTotal,on(i)),{grid:i,popScale:e.popScale??1,name:e.name||`自定义地图`}}function on(e){let t=new Float32Array(e.cells);for(let n=0;n<e.cells;n++)t[n]=u[e.tiles[n]]>40?1:.05;return t}var K=null;function q(e,t=!1){K=e;let r=J();r.classList.add(`show`),k(r);let i=O(`div`,`screen-card`);if(i.innerHTML=`
    <p class="kicker">City · Rail · Builder</p>
    <h1 class="title">${n.GAME_NAME}</h1>
    <p class="subtitle">规划地铁、高铁与电车，建设机场、港口与码头，经营一座随轨道成长的城市。</p>`,t){let t=O(`button`,`menu-btn primary`,`${C(`play`,15)} 继续游戏`);t.onclick=()=>{r.classList.remove(`show`),e.enterGameView()};let n=O(`button`,`menu-btn`,`${C(`save`,15)} 保存并继续`);n.onclick=async()=>{let{saveGame:t}=await jt(async()=>{let{saveGame:e}=await Promise.resolve().then(()=>gt);return{saveGame:e}},void 0,import.meta.url);await t(e.game,e.canvas,`auto`),e.toast(`已保存`),r.classList.remove(`show`),e.enterGameView()};let a=O(`button`,`menu-btn`,`${C(`folder`,15)} 存档管理`);a.onclick=()=>fn(e);let o=O(`button`,`menu-btn`,`${C(`home`,15)} 退出到主菜单`);o.onclick=()=>{K=null,window.dispatchEvent(new CustomEvent(`rc-exit-to-menu`))},i.append(t,n,a,o)}else{let e=O(`button`,`menu-btn primary`,`${C(`plus`,15)} 新建游戏`);e.onclick=()=>cn();let t=O(`button`,`menu-btn`,`${C(`folder`,15)} 读取存档`);t.onclick=()=>fn(null);let n=O(`button`,`menu-btn`,`${C(`help`,15)} 玩法说明`);n.onclick=()=>sn(),i.append(e,t,n);let r=O(`p`,`credit`);r.style.marginTop=`30px`,r.innerHTML=`设计灵感来自 <a href="https://github.com/VinsonFung/city-and-metro" style="color:#6fb3e0">VinsonFung/city-and-metro</a>（城市与地铁），本项目为其玩法精神的开源 TypeScript 重构，仅供学习交流。`,i.append(r)}r.append(i)}function sn(){let e=J();k(e);let t=O(`div`,`screen-card`);t.innerHTML=`
    <h1 class="title" style="font-size:22px">玩法说明</h1>
    <div style="font-size:13.5px;line-height:1.8;color:#c3cbd8">
      <p><b>目标</b>：顶部胶囊显示当前目标，逐个完成可获奖励金；建设轨道交通网络，服务城市出行，平衡收支。</p>
      <p><b>建设</b>：底部工具栏选择地铁 / 高铁 / 电车，点击地图依次放站；再次点击线路末端车站结束本线。车站尽量贴近建成区（可打开「人口」热力图层）。</p>
      <p><b>设施</b>：在「设施」里可建机场、火车站、港口。机场/火车站产生大量客流但需轨道接驳；港口必须临水，能带动就业与财政。</p>
      <p><b>时间</b>：顶部按钮调速；+1月/+1年/+5年 直接快进。月结时自动发展城市、计算客流与收支。</p>
      <p><b>收入</b>：票款 × 客流量 + 枢纽服务费 + 财政补贴；支出有运营、维护与建设。自由模式不限资金。</p>
      <p><b>操作</b>：单指拖动平移，双指捏合缩放；电脑可用滚轮缩放。</p>
    </div>`;let n=O(`button`,`menu-btn primary`,`返回`);n.onclick=()=>q(K,!!K),t.append(n),e.append(t)}function cn(){let e=J();k(e);let t=O(`div`,`screen-card`),r=O(`button`,`back-btn`,`← 返回`);r.onclick=()=>q(null),t.append(r),t.append(O(`h1`,`title`,``));let i=t.querySelector(`h1`);i.className=``,i.style.cssText=`font-size:22px;font-weight:600;margin:0 0 12px`,i.textContent=`新建游戏`;let a=O(`div`,`form-row`);a.innerHTML=`<label>城市名</label>`;let o=O(`input`);o.type=`text`,o.value=`轨道城`,o.maxLength=n.cost.maxNameLen,a.append(o),t.append(a),t.append(O(`h2`,`sec`,`选择地图`));let s=O(`div`),c=`coast`,l=n.DEFAULT_SIZE,u=O(`div`,`form-row`),d=O(`select`);for(let e of n.SIZES){let t=O(`option`);t.value=e.key,t.textContent=e.name,d.append(t)}d.value=l,d.onchange=()=>{l=d.value},u.append(O(`label`),d),u.querySelector(`label`).textContent=`地图尺寸`,u.style.display=`none`;let f=()=>{k(s);let e=qt.map(e=>({key:e.key,name:e.name,desc:e.desc,colors:e.colors,onPick:()=>{c=e.key,u.style.display=``,e.key,f()}}));e.push({key:`tutorial`,name:`新手示例图`,desc:`固定设计的小型城市，适合第一次游玩`,colors:`linear-gradient(135deg,#3a5f7d,#6fa3c0)`,onPick:()=>{c=`tutorial`,u.style.display=`none`,f()}},{key:`import-img`,name:`导入图片`,desc:`用一张图片生成地图（截图/手绘/卫片）`,colors:`linear-gradient(135deg,#444,#777)`,onPick:()=>un()},{key:`import-json`,name:`导入地图文件`,desc:`打开 .cbmap.json 地图文件`,colors:`linear-gradient(135deg,#3d4d3d,#6a8a6a)`,onPick:()=>dn()});for(let t of e){let e=O(`div`,`map-card`+(t.key===c?` on`:``));e.innerHTML=`<div class="map-thumb" style="background:${t.colors}"></div><div class="map-info"><b>${t.name}</b><div class="muted">${t.desc}</div></div>`,e.onclick=t.onPick,s.append(e)}};f(),t.append(s,u),t.append(O(`h2`,`sec`,`经营模式`));let p=`challenge`,m=O(`div`,`seg-tabs`),h=O(`button`,`on`,`经营挑战（30亿起步）`),g=O(`button`,``,`自由建造（无限资金）`);h.onclick=()=>{p=`challenge`,h.classList.add(`on`),g.classList.remove(`on`)},g.onclick=()=>{p=`free`,g.classList.add(`on`),h.classList.remove(`on`)},m.append(h,g),t.append(m);let _=O(`button`,`menu-btn primary`,`开始建设 →`);_.style.marginTop=`20px`,_.onclick=async()=>{let e=qt.find(e=>e.key===c),t,r=1;if(c===`tutorial`)t=Jt(),r=.42;else if(e){let i=n.SIZES.find(e=>e.key===l)||n.SIZES[1],a=Xt();t=Yt(e,i.W,i.H,a),r=e.popScale*(t.cells/25600)**.4}else return;ln({name:o.value||`轨道城`,mode:p,grid:t,tplKey:c,popScale:r})},t.append(_),e.append(t)}function ln(e){Je(),Qe();let t={id:`g${Date.now().toString(36)}`,name:e.name,mode:e.mode,tplKey:e.tplKey,seed:``,popScale:e.popScale,createdAt:Date.now()},n=e.grid,r=new pt(qt.find(t=>t.key===e.tplKey)?.startYear??1990),i=new ht(e.mode,r.y),a=new ft(t,n,new et,r,i);window.dispatchEvent(new CustomEvent(`rc-start-game`,{detail:a}))}function un(){let e=J();k(e);let t=O(`div`,`screen-card`),n=O(`button`,`back-btn`,`← 返回`);n.onclick=()=>cn(),t.append(n,O(`h2`,`sec`,`导入图片地图`)),t.append(Object.assign(O(`p`,`muted`),{textContent:`蓝色识别为水域，绿色为绿地，深灰为建成区。选择后可调整人口规模。`}));let r=O(`input`);r.type=`file`,r.accept=`image/*`,r.style.margin=`10px 0`;let i=O(`canvas`);i.width=320,i.height=240,i.style.cssText=`width:100%;border-radius:12px;background:#151b25`;let a=O(`div`,`form-row`);a.innerHTML=`<label>总人口</label>`;let o=O(`input`);o.type=`range`,o.min=`500000`,o.max=`12000000`,o.step=`100000`,o.value=`3000000`;let s=O(`span`,``,`3.0 百万`);o.oninput=()=>{s.textContent=`${(Number(o.value)/1e6).toFixed(1)} 百万`,l&&d()},a.append(o,s),t.append(r,i,a);let c=O(`button`,`menu-btn primary`,`用这张图开始 →`);c.disabled=!0;let l=null,u=null;function d(){if(!l)return;let e=Math.max(48,Math.round(l.naturalHeight/l.naturalWidth*160));u=Zt(l,160,Math.min(e,160),{popTotal:Number(o.value)});let t=i.getContext(`2d`);t.clearRect(0,0,320,240);let n=Math.min(320/u.W,240/u.H);for(let e=0;e<u.H;e++)for(let r=0;r<u.W;r++)t.fillStyle=f[u.tiles[u.idx(r,e)]],t.fillRect(r*n,e*n,n+.5,n+.5)}r.onchange=()=>{let e=r.files?.[0];if(!e)return;let t=new Image;t.onload=()=>{l=t,c.disabled=!1,d()},t.src=URL.createObjectURL(e)},c.onclick=()=>{u&&ln({name:`导入城市`,mode:`challenge`,grid:u,tplKey:`import`,popScale:Number(o.value)/4e6})},t.append(c),e.append(t)}function dn(){let e=J();k(e);let t=O(`div`,`screen-card`),n=O(`button`,`back-btn`,`← 返回`);n.onclick=()=>cn(),t.append(n,O(`h2`,`sec`,`导入地图文件`)),t.append(Object.assign(O(`p`,`muted`),{textContent:`支持本游戏导出的 .cbmap.json 地图（设置 → 导出地图文件）。`}));let r=O(`input`);r.type=`file`,r.accept=`.json,application/json`,r.style.margin=`10px 0`;let i=O(`button`,`menu-btn primary`,`载入并开始 →`);i.disabled=!0;let a=null;r.onchange=()=>{let e=r.files?.[0];e&&e.text().then(e=>{try{a=JSON.parse(e),i.disabled=!1,i.textContent=`载入「${a.name||`未命名`}」→`}catch(e){alert(`无法解析地图文件：`+e.message)}})},i.onclick=()=>{if(a)try{let{grid:e,popScale:t,name:n}=an(a);ln({name:n,mode:`challenge`,grid:e,tplKey:`import`,popScale:t})}catch(e){alert(`地图导入失败：`+e.message)}},t.append(r,i),e.append(t)}function fn(e){K=e;let t=J();k(t);let n=O(`div`,`screen-card`),r=O(`button`,`back-btn`,`← 返回`);r.onclick=()=>q(e,!!e),n.append(r,O(`h2`,`sec`,`存档管理`));let i=O(`div`);n.append(i);let a=O(`div`,`screen-actions`),o=O(`button`,`menu-btn`,`${C(`upload`,15)} 导入存档文件`),s=O(`input`);s.type=`file`,s.accept=`.json,.cbsave`,s.style.display=`none`,o.onclick=()=>s.click(),s.onchange=async()=>{let t=s.files?.[0];if(t)try{let n=Tt(await t.text());await I.put(`m${Date.now()%1e6}`,n),fn(e)}catch(e){alert(`导入失败：`+e.message)}},a.append(o,s),n.append(a),t.append(n),I.list().then(async t=>{if(k(i),!t.length)i.innerHTML=`<div class="muted">暂无存档。新建游戏后每月会自动保存。</div>`;else for(let{key:n,env:r}of t){let t=O(`div`,`save-slot`),a=new Date(r.savedAt);t.innerHTML=`
        <div class="save-thumb" style="${r.thumb?`background-image:url(${r.thumb})`:``}"></div>
        <div class="save-info">
          <b>${r.name}${n.startsWith(`auto`)?`（自动）`:``}</b>
          <div class="muted">${a.toLocaleString(`zh-CN`)}</div>
        </div>`;let o=O(`div`,`save-ops`),s=O(`button`,``,`载入`);s.onclick=async()=>{try{let e=xt(r);window.dispatchEvent(new CustomEvent(`rc-start-game`,{detail:e}))}catch(e){alert(`读档失败：`+e.message)}};let c=O(`button`,``,`导出`);c.onclick=async()=>{let{downloadSave:e}=await jt(async()=>{let{downloadSave:e}=await Promise.resolve().then(()=>gt);return{downloadSave:e}},void 0,import.meta.url);e(r)};let l=O(`button`,``,`删除`);l.onclick=async()=>{confirm(`删除存档「${r.name}」？`)&&(await I.delete(n),fn(e))},o.append(s,c,l),t.append(o),i.append(t)}})}var pn=class{app;canvas;game;renderer;hooks;tool=`select`;buildMode=`metro`;facilityKind=null;hudEls={};lastHud=0;toastTimer=null;constructor(e,t,n,r,i){this.app=e,this.canvas=t,this.game=n,this.renderer=r,this.hooks=i,this.buildHud(),this.buildToolbar(),this.buildDraftBar(),this.buildToast(),this.buildJumpMask(),this.wireEvents(),this.wireInput()}buildHud(){let e=O(`div`,``,``);e.id=`hud-top`;let t=O(`div`,`hud-row`),r=O(`button`,``,C(`menu`,16));r.id=`btn-menu`,r.onclick=()=>q(this,!0);let i=O(`div`,`pill date-pill`,`1990年1月`);i.id=`pill-date`,t.append(r,i);let a=O(`div`,`hud-row`);a.id=`speed-box`;let o=O(`button`,`speed-btn on`,C(`pause`,13));o.dataset.speed=`0`,o.onclick=()=>this.setSpeed(0),a.append(o),n.time.speeds.forEach(e=>{let t=O(`button`,`speed-btn`,`${e}×`);t.dataset.speed=String(e),t.onclick=()=>this.setSpeed(e),a.append(t)});let s=O(`button`,`speed-btn jump`,`+1月`);s.onclick=()=>this.game.jumpMonths(1);let c=O(`button`,`speed-btn jump`,`+1年`);c.onclick=()=>this.game.jumpMonths(12);let l=O(`button`,`speed-btn jump`,`+5年`);l.onclick=()=>this.game.jumpMonths(60),a.append(s,c,l);let u=O(`div`,`hud-row`);u.id=`metric-row`;let d=O(`div`,`pill`,`${C(`coins`,13)} <b>-</b>`);d.id=`pill-funds`;let f=O(`div`,`pill`,`${C(`ticket`,13)} <b>-</b>`);f.id=`pill-riders`;let p=O(`div`,`pill`,`${C(`users`,13)} <b>-</b>`);p.id=`pill-pop`;let m=O(`button`,`speed-btn`,`${C(`map`,13)} 无`);m.id=`btn-layer`;let h=[`none`,`pop`,`cov`],g={none:`无`,pop:`人口`,cov:`覆盖`,flow:`客流`};m.onclick=()=>{let e=h.indexOf(this.renderer.overlay),t=h[(e+1)%h.length];this.renderer.overlay=t,hn(this.renderer),m.innerHTML=`${C(t===`pop`?`fire`:t===`cov`?`eye`:`map`,13)} ${g[t]}`};let _=O(`button`,`pill goal-chip`);_.id=`pill-goal`,_.onclick=()=>Ft(this),u.append(d,f,p,m,_),e.append(t,a,u),this.app.append(e),this.hudEls={date:i,funds:d,riders:f,pop:p,speedBox:a,goalChip:_}}refreshGoalChip(){let e=this.hudEls.goalChip;if(!e)return;let t=this.game.goals.current();if(!t){e.innerHTML=`${C(`check`,13)} 全部达成`;return}let n=t.progress?t.progress(this.game):void 0,r=n!==void 0&&n>.03?` · ${Math.round(n*100)}%`:``;e.innerHTML=`${C(`target`,13)} ${t.name}${r}`}buildToolbar(){let e=O(`div`);e.id=`toolbar`;let t=[[`pointer`,`查看`,`select`,()=>this.setTool(`select`)],[`train`,`地铁`,`metro`,()=>this.setBuildTool(`metro`)],[`track`,`高铁`,`hsr`,()=>this.setBuildTool(`hsr`)],[`tram`,`电车`,`tram`,()=>this.setBuildTool(`tram`)],[`building`,`设施`,`facility`,()=>this.openFacilitySelect()],[`hammer`,`拆除`,`demolish`,()=>this.setTool(`demolish`)],[`chart`,`统计`,`stats`,()=>It(this)]];for(let[n,r,i,a]of t){let t=O(`button`,`tool-btn`,`<span class="ico">${C(n,21)}</span><span>${r}</span>`);t.dataset.tool=i,t.onclick=a,e.append(t)}this.app.append(e),this.hudEls.toolbar=e}buildDraftBar(){let e=O(`div`);e.id=`draft-bar`,e.innerHTML=`
      <div id="draft-title"></div>
      <div id="draft-cost"></div>
      <div id="draft-items"></div>
      <div id="draft-warn"></div>
      <div class="draft-btns">
        <button class="btn-ghost" id="draft-undo">${C(`undo`,14)} 撤销</button>
        <button class="btn-ghost" id="draft-cancel">${C(`x`,14)} 取消</button>
        <button class="btn-primary" id="draft-ok">${C(`check`,14)} 完成</button>
      </div>`,this.app.append(e),e.querySelector(`#draft-undo`).onclick=()=>{this.game.undoSession(),this.refreshDraftBar()},e.querySelector(`#draft-cancel`).onclick=()=>{this.game.cancelSession(),this.setTool(this.tool===`demolish`?`select`:this.tool),this.refreshDraftBar()},e.querySelector(`#draft-ok`).onclick=()=>this.commitSession(),this.hudEls.draftBar=e}buildToast(){let e=O(`div`);e.id=`toast`,this.app.append(e),this.hudEls.toast=e}buildJumpMask(){let e=O(`div`);e.id=`jump-mask`,e.innerHTML=`<div id="jump-label">推进时间…</div><div id="jump-bar"><div id="jump-fill"></div></div>`,this.app.append(e),this.hudEls.jumpMask=e}setTool(e){this.tool=e,this.game.cancelSession(),this.refreshToolbar(),this.refreshDraftBar(),e!==`select`&&z()}setBuildTool(e){this.buildMode=e,this.setTool(`build`),this.game.beginBuild(e),this.refreshDraftBar(),this.toast(`${n.modes[e].name}：点击地图依次放置车站，重触末站结束本线`)}openFacilitySelect(){this.setTool(`facility`),Vt(this)}pickFacility(e){this.facilityKind=e,this.game.beginFacility(e),z(),this.refreshDraftBar(),this.toast(`点击地图放置${n.facility[e].name}`)}setSpeed(e){this.game.setSpeed(e),this.refreshSpeed()}refreshSpeed(){let e=this.hudEls.speedBox;for(let t of e.querySelectorAll(`button.speed-btn:not(.jump)`)){let e=Number(t.dataset.speed)===this.game.speed;t.classList.toggle(`on`,e)}}refreshToolbar(){for(let e of this.hudEls.toolbar.querySelectorAll(`.tool-btn`)){let t=e.dataset.tool,n=t===this.tool||this.tool===`build`&&t===this.buildMode||this.tool===`facility`&&t===`facility`;e.classList.toggle(`on`,n)}}wireEvents(){let e=this.game;e.em.on(`toast`,e=>this.toast(String(e))),e.em.on(`failed`,()=>this.showFailed()),e.em.on(`goals`,()=>this.refreshGoalChip()),e.em.on(`sim`,()=>{hn(this.renderer),this.refreshGoalChip()}),e.em.on(`jump`,e=>{let{total:t,done:n}=e,r=this.hudEls.jumpMask;r.classList.add(`show`),r.querySelector(`#jump-fill`).style.width=`${t>0?Math.min(100,n/t*100):0}%`,r.querySelector(`#jump-label`).textContent=`推进时间 ${(n/12).toFixed(1)} / ${(t/12).toFixed(1)} 年`}),e.em.on(`jumpDone`,()=>{this.hudEls.jumpMask.classList.remove(`show`),this.refreshHud(!0)}),e.em.on(`sim`,()=>{hn(this.renderer)}),e.em.on(`session`,()=>this.refreshDraftBar()),e.em.on(`autosave`,()=>{let t=Date.now();t-mn>8e3&&(mn=t,L(e,this.canvas,`auto`).catch(()=>{}))}),e.em.on(`econ`,()=>this.refreshHud(!0))}wireInput(){let e={cam:this.renderer.cam,grid:this.game.grid,isPanning:()=>!1,onTap:(e,t)=>this.onTap(e,t)};new _e(this.canvas,e)}onTap(e,t){let n=this.game,r=n.session;if(this.tool===`build`&&r?.kind===`build`&&r.mode){let i=Ee(n.net,n.grid,r.mode,e,t,r.lineId??void 0).find(e=>e.level===`error`);if(i){this.toast(i.msg);return}let a=r.addPoint(e,t);if(a===`end`){this.commitSession(!0);return}if(a!==`ok`){this.toast(a);return}n.markNetDirty(),this.refreshDraftBar();return}if(this.tool===`facility`&&r?.kind===`facility`&&r.facilityKind){let i=r.placeFacility(r.facilityKind,e,t);if(i){this.toast(i);return}n.markNetDirty(),this.refreshDraftBar();return}if(this.tool===`demolish`&&r?.kind===`demolish`){let i=r.pickDemolish(e,t,Math.max(1.2,this.renderer.cam.zoom/3));if(!i){this.toast(`未选中可拆除的对象`);return}r.demolish(i),n.markNetDirty(),this.refreshDraftBar();return}let i=n.net.stationNear(e,t,Math.max(.8,this.renderer.cam.zoom/4));if(i){Nt(this,i.id);return}let a=n.facilities.list.find(n=>Math.hypot(n.x-e,n.y-t)<1.2);a?Nt(this,-1,a.id):z()}commitSession(e=!1){let t=this.game.commitSession();t.ok?(e||this.toast(`已确认`),this.refreshToolbar(),this.refreshDraftBar()):this.toast(t.msg)}refreshDraftBar(){let e=this.hudEls.draftBar,t=this.game.session;if(!t){e.classList.remove(`show`);return}e.classList.add(`show`);let{items:r,total:i}=t.costPreview(),a=e.querySelector(`#draft-title`),o=e.querySelector(`#draft-cost`),s=e.querySelector(`#draft-items`),c=e.querySelector(`#draft-warn`);if(t.kind===`build`){let e=t.lineId==null?null:this.game.net.lines.get(t.lineId);a.textContent=`建设${e?e.name:n.modes[t.mode].name}`;let r=t.addedStations.size,i=t.addedSegments.size;s.textContent=i>0||r>0?`${r} 座车站 · ${i} 段区间`:`点击地图开始画线`}else t.kind===`demolish`?(a.textContent=`拆除`,s.textContent=`已选 ${t.removedStations.size+t.removedSegments.size+t.removedFacilities.size} 项`):(a.textContent=`建设${n.facility[t.facilityKind]?.name||`设施`}`,s.textContent=`已放置 ${t.addedFacilities.size} 座`);o.textContent=i>0?T(i):t.kind===`demolish`?`—`:`点击地图继续`,c.textContent=``,i>0&&this.game.econ.mode===`challenge`&&i>this.game.econ.funds&&(c.textContent=`资金不足，无法确认`),e.querySelector(`#draft-undo`).disabled=!t.canUndo}tick(e){e-this.lastHud>250&&(this.lastHud=e,this.refreshHud(!1))}refreshHud(e){let t=this.game;this.hudEls.date.textContent=`${t.clock.y}年${t.clock.m}月${t.clock.d}日`;let n=this.hudEls.funds;if(t.econ.mode===`free`)n.innerHTML=`${C(`coins`,13)} <b>自由模式</b>`;else{let e=t.econ.funds<0?` neg`:``;n.innerHTML=`${C(`coins`,13)} <b${e?` class="${e}"`:``}>${T(t.econ.funds)}</b>`}this.hudEls.riders.innerHTML=`${C(`ticket`,13)} <b>${E(t.sim.totalRiders)}</b>/日`,this.hudEls.pop.innerHTML=`${C(`users`,13)} <b>${E(t.pop)}</b>`}toast(e){let t=this.hudEls.toast;t.textContent=e,t.style.display=`block`,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{t.style.display=`none`},2400)}showFailed(){this.game.setSpeed(0);let e=J();e.classList.add(`show`),k(e);let t=O(`div`,`screen-card`);t.innerHTML=`
      <h1 class="title">经营挑战失败</h1>
      <p class="subtitle">资金低于负债上限或连续亏损超过 24 个月。</p>
      <p class="muted">提示：控制运营成本（缩减低客流线路）、提高票价或增加覆盖带来新客流。</p>`;let n=O(`button`,`menu-btn primary`,`返回主菜单`);n.onclick=()=>{e.classList.remove(`show`),this.hooks.toMenu()},t.append(n),e.append(t)}enterGameView(){let e=J();e.classList.remove(`show`),k(e),z()}},mn=0;function J(){let e=document.getElementById(`screen`);return e||(e=O(`div`),e.id=`screen`,document.getElementById(`app`).append(e)),e}function hn(e){e.invalidateOverlay()}var Y=document.getElementById(`map`),gn=document.getElementById(`app`),X=null,Z=null,Q=null,$=0,_n=0;function vn(e){bn(),X=e,window.__rcGame=e,Z=new ge(Y,e.grid,e.net,e.facilities,()=>e.sim,()=>e.session),Z.speedRef=()=>e.speed,Q=new pn(gn,Y,e,Z,{toMenu:yn}),Q.enterGameView(),Q.refreshToolbar(),Q.refreshHud(!0),e.markNetDirty(),_n=performance.now(),$=requestAnimationFrame(xn)}function yn(){bn(),X&&L(X,Y,`auto`).catch(()=>{}),X=null,Z=null,Q=null,gn.innerHTML=``,q(null)}function bn(){$&&cancelAnimationFrame($),$=0}function xn(e){$=requestAnimationFrame(xn);let t=Math.min(.1,(e-_n)/1e3);if(_n=e,X&&Z&&Q)try{X.update(t),Z.render(t),Q.tick(e),window.__rcAlive=e}catch(e){console.error(`loop error`,e);let t=window;(t.__rcErrors||=[]).push(String(e instanceof Error?e.stack||e.message:e))}}window.addEventListener(`rc-start-game`,e=>{let t=e.detail;vn(t)}),window.addEventListener(`rc-exit-to-menu`,()=>{yn()}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&X&&Q&&(X.setSpeed(0),L(X,Y,`auto`).catch(()=>{}))}),window.addEventListener(`beforeunload`,()=>{X&&L(X,Y,`auto`).catch(()=>{})}),q(null);