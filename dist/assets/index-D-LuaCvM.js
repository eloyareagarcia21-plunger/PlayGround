(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const pl="187",Rm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wf=0,eh=1,Tf=2,Im=3,Lm=0,Nr=1,Th=2,Zs=3,Hn=0,Mi=1,Fi=2,Vn=0,Qs=1,vi=2,ih=3,nh=4,Ef=5,Dm=6,hs=100,Af=101,Cf=102,Rf=103,Pf=104,If=200,Lf=201,Df=202,Nf=203,Eh=204,Ah=205,Uf=206,Ff=207,Of=208,Bf=209,zf=210,kf=211,Gf=212,Vf=213,Hf=214,bo=0,wo=1,To=2,er=3,Eo=4,Ao=5,Co=6,Ro=7,la=0,Wf=1,Xf=2,dn=0,ml=1,gl=2,xl=3,ca=4,_l=5,vl=6,yl=7,sh="attached",qf="detached",Ml=300,Cn=301,ms=302,js=303,Ur=304,gs=1e3,Ri=1001,qr=1002,ke=1003,Ch=1004,Nm=1004,$s=1005,Um=1005,De=1006,Fr=1007,Fm=1007,Ki=1008,Om=1008,Ai=1009,Rh=1010,Ph=1011,ir=1012,Sl=1013,Gi=1014,yi=1015,mi=1016,bl=1017,wl=1018,xs=1020,Ih=35902,Lh=35899,Dh=1021,Nh=1022,Pi=1023,Rn=1026,wn=1027,Tl=1028,ha=1029,Wn=1030,El=1031,Bm=1032,Al=1033,Or=33776,Br=33777,zr=33778,kr=33779,Po=35840,Io=35841,Lo=35842,Do=35843,No=36196,Uo=37492,Fo=37496,Oo=37488,Bo=37489,Yr=37490,zo=37491,ko=37808,Go=37809,Vo=37810,Ho=37811,Wo=37812,Xo=37813,qo=37814,Yo=37815,Zo=37816,$o=37817,Jo=37818,Ko=37819,Qo=37820,jo=37821,tl=36492,el=36494,il=36495,nl=36283,sl=36284,Zr=36285,rl=36286,Yf=2200,Zf=2201,$f=2202,$r=2300,al=2301,xo=2302,rh=2303,us=2400,ds=2401,Jr=2402,Cl=2500,Uh=2501,zm=0,km=1,Gm=2,Jf=3200,Vm=3201,Hm=3202,Wm=3203,Pn=0,Kf=1,Sn="",We="srgb",Kr="srgb-linear",Qr="linear",Se="srgb",Xm="",qm="rg",Ym="ga",Zm=0,_o=7680,$m=7681,Jm=7682,Km=7683,Qm=34055,jm=34056,t0=5386,e0=512,i0=513,n0=514,s0=515,r0=516,a0=517,o0=518,Qf=519,jf=512,tp=513,ep=514,Fh=515,ip=516,np=517,Oh=518,Bh=519,Rl=35044,l0=35048,c0=35040,h0=35045,u0=35049,d0=35041,f0=35046,p0=35050,m0=35042,g0="100",ah="300 es",Oi=2e3,_s=2001,x0={COMPUTE:"compute",RENDER:"render"},_0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},v0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},y0={TEXTURE_COMPARE:"depthTextureCompare"},M0={NONE:0,SHARED:1,FULL:2};function S0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}const b0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Js(r,t){return new b0[r](t)}function sp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function jr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rp(){const r=jr("canvas");return r.style.display="block",r}const Uu={};let Xn=null;function w0(r){Xn=r}function T0(){return Xn}function ta(...r){const t="THREE."+r.shift();Xn?Xn("log",t,...r):console.log(t,...r)}function ap(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function bt(...r){r=ap(r);const t="THREE."+r.shift();if(Xn)Xn("warn",t,...r);else{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Vt(...r){r=ap(r);const t="THREE."+r.shift();if(Xn)Xn("error",t,...r);else{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Tn(...r){const t=r.join(" ");t in Uu||(Uu[t]=!0,bt(...r))}function E0(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const A0={[bo]:bo,[To]:Co,[Eo]:Eo,[er]:Ao,[wo]:wo,[Co]:To,[Ro]:Ro,[Ao]:er};class nn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const ps=Math.PI/180,nr=180/Math.PI;function Vi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[r&255]+li[r>>8&255]+li[r>>16&255]+li[r>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[e&63|128]+li[e>>8&255]+"-"+li[e>>16&255]+li[e>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function Jt(r,t,e){return Math.max(t,Math.min(e,r))}function zh(r,t){return(r%t+t)%t}function C0(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function R0(r,t,e){return r!==t?(e-r)/(t-r):0}function Gr(r,t,e){return(1-e)*r+e*t}function P0(r,t,e,i){return Gr(r,t,1-Math.exp(-e*i))}function I0(r,t=1){return t-Math.abs(zh(r,t*2)-t)}function L0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function D0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function N0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function U0(r,t){return r+Math.random()*(t-r)}function F0(r){return r*(.5-Math.random())}function O0(r){r!==void 0&&(Fu=r);let t=Fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function B0(r){return r*ps}function z0(r){return r*nr}function k0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function G0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function op(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function V0(r,t,e,i,n){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*h,o*c);break;default:bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Pl(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fs(r,t){if(t.constructor===Float32Array)return r;const e=Pl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function di(r,t){if(t.constructor===Float32Array)return r;const e=Pl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}const Ce={DEG2RAD:ps,RAD2DEG:nr,generateUUID:Vi,clamp:Jt,euclideanModulo:zh,mapLinear:C0,inverseLerp:R0,lerp:Gr,damp:P0,pingpong:I0,smoothstep:L0,smootherstep:D0,randInt:N0,randFloat:U0,randFloatSpread:F0,seededRandom:O0,degToRad:B0,radToDeg:z0,isPowerOfTwo:k0,ceilPowerOfTwo:G0,floorPowerOfTwo:op,setQuaternionFromProperEuler:V0,normalize:di,denormalize:fs},vu=class vu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vu.prototype.isVector2=!0;let st=vu;class Si{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,o=Math.sin(o*v)/M,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+x*o;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yu=class yu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return lc.copy(this).projectOnVector(t),this.sub(lc)}reflect(t){return this.sub(lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yu.prototype.isVector3=!0;let C=yu;const lc=new C,Ou=new Si,Mu=class Mu{constructor(t,e,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],m=n[3],g=n[6],v=n[1],M=n[4],y=n[7],E=n[2],w=n[5],_=n[8];return s[0]=a*x+o*v+l*E,s[3]=a*m+o*M+l*w,s[6]=a*g+o*y+l*_,s[1]=c*x+h*v+u*E,s[4]=c*m+h*M+u*w,s[7]=c*g+h*y+u*_,s[2]=d*x+f*v+p*E,s[5]=d*m+f*M+p*w,s[8]=d*g+f*y+p*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Tn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cc.makeScale(t,e)),this}rotate(t){return Tn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cc.makeRotation(-t)),this}translate(t,e){return Tn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mu.prototype.isMatrix3=!0;let Qt=Mu;const cc=new Qt,Bu=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H0(){const r={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Se&&(n.r=En(n.r),n.g=En(n.g),n.b=En(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Sn?Qr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Kr]:{primaries:t,whitePoint:i,transfer:Qr,toXYZ:Bu,fromXYZ:zu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:Bu,fromXYZ:zu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),r}const ce=H0();function En(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let As;class lp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{As===void 0&&(As=jr("canvas")),As.width=t.width,As.height=t.height;const n=As.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=As}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=En(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(En(e[i]/255)*255):e[i]=En(e[i]);return{data:e,width:t.width,height:t.height}}else return bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let W0=0;class hn{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(hc(n[a].image)):s.push(hc(n[a]))}else s=hc(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function hc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(bt("Texture: Unable to serialize Texture."),{})}class X0 extends hn{constructor(t=null){Tn('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}}let q0=0;const uc=new C;class Ne extends nn{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=Ri,n=Ri,s=De,a=Ki,o=Pi,l=Ai,c=Ne.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Vi(),this.name="",this.source=new hn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(uc).x}get height(){return this.source.getSize(uc).y}get depth(){return this.source.getSize(uc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){bt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Ml;Ne.DEFAULT_ANISOTROPY=1;const Su=class Su{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(f+1)/2,E=(g+1)/2,w=(h+d)/4,_=(u+x)/4,S=(p+m)/4;return M>y&&M>E?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=w/i,s=_/i):y>E?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=w/n,s=S/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=_/s,n=S/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Su.prototype.isVector4=!0;let Te=Su;class kh extends nn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const n=i.count;for(let s=0;s<n;s++)this.textures[s]=new Ne({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new hn(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ke extends kh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Il extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y0 extends Ke{constructor(t=1,e=1,i=1,n={}){super(t,e,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Il(null,t,e,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class Ll extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Z0 extends Ke{constructor(t=1,e=1,i=1,n={}){super(t,e,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Ll(null,t,e,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}const fl=class fl{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,m)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fl().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Cs.setFromMatrixColumn(t,0).length(),s=1/Cs.setFromMatrixColumn(t,1).length(),a=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($0,t,J0)}lookAt(t,e,i){const n=this.elements;return Di.subVectors(t,e),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Fn.crossVectors(i,Di),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Fn.crossVectors(i,Di)),Fn.normalize(),Sa.crossVectors(Di,Fn),n[0]=Fn.x,n[4]=Sa.x,n[8]=Di.x,n[1]=Fn.y,n[5]=Sa.y,n[9]=Di.y,n[2]=Fn.z,n[6]=Sa.z,n[10]=Di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],v=i[3],M=i[7],y=i[11],E=i[15],w=n[0],_=n[4],S=n[8],I=n[12],R=n[1],L=n[5],z=n[9],Y=n[13],D=n[2],k=n[6],J=n[10],B=n[14],et=n[3],q=n[7],j=n[11],it=n[15];return s[0]=a*w+o*R+l*D+c*et,s[4]=a*_+o*L+l*k+c*q,s[8]=a*S+o*z+l*J+c*j,s[12]=a*I+o*Y+l*B+c*it,s[1]=h*w+u*R+d*D+f*et,s[5]=h*_+u*L+d*k+f*q,s[9]=h*S+u*z+d*J+f*j,s[13]=h*I+u*Y+d*B+f*it,s[2]=p*w+x*R+m*D+g*et,s[6]=p*_+x*L+m*k+g*q,s[10]=p*S+x*z+m*J+g*j,s[14]=p*I+x*Y+m*B+g*it,s[3]=v*w+M*R+y*D+E*et,s[7]=v*_+M*L+y*k+E*q,s[11]=v*S+M*z+y*J+E*j,s[15]=v*I+M*Y+y*B+E*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=l*f-c*d,M=o*f-c*u,y=o*d-l*u,E=a*f-c*h,w=a*d-l*h,_=a*u-o*h;return e*(x*v-m*M+g*y)-i*(p*v-m*E+g*w)+n*(p*M-x*E+g*_)-s*(p*y-x*w+m*_)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*o-i*a,M=e*l-n*a,y=e*c-s*a,E=i*l-n*o,w=i*c-s*o,_=n*c-s*l,S=h*x-u*p,I=h*m-d*p,R=h*g-f*p,L=u*m-d*x,z=u*g-f*x,Y=d*g-f*m,D=v*Y-M*z+y*L+E*R-w*I+_*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return t[0]=(o*Y-l*z+c*L)*k,t[1]=(n*z-i*Y-s*L)*k,t[2]=(x*_-m*w+g*E)*k,t[3]=(d*w-u*_-f*E)*k,t[4]=(l*R-a*Y-c*I)*k,t[5]=(e*Y-n*R+s*I)*k,t[6]=(m*y-p*_-g*M)*k,t[7]=(h*_-d*y+f*M)*k,t[8]=(a*z-o*R+c*S)*k,t[9]=(i*R-e*z-s*S)*k,t[10]=(p*w-x*y+g*v)*k,t[11]=(u*y-h*w-f*v)*k,t[12]=(o*I-a*L-l*S)*k,t[13]=(e*L-i*I+n*S)*k,t[14]=(x*M-p*E-m*v)*k,t[15]=(h*E-u*M+d*v)*k,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,x=a*h,m=a*u,g=o*u,v=l*c,M=l*h,y=l*u,E=i.x,w=i.y,_=i.z;return n[0]=(1-(x+g))*E,n[1]=(f+y)*E,n[2]=(p-M)*E,n[3]=0,n[4]=(f-y)*w,n[5]=(1-(d+g))*w,n[6]=(m+v)*w,n[7]=0,n[8]=(p+M)*_,n[9]=(m-v)*_,n[10]=(1-(d+x))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Cs.set(n[0],n[1],n[2]).length();const o=Cs.set(n[4],n[5],n[6]).length(),l=Cs.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Xi.copy(this);const c=1/a,h=1/o,u=1/l;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=h,Xi.elements[5]*=h,Xi.elements[6]*=h,Xi.elements[8]*=u,Xi.elements[9]*=u,Xi.elements[10]*=u,e.setFromRotationMatrix(Xi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,a,o=Oi,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let p,x;if(l)p=s/(a-s),x=a*s/(a-s);else if(o===Oi)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===_s)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Oi,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n);let p,x;if(l)p=1/(a-s),x=a/(a-s);else if(o===Oi)p=-2/(a-s),x=-(a+s)/(a-s);else if(o===_s)p=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fl.prototype.isMatrix4=!0;let Kt=fl;const Cs=new C,Xi=new Kt,$0=new C(0,0,0),J0=new C(1,1,1),Fn=new C,Sa=new C,Di=new C,ku=new Kt,Gu=new Si;class tn{constructor(t=0,e=0,i=0,n=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let K0=0;const Vu=new C,Rs=new Si,pn=new Kt,ba=new C,_r=new C,Q0=new C,j0=new Si,Hu=new C(1,0,0),Wu=new C(0,1,0),Xu=new C(0,0,1),qu={type:"added"},tg={type:"removed"},Ps={type:"childadded",child:null},dc={type:"childremoved",child:null};class fe extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new C,e=new tn,i=new Si,n=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Qt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(Hu,t)}rotateY(t){return this.rotateOnAxis(Wu,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hu,t)}translateY(t){return this.translateOnAxis(Wu,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ba.copy(t):ba.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(_r,ba,this.up):pn.lookAt(ba,_r,this.up),this.quaternion.setFromRotationMatrix(pn),n&&(pn.extractRotation(n.matrixWorld),Rs.setFromRotationMatrix(pn),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qu),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tg),dc.child=t,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qu),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,j0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}fe.DEFAULT_UP=new C(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pe extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},wa={h:0,s:0,l:0};function fc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ce.workingColorSpace){if(t=zh(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=fc(a,s,t+1/3),this.g=fc(a,s,t),this.b=fc(a,s,t-1/3)}return ce.colorSpaceToWorking(this,n),this}setStyle(t,e=We){function i(s){s!==void 0&&parseFloat(s)<1&&bt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:bt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const i=cp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ce.workingToColorSpace(ci.copy(this),t),Math.round(Jt(ci.r*255,0,255))*65536+Math.round(Jt(ci.g*255,0,255))*256+Math.round(Jt(ci.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(ci.copy(this),e);const i=ci.r,n=ci.g,s=ci.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(ci.copy(this),e),t.r=ci.r,t.g=ci.g,t.b=ci.b,t}getStyle(t=We){ce.workingToColorSpace(ci.copy(this),t);const e=ci.r,i=ci.g,n=ci.b;return t!==We?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(wa);const i=Gr(On.h,wa.h,e),n=Gr(On.s,wa.s,e),s=Gr(On.l,wa.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ci=new vt;vt.NAMES=cp;class ua{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new ua(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new vt(t),this.near=e,this.far=i}clone(){return new Nl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gh extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const qi=new C,mn=new C,pc=new C,gn=new C,Is=new C,Ls=new C,Yu=new C,mc=new C,gc=new C,xc=new C,_c=new Te,vc=new Te,yc=new Te;class Ci{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),qi.subVectors(t,e),n.cross(qi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){qi.subVectors(n,e),mn.subVectors(i,e),pc.subVectors(t,e);const a=qi.dot(qi),o=qi.dot(mn),l=qi.dot(pc),c=mn.dot(mn),h=mn.dot(pc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return _c.setScalar(0),vc.setScalar(0),yc.setScalar(0),_c.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,i),yc.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(_c,s.x),a.addScaledVector(vc,s.y),a.addScaledVector(yc,s.z),a}static isFrontFacing(t,e,i,n){return qi.subVectors(i,e),mn.subVectors(t,e),qi.cross(mn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),qi.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Ci.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;Is.subVectors(n,i),Ls.subVectors(s,i),mc.subVectors(t,i);const l=Is.dot(mc),c=Ls.dot(mc);if(l<=0&&c<=0)return e.copy(i);gc.subVectors(t,n);const h=Is.dot(gc),u=Ls.dot(gc);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Is,a);xc.subVectors(t,s);const f=Is.dot(xc),p=Ls.dot(xc);if(p>=0&&f<=p)return e.copy(s);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Ls,o);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Yu.subVectors(s,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(Yu,o);const g=1/(m+x+d);return a=x*g,o=d*g,e.copy(i).addScaledVector(Is,a).addScaledVector(Ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Qe{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yi):Yi.fromBufferAttribute(s,a),Yi.applyMatrix4(t.matrixWorld),this.expandByPoint(Yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yi),Yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Ea.subVectors(this.max,vr),Ds.subVectors(t.a,vr),Ns.subVectors(t.b,vr),Us.subVectors(t.c,vr),Bn.subVectors(Ns,Ds),zn.subVectors(Us,Ns),Qn.subVectors(Ds,Us);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Qn.z,Qn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Qn.z,0,-Qn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Qn.y,Qn.x,0];return!Mc(e,Ds,Ns,Us,Ea)||(e=[1,0,0,0,1,0,0,0,1],!Mc(e,Ds,Ns,Us,Ea))?!1:(Aa.crossVectors(Bn,zn),e=[Aa.x,Aa.y,Aa.z],Mc(e,Ds,Ns,Us,Ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xn=[new C,new C,new C,new C,new C,new C,new C,new C],Yi=new C,Ta=new Qe,Ds=new C,Ns=new C,Us=new C,Bn=new C,zn=new C,Qn=new C,vr=new C,Ea=new C,Aa=new C,jn=new C;function Mc(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){jn.fromArray(r,s);const o=n.x*Math.abs(jn.x)+n.y*Math.abs(jn.y)+n.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=i.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const bn=ig();function ig(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function Ei(r){Math.abs(r)>65504&&bt("DataUtils.toHalfFloat(): Value out of range."),r=Jt(r,-65504,65504),bn.floatView[0]=r;const t=bn.uint32View[0],e=t>>23&511;return bn.baseTable[e]+((t&8388607)>>bn.shiftTable[e])}function Ir(r){const t=r>>10;return bn.uint32View[0]=bn.mantissaTable[bn.offsetTable[t]+(r&1023)]+bn.exponentTable[t],bn.floatView[0]}class ng{static toHalfFloat(t){return Ei(t)}static fromHalfFloat(t){return Ir(t)}}const Ve=new C,Ca=new st;let sg=0;class be extends nn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rl,this.updateRanges=[],this.gpuType=yi,this.version=0,this._normalizationScale=t!==void 0?Pl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):fs(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):di(t,this.array)}}class rg extends be{constructor(t,e,i){super(new Int8Array(t),e,i)}}class ag extends be{constructor(t,e,i){super(new Uint8Array(t),e,i)}}class og extends be{constructor(t,e,i){super(new Uint8ClampedArray(t),e,i)}}class lg extends be{constructor(t,e,i){super(new Int16Array(t),e,i)}}class Vh extends be{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class cg extends be{constructor(t,e,i){super(new Int32Array(t),e,i)}}class Hh extends be{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class hg extends be{constructor(t,e,i){super(new Uint16Array(t),e,i),this.isFloat16BufferAttribute=!0}getX(t){let e=Ir(this.array[t*this.itemSize]);return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=di(e,this.array)),this.array[t*this.itemSize]=Ei(e),this}getY(t){let e=Ir(this.array[t*this.itemSize+1]);return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=di(e,this.array)),this.array[t*this.itemSize+1]=Ei(e),this}getZ(t){let e=Ir(this.array[t*this.itemSize+2]);return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=di(e,this.array)),this.array[t*this.itemSize+2]=Ei(e),this}getW(t){let e=Ir(this.array[t*this.itemSize+3]);return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=di(e,this.array)),this.array[t*this.itemSize+3]=Ei(e),this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=di(e,this.array),i=di(i,this.array)),this.array[t+0]=Ei(e),this.array[t+1]=Ei(i),this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=di(e,this.array),i=di(i,this.array),n=di(n,this.array)),this.array[t+0]=Ei(e),this.array[t+1]=Ei(i),this.array[t+2]=Ei(n),this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=di(e,this.array),i=di(i,this.array),n=di(n,this.array),s=di(s,this.array)),this.array[t+0]=Ei(e),this.array[t+1]=Ei(i),this.array[t+2]=Ei(n),this.array[t+3]=Ei(s),this}}class Lt extends be{constructor(t,e,i){super(new Float32Array(t),e,i)}}const ug=new Qe,yr=new C,Sc=new C;class ii{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ug.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);const e=yr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(yr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(Sc)),this.expandByPoint(yr.copy(t.center).sub(Sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let dg=0;const zi=new Kt,bc=new fe,Fs=new C,Ni=new Qe,Mr=new Qe,Je=new C;class jt extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S0(t)?Hh:Vh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zi.makeRotationFromQuaternion(t),this.applyMatrix4(zi),this}rotateX(t){return zi.makeRotationX(t),this.applyMatrix4(zi),this}rotateY(t){return zi.makeRotationY(t),this.applyMatrix4(zi),this}rotateZ(t){return zi.makeRotationZ(t),this.applyMatrix4(zi),this}translate(t,e,i){return zi.makeTranslation(t,e,i),this.applyMatrix4(zi),this}scale(t,e,i){return zi.makeScale(t,e,i),this.applyMatrix4(zi),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];Ni.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(Ni.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(Ni.min,Mr.min),Ni.expandByPoint(Je),Je.addVectors(Ni.max,Mr.max),Ni.expandByPoint(Je)):(Ni.expandByPoint(Mr.min),Ni.expandByPoint(Mr.max))}Ni.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Je.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Je));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(Fs.fromBufferAttribute(t,c),Je.add(Fs)),n=Math.max(n,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new be(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new C,l[I]=new C;const h=new C,u=new C,d=new C,f=new st,p=new st,x=new st,m=new C,g=new C;function v(I,R,L){c[I]=c[R]=c[L]=1,h.fromBufferAttribute(i,I),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,L),f.fromBufferAttribute(s,I),p.fromBufferAttribute(s,R),x.fromBufferAttribute(s,L),u.sub(h),d.sub(h),p.sub(f),x.sub(f);const z=1/(p.x*x.y-x.x*p.y);isFinite(z)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(z),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(z),o[I].add(m),o[R].add(m),o[L].add(m),l[I].add(g),l[R].add(g),l[L].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,R=M.length;I<R;++I){const L=M[I],z=L.start,Y=L.count;for(let D=z,k=z+Y;D<k;D+=3)v(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new C,E=new C,w=new C,_=new C;function S(I){w.fromBufferAttribute(n,I),_.copy(w);const R=o[I];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),E.crossVectors(_,R);const z=E.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,z)}for(let I=0,R=i.count;I<R;++I)c[I]&&S(I);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new be(d,h,u)}if(this.index===null)return bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new jt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ul{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rl,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Zu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Zu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Zu(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Vi()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}const xi=new C;class vs{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Pl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)xi.fromBufferAttribute(this,e),xi.applyMatrix4(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xi.fromBufferAttribute(this,e),xi.applyNormalMatrix(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xi.fromBufferAttribute(this,e),xi.transformDirection(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):fs(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):di(t,this.data.array)}}const wc=new C,fg=new C,pg=new Qt;class Mn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=wc.subVectors(i,e).cross(fg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(wc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||pg.getNormalMatrix(t),n=this.coplanarPoint(wc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let mg=0;class si extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Qs,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Ah,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){bt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Mn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new st().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ji extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Os;const Sr=new C,Bs=new C,zs=new C,ks=new st,br=new st,hp=new Kt,Ra=new C,wr=new C,Pa=new C,$u=new st,Tc=new st,Ju=new st;class cn extends fe{constructor(t=new Ji){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new jt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ul(e,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new vs(i,3,0,!1)),Os.setAttribute("uv",new vs(i,2,3,!1))}this.geometry=Os,this.material=t,this.center=new st(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),hp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-zs.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;Ia(Ra.set(-.5,-.5,0),zs,a,Bs,n,s),Ia(wr.set(.5,-.5,0),zs,a,Bs,n,s),Ia(Pa.set(.5,.5,0),zs,a,Bs,n,s),$u.set(0,0),Tc.set(1,0),Ju.set(1,1);let o=t.ray.intersectTriangle(Ra,wr,Pa,!1,Sr);if(o===null&&(Ia(wr.set(-.5,.5,0),zs,a,Bs,n,s),Tc.set(0,1),o=t.ray.intersectTriangle(Ra,Pa,wr,!1,Sr),o===null))return;const l=t.ray.origin.distanceTo(Sr);l<t.near||l>t.far||e.push({distance:l,point:Sr.clone(),uv:Ci.getInterpolation(Sr,Ra,wr,Pa,$u,Tc,Ju,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Ia(r,t,e,i,n,s){ks.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(br.x=s*ks.x-n*ks.y,br.y=n*ks.x+s*ks.y):br.copy(ks),r.copy(t),r.x+=br.x,r.y+=br.y,r.applyMatrix4(hp)}const La=new C,Ku=new C;class up extends fe{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let i=0,n=e.length;i<n;i++){const s=e[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,i=0){e=Math.abs(e);const n=this.levels;let s;for(s=0;s<n.length&&!(e<n[s].distance);s++);return n.splice(s,0,{distance:e,hysteresis:i,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let i=0;i<e.length;i++)if(e[i].distance===t){const n=e.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let i,n;for(i=1,n=e.length;i<n;i++){let s=e[i].distance;if(e[i].object.visible&&(s-=s*e[i].hysteresis),t<s)break}return e[i-1].object}return null}raycast(t,e){if(this.levels.length>0){La.setFromMatrixPosition(this.matrixWorld);const n=t.ray.origin.distanceTo(La);this.getObjectForDistance(n).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){La.setFromMatrixPosition(t.matrixWorld),Ku.setFromMatrixPosition(this.matrixWorld);const i=La.distanceTo(Ku)/t.zoom;e[0].object.visible=!0;let n,s;for(n=1,s=e.length;n<s;n++){let a=e[n].distance;if(e[n].object.visible&&(a-=a*e[n].hysteresis),i>=a)e[n-1].object.visible=!1,e[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<s;n++)e[n].object.visible=!1}}toJSON(t){const e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];const i=this.levels;for(let n=0,s=i.length;n<s;n++){const a=i[n];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const _n=new C,Ec=new C,Da=new C,Na=new C;class hr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ec.copy(t).add(e).multiplyScalar(.5),Da.copy(e).sub(t).normalize(),Na.copy(this.origin).sub(Ec);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Da),o=Na.dot(this.direction),l=-Na.dot(Da),c=Na.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ec).addScaledVector(Da,d),f}intersectSphere(t,e){if(t.radius<0)return null;_n.subVectors(t.center,this.origin);const i=_n.dot(this.direction),n=_n.dot(_n)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,i,n,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=i.x-a.x,v=i.y-a.y,M=i.z-a.z,y=Math.abs(l),E=Math.abs(c),w=Math.abs(h);let _,S,I,R,L,z,Y,D,k,J,B,et;if(y>=E&&y>=w?(I=l,z=u,k=p,et=g,l>=0?(_=c,S=h,R=d,L=f,Y=x,D=m,J=v,B=M):(_=h,S=c,R=f,L=d,Y=m,D=x,J=M,B=v)):E>=w?(I=c,z=d,k=x,et=v,c>=0?(_=h,S=l,R=f,L=u,Y=m,D=p,J=M,B=g):(_=l,S=h,R=u,L=f,Y=p,D=m,J=g,B=M)):(I=h,z=f,k=m,et=M,h>=0?(_=l,S=c,R=u,L=d,Y=p,D=x,J=g,B=v):(_=c,S=l,R=d,L=u,Y=x,D=p,J=v,B=g)),I===0)return null;const q=_/I,j=S/I,it=1/I,At=R-q*z,Dt=L-j*z,K=Y-q*k,Mt=D-j*k,It=J-q*et,Ht=B-j*et,St=It*Mt-Ht*K,Wt=At*Ht-Dt*It,Ee=K*Dt-Mt*At;if(n){if(St<0||Wt<0||Ee<0)return null}else if((St<0||Wt<0||Ee<0)&&(St>0||Wt>0||Ee>0))return null;const qt=St+Wt+Ee;if(qt===0)return null;const ne=it*(St*z+Wt*k+Ee*et);return(qt>0?ne<0:ne>0)?null:this.at(ne/qt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qu=new Kt,ts=new hr,Ua=new ii,ju=new C,Fa=new C,Oa=new C,Ba=new C,Ac=new C,za=new C,td=new C,ka=new C;class xt extends fe{constructor(t=new jt,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ac.fromBufferAttribute(u,t),a?za.addScaledVector(Ac,h):za.addScaledVector(Ac.sub(e),h))}e.add(za)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),ts.copy(t.ray).recast(t.near),!(Ua.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Ua,ju)===null||ts.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&(Qu.copy(s).invert(),ts.copy(t.ray).applyMatrix4(Qu),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,E=M;y<E;y+=3){const w=o.getX(y),_=o.getX(y+1),S=o.getX(y+2);n=Ga(this,g,t,i,c,h,u,w,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const v=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);n=Ga(this,a,t,i,c,h,u,v,M,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,E=M;y<E;y+=3){const w=y,_=y+1,S=y+2;n=Ga(this,g,t,i,c,h,u,w,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const v=m,M=m+1,y=m+2;n=Ga(this,a,t,i,c,h,u,v,M,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function gg(r,t,e,i,n,s,a,o){let l;if(t.side===Mi?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Hn,o),l===null)return null;ka.copy(o),ka.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ka);return c<e.near||c>e.far?null:{distance:c,point:ka.clone(),object:r}}function Ga(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Fa),r.getVertexPosition(l,Oa),r.getVertexPosition(c,Ba);const h=gg(r,t,e,i,Fa,Oa,Ba,td);if(h){const u=new C;Ci.getBarycoord(td,Fa,Oa,Ba,u),n&&(h.uv=Ci.getInterpolatedAttribute(n,o,l,c,u,new st)),s&&(h.uv1=Ci.getInterpolatedAttribute(s,o,l,c,u,new st)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};Ci.getNormal(Fa,Oa,Ba,d.normal),h.face=d,h.barycoord=u}return h}const Tr=new Te,ed=new Te,id=new Te,xg=new Te,nd=new Kt,Va=new C,Cc=new ii,sd=new Kt,Rc=new hr;class dp extends xt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new Kt,this.bindMatrixInverse=new Kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qe),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Va),this.boundingBox.expandByPoint(Va)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Va),this.boundingSphere.expandByPoint(Va)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(n),t.ray.intersectsSphere(Cc)!==!1&&(sd.copy(n).invert(),Rc.copy(t.ray).applyMatrix4(sd),!(this.boundingBox!==null&&Rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Rc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Te,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qf?this.bindMatrixInverse.copy(this.bindMatrix).invert():bt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;ed.fromBufferAttribute(n.attributes.skinIndex,t),id.fromBufferAttribute(n.attributes.skinWeight,t),e.isVector4?(Tr.copy(e),e.set(0,0,0,0)):(Tr.set(e.x,e.y,e.z,1),e.set(0,0,0)),Tr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=id.getComponent(s);if(a!==0){const o=ed.getComponent(s);nd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(xg.copy(Tr).applyMatrix4(nd),a)}}return e.isVector4&&(e.w=Tr.w),e.applyMatrix4(this.bindMatrixInverse)}}class Wh extends fe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ki extends Ne{constructor(t=null,e=1,i=1,n,s,a,o,l,c=ke,h=ke,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=new Kt,_g=new Kt;class Fl{constructor(t=[],e=[]){this.uuid=Vi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){bt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Kt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:_g;rd.multiplyMatrices(o,e[s]),rd.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Fl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new ki(e,t,t,Pi,yi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const s=t.bones[i];let a=e[s];a===void 0&&(bt("Skeleton: No bone found with UUID:",s),a=new Wh),this.bones.push(a),this.boneInverses.push(new Kt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){const a=e[n];t.bones.push(a.uuid);const o=i[n];t.boneInverses.push(o.toArray())}return t}}class sr extends be{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gs=new Kt,ad=new Kt,Ha=[],od=new Qe,vg=new Kt,Er=new xt,Ar=new ii;class fp extends xt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,vg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gs),od.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(od)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gs),Ar.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),t.ray.intersectsSphere(Ar)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Gs),ad.multiplyMatrices(i,Gs),Er.matrixWorld=ad,Er.raycast(t,Ha);for(let a=0,o=Ha.length;a<o;a++){const l=Ha[a];l.instanceId=s,l.object=this,e.push(l)}Ha.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ki(new Float32Array(n*this.count),n,this.count,Tl,yi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const es=new ii,yg=new st(.5,.5),Wa=new C;class ys{constructor(t=new Mn,e=new Mn,i=new Mn,n=new Mn,s=new Mn,a=new Mn){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi,i=!1){const n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],p=s[8],x=s[9],m=s[10],g=s[11],v=s[12],M=s[13],y=s[14],E=s[15];if(n[0].setComponents(c-a,f-h,g-p,E-v).normalize(),n[1].setComponents(c+a,f+h,g+p,E+v).normalize(),n[2].setComponents(c+o,f+u,g+x,E+M).normalize(),n[3].setComponents(c-o,f-u,g-x,E-M).normalize(),i)n[4].setComponents(l,d,m,y).normalize(),n[5].setComponents(c-l,f-d,g-m,E-y).normalize();else if(n[4].setComponents(c-l,f-d,g-m,E-y).normalize(),e===Oi)n[5].setComponents(c+l,f+d,g+m,E+y).normalize();else if(e===_s)n[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);const e=yg.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Wa.x=n.normal.x>0?t.max.x:t.min.x,Wa.y=n.normal.y>0?t.max.y:t.min.y,Wa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ld=new Kt;class da{constructor(){this.coordinateSystem=Oi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const s=e[n];ld.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new ys),i[n].setFromProjectionMatrix(ld,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new ys),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new da().copy(this)}}function Pc(r,t){return r-t}function Mg(r,t){return r.z-t.z}function Sg(r,t){return t.z-r.z}class bg{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,i,n){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}}const Ti=new Kt,wg=new vt(1,1,1),Tg=new ys,Eg=new da,Xa=new Qe,is=new ii,Ic=new C,cd=new C,hd=new C,Ag=new C,Lc=new bg,hi=new xt,qa=[];function Cg(r,t,e=0){const i=t.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==t.array.constructor){const n=r.count;for(let s=0;s<n;s++)for(let a=0;a<i;a++)t.setComponent(s+e,a,r.getComponent(s,a))}else t.array.set(r.array,e*i);t.needsUpdate=!0}function an(r,t){if(r.constructor!==t.constructor){const e=Math.min(r.length,t.length);for(let i=0;i<e;i++)t[i]=r[i]}else{const e=Math.min(r.length,t.length);t.set(new r.constructor(r.buffer,0,e))}}class pp extends xt{constructor(t,e,i=e*2,n){super(new jt,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),i=new ki(e,t,t,Pi,yi);this._matricesTexture=i}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),i=new ki(e,t,t,ha,Gi);this._indirectTexture=i}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),i=new ki(e,t,t,Pi,yi);i.colorSpace=ce.workingColorSpace,this._colorsTexture=i}_initializeGeometry(t){const e=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in t.attributes){const a=t.getAttribute(s),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(i*l),u=new be(h,l,c);e.setAttribute(s,u)}if(t.getIndex()!==null){const s=i>65535?new Uint32Array(n):new Uint16Array(n);e.setIndex(new be(s,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in e.attributes){if(!t.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=t.getAttribute(i),s=e.getAttribute(i);if(n.itemSize!==s.itemSize||n.normalized!==s.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${i}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let i=0,n=e.length;i<n;i++){if(e[i].active===!1)continue;const s=e[i].geometryIndex;this.getMatrixAt(i,Ti),this.getBoundingBoxAt(s,Xa).applyMatrix4(Ti),t.union(Xa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let i=0,n=e.length;i<n;i++){if(e[i].active===!1)continue;const s=e[i].geometryIndex;this.getMatrixAt(i,Ti),this.getBoundingSphereAt(s,is).applyMatrix4(Ti),t.union(is)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const i={visible:!0,active:!0,geometryIndex:t};let n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Pc),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=i):(n=this._instanceInfo.length,this._instanceInfo.push(i));const s=this._matricesTexture;Ti.identity().toArray(s.image.data,n*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(wg.toArray(a.image.data,n*4),a.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(t,e=-1,i=-1){this._initializeGeometry(t),this._validateGeometry(t);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const a=t.getIndex();if(a!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?a.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Pc),l=this._availableGeometryIds.shift(),s[l]=n):(l=this._geometryCount,this._geometryCount++,s.push(n)),this.setGeometryAt(l,t),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const i=this.geometry,n=i.getIndex()!==null,s=i.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(n&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(const h in i.attributes){const u=e.getAttribute(h),d=i.getAttribute(h);Cg(u,d,l);const f=u.itemSize;for(let p=u.count,x=c;p<x;p++){const m=l+p;for(let g=0;g<f;g++)d.setComponent(m,g,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(n){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let d=0;d<a.count;d++)s.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)s.setX(h+d,l);s.needsUpdate=!0,s.addUpdateRange(h,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const i=this._instanceInfo;for(let n=0,s=i.length;n<s;n++)i[n].active&&i[n].geometryIndex===t&&this.deleteInstance(n);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const i=this._geometryInfo,n=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),s=this.geometry;for(let a=0,o=i.length;a<o;a++){const l=n[a],c=i[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=s.index,p=f.array,x=t-u;for(let m=h;m<h+d;m++)p[m]=p[m]+x;f.array.copyWithin(e,h,h+d),f.addUpdateRange(e,d),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:u}=c,d=s.attributes;for(const f in d){const p=d[f],{array:x,itemSize:m}=p;x.copyWithin(t*m,h*m,(h+u)*m),p.addUpdateRange(t*m,u*m),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[t];if(n.boundingBox===null){const s=new Qe,a=i.index,o=i.attributes.position;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;a&&(h=a.getX(h)),s.expandByPoint(Ic.fromBufferAttribute(o,h))}n.boundingBox=s}return e.copy(n.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[t];if(n.boundingSphere===null){const s=new ii;this.getBoundingBoxAt(t,Xa),Xa.getCenter(s.center);const a=i.index,o=i.attributes.position;let l=0;for(let c=n.start,h=n.start+n.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Ic.fromBufferAttribute(o,u),l=Math.max(l,s.center.distanceToSquared(Ic))}s.radius=Math.sqrt(l),n.boundingSphere=s}return e.copy(n.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const i=this._matricesTexture,n=this._matricesTexture.image.data;return e.toArray(n,t*16),i.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const i=this._geometryInfo[t];return e.vertexStart=i.vertexStart,e.vertexCount=i.vertexCount,e.reservedVertexCount=i.reservedVertexCount,e.indexStart=i.indexStart,e.indexCount=i.indexCount,e.reservedIndexCount=i.reservedIndexCount,e.start=i.start,e.count=i.count,e}setInstanceCount(t){const e=this._availableInstanceIds,i=this._instanceInfo;for(e.sort(Pc);e[e.length-1]===i.length-1;)i.pop(),e.pop();if(t<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const n=new Int32Array(t),s=new Int32Array(t);an(this._multiDrawCounts,n),an(this._multiDrawStarts,s),this._multiDrawCounts=n,this._multiDrawStarts=s;const a=new Int32Array(t),o=new Int32Array(t),l=new Int32Array(t);an(this._mergedDrawCounts,a),an(this._mergedDrawStarts,o),an(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=a,this._mergedDrawStarts=o,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;const c=this._indirectTexture,h=this._matricesTexture,u=this._colorsTexture;c.dispose(),this._initIndirectTexture(),an(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),an(h.image.data,this._matricesTexture.image.data),u&&(u.dispose(),this._initColorsTexture(),an(u.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){const i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new jt,this._initializeGeometry(s));const a=this.geometry;s.index&&an(s.index.array,a.index.array);for(const o in s.attributes)an(s.attributes[o].array,a.attributes[o].array);this._visibilityChanged=!0}raycast(t,e){const i=this._instanceInfo,n=this._geometryInfo,s=this.matrixWorld,a=this.geometry;hi.material=this.material,hi.geometry.index=a.index,hi.geometry.attributes=a.attributes,hi.geometry.boundingBox===null&&(hi.geometry.boundingBox=new Qe),hi.geometry.boundingSphere===null&&(hi.geometry.boundingSphere=new ii);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,h=n[c];hi.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,hi.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,hi.geometry.boundingBox),this.getBoundingSphereAt(c,hi.geometry.boundingSphere),hi.raycast(t,qa);for(let u=0,d=qa.length;u<d;u++){const f=qa[u];f.object=this,f.batchId=o,e.push(f)}qa.length=0}hi.material=null,hi.geometry.index=null,hi.geometry.attributes={},hi.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,i,n="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=e.getIndex();let a=s===null?1:s.array.BYTES_PER_ELEMENT,o=1;i.wireframe&&(o=2,a=e.attributes.position.count>65535?4:2);const l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._mergedDrawStarts,d=this._mergedDrawCounts,f=this._mergedDrawInstanceCounts,p=this._geometryInfo,x=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,v=t.isArrayCamera?Eg:Tg;x&&(t.isArrayCamera?v.setFromArrayCamera(t):(Ti.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),v.setFromProjectionMatrix(Ti,t.coordinateSystem,t.reversedDepth)));let M=0,y=0;if(this.sortObjects){Ti.copy(this.matrixWorld).invert(),cd.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Ti),hd.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(Ti);for(let _=0,S=l.length;_<S;_++)if(l[_].visible&&l[_].active){const I=l[_].geometryIndex;this.getMatrixAt(_,Ti),this.getBoundingSphereAt(I,is).applyMatrix4(Ti);let R=!1;if(x&&(R=!v.intersectsSphere(is)),!R){const L=p[I],z=Ag.subVectors(is.center,cd).dot(hd);Lc.push(L.start,L.count,z,_)}}const E=Lc.list,w=this.customSort;w===null?E.sort(i.transparent?Sg:Mg):w.call(this,E,t);for(let _=0,S=E.length;_<S;_++){const I=E[_],R=I.start*a*o,L=I.count*o;n==="merged"?y>0&&u[y-1]===R&&d[y-1]===L?f[y-1]++:(u[y]=R,d[y]=L,f[y]=1,y++):(c[M]=R,h[M]=L),g[M]=I.index,M++}Lc.reset()}else for(let E=0,w=l.length;E<w;E++)if(l[E].visible&&l[E].active){const _=l[E].geometryIndex;let S=!1;if(x&&(this.getMatrixAt(E,Ti),this.getBoundingSphereAt(_,is).applyMatrix4(Ti),S=!v.intersectsSphere(is)),!S){const I=p[_],R=I.start*a*o,L=I.count*o;n==="merged"?y>0&&u[y-1]===R&&d[y-1]===L?f[y-1]++:(u[y]=R,d[y]=L,f[y]=1,y++):(c[M]=R,h[M]=L),g[M]=E,M++}}m.needsUpdate=!0,this._multiDrawCount=M,this._mergedDrawCount=y,this._multiDrawBytesPerElement=a,this._visibilityChanged=!1}onBeforeRender(t,e,i,n,s){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(i,n,s)}onBeforeShadow(t,e,i,n,s,a){t.isWebGPURenderer!==!0&&this._updateDrawParameters(n,s,a)}}class ri extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ol=new C,ll=new C,ud=new Kt,Cr=new hr,Ya=new ii,Dc=new C,dd=new C;class In extends fe{constructor(t=new jt,e=new ri){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)ol.fromBufferAttribute(e,n-1),ll.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ol.distanceTo(ll);t.setAttribute("lineDistance",new Lt(i,1))}else bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(n),Ya.radius+=s,t.ray.intersectsSphere(Ya)===!1)return;ud.copy(n).invert(),Cr.copy(t.ray).applyMatrix4(ud);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){const g=h.getX(x),v=h.getX(x+1),M=Za(this,t,Cr,l,g,v,x);M&&e.push(M)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(f),g=Za(this,t,Cr,l,x,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){const g=Za(this,t,Cr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=Za(this,t,Cr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Za(r,t,e,i,n,s,a){const o=r.geometry.attributes.position;if(ol.fromBufferAttribute(o,n),ll.fromBufferAttribute(o,s),e.distanceSqToSegment(ol,ll,Dc,dd)>i)return;Dc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Dc);if(!(c<t.near||c>t.far))return{distance:c,point:dd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const fd=new C,pd=new C;class sn extends In{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)fd.fromBufferAttribute(e,n),pd.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+fd.distanceTo(pd);t.setAttribute("lineDistance",new Lt(i,1))}else bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mp extends In{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ol extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const md=new Kt,oh=new hr,$a=new ii,Ja=new C;class Bl extends fe{constructor(t=new jt,e=new Ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(n),$a.radius+=s,t.ray.intersectsSphere($a)===!1)return;md.copy(n).invert(),oh.copy(t.ray).applyMatrix4(md);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){const m=c.getX(p);Ja.fromBufferAttribute(u,m),gd(Ja,m,l,n,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)Ja.fromBufferAttribute(u,p),gd(Ja,p,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gd(r,t,e,i,n,s,a){const o=oh.distanceSqToPoint(r);if(o<e){const l=new C;oh.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class gp extends Ne{constructor(t,e,i,n,s=De,a=De,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Rg extends gp{constructor(t,e,i,n,s,a,o,l){super({},t,e,i,n,s,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class Pg extends Ne{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=ke,this.minFilter=ke,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new hn(Object.assign({},t.image)),this}}class zl extends Ne{constructor(t=[],e,i,n,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isCompressedTexture=!0,this.image={width:e,height:i},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Ig extends zl{constructor(t,e,i,n,s,a){super(t,e,i,s,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=Ri,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lg extends zl{constructor(t,e,i){super(void 0,t[0].width,t[0].height,e,i,Cn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class fa extends Ne{constructor(t=[],e=Cn,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ea extends Ne{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dg extends Ne{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}}class Ms extends Ne{constructor(t,e,i=Gi,n,s,a,o=ke,l=ke,c,h=Rn,u=1){if(h!==Rn&&h!==wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Xh extends Ms{constructor(t,e=Gi,i=Cn,n,s,a=ke,o=ke,l,c=Rn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class qh extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gt extends jt{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function p(x,m,g,v,M,y,E,w,_,S,I){const R=y/_,L=E/S,z=y/2,Y=E/2,D=w/2,k=_+1,J=S+1;let B=0,et=0;const q=new C;for(let j=0;j<J;j++){const it=j*L-Y;for(let At=0;At<k;At++){const Dt=At*R-z;q[x]=Dt*v,q[m]=it*M,q[g]=D,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[g]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(At/_),u.push(1-j/S),B+=1}}for(let j=0;j<S;j++)for(let it=0;it<_;it++){const At=d+it+k*j,Dt=d+it+k*(j+1),K=d+(it+1)+k*(j+1),Mt=d+(it+1)+k*j;l.push(At,Dt,Mt),l.push(Dt,K,Mt),et+=6}o.addGroup(f,et,I),f+=et,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class pa extends jt{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+s,x=n+1,m=new C,g=new C;for(let v=0;v<=p;v++){let M=0,y=0,E=0,w=0;if(v<=i){const I=v/i,R=I*Math.PI/2;y=-h-t*Math.cos(R),E=t*Math.sin(R),w=-t*Math.cos(R),M=I*u}else if(v<=i+s){const I=(v-i)/s;y=-h+I*e,E=t,w=0,M=u+I*d}else{const I=(v-i-s)/i,R=I*Math.PI/2;y=h+t*Math.sin(R),E=t*Math.cos(R),w=t*Math.sin(R),M=u+d+I*u}const _=Math.max(0,Math.min(1,M/f));let S=0;v===0?S=.5/n:v===p&&(S=-.5/n);for(let I=0;I<=n;I++){const R=I/n,L=R*Math.PI*2,z=Math.sin(L),Y=Math.cos(L);g.x=-E*Y,g.y=y,g.z=E*z,o.push(g.x,g.y,g.z),m.set(-E*Y,w,E*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,_)}if(v>0){const I=(v-1)*x;for(let R=0;R<n;R++){const L=I+R,z=I+R+1,Y=v*x+R,D=v*x+R+1;a.push(L,z,Y),a.push(z,D,Y)}}}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ur extends jt{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new C,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends jt{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let p=0;const x=[],m=i/2;let g=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2));function v(){const y=new C,E=new C;let w=0;const _=(e-t)/i;for(let S=0;S<=s;S++){const I=[],R=S/s,L=R*(e-t)+t;for(let z=0;z<=n;z++){const Y=z/n,D=Y*l+o,k=Math.sin(D),J=Math.cos(D);E.x=L*k,E.y=-R*i+m,E.z=L*J,u.push(E.x,E.y,E.z),y.set(k,_,J).normalize(),d.push(y.x,y.y,y.z),f.push(Y,1-R),I.push(p++)}x.push(I)}for(let S=0;S<n;S++)for(let I=0;I<s;I++){const R=x[I][S],L=x[I+1][S],z=x[I+1][S+1],Y=x[I][S+1];(t>0||I!==0)&&(h.push(R,L,Y),w+=3),(e>0||I!==s-1)&&(h.push(L,z,Y),w+=3)}c.addGroup(g,w,0),g+=w}function M(y){const E=p,w=new st,_=new C;let S=0;const I=y===!0?t:e,R=y===!0?1:-1;for(let z=1;z<=n;z++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;const L=p;for(let z=0;z<=n;z++){const D=z/n*l+o,k=Math.cos(D),J=Math.sin(D);_.x=I*J,_.y=m*R,_.z=I*k,u.push(_.x,_.y,_.z),d.push(0,R,0),w.x=k*.5+.5,w.y=J*.5*R+.5,f.push(w.x,w.y),p++}for(let z=0;z<n;z++){const Y=E+z,D=L+z;y===!0?h.push(D,D+1,Y):h.push(D+1,D,Y),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ma extends Xe{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ma(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qn extends jt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(s.slice(),3)),this.setAttribute("uv",new Lt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const M=new C,y=new C,E=new C;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],y),f(e[w+2],E),l(M,y,E,v)}function l(v,M,y,E){const w=E+1,_=[];for(let S=0;S<=w;S++){_[S]=[];const I=v.clone().lerp(y,S/w),R=M.clone().lerp(y,S/w),L=w-S;for(let z=0;z<=L;z++)z===0&&S===w?_[S][z]=I:_[S][z]=I.clone().lerp(R,z/L)}for(let S=0;S<w;S++)for(let I=0;I<2*(w-S)-1;I++){const R=Math.floor(I/2);I%2===0?(d(_[S][R+1]),d(_[S+1][R]),d(_[S][R])):(d(_[S][R+1]),d(_[S+1][R+1]),d(_[S+1][R]))}}function c(v){const M=new C;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(v),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function h(){const v=new C;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const y=m(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;a.push(y,1-E)}p(),u()}function u(){for(let v=0;v<a.length;v+=6){const M=a[v+0],y=a[v+2],E=a[v+4],w=Math.max(M,y,E),_=Math.min(M,y,E);w>.9&&_<.1&&(M<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,M){const y=v*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function p(){const v=new C,M=new C,y=new C,E=new C,w=new st,_=new st,S=new st;for(let I=0,R=0;I<s.length;I+=9,R+=6){v.set(s[I+0],s[I+1],s[I+2]),M.set(s[I+3],s[I+4],s[I+5]),y.set(s[I+6],s[I+7],s[I+8]),w.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),S.set(a[R+4],a[R+5]),E.copy(v).add(M).add(y).divideScalar(3);const L=m(E);x(w,R+0,v,L),x(_,R+2,M,L),x(S,R+4,y,L)}}function x(v,M,y,E){E<0&&v.x===1&&(a[M]=v.x-1),y.x===0&&y.z===0&&(a[M]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.vertices,t.indices,t.radius,t.detail)}}class kl extends qn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kl(t.radius,t.detail)}}const Ka=new C,Qa=new C,Nc=new C,ja=new Ci;class xp extends jt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),s=Math.cos(ps*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:m,c:g}=ja;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ja.getNormal(Nc),u[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const M=(v+1)%3,y=u[v],E=u[M],w=ja[h[v]],_=ja[h[M]],S=`${y}_${E}`,I=`${E}_${y}`,R=d.get(I);R?(Nc.dot(R.normal)<=s&&(f.push(w.x,w.y,w.z),f.push(_.x,_.y,_.z)),d.set(I,null)):d.has(S)||d.set(S,{index0:c[v],index1:c[M],normal:Nc.clone()})}}for(const p of d.values())if(p){const{index0:x,index1:m}=p;Ka.fromBufferAttribute(o,x),Qa.fromBufferAttribute(o,m),f.push(Ka.x,Ka.y,Ka.z),f.push(Qa.x,Qa.y,Qa.z)}this.setAttribute("position",new Lt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new C,n=[],s=[],a=[],o=new C,l=new Kt;for(let f=0;f<=t;f++){const p=f/t;n[f]=this.getTangentAt(p,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Jt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Jt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Gl extends rn{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _p extends Gl{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yh(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+i*o}}}const xd=new C,_d=new C,Uc=new Yh,Fc=new Yh,Oc=new Yh;class vp extends rn{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){const i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(_d.subVectors(n[0],n[1]).add(n[0]),c=_d);const u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(xd.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=xd),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Uc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),Fc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),Oc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Uc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Fc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Oc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Uc.calc(l),Fc.calc(l),Oc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vd(r,t,e,i,n){const s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function Ng(r,t){const e=1-r;return e*e*t}function Ug(r,t){return 2*(1-r)*r*t}function Fg(r,t){return r*r*t}function Vr(r,t,e,i){return Ng(r,t)+Ug(r,e)+Fg(r,i)}function Og(r,t){const e=1-r;return e*e*e*t}function Bg(r,t){const e=1-r;return 3*e*e*r*t}function zg(r,t){return 3*(1-r)*r*r*t}function kg(r,t){return r*r*r*t}function Hr(r,t,e,i,n){return Og(r,t)+Bg(r,e)+zg(r,i)+kg(r,n)}class Zh extends rn{constructor(t=new st,e=new st,i=new st,n=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new st){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Hr(t,n.x,s.x,a.x,o.x),Hr(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yp extends rn{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Hr(t,n.x,s.x,a.x,o.x),Hr(t,n.y,s.y,a.y,o.y),Hr(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $h extends rn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mp extends rn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends rn{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Vr(t,n.x,s.x,a.x),Vr(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends rn{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Vr(t,n.x,s.x,a.x),Vr(t,n.y,s.y,a.y),Vr(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(vd(o,l.x,c.x,h.x,u.x),vd(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new st().fromArray(n))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:_p,CatmullRomCurve3:vp,CubicBezierCurve:Zh,CubicBezierCurve3:yp,EllipseCurve:Gl,LineCurve:$h,LineCurve3:Mp,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:Kh,SplineCurve:Qh});class Sp extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new cl[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class ia extends Sp{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new $h(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new Jh(this.currentPoint.clone(),new st(t,e),new st(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){const o=new Zh(this.currentPoint.clone(),new st(t,e),new st(i,n),new st(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Qh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){const c=new Gl(t,e,i,n,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class dr extends ia{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new ia().fromJSON(n))}return this}}function Gg(r,t,e=2){const i=t&&t.length,n=i?t[0]*e:r.length;let s=bp(r,0,n,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=qg(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let h=o,u=l;for(let d=e;d<n;d+=e){const f=r[d],p=r[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return na(s,a,e,o,l,c,0),a}function bp(r,t,e,i,n){let s;if(n===nx(r,t,e,i)>0)for(let a=t;a<e;a+=i)s=yd(a/i|0,r[a],r[a+1],s);else for(let a=e-i;a>=t;a-=i)s=yd(a/i|0,r[a],r[a+1],s);return s&&rr(s,s.next)&&(ra(s),s=s.next),s}function Ss(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(rr(e,e.next)||Le(e.prev,e,e.next)===0)){if(ra(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function na(r,t,e,i,n,s,a){if(!r)return;!a&&s&&Kg(r,i,n,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Hg(r,i,n,s):Vg(r)){t.push(l.i,r.i,c.i),ra(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Wg(Ss(r),t),na(r,t,e,i,n,s,2)):a===2&&Xg(r,t,e,i,n,s):na(Ss(r),t,e,i,n,s,1);break}}}function Vg(r){const t=r.prev,e=r,i=r.next;if(Le(t,e,i)>=0)return!1;const n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,s,a),u=Math.min(o,l,c),d=Math.max(n,s,a),f=Math.max(o,l,c);let p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Lr(n,o,s,l,a,c,p.x,p.y)&&Le(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Hg(r,t,e,i){const n=r.prev,s=r,a=r.next;if(Le(n,s,a)>=0)return!1;const o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),g=lh(f,p,t,e,i),v=lh(x,m,t,e,i);let M=r.prevZ,y=r.nextZ;for(;M&&M.z>=g&&y&&y.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==n&&M!==a&&Lr(o,h,l,u,c,d,M.x,M.y)&&Le(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Lr(o,h,l,u,c,d,y.x,y.y)&&Le(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==n&&M!==a&&Lr(o,h,l,u,c,d,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Lr(o,h,l,u,c,d,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wg(r,t){let e=r;do{const i=e.prev,n=e.next.next;!rr(i,n)&&Tp(i,e,e.next,n)&&sa(i,n)&&sa(n,i)&&(t.push(i.i,e.i,n.i),ra(e),ra(e.next),e=r=n),e=e.next}while(e!==r);return Ss(e)}function Xg(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&tx(a,o)){let l=Ep(a,o);a=Ss(a,a.next),l=Ss(l,l.next),na(a,t,e,i,n,s,0),na(l,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function qg(r,t,e,i){const n=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*i,l=s<a-1?t[s+1]*i:r.length,c=bp(r,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(jg(c))}n.sort(Yg);for(let s=0;s<n.length;s++)e=Zg(n[s],e);return e}function Yg(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Zg(r,t){const e=$g(r,t);if(!e)return t;const i=Ep(e,r);return Ss(i,i.next),Ss(e,e.next)}function $g(r,t){let e=t;const i=r.x,n=r.y;let s=-1/0,a;if(rr(r,e))return e;do{if(rr(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&wp(n<c?i:s,n,l,c,n<c?s:i,n,e.x,e.y)){const u=Math.abs(n-e.y)/(i-e.x);sa(e,r)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Jg(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Jg(r,t){return Le(r.prev,r,t.prev)<0&&Le(t.next,r,r.next)<0}function Kg(r,t,e,i){let n=r;do n.z===0&&(n.z=lh(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Qg(n)}function Qg(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,e*=2}while(t>1);return r}function lh(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function jg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function wp(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function Lr(r,t,e,i,n,s,a,o){return!(r===a&&t===o)&&wp(r,t,e,i,n,s,a,o)}function tx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!ex(r,t)&&(sa(r,t)&&sa(t,r)&&ix(r,t)&&(Le(r.prev,r,t.prev)||Le(r,t.prev,t))||rr(r,t)&&Le(r.prev,r,r.next)>0&&Le(t.prev,t,t.next)>0)}function Le(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function rr(r,t){return r.x===t.x&&r.y===t.y}function Tp(r,t,e,i){const n=eo(Le(r,t,e)),s=eo(Le(r,t,i)),a=eo(Le(e,i,r)),o=eo(Le(e,i,t));return!!(n!==s&&a!==o||n===0&&to(r,e,t)||s===0&&to(r,i,t)||a===0&&to(e,r,i)||o===0&&to(e,t,i))}function to(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function eo(r){return r>0?1:r<0?-1:0}function ex(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Tp(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function sa(r,t){return Le(r.prev,r,r.next)<0?Le(r,t,r.next)>=0&&Le(r,r.prev,t)>=0:Le(r,t,r.prev)<0||Le(r,r.next,t)<0}function ix(r,t){let e=r,i=!1;const n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Ep(r,t){const e=ch(r.i,r.x,r.y),i=ch(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function yd(r,t,e,i){const n=ch(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ra(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ch(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nx(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}class sx{static triangulate(t,e,i=2){return Gg(t,e,i)}}class Qi{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return Qi.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];Md(t),Sd(i,t);let a=t.length;e.forEach(Md);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Sd(i,e[l]);const o=sx.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Md(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Sd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class ga extends jt{constructor(t=new dr([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Lt(n,3)),this.setAttribute("uv",new Lt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:rx;let M,y=!1,E,w,_,S;if(g){M=g.getSpacedPoints(h),y=!0,d=!1;const rt=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,rt),w=new C,_=new C,S=new C}d||(m=0,f=0,p=0,x=0);const I=o.extractPoints(c);let R=I.shape;const L=I.holes;if(!Qi.isClockWise(R)){R=R.reverse();for(let rt=0,ut=L.length;rt<ut;rt++){const ht=L[rt];Qi.isClockWise(ht)&&(L[rt]=ht.reverse())}}function Y(rt){const ht=10000000000000001e-36;let Pt=rt[0];for(let mt=1;mt<=rt.length;mt++){const ee=mt%rt.length,zt=rt[ee],se=zt.x-Pt.x,oe=zt.y-Pt.y,pe=se*se+oe*oe,F=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(Pt.x),Math.abs(Pt.y)),Ue=ht*F*F;if(pe<=Ue){rt.splice(ee,1),mt--;continue}Pt=zt}}Y(R),L.forEach(Y);const D=L.length,k=R;for(let rt=0;rt<D;rt++){const ut=L[rt];R=R.concat(ut)}function J(rt,ut,ht){return ut||Vt("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ut,ht)}const B=R.length;function et(rt,ut,ht){let Pt,mt,ee;const zt=rt.x-ut.x,se=rt.y-ut.y,oe=ht.x-rt.x,pe=ht.y-rt.y,F=zt*zt+se*se,Ue=zt*pe-se*oe;if(Math.abs(Ue)>Number.EPSILON){const ae=Math.sqrt(F),ve=Math.sqrt(oe*oe+pe*pe),pt=ut.x-se/ae,we=ut.y+zt/ae,Xt=ht.x-pe/ve,$t=ht.y+oe/ve,P=((Xt-pt)*pe-($t-we)*oe)/(zt*pe-se*oe);Pt=pt+zt*P-rt.x,mt=we+se*P-rt.y;const b=Pt*Pt+mt*mt;if(b<=2)return new st(Pt,mt);ee=Math.sqrt(b/2)}else{let ae=!1;zt>Number.EPSILON?oe>Number.EPSILON&&(ae=!0):zt<-Number.EPSILON?oe<-Number.EPSILON&&(ae=!0):Math.sign(se)===Math.sign(pe)&&(ae=!0),ae?(Pt=-se,mt=zt,ee=Math.sqrt(F)):(Pt=zt,mt=se,ee=Math.sqrt(F/2))}return new st(Pt/ee,mt/ee)}const q=[];for(let rt=0,ut=k.length,ht=ut-1,Pt=rt+1;rt<ut;rt++,ht++,Pt++)ht===ut&&(ht=0),Pt===ut&&(Pt=0),q[rt]=et(k[rt],k[ht],k[Pt]);const j=[];let it,At=q.concat();for(let rt=0,ut=D;rt<ut;rt++){const ht=L[rt];it=[];for(let Pt=0,mt=ht.length,ee=mt-1,zt=Pt+1;Pt<mt;Pt++,ee++,zt++)ee===mt&&(ee=0),zt===mt&&(zt=0),it[Pt]=et(ht[Pt],ht[ee],ht[zt]);j.push(it),At=At.concat(it)}let Dt;if(m===0)Dt=Qi.triangulateShape(k,L);else{const rt=[],ut=[];for(let ht=0;ht<m;ht++){const Pt=ht/m,mt=f*Math.cos(Pt*Math.PI/2),ee=p*Math.sin(Pt*Math.PI/2)+x;for(let zt=0,se=k.length;zt<se;zt++){const oe=J(k[zt],q[zt],ee);Wt(oe.x,oe.y,-mt),Pt===0&&rt.push(oe)}for(let zt=0,se=D;zt<se;zt++){const oe=L[zt];it=j[zt];const pe=[];for(let F=0,Ue=oe.length;F<Ue;F++){const ae=J(oe[F],it[F],ee);Wt(ae.x,ae.y,-mt),Pt===0&&pe.push(ae)}Pt===0&&ut.push(pe)}}Dt=Qi.triangulateShape(rt,ut)}const K=Dt.length,Mt=p+x;for(let rt=0;rt<B;rt++){const ut=d?J(R[rt],At[rt],Mt):R[rt];y?(_.copy(E.normals[0]).multiplyScalar(ut.x),w.copy(E.binormals[0]).multiplyScalar(ut.y),S.copy(M[0]).add(_).add(w),Wt(S.x,S.y,S.z)):Wt(ut.x,ut.y,0)}for(let rt=1;rt<=h;rt++)for(let ut=0;ut<B;ut++){const ht=d?J(R[ut],At[ut],Mt):R[ut];y?(_.copy(E.normals[rt]).multiplyScalar(ht.x),w.copy(E.binormals[rt]).multiplyScalar(ht.y),S.copy(M[rt]).add(_).add(w),Wt(S.x,S.y,S.z)):Wt(ht.x,ht.y,u/h*rt)}for(let rt=m-1;rt>=0;rt--){const ut=rt/m,ht=f*Math.cos(ut*Math.PI/2),Pt=p*Math.sin(ut*Math.PI/2)+x;for(let mt=0,ee=k.length;mt<ee;mt++){const zt=J(k[mt],q[mt],Pt);Wt(zt.x,zt.y,u+ht)}for(let mt=0,ee=L.length;mt<ee;mt++){const zt=L[mt];it=j[mt];for(let se=0,oe=zt.length;se<oe;se++){const pe=J(zt[se],it[se],Pt);y?Wt(pe.x,pe.y+M[h-1].y,M[h-1].x+ht):Wt(pe.x,pe.y,u+ht)}}}It(),Ht();function It(){const rt=n.length/3;if(d){let ut=0,ht=B*ut;for(let Pt=0;Pt<K;Pt++){const mt=Dt[Pt];Ee(mt[2]+ht,mt[1]+ht,mt[0]+ht)}ut=h+m*2,ht=B*ut;for(let Pt=0;Pt<K;Pt++){const mt=Dt[Pt];Ee(mt[0]+ht,mt[1]+ht,mt[2]+ht)}}else{for(let ut=0;ut<K;ut++){const ht=Dt[ut];Ee(ht[2],ht[1],ht[0])}for(let ut=0;ut<K;ut++){const ht=Dt[ut];Ee(ht[0]+B*h,ht[1]+B*h,ht[2]+B*h)}}i.addGroup(rt,n.length/3-rt,0)}function Ht(){const rt=n.length/3;let ut=0;St(k,ut),ut+=k.length;for(let ht=0,Pt=L.length;ht<Pt;ht++){const mt=L[ht];St(mt,ut),ut+=mt.length}i.addGroup(rt,n.length/3-rt,1)}function St(rt,ut){let ht=rt.length;for(;--ht>=0;){const Pt=ht;let mt=ht-1;mt<0&&(mt=rt.length-1);for(let ee=0,zt=h+m*2;ee<zt;ee++){const se=B*ee,oe=B*(ee+1),pe=ut+Pt+se,F=ut+mt+se,Ue=ut+mt+oe,ae=ut+Pt+oe;qt(pe,F,Ue,ae)}}}function Wt(rt,ut,ht){l.push(rt),l.push(ut),l.push(ht)}function Ee(rt,ut,ht){ne(rt),ne(ut),ne(ht);const Pt=n.length/3,mt=v.generateTopUV(i,n,Pt-3,Pt-2,Pt-1);te(mt[0]),te(mt[1]),te(mt[2])}function qt(rt,ut,ht,Pt){ne(rt),ne(ut),ne(Pt),ne(ut),ne(ht),ne(Pt);const mt=n.length/3,ee=v.generateSideWallUV(i,n,mt-6,mt-3,mt-2,mt-1);te(ee[0]),te(ee[1]),te(ee[3]),te(ee[1]),te(ee[2]),te(ee[3])}function ne(rt){n.push(l[rt*3+0]),n.push(l[rt*3+1]),n.push(l[rt*3+2])}function te(rt){s.push(rt.x),s.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ax(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new cl[n.type]().fromJSON(n)),new ga(i,t.options)}}const rx={generateTopUV:function(r,t,e,i,n){const s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new st(s,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(r,t,e,i,n,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-u),new st(d,1-p),new st(x,1-g)]:[new st(o,1-l),new st(h,1-u),new st(f,1-p),new st(m,1-g)]}};function ax(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Vl extends qn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vl(t.radius,t.detail)}}class Hl extends jt{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Jt(n,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new st,f=new C,p=new C,x=new C;let m=0,g=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=e;v++){const M=i+v*h*n,y=Math.sin(M),E=Math.cos(M);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*E,a.push(u.x,u.y,u.z),d.x=v/e,d.y=w/(t.length-1),o.push(d.x,d.y);const _=l[3*w+0]*y,S=l[3*w+1],I=l[3*w+0]*E;c.push(_,S,I)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const y=M+v*t.length,E=y,w=y+t.length,_=y+t.length+1,S=y+1;s.push(E,w,S),s.push(_,S,w)}this.setIndex(s),this.setAttribute("position",new Lt(a,3)),this.setAttribute("uv",new Lt(o,2)),this.setAttribute("normal",new Lt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.points,t.segments,t.phiStart,t.phiLength)}}class xa extends qn{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xa(t.radius,t.detail)}}class pi extends jt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const v=g*d-a;for(let M=0;M<c;M++){const y=M*u-s;p.push(y,-v,0),x.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const M=v+c*g,y=v+c*(g+1),E=v+1+c*(g+1),w=v+1+c*g;f.push(M,y,w),f.push(y,E,w)}this.setIndex(f),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wl extends jt{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/n,f=new C,p=new st;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){const g=s+m/i*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<n;x++){const m=x*(i+1);for(let g=0;g<i;g++){const v=g+m,M=v,y=v+i+1,E=v+i+2,w=v+1;o.push(M,y,w),o.push(y,E,w)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xl extends jt{constructor(t=new dr([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Lt(n,3)),this.setAttribute("normal",new Lt(s,3)),this.setAttribute("uv",new Lt(a,2));function c(h){const u=n.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;Qi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const v=p[m];Qi.isClockWise(v)===!0&&(p[m]=v.reverse())}const x=Qi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const v=p[m];f=f.concat(v)}for(let m=0,g=f.length;m<g;m++){const v=f[m];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){const v=x[m],M=v[0]+u,y=v[1]+u,E=v[2]+u;i.push(M,y,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ox(e,t)}static fromJSON(t,e){const i=[];for(let n=0,s=t.shapes.length;n<s;n++){const a=e[t.shapes[n]];i.push(a)}return new Xl(i,t.curveSegments)}}function ox(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,i=r.length;e<i;e++){const n=r[e];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t}class ji extends jt{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){const v=[],M=g/i,y=a+M*o,E=t*Math.cos(y),w=Math.sqrt(t*t-E*E);let _=0;g===0&&a===0?_=.5/e:g===i&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const I=S/e,R=n+I*s;u.x=-w*Math.cos(R),u.y=E,u.z=w*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(I+_,1-M),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){const M=h[g][v+1],y=h[g][v],E=h[g+1][v],w=h[g+1][v+1];(g!==0||a>0)&&f.push(M,y,w),(g!==i-1||l<Math.PI)&&f.push(y,E,w)}this.setIndex(f),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ql extends qn{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ql(t.radius,t.detail)}}class An extends jt{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],u=[],d=new C,f=new C,p=new C;for(let x=0;x<=i;x++){const m=a+x/i*o;for(let g=0;g<=n;g++){const v=g/n*s;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){const g=(n+1)*x+m-1,v=(n+1)*(x-1)+m-1,M=(n+1)*(x-1)+m,y=(n+1)*x+m;l.push(g,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Yl extends jt{constructor(t=1,e=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],c=[],h=[],u=new C,d=new C,f=new C,p=new C,x=new C,m=new C,g=new C;for(let M=0;M<=i;++M){const y=M/i*s*Math.PI*2;v(y,s,a,t,f),v(y+.01,s,a,t,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let E=0;E<=n;++E){const w=E/n*Math.PI*2,_=-e*Math.cos(w),S=e*Math.sin(w);u.x=f.x+(_*g.x+S*x.x),u.y=f.y+(_*g.y+S*x.y),u.z=f.z+(_*g.z+S*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(M/i),h.push(E/n)}}for(let M=1;M<=i;M++)for(let y=1;y<=n;y++){const E=(n+1)*(M-1)+(y-1),w=(n+1)*M+(y-1),_=(n+1)*M+y,S=(n+1)*(M-1)+y;o.push(E,w,S),o.push(w,_,S)}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2));function v(M,y,E,w,_){const S=Math.cos(M),I=Math.sin(M),R=E/y*M,L=Math.cos(R);_.x=w*(2+L)*.5*S,_.y=w*(2+L)*I*.5,_.z=w*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Zl extends jt{constructor(t=new Kh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new st;let h=new C;const u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2));function x(){for(let M=0;M<e;M++)m(M);m(s===!1?e:0),v(),g()}function m(M){h=t.getPointAt(M/e,h);const y=a.normals[M],E=a.binormals[M];for(let w=0;w<=n;w++){const _=w/n*Math.PI*2,S=Math.sin(_),I=-Math.cos(_);l.x=I*y.x+S*E.x,l.y=I*y.y+S*E.y,l.z=I*y.z+S*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=e;M++)for(let y=1;y<=n;y++){const E=(n+1)*(M-1)+(y-1),w=(n+1)*M+(y-1),_=(n+1)*M+y,S=(n+1)*(M-1)+y;p.push(E,w,S),p.push(w,_,S)}}function v(){for(let M=0;M<=e;M++)for(let y=0;y<=n;y++)c.x=M/e,c.y=y/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Zl(new cl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ap extends jt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,n=new C,s=new C;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let p=d,x=d+f;p<x;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),v=o.getX(p+(m+1)%3);n.fromBufferAttribute(a,g),s.fromBufferAttribute(a,v),bd(n,s,i)===!0&&(e.push(n.x,n.y,n.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),bd(n,s,i)===!0&&(e.push(n.x,n.y,n.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Lt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function bd(r,t,e){const i=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,n=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(i)===!0||e.has(n)===!0?!1:(e.add(i),e.add(n),!0)}var wd=Object.freeze({__proto__:null,BoxGeometry:Gt,CapsuleGeometry:pa,CircleGeometry:ur,ConeGeometry:ma,CylinderGeometry:Xe,DodecahedronGeometry:kl,EdgesGeometry:xp,ExtrudeGeometry:ga,IcosahedronGeometry:Vl,LatheGeometry:Hl,OctahedronGeometry:xa,PlaneGeometry:pi,PolyhedronGeometry:qn,RingGeometry:Wl,ShapeGeometry:Xl,SphereGeometry:ji,TetrahedronGeometry:ql,TorusGeometry:An,TorusKnotGeometry:Yl,TubeGeometry:Zl,WireframeGeometry:Ap});class Cp extends si{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new vt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function ar(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];if(Td(n))n.isRenderTargetTexture?(bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Td(n[0])){const s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function _i(r){const t={};for(let e=0;e<r.length;e++){const i=ar(r[e]);for(const n in i)t[n]=i[n]}return t}function Td(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function lx(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Rp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const or={clone:ar,merge:_i};var cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=lx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new vt().setHex(n.value);break;case"v2":this.uniforms[i].value=new st().fromArray(n.value);break;case"v3":this.uniforms[i].value=new C().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Te().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Qt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Kt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class $l extends ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ye extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jh extends ye{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Tn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Tn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pp extends si{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new vt(16777215),this.specular=new vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=la,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ip extends si{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new vt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Lp extends si{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Dp extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=la,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tu extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eu extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Np extends si{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new vt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pn,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Up extends ri{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Zi(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ks(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Fp(r){function t(n,s){return r[n]-r[s]}const e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function hh(r,t,e){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=e[s]*t;for(let l=0;l!==t;++l)n[a++]=r[o+l]}return n}function Op(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push(...a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}function ux(r,t,e,i,n=30){const s=r.clone();s.name=t;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*n;if(!(p<e||p>=i)){u.push(c.times[f]);for(let x=0;x<h;++x)d.push(c.values[f*h+x])}}u.length!==0&&(c.times=Zi(u,c.times.constructor),c.values=Zi(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function dx(r,t=0,e=r,i=30){i<=0&&(i=30);const n=e.tracks.length,s=t/i;for(let a=0;a<n;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let x;if(s<=o.times[0]){const g=h,v=u-h;x=o.values.slice(g,v)}else if(s>=o.times[p]){const g=p*u+h,v=g+u-h;x=o.values.slice(g,v)}else{const g=o.createInterpolant();g.evaluate(s),x=g.resultBuffer.slice()}l==="quaternion"&&new Si().fromArray(x).normalize().conjugate().toArray(x);const m=c.times.length;for(let g=0;g<m;++g){const v=g*f+d;if(l==="quaternion")Si.multiplyQuaternionsFlat(c.values,v,x,0,c.values,v);else{const M=f-d*2;for(let y=0;y<M;++y)c.values[v+y]-=x[y]}}}return r.blendMode=Uh,r}class fx{static convertArray(t,e){return Zi(t,e)}static isTypedArray(t){return sp(t)}static hasTangents(t){return Ks(t)}static getKeyframeOrder(t){return Fp(t)}static sortedArray(t,e,i){return hh(t,e,i)}static flattenJSON(t,e,i,n){Op(t,e,i,n)}static subclip(t,e,i,n,s=30){return ux(t,e,i,n,s)}static makeClipAdditive(t,e=0,i=t,n=30){return dx(t,e,i,n)}}class fr{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let a;i:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break e}a=e.length;break i}if(!(t>=s)){const o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break e}a=i,i=0;break i}break t}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Bp extends fr{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:us,endingEnd:us}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case ds:s=t,o=2*e-i;break;case Jr:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ds:a=t,l=2*i-e;break;case Jr:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let E=0;E!==o;++E)s[E]=g*a[h+E]+v*a[c+E]+M*a[l+E]+y*a[u+E];return s}}class iu extends fr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class zp extends fr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class kp extends fr{interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){const p=(i-e)/(n-e),x=1-p;for(let m=0;m!==o;++m)s[m]=a[c+m]*x+a[l+m]*p;return s}const d=o*2,f=t-1;for(let p=0;p!==o;++p){const x=a[c+p],m=a[l+p],g=f*d+p*2,v=u[g],M=u[g+1],y=t*d+p*2,E=h[y],w=h[y+1],_=mx(i,e,v,E,n);s[p]=Gp(_,x,M,w,m)}return s}}function Gp(r,t,e,i,n){const s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function px(r,t,e,i,n){const s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function mx(r,t,e,i,n){let s=(r-t)/(n-t);for(let a=0;a<8;a++){const o=Gp(s,t,e,i,n)-r;if(Math.abs(o)<1e-10)break;const l=px(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class Hi{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zi(e,this.TimeBufferType),this.values=Zi(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Zi(t.times,Array),values:Zi(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Ks(t.settings)&&(i.settings={inTangents:Zi(t.settings.inTangents,Array),outTangents:Zi(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new zp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new iu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new kp(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case al:e=this.InterpolantFactoryMethodLinear;break;case xo:e=this.InterpolantFactoryMethodSmooth;break;case rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return bt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return al;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Ks(this.settings)&&(Ed(this.settings.inTangents,t),Ed(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Ks(this.settings)&&(Ad(this.settings.inTangents,t),Ad(this.settings.outTangents,t))}return this}trim(t,e){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&sp(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===xo,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){const x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Ks(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}}function Ed(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function Ad(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Hi.prototype.ValueTypeName="";Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=al;class Ts extends Hi{constructor(t,e,i){super(t,e,i)}}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=$r;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class nu extends Hi{constructor(t,e,i,n){super(t,e,i,n)}}nu.prototype.ValueTypeName="color";class Jl extends Hi{constructor(t,e,i,n){super(t,e,i,n)}}Jl.prototype.ValueTypeName="number";class Vp extends fr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e);let c=t*o;for(let h=c+o;c!==h;c+=4)Si.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Kl extends Hi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Vp(this.times,this.values,this.getValueSize(),t)}}Kl.prototype.ValueTypeName="quaternion";Kl.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends Hi{constructor(t,e,i){super(t,e,i)}}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=$r;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class su extends Hi{constructor(t,e,i,n){super(t,e,i,n)}}su.prototype.ValueTypeName="vector";class aa{constructor(t="",e=-1,i=[],n=Cl){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(xx(i[a]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,a=i.length;s!==a;++s)e.push(Hi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Fp(l);l=hh(l,1,h),c=hh(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Jl(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function gx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jl;case"vector":case"vector2":case"vector3":case"vector4":return su;case"color":return nu;case"quaternion":return Kl;case"bool":case"boolean":return Ts;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function xx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=gx(r.type);if(r.times===void 0){const i=[],n=[];Op(r.keys,i,n,"value"),r.times=i,r.values=n}let e;return t.parse!==void 0?e=t.parse(r):e=new t(r.name,r.times,r.values,r.interpolation),Ks(r.settings)&&(e.settings={inTangents:Zi(r.settings.inTangents,Float32Array),outTangents:Zi(r.settings.outTangents,Float32Array)}),e}const un={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(Cd(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!Cd(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Cd(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class ru{constructor(t,e,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Hp=new ru;class Li{constructor(t){this.manager=t!==void 0?t:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Li.DEFAULT_MATERIAL_NAME="__DEFAULT";const vn={};class _x extends Error{constructor(t,e){super(t),this.response=e}}class Ln extends Li{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=un.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(vn[t]!==void 0){vn[t].push({onLoad:e,onProgress:i,onError:n});return}vn[t]=[],vn[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&bt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=vn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let x=0;const m=new ReadableStream({start(g){v();function v(){u.read().then(({done:M,value:y})=>{if(M)g.close();else{x+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let w=0,_=h.length;w<_;w++){const S=h[w];S.onProgress&&S.onProgress(E)}g.enqueue(y),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new _x(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{un.add(`file:${t}`,c);const h=vn[t];delete vn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=vn[t];if(h===void 0)throw this.manager.itemError(t),c;delete vn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vx extends Li{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new Ln(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){n?n(l):Vt(l),s.manager.itemError(t)}},i,n)}parse(t){const e=[];for(let i=0;i<t.length;i++){const n=aa.parse(t[i]);e.push(n)}return e}}class yx extends Li{constructor(t){super(t)}load(t,e,i,n){const s=this,a=[],o=new zl,l=new Ln(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(u){l.load(t[u],function(d){const f=s.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=De),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},i,n)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){const d=s.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+x]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=De),o.format=d.format,o.needsUpdate=!0,e&&e(o)},i,n);return o}}const Vs=new WeakMap;class oa extends Li{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=un.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=Vs.get(a);u===void 0&&(u=[],Vs.set(a,u)),u.push({onLoad:e,onError:n})}return a}const o=jr("img");function l(){h(),e&&e(this);const u=Vs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Vs.delete(this),s.manager.itemEnd(t)}function c(u){h(),n&&n(u),un.remove(`image:${t}`);const d=Vs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}Vs.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),un.add(`image:${t}`,o),s.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Mx extends Li{constructor(t){super(t)}load(t,e,i,n){const s=new fa;s.colorSpace=We;const a=new oa(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,n)}for(let c=0;c<t.length;++c)l(c);return s}}class Sx extends Li{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new ki,o=new Ln(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(t,function(l){let c;try{c=s.parse(l)}catch(h){n!==void 0?n(h):Vt(h);return}s._applyTexData(a,c),e&&e(a,c)},i,n),a}createDataTexture(t){const e=new ki;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:Ri,t.wrapT=e.wrapT!==void 0?e.wrapT:Ri,t.magFilter=e.magFilter!==void 0?e.magFilter:De,t.minFilter=e.minFilter!==void 0?e.minFilter:De,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Ki),e.mipmapCount===1&&(t.minFilter=De),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class bx extends Li{constructor(t){super(t)}load(t,e,i,n){const s=new Ne,a=new oa(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class Yn extends fe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class au extends Yn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Bc=new Kt,Rd=new C,Pd=new C;class Ql{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Rd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rd),Pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Bc,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===_s||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const io=new C,no=new Si,on=new C;class jl extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(io,no,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,no,on.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(io,no,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,no,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new C,Id=new st,Ld=new st;class ti extends jl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Id,Ld),e.subVectors(Ld,Id)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class wx extends Ql{constructor(){super(new ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=nr*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class ou extends Yn{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new wx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Tx extends Ql{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0}}class bs extends Yn{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Tx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class _a extends jl{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ex extends Ql{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wr extends Yn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Ex}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class lu extends Yn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wp extends Yn{constructor(t,e,i=10,n=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class cu{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const i=t.x,n=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*n),e.addScaledVector(a[2],.488603*s),e.addScaledVector(a[3],.488603*i),e.addScaledVector(a[4],1.092548*(i*n)),e.addScaledVector(a[5],1.092548*(n*s)),e.addScaledVector(a[6],.315392*(3*s*s-1)),e.addScaledVector(a[7],1.092548*(i*s)),e.addScaledVector(a[8],.546274*(i*i-n*n)),e}getIrradianceAt(t,e){const i=t.x,n=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*n),e.addScaledVector(a[2],2*.511664*s),e.addScaledVector(a[3],2*.511664*i),e.addScaledVector(a[4],2*.429043*i*n),e.addScaledVector(a[5],2*.429043*n*s),e.addScaledVector(a[6],.743125*s*s-.247708),e.addScaledVector(a[7],2*.429043*i*s),e.addScaledVector(a[8],.429043*(i*i-n*n)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(t.coefficients[i],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let i=0;i<9;i++)this.coefficients[i].lerp(t.coefficients[i],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(t,e+n*3);return this}toArray(t=[],e=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(t,e+n*3);return t}static getBasisAt(t,e){const i=t.x,n=t.y,s=t.z;e[0]=.282095,e[1]=.488603*n,e[2]=.488603*s,e[3]=.488603*i,e[4]=1.092548*i*n,e[5]=1.092548*n*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*i*s,e[8]=.546274*(i*i-n*n)}}class Xp extends Yn{constructor(t=new cu,e=1){super(void 0,e),this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}const Dd={};class tc extends Li{constructor(t){super(t),this.textures={}}load(t,e,i,n){const s=this,a=new Ln(s.manager);a.setPriority(s.priority),a.setCache(s.cache),a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){n?n(l):Vt(l),s.manager.itemError(t)}},i,n)}parse(t){const e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return tc.createMaterialFromType(t)}static createMaterialFromType(t){const i={ShadowMaterial:Cp,SpriteMaterial:Ji,RawShaderMaterial:$l,ShaderMaterial:ei,PointsMaterial:Ol,MeshPhysicalMaterial:jh,MeshStandardMaterial:ye,MeshPhongMaterial:Pp,MeshToonMaterial:Ip,MeshNormalMaterial:Lp,MeshLambertMaterial:Dp,MeshDepthMaterial:tu,MeshDistanceMaterial:eu,MeshBasicMaterial:Oe,MeshMatcapMaterial:Np,LineDashedMaterial:Up,LineBasicMaterial:ri,Material:si,...Dd}[t];let n;return i===void 0?(Tn(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),n=new si):n=new i,n}static registerMaterial(t,e){Dd[t]=e}}class uh{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class qp extends jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Yp extends Li{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new Ln(s.manager);a.setPriority(s.priority),a.setCache(s.cache),a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){n?n(l):Vt(l),s.manager.itemError(t)}},i,n)}parse(t){const e={},i={};function n(f,p){if(e[p]!==void 0)return e[p];const m=f.interleavedBuffers[p],g=s(f,m.buffer),v=Js(m.type,g),M=new Ul(v,m.stride);return M.uuid=m.uuid,m.usage!==void 0&&M.setUsage(m.usage),e[p]=M,M}function s(f,p){if(i[p]!==void 0)return i[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return i[p]=g,g}const a=t.isInstancedBufferGeometry?new qp:new jt,o=t.data.index;if(o!==void 0){const f=Js(o.type,o.array);a.setIndex(new be(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const m=n(t.data,p.data);x=new vs(m,p.itemSize,p.offset,p.normalized)}else{const m=Js(p.type,p.array),g=p.isInstancedBufferAttribute?sr:be;x=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),a.setAttribute(f,x)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let m=0,g=p.length;m<g;m++){const v=p[m];let M;if(v.isInterleavedBufferAttribute){const y=n(t.data,v.data);M=new vs(y,v.itemSize,v.offset,v.normalized)}else{const y=Js(v.type,v.array);M=new be(y,v.itemSize,v.normalized)}v.name!==void 0&&(M.name=v.name),v.usage!==void 0&&M.setUsage(v.usage),v.gpuType!==void 0&&(M.gpuType=v.gpuType),x.push(M)}a.morphAttributes[f]=x}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const x=u[f];a.addGroup(x.start,x.count,x.materialIndex)}const d=t.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new ii().fromJSON(d)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}const zc={};class Ax extends Li{constructor(t){super(t)}load(t,e,i,n){const s=this,a=this.path===""?uh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new Ln(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){n!==void 0&&n(u),Vt("ObjectLoader: Can't parse "+t+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+t)),Vt("ObjectLoader: Can't load "+t);return}s.parse(c,e)},i,n)}async loadAsync(t,e){const i=this,n=this.path===""?uh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||n;const s=new Ln(this.manager);s.setPriority(this.priority),s.setCache(this.cache),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(t,e);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await i.parseAsync(o)}parse(t,e){const i=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,n),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,s,l,o,i),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),n=this.parseGeometries(t.geometries,i),s=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,s),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,n,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){zc[t]=e}parseShapes(t){const e={};if(t!==void 0)for(let i=0,n=t.length;i<n;i++){const s=new dr().fromJSON(t[i]);e[s.uuid]=s}return e}parseSkeletons(t,e){const i={},n={};if(e.traverse(function(s){s.isBone&&(n[s.uuid]=s)}),t!==void 0)for(let s=0,a=t.length;s<a;s++){const o=new Fl().fromJSON(t[s],n);i[o.uuid]=o}return i}parseGeometries(t,e){const i={};if(t!==void 0){const n=new Yp;for(let s=0,a=t.length;s<a;s++){let o;const l=t[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in wd?o=wd[l.type].fromJSON(l,e):l.type in zc?o=zc[l.type].fromJSON(l,e):bt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(t,e){const i={},n={};if(t!==void 0){const s=new tc;s.setTextures(e);for(let a=0,o=t.length;a<o;a++){const l=t[a];i[l.uuid]===void 0&&(i[l.uuid]=s.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(t){const e={};if(t!==void 0)for(let i=0;i<t.length;i++){const n=t[i],s=aa.parse(n);e[s.uuid]=s}return e}parseImages(t,e){const i=this,n={};let s;function a(l){return l=i.manager.resolveURL(l),i.manager.itemStart(l),s.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(h)}else return l.data?{data:Js(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new ru(e);s=new oa(l),s.setPriority(this.priority),s.setCache(this.cache),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const u=t[c],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new ki(g.data,g.width,g.height)))}n[u.uuid]=new hn(f)}else{const f=o(u.url);n[u.uuid]=new hn(f)}}}return n}async parseImagesAsync(t){const e=this,i={};let n;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await n.loadAsync(l)}else return a.data?{data:Js(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){n=new oa(this.manager),n.setPriority(this.priority),n.setCache(this.cache),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const l=t[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=await s(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new ki(p.data,p.width,p.height)))}i[l.uuid]=new hn(h)}else{const h=await s(l.url);i[l.uuid]=new hn(h)}}}return i}parseTextures(t,e){function i(s,a){return typeof s=="number"?s:(bt("ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const n={};if(t!==void 0)for(let s=0,a=t.length;s<a;s++){const o=t[s];o.image===void 0&&bt('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&bt("ObjectLoader: Undefined image",o.image);const l=e[o.image],c=l.data;let h;Array.isArray(c)?(h=new fa,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ki:h=new Ne,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,Cx)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],Nd),h.wrapT=i(o.wrap[1],Nd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,Ud)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,Ud)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=o.mipmapsAutoUpdate),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),n[o.uuid]=h}return n}parseObject(t,e,i,n,s){let a;function o(d){return e[d]===void 0&&bt("ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,x=d.length;p<x;p++){const m=d[p];i[m]===void 0&&bt("ObjectLoader: Undefined material",m),f.push(i[m])}return f}return i[d]===void 0&&bt("ObjectLoader: Undefined material",d),i[d]}}function c(d){return n[d]===void 0&&bt("ObjectLoader: Undefined texture",d),n[d]}let h,u;switch(t.type){case"Scene":a=new Gh,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new vt(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Nl(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new ua(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new ti(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new _a(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new lu(t.color,t.intensity);break;case"DirectionalLight":a=new Wr(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new bs(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new Wp(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new ou(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"",t.map!==void 0&&(a.map=c(t.map));break;case"HemisphereLight":a=new au(t.color,t.groundColor,t.intensity);break;case"LightProbe":const d=new cu().fromArray(t.sh);a=new Xp(d,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),u=l(t.material),a=new dp(h,u),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),u=l(t.material),a=new xt(h,u);break;case"InstancedMesh":h=o(t.geometry),u=l(t.material);const f=t.count,p=t.instanceMatrix,x=t.instanceColor;a=new fp(h,u,f),a.instanceMatrix=new sr(new Float32Array(p.array),16),x!==void 0&&(a.instanceColor=new sr(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=o(t.geometry),u=l(t.material),a=new pp(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(m=>{let g=null,v=null;return m.boundingBox!==void 0&&(g=new Qe().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(v=new ii().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:v}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t.availableInstanceIds,a._availableGeometryIds=t.availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new ii().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new Qe().fromJSON(t.boundingBox));break;case"LOD":a=new up;break;case"Line":a=new In(o(t.geometry),l(t.material));break;case"LineLoop":a=new mp(o(t.geometry),l(t.material));break;case"LineSegments":a=new sn(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new Bl(o(t.geometry),l(t.material));break;case"Sprite":a=new cn(l(t.material)),t.center!==void 0&&a.center.fromArray(t.center);break;case"Group":a=new Pe;break;case"Bone":a=new Wh;break;default:a=new fe}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.pivot!==void 0&&(a.pivot=new C().fromArray(t.pivot)),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&(a.matrix.decompose(a.position,a.quaternion,a.scale),a.pivot!==null&&a.position.copy(a.pivot).applyMatrix4(a.matrix).sub(a.pivot))):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(a.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(a.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.mapType!==void 0&&(a.shadow.mapType=t.shadow.mapType),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const d=t.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],e,i,n,s))}if(t.animations!==void 0){const d=t.animations;for(let f=0;f<d.length;f++){const p=d[f];a.animations.push(s[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const d=t.levels;for(let f=0;f<d.length;f++){const p=d[f],x=a.getObjectByProperty("uuid",p.object);x!==void 0&&a.addLevel(x,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=e[i.skeleton];n===void 0?bt("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const i=e.target,n=t.getObjectByProperty("uuid",i);n!==void 0?e.target=n:e.target=new fe}})}}const Cx={UVMapping:Ml,CubeReflectionMapping:Cn,CubeRefractionMapping:ms,EquirectangularReflectionMapping:js,EquirectangularRefractionMapping:Ur},Nd={RepeatWrapping:gs,ClampToEdgeWrapping:Ri,MirroredRepeatWrapping:qr},Ud={NearestFilter:ke,NearestMipmapNearestFilter:Ch,NearestMipmapLinearFilter:$s,LinearFilter:De,LinearMipmapNearestFilter:Fr,LinearMipmapLinearFilter:Ki},kc=new WeakMap;class Rx extends Li{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&bt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&bt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=un.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{kc.has(a)===!0?(n&&n(kc.get(a)),s.manager.itemError(t),s.manager.itemEnd(t)):(e&&e(c),s.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return un.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),kc.set(l,c),un.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});un.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let so;class hu{static getContext(){return so===void 0&&(so=new(window.AudioContext||window.webkitAudioContext)),so}static setContext(t){so=t}}class Px extends Li{constructor(t){super(t)}load(t,e,i,n){const s=this,a=new Ln(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0),h=hu.getContext(),u=t+"#decode";s.manager.itemStart(u),h.decodeAudioData(c,function(d){e(d),s.manager.itemEnd(u)}).catch(function(d){o(d),s.manager.itemEnd(u)})}catch(c){o(c)}},i,n);function o(l){n?n(l):Vt(l),s.manager.itemError(t)}}}const Fd=new Kt,Od=new Kt,ns=new Kt;class Ix{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new ti,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new ti,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,ns.copy(t.projectionMatrix);const n=e.eyeSep/2,s=n*e.near/e.focus,a=e.near*Math.tan(ps*e.fov*.5)/e.zoom;let o,l;Od.elements[12]=-n,Fd.elements[12]=n,o=-a*e.aspect+s,l=a*e.aspect+s,ns.elements[0]=2*e.near/(l-o),ns.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ns),o=-a*e.aspect-s,l=a*e.aspect-s,ns.elements[0]=2*e.near/(l-o),ns.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ns)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Od),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(Fd),this.cameraR.matrixWorldNeedsUpdate=!0}}const Hs=-90,Ws=1;class hl extends fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ti(Hs,Ws,t,e);n.layers=this.layers,this.add(n);const s=new ti(Hs,Ws,t,e);s.layers=this.layers,this.add(s);const a=new ti(Hs,Ws,t,e);a.layers=this.layers,this.add(a);const o=new ti(Hs,Ws,t,e);o.layers=this.layers,this.add(o);const l=new ti(Hs,Ws,t,e);l.layers=this.layers,this.add(l);const c=new ti(Hs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Zp extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class uu{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Lx.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Lx(){this._document.hidden===!1&&this.reset()}const ss=new C,Gc=new Si,Dx=new C,rs=new C,as=new C;class Nx extends fe{constructor(){super(),this.type="AudioListener",this.context=hu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new uu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(ss,Gc,Dx),rs.set(0,0,-1).applyQuaternion(Gc),as.set(0,1,0).applyQuaternion(Gc),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ss.x,i),e.positionY.linearRampToValueAtTime(ss.y,i),e.positionZ.linearRampToValueAtTime(ss.z,i),e.forwardX.linearRampToValueAtTime(rs.x,i),e.forwardY.linearRampToValueAtTime(rs.y,i),e.forwardZ.linearRampToValueAtTime(rs.z,i),e.upX.linearRampToValueAtTime(as.x,i),e.upY.linearRampToValueAtTime(as.y,i),e.upZ.linearRampToValueAtTime(as.z,i)}else e.setPosition(ss.x,ss.y,ss.z),e.setOrientation(rs.x,rs.y,rs.z,as.x,as.y,as.z)}}class $p extends fe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){bt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(bt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(bt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const os=new C,Bd=new Si,Ux=new C,ls=new C;class Fx extends $p{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,i){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=i,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(os,Bd,Ux),ls.set(0,0,1).applyQuaternion(Bd);const e=this.panner;if(e.positionX){const i=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(os.x,i),e.positionY.linearRampToValueAtTime(os.y,i),e.positionZ.linearRampToValueAtTime(os.z,i),e.orientationX.linearRampToValueAtTime(ls.x,i),e.orientationY.linearRampToValueAtTime(ls.y,i),e.orientationZ.linearRampToValueAtTime(ls.z,i)}else e.setPosition(os.x,os.y,os.z),e.setOrientation(ls.x,ls.y,ls.z)}}class Ox{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let i=0;i<e.length;i++)t+=e[i];return t/e.length}}class Jp{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,a;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,s=t*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(i,n,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(i[l]!==i[l+e]){o.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,a=n;s!==a;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)t[e+a]=t[i+a]}_slerp(t,e,i,n){Si.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){const a=this._workIndex*s;Si.multiplyQuaternionsFlat(t,a,t,e,t,i),Si.slerpFlat(t,e,t,e,t,a,n)}_lerp(t,e,i,n,s){const a=1-n;for(let o=0;o!==s;++o){const l=e+o;t[l]=t[l]*a+t[i+o]*n}}_lerpAdditive(t,e,i,n,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[i+a]*n}}}const du="\\[\\]\\.:\\/",Bx=new RegExp("["+du+"]","g"),fu="[^"+du+"]",zx="[^"+du.replace("\\.","")+"]",kx=/((?:WC+[\/:])*)/.source.replace("WC",fu),Gx=/(WCOD+)?/.source.replace("WCOD",zx),Vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),Hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),Wx=new RegExp("^"+kx+Gx+Vx+Hx+"$"),Xx=["material","materials","bones","map"];class qx{constructor(t,e,i){const n=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class xe{constructor(t,e,i){this.path=e,this.parsedPath=i||xe.parseTrackName(e),this.node=xe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new xe.Composite(t,e,i):new xe(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(t){const e=Wx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Xx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=xe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[n];if(a===void 0){const c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xe.Composite=qx;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Vi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let i=0,n=arguments.length;i!==n;++i)t[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,i=this._paths,n=this._parsedPaths,s=this._bindings,a=s.length;let o,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(d);for(let x=0,m=a;x!==m;++x)s[x].push(new xe(d,i[x],n[x]))}else if(p<c){o=t[p];const x=--c,m=t[x];e[m.uuid]=p,t[p]=m,e[f]=x,t[x]=d;for(let g=0,v=a;g!==v;++g){const M=s[g],y=M[x];let E=M[p];M[p]=y,E===void 0&&(E=new xe(d,i[g],n[g])),M[x]=E}}else t[p]!==o&&Vt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,i=this._bindings,n=i.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=s){const u=s++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let f=0,p=n;f!==p;++f){const x=i[f],m=x[u],g=x[h];x[h]=m,x[u]=g}}}this.nCachedObjects_=s}uncache(){const t=this._objects,e=this._indicesByUUID,i=this._bindings,n=i.length;let s=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<s){const d=--s,f=t[d],p=--a,x=t[p];u!==d&&(e[f.uuid]=u),t[u]=f,d!==p&&(e[x.uuid]=d),t[d]=x,t.pop();for(let m=0,g=n;m!==g;++m){const v=i[m],M=v[d],y=v[p];v[u]=M,v[d]=y,v.pop()}}else{const d=--a,f=t[d];u!==d&&(e[f.uuid]=u),t[u]=f,t.pop();for(let p=0,x=n;p!==x;++p){const m=i[p];m[u]=m[d],m.pop()}}}this.nCachedObjects_=s}subscribe_(t,e){const i=this._bindingsIndicesByPath;let n=i[t];const s=this._bindings;if(n!==void 0)return s[n];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);n=s.length,i[t]=n,a.push(t),o.push(e),s.push(u);for(let d=h,f=l.length;d!==f;++d){const p=l[d];u[d]=new xe(p,t,e)}return u}unsubscribe_(t){const e=this._bindingsIndicesByPath,i=e[t];if(i!==void 0){const n=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=n[o];e[c]=i,a[i]=l,a.pop(),s[i]=s[o],s.pop(),n[i]=n[o],n.pop()}}}class Kp{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const s=e.tracks,a=s.length,o=new Array(a),l={endingStart:us,endingEnd:us};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Zf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){const n=this._clip.duration,s=t._clip.duration,a=s/n,o=n/s;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,s=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*i;l<0||i===0?e=0:(this._startTime=null,e=i*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Uh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Cl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,s=this._loopCount;const a=i===$f;if(t===0)return s===-1?n:a&&(s&1)===1?e-n:n;if(i===Yf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=e||n<0){const o=Math.floor(n/e);n-=e*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=n;if(a&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=ds,n.endingEnd=ds):(t?n.endingStart=this.zeroSlopeAtStart?ds:us:n.endingStart=Jr,e?n.endingEnd=this.zeroSlopeAtEnd?ds:us:n.endingEnd=Jr)}_scheduleFading(t,e,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=e,o[1]=s+t,l[1]=i,this}}const Zx=new Float32Array(1);class $x extends nn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,a=t._propertyBindings,o=t._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=e&&e._propertyBindings[u].binding.parsedPath;p=new Jp(xe.create(i,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=n.length,n.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){const s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[e];a===void 0&&(a={},n[e]=a),a[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new iu(new Float32Array(2),new Float32Array(2),1,Zx),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){const n=e||this._root,s=n.uuid;let a=typeof t=="string"?aa.findByName(n,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Cl),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Kp(this,a,e,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(t,e){const i=e||this._root,n=i.uuid,s=typeof t=="string"?aa.findByName(i,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==i;++c)e[c]._update(n,t,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Jx extends kh{constructor(t=1,e=1,i=1,n={}){super(t,e,n),this.isRenderTarget3D=!0,this.depth=i;for(let s=0;s<this.textures.length;s++){const a=new Ll(null,t,e,i);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[s]=a}this._setTextureOptions(n)}}class pu{constructor(t){this.value=t}clone(){return new pu(this.value.clone===void 0?this.value:this.value.clone())}}let Kx=0;class Qx extends nn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Kx++}),this.name="",this.usage=Rl,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let i=0,n=e.length;i<n;i++){const s=e[i];Array.isArray(s)?this.uniforms.push(s.map(a=>a.clone())):this.uniforms.push(s.clone())}return this}clone(){return new this.constructor().copy(this)}}class jx extends Ul{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class t_{constructor(t,e,i,n,s,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=i,this.elementSize=n,this.count=s,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const zd=new Kt;class mu{constructor(t,e,i=0,n=1/0){this.ray=new hr(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zd),this}intersectObject(t,e=!0,i=[]){return dh(t,this,i,e),i.sort(kd),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)dh(t[n],this,i,e);return i.sort(kd),i}}function kd(r,t){return r.distance-t.distance}function dh(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)dh(s[a],t,e,!0)}}class e_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class i_{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class n_{constructor(t=1,e=0,i=0){this.radius=t,this.theta=e,this.y=i}set(t,e,i){return this.radius=t,this.theta=e,this.y=i,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+i*i),this.theta=Math.atan2(t,i),this.y=e,this}clone(){return new this.constructor().copy(this)}}const bu=class bu{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};bu.prototype.isMatrix2=!0;let fh=bu;const Gd=new st;class Qp{constructor(t=new st(1/0,1/0),e=new st(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Gd.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gd).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vd=new C,ro=new C,Xs=new C,qs=new C,Vc=new C,s_=new C,r_=new C;class a_{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Vd.subVectors(t,this.start),ro.subVectors(this.end,this.start);const i=ro.dot(ro);if(i===0)return 0;let s=ro.dot(Vd)/i;return e&&(s=Jt(s,0,1)),s}closestPointToPoint(t,e,i){const n=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(t,e=s_,i=r_){const n=10000000000000001e-32;let s,a;const o=this.start,l=t.start,c=this.end,h=t.end;Xs.subVectors(c,o),qs.subVectors(h,l),Vc.subVectors(o,l);const u=Xs.dot(Xs),d=qs.dot(qs),f=qs.dot(Vc);if(u<=n&&d<=n)return e.copy(o),i.copy(l),e.distanceToSquared(i);if(u<=n)s=0,a=f/d,a=Jt(a,0,1);else{const p=Xs.dot(Vc);if(d<=n)a=0,s=Jt(-p/u,0,1);else{const x=Xs.dot(qs),m=u*d-x*x;m!==0?s=Jt((x*f-p*d)/m,0,1):s=0,a=(x*s+f)/d,a<0?(a=0,s=Jt(-p/u,0,1)):a>1&&(a=1,s=Jt((x-p)/u,0,1))}}return e.copy(o).addScaledVector(Xs,s),i.copy(l).addScaledVector(qs,a),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Hd=new C;class o_ extends fe{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const i=new jt,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Lt(n,3));const s=new ri({fog:!1,toneMapped:!1});this.cone=new sn(i,s),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Hd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Hd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Gn=new C,ao=new Kt,Hc=new Kt;class l_ extends sn{constructor(t){const e=jp(t),i=new jt,n=[],s=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}i.setAttribute("position",new Lt(n,3)),i.setAttribute("color",new Lt(s,3));const a=new ri({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const o=new vt(255),l=new vt(65280);this.setColors(o,l)}updateMatrixWorld(t){const e=this.bones,i=this.geometry,n=i.getAttribute("position");Hc.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<e.length;s++){const o=e[s];o.parent&&o.parent.isBone&&(ao.multiplyMatrices(Hc,o.matrixWorld),Gn.setFromMatrixPosition(ao),n.setXYZ(a,Gn.x,Gn.y,Gn.z),ao.multiplyMatrices(Hc,o.parent.matrixWorld),Gn.setFromMatrixPosition(ao),n.setXYZ(a+1,Gn.x,Gn.y,Gn.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const n=this.geometry.getAttribute("color");for(let s=0;s<n.count;s+=2)n.setXYZ(s,t.r,t.g,t.b),n.setXYZ(s+1,e.r,e.g,e.b);return n.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function jp(r){const t=[];r.isBone===!0&&t.push(r);for(let e=0;e<r.children.length;e++)t.push(...jp(r.children[e]));return t}class c_ extends xt{constructor(t,e,i){const n=new ji(e,4,2),s=new Oe({wireframe:!0,fog:!1,toneMapped:!1});super(n,s),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const h_=new C,Wd=new vt,Xd=new vt;class u_ extends fe{constructor(t,e,i){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new xa(e);n.rotateY(Math.PI*.5),this.material=new Oe({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=n.getAttribute("position"),a=new Float32Array(s.count*3);n.setAttribute("color",new be(a,3)),this.add(new xt(n,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Wd.copy(this.light.color),Xd.copy(this.light.groundColor);for(let i=0,n=e.count;i<n;i++){const s=i<n/2?Wd:Xd;e.setXYZ(i,s.r,s.g,s.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(h_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class d_ extends sn{constructor(t=10,e=10,i=4473924,n=8947848){i=new vt(i),n=new vt(n);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=e;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const x=d===s?i:n;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new jt;h.setAttribute("position",new Lt(l,3)),h.setAttribute("color",new Lt(c,3));const u=new ri({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class f_ extends sn{constructor(t=10,e=16,i=8,n=64,s=4473924,a=8947848){s=new vt(s),a=new vt(a);const o=[],l=[];if(e>1)for(let u=0;u<e;u++){const d=u/e*(Math.PI*2),f=Math.sin(d)*t,p=Math.cos(d)*t;o.push(0,0,0),o.push(f,0,p);const x=u&1?s:a;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let u=0;u<i;u++){const d=u&1?s:a,f=t-t/i*u;for(let p=0;p<n;p++){let x=p/n*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f;o.push(m,0,g),l.push(d.r,d.g,d.b),x=(p+1)/n*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f,o.push(m,0,g),l.push(d.r,d.g,d.b)}}const c=new jt;c.setAttribute("position",new Lt(o,3)),c.setAttribute("color",new Lt(l,3));const h=new ri({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const qd=new C,oo=new C,Yd=new C;class p_ extends fe{constructor(t,e,i){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",e===void 0&&(e=1);let n=new jt;n.setAttribute("position",new Lt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const s=new ri({fog:!1,toneMapped:!1});this.lightPlane=new In(n,s),this.add(this.lightPlane),n=new jt,n.setAttribute("position",new Lt([0,0,0,0,0,1],3)),this.targetLine=new In(n,s),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),qd.setFromMatrixPosition(this.light.matrixWorld),oo.setFromMatrixPosition(this.light.target.matrixWorld),Yd.subVectors(oo,qd),this.lightPlane.lookAt(oo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(oo),this.targetLine.scale.z=Yd.length()}}const lo=new C,Fe=new jl;class m_ extends sn{constructor(t){const e=new jt,i=new ri({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,x){l(p),l(x)}function l(p){n.push(0,0,0),s.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(n.length/3-1)}e.setAttribute("position",new Lt(n,3)),e.setAttribute("color",new Lt(s,3)),super(e,i),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new vt(16755200),h=new vt(16711680),u=new vt(43775),d=new vt(16777215),f=new vt(3355443);this.setColors(c,h,u,d,f)}setColors(t,e,i,n,s){const o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,n.r,n.g,n.b),o.setXYZ(39,n.r,n.g,n.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,i=1,n=1;let s,a;if(Fe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,a=0;else if(this.camera.coordinateSystem===Oi)s=-1,a=1;else if(this.camera.coordinateSystem===_s)s=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Be("c",e,t,Fe,0,0,s),Be("t",e,t,Fe,0,0,a),Be("n1",e,t,Fe,-i,-n,s),Be("n2",e,t,Fe,i,-n,s),Be("n3",e,t,Fe,-i,n,s),Be("n4",e,t,Fe,i,n,s),Be("f1",e,t,Fe,-i,-n,a),Be("f2",e,t,Fe,i,-n,a),Be("f3",e,t,Fe,-i,n,a),Be("f4",e,t,Fe,i,n,a),Be("u1",e,t,Fe,i*.7,n*1.1,s),Be("u2",e,t,Fe,-i*.7,n*1.1,s),Be("u3",e,t,Fe,0,n*2,s),Be("cf1",e,t,Fe,-i,0,a),Be("cf2",e,t,Fe,i,0,a),Be("cf3",e,t,Fe,0,-n,a),Be("cf4",e,t,Fe,0,n,a),Be("cn1",e,t,Fe,-i,0,s),Be("cn2",e,t,Fe,i,0,s),Be("cn3",e,t,Fe,0,-n,s),Be("cn4",e,t,Fe,0,n,s),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Be(r,t,e,i,n,s,a){lo.set(n,s,a).unproject(i);const o=t[r];if(o!==void 0){const l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],lo.x,lo.y,lo.z)}}const co=new Qe;class g_ extends sn{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),s=new jt;s.setIndex(new be(i,1)),s.setAttribute("position",new be(n,3)),super(s,new ri({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&co.setFromObject(this.object),co.isEmpty())return;const t=co.min,e=co.max,i=this.geometry.attributes.position,n=i.array;n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=t.x,n[4]=e.y,n[5]=e.z,n[6]=t.x,n[7]=t.y,n[8]=e.z,n[9]=e.x,n[10]=t.y,n[11]=e.z,n[12]=e.x,n[13]=e.y,n[14]=t.z,n[15]=t.x,n[16]=e.y,n[17]=t.z,n[18]=t.x,n[19]=t.y,n[20]=t.z,n[21]=e.x,n[22]=t.y,n[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class x_ extends sn{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new jt;s.setIndex(new be(i,1)),s.setAttribute("position",new Lt(n,3)),super(s,new ri({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class __ extends In{constructor(t,e=1,i=16776960){const n=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new jt;a.setAttribute("position",new Lt(s,3)),a.computeBoundingSphere(),super(a,new ri({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new jt;l.setAttribute("position",new Lt(o,3)),l.computeBoundingSphere(),this.add(new xt(l,new Oe({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Zd=new C;let ho,Wc;class v_ extends fe{constructor(t=new C(0,0,1),e=new C(0,0,0),i=1,n=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",ho===void 0&&(ho=new jt,ho.setAttribute("position",new Lt([0,0,0,0,1,0],3)),Wc=new ma(.5,1,5,1),Wc.translate(0,-.5,0)),this.position.copy(e),this.line=new In(ho,new ri({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new xt(Wc,new Oe({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,s,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Zd.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Zd,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class y_ extends sn{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new jt;n.setAttribute("position",new Lt(e,3)),n.setAttribute("color",new Lt(i,3));const s=new ri({vertexColors:!0,toneMapped:!1});super(n,s),this.type="AxesHelper"}setColors(t,e,i){const n=new vt,s=this.geometry.attributes.color.array;return n.set(t),n.toArray(s,0),n.toArray(s,3),n.set(e),n.toArray(s,6),n.toArray(s,9),n.set(i),n.toArray(s,12),n.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class M_{constructor(){this.type="ShapePath",this.color=new vt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new ia,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,n){return this.currentPath.quadraticCurveTo(t,e,i,n),this}bezierCurveTo(t,e,i,n,s,a){return this.currentPath.bezierCurveTo(t,e,i,n,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1;const u=c.length;for(let d=0,f=u-1;d<u;f=d++){const p=c[d],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){const h=c.getCenter(new st);if(t(h,l))return h;const u=h.y,d=[],f=l.length;for(let p=0;p<f;p++){const x=l[p],m=l[(p+1)%f];if(x.y>u!=m.y>u){const g=x.x+(u-x.y)*(m.x-x.x)/(m.y-x.y);d.push(g)}}return d.length>1&&(d.sort((p,x)=>p-x),h.x=(d[0]+d[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(bt('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");const n=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const h=Qi.area(c);if(h===0)continue;const u=new Qp;for(let d=0;d<c.length;d++)u.expandByPoint(c[d]);s.push({subPath:l,points:c,boundingBox:u,interiorPoint:e(c,u),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){const c=s[l];let h=0;for(let u=l-1;u>=0;u--){const d=s[u];if(d.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,d.points)){c.container=d.exclude?d.container:d,h=d.winding,c.winding+=h;break}}n(c.winding)===n(h)&&(c.exclude=!0)}for(const l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of s){if(l.exclude||l.role!=="outer")continue;const c=new dr;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of s){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const h=new ia;h.curves=l.subPath.curves,c.holes.push(h)}return a}}class S_ extends nn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function b_(r,t){const e=r.image&&r.image.width?r.image.width/r.image.height:1;return e>t?(r.repeat.x=1,r.repeat.y=e/t,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=t/e,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function w_(r,t){const e=r.image&&r.image.width?r.image.width/r.image.height:1;return e>t?(r.repeat.x=t/e,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=e/t,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function T_(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function ph(r,t,e,i){const n=E_(i);switch(e){case Dh:return r*t;case Tl:return r*t/n.components*n.byteLength;case ha:return r*t/n.components*n.byteLength;case Wn:return r*t*2/n.components*n.byteLength;case El:return r*t*2/n.components*n.byteLength;case Nh:return r*t*3/n.components*n.byteLength;case Pi:return r*t*4/n.components*n.byteLength;case Al:return r*t*4/n.components*n.byteLength;case Or:case Br:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zr:case kr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Io:case Do:return Math.max(r,16)*Math.max(t,8)/4;case Po:case Lo:return Math.max(r,8)*Math.max(t,8)/2;case No:case Uo:case Oo:case Bo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Yr:case zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case jo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case tl:case el:case il:return Math.ceil(r/4)*Math.ceil(t/4)*16;case nl:case sl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Zr:case rl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function E_(r){switch(r){case Ai:case Rh:return{byteLength:1,components:1};case ir:case Ph:case mi:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case Gi:case Sl:case yi:return{byteLength:4,components:1};case Ih:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}class A_{static contain(t,e){return b_(t,e)}static cover(t,e){return w_(t,e)}static fill(t){return T_(t)}static getByteLength(t,e,i,n){return ph(t,e,i,n)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);function tm(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function C_(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var R_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,B_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Q_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ev=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Av=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,my=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,by=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ry=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$y=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:R_,alphahash_pars_fragment:P_,alphamap_fragment:I_,alphamap_pars_fragment:L_,alphatest_fragment:D_,alphatest_pars_fragment:N_,aomap_fragment:U_,aomap_pars_fragment:F_,batching_pars_vertex:O_,batching_vertex:B_,begin_vertex:z_,beginnormal_vertex:k_,bsdfs:G_,iridescence_fragment:V_,bumpmap_pars_fragment:H_,clipping_planes_fragment:W_,clipping_planes_pars_fragment:X_,clipping_planes_pars_vertex:q_,clipping_planes_vertex:Y_,color_fragment:Z_,color_pars_fragment:$_,color_pars_vertex:J_,color_vertex:K_,common:Q_,defaultnormal_vertex:j_,displacementmap_pars_vertex:tv,displacementmap_vertex:ev,emissivemap_fragment:iv,emissivemap_pars_fragment:nv,colorspace_fragment:sv,colorspace_pars_fragment:rv,envmap_fragment:av,envmap_common_pars_fragment:ov,envmap_pars_fragment:lv,envmap_pars_vertex:cv,envmap_physical_pars_fragment:yv,envmap_vertex:hv,fog_vertex:uv,fog_pars_vertex:dv,fog_fragment:fv,fog_pars_fragment:pv,gradientmap_pars_fragment:mv,lightmap_pars_fragment:gv,lights_lambert_fragment:xv,lights_lambert_pars_fragment:_v,lights_pars_begin:vv,lights_toon_fragment:Mv,lights_toon_pars_fragment:Sv,lights_phong_fragment:bv,lights_phong_pars_fragment:wv,lights_physical_fragment:Tv,lights_physical_pars_fragment:Ev,lights_fragment_begin:Av,lights_fragment_maps:Cv,lights_fragment_end:Rv,lightprobes_pars_fragment:Pv,logdepthbuf_fragment:Iv,logdepthbuf_pars_fragment:Lv,logdepthbuf_pars_vertex:Dv,logdepthbuf_vertex:Nv,map_fragment:Uv,map_pars_fragment:Fv,map_particle_fragment:Ov,map_particle_pars_fragment:Bv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:kv,morphinstance_vertex:Gv,morphcolor_vertex:Vv,morphnormal_vertex:Hv,morphtarget_pars_vertex:Wv,morphtarget_vertex:Xv,normal_fragment_begin:qv,normal_fragment_maps:Yv,normal_pars_fragment:Zv,normal_pars_vertex:$v,normal_vertex:Jv,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ey,opaque_fragment:iy,packing:ny,premultiplied_alpha_fragment:sy,project_vertex:ry,dithering_fragment:ay,dithering_pars_fragment:oy,roughnessmap_fragment:ly,roughnessmap_pars_fragment:cy,shadowmap_pars_fragment:hy,shadowmap_pars_vertex:uy,shadowmap_vertex:dy,shadowmask_pars_fragment:fy,skinbase_vertex:py,skinning_pars_vertex:my,skinning_vertex:gy,skinnormal_vertex:xy,specularmap_fragment:_y,specularmap_pars_fragment:vy,tonemapping_fragment:yy,tonemapping_pars_fragment:My,transmission_fragment:Sy,transmission_pars_fragment:by,uv_pars_fragment:wy,uv_pars_vertex:Ty,uv_vertex:Ey,worldpos_vertex:Ay,background_vert:Cy,background_frag:Ry,backgroundCube_vert:Py,backgroundCube_frag:Iy,cube_vert:Ly,cube_frag:Dy,depth_vert:Ny,depth_frag:Uy,distance_vert:Fy,distance_frag:Oy,equirect_vert:By,equirect_frag:zy,linedashed_vert:ky,linedashed_frag:Gy,meshbasic_vert:Vy,meshbasic_frag:Hy,meshlambert_vert:Wy,meshlambert_frag:Xy,meshmatcap_vert:qy,meshmatcap_frag:Yy,meshnormal_vert:Zy,meshnormal_frag:$y,meshphong_vert:Jy,meshphong_frag:Ky,meshphysical_vert:Qy,meshphysical_frag:jy,meshtoon_vert:tM,meshtoon_frag:eM,points_vert:iM,points_frag:nM,shadow_vert:sM,shadow_frag:rM,sprite_vert:aM,sprite_frag:oM},Tt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},$i={basic:{uniforms:_i([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:_i([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:_i([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:_i([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:_i([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new vt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:_i([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:_i([Tt.points,Tt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:_i([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:_i([Tt.common,Tt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:_i([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:_i([Tt.sprite,Tt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:_i([Tt.common,Tt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:_i([Tt.lights,Tt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};$i.physical={uniforms:_i([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const uo={r:0,b:0,g:0},lM=new Kt,em=new Qt;em.set(-1,0,0,0,1,0,0,0,1);function cM(r,t,e,i,n,s){const a=new vt(0);let o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const y=v.backgroundBlurriness>0;M=t.get(M,y)}return M}function p(v){let M=!1;const y=f(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,M){const y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new xt(new Gt(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ar($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lM.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(em),c.material.toneMapped=ce.getTransfer(y.colorSpace)!==Se,(h!==y||u!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xt(new pi(2,2),new ei({name:"BackgroundMaterial",uniforms:ar($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ce.getTransfer(y.colorSpace)!==Se,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(uo,Rp(r)),e.buffers.color.setClear(uo.r,uo.g,uo.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:x,dispose:g}}function hM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,a=!1;function o(L,z,Y,D,k){let J=!1;const B=u(L,D,Y,z);s!==B&&(s=B,c(s.object)),J=f(L,D,Y,k),J&&p(L,D,Y,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(L,z,Y,D),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function u(L,z,Y,D){const k=D.wireframe===!0;let J=i[z.id];J===void 0&&(J={},i[z.id]=J);const B=L.isInstancedMesh===!0?L.id:0;let et=J[B];et===void 0&&(et={},J[B]=et);let q=et[Y.id];q===void 0&&(q={},et[Y.id]=q);let j=q[k];return j===void 0&&(j=d(l()),q[k]=j),j}function d(L){const z=[],Y=[],D=[];for(let k=0;k<e;k++)z[k]=0,Y[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:D,object:L,attributes:{},index:null}}function f(L,z,Y,D){const k=s.attributes,J=z.attributes;let B=0;const et=Y.getAttributes();for(const q in et)if(et[q].location>=0){const it=k[q];let At=J[q];if(At===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(At=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(At=L.instanceColor)),it===void 0||it.attribute!==At||At&&it.data!==At.data)return!0;B++}return s.attributesNum!==B||s.index!==D}function p(L,z,Y,D){const k={},J=z.attributes;let B=0;const et=Y.getAttributes();for(const q in et)if(et[q].location>=0){let it=J[q];it===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));const At={};At.attribute=it,it&&it.data&&(At.data=it.data),k[q]=At,B++}s.attributes=k,s.attributesNum=B,s.index=D}function x(){const L=s.newAttributes;for(let z=0,Y=L.length;z<Y;z++)L[z]=0}function m(L){g(L,0)}function g(L,z){const Y=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;Y[L]=1,D[L]===0&&(r.enableVertexAttribArray(L),D[L]=1),k[L]!==z&&(r.vertexAttribDivisor(L,z),k[L]=z)}function v(){const L=s.newAttributes,z=s.enabledAttributes;for(let Y=0,D=z.length;Y<D;Y++)z[Y]!==L[Y]&&(r.disableVertexAttribArray(Y),z[Y]=0)}function M(L,z,Y,D,k,J,B){B===!0?r.vertexAttribIPointer(L,z,Y,k,J):r.vertexAttribPointer(L,z,Y,D,k,J)}function y(L,z,Y,D){x();const k=D.attributes,J=Y.getAttributes(),B=z.defaultAttributeValues;for(const et in J){const q=J[et];if(q.location>=0){let j=k[et];if(j===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const it=j.normalized,At=j.itemSize,Dt=t.get(j);if(Dt===void 0)continue;const K=Dt.buffer,Mt=Dt.type,It=Dt.bytesPerElement,Ht=Mt===r.INT||Mt===r.UNSIGNED_INT||j.gpuType===Sl;if(j.isInterleavedBufferAttribute){const St=j.data,Wt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,Ee=j.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let qt=0;qt<q.locationSize;qt++)g(q.location+qt,St.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let qt=0;qt<q.locationSize;qt++)m(q.location+qt);r.bindBuffer(r.ARRAY_BUFFER,K);for(let qt=0;qt<q.locationSize;qt++)M(q.location+qt,At/q.locationSize,Mt,it,Wt*It,(Ee+At/q.locationSize*qt)*It,Ht)}else{if(j.isInstancedBufferAttribute){for(let St=0;St<q.locationSize;St++)g(q.location+St,j.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let St=0;St<q.locationSize;St++)m(q.location+St);r.bindBuffer(r.ARRAY_BUFFER,K);for(let St=0;St<q.locationSize;St++)M(q.location+St,At/q.locationSize,Mt,it,At*It,At/q.locationSize*St*It,Ht)}}else if(B!==void 0){const it=B[et];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(q.location,it);break;case 3:r.vertexAttrib3fv(q.location,it);break;case 4:r.vertexAttrib4fv(q.location,it);break;default:r.vertexAttrib1fv(q.location,it)}}}}v()}function E(){I();for(const L in i){const z=i[L];for(const Y in z){const D=z[Y];for(const k in D){const J=D[k];for(const B in J)h(J[B].object),delete J[B];delete D[k]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const z=i[L.id];for(const Y in z){const D=z[Y];for(const k in D){const J=D[k];for(const B in J)h(J[B].object),delete J[B];delete D[k]}}delete i[L.id]}function _(L){for(const z in i){const Y=i[z];for(const D in Y){const k=Y[D];if(k[L.id]===void 0)continue;const J=k[L.id];for(const B in J)h(J[B].object),delete J[B];delete k[L.id]}}}function S(L){for(const z in i){const Y=i[z],D=L.isInstancedMesh===!0?L.id:0,k=Y[D];if(k!==void 0){for(const J in k){const B=k[J];for(const et in B)h(B[et].object),delete B[et];delete k[J]}delete Y[D],Object.keys(Y).length===0&&delete i[z]}}}function I(){R(),a=!0,s!==n&&(s=n,c(s.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function uM(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function dM(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==Pi&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ai&&_!==yi&&!S&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:w}}function fM(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Mn,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!n||p===null||p.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,M=v*4;let y=g.clippingState||null;l.value=y,y=h(p,d,M,f);for(let E=0;E!==M;++E)y[E]=e[E];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=f;M!==x;++M,y+=4)a.copy(u[M]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class ec extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new fa(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Gt(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mi,blending:Vn});s.uniforms.tEquirect.value=e;const a=new xt(n,s),o=e.minFilter;return e.minFilter===Ki&&(e.minFilter=De),new hl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}const $d=256,pM=3,mM=20,im=256,nm=16,gM=3,xM=new C,_M=new vt;class lr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hl(1,10,null),this._boxMesh=new xt(new Gt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=xM}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(_M));const m=new hl(i,n,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max($d,op(t))}_fromTexture(t,e){t.mapping===Cn||t.mapping===ms?this._setSize(t.image.length===0?$d:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=Jd(t,!1,!1),i=Math.log2(t)-pM;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Jd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Cn||t.mapping===ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Kd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=vM(),this._integrationMaterial=yM());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/nm);for(let a=0;a<=i;a++){const o=lr.lodToRoughness(a,i);if(a>i-gM)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(im*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=MM());const i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}}function Jd(r,t,e){return new ec(r,{minFilter:Ki,generateMipmaps:t,type:mi,colorSpace:Kr,depthBuffer:e})}function va(r,t,e){return new ei({name:r,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:Mi,blending:Vn,depthTest:!1,depthWrite:!1})}function vM(){return va("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${im}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yM(){return va("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function MM(){return va("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${mM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Kd(){return va("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qd(){return va("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function SM(r){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===js||f===Ur)if(t.has(d)){const p=t.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new ec(p.height);return x.fromEquirectangularTexture(r,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,p=f===js||f===Ur,x=f===Cn||f===ms;if(p||x){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new lr(r)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new lr(r)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===js?d.mapping=Cn:f===Ur&&(d.mapping=ms),d}function l(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function bM(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Tn("WebGLRenderer: "+i+" extension not supported."),n}}}function wM(r,t,e,i){const n={},s=new WeakMap,a=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete n[p.id],a.unregister(p);const x=s.get(p);x&&(t.remove(x),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],r.ARRAY_BUFFER)}function u(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const v=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?Hh:Vh,y=new M(Math.ceil(v/3)*6,1),E=y.array;if(x!==null){const _=x.array;g=x.version;for(let S=0,I=0;S<v;S+=3){const R=_[S+0],L=_[S+1],z=_[S+2];E[I++]=R,E[I++]=L,E[I++]=L,E[I++]=z,E[I++]=z,E[I++]=R}}else{g=m.version;for(let _=0,S=0;_<v;_+=3){const I=_+0,R=_+1,L=_+2;E[S++]=I,E[S++]=R,E[S++]=R,E[S++]=L,E[S++]=L,E[S++]=I}}y.version=g;const w=s.get(p);w&&t.remove(w),s.set(p,y)}function d(p){const x=s.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return s.get(p)}function f(){for(const p in n){const x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function TM(r,t,e){let i;function n(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){r.drawElements(i,d,s,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(i,d,s,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function EM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function AM(r,t,e){const i=new WeakMap,n=new Te;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let R=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var f=R;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,w=1;E>t.maxTextureSize&&(w=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const _=new Float32Array(E*w*4*u),S=new Il(_,E,w,u);S.type=yi,S.needsUpdate=!0;const I=y*4;for(let L=0;L<u;L++){const z=g[L],Y=v[L],D=M[L],k=E*w*4*L;for(let J=0;J<z.count;J++){const B=J*I;p===!0&&(n.fromBufferAttribute(z,J),_[k+B+0]=n.x,_[k+B+1]=n.y,_[k+B+2]=n.z,_[k+B+3]=0),x===!0&&(n.fromBufferAttribute(Y,J),_[k+B+4]=n.x,_[k+B+5]=n.y,_[k+B+6]=n.z,_[k+B+7]=0),m===!0&&(n.fromBufferAttribute(D,J),_[k+B+8]=n.x,_[k+B+9]=n.y,_[k+B+10]=n.z,_[k+B+11]=D.itemSize===4?n.w:1)}}d={count:u,texture:S,size:new st(E,w)},i.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function CM(r,t,e,i,n){let s=new WeakMap;function a(c){const h=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const RM={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[ca]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[_l]:"CUSTOM_TONE_MAPPING"};function PM(r,t,e,i,n,s){const a=new Ke(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new jt;h.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const u=new $l({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xt(h,u),f=new _a(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,v=null,M=[],y=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),l!==null&&l.setSize(E,w);for(let _=0;_<M.length;_++){const S=M[_];S.setSize&&S.setSize(E,w)}},this.setEffects=function(E){M=E,y=M.length>0&&M[0].isRenderPass===!0;const w=a.width,_=a.height;M.length>0&&o===null&&(o=new Ke(w,_,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(w,_,{type:mi,depthBuffer:!1,stencilBuffer:!1}));const S=n===!0&&M.some(I=>I.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ms(w,_),s===!0&&(c.format=wn,c.type=xs)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let I=0;I<M.length;I++){const R=M[I];R.setSize&&R.setSize(w,_),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,w){if(m||E.toneMapping===dn&&M.length===0)return!1;if(v=w,w!==null){const _=w.width,S=w.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return y===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=dn,!0},this.hasRenderPass=function(){return y},this.end=function(E,w){E.toneMapping=g,m=!0;let _=a,S=o;for(let I=0;I<M.length;I++){const R=M[I];R.enabled!==!1&&(R.render(E,S,_,w),R.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(p!==E.outputColorSpace||x!==E.toneMapping){p=E.outputColorSpace,x=E.toneMapping,u.defines={},ce.getTransfer(p)===Se&&(u.defines.SRGB_TRANSFER="");const I=RM[x];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(v),E.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const sm=new Ne,rm=new Ms(1,1),am=new Xh(1),om=new Il,lm=new Ll,cm=new fa,jd=[],tf=[],ef=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function pr(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=jd[n];if(s===void 0&&(s=new Float32Array(n),jd[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function qe(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ye(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function ic(r,t){let e=tf[t];e===void 0&&(e=new Int32Array(t),tf[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function IM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function LM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2fv(this.addr,t),Ye(e,t)}}function DM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;r.uniform3fv(this.addr,t),Ye(e,t)}}function NM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4fv(this.addr,t),Ye(e,t)}}function UM(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;sf.set(i),r.uniformMatrix2fv(this.addr,!1,sf),Ye(e,i)}}function FM(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;nf.set(i),r.uniformMatrix3fv(this.addr,!1,nf),Ye(e,i)}}function OM(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;ef.set(i),r.uniformMatrix4fv(this.addr,!1,ef),Ye(e,i)}}function BM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function zM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2iv(this.addr,t),Ye(e,t)}}function kM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3iv(this.addr,t),Ye(e,t)}}function GM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4iv(this.addr,t),Ye(e,t)}}function VM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function HM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2uiv(this.addr,t),Ye(e,t)}}function WM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3uiv(this.addr,t),Ye(e,t)}}function XM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4uiv(this.addr,t),Ye(e,t)}}function nc(r){return r.version===0&&(r.compareFunction=Bh,r.needsUpdate=!0),r}function qM(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=nc(rm):s=sm,e.setTexture2D(t||s,n)}function YM(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||lm,n)}function ZM(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=nc(am):s=cm,e.setTextureCube(t||s,n)}function $M(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||om,n)}function JM(r){switch(r){case 5126:return IM;case 35664:return LM;case 35665:return DM;case 35666:return NM;case 35674:return UM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return kM;case 35669:case 35673:return GM;case 5125:return VM;case 36294:return HM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return $M}}function KM(r,t){r.uniform1fv(this.addr,t)}function QM(r,t){const e=pr(t,this.size,2);r.uniform2fv(this.addr,e)}function jM(r,t){const e=pr(t,this.size,3);r.uniform3fv(this.addr,e)}function tS(r,t){const e=pr(t,this.size,4);r.uniform4fv(this.addr,e)}function eS(r,t){const e=pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function iS(r,t){const e=pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function nS(r,t){const e=pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function sS(r,t){r.uniform1iv(this.addr,t)}function rS(r,t){r.uniform2iv(this.addr,t)}function aS(r,t){r.uniform3iv(this.addr,t)}function oS(r,t){r.uniform4iv(this.addr,t)}function lS(r,t){r.uniform1uiv(this.addr,t)}function cS(r,t){r.uniform2uiv(this.addr,t)}function hS(r,t){r.uniform3uiv(this.addr,t)}function uS(r,t){r.uniform4uiv(this.addr,t)}function dS(r,t,e){const i=this.cache,n=t.length,s=ic(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Ye(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=nc(rm):a=sm;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function fS(r,t,e){const i=this.cache,n=t.length,s=ic(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||lm,s[a])}function pS(r,t,e){const i=this.cache,n=t.length,s=ic(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Ye(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=nc(am):a=cm;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,s[o])}function mS(r,t,e){const i=this.cache,n=t.length,s=ic(e,n);qe(i,s)||(r.uniform1iv(this.addr,s),Ye(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||om,s[a])}function gS(r){switch(r){case 5126:return KM;case 35664:return QM;case 35665:return jM;case 35666:return tS;case 35674:return eS;case 35675:return iS;case 35676:return nS;case 5124:case 35670:return sS;case 35667:case 35671:return rS;case 35668:case 35672:return aS;case 35669:case 35673:return oS;case 5125:return lS;case 36294:return cS;case 36295:return hS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}class xS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=JM(e.type)}}class _S{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gS(e.type)}}class vS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function rf(r,t){r.seq.push(t),r.map[t.id]=t}function yS(r,t,e){const i=r.name,n=i.length;for(Xc.lastIndex=0;;){const s=Xc.exec(i),a=Xc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){rf(e,c===void 0?new xS(o,r,t):new _S(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new vS(o),rf(e,u)),e=u}}}class yo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);yS(o,l,this)}const n=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function af(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const MS=37297;let SS=0;function bS(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const of=new Qt;function wS(r){ce._getMatrix(of,ce.workingColorSpace,r);const t=`mat3( ${of.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(r)){case Qr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return bt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function lf(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+bS(r.getShaderSource(t),o)}else return s}function TS(r,t){const e=wS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const ES={[ml]:"Linear",[gl]:"Reinhard",[xl]:"Cineon",[ca]:"ACESFilmic",[vl]:"AgX",[yl]:"Neutral",[_l]:"Custom"};function AS(r,t){const e=ES[t];return e===void 0?(bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new C;function CS(){ce.getLuminanceCoefficients(fo);const r=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function PS(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function IS(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Dr(r){return r!==""}function cf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function hf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LS=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(r){return r.replace(LS,DS)}function DS(r,t){const e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return mh(e)}const NS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(r){return r.replace(NS,US)}function US(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function df(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const FS={[Nr]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function OS(r){return FS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BS={[ms]:"ENVMAP_MODE_REFRACTION"};function zS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":BS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kS={[la]:"ENVMAP_BLENDING_MULTIPLY",[Wf]:"ENVMAP_BLENDING_MIX",[Xf]:"ENVMAP_BLENDING_ADD"};function GS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":kS[r.combine]||"ENVMAP_BLENDING_NONE"}function VS(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=OS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=zS(e),u=GS(e),d=RS(e),f=PS(s),p=n.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Dr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(x=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?re.tonemapping_pars_fragment:"",e.toneMapping!==dn?AS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,TS("linearToOutputTexel",e.outputColorSpace),CS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),a=mh(a),a=cf(a,e),a=hf(a,e),o=mh(o),o=cf(o,e),o=hf(o,e),a=uf(a),o=uf(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=g+x+a,M=g+m+o,y=af(n,n.VERTEX_SHADER,v),E=af(n,n.FRAGMENT_SHADER,M);n.attachShader(p,y),n.attachShader(p,E),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function w(R){if(r.debug.checkShaderErrors){const L=n.getProgramInfoLog(p)||"",z=n.getShaderInfoLog(y)||"",Y=n.getShaderInfoLog(E)||"",D=L.trim(),k=z.trim(),J=Y.trim();let B=!0,et=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,y,E);else{const q=lf(n,y,"vertex"),j=lf(n,E,"fragment");Vt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+q+`
`+j)}else D!==""?bt("WebGLProgram: Program Info Log:",D):(k===""||J==="")&&(et=!1);et&&(R.diagnostics={runnable:B,programLog:D,vertexShader:{log:k,prefix:x},fragmentShader:{log:J,prefix:m}})}n.deleteShader(y),n.deleteShader(E),_=new yo(n,p),S=IS(n,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(p,MS)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SS++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=E,this}let HS=0;class WS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new XS(t),e.set(t,i)),i}}class XS{constructor(t){this.id=HS++,this.code=t,this.usedTimes=0}}function qS(r){return r===Wn||r===Yr||r===Zr}function YS(r,t,e,i,n,s){const a=new Dl,o=new WS,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,I,R,L,z){const Y=R.fog,D=L.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=t.get(_.envMap||k,J),et=d[_.type];let q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&bt("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,it=j!==void 0?j.length:0;let At=0;D.morphAttributes.position!==void 0&&(At=1),D.morphAttributes.normal!==void 0&&(At=2),D.morphAttributes.color!==void 0&&(At=3);let Dt,K,Mt,It;if(et){const wt=$i[et];Dt=wt.vertexShader,K=wt.fragmentShader}else{Dt=_.vertexShader,K=_.fragmentShader;const wt=o.getVertexShaderStage(_),me=o.getFragmentShaderStage(_);o.update(_,wt,me),Mt=wt.id,It=me.id}const Ht=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),Wt=L.isInstancedMesh===!0,Ee=L.isBatchedMesh===!0,qt=!!_.map,ne=!!_.matcap,te=!!B,rt=te&&B.isPMREMTexture===!0,ut=!!_.aoMap,ht=!!_.lightMap,Pt=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,ee=!!_.displacementMap,zt=!!_.emissiveMap,se=!!_.metalnessMap,oe=!!_.roughnessMap,pe=_.anisotropy>0,F=_.clearcoat>0,Ue=_.diffuseRoughness>0,ae=_.dispersion>0,ve=_.retroreflectivity>0,pt=_.iridescence>0,we=_.sheen>0,Xt=_.transmission>0,$t=pe&&!!_.anisotropyMap,P=F&&!!_.clearcoatMap,b=F&&!!_.clearcoatNormalMap,H=F&&!!_.clearcoatRoughnessMap,lt=Ue&&!!_.diffuseRoughnessMap,nt=pt&&!!_.iridescenceMap,ft=pt&&!!_.iridescenceThicknessMap,gt=we&&!!_.sheenColorMap,O=we&&!!_.sheenRoughnessMap,G=!!_.specularMap,Z=!!_.specularColorMap,A=!!_.specularIntensityMap,N=Xt&&!!_.transmissionMap,V=Xt&&!!_.thicknessMap,at=!!_.gradientMap,tt=!!_.alphaMap,ot=_.alphaTest>0,dt=!!_.alphaHash,Ut=!!_.extensions;let ct=dn;_.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(ct=r.toneMapping);const Nt=rt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Yt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Dt,fragmentShader:K,defines:_.defines,customVertexShaderID:Mt,customFragmentShaderID:It,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:Ee,batchingColor:Ee&&L._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&L.instanceColor!==null,instancingMorph:Wt&&L.morphTexture!==null,outputColorSpace:Ht===null?r.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qt,matcap:ne,envMap:te,envMapMode:te&&B.mapping,envMapPMREM:rt,envMapMaxLod:rt?Nt.length-1:null,envMapSize:rt?Nt[0].width:null,aoMap:ut,lightMap:ht,bumpMap:Pt,normalMap:mt,displacementMap:ee,emissiveMap:zt,normalMapObjectSpace:mt&&_.normalMapType===Kf,normalMapTangentSpace:mt&&_.normalMapType===Pn,packedNormalMap:mt&&_.normalMapType===Pn&&qS(_.normalMap.format),metalnessMap:se,roughnessMap:oe,anisotropy:pe,anisotropyMap:$t,clearcoat:F,clearcoatMap:P,clearcoatNormalMap:b,clearcoatRoughnessMap:H,diffuseRoughness:Ue,diffuseRoughnessMap:lt,dispersion:ae,retroreflection:ve,iridescence:pt,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:we,sheenColorMap:gt,sheenRoughnessMap:O,specularMap:G,specularColorMap:Z,specularIntensityMap:A,transmission:Xt,transmissionMap:N,thicknessMap:V,gradientMap:at,opaque:_.transparent===!1&&_.blending===Qs&&_.alphaToCoverage===!1,alphaMap:tt,alphaTest:ot,alphaHash:dt,combine:_.combine,mapUv:qt&&f(_.map.channel),aoMapUv:ut&&f(_.aoMap.channel),lightMapUv:ht&&f(_.lightMap.channel),bumpMapUv:Pt&&f(_.bumpMap.channel),normalMapUv:mt&&f(_.normalMap.channel),displacementMapUv:ee&&f(_.displacementMap.channel),emissiveMapUv:zt&&f(_.emissiveMap.channel),metalnessMapUv:se&&f(_.metalnessMap.channel),roughnessMapUv:oe&&f(_.roughnessMap.channel),anisotropyMapUv:$t&&f(_.anisotropyMap.channel),clearcoatMapUv:P&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:lt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:O&&f(_.sheenRoughnessMap.channel),specularMapUv:G&&f(_.specularMap.channel),specularColorMapUv:Z&&f(_.specularColorMap.channel),specularIntensityMapUv:A&&f(_.specularIntensityMap.channel),transmissionMapUv:N&&f(_.transmissionMap.channel),thicknessMapUv:V&&f(_.thicknessMap.channel),alphaMapUv:tt&&f(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(mt||pe),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(qt||tt),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:At,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(wt=>wt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:qt&&_.map.isVideoTexture===!0&&ce.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:zt&&_.emissiveMap.isVideoTexture===!0&&ce.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fi,flipSided:_.side===Mi,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ut&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&_.extensions.multiDraw===!0||Ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function x(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)S.push(I),S.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(r.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){const S=d[_.type];let I;if(S){const R=$i[S];I=or.clone(R.uniforms)}else I=_.uniforms;return I}function M(_,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new VS(r,S,_,n),c.push(I),h.set(S,I)),I}function y(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:w}}function ZS(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function $S(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function ff(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pf(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,m,g){let v=r[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},r[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=g),t++,v}function l(d,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);const M=o(d,f,p,x,m,g);p.transmission>0?i.push(M):p.transparent===!0?n.push(M):e.push(M)}function c(d,f,p,x,m,g){const v=o(d,f,p,x,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function h(d,f){e.length>1&&e.sort(d||$S),i.length>1&&i.sort(f||ff),n.length>1&&n.sort(f||ff)}function u(){for(let d=t,f=r.length;d<f;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:u,sort:h}}function JS(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new pf,r.set(i,[a])):n>=s.length?(a=new pf,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function KS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new vt};break;case"SpotLight":e={position:new C,direction:new C,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function QS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let jS=0;function tb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function eb(r){const t=new KS,e=QS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const n=new C,s=new Kt,a=new Kt;function o(c){let h=0,u=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,M=0,y=0,E=0,w=0,_=0,S=0,I=0,R=0;c.sort(tb);for(let z=0,Y=c.length;z<Y;z++){const D=c[z],k=D.color,J=D.intensity,B=D.distance;let et=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Wn?et=D.shadow.map.texture:et=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*J,u+=k.g*J,d+=k.b*J;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],J);R++}else if(D.isSunLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,it=e.get(D);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[p]=it,i.sunShadowMap[p]=et;const At=j.getViewportCount();for(let Dt=0;Dt<At;Dt++)i.sunShadowMatrix[x+Dt]=j.getMatrix(Dt),i.sunShadowCascade[x+Dt]=j._cascadeData[Dt];x+=At,p++}i.sun[f]=q,f++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,it=e.get(D);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=D.shadow.matrix,E++}i.directional[m]=q,m++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(k).multiplyScalar(J),q.distance=B,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[v]=q;const j=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,j.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[v]=j.matrix,D.castShadow){const it=e.get(D);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.spotShadow[v]=it,i.spotShadowMap[v]=et,_++}v++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(k).multiplyScalar(J),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=q,M++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const j=D.shadow,it=e.get(D);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,i.pointShadow[g]=it,i.pointShadowMap[g]=et,i.pointShadowMatrix[g]=D.shadow.matrix,w++}i.point[g]=q,g++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(J),q.groundColor.copy(D.groundColor).multiplyScalar(J),i.hemi[y]=q,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==M||L.hemiLength!==y||L.numSunShadows!==p||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==_||L.numSpotMaps!==S||L.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=M,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-I,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=M,L.hemiLength=y,L.numSunShadows=p,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=_,L.numSpotMaps=S,L.numLightProbes=R,i.version=jS++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const y=c[v];if(y.isSunLight){const E=i.sun[u];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),u++}else if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(g),d++}else if(y.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function mf(r){const t=new eb(r),e=[],i=[],n=[];function s(u){h.camera=u,e.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ib(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new mf(r),t.set(n,[o])):s>=a.length?(o=new mf(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rb=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],ab=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],gf=new Kt,Rr=new C,qc=new C;function ob(r,t,e){let i=new ys;const n=new st,s=new st,a=new Te,o=new tu,l=new eu,c={},h=e.maxTextureSize,u={[Hn]:Mi,[Mi]:Hn,[Fi]:Fi},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:nb,fragmentShader:sb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new jt;p.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let g=this.type;this.render=function(w,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Th&&(bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nr);const I=r.getRenderTarget(),R=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Vn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Y=g!==this.type;Y&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=w.length;D<k;D++){const J=w[D],B=J.shadow;if(B===void 0){bt("WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);const et=B.getFrameExtents();n.multiply(et),s.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/et.x),n.x=s.x*et.x,B.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/et.y),n.y=s.y*et.y,B.mapSize.y=s.y));const q=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=q,B.map===null||Y===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Zs){if(J.isPointLight){bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ke(n.x,n.y,{format:Wn,type:mi,minFilter:De,magFilter:De,generateMipmaps:!1}),B.map.texture.name=J.name+".shadowMap",B.map.depthTexture=new Ms(n.x,n.y,yi),B.map.depthTexture.name=J.name+".shadowMapDepth",B.map.depthTexture.format=Rn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ke,B.map.depthTexture.magFilter=ke}else J.isPointLight?(B.map=new ec(n.x),B.map.depthTexture=new Xh(n.x,Gi)):(B.map=new Ke(n.x,n.y),B.map.depthTexture=new Ms(n.x,n.y,Gi)),B.map.depthTexture.name=J.name+".shadowMap",B.map.depthTexture.format=Rn,this.type===Nr?(B.map.depthTexture.compareFunction=q?Oh:Fh,B.map.depthTexture.minFilter=De,B.map.depthTexture.magFilter=De):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ke,B.map.depthTexture.magFilter=ke);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y)&&B.map.setSize(n.x,n.y);const j=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();J.isPointLight!==!0&&B.updateMatrices(J,S);const it=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let At=0;At<j;At++){const Dt=B.getCamera(At);if(J.isPointLight){const K=B.camera,Mt=B.matrix,It=J.distance||K.far;It!==K.far&&(K.far=It,K.updateProjectionMatrix()),Rr.setFromMatrixPosition(J.matrixWorld),K.position.copy(Rr),qc.copy(K.position),qc.add(rb[At]),K.up.copy(ab[At]),K.lookAt(qc),K.updateMatrixWorld(),Mt.makeTranslation(-Rr.x,-Rr.y,-Rr.z),gf.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),B._frustum.setFromProjectionMatrix(gf,K.coordinateSystem,K.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,At),r.clear();else{At===0&&(r.setRenderTarget(B.map),r.clear());const K=B.getViewport(At);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),z.viewport(a)}i=B.getFrustum(At),y(_,S,Dt,J,it,this.type)}B.isPointLightShadow!==!0&&this.type===Zs&&v(B,S),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(I,R,L)};function v(w,_){const S=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ke(n.x,n.y,{format:Wn,type:mi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(_,null,S,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(_,null,S,f,x,null)}function M(w,_,S,I){let R=null;const L=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=S.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const z=R.uuid,Y=_.uuid;let D=c[z];D===void 0&&(D={},c[z]=D);let k=D[Y];k===void 0&&(k=R.clone(),D[Y]=k,_.addEventListener("dispose",E)),R=k}if(R.visible=_.visible,R.wireframe=_.wireframe,I===Zs?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:u[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const z=r.properties.get(R);z.light=S}return R}function y(w,_,S,I,R,L){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Zs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const D=t.update(w),k=w.material;if(Array.isArray(k)){const J=D.groups;for(let B=0,et=J.length;B<et;B++){const q=J[B],j=k[q.materialIndex];if(j&&j.visible){const it=M(w,j,I,L);w.onBeforeShadow(r,w,_,S,D,it,q),r.renderBufferDirect(S,null,D,it,w,q),w.onAfterShadow(r,w,_,S,D,it,q)}}}else if(k.visible){const J=M(w,k,I,L);w.onBeforeShadow(r,w,_,S,D,J,null),r.renderBufferDirect(S,null,D,J,w,null),w.onAfterShadow(r,w,_,S,D,J,null)}}const Y=w.children;for(let D=0,k=Y.length;D<k;D++)y(Y[D],_,S,I,R,L)}function E(w){w.target.removeEventListener("dispose",E);for(const S in c){const I=c[S],R=w.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function lb(r,t){function e(){let A=!1;const N=new Te;let V=null;const at=new Te(0,0,0,0);return{setMask:function(tt){V!==tt&&!A&&(r.colorMask(tt,tt,tt,tt),V=tt)},setLocked:function(tt){A=tt},setClear:function(tt,ot,dt,Ut,ct){ct===!0&&(tt*=Ut,ot*=Ut,dt*=Ut),N.set(tt,ot,dt,Ut),at.equals(N)===!1&&(r.clearColor(tt,ot,dt,Ut),at.copy(N))},reset:function(){A=!1,V=null,at.set(-1,0,0,0)}}}function i(){let A=!1,N=!1,V=null,at=null,tt=null;return{setReversed:function(ot){if(N!==ot){const dt=t.get("EXT_clip_control");ot?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),N=ot;const Ut=tt;tt=null,this.setClear(Ut)}},getReversed:function(){return N},setTest:function(ot){ot?St(r.DEPTH_TEST):Wt(r.DEPTH_TEST)},setMask:function(ot){V!==ot&&!A&&(r.depthMask(ot),V=ot)},setFunc:function(ot){if(N&&(ot=A0[ot]),at!==ot){switch(ot){case bo:r.depthFunc(r.NEVER);break;case wo:r.depthFunc(r.ALWAYS);break;case To:r.depthFunc(r.LESS);break;case er:r.depthFunc(r.LEQUAL);break;case Eo:r.depthFunc(r.EQUAL);break;case Ao:r.depthFunc(r.GEQUAL);break;case Co:r.depthFunc(r.GREATER);break;case Ro:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}at=ot}},setLocked:function(ot){A=ot},setClear:function(ot){tt!==ot&&(tt=ot,N&&(ot=1-ot),r.clearDepth(ot))},reset:function(){A=!1,V=null,at=null,tt=null,N=!1}}}function n(){let A=!1,N=null,V=null,at=null,tt=null,ot=null,dt=null,Ut=null,ct=null;return{setTest:function(Nt){A||(Nt?St(r.STENCIL_TEST):Wt(r.STENCIL_TEST))},setMask:function(Nt){N!==Nt&&!A&&(r.stencilMask(Nt),N=Nt)},setFunc:function(Nt,Yt,wt){(V!==Nt||at!==Yt||tt!==wt)&&(r.stencilFunc(Nt,Yt,wt),V=Nt,at=Yt,tt=wt)},setOp:function(Nt,Yt,wt){(ot!==Nt||dt!==Yt||Ut!==wt)&&(r.stencilOp(Nt,Yt,wt),ot=Nt,dt=Yt,Ut=wt)},setLocked:function(Nt){A=Nt},setClear:function(Nt){ct!==Nt&&(r.clearStencil(Nt),ct=Nt)},reset:function(){A=!1,N=null,V=null,at=null,tt=null,ot=null,dt=null,Ut=null,ct=null}}}const s=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,y=null,E=null,w=null,_=null,S=new vt(0,0,0),I=0,R=!1,L=null,z=null,Y=null,D=null,k=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,et=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=et>=2);let j=null,it={};const At=r.getParameter(r.SCISSOR_BOX),Dt=r.getParameter(r.VIEWPORT),K=new Te().fromArray(At),Mt=new Te().fromArray(Dt);function It(A,N,V,at){const tt=new Uint8Array(4),ot=r.createTexture();r.bindTexture(A,ot),r.texParameteri(A,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(A,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let dt=0;dt<V;dt++)A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY?r.texImage3D(N,0,r.RGBA,1,1,at,0,r.RGBA,r.UNSIGNED_BYTE,tt):r.texImage2D(N+dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,tt);return ot}const Ht={};Ht[r.TEXTURE_2D]=It(r.TEXTURE_2D,r.TEXTURE_2D,1),Ht[r.TEXTURE_CUBE_MAP]=It(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ht[r.TEXTURE_2D_ARRAY]=It(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ht[r.TEXTURE_3D]=It(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(r.DEPTH_TEST),a.setFunc(er),Pt(!1),mt(eh),St(r.CULL_FACE),ut(Vn);function St(A){h[A]!==!0&&(r.enable(A),h[A]=!0)}function Wt(A){h[A]!==!1&&(r.disable(A),h[A]=!1)}function Ee(A,N){return d[A]!==N?(r.bindFramebuffer(A,N),d[A]=N,A===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=N),A===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=N),!0):!1}function qt(A,N){let V=p,at=!1;if(A){V=f.get(N),V===void 0&&(V=[],f.set(N,V));const tt=A.textures;if(V.length!==tt.length||V[0]!==r.COLOR_ATTACHMENT0){for(let ot=0,dt=tt.length;ot<dt;ot++)V[ot]=r.COLOR_ATTACHMENT0+ot;V.length=tt.length,at=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,at=!0);at&&r.drawBuffers(V)}function ne(A){return x!==A?(r.useProgram(A),x=A,!0):!1}const te={[hs]:r.FUNC_ADD,[Af]:r.FUNC_SUBTRACT,[Cf]:r.FUNC_REVERSE_SUBTRACT};te[Rf]=r.MIN,te[Pf]=r.MAX;const rt={[If]:r.ZERO,[Lf]:r.ONE,[Df]:r.SRC_COLOR,[Eh]:r.SRC_ALPHA,[zf]:r.SRC_ALPHA_SATURATE,[Of]:r.DST_COLOR,[Uf]:r.DST_ALPHA,[Nf]:r.ONE_MINUS_SRC_COLOR,[Ah]:r.ONE_MINUS_SRC_ALPHA,[Bf]:r.ONE_MINUS_DST_COLOR,[Ff]:r.ONE_MINUS_DST_ALPHA,[kf]:r.CONSTANT_COLOR,[Gf]:r.ONE_MINUS_CONSTANT_COLOR,[Vf]:r.CONSTANT_ALPHA,[Hf]:r.ONE_MINUS_CONSTANT_ALPHA};function ut(A,N,V,at,tt,ot,dt,Ut,ct,Nt){if(A===Vn){m===!0&&(Wt(r.BLEND),m=!1);return}if(m===!1&&(St(r.BLEND),m=!0),A!==Ef){if(A!==g||Nt!==R){if((v!==hs||E!==hs)&&(r.blendEquation(r.FUNC_ADD),v=hs,E=hs),Nt)switch(A){case Qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vi:r.blendFunc(r.ONE,r.ONE);break;case ih:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Vt("WebGLState: Invalid blending: ",A);break}else switch(A){case Qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ih:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",A);break}M=null,y=null,w=null,_=null,S.set(0,0,0),I=0,g=A,R=Nt}return}tt=tt||N,ot=ot||V,dt=dt||at,(N!==v||tt!==E)&&(r.blendEquationSeparate(te[N],te[tt]),v=N,E=tt),(V!==M||at!==y||ot!==w||dt!==_)&&(r.blendFuncSeparate(rt[V],rt[at],rt[ot],rt[dt]),M=V,y=at,w=ot,_=dt),(Ut.equals(S)===!1||ct!==I)&&(r.blendColor(Ut.r,Ut.g,Ut.b,ct),S.copy(Ut),I=ct),g=A,R=!1}function ht(A,N){A.side===Fi?Wt(r.CULL_FACE):St(r.CULL_FACE);let V=A.side===Mi;N&&(V=!V),Pt(V),A.blending===Qs&&A.transparent===!1?ut(Vn):ut(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),s.setMask(A.colorWrite);const at=A.stencilWrite;o.setTest(at),at&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),zt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):Wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(A){L!==A&&(A?r.frontFace(r.CW):r.frontFace(r.CCW),L=A)}function mt(A){A!==wf?(St(r.CULL_FACE),A!==z&&(A===eh?r.cullFace(r.BACK):A===Tf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Wt(r.CULL_FACE),z=A}function ee(A){A!==Y&&(B&&r.lineWidth(A),Y=A)}function zt(A,N,V){A?(St(r.POLYGON_OFFSET_FILL),(D!==N||k!==V)&&(D=N,k=V,a.getReversed()&&(N=-N,V=-V),r.polygonOffset(N,V))):Wt(r.POLYGON_OFFSET_FILL)}function se(A){A?St(r.SCISSOR_TEST):Wt(r.SCISSOR_TEST)}function oe(A){A===void 0&&(A=r.TEXTURE0+J-1),j!==A&&(r.activeTexture(A),j=A)}function pe(A,N,V){V===void 0&&(j===null?V=r.TEXTURE0+J-1:V=j);let at=it[V];at===void 0&&(at={type:void 0,texture:void 0},it[V]=at),(at.type!==A||at.texture!==N)&&(j!==V&&(r.activeTexture(V),j=V),r.bindTexture(A,N||Ht[A]),at.type=A,at.texture=N)}function F(){const A=it[j];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function Ue(){try{r.compressedTexImage2D(...arguments)}catch(A){Vt("WebGLState:",A)}}function ae(){try{r.compressedTexImage3D(...arguments)}catch(A){Vt("WebGLState:",A)}}function ve(){try{r.texSubImage2D(...arguments)}catch(A){Vt("WebGLState:",A)}}function pt(){try{r.texSubImage3D(...arguments)}catch(A){Vt("WebGLState:",A)}}function we(){try{r.compressedTexSubImage2D(...arguments)}catch(A){Vt("WebGLState:",A)}}function Xt(){try{r.compressedTexSubImage3D(...arguments)}catch(A){Vt("WebGLState:",A)}}function $t(){try{r.texStorage2D(...arguments)}catch(A){Vt("WebGLState:",A)}}function P(){try{r.texStorage3D(...arguments)}catch(A){Vt("WebGLState:",A)}}function b(){try{r.texImage2D(...arguments)}catch(A){Vt("WebGLState:",A)}}function H(){try{r.texImage3D(...arguments)}catch(A){Vt("WebGLState:",A)}}function lt(A){return u[A]!==void 0?u[A]:r.getParameter(A)}function nt(A,N){u[A]!==N&&(r.pixelStorei(A,N),u[A]=N)}function ft(A){K.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function gt(A){Mt.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),Mt.copy(A))}function O(A,N){let V=c.get(N);V===void 0&&(V=new WeakMap,c.set(N,V));let at=V.get(A);at===void 0&&(at=r.getUniformBlockIndex(N,A.name),r.uniformBlockBinding(N,at,at),V.set(A,at))}function G(A,N,V){const tt=c.get(N).get(A);l[tt]!==V&&(r.bindBufferBase(r.UNIFORM_BUFFER,tt,V),l[tt]=V)}function Z(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,it={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,y=null,E=null,w=null,_=null,S=new vt(0,0,0),I=0,R=!1,L=null,z=null,Y=null,D=null,k=null,K.set(0,0,r.canvas.width,r.canvas.height),Mt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:St,disable:Wt,bindFramebuffer:Ee,drawBuffers:qt,useProgram:ne,setBlending:ut,setMaterial:ht,setFlipSided:Pt,setCullFace:mt,setLineWidth:ee,setPolygonOffset:zt,setScissorTest:se,activeTexture:oe,bindTexture:pe,unbindTexture:F,compressedTexImage2D:Ue,compressedTexImage3D:ae,texImage2D:b,texImage3D:H,pixelStorei:nt,getParameter:lt,updateUBOMapping:O,uniformBlockBinding:G,texStorage2D:$t,texStorage3D:P,texSubImage2D:ve,texSubImage3D:pt,compressedTexSubImage2D:we,compressedTexSubImage3D:Xt,scissor:ft,viewport:gt,reset:Z}}function cb(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u=new Set;let d;const f=new WeakMap,p=new Set,x=new FinalizationRegistry(P=>p.delete(P));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return m?new OffscreenCanvas(P,b):jr("canvas")}function v(P,b,H){let lt=1;const nt=$t(P);if((nt.width>H||nt.height>H)&&(lt=H/Math.max(nt.width,nt.height)),lt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ft=Math.floor(lt*nt.width),gt=Math.floor(lt*nt.height);d===void 0&&(d=g(ft,gt));const O=b?g(ft,gt):d;return O.width=ft,O.height=gt,O.getContext("2d").drawImage(P,0,0,ft,gt),bt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ft+"x"+gt+")."),O}else return"data"in P&&bt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),P;return P}function M(P){return P.generateMipmaps}function y(P){r.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(P,b,H,lt,nt,ft=!1){if(P!==null){if(r[P]!==void 0)return r[P];bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let gt;lt&&(gt=t.get("EXT_texture_norm16"),gt||bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=b;if(b===r.RED&&(H===r.FLOAT&&(O=r.R32F),H===r.HALF_FLOAT&&(O=r.R16F),H===r.UNSIGNED_BYTE&&(O=r.R8),H===r.UNSIGNED_SHORT&&gt&&(O=gt.R16_EXT),H===r.SHORT&&gt&&(O=gt.R16_SNORM_EXT)),b===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(O=r.R8UI),H===r.UNSIGNED_SHORT&&(O=r.R16UI),H===r.UNSIGNED_INT&&(O=r.R32UI),H===r.BYTE&&(O=r.R8I),H===r.SHORT&&(O=r.R16I),H===r.INT&&(O=r.R32I)),b===r.RG&&(H===r.FLOAT&&(O=r.RG32F),H===r.HALF_FLOAT&&(O=r.RG16F),H===r.UNSIGNED_BYTE&&(O=r.RG8),H===r.UNSIGNED_SHORT&&gt&&(O=gt.RG16_EXT),H===r.SHORT&&gt&&(O=gt.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(O=r.RG8UI),H===r.UNSIGNED_SHORT&&(O=r.RG16UI),H===r.UNSIGNED_INT&&(O=r.RG32UI),H===r.BYTE&&(O=r.RG8I),H===r.SHORT&&(O=r.RG16I),H===r.INT&&(O=r.RG32I)),b===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(O=r.RGB8UI),H===r.UNSIGNED_SHORT&&(O=r.RGB16UI),H===r.UNSIGNED_INT&&(O=r.RGB32UI),H===r.BYTE&&(O=r.RGB8I),H===r.SHORT&&(O=r.RGB16I),H===r.INT&&(O=r.RGB32I)),b===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(O=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(O=r.RGBA16UI),H===r.UNSIGNED_INT&&(O=r.RGBA32UI),H===r.BYTE&&(O=r.RGBA8I),H===r.SHORT&&(O=r.RGBA16I),H===r.INT&&(O=r.RGBA32I)),b===r.RGB&&(H===r.UNSIGNED_SHORT&&gt&&(O=gt.RGB16_EXT),H===r.SHORT&&gt&&(O=gt.RGB16_SNORM_EXT),H===r.UNSIGNED_INT_5_9_9_9_REV&&(O=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(O=r.R11F_G11F_B10F)),b===r.RGBA){const G=ft?Qr:ce.getTransfer(nt);H===r.FLOAT&&(O=r.RGBA32F),H===r.HALF_FLOAT&&(O=r.RGBA16F),H===r.UNSIGNED_BYTE&&(O=G===Se?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT&&gt&&(O=gt.RGBA16_EXT),H===r.SHORT&&gt&&(O=gt.RGBA16_SNORM_EXT),H===r.UNSIGNED_SHORT_4_4_4_4&&(O=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(O=r.RGB5_A1)}return(O===r.R16F||O===r.R32F||O===r.RG16F||O===r.RG32F||O===r.RGBA16F||O===r.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function _(P,b){let H;return P?b===null||b===Gi||b===xs?H=r.DEPTH24_STENCIL8:b===yi?H=r.DEPTH32F_STENCIL8:b===ir&&(H=r.DEPTH24_STENCIL8,bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===xs?H=r.DEPTH_COMPONENT24:b===yi?H=r.DEPTH_COMPONENT32F:b===ir&&(H=r.DEPTH_COMPONENT16),H}function S(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==ke&&P.minFilter!==De?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function I(P){const b=new WeakRef(P);i.get(P).__ref=b,p.add(b),x.register(P,b,b)}function R(P){const b=i.get(P).__ref;b!==void 0&&(p.delete(b),x.unregister(b))}function L(P){Y(P.target)}function z(P){D(P.target)}function Y(P){P.removeEventListener("dispose",L),R(P),J(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function D(P){P.removeEventListener("dispose",z),R(P),et(P)}function k(){for(const P of p){const b=P.deref();b!==void 0&&(b.isRenderTarget===!0?D(b):Y(b))}p.clear(),u.clear()}function J(P){const b=i.get(P);if(b.__webglInit===void 0)return;const H=P.source,lt=f.get(H);if(lt){const nt=lt[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&B(P),Object.keys(lt).length===0&&f.delete(H)}i.remove(P)}function B(P){const b=i.get(P);r.deleteTexture(b.__webglTexture);const H=P.source,lt=f.get(H);delete lt[b.__cacheKey],a.memory.textures--}function et(P){const b=i.get(P);b.__depthDisposeCallback&&b.__depthDisposeCallback();const H=P.depthTexture;if(H&&H.renderTarget===P&&Y(H),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let ft=0;ft<b.__webglFramebuffer[nt].length;ft++)r.deleteFramebuffer(b.__webglFramebuffer[nt][ft]);else r.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)r.deleteFramebuffer(b.__webglFramebuffer[nt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const lt=P.textures;for(let nt=0,ft=lt.length;nt<ft;nt++){const gt=i.get(lt[nt]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),a.memory.textures--),i.remove(lt[nt])}i.remove(P)}let q=0;function j(){q=0}function it(){return q}function At(P){q=P}function Dt(){const P=q;return P>=n.maxTextures&&bt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+n.maxTextures),q+=1,P}function K(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.mipmapsAutoUpdate),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Mt(P,b){const H=i.get(P);if(P.isVideoTexture&&we(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const lt=P.image;if(lt===null)bt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)bt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(H,P,b);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+b)}function It(P,b){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ht(H,P,b);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+b)}function Ht(P,b){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ht(H,P,b);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+b)}function St(P,b){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Pt(H,P,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+b)}const Wt={[gs]:r.REPEAT,[Ri]:r.CLAMP_TO_EDGE,[qr]:r.MIRRORED_REPEAT},Ee={[ke]:r.NEAREST,[Ch]:r.NEAREST_MIPMAP_NEAREST,[$s]:r.NEAREST_MIPMAP_LINEAR,[De]:r.LINEAR,[Fr]:r.LINEAR_MIPMAP_NEAREST,[Ki]:r.LINEAR_MIPMAP_LINEAR},qt={[jf]:r.NEVER,[Bh]:r.ALWAYS,[tp]:r.LESS,[Fh]:r.LEQUAL,[ep]:r.EQUAL,[Oh]:r.GEQUAL,[ip]:r.GREATER,[np]:r.NOTEQUAL};function ne(P,b){if(b.type===yi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===De||b.magFilter===Fr||b.magFilter===$s||b.magFilter===Ki||b.minFilter===De||b.minFilter===Fr||b.minFilter===$s||b.minFilter===Ki)&&bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Wt[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Wt[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Wt[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Ee[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Ee[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,qt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ke||b.minFilter!==$s&&b.minFilter!==Ki||b.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function te(P,b){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",L),I(b));const lt=b.source;let nt=f.get(lt);nt===void 0&&(nt={},f.set(lt,nt));const ft=K(b);if(ft!==P.__cacheKey){nt[ft]===void 0&&(nt[ft]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[ft].usedTimes++;const gt=nt[P.__cacheKey];gt!==void 0&&(nt[P.__cacheKey].usedTimes--,gt.usedTimes===0&&B(b)),P.__cacheKey=ft,P.__webglTexture=nt[ft].texture}return H}function rt(P,b,H){return Math.floor(Math.floor(P/H)/b)}function ut(P,b,H,lt){const ft=P.updateRanges;if(ft.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,H,lt,b.data);else{ft.sort((A,N)=>A.start-N.start);let gt=0;for(let A=1;A<ft.length;A++){const N=ft[gt],V=ft[A],at=N.start+N.count,tt=rt(V.start,b.width,4),ot=rt(N.start,b.width,4);V.start<=at+1&&tt===ot&&rt(V.start+V.count-1,b.width,4)===tt?N.count=Math.max(N.count,V.start+V.count-N.start):(++gt,ft[gt]=V)}ft.length=gt+1;const O=e.getParameter(r.UNPACK_ROW_LENGTH),G=e.getParameter(r.UNPACK_SKIP_PIXELS),Z=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let A=0,N=ft.length;A<N;A++){const V=ft[A],at=Math.floor(V.start/4),tt=Math.ceil(V.count/4),ot=at%b.width,dt=Math.floor(at/b.width),Ut=tt,ct=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(r.UNPACK_SKIP_ROWS,dt),e.texSubImage2D(r.TEXTURE_2D,0,ot,dt,Ut,ct,H,lt,b.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,O),e.pixelStorei(r.UNPACK_SKIP_PIXELS,G),e.pixelStorei(r.UNPACK_SKIP_ROWS,Z)}}function ht(P,b,H){let lt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(lt=r.TEXTURE_3D);const nt=te(P,b),ft=b.source;e.bindTexture(lt,P.__webglTexture,r.TEXTURE0+H);const gt=i.get(ft);if(ft.version!==gt.__version||nt===!0){if(e.activeTexture(r.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ct=ce.getPrimaries(ce.workingColorSpace),Nt=b.colorSpace===Sn?null:ce.getPrimaries(b.colorSpace),Yt=b.colorSpace===Sn||ct===Nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let G=v(b.image,!1,n.maxTextureSize);G=Xt(b,G);const Z=s.convert(b.format,b.colorSpace),A=s.convert(b.type);let N=w(b.internalFormat,Z,A,b.normalized,b.colorSpace,b.isVideoTexture);ne(lt,b);let V;const at=b.mipmaps,tt=b.isVideoTexture!==!0,ot=gt.__version===void 0||nt===!0,dt=ft.dataReady,Ut=S(b,G);if(b.isDepthTexture)N=_(b.format===wn,b.type),ot&&(tt?e.texStorage2D(r.TEXTURE_2D,1,N,G.width,G.height):e.texImage2D(r.TEXTURE_2D,0,N,G.width,G.height,0,Z,A,null));else if(b.isDataTexture)if(at.length>0){tt&&ot&&e.texStorage2D(r.TEXTURE_2D,Ut,N,at[0].width,at[0].height);for(let ct=0,Nt=at.length;ct<Nt;ct++)V=at[ct],tt?dt&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,V.width,V.height,Z,A,V.data):e.texImage2D(r.TEXTURE_2D,ct,N,V.width,V.height,0,Z,A,V.data);b.generateMipmaps=!1}else tt?(ot&&e.texStorage2D(r.TEXTURE_2D,Ut,N,G.width,G.height),dt&&ut(b,G,Z,A)):e.texImage2D(r.TEXTURE_2D,0,N,G.width,G.height,0,Z,A,G.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){tt&&ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,N,at[0].width,at[0].height,G.depth);for(let ct=0,Nt=at.length;ct<Nt;ct++)if(V=at[ct],b.format!==Pi)if(Z!==null)if(tt){if(dt)if(b.layerUpdates.size>0){const Yt=ph(V.width,V.height,b.format,b.type);for(const wt of b.layerUpdates){const me=V.data.subarray(wt*Yt/V.data.BYTES_PER_ELEMENT,(wt+1)*Yt/V.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,wt,V.width,V.height,1,Z,me)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,V.width,V.height,G.depth,Z,V.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,N,V.width,V.height,G.depth,0,V.data,0,0);else bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?dt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,V.width,V.height,G.depth,Z,A,V.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,N,V.width,V.height,G.depth,0,Z,A,V.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{tt&&ot&&e.texStorage2D(r.TEXTURE_2D,Ut,N,at[0].width,at[0].height);for(let ct=0,Nt=at.length;ct<Nt;ct++)V=at[ct],b.format!==Pi?Z!==null?tt?dt&&e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,V.width,V.height,Z,V.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,N,V.width,V.height,0,V.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?dt&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,V.width,V.height,Z,A,V.data):e.texImage2D(r.TEXTURE_2D,ct,N,V.width,V.height,0,Z,A,V.data)}else if(b.isDataArrayTexture)if(tt){if(ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,N,G.width,G.height,G.depth),dt)if(b.layerUpdates.size>0){const ct=ph(G.width,G.height,b.format,b.type);for(const Nt of b.layerUpdates){const Yt=G.data.subarray(Nt*ct/G.data.BYTES_PER_ELEMENT,(Nt+1)*ct/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Nt,G.width,G.height,1,Z,A,Yt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Z,A,G.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,N,G.width,G.height,G.depth,0,Z,A,G.data);else if(b.isData3DTexture)tt?(ot&&e.texStorage3D(r.TEXTURE_3D,Ut,N,G.width,G.height,G.depth),dt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Z,A,G.data)):e.texImage3D(r.TEXTURE_3D,0,N,G.width,G.height,G.depth,0,Z,A,G.data);else if(b.isFramebufferTexture){if(ot)if(tt)e.texStorage2D(r.TEXTURE_2D,Ut,N,G.width,G.height);else{let ct=G.width,Nt=G.height;for(let Yt=0;Yt<Ut;Yt++)e.texImage2D(r.TEXTURE_2D,Yt,N,ct,Nt,0,Z,A,null),ct>>=1,Nt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const ct=r.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),G.parentNode!==ct){ct.appendChild(G),u.add(b),ct.onpaint=Nt=>{const Yt=Nt.changedElements;for(const wt of u)Yt.includes(wt.image)&&(wt.needsUpdate=!0)},ct.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,G);else{const Yt=r.RGBA,wt=r.RGBA,me=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Yt,wt,me,G)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(at.length>0){if(tt&&ot){const ct=$t(at[0]);e.texStorage2D(r.TEXTURE_2D,Ut,N,ct.width,ct.height)}for(let ct=0,Nt=at.length;ct<Nt;ct++)V=at[ct],tt?dt&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,Z,A,V):e.texImage2D(r.TEXTURE_2D,ct,N,Z,A,V);b.generateMipmaps=!1}else if(tt){if(ot){const ct=$t(G);e.texStorage2D(r.TEXTURE_2D,Ut,N,ct.width,ct.height)}dt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Z,A,G)}else e.texImage2D(r.TEXTURE_2D,0,N,Z,A,G);M(b)&&b.mipmapsAutoUpdate===!0&&y(lt),gt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Pt(P,b,H){if(b.image.length!==6)return;const lt=te(P,b),nt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);const ft=i.get(nt);if(nt.version!==ft.__version||lt===!0){e.activeTexture(r.TEXTURE0+H);const gt=ce.getPrimaries(ce.workingColorSpace),O=b.colorSpace===Sn?null:ce.getPrimaries(b.colorSpace),G=b.colorSpace===Sn||gt===O?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);const Z=b.isCompressedTexture||b.image[0].isCompressedTexture,A=b.image[0]&&b.image[0].isDataTexture,N=[];for(let wt=0;wt<6;wt++)!Z&&!A?N[wt]=v(b.image[wt],!0,n.maxCubemapSize):N[wt]=A?b.image[wt].image:b.image[wt],N[wt]=Xt(b,N[wt]);const V=N[0],at=s.convert(b.format,b.colorSpace),tt=s.convert(b.type);let ot=w(b.internalFormat,at,tt,b.normalized,b.colorSpace);const dt=b.isVideoTexture!==!0,Ut=ft.__version===void 0||lt===!0,ct=nt.dataReady;let Nt=S(b,V);ne(r.TEXTURE_CUBE_MAP,b);let Yt;if(b.isDepthTexture){if(ot=_(b.format===wn,b.type),Ut)if(dt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,ot,V.width,V.height);else for(let wt=0;wt<6;wt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ot,V.width,V.height,0,at,tt,null)}else if(Z){dt&&Ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,ot,V.width,V.height);for(let wt=0;wt<6;wt++){Yt=N[wt].mipmaps;for(let me=0;me<Yt.length;me++){const Ze=Yt[me];b.format!==Pi?at!==null?dt?ct&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me,0,0,Ze.width,Ze.height,at,Ze.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me,ot,Ze.width,Ze.height,0,Ze.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me,0,0,Ze.width,Ze.height,at,tt,Ze.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me,ot,Ze.width,Ze.height,0,at,tt,Ze.data)}}}else{if(Yt=b.mipmaps,dt&&Ut){Yt.length>0&&Nt++;const wt=$t(N[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,ot,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(A){dt?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,N[wt].width,N[wt].height,at,tt,N[wt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ot,N[wt].width,N[wt].height,0,at,tt,N[wt].data);for(let me=0;me<Yt.length;me++){const Nn=Yt[me].image[wt].image;dt?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me+1,0,0,Nn.width,Nn.height,at,tt,Nn.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me+1,ot,Nn.width,Nn.height,0,at,tt,Nn.data)}}else{dt?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,at,tt,N[wt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,ot,at,tt,N[wt]);for(let me=0;me<Yt.length;me++){const Ze=Yt[me];dt?ct&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me+1,0,0,at,tt,Ze.image[wt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me+1,ot,at,tt,Ze.image[wt])}}}M(b)&&b.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ft.__version=nt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function mt(P,b,H,lt,nt,ft){const gt=s.convert(H.format,H.colorSpace),O=s.convert(H.type),G=w(H.internalFormat,gt,O,H.normalized,H.colorSpace),Z=i.get(b),A=i.get(H);if(A.__renderTarget=b,!Z.__hasExternalTextures){const N=Math.max(1,b.width>>ft),V=Math.max(1,b.height>>ft);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,ft,G,N,V,b.depth,0,gt,O,null):e.texImage2D(nt,ft,G,N,V,0,gt,O,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),pt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,nt,A.__webglTexture,0,ve(b)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,nt,A.__webglTexture,ft),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(P,b,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const lt=b.depthTexture,nt=lt&&lt.isDepthTexture?lt.type:null,ft=_(b.stencilBuffer,nt),gt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve(b),ft,b.width,b.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve(b),ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,P)}else{const lt=b.textures;for(let nt=0;nt<lt.length;nt++){const ft=lt[nt],gt=s.convert(ft.format,ft.colorSpace),O=s.convert(ft.type),G=w(ft.internalFormat,gt,O,ft.normalized,ft.colorSpace);pt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve(b),G,b.width,b.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve(b),G,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,G,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(P,b,H){const lt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const nt=i.get(b.depthTexture);nt.__renderTarget=b;const ft=lt?b.depthTexture.image[0]:b.depthTexture.image;(!nt.__webglTexture||ft.width!==b.width||ft.height!==b.height)&&(ft.width=b.width,ft.height=b.height,b.depthTexture.needsUpdate=!0),lt?St(b.depthTexture,0):Mt(b.depthTexture,0);const gt=nt.__webglTexture,O=ve(b),G=lt?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,Z=b.depthTexture.format===wn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Rn)pt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,G,gt,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,Z,G,gt,0);else if(b.depthTexture.format===wn)pt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,G,gt,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,Z,G,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(P){const b=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const lt=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),lt){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,lt.removeEventListener("dispose",nt)};lt.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=lt}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let lt=0;lt<6;lt++)zt(b.__webglFramebuffer[lt],P,lt);else P.texture.mipmaps.length>0?zt(b.__webglFramebuffer[0],P,0):zt(b.__webglFramebuffer,P,0);else if(H){b.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[lt]),b.__webglDepthbuffer[lt]===void 0)b.__webglDepthbuffer[lt]=r.createRenderbuffer(),ee(b.__webglDepthbuffer[lt],P,!1);else{const nt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[lt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,ft)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ee(b.__webglDepthbuffer,P,!1);else{const nt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,ft)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(P,b,H){const lt=i.get(P);b!==void 0&&mt(lt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&se(P)}function pe(P){const b=P.texture,H=i.get(P),lt=i.get(b);P.addEventListener("dispose",z),I(P);const nt=P.textures,ft=P.isWebGLCubeRenderTarget===!0,gt=nt.length>1;if(gt||(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=b.version,a.memory.textures++),ft){H.__webglFramebuffer=[];for(let O=0;O<6;O++)if(b.mipmaps.length>0){H.__webglFramebuffer[O]=[];for(let G=0;G<b.mipmaps.length;G++)H.__webglFramebuffer[O][G]=r.createFramebuffer()}else H.__webglFramebuffer[O]=r.createFramebuffer()}else{if(b.mipmaps.length>0){H.__webglFramebuffer=[];for(let O=0;O<b.mipmaps.length;O++)H.__webglFramebuffer[O]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(gt)for(let O=0,G=nt.length;O<G;O++){const Z=i.get(nt[O]);Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&pt(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let O=0;O<nt.length;O++){const G=nt[O];H.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[O]);const Z=s.convert(G.format,G.colorSpace),A=s.convert(G.type),N=w(G.internalFormat,Z,A,G.normalized,G.colorSpace,P.isXRRenderTarget===!0),V=ve(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,V,N,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,H.__webglColorRenderbuffer[O])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),ee(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){e.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),ne(r.TEXTURE_CUBE_MAP,b);for(let O=0;O<6;O++)if(b.mipmaps.length>0)for(let G=0;G<b.mipmaps.length;G++)mt(H.__webglFramebuffer[O][G],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,G);else mt(H.__webglFramebuffer[O],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);M(b)?y(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let O=0,G=nt.length;O<G;O++){const Z=nt[O],A=i.get(Z);let N=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(N=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(N,A.__webglTexture),ne(N,Z),mt(H.__webglFramebuffer,P,Z,r.COLOR_ATTACHMENT0+O,N,0),M(Z)&&y(N)}e.unbindTexture()}else{let O=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(O=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(O,lt.__webglTexture),ne(O,b),b.mipmaps.length>0)for(let G=0;G<b.mipmaps.length;G++)mt(H.__webglFramebuffer[G],P,b,r.COLOR_ATTACHMENT0,O,G);else mt(H.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,O,0);M(b)?y(O):b.mipmaps.length>0&&r.texParameteri(O,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&se(P)}function F(P){const b=P.textures;for(let H=0,lt=b.length;H<lt;H++){const nt=b[H];if(M(nt)&&nt.mipmapsAutoUpdate===!0){const ft=E(P),gt=i.get(nt).__webglTexture;e.bindTexture(ft,gt),y(ft),e.unbindTexture()}}}const Ue=[];function ae(P){if(P.samples>0){if(pt(P)===!1){const b=P.textures,H=P.width,lt=P.height;let nt=r.COLOR_BUFFER_BIT;const ft=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=i.get(P),O=b.length>1;if(O)for(let Z=0;Z<b.length;Z++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Z=0;Z<b.length;Z++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),O){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[Z]);const A=i.get(b[Z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,A,0)}r.blitFramebuffer(0,0,H,lt,0,0,H,lt,nt,r.NEAREST),l===!0&&(Ue.length=0,Ue.push(r.COLOR_ATTACHMENT0+Z),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ue.push(ft),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),O)for(let Z=0;Z<b.length;Z++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,gt.__webglColorRenderbuffer[Z]);const A=i.get(b[Z]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.TEXTURE_2D,A,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ve(P){return Math.min(n.maxSamples,P.samples)}function pt(P){const b=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(P){const b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Xt(P,b){const H=P.colorSpace,lt=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Kr&&H!==Sn&&(ce.getTransfer(H)===Se?(lt!==Pi||nt!==Ai)&&bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",H)),b}function $t(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=j,this.getTextureUnits=it,this.setTextureUnits=At,this.setTexture2D=Mt,this.setTexture2DArray=It,this.setTexture3D=Ht,this.setTextureCube=St,this.rebindTextures=oe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=pt,this.dispose=k}function hm(r,t){function e(i,n=Sn){let s;const a=ce.getTransfer(n);if(i===Ai)return r.UNSIGNED_BYTE;if(i===bl)return r.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Ih)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rh)return r.BYTE;if(i===Ph)return r.SHORT;if(i===ir)return r.UNSIGNED_SHORT;if(i===Sl)return r.INT;if(i===Gi)return r.UNSIGNED_INT;if(i===yi)return r.FLOAT;if(i===mi)return r.HALF_FLOAT;if(i===Dh)return r.ALPHA;if(i===Nh)return r.RGB;if(i===Pi)return r.RGBA;if(i===Rn)return r.DEPTH_COMPONENT;if(i===wn)return r.DEPTH_STENCIL;if(i===Tl)return r.RED;if(i===ha)return r.RED_INTEGER;if(i===Wn)return r.RG;if(i===El)return r.RG_INTEGER;if(i===Al)return r.RGBA_INTEGER;if(i===Or||i===Br||i===zr||i===kr)if(a===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Or)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Or)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Br)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Po||i===Io||i===Lo||i===Do)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Po)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===Yr||i===zo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===No||i===Uo)return a===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oo)return s.COMPRESSED_R11_EAC;if(i===Bo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return s.COMPRESSED_RG11_EAC;if(i===zo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ko||i===Go||i===Vo||i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===$o||i===Jo||i===Ko||i===Qo||i===jo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ko)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Go)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ho)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$o)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jo)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tl||i===el||i===il)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===tl)return a===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===el)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nl||i===sl||i===Zr||i===rl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ub=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class db{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new qh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ei({vertexShader:hb,fragmentShader:ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new pi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fb extends nn{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new db,g={},v=e.getContextAttributes();let M=null,y=null;const E=[],w=[],_=new st;let S=null,I=null;const R=new ti;R.viewport=new Te;const L=new ti;L.viewport=new Te;const z=[R,L],Y=new Zp;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Mt=E[K];return Mt===void 0&&(Mt=new vo,E[K]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(K){let Mt=E[K];return Mt===void 0&&(Mt=new vo,E[K]=Mt),Mt.getGripSpace()},this.getHand=function(K){let Mt=E[K];return Mt===void 0&&(Mt=new vo,E[K]=Mt),Mt.getHandSpace()};function J(K){const Mt=w.indexOf(K.inputSource);if(Mt===-1)return;const It=E[Mt];It!==void 0&&(It.update(K.inputSource,K.frame,c||a),It.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){n.removeEventListener("select",J),n.removeEventListener("selectstart",J),n.removeEventListener("selectend",J),n.removeEventListener("squeeze",J),n.removeEventListener("squeezestart",J),n.removeEventListener("squeezeend",J),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",et);for(let K=0;K<E.length;K++){const Mt=w[K];Mt!==null&&(w[K]=null,E[K].disconnect(Mt))}D=null,k=null,m.reset();for(const K in g)delete g[K];if(t.setRenderTarget(M),f=null,d=null,u=null,n=null,y=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),I!==null){const K=I.camera;K.fov=I.fov,K.zoom=I.zoom,K.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",J),n.addEventListener("selectstart",J),n.addEventListener("selectend",J),n.addEventListener("squeeze",J),n.addEventListener("squeezestart",J),n.addEventListener("squeezeend",J),n.addEventListener("end",B),n.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,Ht=null,St=null;v.depth&&(St=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=v.stencil?wn:Rn,Ht=v.stencil?xs:Gi);const Wt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Wt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ke(d.textureWidth,d.textureHeight,{format:Pi,type:Ai,depthTexture:new Ms(d.textureWidth,d.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const It={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,It),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ke(f.framebufferWidth,f.framebufferHeight,{format:Pi,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Dt.setContext(n),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(K){for(let Mt=0;Mt<K.removed.length;Mt++){const It=K.removed[Mt],Ht=w.indexOf(It);Ht>=0&&(w[Ht]=null,E[Ht].disconnect(It))}for(let Mt=0;Mt<K.added.length;Mt++){const It=K.added[Mt];let Ht=w.indexOf(It);if(Ht===-1){for(let Wt=0;Wt<E.length;Wt++)if(Wt>=w.length){w.push(It),Ht=Wt;break}else if(w[Wt]===null){w[Wt]=It,Ht=Wt;break}if(Ht===-1)break}const St=E[Ht];St&&St.connect(It)}}function q(K,Mt){Mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let Mt=K.near,It=K.far;m.texture!==null&&(m.depthNear>0&&(Mt=m.depthNear),m.depthFar>0&&(It=m.depthFar)),Y.near=L.near=R.near=Mt,Y.far=L.far=R.far=It,(D!==Y.near||k!==Y.far)&&(n.updateRenderState({depthNear:Y.near,depthFar:Y.far}),D=Y.near,k=Y.far),Y.layers.mask=K.layers.mask|6,R.layers.mask=Y.layers.mask&-5,L.layers.mask=Y.layers.mask&-3;const Ht=K.parent,St=Y.cameras;q(Y,Ht);for(let Wt=0;Wt<St.length;Wt++)q(St[Wt],Ht);Y.projectionMatrix.copy(R.projectionMatrix),Y.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&K.isPerspectiveCamera&&(I={camera:K,fov:K.fov,zoom:K.zoom}),j(K,Y,Ht)};function j(K,Mt,It){It===null?K.matrix.copy(Mt.matrixWorld):(K.matrix.copy(It.matrixWorld),K.matrix.invert(),K.matrix.multiply(Mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Mt.projectionMatrix),K.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=nr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(K){return g[K]};let it=null;function At(K,Mt){if(h=Mt.getViewerPose(c||a),p=Mt,h!==null){const It=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ht=!1;It.length!==Y.cameras.length&&(Y.cameras.length=0,Ht=!0);for(let qt=0;qt<It.length;qt++){const ne=It[qt];let te=null;if(f!==null)te=f.getViewport(ne);else{const ut=u.getViewSubImage(d,ne);te=ut.viewport,qt===0&&(t.setRenderTargetTextures(y,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(y))}let rt=z[qt];rt===void 0&&(rt=new ti,rt.layers.enable(qt),rt.viewport=new Te,z[qt]=rt),rt.matrix.fromArray(ne.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ne.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(te.x,te.y,te.width,te.height),qt===0&&(Y.matrix.copy(rt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ht===!0&&Y.cameras.push(rt)}const St=n.enabledFeatures;if(St&&St.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const qt=u.getDepthInformation(It[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,n.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let qt=0;qt<It.length;qt++){const ne=It[qt].camera;if(ne){let te=g[ne];te||(te=new qh,g[ne]=te);const rt=u.getCameraImage(ne);te.sourceTexture=rt}}}}for(let It=0;It<E.length;It++){const Ht=w[It],St=E[It];Ht!==null&&St!==void 0&&St.update(Ht,Mt,c||a)}it&&it(K,Mt),Mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Mt}),p=null}const Dt=new tm;Dt.setAnimationLoop(At),this.setAnimationLoop=function(K){it=K},this.dispose=function(){}}}const pb=new Kt,um=new Qt;um.set(-1,0,0,0,1,0,0,0,1);function mb(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Rp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Mi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Mi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=t.get(g),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(um),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function gb(r,t,e,i){let n={},s={};function a(v,M){const y=M.program;i.uniformBlockBinding(v,y,n[v.id])}function o(v,M){let y=n[v.id];y===void 0&&(p(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",m));const E=M.program;i.updateUBOMapping(v,E);const w=t.render.frame;s[v.id]!==w&&(c(v),s[v.id]=w)}function l(v){const M=r.createBuffer(),y=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,y,E),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function c(v){const M=n[v.id],y=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,_=y.length;w<_;w++){const S=y[w];if(Array.isArray(S))for(let I=0,R=S.length;I<R;I++)h(S[I],w,I,E);else h(S,w,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,M,y,E){if(d(v,M,y,E)===!0){const w=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let I=0;I<_.length;I++){const R=_[I],L=x(R,!0);u(R,v.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,v.__data)}}function u(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function d(v,M,y,E){const w=v.value,_=M+"_"+y;if(Array.isArray(w)){E[_]===void 0&&(E[_]=[]);const S=E[_];let I=!1;for(let R=0;R<w.length;R++)f(w[R],S,R)===!0&&(I=!0);return I}return f(w,E,_)}function f(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{const E=M[y];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function p(v){const M=v.uniforms;let y=0;const E=16;for(let _=0,S=M.length;_<S;_++){const I=Array.isArray(M[_])?M[_]:[M[_]];for(let R=0,L=I.length;R<L;R++){const z=I[R],Y=Array.isArray(z.value)?z.value:[z.value],D=Array.isArray(M[_])||Array.isArray(z.value);let k=y;for(let B=0,et=Y.length;B<et;B++){const q=Y[B],j=x(q,D),it=y%E,At=it%j.boundary,Dt=it+At;y+=At,Dt!==0&&E-Dt<j.storage&&(y+=E-Dt),B===0&&(k=y),y+=j.storage}const J=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new J((y-k)/Float32Array.BYTES_PER_ELEMENT),z.__offset=k}}const w=y%E;return w>0&&(y+=E-w),v.__size=y,v.__cache={},this}function x(v,M){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):bt("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){const M=v.target;M.removeEventListener("dispose",m),r.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function g(){for(const v in n)r.deleteBuffer(n[v]);n={},s={}}return{bind:a,update:o,dispose:g}}const xb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ln=null;function _b(){return ln===null&&(ln=new ki(xb,16,16,Wn,mi),ln.name="DFG_LUT",ln.minFilter=De,ln.magFilter=De,ln.wrapS=Ri,ln.wrapT=Ri,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class dm{constructor(t={}){const{canvas:e=rp(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ai}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=f,m=new Set([Al,El,ha]),g=new Set([Ai,Gi,ir,xs,bl,wl]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let E=null,w=null;const _=[],S=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,z=null,Y=null,D=null,k=null;this._outputColorSpace=We;let J=0,B=0,et=null,q=-1,j=null;const it=new Te,At=new Te;let Dt=null;const K=new vt(0);let Mt=0,It=e.width,Ht=e.height,St=1,Wt=null,Ee=null;const qt=new Te(0,0,It,Ht),ne=new Te(0,0,It,Ht);let te=!1;const rt=new ys,ut=new da;let ht=!1,Pt=!1;const mt=new Kt,ee=new C,zt=new Te,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function pe(){return et===null?St:1}let F=i;function Ue(T,U){return e.getContext(T,U)}let ae,ve,pt,we,Xt,$t,P,b,H,lt,nt,ft,gt,O,G,Z,A,N,V,at,tt,ot,dt;try{const T={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),F===null){const U="webgl2";if(F=Ue(U,T),F===null)throw Ue(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(T){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Vt("WebGLRenderer: "+T.message),T}function Ut(){ae=new bM(F),ae.init(),tt=new hm(F,ae),ve=new dM(F,ae,t,tt),pt=new lb(F,ae),ve.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),Y=F.createFramebuffer(),D=F.createFramebuffer(),k=F.createFramebuffer(),we=new EM(F),Xt=new ZS,$t=new cb(F,ae,pt,Xt,ve,tt,we),P=new SM(R),b=new C_(F),ot=new hM(F,b),H=new wM(F,b,we,ot),lt=new CM(F,H,b,ot,we),N=new AM(F,ve,$t),G=new fM(Xt),nt=new YS(R,P,ae,ve,ot,G),ft=new mb(R,Xt),gt=new JS,O=new ib(ae),A=new cM(R,P,pt,lt,p,l),Z=new ob(R,lt,ve),dt=new gb(F,we,ve,pt),V=new uM(F,ae,we),at=new TM(F,ae,we),we.programs=nt.programs,R.capabilities=ve,R.extensions=ae,R.properties=Xt,R.renderLists=gt,R.shadowMap=Z,R.state=pt,R.info=we}x!==Ai&&(I=new PM(x,e.width,e.height,o,n,s));const ct=new fb(R,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(T){T!==void 0&&(St=T,this.setSize(It,Ht,!1))},this.getSize=function(T){return T.set(It,Ht)},this.setSize=function(T,U,$=!0){if(ct.isPresenting){bt("WebGLRenderer: Can't change size while VR device is presenting.");return}It=T,Ht=U,e.width=Math.floor(T*St),e.height=Math.floor(U*St),$===!0&&(e.style.width=T+"px",e.style.height=U+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(It*St,Ht*St).floor()},this.setDrawingBufferSize=function(T,U,$){It=T,Ht=U,St=$,e.width=Math.floor(T*$),e.height=Math.floor(U*$),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===Ai){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(it)},this.getViewport=function(T){return T.copy(qt)},this.setViewport=function(T,U,$,W){T.isVector4?qt.set(T.x,T.y,T.z,T.w):qt.set(T,U,$,W),pt.viewport(it.copy(qt).multiplyScalar(pe()).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,U,$,W){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,U,$,W),pt.scissor(At.copy(ne).multiplyScalar(pe()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){pt.setScissorTest(te=T)},this.setOpaqueSort=function(T){Wt=T},this.setTransparentSort=function(T){Ee=T},this.getClearColor=function(T){return T.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor(...arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,$=!0){let W=0;if(T){let X=!1;if(et!==null){const yt=et.texture.format;X=m.has(yt)}if(X){const yt=et.texture.type,Ft=g.has(yt),_t=A.getClearColor(),Rt=A.getClearAlpha(),kt=_t.r,ie=_t.g,ue=_t.b;Ft?(v[0]=kt,v[1]=ie,v[2]=ue,v[3]=Rt,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=kt,M[1]=ie,M[2]=ue,M[3]=Rt,F.clearBufferiv(F.COLOR,0,M))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),A.dispose(),gt.dispose(),O.dispose(),$t.dispose(),Xt.dispose(),P.dispose(),lt.dispose(),H.dispose(),ot.dispose(),dt.dispose(),nt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Tu),ct.removeEventListener("sessionend",Eu),$n.stop()};function Nt(T){T.preventDefault(),ta("WebGLRenderer: Context Lost."),L=!0}function Yt(){ta("WebGLRenderer: Context Restored."),L=!1;const T=we.autoReset,U=Z.enabled,$=Z.autoUpdate,W=Z.needsUpdate,X=Z.type;Ut(),we.autoReset=T,Z.enabled=U,Z.autoUpdate=$,Z.needsUpdate=W,Z.type=X}function wt(T){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){const U=T.target;U.removeEventListener("dispose",me),Ze(U)}function Ze(T){Nn(T),Xt.remove(T)}function Nn(T){const U=Xt.get(T).programs;U!==void 0&&(U.forEach(function($){nt.releaseProgram($)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,$,W,X,yt){U===null&&(U=se);const Ft=X.isMesh&&X.matrixWorld.determinantAffine()<0,_t=Em(T,U,$,W,X);pt.setMaterial(W,Ft);let Rt=$.index,kt=1;if(W.wireframe===!0){if(Rt=H.getWireframeAttribute($),Rt===void 0)return;kt=2}const ie=$.drawRange,ue=$.attributes.position;let Ot=ie.start*kt,de=(ie.start+ie.count)*kt;yt!==null&&(Ot=Math.max(Ot,yt.start*kt),de=Math.min(de,(yt.start+yt.count)*kt)),Rt!==null?(Ot=Math.max(Ot,0),de=Math.min(de,Rt.count)):ue!=null&&(Ot=Math.max(Ot,0),de=Math.min(de,ue.count));const Ge=de-Ot;if(Ge<0||Ge===1/0)return;ot.setup(X,W,_t,$,Rt);let Re,Ae=V;if(Rt!==null&&(Re=b.get(Rt),Ae=at,Ae.setIndex(Re)),X.isMesh)W.wireframe===!0?(pt.setLineWidth(W.wireframeLinewidth*pe()),Ae.setMode(F.LINES)):Ae.setMode(F.TRIANGLES);else if(X.isLine){let ai=W.linewidth;ai===void 0&&(ai=1),pt.setLineWidth(ai*pe()),X.isLineSegments?Ae.setMode(F.LINES):X.isLineLoop?Ae.setMode(F.LINE_LOOP):Ae.setMode(F.LINE_STRIP)}else X.isPoints?Ae.setMode(F.POINTS):X.isSprite&&Ae.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Ae.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ai=X._multiDrawStarts,Bt=X._multiDrawCounts,gi=X._multiDrawCount,Me=Rt?b.get(Rt).bytesPerElement:1,Jn=Xt.get(W).currentProgram.getUniforms();for(let oi=0;oi<gi;oi++)Jn.setValue(F,"_gl_DrawID",oi),Ae.render(ai[oi]/Me,Bt[oi])}else if(X.isInstancedMesh)Ae.renderInstances(Ot,Ge,X.count);else if($.isInstancedBufferGeometry){const ai=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Bt=Math.min($.instanceCount,ai);Ae.renderInstances(Ot,Ge,Bt)}else Ae.render(Ot,Ge)};function wu(T,U,$,W){z!==null&&T.isNodeMaterial&&z.setObject(W,T),ht===!0&&G.setState(T,$,!1),T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=Mi,T.needsUpdate=!0,xr(T,U,W),T.side=Hn,T.needsUpdate=!0,xr(T,U,W),T.side=Fi):xr(T,U,W)}this.compile=function(T,U,$=null){$===null&&($=T),z!==null&&z.renderStart(T,U,$),w=O.get($),w.init(U),S.push(w),$.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),T!==$&&T.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Pt=this.localClippingEnabled,ht=G.init(this.clippingPlanes,Pt),ht===!0&&G.setGlobalState(this.clippingPlanes,U),z!==null&&Z.render(w.state.shadowsArray,$,U);const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const yt=X.material;if(yt)if(Array.isArray(yt))for(let Ft=0;Ft<yt.length;Ft++){const _t=yt[Ft];wu(_t,$,U,X),W.add(_t)}else wu(yt,$,U,X),W.add(yt)}),w=S.pop(),z!==null&&z.renderEnd(),W},this.compileAsync=function(T,U,$=null){const W=this.compile(T,U,$);return new Promise(X=>{function yt(){if(W.forEach(function(Ft){const Rt=Xt.get(Ft).currentProgram;(Rt===void 0||Rt.isReady())&&W.delete(Ft)}),W.size===0){X(T);return}setTimeout(yt,10)}ae.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ac=null;function wm(T){ac&&ac(T)}function Tu(){$n.stop()}function Eu(){$n.start()}const $n=new tm;$n.setAnimationLoop(wm),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(T){ac=T,ct.setAnimationLoop(T),T===null?$n.stop():$n.start()},ct.addEventListener("sessionstart",Tu),ct.addEventListener("sessionend",Eu),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(T,U);const $=ct.enabled===!0&&ct.isPresenting===!0,W=I!==null&&(et===null||$)&&I.begin(R,et);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(U),U=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,et),w=O.get(T,S.length),w.init(U),w.state.textureUnits=$t.getTextureUnits(),S.push(w),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ut.setFromArrayCamera(U):rt.setFromProjectionMatrix(mt,Oi,U.reversedDepth),Pt=this.localClippingEnabled,ht=G.init(this.clippingPlanes,Pt),E=gt.get(T,_.length),E.init(),_.push(E),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){const Ft=R.xr.getDepthSensingMesh();Ft!==null&&oc(Ft,U,-1/0,R.sortObjects)}oc(T,U,0,R.sortObjects),E.finish(),z!==null&&z.updateLights(w.state.lightsArray),R.sortObjects===!0&&E.sort(Wt,Ee),oe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,oe&&A.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),ht===!0&&G.beginShadows();const X=w.state.shadowsArray;if(Z.render(X,T,U),ht===!0&&G.endShadows(),(W&&I.hasRenderPass())===!1){const Ft=E.opaque,_t=E.transmissive;if(w.setupLights(),U.isArrayCamera){const Rt=U.cameras;if(_t.length>0)for(let kt=0,ie=Rt.length;kt<ie;kt++){const ue=Rt[kt];Cu(Ft,_t,T,ue)}oe&&A.render(T);for(let kt=0,ie=Rt.length;kt<ie;kt++){const ue=Rt[kt];Au(E,T,ue,ue.viewport)}}else _t.length>0&&Cu(Ft,_t,T,U),oe&&A.render(T),Au(E,T,U)}et!==null&&B===0&&($t.updateMultisampleRenderTarget(et),$t.updateRenderTargetMipmap(et)),W&&I.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),ot.resetDefaultState(),q=-1,j=null,S.pop(),S.length>0?(w=S[S.length-1],$t.setTextureUnits(w.state.textureUnits),ht===!0&&G.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,z!==null&&z.renderEnd()};function oc(T,U,$,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){const Ft=U.isArrayCamera?ut:rt;if(!T.frustumCulled||T.intersectsFrustum(Ft)){W&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(mt);const _t=lt.update(T),Rt=T.material;Rt.visible&&E.push(T,_t,Rt,$,zt.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){const Ft=U.isArrayCamera?ut:rt;if(!T.frustumCulled||T.intersectsFrustum(Ft)){const _t=lt.update(T),Rt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),zt.copy(_t.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(mt)),Array.isArray(Rt)){const kt=_t.groups;for(let ie=0,ue=kt.length;ie<ue;ie++){const Ot=kt[ie],de=Rt[Ot.materialIndex];de&&de.visible&&E.push(T,_t,de,$,zt.z,Ot,U)}}else Rt.visible&&E.push(T,_t,Rt,$,zt.z,null,U)}}}const yt=T.children;for(let Ft=0,_t=yt.length;Ft<_t;Ft++)oc(yt[Ft],U,$,W)}function Au(T,U,$,W){const{opaque:X,transmissive:yt,transparent:Ft}=T;w.setupLightsView($),ht===!0&&G.setGlobalState(R.clippingPlanes,$),W&&pt.viewport(it.copy(W)),X.length>0&&ya(X,U,$),yt.length>0&&ya(yt,U,$),Ft.length>0&&ya(Ft,U,$),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Cu(T,U,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Ot=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Ke(1,1,{generateMipmaps:!0,type:Ot?mi:Ai,minFilter:Ki,samples:Math.max(4,ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const yt=w.state.transmissionRenderTarget[W.id],Ft=W.viewport||it;yt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);const _t=R.getRenderTarget(),Rt=R.getActiveCubeFace(),kt=R.getActiveMipmapLevel();R.setRenderTarget(yt),R.getClearColor(K),Mt=R.getClearAlpha(),Mt<1&&R.setClearColor(16777215,.5),R.clear(),oe&&A.render($);const ie=R.toneMapping;R.toneMapping=dn;const ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),ht===!0&&G.setGlobalState(R.clippingPlanes,W),ya(T,$,W),$t.updateMultisampleRenderTarget(yt),$t.updateRenderTargetMipmap(yt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let de=0,Ge=U.length;de<Ge;de++){const Re=U[de],{object:Ae,geometry:ai,material:Bt,group:gi}=Re;if(Bt.side===Fi&&Ae.layers.test(W.layers)){const Me=Bt.side;Bt.side=Mi,Bt.needsUpdate=!0,Ru(Ae,$,W,ai,Bt,gi),Bt.side=Me,Bt.needsUpdate=!0,Ot=!0}}Ot===!0&&($t.updateMultisampleRenderTarget(yt),$t.updateRenderTargetMipmap(yt))}R.setRenderTarget(_t,Rt,kt),R.setClearColor(K,Mt),ue!==void 0&&(W.viewport=ue),R.toneMapping=ie}function ya(T,U,$){const W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,yt=T.length;X<yt;X++){const Ft=T[X],{object:_t,geometry:Rt,group:kt}=Ft;let ie=Ft.material;ie.allowOverride===!0&&W!==null&&(ie=W),_t.layers.test($.layers)&&Ru(_t,U,$,Rt,ie,kt)}}function Ru(T,U,$,W,X,yt){z!==null&&X.isNodeMaterial&&z.setObject(T,X),T.onBeforeRender(R,U,$,W,X,yt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(R,U,$,W,T,yt),X.transparent===!0&&X.side===Fi&&X.forceSinglePass===!1?(X.side=Mi,X.needsUpdate=!0,R.renderBufferDirect($,U,W,X,T,yt),X.side=Hn,X.needsUpdate=!0,R.renderBufferDirect($,U,W,X,T,yt),X.side=Fi):R.renderBufferDirect($,U,W,X,T,yt),T.onAfterRender(R,U,$,W,X,yt)}function Pu(T){let U=0;for(const $ of T)$.texture!==null&&U++;return U}function xr(T,U,$){U.isScene!==!0&&(U=se);const W=Xt.get(T),X=w.state.lights,yt=w.state.shadowsArray,Ft=X.state.version,_t=nt.getParameters(T,X.state,yt,U,$,w.state.lightProbeGridArray),Rt=nt.getProgramCacheKey(_t);let kt=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const ie=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=P.get(T.envMap||W.environment,ie),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",me),kt=new Map,W.programs=kt,W.programVariants=new Map);let ue=kt.get(Rt);if(ue!==void 0){if(W.currentProgram===ue&&W.lightsStateVersion===Ft)return Lu(T,_t),ue}else _t.uniforms=nt.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,$,_t),T.onBeforeCompile(_t,R),ue=nt.acquireProgram(_t,Rt),kt.set(Rt,ue),W.uniforms=_t.uniforms;const Ot=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=G.uniform),Lu(T,_t),W.needsLights=Cm(T),W.lightsStateVersion=Ft,W.needsLights&&(Ot.ambientLightColor.value=X.state.ambient,Ot.lightProbe.value=X.state.probe,Ot.sunLights.value=X.state.sun,Ot.sunLightShadows.value=X.state.sunShadow,Ot.directionalLights.value=X.state.directional,Ot.directionalLightShadows.value=X.state.directionalShadow,Ot.spotLights.value=X.state.spot,Ot.spotLightShadows.value=X.state.spotShadow,Ot.rectAreaLights.value=X.state.rectArea,Ot.ltc_1.value=X.state.rectAreaLTC1,Ot.ltc_2.value=X.state.rectAreaLTC2,Ot.pointLights.value=X.state.point,Ot.pointLightShadows.value=X.state.pointShadow,Ot.hemisphereLights.value=X.state.hemi,Ot.sunShadowMatrix.value=X.state.sunShadowMatrix,Ot.sunShadowCascade.value=X.state.sunShadowCascade,Ot.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ot.spotLightMatrix.value=X.state.spotLightMatrix,Ot.spotLightMap.value=X.state.spotLightMap,Ot.pointShadowMatrix.value=X.state.pointShadowMatrix),W.numLightProbeGrids=Pu(w.state.lightProbeGridArray),W.currentProgram=ue,W.uniformsList=null,ue}function Tm(T,U,$,W,X){const yt=Xt.get(T),Ft=yt.currentProgram.id+","+W+","+X;let _t=yt.programVariants.get(Ft);return _t===void 0?(_t=xr(T,U,$),yt.programVariants.set(Ft,_t)):(yt.currentProgram=_t,yt.uniformsList=null,yt.outputColorSpace=W,yt.toneMapping=X),_t}function Iu(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=yo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Lu(T,U){const $=Xt.get(T);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function Em(T,U,$,W,X){U.isScene!==!0&&(U=se),$t.resetTextureUnits();const yt=U.fog,Ft=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,_t=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ce.workingColorSpace,Rt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,kt=P.get(W.envMap||Ft,Rt),ie=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ue=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ot=!!$.morphAttributes.position,de=!!$.morphAttributes.normal,Ge=!!$.morphAttributes.color;let Re=dn;W.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Re=R.toneMapping);const Ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ai=Ae!==void 0?Ae.length:0,Bt=Xt.get(W),gi=w.state.lights;if(ht===!0&&(Pt===!0||T!==j)){const Ie=T===j&&W.id===q;G.setState(W,T,Ie)}let Me=!1,Jn=!1;W.version===Bt.__version?Bt.needsLights&&Bt.lightsStateVersion!==gi.state.version||X.isBatchedMesh&&Bt.batching===!1||!X.isBatchedMesh&&Bt.batching===!0||X.isBatchedMesh&&Bt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Bt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Bt.instancing===!1||!X.isInstancedMesh&&Bt.instancing===!0||X.isSkinnedMesh&&Bt.skinning===!1||!X.isSkinnedMesh&&Bt.skinning===!0||X.isInstancedMesh&&Bt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Bt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Bt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Bt.instancingMorph===!1&&X.morphTexture!==null||Bt.envMap!==kt||W.fog===!0&&Bt.fog!==yt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==G.numPlanes||Bt.numIntersection!==G.numIntersection)||Bt.vertexAlphas!==ie||Bt.vertexTangents!==ue||Bt.morphTargets!==Ot||Bt.morphNormals!==de||Bt.morphColors!==Ge||Bt.morphTargetsCount!==ai||Bt.numLightProbeGrids!==Pu(w.state.lightProbeGridArray)?Me=!0:(Bt.outputColorSpace!==_t||Bt.toneMapping!==Re)&&(Jn=!0):(Me=!0,Bt.__version=W.version);let oi=Bt.currentProgram;(Me===!0||Jn===!0)&&(oi=Jn===!0?Tm(W,U,X,_t,Re):xr(W,U,X),z&&W.isNodeMaterial&&z.onUpdateProgram(W,oi,Bt));let Ma=!1,Un=!1,Kn=!1;const ge=oi.getUniforms(),je=Bt.uniforms;if(pt.useProgram(oi.program)&&(Ma=!0,Un=!0,Kn=!0),W.id!==q&&(q=W.id,Un=!0),Ma||j!==T){pt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(F,"projectionMatrix",T.projectionMatrix),ge.setValue(F,"viewMatrix",T.matrixWorldInverse);const $e=ge.map.cameraPosition;$e!==void 0&&$e.setValue(F,ee.setFromMatrixPosition(T.matrixWorld)),ve.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,Un=!0,Kn=!0)}if(Bt.needsLights&&(gi.state.sunShadowMap.length>0&&ge.setValue(F,"sunShadowMap",gi.state.sunShadowMap,$t),gi.state.directionalShadowMap.length>0&&ge.setValue(F,"directionalShadowMap",gi.state.directionalShadowMap,$t),gi.state.spotShadowMap.length>0&&ge.setValue(F,"spotShadowMap",gi.state.spotShadowMap,$t),gi.state.pointShadowMap.length>0&&ge.setValue(F,"pointShadowMap",gi.state.pointShadowMap,$t)),X.isSkinnedMesh){ge.setOptional(F,X,"bindMatrix"),ge.setOptional(F,X,"bindMatrixInverse");const Ie=X.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ge.setValue(F,"boneTexture",Ie.boneTexture,$t))}X.isBatchedMesh&&(ge.setOptional(F,X,"batchingTexture"),ge.setValue(F,"batchingTexture",X._matricesTexture,$t),ge.setOptional(F,X,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",X._indirectTexture,$t),ge.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",X._colorsTexture,$t));const Wi=$.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&N.update(X,$,oi),(Un||Bt.receiveShadow!==X.receiveShadow)&&(Bt.receiveShadow=X.receiveShadow,ge.setValue(F,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(je.envMapIntensity.value=U.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=_b()),Un){if(ge.setValue(F,"toneMappingExposure",R.toneMappingExposure),Bt.needsLights&&Am(je,Kn),yt&&W.fog===!0&&ft.refreshFogUniforms(je,yt),ft.refreshMaterialUniforms(je,W,St,Ht,w.state.transmissionRenderTarget[T.id]),Bt.needsLights&&Bt.numLightProbeGrids>0){const Ie=y;let $e=0;for(const fn of w.state.lightProbeGridArray)fn.texture!==null&&(Ie.textures[$e]=fn.texture,Ie.min[$e]=fn.boundingBox.min,Ie.max[$e]=fn.boundingBox.max,Ie.resolution[$e]=fn.resolution,$e++);for(const fn in Ie)Ie[fn].length=$e;je.probesSH.value=Ie.textures,je.probesMin.value=Ie.min,je.probesMax.value=Ie.max,je.probesResolution.value=Ie.resolution}yo.upload(F,Iu(Bt),je,$t)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(yo.upload(F,Iu(Bt),je,$t),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(F,"center",X.center),ge.setValue(F,"modelViewMatrix",X.modelViewMatrix),ge.setValue(F,"normalMatrix",X.normalMatrix),ge.setValue(F,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const Ie=W.uniformsGroups;for(let $e=0,fn=Ie.length;$e<fn;$e++){const Nu=Ie[$e];dt.update(Nu,oi),dt.bind(Nu,oi)}}return oi}function Am(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Cm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(T,U,$){const W=Xt.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Xt.get(T.texture).__webglTexture=U,Xt.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const $=Xt.get(T);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,$=0){et=T,J=U,B=$;let W=null,X=!1,yt=!1;if(T){const _t=Xt.get(T);if(_t.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(F.FRAMEBUFFER,_t.__webglFramebuffer),it.copy(T.viewport),At.copy(T.scissor),Dt=T.scissorTest,pt.viewport(it),pt.scissor(At),pt.setScissorTest(Dt),q=-1;return}else if(_t.__webglFramebuffer===void 0)$t.setupRenderTarget(T);else if(_t.__hasExternalTextures)$t.rebindTextures(T,Xt.get(T.texture).__webglTexture,Xt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ie=T.depthTexture;if(_t.__boundDepthTexture!==ie){if(ie!==null&&Xt.has(ie)&&(T.width!==ie.image.width||T.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(T)}}const Rt=T.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(yt=!0);const kt=Xt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?W=kt[U][$]:W=kt[U],X=!0):T.samples>0&&$t.useMultisampledRTT(T)===!1?W=Xt.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?W=kt[$]:W=kt,it.copy(T.viewport),At.copy(T.scissor),Dt=T.scissorTest}else it.copy(qt).multiplyScalar(St).floor(),At.copy(ne).multiplyScalar(St).floor(),Dt=te;if($!==0&&(W=Y),pt.bindFramebuffer(F.FRAMEBUFFER,W)&&pt.drawBuffers(T,W),pt.viewport(it),pt.scissor(At),pt.setScissorTest(Dt),X){const _t=Xt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,$)}else if(yt){const _t=U;for(let Rt=0;Rt<T.textures.length;Rt++){const kt=Xt.get(T.textures[Rt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Rt,kt.__webglTexture,$,_t)}}else if(T!==null&&$!==0){const _t=Xt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,$)}q=-1};function Du(T){const U=Xt.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=ve.textureFormatReadable(T.format),U.__typeReadable=ve.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,$,W,X,yt,Ft,_t=0){if(!(T&&T.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Rt=Rt[Ft],Array.isArray(Rt)&&(Rt=Rt[0])),Rt){pt.bindFramebuffer(F.FRAMEBUFFER,Rt);try{const kt=T.textures[_t],ie=kt.format,ue=kt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);const Ot=Du(kt);if(Ot.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&$>=0&&$<=T.height-X&&F.readPixels(U,$,W,X,tt.convert(ie),tt.convert(ue),yt)}finally{const kt=et!==null?Xt.get(et).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,U,$,W,X,yt,Ft,_t=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Rt=Rt[Ft],Array.isArray(Rt)&&(Rt=Rt[0])),Rt)if(U>=0&&U<=T.width-W&&$>=0&&$<=T.height-X){pt.bindFramebuffer(F.FRAMEBUFFER,Rt);const kt=T.textures[_t],ie=kt.format,ue=kt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t);const Ot=Du(kt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.bufferData(F.PIXEL_PACK_BUFFER,yt.byteLength,F.STREAM_READ),F.readPixels(U,$,W,X,tt.convert(ie),tt.convert(ue),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Ge=et!==null?Xt.get(et).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Ge);const Re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await E0(F,Re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,yt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(de),F.deleteSync(Re),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,$=0){const W=Math.pow(2,-$),X=Math.floor(T.image.width*W),yt=Math.floor(T.image.height*W),Ft=U!==null?U.x:0,_t=U!==null?U.y:0;$t.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ft,_t,X,yt),pt.unbindTexture()},this.copyTextureToTexture=function(T,U,$=null,W=null,X=0,yt=0){let Ft,_t,Rt,kt,ie,ue,Ot,de,Ge;const Re=T.isCompressedTexture?T.mipmaps[yt]:T.image;if($!==null)Ft=$.max.x-$.min.x,_t=$.max.y-$.min.y,Rt=$.isBox3?$.max.z-$.min.z:1,kt=$.min.x,ie=$.min.y,ue=$.isBox3?$.min.z:0;else{const ge=Math.pow(2,-X);Ft=Math.floor(Re.width*ge),_t=Math.floor(Re.height*ge),T.isDataArrayTexture?Rt=Re.depth:T.isData3DTexture?Rt=Math.floor(Re.depth*ge):Rt=1,kt=0,ie=0,ue=0}W!==null?(Ot=W.x,de=W.y,Ge=W.z):(Ot=0,de=0,Ge=0);const Ae=tt.convert(U.format),ai=tt.convert(U.type);let Bt;U.isData3DTexture?($t.setTexture3D(U,0),Bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($t.setTexture2DArray(U,0),Bt=F.TEXTURE_2D_ARRAY):($t.setTexture2D(U,0),Bt=F.TEXTURE_2D),pt.activeTexture(F.TEXTURE0),pt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),pt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const gi=pt.getParameter(F.UNPACK_ROW_LENGTH),Me=pt.getParameter(F.UNPACK_IMAGE_HEIGHT),Jn=pt.getParameter(F.UNPACK_SKIP_PIXELS),oi=pt.getParameter(F.UNPACK_SKIP_ROWS),Ma=pt.getParameter(F.UNPACK_SKIP_IMAGES);pt.pixelStorei(F.UNPACK_ROW_LENGTH,Re.width),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Re.height),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,kt),pt.pixelStorei(F.UNPACK_SKIP_ROWS,ie),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,ue);const Un=T.isDataArrayTexture||T.isData3DTexture,Kn=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const ge=Xt.get(T),je=Xt.get(U),Wi=Xt.get(ge.__renderTarget),Ie=Xt.get(je.__renderTarget);pt.bindFramebuffer(F.READ_FRAMEBUFFER,Wi.__webglFramebuffer),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let $e=0;$e<Rt;$e++)Un&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(T).__webglTexture,X,ue+$e),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(U).__webglTexture,yt,Ge+$e)),F.blitFramebuffer(kt,ie,kt+Ft,ie+_t,Ot,de,Ot+Ft,de+_t,F.DEPTH_BUFFER_BIT,F.NEAREST);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||Xt.has(T)){const ge=Xt.get(T),je=Xt.get(U);pt.bindFramebuffer(F.READ_FRAMEBUFFER,D),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let Wi=0;Wi<Rt;Wi++)Un?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.__webglTexture,X,ue+Wi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ge.__webglTexture,X),Kn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,je.__webglTexture,yt,Ge+Wi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,je.__webglTexture,yt),X!==0?F.blitFramebuffer(kt,ie,kt+Ft,ie+_t,Ot,de,Ot+Ft,de+_t,F.COLOR_BUFFER_BIT,F.NEAREST):Kn?F.copyTexSubImage3D(Bt,yt,Ot,de,Ge+Wi,kt,ie,Ft,_t):F.copyTexSubImage2D(Bt,yt,Ot,de,kt,ie,Ft,_t);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Kn?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Bt,yt,Ot,de,Ge,Ft,_t,Rt,Ae,ai,Re.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Bt,yt,Ot,de,Ge,Ft,_t,Rt,Ae,Re.data):F.texSubImage3D(Bt,yt,Ot,de,Ge,Ft,_t,Rt,Ae,ai,Re):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,yt,Ot,de,Ft,_t,Ae,ai,Re.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,yt,Ot,de,Re.width,Re.height,Ae,Re.data):F.texSubImage2D(F.TEXTURE_2D,yt,Ot,de,Ft,_t,Ae,ai,Re);pt.pixelStorei(F.UNPACK_ROW_LENGTH,gi),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,Jn),pt.pixelStorei(F.UNPACK_SKIP_ROWS,oi),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,Ma),yt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Bt),pt.unbindTexture()},this.initRenderTarget=function(T){Xt.get(T).__webglFramebuffer===void 0&&$t.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$t.setTextureCube(T,0):T.isData3DTexture?$t.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$t.setTexture2DArray(T,0):$t.setTexture2D(T,0),pt.unbindTexture()},this.resetState=function(){J=0,B=0,et=null,pt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}const vb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ca,AddEquation:hs,AddOperation:Xf,AdditiveAnimationBlendMode:Uh,AdditiveBlending:vi,AgXToneMapping:vl,AlphaFormat:Dh,AlwaysCompare:Bh,AlwaysDepth:wo,AlwaysStencilFunc:Qf,AmbientLight:lu,AnimationAction:Kp,AnimationClip:aa,AnimationLoader:vx,AnimationMixer:$x,AnimationObjectGroup:Yx,AnimationUtils:fx,ArcCurve:_p,ArrayCamera:Zp,ArrowHelper:v_,AttachedBindMode:sh,Audio:$p,AudioAnalyser:Ox,AudioContext:hu,AudioListener:Nx,AudioLoader:Px,AxesHelper:y_,BackSide:Mi,BasicDepthPacking:Jf,BasicShadowMap:Lm,BatchedMesh:pp,BezierInterpolant:kp,Bone:Wh,BooleanKeyframeTrack:Ts,Box2:Qp,Box3:Qe,Box3Helper:x_,BoxGeometry:Gt,BoxHelper:g_,BufferAttribute:be,BufferGeometry:jt,BufferGeometryLoader:Yp,ByteType:Rh,Cache:un,Camera:jl,CameraHelper:m_,CanvasTexture:ea,CapsuleGeometry:pa,CatmullRomCurve3:vp,CineonToneMapping:xl,CircleGeometry:ur,ClampToEdgeWrapping:Ri,Clock:e_,Color:vt,ColorKeyframeTrack:nu,ColorManagement:ce,Compatibility:y0,CompressedArrayTexture:Ig,CompressedCubeTexture:Lg,CompressedTexture:zl,CompressedTextureLoader:yx,ConeGeometry:ma,ConstantAlphaFactor:Vf,ConstantColorFactor:kf,Controls:S_,CubeCamera:hl,CubeDepthTexture:Xh,CubeReflectionMapping:Cn,CubeRefractionMapping:ms,CubeTexture:fa,CubeTextureLoader:Mx,CubicBezierCurve:Zh,CubicBezierCurve3:yp,CubicInterpolant:Bp,CullFaceBack:eh,CullFaceFront:Tf,CullFaceFrontBack:Im,CullFaceNone:wf,Curve:rn,CurvePath:Sp,CustomBlending:Ef,CustomToneMapping:_l,CylinderGeometry:Xe,Cylindrical:n_,Data3DTexture:Ll,DataArrayTexture:Il,DataTexture:ki,DataTextureLoader:Sx,DataUtils:ng,DecrementStencilOp:Km,DecrementWrapStencilOp:jm,DefaultLoadingManager:Hp,DepthFormat:Rn,DepthStencilFormat:wn,DepthTexture:Ms,DetachedBindMode:qf,DirectionalLight:Wr,DirectionalLightHelper:p_,DiscreteInterpolant:zp,DodecahedronGeometry:kl,DoubleSide:Fi,DstAlphaFactor:Uf,DstColorFactor:Of,DynamicCopyUsage:p0,DynamicDrawUsage:l0,DynamicReadUsage:u0,EdgesGeometry:xp,EllipseCurve:Gl,EqualCompare:ep,EqualDepth:Eo,EqualStencilFunc:n0,EquirectangularReflectionMapping:js,EquirectangularRefractionMapping:Ur,Euler:tn,EventDispatcher:nn,ExternalTexture:qh,ExtrudeGeometry:ga,FileLoader:Ln,Float16BufferAttribute:hg,Float32BufferAttribute:Lt,FloatType:yi,Fog:Nl,FogExp2:ua,FramebufferTexture:Pg,FrontSide:Hn,Frustum:ys,FrustumArray:da,GLBufferAttribute:t_,GLSL1:g0,GLSL3:ah,GreaterCompare:ip,GreaterDepth:Co,GreaterEqualCompare:Oh,GreaterEqualDepth:Ao,GreaterEqualStencilFunc:o0,GreaterStencilFunc:r0,GridHelper:d_,Group:Pe,HTMLTexture:Dg,HalfFloatType:mi,HemisphereLight:au,HemisphereLightHelper:u_,IcosahedronGeometry:Vl,ImageBitmapLoader:Rx,ImageLoader:oa,ImageUtils:lp,IncrementStencilOp:Jm,IncrementWrapStencilOp:Qm,InstancedBufferAttribute:sr,InstancedBufferGeometry:qp,InstancedInterleavedBuffer:jx,InstancedMesh:fp,Int16BufferAttribute:lg,Int32BufferAttribute:cg,Int8BufferAttribute:rg,IntType:Sl,InterleavedBuffer:Ul,InterleavedBufferAttribute:vs,Interpolant:fr,InterpolateBezier:rh,InterpolateDiscrete:$r,InterpolateLinear:al,InterpolateSmooth:xo,InterpolationSamplingMode:v0,InterpolationSamplingType:_0,InvertStencilOp:t0,KeepStencilOp:_o,KeyframeTrack:Hi,LOD:up,LatheGeometry:Hl,Layers:Dl,LessCompare:tp,LessDepth:To,LessEqualCompare:Fh,LessEqualDepth:er,LessEqualStencilFunc:s0,LessStencilFunc:i0,Light:Yn,LightProbe:Xp,LightShadow:Ql,Line:In,Line3:a_,LineBasicMaterial:ri,LineCurve:$h,LineCurve3:Mp,LineDashedMaterial:Up,LineLoop:mp,LineSegments:sn,LinearFilter:De,LinearInterpolant:iu,LinearMipMapLinearFilter:Om,LinearMipMapNearestFilter:Fm,LinearMipmapLinearFilter:Ki,LinearMipmapNearestFilter:Fr,LinearSRGBColorSpace:Kr,LinearToneMapping:ml,LinearTransfer:Qr,Loader:Li,LoaderUtils:uh,LoadingManager:ru,LoopOnce:Yf,LoopPingPong:$f,LoopRepeat:Zf,MOUSE:Rm,Material:si,MaterialBlending:Dm,MaterialLoader:tc,MathUtils:Ce,Matrix2:fh,Matrix3:Qt,Matrix4:Kt,MaxEquation:Pf,Mesh:xt,MeshBasicMaterial:Oe,MeshDepthMaterial:tu,MeshDistanceMaterial:eu,MeshLambertMaterial:Dp,MeshMatcapMaterial:Np,MeshNormalMaterial:Lp,MeshPhongMaterial:Pp,MeshPhysicalMaterial:jh,MeshStandardMaterial:ye,MeshToonMaterial:Ip,MinEquation:Rf,MirroredRepeatWrapping:qr,MixOperation:Wf,MultiplyBlending:nh,MultiplyOperation:la,NearestFilter:ke,NearestMipMapLinearFilter:Um,NearestMipMapNearestFilter:Nm,NearestMipmapLinearFilter:$s,NearestMipmapNearestFilter:Ch,NeutralToneMapping:yl,NeverCompare:jf,NeverDepth:bo,NeverStencilFunc:e0,NoBlending:Vn,NoColorSpace:Sn,NoNormalPacking:Xm,NoToneMapping:dn,NormalAnimationBlendMode:Cl,NormalBlending:Qs,NormalGAPacking:Ym,NormalRGPacking:qm,NotEqualCompare:np,NotEqualDepth:Ro,NotEqualStencilFunc:a0,NumberKeyframeTrack:Jl,Object3D:fe,ObjectLoader:Ax,ObjectSpaceNormalMap:Kf,OctahedronGeometry:xa,OneFactor:Lf,OneMinusConstantAlphaFactor:Hf,OneMinusConstantColorFactor:Gf,OneMinusDstAlphaFactor:Ff,OneMinusDstColorFactor:Bf,OneMinusSrcAlphaFactor:Ah,OneMinusSrcColorFactor:Nf,OrthographicCamera:_a,PCFShadowMap:Nr,PCFSoftShadowMap:Th,PMREMGenerator:lr,Path:ia,PerspectiveCamera:ti,Plane:Mn,PlaneGeometry:pi,PlaneHelper:__,PointLight:bs,PointLightHelper:c_,Points:Bl,PointsMaterial:Ol,PolarGridHelper:f_,PolyhedronGeometry:qn,PositionalAudio:Fx,PropertyBinding:xe,PropertyMixer:Jp,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:Kh,Quaternion:Si,QuaternionKeyframeTrack:Kl,QuaternionLinearInterpolant:Vp,R11_EAC_Format:Oo,RED_GREEN_RGTC2_Format:Zr,RED_RGTC1_Format:nl,REVISION:pl,RG11_EAC_Format:Yr,RGBADepthPacking:Vm,RGBAFormat:Pi,RGBAIntegerFormat:Al,RGBA_ASTC_10x10_Format:Ko,RGBA_ASTC_10x5_Format:Zo,RGBA_ASTC_10x6_Format:$o,RGBA_ASTC_10x8_Format:Jo,RGBA_ASTC_12x10_Format:Qo,RGBA_ASTC_12x12_Format:jo,RGBA_ASTC_4x4_Format:ko,RGBA_ASTC_5x4_Format:Go,RGBA_ASTC_5x5_Format:Vo,RGBA_ASTC_6x5_Format:Ho,RGBA_ASTC_6x6_Format:Wo,RGBA_ASTC_8x5_Format:Xo,RGBA_ASTC_8x6_Format:qo,RGBA_ASTC_8x8_Format:Yo,RGBA_BPTC_Format:tl,RGBA_ETC2_EAC_Format:Fo,RGBA_PVRTC_2BPPV1_Format:Do,RGBA_PVRTC_4BPPV1_Format:Lo,RGBA_S3TC_DXT1_Format:Br,RGBA_S3TC_DXT3_Format:zr,RGBA_S3TC_DXT5_Format:kr,RGBDepthPacking:Hm,RGBFormat:Nh,RGBIntegerFormat:Bm,RGB_BPTC_SIGNED_Format:el,RGB_BPTC_UNSIGNED_Format:il,RGB_ETC1_Format:No,RGB_ETC2_Format:Uo,RGB_PVRTC_2BPPV1_Format:Io,RGB_PVRTC_4BPPV1_Format:Po,RGB_S3TC_DXT1_Format:Or,RGDepthPacking:Wm,RGFormat:Wn,RGIntegerFormat:El,RawShaderMaterial:$l,Ray:hr,Raycaster:mu,RectAreaLight:Wp,RedFormat:Tl,RedIntegerFormat:ha,ReinhardToneMapping:gl,RenderObjectRefreshType:M0,RenderTarget:kh,RenderTarget3D:Jx,RepeatWrapping:gs,ReplaceStencilOp:$m,ReverseSubtractEquation:Cf,RingGeometry:Wl,SIGNED_R11_EAC_Format:Bo,SIGNED_RED_GREEN_RGTC2_Format:rl,SIGNED_RED_RGTC1_Format:sl,SIGNED_RG11_EAC_Format:zo,SRGBColorSpace:We,SRGBTransfer:Se,Scene:Gh,ShaderChunk:re,ShaderLib:$i,ShaderMaterial:ei,ShadowMaterial:Cp,Shape:dr,ShapeGeometry:Xl,ShapePath:M_,ShapeUtils:Qi,ShortType:Ph,Skeleton:Fl,SkeletonHelper:l_,SkinnedMesh:dp,Source:X0,Sphere:ii,SphereGeometry:ji,Spherical:i_,SphericalHarmonics3:cu,SplineCurve:Qh,SpotLight:ou,SpotLightHelper:o_,Sprite:cn,SpriteMaterial:Ji,SrcAlphaFactor:Eh,SrcAlphaSaturateFactor:zf,SrcColorFactor:Df,StaticCopyUsage:f0,StaticDrawUsage:Rl,StaticReadUsage:h0,StereoCamera:Ix,StreamCopyUsage:m0,StreamDrawUsage:c0,StreamReadUsage:d0,StringKeyframeTrack:Es,SubtractEquation:Af,SubtractiveBlending:ih,TOUCH:Pm,TangentSpaceNormalMap:Pn,TetrahedronGeometry:ql,Texture:Ne,TextureLoader:bx,TextureSource:hn,TextureUtils:A_,Timer:uu,TimestampQuery:x0,TorusGeometry:An,TorusKnotGeometry:Yl,Triangle:Ci,TriangleFanDrawMode:Gm,TriangleStripDrawMode:km,TrianglesDrawMode:zm,TubeGeometry:Zl,UVMapping:Ml,Uint16BufferAttribute:Vh,Uint32BufferAttribute:Hh,Uint8BufferAttribute:ag,Uint8ClampedBufferAttribute:og,Uniform:pu,UniformsGroup:Qx,UniformsLib:Tt,UniformsUtils:or,UnsignedByteType:Ai,UnsignedInt101111Type:Lh,UnsignedInt248Type:xs,UnsignedInt5999Type:Ih,UnsignedIntType:Gi,UnsignedShort4444Type:bl,UnsignedShort5551Type:wl,UnsignedShortType:ir,VSMShadowMap:Zs,Vector2:st,Vector3:C,Vector4:Te,VectorKeyframeTrack:su,VideoFrameTexture:Rg,VideoTexture:gp,WebGL3DRenderTarget:Z0,WebGLArrayRenderTarget:Y0,WebGLCoordinateSystem:Oi,WebGLCubeRenderTarget:ec,WebGLRenderTarget:Ke,WebGLRenderer:dm,WebGLUtils:hm,WebGPUCoordinateSystem:_s,WebXRController:vo,WireframeGeometry:Ap,WrapAroundEnding:Jr,ZeroCurvatureEnding:us,ZeroFactor:If,ZeroSlopeEnding:ds,ZeroStencilOp:Zm,createCanvasElement:rp,error:Vt,getConsoleFunction:T0,log:ta,setConsoleFunction:w0,warn:bt,warnOnce:Tn},Symbol.toStringTag,{value:"Module"}));let Yc=90210;function Et(){return Yc=Yc*1664525+1013904223>>>0,Yc/4294967296}function Ct(r,t){return r+Et()*(t-r)}const ul=r=>r*r*(3-2*r);function po(r,t){let e=r*374761393+t*668265263;return e=(e^e>>13)*1274126177,((e^e>>16)>>>0)/4294967296}function gu(r,t){const e=Math.floor(r),i=Math.floor(t),n=ul(r-e),s=ul(t-i),a=po(e,i),o=po(e+1,i),l=po(e,i+1),c=po(e+1,i+1);return(a+(o-a)*n)*(1-s)+(l+(c-l)*n)*s}function Xr(r,t,e=4){let i=0,n=.5,s=1;for(let a=0;a<e;a++)i+=gu(r*s,t*s)*n,s*=2.03,n*=.5;return i}function bi(r=512,t=r){const e=document.createElement("canvas");return e.width=r,e.height=t,e}function Ii(r,{srgb:t=!1,repeat:e=[1,1],aniso:i=8}={}){const n=new ea(r);return n.wrapS=n.wrapT=gs,n.repeat.set(e[0],e[1]),n.anisotropy=i,t&&(n.colorSpace=We),n.needsUpdate=!0,n}function fm(r,t,e,i,n,s,a,o=.5){r.save(),r.strokeStyle=`rgba(6,7,8,${o})`,r.lineWidth=a,r.lineCap="round",r.beginPath(),r.moveTo(i,n);let l=Et()*Math.PI*2;for(let c=0;c<s;c++)l+=(Et()-.5)*.9,i+=Math.cos(l)*9,n+=Math.sin(l)*9,r.lineTo(i,n),Et()<.08&&(r.stroke(),r.beginPath(),r.moveTo(i,n));r.stroke(),r.restore()}function yb(){const t=bi(1024),e=t.getContext("2d"),i=e.createImageData(1024,1024),n=bi(1024),s=n.getContext("2d"),a=s.createImageData(1024,1024),o=bi(1024),l=o.getContext("2d"),c=l.createImageData(1024,1024),h=[];for(let u=0;u<16;u++)h.push([Et()*1024,Et()*1024,60+Et()*190]);for(let u=0;u<1024;u++)for(let d=0;d<1024;d++){const f=(u*1024+d)*4,p=Xr(d/90,u/90,4),x=gu(d/2.2,u/2.2),m=Xr(d/320+7,u/320+3,3);let g=32+p*30+x*16-m*12,v=0;for(const[S,I,R]of h){const L=Math.hypot(d-S,u-I)/R;L<1&&(v=Math.max(v,ul(1-L)))}v=Math.max(v,ul(Ce.clamp((Xr(d/200+23,u/200+11,3)-.62)*5,0,1)));const M=Math.round(14+g*.42+v*22),y=Math.round(M*1.01),E=Math.round(M*1.08);i.data[f]=M,i.data[f+1]=y,i.data[f+2]=E,i.data[f+3]=255;const w=55+(1-v)*155-p*25+x*20;a.data[f]=a.data[f+1]=a.data[f+2]=Math.max(10,Math.min(255,w)),a.data[f+3]=255;const _=90+x*90+p*50-v*40;c.data[f]=c.data[f+1]=c.data[f+2]=Math.max(20,Math.min(255,_)),c.data[f+3]=255}e.putImageData(i,0,0),s.putImageData(a,0,0),l.putImageData(c,0,0),e.strokeStyle="rgba(8,9,10,0.55)",e.lineWidth=5;for(let u=0;u<7;u++){e.beginPath();let d=Et()*1024;e.moveTo(0,d);for(let f=0;f<1024;f+=32)d+=(Et()-.5)*14,e.lineTo(f,d);e.stroke()}for(let u=0;u<26;u++)fm(e,1024,1024,Et()*1024,Et()*1024,14+Et()*10,1+Et(),.4);e.save(),e.translate(1024/2,1024/2),e.rotate(-.1),e.globalAlpha=.3,e.fillStyle="#c9bda0";for(let u=-4;u<5;u++)e.fillRect(u*120,-1024/2,26,1024);e.restore(),e.globalAlpha=.16;for(let u=0;u<900;u++)e.fillStyle=Et()>.5?"#9aa4ac":"#0b0d0e",e.fillRect(Et()*1024,Et()*1024,1+Et()*3,1+Et()*3);return e.globalAlpha=1,{map:Ii(t,{srgb:!0,repeat:[12,12],aniso:16}),roughnessMap:Ii(n,{repeat:[12,12],aniso:8}),bumpMap:Ii(o,{repeat:[12,12],aniso:4})}}function Mb(){const t=bi(512),e=bi(512),i=bi(512),n=t.getContext("2d"),s=e.getContext("2d"),a=i.getContext("2d"),o=n.createImageData(512,512),l=s.createImageData(512,512),c=a.createImageData(512,512);for(let h=0;h<512;h++)for(let u=0;u<512;u++){const d=(h*512+u)*4,f=Xr(u/60,h/60,4),p=gu(u/2.5,h/2.5),x=Xr(u/180+40,h/40+9,3),m=78+f*54+p*22-Math.max(0,x-.55)*95;o.data[d]=m*1.02,o.data[d+1]=m*.99,o.data[d+2]=m*.92,o.data[d+3]=255;const g=190+p*35-f*30;l.data[d]=l.data[d+1]=l.data[d+2]=g,l.data[d+3]=255;const v=100+f*100+p*55;c.data[d]=c.data[d+1]=c.data[d+2]=v,c.data[d+3]=255}n.putImageData(o,0,0),s.putImageData(l,0,0),a.putImageData(c,0,0),n.strokeStyle="rgba(30,32,30,0.35)",n.lineWidth=2;for(let h=0;h<512;h+=128)n.beginPath(),n.moveTo(0,h),n.lineTo(512,h),n.stroke(),a.strokeStyle="rgba(20,20,20,0.6)",a.beginPath(),a.moveTo(0,h+2),a.lineTo(512,h+2),a.stroke();for(let h=0;h<10;h++)fm(n,512,512,Et()*512,Et()*512,10,.8,.35);for(let h=0;h<8;h++){const u=30+Et()*452,d=30+Et()*452;n.fillStyle="rgba(24,26,24,0.55)",n.beginPath(),n.arc(u,d,3.4,0,7),n.fill()}return{map:Ii(t,{srgb:!0,repeat:[2,2]}),roughnessMap:Ii(e,{repeat:[2,2]}),bumpMap:Ii(i,{repeat:[2,2]})}}function Zc(r,t="#7a3a1e"){const n=bi(512,512),s=bi(512,512),a=n.getContext("2d"),o=s.getContext("2d");a.fillStyle=r,a.fillRect(0,0,512,512);const l=a.createLinearGradient(0,0,0,512);l.addColorStop(0,"rgba(255,255,255,0.10)"),l.addColorStop(.5,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.28)"),a.fillStyle=l,a.fillRect(0,0,512,512);for(let c=0;c<512;c+=8){const h=Math.sin(c/512*Math.PI*64);a.fillStyle=`rgba(${h>0?"255,255,255":"0,0,0"},${Math.abs(h)*.1})`,a.fillRect(c,0,4,512),o.fillStyle=h>0?"#d0d0d0":"#202020",o.fillRect(c,0,4,512)}a.fillStyle="rgba(0,0,0,0.35)",a.fillRect(0,0,512,14),a.fillRect(0,494,512,18),a.fillStyle="rgba(255,255,255,0.10)",a.fillRect(0,14,512,4);for(let c=0;c<70;c++){const h=Et()*512,u=Et()*512,d=4+Et()*38,f=a.createRadialGradient(h,u,0,h,u,d);f.addColorStop(0,t+"cc"),f.addColorStop(.5,t+"55"),f.addColorStop(1,t+"00"),a.fillStyle=f,a.beginPath(),a.arc(h,u,d,0,7),a.fill()}for(let c=0;c<24;c++)a.fillStyle=`rgba(90,40,20,${.05+Et()*.12})`,a.fillRect(Et()*512,512*.35+Et()*512*.6,1+Et()*3,30+Et()*120);a.save(),a.translate(512*.5,512*.6),a.rotate(-.02),a.globalAlpha=.55,a.fillStyle="#ded9c7",a.font='bold 34px "Arial Narrow", Arial, sans-serif',a.textAlign="center",a.fillText("BLACKSITE LOGISTICS",0,0),a.font='bold 17px "Arial Narrow", Arial, sans-serif',a.fillText("SECTOR 07  //  HANDLE WITH CARE",0,26),a.restore(),a.globalAlpha=1;for(let c=0;c<400;c++)a.fillStyle=Et()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.10)",a.fillRect(Et()*512,Et()*512,1+Et()*5,1+Et()*2);return{map:Ii(n,{srgb:!0,repeat:[1,1]}),bumpMap:Ii(s,{repeat:[1,1]})}}function Sb(){const t=bi(512),e=t.getContext("2d");e.fillStyle="#5c4a33",e.fillRect(0,0,512,512);for(let i=0;i<5;i++){const n=i*102.4;e.fillStyle=`rgb(${82+Et()*18},${64+Et()*14},${44+Et()*10})`,e.fillRect(0,n+2,512,512/5-4);for(let s=0;s<80;s++){e.strokeStyle=`rgba(20,12,6,${.04+Et()*.1})`,e.lineWidth=.6+Et(),e.beginPath();const a=n+Et()*(512/5);e.moveTo(0,a),e.bezierCurveTo(512*.3,a+(Et()-.5)*9,512*.7,a+(Et()-.5)*9,512,a+(Et()-.5)*6),e.stroke()}}return e.strokeStyle="rgba(18,12,7,0.6)",e.lineWidth=7,e.strokeRect(3,3,506,506),e.fillStyle="rgba(20,14,8,0.55)",e.font='bold 44px "Arial Narrow", Arial, sans-serif',e.textAlign="center",e.fillText("SUPPLY 07",512/2,512/2+8),e.font="bold 20px monospace",e.fillText("CLASSIFIED",512/2,512/2+42),{map:Ii(t,{srgb:!0,repeat:[1,1]})}}function bb(){const e=bi(1024,512),i=e.getContext("2d"),n=i.createLinearGradient(0,0,0,512);n.addColorStop(0,"#050a12"),n.addColorStop(.35,"#0b1826"),n.addColorStop(.56,"#223b4d"),n.addColorStop(.63,"#6d6250"),n.addColorStop(.68,"#a86a38"),n.addColorStop(.72,"#4a3a2c"),n.addColorStop(.8,"#0d1115"),n.addColorStop(1,"#050607"),i.fillStyle=n,i.fillRect(0,0,1024,512);const s=1024*.62,a=512*.645,o=i.createRadialGradient(s,a,0,s,a,230);o.addColorStop(0,"rgba(255,196,120,0.95)"),o.addColorStop(.25,"rgba(240,140,64,0.45)"),o.addColorStop(.6,"rgba(120,70,38,0.15)"),o.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=o,i.fillRect(0,0,1024,512);for(let c=0;c<90;c++){const h=512*(.36+Et()*.26),u=80+Et()*260,d=6+Et()*26,f=i.createRadialGradient(0,0,0,0,0,u);f.addColorStop(0,`rgba(${120+Et()*60},${110+Et()*50},${100+Et()*40},${.05+Et()*.1})`),f.addColorStop(1,"rgba(0,0,0,0)"),i.save(),i.translate(Et()*1024,h),i.scale(1,d/u),i.fillStyle=f,i.beginPath(),i.arc(0,0,u,0,7),i.fill(),i.restore()}const l=new ea(e);return l.mapping=js,l.colorSpace=We,l.needsUpdate=!0,l}function $c(r="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){const e=bi(128),i=e.getContext("2d"),n=i.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,r),n.addColorStop(.18,r),n.addColorStop(.45,"rgba(255,220,170,0.35)"),n.addColorStop(1,t),i.fillStyle=n,i.fillRect(0,0,128,128),Ii(e,{srgb:!0})}function wb(){const t=bi(256),e=t.getContext("2d");for(let i=0;i<22;i++){const n=128+(Et()-.5)*90,s=256/2+(Et()-.5)*90,a=30+Et()*60,o=e.createRadialGradient(n,s,0,n,s,a);o.addColorStop(0,`rgba(255,255,255,${.05+Et()*.1})`),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.beginPath(),e.arc(n,s,a,0,7),e.fill()}return Ii(t,{srgb:!0})}function Tb(){const t=bi(128),e=t.getContext("2d"),i=e.createRadialGradient(64,64,2,64,64,54);i.addColorStop(0,"rgba(3,3,4,0.98)"),i.addColorStop(.22,"rgba(10,9,8,0.9)"),i.addColorStop(.5,"rgba(28,25,22,0.5)"),i.addColorStop(1,"rgba(20,18,16,0)"),e.fillStyle=i,e.beginPath(),e.arc(64,64,64,0,7),e.fill();for(let n=0;n<9;n++){const s=Et()*Math.PI*2;e.strokeStyle="rgba(10,10,10,0.35)",e.lineWidth=1+Et()*2,e.beginPath(),e.moveTo(64,64),e.lineTo(64+Math.cos(s)*(20+Et()*30),64+Math.sin(s)*(20+Et()*30)),e.stroke()}return Ii(t,{srgb:!0})}function Eb(){const e=bi(256,512),i=e.getContext("2d");i.fillStyle="#070a0d",i.fillRect(0,0,256,512);for(let n=8;n<504;n+=18)for(let s=8;s<248;s+=16){const a=Et();a>.82&&(i.fillStyle=a>.96?"rgba(255,196,120,0.9)":"rgba(140,180,200,0.30)",i.fillRect(s,n,8,9))}return Ii(e,{srgb:!0,repeat:[1,1]})}function Ab(){const t=bi(256),e=t.getContext("2d");e.clearRect(0,0,256,256),e.strokeStyle="rgba(160,170,175,0.72)",e.lineWidth=3;for(let n=-256;n<256*2;n+=26)e.beginPath(),e.moveTo(n,0),e.lineTo(n+256,256),e.stroke(),e.beginPath(),e.moveTo(n,256),e.lineTo(n+256,0),e.stroke();const i=Ii(t,{srgb:!0,repeat:[3,2]});return i.wrapS=i.wrapT=gs,i}function Cb(r){const t=Math.min(8,r.capabilities.getMaxAnisotropy()),e=yb(),i=Mb(),n=Zc("#6a3b22"),s=Zc("#1e3d4a"),a=Zc("#2f4034"),o=Sb(),l=bb(),c={warm:$c("rgba(255,220,170,1)"),red:$c("rgba(255,90,70,1)"),white:$c("rgba(255,255,255,1)")},h=wb(),u=Tb(),d=Eb(),f=Ab();for(const p of[e.map,e.roughnessMap,e.bumpMap,i.map,i.roughnessMap,i.bumpMap,n.map,n.bumpMap,s.map,s.bumpMap,a.map,a.bumpMap,o.map])p.anisotropy=t;return{asphalt:e,concrete:i,orange:n,blue:s,green:a,wood:o,sky:l,glows:c,smoke:h,hole:u,windows:d,chain:f}}const xf={fog:791578,moon:10339562};new Kt;function yn(r,t,e=0){t.updateWorldMatrix(!0,!1);const i=new Qe().setFromObject(t);return i.min.x-=e,i.min.y-=e,i.min.z-=e,i.max.x+=e,i.max.y+=e,i.max.z+=e,r.push(i),i}function Rb(r,t,e,i){const n=new Xe(e,i,t,24,1,!0),s=new ei({transparent:!0,depthWrite:!1,side:Fi,blending:vi,uniforms:{uColor:{value:new vt(r)},uTime:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vPos; void main(){ vUv=uv; vPos=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform vec3 uColor; uniform float uTime; varying vec2 vUv; varying vec3 vPos;
      void main(){
        float edge = smoothstep(0.0,0.25,vUv.x)*smoothstep(1.0,0.75,vUv.x);
        float fade = pow(1.0-vUv.y, 1.4);
        float flicker = 0.85 + 0.15*sin(uTime*9.0 + vPos.y*2.0);
        gl_FragColor = vec4(uColor, edge*fade*0.022*flicker);
      }`});return new xt(n,s)}function Pb(r,t,e,i){const n=[],s=[],a=[],o=[],l=[],c=[],h=[];r.background=e.sky,r.backgroundIntensity=.72,r.fog=new ua(xf.fog,.021);const u=new lr(t),d=u.fromEquirectangular(e.sky).texture;r.environment=d,r.environmentIntensity=.72,u.dispose();const f=new au(9745613,1775378,.85);r.add(f);const p=new Wr(xf.moon,2.7);p.position.set(-22,30,16),p.castShadow=i.shadows,p.shadow.mapSize.set(i.shadowSize,i.shadowSize),p.shadow.camera.left=-26,p.shadow.camera.right=26,p.shadow.camera.top=26,p.shadow.camera.bottom=-26,p.shadow.camera.near=1,p.shadow.camera.far=80,p.shadow.bias=-6e-4,p.shadow.normalBias=.035,r.add(p),r.add(p.target);const x=new lu(3886428,1);r.add(x);const m=new Wr(9152189,.85);m.position.set(4,7,24),m.target.position.set(0,1,-2),r.add(m),r.add(m.target);const g=new Wr(6326701,1.35);g.position.set(-18,11,-16),g.target.position.set(0,1.5,4),r.add(g),r.add(g.target);const v=new ye({map:e.asphalt.map,roughnessMap:e.asphalt.roughnessMap,bumpMap:e.asphalt.bumpMap,bumpScale:.055,roughness:1,metalness:.52,envMapIntensity:1.1,color:9278619}),M=new xt(new pi(160,160),v);M.rotation.x=-Math.PI/2,M.receiveShadow=!0,r.add(M),s.push(M);const y=new Oe({map:e.glows.warm,transparent:!0,opacity:.1,blending:vi,depthWrite:!1,color:16753242});for(const[O,G,Z,A]of[[-14,-14,14,7],[14,-13,11,6],[2,12,7,4]]){const N=new xt(new pi(Z,A),y.clone());N.rotation.x=-Math.PI/2,N.position.set(O,.02,G),r.add(N)}const E=document.createElement("canvas");E.width=E.height=1024;const w=E.getContext("2d");w.clearRect(0,0,1024,1024),w.strokeStyle="rgba(206,188,132,0.5)",w.lineWidth=16,w.strokeRect(90,90,844,844),w.setLineDash([46,34]),w.strokeStyle="rgba(206,188,132,0.33)",w.lineWidth=9,w.strokeRect(180,180,664,664),w.setLineDash([]),w.fillStyle="rgba(206,188,132,0.46)",w.font='bold 210px "Arial Narrow", Arial, sans-serif',w.textAlign="center",w.fillText("07",512,600),w.font='bold 42px "Arial Narrow", Arial, sans-serif',w.fillText("B L A C K S I T E   L O G I S T I C S",512,690);const _=new ea(E);_.colorSpace=We,_.anisotropy=8;const S=new xt(new pi(17,17),new Oe({map:_,transparent:!0,opacity:.5,depthWrite:!1,color:14206090}));S.rotation.x=-Math.PI/2,S.rotation.z=.12,S.position.set(1,.015,1),r.add(S);const I=new ye({map:e.concrete.map,roughnessMap:e.concrete.roughnessMap,bumpMap:e.concrete.bumpMap,bumpScale:.06,metalness:.08,roughness:1,envMapIntensity:.5,color:10724508}),R=new ye({color:2830387,metalness:.9,roughness:.34,envMapIntensity:1.1}),L=new ye({color:1185047,metalness:.6,roughness:.55});new ye({color:723980,metalness:.1,roughness:.92});const z=new ye({map:e.wood.map,roughness:.82,metalness:.05,bumpMap:e.wood.map,bumpScale:.02});new ye({color:5977636,metalness:.55,roughness:.82,envMapIntensity:.5});function Y(O,G,Z,A,N,V,at,{ry:tt=0,cast:ot=!0,receive:dt=!0,collider:Ut=!1,solid:ct=!0,parent:Nt=r}={}){const Yt=new xt(new Gt(O,G,Z),A);return Yt.position.set(N,V,at),Yt.rotation.y=tt,Yt.castShadow=ot&&i.shadows,Yt.receiveShadow=dt,Nt.add(Yt),Ut&&yn(n,Yt),ct&&s.push(Yt),Yt}function D(O,G,Z,A,N=0){const ot=new ye({map:A.map,bumpMap:A.bumpMap,bumpScale:.09,metalness:.72,roughness:.58,envMapIntensity:.9,color:12171705}),dt=new Pe;dt.position.set(O,N*2.59,G),dt.rotation.y=Z;const Ut=new xt(new Gt(6.06,2.59,2.44),ot);Ut.position.y=2.59/2,Ut.castShadow=i.shadows,Ut.receiveShadow=!0,dt.add(Ut),s.push(Ut);for(const Nt of[-1,1])for(const Yt of[-1,1])for(const wt of[.09,2.59-.09]){const me=new xt(new Gt(.24,.18,.24),L);me.position.set(Nt*(6.06/2-.1),wt,Yt*(2.44/2-.1)),me.castShadow=i.shadows,dt.add(me)}for(let Nt=0;Nt<4;Nt++){const Yt=new xt(new Gt(.05,2.19,.05),R);Yt.position.set(6.06/2-.03,2.59/2,-2.44/2+.3+Nt*(2.44-.6)/3),dt.add(Yt)}r.add(dt),dt.updateWorldMatrix(!0,!0);const ct=new Qe().setFromObject(dt);return n.push(ct),dt}D(-12.5,7.5,0,e.orange),D(13.2,10.5,0,e.blue),D(13.2,-6.5,Math.PI/2,e.green),D(-13,-12.5,Math.PI/2,e.orange),D(-12.5,-19,0,e.blue),D(12.9,-19.3,0,e.green),D(13.2,10.5,0,e.orange,1);const k=new Pe;k.position.set(.5,0,-8),r.add(k);const J=new xt(new Gt(8.4,3.2,5.2),I);J.position.y=1.6,J.castShadow=i.shadows,J.receiveShadow=!0,k.add(J),s.push(J),yn(n,J);const B=new xt(new Gt(8.9,.28,5.7),I);B.position.y=3.34,B.castShadow=i.shadows,k.add(B);const et=document.createElement("canvas");et.width=96,et.height=160;const q=et.getContext("2d"),j=q.createLinearGradient(0,0,0,160);j.addColorStop(0,"#ffd6a2"),j.addColorStop(.18,"#ffb066"),j.addColorStop(.5,"#b05e24"),j.addColorStop(.82,"#3a1c0a"),j.addColorStop(1,"#120906"),q.fillStyle=j,q.fillRect(0,0,96,160),q.fillStyle="rgba(30,12,4,0.5)",q.fillRect(46,0,4,160),q.fillRect(0,52,96,3),q.fillStyle="rgba(255,225,190,0.25)",q.fillRect(10,0,3,160);const it=new ea(et);it.colorSpace=We;const At=new xt(new pi(1.35,2.25),new Oe({map:it,toneMapped:!1}));At.position.set(-1.2,1.19,2.61),k.add(At);const Dt=new xt(new Gt(.14,2.5,.2),L);Dt.position.set(-1.95,1.3,2.64),k.add(Dt);const K=new xt(new Gt(.14,2.5,.2),L);K.position.set(-.45,1.3,2.64),k.add(K);const Mt=new xt(new Gt(.3,.12,.24),R);Mt.position.set(-1.2,2.62,2.62),k.add(Mt);const It=new xt(new pi(.2,.06),new Oe({color:16767400,toneMapped:!1}));It.position.set(-1.2,2.58,2.75),It.rotation.x=.5,k.add(It);const Ht=new cn(new Ji({map:e.glows.warm,color:16756838,transparent:!0,blending:vi,depthWrite:!1,opacity:.55}));Ht.position.set(-1.2,2,2.8),Ht.scale.set(2.2,2.6,1),k.add(Ht);const St=new xt(new Gt(1.85,.16,.24),R);St.position.set(-1.2,2.44,2.64),k.add(St);const Wt=new bs(16753493,22,9,1.8);Wt.position.set(-1.2,1.5,3.2),k.add(Wt),a.push({light:Wt,base:22,speed:2.2,amount:.12});for(let O=0;O<3;O++){const G=new xt(new Xe(.16,.16,1.6,10),R);G.position.set(1.6+O*.7,4.1,-.8),G.castShadow=i.shadows,k.add(G);const Z=new xt(new Xe(.24,.18,.16,10),L);Z.position.set(1.6+O*.7,4.95,-.8),k.add(Z)}const Ee=new xt(new Xe(.035,.05,3.4,6),R);Ee.position.set(3.1,5.2,-1.4),k.add(Ee);const qt=new xt(new ji(.07,8,8),new Oe({color:16723746}));qt.position.set(3.1,6.95,-1.4),k.add(qt),c.push(O=>{qt.visible=Math.sin(O*3.4)>.2});for(let O=0;O<5;O++){const G=new xt(new Gt(.07,1,.07),R);G.position.set(-3.6+O*1.8,3.9,2.4),k.add(G)}const ne=new xt(new Gt(7.5,.07,.07),R);ne.position.set(0,4.35,2.4),k.add(ne);const te=new dr;te.moveTo(-.42,0),te.lineTo(.42,0),te.lineTo(.3,.22),te.lineTo(.2,1.02),te.lineTo(-.2,1.02),te.lineTo(-.3,.22),te.closePath();const rt=new ga(te,{depth:2.6,bevelEnabled:!0,bevelSize:.035,bevelThickness:.03,bevelSegments:2});rt.translate(0,0,-1.3);function ut(O,G,Z=0,A=1){const N=new xt(rt,I);return N.position.set(O,0,G),N.rotation.y=Z,N.scale.z=A,N.castShadow=i.shadows,N.receiveShadow=!0,r.add(N),s.push(N),yn(n,N),N}ut(-3.4,5.6,0),ut(-.3,5.6,0),ut(7.4,1.2,Math.PI/2),ut(-6.8,-3.4,Math.PI/2),ut(4.6,-15,0),ut(-4,-16,.25),ut(16,3.2,Math.PI/2,.9),ut(-18,2,Math.PI/2,.9);function ht(O,G,Z=1.05,A=0,N=0){const V=Y(Z,Z,Z,z,O,Z/2+N*Z,G,{ry:A,collider:!0}),at=new xt(new Gt(Z*1.03,.055,Z*1.03),R);return at.position.copy(V.position),at.position.y=V.position.y+Z*.28,at.rotation.y=A,r.add(at),V}ht(7.6,6.4,1.1,.2),ht(8.6,6.9,1,-.15),ht(-8.4,2,1.05,.35),ht(-8,2.9,1,-.2),ht(3.2,-3.4,1.15,.15),ht(2.1,-3.7,.95,-.3),ht(-15.6,-6.5,1.1,.5),ht(17.6,8.6,1,.2),ht(17,9.6,1.1,-.1),ht(4.4,14.8,1.15,.05);const Pt=new ye({color:9060127,metalness:.62,roughness:.52,envMapIntensity:.8});function mt(O,G,Z=!1){const A=new Pe;A.position.set(O,0,G);const N=new xt(new Xe(.34,.34,.95,18),Pt);N.position.y=.475,N.castShadow=i.shadows,A.add(N);for(const at of[.19,.75]){const tt=new xt(new An(.342,.022,6,22),R);tt.rotation.x=Math.PI/2,tt.position.y=at,A.add(tt)}const V=new xt(new Xe(.35,.35,.03,18),R);if(V.position.y=.96,A.add(V),r.add(A),s.push(N),yn(n,A),Z){const at=new Ji({map:e.glows.warm,color:16742954,transparent:!0,blending:vi,depthWrite:!1,opacity:.9}),tt=new cn(at);tt.position.y=1.25,tt.scale.set(.9,1.4,1),A.add(tt);const ot=new bs(16742954,42,12,1.8);ot.position.y=1.5,A.add(ot),a.push({light:ot,base:42,speed:7,amount:.35}),c.push(dt=>{tt.scale.set(.8+Math.sin(dt*13)*.1,1.3+Math.sin(dt*11+1)*.2,1),tt.material.opacity=.7+Math.sin(dt*17)*.15});for(let dt=0;dt<5;dt++){const Ut=new cn(new Ji({map:e.smoke,color:1776926,transparent:!0,opacity:.3,depthWrite:!1}));Ut.position.set(O+Ct(-.2,.2),1.6+dt*.9,G+Ct(-.2,.2)),Ut.scale.setScalar(1.2+dt*.9),Ut.userData.baseY=Ut.position.y,Ut.userData.phase=Et()*10,Ut.userData.speed=.35+Et()*.3,r.add(Ut),l.push(Ut)}}return A}mt(5.6,12,!0),mt(-7.2,8.8),mt(-6.5,9.3),mt(-15.7,2.6);const ee=new ye({color:3951159,metalness:.3,roughness:.78});for(const[O,G,Z]of[[-1.4,11.2,.2],[9.8,-1.8,-.4],[-11,13.6,.6]]){const A=new Pe;A.position.set(O,0,G),A.rotation.y=Z;const N=new xt(new Gt(.9,.34,.48),ee);N.position.y=.17,N.castShadow=i.shadows,A.add(N);const V=new xt(new Gt(.92,.06,.5),L);V.position.y=.37,A.add(V);const at=new xt(new An(.09,.012,4,10,Math.PI),R);at.position.y=.41,A.add(at),r.add(A),s.push(N),yn(n,A)}const zt=new ye({color:8746074,roughness:.95,metalness:0});function se(O,G,Z=0,A=7){const N=new Pe;N.position.set(O,0,G),N.rotation.y=Z;for(let V=0;V<2;V++)for(let at=0;at<A;at++){const tt=new xt(new pa(.19,.34,4,8),zt);tt.rotation.z=Math.PI/2,tt.rotation.y=Ct(-.14,.14),tt.position.set((at-A/2)*.44+V%2*.2,.2+V*.3,Ct(-.04,.04)),tt.scale.set(1,1,.78),tt.castShadow=i.shadows,N.add(tt)}return r.add(N),yn(n,N),N}se(10.6,5.8,.2,8),se(-12,-2.2,-.3,6),se(-1.2,-16.8,.05,8);function oe(O,G,Z=6.4){const A=new Pe;A.position.set(O,0,G);for(const[ot,dt]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const Ut=new xt(new Gt(.16,Z,.16),R);Ut.position.set(ot*1.5,Z/2,dt*1.5),Ut.castShadow=i.shadows,A.add(Ut)}for(let ot=1;ot<4;ot++){const dt=new xt(new Gt(3,.06,.06),R);dt.position.set(0,ot*Z/4,1.5),A.add(dt)}const N=new xt(new Gt(3.6,.22,3.6),L);N.position.y=Z,N.castShadow=i.shadows,A.add(N);const V=new xt(new Gt(2.5,2,2.5),I);V.position.y=Z+1.1,V.castShadow=i.shadows,A.add(V);const at=new xt(new Gt(3,.14,3),R);at.position.y=Z+2.14,A.add(at);const tt=new xt(new pi(1.8,.7),new Oe({color:16756838,transparent:!0,opacity:.55}));tt.position.set(0,Z+1.35,1.26),A.add(tt);for(let ot=0;ot<3;ot++){const dt=new xt(new Gt(.06,1,.06),R);dt.position.set(-1.6+ot*1.6,Z+.6,-1.7),A.add(dt)}return r.add(A),yn(n,A),A}oe(-18.5,-19.5),oe(19,-18.5,5.6);const pe=new Oe({color:16766880});function F(O,G,Z,A){const N=new Pe;N.position.set(O,0,G);const V=new xt(new Xe(.11,.16,8.2,10),R);V.position.y=4.1,V.castShadow=i.shadows,N.add(V);const at=new xt(new Gt(1.5,.09,.09),R);at.position.y=8,at.rotation.y=Math.atan2(Z-O,A-G)+Math.PI/2,N.add(at);for(const dt of[-.55,.55]){const Ut=new xt(new Gt(.42,.3,.34),L);Ut.position.set(dt,8,0),N.add(Ut);const ct=new xt(new pi(.33,.22),pe);ct.position.set(dt,8,.18),N.add(ct);const Nt=new cn(new Ji({map:e.glows.warm,color:16765600,transparent:!0,blending:vi,depthWrite:!1,opacity:.9}));Nt.position.set(dt,8,.24),Nt.scale.setScalar(1.8),N.add(Nt)}const tt=new ou(16760194,380,34,.62,.55,1.7);tt.position.set(0,7.9,0),tt.target.position.set(Z-O,0,A-G),N.add(tt),N.add(tt.target),r.add(N),yn(n,V);const ot=Rb(16760967,9,.35,4.2);return ot.position.set(O,4.6,G),ot.rotation.z=Math.PI*.02,r.add(ot),o.push(ot),N}F(-15.5,-15,0,1),F(15.8,-13.2,0,2);const Ue=new ye({map:e.concrete.map,bumpMap:e.concrete.bumpMap,bumpScale:.08,roughnessMap:e.concrete.roughnessMap,metalness:.05,color:7040875});for(const[O,G,Z,A]of[[0,-27,58,2],[0,27,58,2],[-27,0,2,58],[27,0,2,58]]){const N=new xt(new Gt(Z,4.2,A),Ue);N.position.set(O,2.1,G),N.castShadow=i.shadows,N.receiveShadow=!0,r.add(N),s.push(N),yn(n,N)}for(const[O,G,Z]of[[0,-24.6,0],[0,24.6,0],[-24.6,0,Math.PI/2],[24.6,0,Math.PI/2]]){const A=new xt(new pi(52,3),new ye({map:e.chain,transparent:!0,side:Fi,alphaTest:.15,metalness:.8,roughness:.6,color:10134436,depthWrite:!0}));A.position.set(O,1.5,G),A.rotation.y=Z,A.castShadow=!1,r.add(A);for(let N=-24;N<=24;N+=4){const V=Z===0?O+N:O,at=Z===0?G:G+N,tt=new xt(new Xe(.055,.055,3.4,6),R);tt.position.set(V,1.7,at),r.add(tt)}}const ae=new ye({map:e.windows,emissiveMap:e.windows,emissive:16763274,emissiveIntensity:.55,color:1316891,roughness:.9,metalness:.1}),ve=new Pe;for(let O=0;O<22;O++){const G=O%4,Z=38+Et()*38,A=G===0?-Z:G===1?Z:Ct(-45,45),N=G===2?-Z:G===3?Z:Ct(-45,45),V=10+Et()*30,at=new xt(new Gt(5+Et()*9,V,5+Et()*9),ae);at.position.set(A,V/2,N),ve.add(at);const tt=new xt(new ji(.08,6,6),new Oe({color:16724770}));tt.position.set(A,V+.2,N),ve.add(tt),c.push(ot=>{tt.visible=Math.sin(ot*1.6+O)>.35})}r.add(ve);for(let O=0;O<4;O++){const G=[];for(let A=0;A<=20;A++){const N=A/20;G.push(new C(-24+N*48,7.2+Math.sin(N*Math.PI)*-1.2+O*.35,-20+O*2.5))}const Z=new In(new jt().setFromPoints(G),new ri({color:658445,transparent:!0,opacity:.85}));r.add(Z)}const pt=i.rainCount,we=new Float32Array(pt*6),Xt=[];for(let O=0;O<pt;O++)Xt.push({x:Ct(-26,26),y:Ct(0,26),z:Ct(-26,26),speed:Ct(16,26),len:Ct(.35,.85)});const $t=new jt;$t.setAttribute("position",new be(we,3));const P=new sn($t,new ri({color:11454685,transparent:!0,opacity:.19,blending:vi,depthWrite:!1}));P.frustumCulled=!1,r.add(P);const b=i.moteCount,H=new Float32Array(b*3);for(let O=0;O<b;O++)H[O*3]=Ct(-20,20),H[O*3+1]=Ct(.2,8),H[O*3+2]=Ct(-20,20);const lt=new jt;lt.setAttribute("position",new be(H,3));const nt=new Bl(lt,new Ol({color:16766888,size:.035,transparent:!0,opacity:.55,blending:vi,depthWrite:!1,sizeAttenuation:!0}));r.add(nt),h.push(new C(-21,0,17),new C(21,0,17),new C(-21,0,-3),new C(21,0,-2),new C(0,0,-21.5),new C(-15,0,-21.5),new C(16,0,-21.5),new C(-21,0,9),new C(-8,0,5),new C(8.5,0,3.2),new C(-14,0,-2),new C(14,0,-1),new C(-5,0,-14.5),new C(7.5,0,-15.5));const ft=[];for(let O=0;O<8;O++){const G=new cn(new Ji({map:e.smoke,color:9677240,transparent:!0,opacity:.055+Et()*.03,depthWrite:!1}));G.position.set(Ct(-18,18),.9+Et()*.7,Ct(-17,18)),G.scale.set(10+Et()*8,3.2+Et()*2,1),G.userData.phase=Et()*9,G.userData.speed=.12+Et()*.2,r.add(G),ft.push(G)}const gt={ground:M,colliders:n,solids:s,spawnPoints:h,bounds:{minX:-23,maxX:23,minZ:-23,maxZ:23},lights:{hemi:f,moon:p,ambient:x},rain:P,motes:nt,skyline:ve,update(O,G,Z){for(let A=0;A<pt;A++){const N=Xt[A];N.y-=N.speed*O,N.y<-.5&&(N.y=24+Et()*6,N.x=G.position.x+Ct(-26,26),N.z=G.position.z+Ct(-26,26));const V=A*6;we[V]=N.x,we[V+1]=N.y,we[V+2]=N.z,we[V+3]=N.x+.05,we[V+4]=N.y+N.len,we[V+5]=N.z}$t.attributes.position.needsUpdate=!0;for(let A=0;A<b;A++)H[A*3]+=Math.sin(Z*.4+A)*O*.06,H[A*3+1]+=O*.06,H[A*3+1]>9&&(H[A*3+1]=.1);lt.attributes.position.needsUpdate=!0;for(const A of a){const N=Math.sin(Z*A.speed)*.5+Math.sin(Z*A.speed*2.7+1.2)*.3;A.light.intensity=A.base*(1+N*A.amount)}for(const A of l)A.position.y+=A.userData.speed*O,A.position.x+=Math.sin(Z*.6+A.userData.phase)*O*.25,A.material.opacity=.22*Math.max(0,1-(A.position.y-A.userData.baseY)/6.5),A.scale.x=A.scale.y=1.2+(A.position.y-A.userData.baseY)*.55;for(const A of c)A(Z);for(const A of o)A.material.uniforms.uTime.value=Z;for(let A=0;A<ft.length;A++){const N=ft[A];N.position.x+=N.userData.speed*O,N.position.x>24&&(N.position.x=-24),N.material.opacity=.05+Math.sin(Z*.12+N.userData.phase)*.02}}};return gt.blocked=(O,G)=>{for(const Z of n)if(!(Z.max.y<.3)&&Ib(O,G,Z))return!0;return!1},gt}function Ib(r,t,e){let i=0,n=1;const s={x:t.x-r.x,y:t.y-r.y,z:t.z-r.z};for(const a of["x","y","z"]){const o=r[a],l=s[a];if(Math.abs(l)<1e-8){if(o<e.min[a]||o>e.max[a])return!1}else{let c=(e.min[a]-o)/l,h=(e.max[a]-o)/l;if(c>h){const u=c;c=h,h=u}if(i=Math.max(i,c),n=Math.min(n,h),i>n)return!1}}return!0}const Jc=new C;class Lb{constructor(t,e=1e3){this.capacity=e,this.cursor=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.drag=new Float32Array(e),this.gravity=new Float32Array(e);for(let s=0;s<e;s++)this.pos[s*3+1]=-999;const i=new jt;i.setAttribute("position",new be(this.pos,3)),i.setAttribute("aColor",new be(this.col,3)),i.setAttribute("aSize",new be(this.size,1)),i.setAttribute("aAlpha",new be(this.alpha,1));const n=new ei({transparent:!0,depthWrite:!1,blending:vi,vertexShader:`
        attribute vec3 aColor; attribute float aSize; attribute float aAlpha;
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vColor = aColor; vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (420.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.05, d);
          gl_FragColor = vec4(vColor * (0.8 + a * 0.9), a * vAlpha);
        }`});this.points=new Bl(i,n),this.points.frustumCulled=!1,t.add(this.points),this.geo=i}emit(t,e,i,n,s,a,o,l,c,h=0,u=.98){const d=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const f=d*3;this.pos[f]=t,this.pos[f+1]=e,this.pos[f+2]=i,this.vel[f]=n,this.vel[f+1]=s,this.vel[f+2]=a,this.col[f]=o.r,this.col[f+1]=o.g,this.col[f+2]=o.b,this.size[d]=l,this.alpha[d]=1,this.life[d]=c,this.maxLife[d]=c,this.gravity[d]=h,this.drag[d]=u}update(t){const e=this.capacity;for(let i=0;i<e;i++){if(this.life[i]<=0)continue;if(this.life[i]-=t,this.life[i]<=0){this.alpha[i]=0,this.pos[i*3+1]=-999;continue}const n=i*3,s=Math.pow(this.drag[i],t*60);this.vel[n]*=s,this.vel[n+1]=this.vel[n+1]*s+this.gravity[i]*t,this.vel[n+2]*=s,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;const a=this.life[i]/this.maxLife[i];this.alpha[i]=Math.min(1,a*2.4)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}}class Db{constructor(t,e,i){this.scene=t,this.camera=e,this.T=i,this.field=new Lb(t,1400),this.sparks=[new vt(16761466),new vt(16747325),new vt(16773327)],this.dust=[new vt(10193520),new vt(7169632)],this.tracers=[];const n=new Gt(1,1,1);for(let l=0;l<26;l++){const c=new Oe({color:16767392,transparent:!0,opacity:1,blending:vi,depthWrite:!1}),h=new xt(n,c);h.visible=!1,h.frustumCulled=!1,t.add(h),this.tracers.push({mesh:h,life:0,max:1})}this.tracerCursor=0,this.smokes=[];for(let l=0;l<34;l++){const c=new cn(new Ji({map:i.smoke,transparent:!0,opacity:0,depthWrite:!1,color:9012346}));c.visible=!1,t.add(c),this.smokes.push({sprite:c,life:0,max:1,vel:new C,grow:1})}this.smokeCursor=0,this.decals=[];const s=new pi(.26,.26);for(let l=0;l<64;l++){const c=new xt(s,new Oe({map:i.hole,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,color:16777215}));c.visible=!1,t.add(c),this.decals.push(c)}this.decalCursor=0,this.shells=[];const a=new Xe(.012,.014,.05,6),o=new ye({color:13738573,metalness:1,roughness:.28,envMapIntensity:1.4});for(let l=0;l<24;l++){const c=new xt(a,o);c.visible=!1,t.add(c),this.shells.push({mesh:c,life:0,vel:new C,spin:new C})}this.shellCursor=0,this.flash=new cn(new Ji({map:i.glows.warm,color:16761978,transparent:!0,blending:vi,depthWrite:!1,opacity:0})),this.flash.scale.setScalar(1),t.add(this.flash),this.flashLife=0,this.flashLight=new bs(16756838,0,9,2),t.add(this.flashLight),this.flashLightLife=0,this.shake=0,this.shakeDecay=0}muzzle(t,e,i=1){this.flash.position.copy(t),this.flash.position.addScaledVector(e,.05),this.flash.scale.setScalar(Ct(.55,.85)*i),this.flash.material.rotation=Math.random()*Math.PI*2,this.flash.material.opacity=1,this.flashLife=.055,this.flashLight.position.copy(t),this.flashLight.intensity=55*i,this.flashLightLife=.07,this.shake=Math.max(this.shake,.1*i);for(let n=0;n<5;n++)this.field.emit(t.x,t.y,t.z,e.x*Ct(3,9)+Ct(-1.2,1.2),e.y*Ct(3,9)+Ct(-.6,1.4),e.z*Ct(3,9)+Ct(-1.2,1.2),this.sparks[n%3],Ct(.6,1.4),Ct(.04,.1),-2,.92);this.smoke(t,e,.35,.28)}tracer(t,e,i=16767136,n=.016){const s=this.tracers[this.tracerCursor];this.tracerCursor=(this.tracerCursor+1)%this.tracers.length;const a=t.distanceTo(e);a<.2||(s.mesh.visible=!0,s.mesh.position.copy(t).add(e).multiplyScalar(.5),s.mesh.quaternion.setFromUnitVectors(new C(0,0,1),Jc.copy(e).sub(t).normalize()),s.mesh.scale.set(n,n,a),s.mesh.material.color.setHex(i),s.mesh.material.opacity=.95,s.life=.075,s.max=.075)}smoke(t,e=null,i=1,n=1){const s=this.smokes[this.smokeCursor];this.smokeCursor=(this.smokeCursor+1)%this.smokes.length,s.sprite.visible=!0,s.sprite.position.copy(t),s.vel.set(Ct(-.3,.3),Ct(.3,.9),Ct(-.3,.3)),e&&(s.vel.x+=e.x*.8,s.vel.y+=e.y*.8,s.vel.z+=e.z*.8),s.sprite.scale.setScalar(.12*n),s.sprite.material.opacity=.42*n,s.sprite.material.color.setHex(9275260),s.sprite.material.rotation=Math.random()*6.28,s.life=i,s.max=i,s.grow=.9*n}decal(t,e){const i=this.decals[this.decalCursor];this.decalCursor=(this.decalCursor+1)%this.decals.length,i.visible=!0,i.position.copy(t).addScaledVector(e,.012),i.lookAt(Jc.copy(t).add(e)),i.rotateZ(Math.random()*Math.PI*2);const n=Ct(.7,1.15);i.scale.set(n,n,n),i.material.opacity=.9}impact(t,e,i="concrete"){const n=Math.random(),s=10;for(let a=0;a<s;a++){const o=Ct(1.5,6),l=this.sparks[a%this.sparks.length];this.field.emit(t.x+e.x*.02,t.y+e.y*.02,t.z+e.z*.02,e.x*o+Ct(-2.5,2.5),e.y*o+Ct(-1.5,3),e.z*o+Ct(-2.5,2.5),i==="metal"?l:this.dust[a%2],Ct(.7,1.7),Ct(.08,.28),-7,.94)}n<.6&&this.smoke(Jc.copy(t).addScaledVector(e,.06),e,Ct(.5,.9),Ct(.35,.7)),i!=="flesh"&&this.decal(t,e)}blood(t,e){for(let i=0;i<10;i++)this.field.emit(t.x,t.y,t.z,e.x*Ct(2,5)+Ct(-1,1),Ct(.2,2.4),e.z*Ct(2,5)+Ct(-1,1),new vt(9053208),Ct(.8,1.6),Ct(.12,.3),-6,.9)}casing(t,e){const i=this.shells[this.shellCursor];this.shellCursor=(this.shellCursor+1)%this.shells.length,i.mesh.visible=!0,i.mesh.position.copy(t),i.vel.set(Ct(1.2,2.4)-e.z*.4,Ct(1.4,2.6),Ct(-1.4,-.2)),i.spin.set(Ct(-14,14),Ct(-14,14),Ct(-14,14)),i.life=3.2}explosion(t,e=16738866){for(let i=0;i<26;i++){const n=new C(Ct(-1,1),Ct(-.1,1),Ct(-1,1)).normalize();this.field.emit(t.x,t.y,t.z,n.x*Ct(2,8),n.y*Ct(1,7),n.z*Ct(2,8),Math.random()>.5?new vt(e):new vt(16766618),Ct(1,2.4),Ct(.2,.6),-6,.93)}this.smoke(t,null,1.2,1.4),this.shake=Math.max(this.shake,.22)}update(t){this.field.update(t);for(const e of this.tracers)e.life<=0||(e.life-=t,e.mesh.material.opacity=Math.max(0,e.life/e.max),e.life<=0&&(e.mesh.visible=!1));for(const e of this.smokes){if(e.life<=0)continue;e.life-=t;const i=Math.max(0,e.life/e.max);e.sprite.position.addScaledVector(e.vel,t),e.vel.multiplyScalar(.985),e.sprite.scale.addScalar(e.grow*t),e.sprite.material.opacity=.4*i,e.life<=0&&(e.sprite.visible=!1)}for(const e of this.decals)e.visible&&(e.material.opacity=Math.max(0,e.material.opacity-t*.012),e.material.opacity<=.01&&(e.visible=!1));for(const e of this.shells)e.life<=0||(e.life-=t,e.vel.y-=12*t,e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t,e.mesh.position.y<.02&&(e.mesh.position.y=.02,e.vel.y*=-.35,e.vel.x*=.6,e.vel.z*=.6,e.spin.multiplyScalar(.55)),e.life<=0&&(e.mesh.visible=!1));this.flashLife>0&&(this.flashLife-=t,this.flash.material.opacity=Math.max(0,this.flashLife/.055),this.flashLife<=0&&(this.flash.material.opacity=0)),this.flashLightLife>0&&(this.flashLightLife-=t,this.flashLight.intensity=Math.max(0,this.flashLightLife/.07)*55),this.shake=Math.max(0,this.shake-t*.55)}}const ui=Ce.lerp,Ys=(r,t,e,i)=>ui(r,t,1-Math.exp(-e*i));class Nb{constructor(t,e){this.camera=t,this.group=new Pe,t.add(this.group),e.add(t),this.metal=new ye({color:2369836,metalness:.92,roughness:.34,envMapIntensity:1.25}),this.metalDark=new ye({color:1053461,metalness:.85,roughness:.46,envMapIntensity:1}),this.polymer=new ye({color:1513754,metalness:.15,roughness:.74}),this.tan=new ye({color:7824972,metalness:.12,roughness:.78}),this.glove=new ye({color:2895657,metalness:.08,roughness:.92}),this.sleeve=new ye({color:4014392,metalness:.05,roughness:.95}),this.glass=new jh({color:10475240,metalness:0,roughness:.06,transmission:.65,transparent:!0,opacity:.35,envMapIntensity:1.4,side:Fi}),this.reticleMat=new Oe({color:16726560});const i=this.group;this.parts={};const n=(w,_,S,I,R,L=0,z=0,Y=0,D=i)=>{const k=new xt(w,_);return k.position.set(S,I,R),k.rotation.set(L,z,Y),D.add(k),k},s=(w,_,S)=>new Gt(w,_,S),a=(w,_,S,I=12)=>new Xe(w,_,S,I);n(s(.082,.125,.34),this.metal,0,0,-.03),n(s(.072,.035,.3),this.metalDark,0,.073,-.06),n(s(.088,.085,.33),this.metal,0,.095,-.1),n(s(.065,.022,.42),this.metalDark,0,.148,-.15);for(let w=0;w<15;w++)n(s(.068,.014,.012),this.metal,0,.158,.05-w*.027);n(s(.09,.105,.3),this.metal,0,.075,-.42);for(let w=0;w<7;w++)n(s(.096,.014,.022),this.metalDark,0,.126,-.3-w*.04),n(s(.096,.012,.02),this.metalDark,0,.023,-.3-w*.04);n(a(.019,.019,.3,10),this.metalDark,0,.075,-.66,Math.PI/2),n(a(.033,.03,.19,14),this.metal,0,.075,-.82,Math.PI/2);for(let w=0;w<5;w++)n(a(.034,.034,.006,14),this.metalDark,0,.075,-.87+w*.022,Math.PI/2);n(a(.026,.026,.012,12),this.metalDark,0,.075,-.916,Math.PI/2),this.mag=new Pe,this.mag.position.set(0,-.125,-.035),i.add(this.mag);const o=new xt(s(.055,.2,.105),this.tan);o.position.y=-.07,o.rotation.x=-.13,this.mag.add(o);for(let w=0;w<3;w++){const _=new xt(s(.058,.012,.107),this.polymer);_.position.set(0,-.02-w*.05,.01+w*.007),_.rotation.x=-.13,this.mag.add(_)}const l=new xt(s(.062,.022,.115),this.polymer);l.position.set(0,-.19,.015),this.mag.add(l),n(s(.052,.16,.075),this.polymer,0,-.14,.105,.22),n(s(.05,.02,.01),this.metal,0,-.205,.13),n(new An(.055,.008,5,12,Math.PI*1.35),this.metalDark,0,-.075,.055,0,Math.PI/2,.2),n(s(.012,.05,.012),this.metal,0,-.1,.03,.5),n(s(.07,.115,.26),this.polymer,0,.045,.25),n(s(.075,.07,.1),this.polymer,0,.02,.36),n(s(.078,.15,.035),this.metalDark,0,.03,.405),n(s(.03,.045,.08),this.polymer,0,.115,.2),n(s(.06,.03,.11),this.metalDark,0,.185,-.12),n(s(.075,.075,.085),this.metal,0,.235,-.12),n(s(.002,.058,.06),this.glass,.038,.235,-.12),n(s(.002,.058,.06),this.glass,-.038,.235,-.12);const c=n(new ji(.0028,8,8),this.reticleMat,0,.232,-.105);c.renderOrder=3;const h=n(new An(.009,.0014,4,20),this.reticleMat,0,.232,-.107);h.renderOrder=3;const u=n(new pi(.062,.055),this.glass,0,.232,-.108);u.rotation.y=0,this.reticle=new Pe,this.reticle.add(c),n(a(.012,.012,.014,10),this.metalDark,.042,.25,-.12,0,0,Math.PI/2),n(s(.018,.014,.05),this.polymer,.044,.212,-.09),n(s(.02,.016,.05),this.metalDark,.048,.118,0),n(s(.006,.028,.055),this.metalDark,.047,.1,-.02),n(a(.009,.009,.04,8),this.metal,.043,.045,.035,0,0,Math.PI/2),n(s(.024,.011,.033),this.metalDark,.044,.05,-.04),n(a(.021,.023,.1,12),this.metalDark,-.062,.075,-.42,Math.PI/2),n(new ur(.019,12),new Oe({color:16769200}),-.062,.075,-.471),n(new An(.02,.004,4,10),this.metalDark,-.045,.03,.36,0,Math.PI/2);const d=new Pe;d.position.set(.002,-.155,.1),d.rotation.set(.22,0,-.04),i.add(d);const f=new xt(s(.062,.09,.1),this.glove);d.add(f);for(let w=0;w<4;w++){const _=new xt(s(.016,.024,.072),this.glove);_.position.set(.016-w*.0135,-.008,-.075),_.rotation.x=-.55,d.add(_)}const p=new xt(s(.022,.05,.024),this.glove);p.position.set(-.036,.015,-.03),p.rotation.x=.5,d.add(p);const x=new xt(a(.032,.045,.12,8),this.sleeve);x.position.set(.08,-.34,.19),x.rotation.set(1.35,.12,-.32),x.visible=!1,i.add(x);const m=new Pe;m.position.set(-.015,.005,-.47),m.rotation.set(-.1,0,.12),i.add(m);const g=new xt(s(.06,.055,.11),this.glove);m.add(g);for(let w=0;w<4;w++){const _=new xt(s(.013,.048,.024),this.glove);_.position.set(-.02+w*.0135,.024,-.035),_.rotation.x=.2,m.add(_)}const v=new xt(s(.024,.024,.06),this.glove);v.position.set(.035,.012,0),m.add(v);const M=new xt(a(.032,.045,.12,8),this.sleeve);M.position.set(-.06,-.17,-.58),M.rotation.set(1.25,0,-.55),M.visible=!1,i.add(M);const y=new bs(13624050,5.5,2.4,2);y.position.set(.38,.3,.55),i.add(y);const E=new bs(16759178,3.2,2,2);E.position.set(-.45,.15,-.2),i.add(E),i.scale.setScalar(.78),this.muzzle=new fe,this.muzzle.position.set(0,.075,-.95),i.add(this.muzzle),this.ejectPort=new fe,this.ejectPort.position.set(.05,.1,-.02),i.add(this.ejectPort),this.basePos=new C(.27,-.4,-.95),this.baseRot=new C(.005,-.025,.008),this.adsPos=new C(0,-.172,-.72),this.adsRot=new C(0,0,0),this.sprintPos=new C(.33,-.43,-.92),this.sprintRot=new C(-.2,.66,.14),this.ads=0,this.sprint=0,this.bobPhase=0,this.swayX=0,this.swayY=0,this.kick=0,this.recoilRot=0,this.reloadT=0,this.reloading=!1,this.reloadDuration=2.15,this.sprintAmount=0}setReloading(t){this.reloading=t,t?this.reloadT=0:this.reloadT=0}reset(){this.setReloading(!1),this.kick=0,this.recoilRot=0,this.ads=0,this.sprint=0,this.swayX=0,this.swayY=0,this.group.visible=!0,this.group.position.copy(this.basePos),this.group.rotation.set(0,0,0),this.mag.position.set(0,-.125,-.035),this.mag.rotation.set(0,0,0)}fire(t=1){this.kick=Math.min(1.5,this.kick+.55*t),this.recoilRot=Math.min(1,this.recoilRot+.32*t)}update(t,{moving:e=0,sprinting:i=!1,ads:n=!1,lookDX:s=0,lookDY:a=0,grounded:o=!0,time:l=0}={}){this.ads=Ys(this.ads,n?1:0,14,t),this.sprint=Ys(this.sprint,i?1:0,8,t),this.kick=Ys(this.kick,0,13,t),this.recoilRot=Ys(this.recoilRot,0,11,t),this.swayX=Ys(this.swayX,Ce.clamp(-s*.0012,-.03,.03),9,t),this.swayY=Ys(this.swayY,Ce.clamp(a*.0012,-.03,.03),9,t);const c=e;this.bobPhase+=t*(7+c*2.2);const h=(1-this.ads*.75)*(o?1:.3)*(.45+c*.55),u=Math.cos(this.bobPhase*.5)*.006*h,d=Math.sin(this.bobPhase)*.008*h,f=Ce.clamp((.9-this.camera.aspect)/.4,0,1),p=ui(this.basePos.x,.15,f),x=ui(this.basePos.y,-.3,f);let m=ui(p,this.adsPos.x,this.ads),g=ui(x,this.adsPos.y,this.ads),v=ui(this.basePos.z,this.adsPos.z,this.ads);m=ui(m,ui(this.sprintPos.x,.22,f),this.sprint),g=ui(g,this.sprintPos.y,this.sprint),v=ui(v,this.sprintPos.z,this.sprint);let M=ui(this.baseRot.x,this.adsRot.x,this.ads),y=ui(this.baseRot.y,this.adsRot.y,this.ads),E=ui(this.baseRot.z,this.adsRot.z,this.ads);M=ui(M,this.sprintRot.x,this.sprint),y=ui(y,this.sprintRot.y,this.sprint),E=ui(E,this.sprintRot.z,this.sprint);let w=0,_=0,S=0,I=0;if(this.reloading){this.reloadT+=t;const R=Ce.clamp(this.reloadT/this.reloadDuration,0,1),L=Math.sin(Math.min(1,R*1.15)*Math.PI)*1;w=-.1*L,_=-.42*L,S=.55*L,I=R>.16&&R<.72?Math.min(1,(R-.16)/.1)*(1-Math.min(1,(R-.62)/.1)):0,this.mag.position.y=-.125-I*.42,this.mag.rotation.z=I*.5,this.mag.rotation.x=I*.3,R>=1&&(this.reloading=!1,this.reloadT=0,this.mag.position.set(0,-.125,-.035),this.mag.rotation.set(0,0,0))}v+=this.kick*.045,M-=this.recoilRot*.1,g+=this.kick*.006,m+=Math.sin(this.bobPhase*9)*this.recoilRot*.004,this.group.position.set(m+u+this.swayX,g+d+w+this.swayY+Math.sin(l*1.2)*.0018,v),this.group.rotation.set(M+_+Math.sin(l*.8)*.002,y+this.swayX*.9,E+S+u*.5)}muzzleWorld(t=new C){return this.muzzle.getWorldPosition(t)}ejectWorld(t=new C){return this.ejectPort.getWorldPosition(t)}}const Kc=1.68,Ub=1.12,cs=.38;class Fb{constructor(t,e){this.camera=t,this.world=e,this.pos=new C(0,0,17.5),this.vel=new C,this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.health=100,this.maxHealth=100,this.armor=60,this.maxArmor=60,this.alive=!0,this.onGround=!0,this.eye=Kc,this.crouching=!1,this.sprinting=!1,this.bob=0,this.bobAmount=0,this.landDip=0,this.shake=0,this.speed=0,this.footstep=0,this.timeSinceDamage=99,this.deathT=0,this.onFootstep=null,this.damageFlash=0,this.lastDamageDir=0,t.rotation.order="YXZ",this.camera.position.set(this.pos.x,Kc,this.pos.z)}look(t,e,i=.0022){this.alive&&(this.yaw-=t*i,this.pitch-=e*i,this.pitch=Ce.clamp(this.pitch,-1.42,1.42))}addRecoil(t,e){this.recoilPitch+=t,this.recoilYaw+=e}damage(t,e=0){if(!this.alive)return!1;this.timeSinceDamage=0,this.damageFlash=1,this.lastDamageDir=e;let i=t;if(this.armor>0){const n=Math.min(this.armor,i*.62);this.armor-=n,i-=n}return this.health-=i,this.shake=Math.min(1,this.shake+.35),this.health<=0?(this.health=0,this.alive=!1,this.deathT=0,!0):!1}update(t,e,{ads:i=!1}={}){if(!this.alive){this.deathT+=t,this.camera.position.y=Ce.lerp(this.camera.position.y,.42,1-Math.exp(-3*t)),this.camera.rotation.z=Ce.lerp(this.camera.rotation.z,.55,1-Math.exp(-2.4*t)),this.camera.rotation.x=Ce.lerp(this.camera.rotation.x,-.15,1-Math.exp(-2.4*t)),this.shake=Math.max(0,this.shake-t);return}this.timeSinceDamage+=t,this.timeSinceDamage>5.5&&this.health<this.maxHealth&&(this.health=Math.min(this.maxHealth,this.health+t*7)),this.damageFlash=Math.max(0,this.damageFlash-t*1.6),this.shake=Math.max(0,this.shake-t*2.2);const n=!!e.crouch;this.crouching=n,this.eye=Ce.lerp(this.eye,n?Ub:Kc,1-Math.exp(-12*t)),this.sprinting=!!e.sprint&&!i&&!n&&e.moveY>.2;let s=this.sprinting?8.7:n?3.1:5.6;i&&(s*=.58),this.onGround||(s*=.88);const a=e.moveY,o=e.moveX,l=Math.hypot(a,o),c=l>1?a/l:a,h=l>1?o/l:o,u=Math.sin(this.yaw),d=Math.cos(this.yaw),f=(-u*c+d*h)*s,p=(-d*c-u*h)*s,x=this.onGround?16:4.5;this.vel.x+=(f-this.vel.x)*Math.min(1,x*t),this.vel.z+=(p-this.vel.z)*Math.min(1,x*t),e.jump&&this.onGround&&(this.vel.y=5.7,this.onGround=!1,this.landDip=-.035),this.vel.y-=17.5*t;const m=this.onGround;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.pos.y+=this.vel.y*t,this.resolveCollisions(),this.pos.y<=0?(!m&&this.vel.y<-4&&(this.landDip=Math.min(.09,-this.vel.y*.01),this.shake=Math.min(1,this.shake+.18),this.onFootstep&&this.onFootstep("land")),this.pos.y=0,this.vel.y=0,this.onGround=!0):this.onGround=!1;const g=this.world.bounds;this.pos.x=Ce.clamp(this.pos.x,g.minX+.5,g.maxX-.5),this.pos.z=Ce.clamp(this.pos.z,g.minZ+.5,g.maxZ-.5),this.speed=Math.hypot(this.vel.x,this.vel.z),this.landDip=Ce.lerp(this.landDip,0,1-Math.exp(-9*t));const v=Ce.clamp(this.speed/6,0,1.35);this.bobAmount=Ce.lerp(this.bobAmount,v*(this.onGround?1:.2),1-Math.exp(-8*t)),this.bob+=t*(6.2+this.speed*1.25);const M=Math.sin(this.bob)*.021*this.bobAmount*(i?.28:1),y=Math.cos(this.bob*.5)*.016*this.bobAmount*(i?.28:1),E=Math.sin(performance.now()*.0011)*.0025;if(this.onGround&&this.speed>1.2){this.footstep+=this.speed*t;const R=this.sprinting?2.15:1.7;this.footstep>R&&(this.footstep=0,this.onFootstep&&this.onFootstep("step"))}this.recoilPitch=Ce.lerp(this.recoilPitch,0,1-Math.exp(-7*t)),this.recoilYaw=Ce.lerp(this.recoilYaw,0,1-Math.exp(-7*t));const w=this.shake*.02+0,_=(Math.random()-.5)*w,S=(Math.random()-.5)*w,I=(Math.random()-.5)*w;this.camera.position.set(this.pos.x+y+_,this.pos.y+this.eye+M+E+this.landDip+S,this.pos.z+I),this.camera.rotation.set(this.pitch+this.recoilPitch,this.yaw+this.recoilYaw,Math.sin(this.bob*.5)*.004*this.bobAmount)}resolveCollisions(){const t=this.pos.y+.25,e=this.pos.y+this.eye-.05;for(const i of this.world.colliders){if(i.max.y<t||i.min.y>e)continue;const n=Ce.clamp(this.pos.x,i.min.x,i.max.x),s=Ce.clamp(this.pos.z,i.min.z,i.max.z);let a=this.pos.x-n,o=this.pos.z-s;const l=a*a+o*o;if(l>=cs*cs)continue;if(l<1e-8){const u=this.pos.x-i.min.x,d=i.max.x-this.pos.x,f=this.pos.z-i.min.z,p=i.max.z-this.pos.z,x=Math.min(u,d,f,p);x===u?this.pos.x=i.min.x-cs:x===d?this.pos.x=i.max.x+cs:x===f?this.pos.z=i.min.z-cs:this.pos.z=i.max.z+cs;continue}const c=Math.sqrt(l),h=(cs-c)/c;this.pos.x+=a*h,this.pos.z+=o*h}}}const _f=new C,Ob=new C,vf=new C,Qc=new mu,Pr=new C,Bb=3.2;let zb=0;class kb{constructor(t,e,i,n,s,a=1){this.id=++zb,this.scene=t,this.world=e,this.effects=i,this.audio=n,this.root=new Pe,this.root.position.copy(s),this.root.position.y=0,this.health=100,this.maxHealth=100,this.alive=!0,this.state="advance",this.speed=Ct(2.1,3)+Math.min(1.1,a*.14),this.fireCooldown=Ct(1.2,3.2),this.burst=0,this.burstTimer=0,this.hitFlash=0,this.deadT=0,this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=Ct(1,3),this.muzzleTimer=0,this.stepPhase=Math.random()*6,this.aimYaw=0,this.hitMeshes=[],this.materials=[],this.muzzleSprite=null,this.baseY=0,this.spawnT=0,this.radius=.36,this.accuracy=.5+Math.min(.22,a*.03),this.damage=7+Math.min(5,a*.7),this.build(),t.add(this.root)}build(){const t=new ye({color:3160122,roughness:.88,metalness:.04,envMapIntensity:.55}),e=new ye({color:1448475,roughness:.94,metalness:.02}),i=new ye({color:4936512,roughness:.84,metalness:.06}),n=new ye({color:2567208,roughness:.66,metalness:.28}),s=new ye({color:1711388,roughness:.7,metalness:.2}),a=new ye({color:789773,roughness:.95}),o=new ye({color:2755334,emissive:16725271,emissiveIntensity:3.4,roughness:.3,metalness:.4}),l=new ye({color:1777441,roughness:.4,metalness:.9});this.materials.push(t,e,i,n,s,l);const c=this.root,h=Ct(.96,1.05);c.scale.setScalar(h),c.userData.enemy=this;const u=(B,et,q,j,it,At=c)=>{const Dt=new xt(B,et);return Dt.position.set(q,j,it),Dt.castShadow=!1,Dt.receiveShadow=!0,At.add(Dt),Dt.userData.enemy=this,Dt};this.legs=[];for(const B of[-1,1]){const et=new Pe;et.position.set(B*.13,.94,0),c.add(et);const q=u(new Gt(.18,.48,.21),t,0,-.24,0,et),j=u(new Gt(.17,.12,.19),n,0,-.46,.02,et),it=u(new Gt(.145,.45,.17),t,0,-.69,0,et),At=u(new Gt(.17,.14,.3),a,0,-.91,.05,et),Dt=u(new Gt(.14,.14,.06),i,0,-.33,.13,et);this.legs.push(et);for(const K of[q,it,At,j,Dt])this.hitMeshes.push(K)}this.torso=new Pe,this.torso.position.y=.95,c.add(this.torso);const d=u(new Gt(.42,.3,.26),t,0,.16,0,this.torso),f=u(new Gt(.5,.38,.3),t,0,.48,0,this.torso),p=u(new Gt(.44,.42,.34),i,0,.44,.01,this.torso),x=u(new Gt(.3,.3,.06),n,0,.47,.19,this.torso),m=u(new Gt(.32,.34,.07),n,0,.45,-.19,this.torso);for(let B=0;B<3;B++){const et=u(new Gt(.11,.12,.09),i,-.13+B*.13,.26,.21,this.torso);this.hitMeshes.push(et)}for(let B=0;B<2;B++)u(new Gt(.1,.12,.08),e,-.12+B*.24,.04,.17,this.torso);const g=u(new Gt(.035,.02,.02),new Oe({color:16726814}),.2,.63,.09,this.torso);this.strobe=g;const v=u(new Gt(.09,.17,.07),s,-.24,.55,-.14,this.torso),M=u(new Xe(.006,.008,.52,5),s,-.25,.88,-.16,this.torso);this.antenna=M;for(const B of[d,f,p,x,m,v,M])this.hitMeshes.push(B);this.arms=[];for(const B of[-1,1]){const et=new Pe;et.position.set(B*.3,.62,0),this.torso.add(et);const q=u(new ji(.115,10,8),t,0,0,0,et);q.scale.set(1.05,.9,1);const j=u(new Gt(.13,.34,.15),t,0,-.19,0,et),it=new Pe;it.position.set(0,-.37,0),et.add(it);const At=u(new Gt(.12,.33,.13),t,0,-.16,0,it),Dt=u(new Gt(.11,.13,.12),e,0,-.34,0,it);this.hitMeshes.push(q,j,At,Dt),this.arms.push({shoulder:et,elbow:it,side:B})}this.arms[0].shoulder.rotation.set(-1,0,-.25),this.arms[0].elbow.rotation.x=-.5,this.arms[1].shoulder.rotation.set(-1.15,0,.28),this.arms[1].elbow.rotation.x=-.65,this.head=new Pe,this.head.position.set(0,.76,0),this.torso.add(this.head);const y=u(new Xe(.075,.09,.12,8),e,0,-.02,0,this.head),E=u(new ji(.135,14,12),e,0,.09,0,this.head);E.scale.set(.92,1.05,1);const w=u(new ji(.155,14,10,0,Math.PI*2,0,Math.PI*.6),n,0,.115,-.005,this.head);w.scale.set(1,.95,1.05);const _=u(new Gt(.24,.035,.2),n,0,.105,-.02,this.head),S=u(new Gt(.19,.045,.04),o,0,.075,.125,this.head);this.visor=S;const I=u(new Gt(.1,.07,.08),s,0,.17,.13,this.head),R=u(new Xe(.006,.006,.2,5),s,.09,.02,.1,this.head);R.rotation.z=.55,w.userData.part="head",E.userData.part="head",this.hitMeshes.push(y,E,w,S);for(const B of[y,E,w,_,S,I,R])B.userData.part=B.userData.part||"head";this.rifle=new Pe,this.rifle.position.set(.02,.42,.24),this.rifle.rotation.set(-.06,0,0),this.torso.add(this.rifle);const L=u(new Gt(.06,.1,.38),l,0,0,0,this.rifle),z=u(new Xe(.016,.016,.34,6),l,0,.01,-.33,this.rifle);z.rotation.x=Math.PI/2;const Y=u(new Gt(.05,.1,.2),l,0,-.01,.27,this.rifle),D=u(new Gt(.045,.16,.09),s,0,-.12,-.03,this.rifle);D.rotation.x=-.18;const k=u(new Gt(.035,.05,.12),l,0,.09,-.05,this.rifle);this.hitMeshes.push(L,z,Y,D,k),this.muzzle=new fe,this.muzzle.position.set(0,.01,-.52),this.rifle.add(this.muzzle),this.muzzleSprite=new cn(new Ji({map:this.effects.T.glows.warm,color:16756838,transparent:!0,blending:vi,depthWrite:!1,opacity:0})),this.muzzleSprite.position.set(0,.01,-.56),this.muzzleSprite.scale.setScalar(.42),this.rifle.add(this.muzzleSprite),this.audio;const J=new xt(new ur(.34,16),new Oe({color:0,transparent:!0,opacity:.28,depthWrite:!1}));J.rotation.x=-Math.PI/2,J.position.y=.012,c.add(J);for(const B of this.hitMeshes)B.userData.part||(B.userData.part="body"),B.userData.enemy=this}hit(t,e,i,n){if(!this.alive)return!1;const s=e==="head"?t*Bb:t;return this.health-=s,this.hitFlash=1,this.stagger=Math.min(1,(this.stagger||0)+.5),this.effects&&(this.effects.blood(i,n),this.effects.impact(i,vf.copy(n).negate(),"flesh")),this.health<=0?(this.die(n),!0):!1}die(t){this.alive=!1,this.state="dead",this.deadT=0,this.health=0,this.audio?.enemyDeath(this.root.position),this.effects&&this.effects.explosion(_f.copy(this.root.position).setY(1.1),9054746),this.rifle.visible=!1,this.fallDir=t&&t.x>0?-1:1}update(t,e,i){if(!this.alive){this.deadT+=t;const f=Math.min(1,this.deadT/.65),p=1-Math.pow(1-f,3);this.root.rotation.x=-p*1.5*(this.fallDir||1),this.root.position.y=Math.max(-.15,-p*.18),this.muzzleSprite.material.opacity=0,this.hitFlash=Math.max(0,this.hitFlash-t*4);for(const x of this.materials)x.emissiveIntensity=this.hitFlash*.6;if(this.deadT>4.5){const x=Math.max(0,1-(this.deadT-4.5)/1);this.root.traverse(m=>{m.isMesh&&m.material&&(m.material.userData||(m.material.userData={}),m.material.transparent!==!0&&(m.material.transparent=!0,m.material._baseOpacity=m.material.opacity),m.material.opacity=x*(m.material._baseOpacity??1))})}this.deadT>5.6&&(this.remove=!0);return}this.spawnT+=t,this.stagger=Math.max(0,(this.stagger||0)-t*4),this.muzzleTimer=Math.max(0,this.muzzleTimer-t),this.muzzleSprite.material.opacity=this.muzzleTimer>0?1:0,this.muzzleSprite.material.rotation=Math.random()*6.28,this.hitFlash=Math.max(0,this.hitFlash-t*6);for(const f of this.materials)f.emissive&&(f.emissive.setHex(16726814),f.emissiveIntensity=this.hitFlash*.9);this.visor.material.emissiveIntensity=3+Math.sin(performance.now()*.004+this.id)*.7,this.strobe&&(this.strobe.visible=Math.sin(performance.now()*.003+this.id*2)>.4);const n=_f.set(e.pos.x,e.pos.y+1.55,e.pos.z),s=Ob.set(this.root.position.x,1.55,this.root.position.z),a=vf.copy(n).sub(s),o=a.length(),l=a.clone().normalize(),c=!this.world.blocked(s,n);let u=Math.atan2(-l.x,-l.z)-this.root.rotation.y;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.root.rotation.y+=u*Math.min(1,t*6),this.strafeTimer-=t,this.strafeTimer<=0&&(this.strafeTimer=Ct(1.1,2.8),this.strafeDir*=-1);let d=0;if(this.stagger>.1)d=0;else if(!c||o>24){const f=new C(-l.z,0,l.x).multiplyScalar(this.strafeDir*.55);Pr.copy(l).multiplyScalar(.9).add(f).setY(0).normalize(),d=this.speed,this.state="advance"}else o>12?(Pr.copy(l).setY(0).normalize(),d=this.speed*.55,this.state="advance"):(Pr.set(-l.z,0,l.x).multiplyScalar(this.strafeDir),d=this.speed*.32,this.state="engage");if(d>0){const f=this.root.position.x+Pr.x*d*t,p=this.root.position.z+Pr.z*d*t;this.root.position.x=f,this.root.position.z=p,this.collide(),this.stepPhase+=t*(5.2+d*1.8);const x=Math.sin(this.stepPhase)*.55*Math.min(1,d/1.6);this.legs[0].rotation.x=x,this.legs[1].rotation.x=-x,this.torso.position.y=.95+Math.abs(Math.sin(this.stepPhase))*.025}else this.legs[0].rotation.x*=1-Math.min(1,t*8),this.legs[1].rotation.x*=1-Math.min(1,t*8);this.aimYaw=Ce.clamp(u,-.5,.5),this.torso.rotation.y=this.aimYaw*.5;for(const f of i.others(this)){const p=this.root.position.x-f.root.position.x,x=this.root.position.z-f.root.position.z,m=p*p+x*x;if(m>.001&&m<1.1){const g=Math.sqrt(m),v=(1.05-g)*.5;this.root.position.x+=p/g*v,this.root.position.z+=x/g*v}}c&&o<30&&e.alive&&(this.fireCooldown-=t,this.burst>0?(this.burstTimer-=t,this.burstTimer<=0&&(this.shoot(e,o,i),this.burst--,this.burstTimer=Ct(.1,.16),this.burst<=0&&(this.fireCooldown=Ct(2,3.6)))):this.fireCooldown<=0&&(this.burst=3+(Et()>.6?1:0),this.burstTimer=.05)),this.root.updateMatrixWorld(!0)}shoot(t,e,i){const n=this.muzzle.getWorldPosition(new C),s=new C(t.pos.x,t.pos.y+1.5,t.pos.z),a=.1+e*.004;s.x+=Ct(-a,a)*e*.04,s.y+=Ct(-a,a)*e*.03,s.z+=Ct(-a,a)*e*.04,s.clone().sub(n).normalize();const o=s.clone();this.effects.tracer(n,o,16756838,.012),this.muzzleTimer=.07,this.muzzleSprite.material.opacity=1,this.audio?.enemyShot(this.root.position,e);const l=Ce.clamp(.62-e*.012,.18,.55)*(t.sprinting?.55:1)*(t.crouching?.8:1);if(Math.random()<l){const c=this.damage*Ct(.8,1.2),h=Math.atan2(-(this.root.position.x-t.pos.x),-(this.root.position.z-t.pos.z));i.onPlayerHit(c,h,n)}if(Math.random()>.5){const c=s.clone().add(new C(Ct(-2,2),Ct(-1,1),Ct(-2,2)));this.effects.impact(c,new C(0,1,0),"concrete")}}collide(){for(const i of this.world.colliders){if(i.max.y<.3||i.min.y>1.75)continue;const n=Ce.clamp(this.root.position.x,i.min.x,i.max.x),s=Ce.clamp(this.root.position.z,i.min.z,i.max.z);let a=this.root.position.x-n,o=this.root.position.z-s;const l=a*a+o*o;if(l>=this.radius*this.radius||l<1e-8)continue;const c=Math.sqrt(l),h=(this.radius-c)/c;this.root.position.x+=a*h,this.root.position.z+=o*h}}}class Gb{constructor(t,e,i,n){this.scene=t,this.world=e,this.effects=i,this.audio=n,this.list=[],this.hitMeshes=[],this.spawnTimer=0,this.wave=1}spawn(t,e){const i=new kb(this.scene,this.world,this.effects,this.audio,t,e);return this.list.push(i),this.hitMeshes.push(...i.hitMeshes),i}aliveCount(){return this.list.filter(t=>t.alive).length}update(t,e,i){for(const s of this.list)s.update(t,e,{others:a=>this.list.filter(o=>o!==a&&o.alive),onPlayerHit:i.onPlayerHit});let n=!1;this.list=this.list.filter(s=>s.remove?(this.scene.remove(s.root),n=!0,!1):!0),n?this.rebuildHitMeshes():this.list.some(s=>!s.alive)&&this.rebuildHitMeshes()}rebuildHitMeshes(){this.hitMeshes=[];for(const t of this.list)t.alive&&this.hitMeshes.push(...t.hitMeshes)}raycast(t){return Qc.set(t.origin,t.direction),Qc.far=120,Qc.intersectObjects(this.hitMeshes,!1)[0]||null}clear(){for(const t of this.list)this.scene.remove(t.root);this.list=[],this.hitMeshes=[]}}class Vb{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.started=!1,this.noise=null,this.reverb=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=.62;const i=e.createDynamicsCompressor();i.threshold.value=-18,i.knee.value=22,i.ratio.value=5,i.attack.value=.004,i.release.value=.22,this.master.connect(i),i.connect(e.destination),this.noise=this.makeNoise(2),this.reverb=this.makeReverb(1.7,.55),this.reverb.connect(this.master),this.reverbGain=e.createGain(),this.reverbGain.gain.value=.16,this.reverbGain.connect(this.reverb),this.started=!0,this.startAmbience()}makeNoise(t=2){const e=this.ctx,i=Math.floor(e.sampleRate*t),n=e.createBuffer(1,i,e.sampleRate),s=n.getChannelData(0);let a=0;for(let o=0;o<i;o++){const l=Math.random()*2-1;a=(a+.02*l)/1.02,s[o]=l*.8+a*2}return n}makeReverb(t,e){const i=this.ctx,n=Math.floor(i.sampleRate*t),s=i.createBuffer(2,n,i.sampleRate);for(let o=0;o<2;o++){const l=s.getChannelData(o);for(let c=0;c<n;c++){const h=c/n;l[c]=(Math.random()*2-1)*Math.pow(1-h,e*4.5)}}const a=i.createConvolver();return a.buffer=s,a}startAmbience(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noise,e.loop=!0;const i=t.createBiquadFilter();i.type="highpass",i.frequency.value=900;const n=t.createGain();n.gain.value=.055,e.connect(i).connect(n).connect(this.master),e.start();const s=t.createBufferSource();s.buffer=this.noise,s.loop=!0,s.playbackRate.value=.4;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=320,a.Q.value=2.5;const o=t.createGain();o.gain.value=.09,s.connect(a).connect(o).connect(this.master),s.start();const l=t.createOscillator();l.frequency.value=.08;const c=t.createGain();c.gain.value=140,l.connect(c).connect(a.frequency),l.start();for(const[u,d]of[[48,.03],[72.4,.018],[96.8,.009]]){const f=t.createOscillator();f.type="sine",f.frequency.value=u;const p=t.createGain();p.gain.value=d;const x=t.createOscillator();x.frequency.value=.07+Math.random()*.06;const m=t.createGain();m.gain.value=d*.6,x.connect(m).connect(p.gain),x.start(),f.connect(p).connect(this.master),f.start()}const h=()=>{if(!this.ctx)return;const u=this.ctx.currentTime;this.patter(u),this.patterTimer=setTimeout(h,90+Math.random()*220)};this.patterTimer=setTimeout(h,500)}patter(t){const e=this.ctx,i=e.createBufferSource();i.buffer=this.noise,i.playbackRate.value=.5+Math.random();const n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=1800+Math.random()*3400,n.Q.value=6;const s=e.createGain(),a=t+Math.random()*.06;s.gain.setValueAtTime(0,a),s.gain.linearRampToValueAtTime(.012+Math.random()*.03,a+.004),s.gain.exponentialRampToValueAtTime(1e-4,a+.13),i.connect(n).connect(s).connect(this.master),i.start(a,Math.random()*1.5,.16)}now(){return this.ctx?this.ctx.currentTime:0}tone(t,e,i,n,s=0,a=null){if(!this.ctx||this.muted)return;const o=this.ctx,l=this.now()+s,c=o.createOscillator();c.type=e,c.frequency.setValueAtTime(t,l),a&&c.frequency.exponentialRampToValueAtTime(Math.max(20,a),l+i);const h=o.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(Math.max(2e-4,n),l+.006),h.gain.exponentialRampToValueAtTime(1e-4,l+i),c.connect(h).connect(this.master),c.start(l),c.stop(l+i+.02)}burst({dur:t=.2,freq:e=1200,q:i=1,gain:n=.3,type:s="bandpass",when:a=0,rate:o=1,reverb:l=.1}={}){if(!this.ctx||this.muted)return;const c=this.ctx,h=this.now()+a,u=c.createBufferSource();u.buffer=this.noise,u.playbackRate.value=o;const d=c.createBiquadFilter();d.type=s,d.frequency.value=e,d.Q.value=i;const f=c.createGain();if(f.gain.setValueAtTime(1e-4,h),f.gain.linearRampToValueAtTime(n,h+.004),f.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(d).connect(f),f.connect(this.master),this.reverbGain){const p=c.createGain();p.gain.value=l,f.connect(p).connect(this.reverbGain)}u.start(h,Math.random()*1.4,t+.05)}shot(){!this.started||this.muted||(this.burst({dur:.14,freq:2800,q:.9,gain:.55,rate:1.25,reverb:.5}),this.burst({dur:.32,freq:700,q:1.4,gain:.32,type:"lowpass",reverb:.7}),this.tone(96,"sine",.19,.42,0,42),this.tone(1900,"square",.03,.06),setTimeout(()=>this.tick(.14),55))}tick(t=.2){this.burst({dur:.035,freq:3600,q:3,gain:t,type:"bandpass"}),this.tone(720,"triangle",.03,t*.12)}enemyShot(t,e){if(!this.started||this.muted)return;const i=Hb(.3-e*.006,.02,.3);this.burst({dur:.1,freq:1800,q:1.2,gain:i,rate:1.1,reverb:.75}),this.burst({dur:.25,freq:520,q:1.2,gain:i*.6,type:"lowpass",reverb:.9}),this.tone(72,"sine",.16,i*.7,0,40)}whiz(){!this.started||this.muted||this.burst({dur:.12,freq:4200,q:8,gain:.09,rate:1.8})}hitmarker(t=!1){!this.started||this.muted||(t?(this.tone(1750,"square",.035,.1),this.tone(2350,"square",.05,.07,.04)):this.tone(1150,"square",.035,.085))}impact(){this.burst({dur:.06,freq:2200,q:2,gain:.09,rate:1.4})}reload(){!this.started||this.muted||(this.tick(.22),setTimeout(()=>{this.tick(.16),this.burst({dur:.08,freq:380,q:2,gain:.12,type:"lowpass"})},420),setTimeout(()=>{this.tick(.24),this.tone(190,"triangle",.07,.08)},1450),setTimeout(()=>this.tick(.26),1680),setTimeout(()=>this.burst({dur:.05,freq:900,q:4,gain:.2}),1900))}empty(){!this.started||this.muted||(this.tick(.22),this.tone(420,"square",.02,.03))}footstep(t="step"){if(!this.started||this.muted)return;const e=t==="land"?.22:.1;this.burst({dur:t==="land"?.14:.08,freq:260+Math.random()*180,q:1.4,gain:e,type:"lowpass",rate:.8}),Math.random()>.6&&this.burst({dur:.05,freq:3200,q:2,gain:.03})}hurt(){!this.started||this.muted||(this.burst({dur:.18,freq:420,q:.8,gain:.25,type:"lowpass"}),this.tone(58,"sine",.3,.22,0,38))}enemyDeath(t){!this.started||this.muted||(this.burst({dur:.4,freq:300,q:.8,gain:.22,type:"lowpass",reverb:1}),this.tone(90,"sine",.35,.14,0,45))}waveHorn(){!this.started||this.muted||(this.tone(110,"sawtooth",1.2,.075,0,104),this.tone(164.8,"sawtooth",1.1,.04,.05,158),this.burst({dur:1.4,freq:200,q:.7,gain:.09,type:"lowpass",reverb:1}))}waveClear(){!this.started||this.muted||(this.tone(392,"triangle",.25,.07),this.tone(523,"triangle",.35,.06,.16),this.tone(659,"triangle",.5,.05,.32))}ui(){!this.started||this.muted||this.tone(880,"triangle",.04,.05)}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.62)}destroy(){clearTimeout(this.patterTimer),this.ctx&&this.ctx.close(),this.ctx=null}}function Hb(r,t,e){return Math.max(t,Math.min(e,r))}const pm="blacksite.settings.v1",yf="blacksite.best.v1",Wb=["N","NE","E","SE","S","SW","W","NW"];function Xb(){try{return Object.assign({sens:1,muted:!1,tilt:!1},JSON.parse(localStorage.getItem(pm)||"{}"))}catch{return{sens:1,muted:!1,tilt:!1}}}class qb{constructor(t={}){this.cb=t,this.settings=Xb(),this.inGame=!1,this.best=0;try{this.best=Number(localStorage.getItem(yf)||0)||0}catch{}this.cache={},this.mobile=!1,this.el={loading:document.getElementById("loading"),hud:document.getElementById("hud"),start:document.getElementById("start-screen"),pause:document.getElementById("pause-screen"),death:document.getElementById("death-screen"),banner:document.getElementById("banner"),bannerKicker:document.getElementById("banner-kicker"),bannerTitle:document.getElementById("banner-title"),bannerSub:document.getElementById("banner-sub"),crosshair:document.getElementById("crosshair"),hitmarker:document.getElementById("hitmarker"),damageVignette:document.getElementById("damage-vignette"),damageIndicators:document.getElementById("damage-indicators"),killfeed:document.getElementById("killfeed"),healthFill:document.getElementById("health-fill"),armorFill:document.getElementById("armor-fill"),healthNum:document.getElementById("health-num"),armorNum:document.getElementById("armor-num"),healthBar:document.querySelector(".bar.health"),lowHealth:document.getElementById("low-health"),ammoMag:document.getElementById("ammo-mag"),ammoReserve:document.getElementById("ammo-reserve"),reloadLabel:document.getElementById("reload-label"),reloadBar:document.getElementById("reload-bar"),waveNum:document.getElementById("wave-num"),hostileNum:document.getElementById("hostile-num"),scoreNum:document.getElementById("score-num"),waveProgress:document.querySelector("#wave-progress span"),statusText:document.getElementById("status-text"),compassStrip:document.getElementById("compass-strip"),compassDeg:document.getElementById("compass-deg"),best:document.getElementById("best-score"),toast:document.getElementById("toast"),touch:document.getElementById("touch-ui"),fps:document.getElementById("fps")},this.bind(),this.buildCompass(),this.applySettings(),this.showBest()}bind(){const t=(s,a)=>document.getElementById(s)?.addEventListener("click",o=>{o.preventDefault(),this.cb.uiSound?.(),a()});t("btn-start",()=>this.cb.onStart?.()),t("btn-resume",()=>this.cb.onResume?.()),t("btn-restart",()=>this.cb.onRestart?.()),t("btn-again",()=>this.cb.onRestart?.()),t("btn-menu",()=>this.cb.onMenu?.()),t("btn-full",()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}),t("btn-tilt",()=>this.cb.onTiltToggle?.()),t("btn-tilt-pause",()=>this.cb.onTiltToggle?.()),t("btn-sound",()=>this.toggleSound()),t("btn-sound-pause",()=>this.toggleSound()),t("btn-mute",()=>this.toggleSound());const e=document.getElementById("sens"),i=document.getElementById("sens-pause"),n=s=>{this.settings.sens=Number(s),e&&(e.value=s),i&&(i.value=s);const a=document.getElementById("sens-val");a&&(a.textContent=this.settings.sens.toFixed(2)),this.save()};e?.addEventListener("input",s=>n(s.target.value)),i?.addEventListener("input",s=>n(s.target.value))}toggleSound(){this.settings.muted=!this.settings.muted,this.applySettings(),this.save(),this.cb.onMute?.(this.settings.muted)}applySettings(){const t=[document.getElementById("btn-sound"),document.getElementById("btn-sound-pause"),document.getElementById("btn-mute")];for(const o of t)o&&o.setAttribute("aria-pressed",String(!this.settings.muted));const e=document.getElementById("sound-state");e&&(e.textContent=this.settings.muted?"MUTED":"ENABLED");const i=document.getElementById("sound-state-pause");i&&(i.textContent=this.settings.muted?"OFF":"ON");const n=document.getElementById("sens"),s=document.getElementById("sens-pause");n&&(n.value=this.settings.sens),s&&(s.value=this.settings.sens);const a=document.getElementById("sens-val");a&&(a.textContent=this.settings.sens.toFixed(2)),this.setTilt(this.settings.tilt,this.tiltAvailable!==!1)}setTilt(t,e=!0){this.settings.tilt=!!t;for(const a of["btn-tilt","btn-tilt-pause"]){const o=document.getElementById(a);o&&(o.setAttribute("aria-pressed",String(!!t)),o.disabled=!e,o.style.opacity=e?"":"0.5")}const i=document.getElementById("tilt-state");i&&(i.textContent=t?"ENGAGED · GYROSCOPE":e?"OPTIONAL · GYROSCOPE":"UNAVAILABLE");const n=document.getElementById("tilt-state-pause");n&&(n.textContent=t?"ON":"OFF");const s=document.getElementById("btn-tilt-quick");s&&s.classList.toggle("on",!!t),this.save()}showBest(){this.el.best&&(this.el.best.textContent=String(this.best).padStart(6,"0"));const t=document.getElementById("best-score");t&&(t.textContent=String(this.best).padStart(6,"0"))}save(){try{localStorage.setItem(pm,JSON.stringify(this.settings))}catch{}}buildCompass(){const t=this.el.compassStrip;if(t){t.innerHTML="";for(let e=0;e<=1080;e+=45){const i=(e%360+360)%360,n=document.createElement("span");n.className="compass-label cardinal"+(i===0?" major":""),n.textContent=Wb[i/45],n.style.left=`${e*3}px`,t.appendChild(n)}for(let e=0;e<=1080;e+=15){if(e%45===0)continue;const i=document.createElement("span");i.className="compass-label",i.textContent=String((e%360+360)%360).padStart(3,"0"),i.style.left=`${e*3}px`,i.style.opacity="0.42",i.style.fontSize="7px",t.appendChild(i)}}}setLoadingDone(){this.el.loading?.classList.add("done"),setTimeout(()=>this.el.loading?.remove(),700)}showMenu(){this.inGame=!1,this.el.start?.classList.remove("hidden","out"),this.el.hud?.classList.add("hidden"),this.el.pause?.classList.add("hidden"),this.el.death?.classList.add("hidden"),this.clearKillfeed(),document.body.classList.remove("in-game")}showGame(){this.inGame=!0;const t=this.el.start;t&&(t.classList.add("out"),setTimeout(()=>t.classList.add("hidden"),480)),this.el.hud?.classList.remove("hidden"),this.el.pause?.classList.add("hidden"),this.el.death?.classList.add("hidden"),document.body.classList.add("in-game")}showPause(){this.el.pause?.classList.remove("hidden"),this.el.hud?.classList.add("dim")}hidePause(){this.el.pause?.classList.add("hidden"),this.el.hud?.classList.remove("dim")}showDeath({wave:t,score:e,kills:i}){this.el.hud?.classList.add("hidden"),this.el.death?.classList.remove("hidden"),this.el.pause?.classList.add("hidden");const n=document.getElementById("death-wave"),s=document.getElementById("death-score"),a=document.getElementById("death-kills");if(n&&(n.textContent=String(t).padStart(2,"0")),s&&(s.textContent=String(e).padStart(6,"0")),a&&(a.textContent=String(i).padStart(2,"0")),e>this.best){this.best=e;try{localStorage.setItem(yf,String(e))}catch{}this.showBest()}}toggleTouch(t,e=!0,i){this.mobile=t,this.touch?.classList.toggle("hidden",!t),i!==void 0&&(this.mobileDevice=i),this.setTilt(this.settings.tilt,e)}banner(t,e,i){const n=this.el.banner;n&&(this.el.bannerKicker.textContent=t,this.el.bannerTitle.textContent=e,this.el.bannerSub.textContent=i,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"))}kill(t="YOU",e="MK-17",i=!1){const n=this.el.killfeed;if(!n)return;const s=document.createElement("div");for(s.className="kill-item"+(i?" head":""),s.innerHTML=`<b>${t}</b><span>▸</span><span>HOSTILE</span><span class="kf-weapon">${e}${i?" // HEAD":""}</span>`,n.prepend(s);n.children.length>4;)n.lastChild.remove();setTimeout(()=>{s.classList.add("fade"),setTimeout(()=>s.remove(),420)},4200)}clearKillfeed(){this.el.killfeed&&(this.el.killfeed.innerHTML="")}hitmarker(t=!1){const e=this.el.hitmarker;e&&(e.classList.toggle("head",t),e.classList.remove("show"),e.offsetWidth,e.classList.add("show"))}damage(t){const e=document.createElement("div");e.className="dmg-dir",e.style.transform=`rotate(${t}rad)`;const i=document.createElement("div");i.className="dmg-arc",e.appendChild(i),this.el.damageIndicators?.appendChild(e),setTimeout(()=>e.remove(),1200)}toast(t,e=2600){const i=this.el.toast;i&&(i.textContent=t,i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>i.classList.remove("show"),e))}update(t){const e=this.cache,i=Math.max(0,Math.round(t.health)),n=Math.max(0,Math.round(t.armor));if(e.health!==i&&(e.health=i,this.el.healthFill.style.width=`${i}%`,this.el.healthNum.textContent=i,this.el.healthBar?.classList.toggle("low",i<35)),e.armor!==n&&(e.armor=n,this.el.armorFill.style.width=`${Math.min(100,n/60*100)}%`,this.el.armorNum.textContent=n),e.ammo!==t.ammo&&(e.ammo=t.ammo,this.el.ammoMag.textContent=t.ammo,this.el.ammoMag.classList.toggle("low",t.ammo<=5)),e.reserve!==t.reserve&&(e.reserve=t.reserve,this.el.ammoReserve.textContent=t.reserve),(e.reloading!==t.reloading||e.reloadPct!==t.reloadPct)&&(e.reloading=t.reloading,e.reloadPct=t.reloadPct,this.el.reloadBar.classList.toggle("active",t.reloading),this.el.reloadBar.querySelector("span").style.width=`${Math.round(t.reloadPct*100)}%`,this.el.reloadLabel.textContent=t.reloading?"RELOADING":t.ammo===0?"EMPTY":"READY",this.el.reloadLabel.classList.toggle("reloading",t.reloading)),e.wave!==t.wave){e.wave=t.wave,this.el.waveNum.textContent=String(t.wave).padStart(2,"0");const o=document.getElementById("pause-wave");o&&(o.textContent=String(t.wave).padStart(2,"0"))}if(e.hostiles!==t.hostiles){e.hostiles=t.hostiles,this.el.hostileNum.textContent=String(Math.max(0,t.hostiles)).padStart(2,"0");const o=document.getElementById("pause-hostiles");o&&(o.textContent=String(Math.max(0,t.hostiles)).padStart(2,"0"))}if(e.score!==t.score){e.score=t.score,this.el.scoreNum.textContent=String(t.score).padStart(6,"0");const o=document.getElementById("pause-score");o&&(o.textContent=String(t.score).padStart(6,"0"))}e.progress!==t.progress&&(e.progress=t.progress,this.el.waveProgress.style.width=`${Math.round(t.progress*100)}%`),e.status!==t.status&&(e.status=t.status,this.el.statusText.textContent=t.status);const s=(t.yaw*180/Math.PI%360+360)%360;this.el.compassStrip&&(this.el.compassStrip.style.transform=`translateX(${(-s*3).toFixed(1)}px)`),this.el.compassDeg&&(this.el.compassDeg.textContent=String(Math.round(s)%360).padStart(3,"0"));const a=5+(t.spread||0)*16;e.gap!==Math.round(a)&&(e.gap=Math.round(a),this.el.crosshair?.style.setProperty("--gap",`${e.gap}px`)),this.el.crosshair?.classList.toggle("ads",!!t.ads),this.el.damageVignette&&(this.el.damageVignette.style.opacity=String(Math.min(1,(t.damageFlash||0)*.9))),this.el.lowHealth?.classList.toggle("on",i>0&&i<35),this.el.fps.textContent=t.fps?`${t.fps} FPS`:""}updatePauseStats(t){const e=document.getElementById("pause-wave"),i=document.getElementById("pause-score"),n=document.getElementById("pause-hostiles");e&&(e.textContent=String(t.wave).padStart(2,"0")),i&&(i.textContent=String(t.score).padStart(6,"0")),n&&(n.textContent=String(Math.max(0,t.hostiles)).padStart(2,"0"))}}class Yb{constructor(){this.enabled=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0||window.innerWidth<=900,this.input={moveX:0,moveY:0,firing:!1,ads:!1,sprint:!1,jumpQueued:!1,reloadQueued:!1},this.lookDX=0,this.lookDY=0,this.stickPointer=null,this.lookPointer=null,this.tiltOn=!1,this.tiltCalibrated=!1,this.tiltAvailable=typeof window.DeviceOrientationEvent<"u",this.tiltNeutral={beta:0,gamma:0},this.tiltRaw={beta:0,gamma:0},this.tiltSmooth={x:0,y:0},this.onTiltChange=null,this.onToast=null,this.visible=!1,this.root=document.getElementById("touch-ui"),this.zone=document.getElementById("stick-zone"),this.base=document.getElementById("stick-base"),this.knob=document.getElementById("stick-knob"),this.look=document.getElementById("look-zone"),this.fireBtn=document.getElementById("btn-fire-touch"),this.adsBtn=document.getElementById("btn-ads-touch"),this.jumpBtn=document.getElementById("btn-jump-touch"),this.reloadBtn=document.getElementById("btn-reload-touch"),this.tiltBtn=document.getElementById("btn-tilt-quick"),this.tiltHint=document.getElementById("tilt-hint"),this.bindStick(),this.bindLook(),this.bindButton(this.fireBtn,()=>{this.input.firing=!0,this.fireBtn.classList.add("on")},()=>{this.input.firing=!1,this.fireBtn.classList.remove("on")}),this.bindButton(this.adsBtn,()=>{this.input.ads=!this.input.ads,this.adsBtn.classList.toggle("on",this.input.ads)},null),this.bindButton(this.jumpBtn,()=>{this.input.jumpQueued=!0},null),this.bindButton(this.reloadBtn,()=>{this.input.reloadQueued=!0},null),this.tiltBtn?.addEventListener("click",t=>{t.preventDefault(),this.toggleTilt()}),this.enabled||this.root.classList.add("hidden")}bindButton(t,e,i){if(!t)return;t.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),t.setPointerCapture?.(s.pointerId),e()});const n=s=>{s&&s.preventDefault(),i?.()};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("lostpointercapture",()=>i?.()),t.addEventListener("contextmenu",s=>s.preventDefault())}bindStick(){if(!this.zone)return;const t=44,e=(n,s)=>{this.knob.style.transform=`translate(${n}px, ${s}px)`};this.zone.addEventListener("pointerdown",n=>{if(!this.enabled||this.stickPointer!==null)return;n.preventDefault(),this.stickPointer=n.pointerId,this.zone.setPointerCapture?.(n.pointerId);const s=this.zone.getBoundingClientRect(),a=n.clientX-s.left,o=n.clientY-s.top,l=Math.max(10,Math.min(s.width-126,a-58)),c=Math.max(10,Math.min(s.height-126,s.height-o-58));this.base.style.left=`${l}px`,this.base.style.bottom=`${c}px`,this.base.classList.add("active");const h=this.base.getBoundingClientRect();this.stickCenter={x:h.left+h.width/2,y:h.top+h.height/2},e(0,0)}),this.zone.addEventListener("pointermove",n=>{if(n.pointerId!==this.stickPointer)return;n.preventDefault();const s=n.clientX-this.stickCenter.x,a=n.clientY-this.stickCenter.y,o=Math.hypot(s,a),l=o>t?t/o:1,c=s*l,h=a*l;e(c,h);let u=c/t,d=-h/t;const f=Math.hypot(u,d);if(f<.14)u=0,d=0;else{const p=(f-.14)/.86;u=u/f*Math.min(1,p),d=d/f*Math.min(1,p)}this.input.moveX=u,this.input.moveY=d,this.input.sprint=Math.hypot(c,h)>t*.9});const i=n=>{n.pointerId===this.stickPointer&&(this.stickPointer=null,this.input.moveX=0,this.input.moveY=0,this.input.sprint=!1,this.base.classList.remove("active"),this.base.style.left="",this.base.style.bottom="",e(0,0))};this.zone.addEventListener("pointerup",i),this.zone.addEventListener("pointercancel",i),this.zone.addEventListener("lostpointercapture",i)}bindLook(){if(!this.look)return;this.look.addEventListener("pointerdown",e=>{!this.enabled||this.lookPointer!==null||(e.preventDefault(),this.lookPointer=e.pointerId,this.look.setPointerCapture?.(e.pointerId),this.lastLook={x:e.clientX,y:e.clientY})}),this.look.addEventListener("pointermove",e=>{e.pointerId!==this.lookPointer||!this.lastLook||(e.preventDefault(),this.lookDX+=(e.clientX-this.lastLook.x)*1.35,this.lookDY+=(e.clientY-this.lastLook.y)*1.35,this.lastLook={x:e.clientX,y:e.clientY})});const t=e=>{e.pointerId===this.lookPointer&&(this.lookPointer=null,this.lastLook=null)};this.look.addEventListener("pointerup",t),this.look.addEventListener("pointercancel",t),this.look.addEventListener("lostpointercapture",t)}async toggleTilt(){if(this.tiltOn){this.disableTilt();return}await this.enableTilt()}async enableTilt(){try{if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted"){this.onToast?.("MOTION ACCESS DENIED — ENABLE IN SAFARI SETTINGS"),this.onTiltChange?.(!1,!1);return}if(typeof DeviceOrientationEvent>"u"){this.onToast?.("MOTION SENSORS NOT AVAILABLE ON THIS DEVICE"),this.onTiltChange?.(!1,!1);return}this.tiltOn=!0,this.tiltCalibrated=!1,this.gotMotion=!1,this.orientationHandler=t=>{t.gamma===null||t.beta===null||(this.tiltCalibrated||(this.tiltNeutral.gamma=t.gamma,this.tiltNeutral.beta=t.beta,this.tiltCalibrated=!0,this.gotMotion=!0,this.onTiltChange?.(!0,!0),this.onToast?.("TILT AIM ENGAGED — HOLD STEADY TO CALIBRATE")),this.tiltRaw.gamma=t.gamma,this.tiltRaw.beta=t.beta,this.gotMotion=!0)},window.addEventListener("deviceorientation",this.orientationHandler,!0),this.tiltHint?.classList.add("show"),this.tiltHint&&(this.tiltHint.textContent="TILT AIM · CALIBRATING"),this.tiltBtn?.classList.add("on"),setTimeout(()=>{this.tiltOn&&!this.gotMotion?(this.disableTilt(),this.onToast?.("NO GYROSCOPE DATA — USE TOUCH AIM")):this.tiltOn&&this.tiltHint&&(this.tiltHint.textContent="TILT AIM · ON")},1600)}catch(t){console.warn("Tilt permission failed",t),this.disableTilt(),this.onToast?.("MOTION PERMISSION UNAVAILABLE")}}disableTilt(){this.tiltOn=!1,this.tiltCalibrated=!1,this.orientationHandler&&window.removeEventListener("deviceorientation",this.orientationHandler,!0),this.orientationHandler=null,this.tiltHint?.classList.remove("show"),this.tiltBtn?.classList.remove("on"),this.tiltSmooth.x=this.tiltSmooth.y=0,this.onTiltChange?.(!1,!0),this.onToast?.("TILT AIM OFF")}consumeLook(t){let e=this.lookDX,i=this.lookDY;if(this.lookDX=0,this.lookDY=0,this.tiltOn&&this.tiltCalibrated&&this.visible){let s=this.tiltRaw.gamma-this.tiltNeutral.gamma,a=this.tiltRaw.beta-this.tiltNeutral.beta;Math.abs(s)<3&&(s=0),Math.abs(a)<3&&(a=0);const o=Math.max(-1,Math.min(1,s/30)),l=Math.max(-1,Math.min(1,-a/26));this.tiltSmooth.x+=(o-this.tiltSmooth.x)*Math.min(1,t*10),this.tiltSmooth.y+=(l-this.tiltSmooth.y)*Math.min(1,t*10);const c=h=>Math.sign(h)*Math.pow(Math.abs(h),1.35);e+=c(this.tiltSmooth.x)*540*t,i+=c(this.tiltSmooth.y)*420*t}return{dx:e,dy:i}}setVisible(t){this.visible=t&&this.enabled,this.root.classList.toggle("hidden",!this.visible),this.visible||(this.input.firing=!1,this.input.moveX=0,this.input.moveY=0,this.input.sprint=!1,this.fireBtn?.classList.remove("on"))}reset(){this.input.moveX=0,this.input.moveY=0,this.input.firing=!1,this.input.ads=!1,this.input.jumpQueued=!1,this.input.reloadQueued=!1,this.input.sprint=!1,this.lookDX=this.lookDY=0,this.stickPointer=null,this.lookPointer=null,this.fireBtn?.classList.remove("on"),this.adsBtn?.classList.remove("on")}takeJump(){const t=this.input.jumpQueued;return this.input.jumpQueued=!1,t}takeReload(){const t=this.input.reloadQueued;return this.input.reloadQueued=!1,t}}const Mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class mr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Zb=new _a(-1,1,1,-1,0,1);class $b extends jt{constructor(){super(),this.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Lt([0,2,0,0,2,0],2))}}const Jb=new $b;class xu{constructor(t){this._mesh=new xt(Jb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Zb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class mm extends mr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ei?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=or.clone(t.uniforms),this.material=new ei({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new xu(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mf extends mr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Kb extends mr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Qb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mm(Mo),this.copyPass.material.blending=Vn,this.timer=new uu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mf!==void 0&&(a instanceof Mf?i=!0:a instanceof Kb&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jb extends mr{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const t1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class cr extends mr{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(s,a,{type:mi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Ke(s,a,{type:mi,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Ke(s,a,{type:mi,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=t1;this.highPassUniforms=or.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ei({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new st(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=or.clone(Mo.uniforms),this.blendMaterial=new ei({uniforms:this.copyUniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,premultipliedAlpha:!0,blending:vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Oe,this._fsQuad=new xu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new st(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=cr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const n=[],s=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),s.push(c)}return new ei({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ei({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}cr.BlurDirectionX=new st(1,0);cr.BlurDirectionY=new st(0,1);const mo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class e1 extends mr{constructor(){super(),this.isOutputPass=!0,this.uniforms=or.clone(mo.uniforms),this.material=new $l({name:mo.name,uniforms:this.uniforms,vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader}),this._fsQuad=new xu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ce.getTransfer(this._outputColorSpace)===Se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ml?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_l&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const i1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uLow:{value:0},uResolution:{value:new st(1,1)},uVignette:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uDamage, uLow, uVignette;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash(vec2 p){ p = fract(p * vec2(443.897, 441.423)); p += dot(p, p.yx + 19.19); return fract((p.x + p.y) * p.x); }

    void main(){
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float r2 = dot(centered, centered);

      // subtle lens dispersion, stronger at the edges
      vec2 ca = centered * (0.00035 + r2 * 0.0016);
      float cr = texture2D(tDiffuse, uv + ca).r;
      float cg = texture2D(tDiffuse, uv).g;
      float cb = texture2D(tDiffuse, uv - ca).b;
      vec3 col = vec3(cr, cg, cb);

      // filmic contrast + split tone (cool shadows, warm highlights)
      float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(lum), col, 1.08);
      col = (col - 0.5) * 1.045 + 0.5;
      col += vec3(-0.006, 0.004, 0.012) * (1.0 - smoothstep(0.0, 0.45, lum));
      col += vec3(0.014, 0.006, -0.006) * smoothstep(0.55, 1.0, lum);

      // vignette
      float vig = smoothstep(0.92, 0.28, length(centered * vec2(1.05, 1.15))) * uVignette;
      col *= mix(0.62, 1.0, vig);

      // damage + critical health response
      float edge = smoothstep(0.20, 0.76, length(centered * vec2(1.0, 1.15)));
      col = mix(col, vec3(0.34, 0.015, 0.01), edge * uDamage * 0.72);
      float pulse = 0.5 + 0.5 * sin(uTime * 4.2);
      col = mix(col, vec3(0.28, 0.012, 0.008), edge * uLow * (0.20 + pulse * 0.22));

      // fine grain
      float grain = hash(uv * uResolution + fract(uTime) * 91.7) - 0.5;
      col += grain * 0.032;

      // very light scan texture
      col *= 1.0 - 0.012 * step(0.5, fract(uv.y * uResolution.y * 0.5));

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`};function n1(r,t,e,i){const n=r.getDrawingBufferSize(new st),s=new Ke(n.x,n.y,{type:mi,samples:i.samples}),a=new Qb(r,s);a.setPixelRatio(i.pixelRatio),a.setSize(window.innerWidth,window.innerHeight);const o=new jb(t,e),l=i.bloom?new cr(new st(window.innerWidth,window.innerHeight),.52,.62,.82):null,c=new e1,h=new mm(i1);return h.material.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight),a.addPass(o),l&&a.addPass(l),a.addPass(c),a.addPass(h),{composer:a,bloom:l,grade:h,render(u){a.render(u)},setSize(u,d){a.setPixelRatio(i.pixelRatio),a.setSize(u,d),h.material.uniforms.uResolution.value.set(u,d),l&&l.setSize(u*i.pixelRatio,d*i.pixelRatio)},setDamage(u){h.material.uniforms.uDamage.value=u},setLow(u){h.material.uniforms.uLow.value=u},setTime(u){h.material.uniforms.uTime.value=u},setPixelRatio(u){i.pixelRatio=u,r.setPixelRatio(u),a.setPixelRatio(u),a.setSize(window.innerWidth,window.innerHeight)}}}const gh=Ce.clamp,s1=(r,t,e,i)=>Ce.lerp(r,t,1-Math.exp(-11*i)),xh=new C,r1=new C,gr=document.getElementById("scene"),wi=new dm({canvas:gr,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1}),ws=x1(wi);wi.setPixelRatio(ws.pixelRatio);wi.setSize(window.innerWidth,window.innerHeight);wi.shadowMap.enabled=ws.shadows;wi.shadowMap.type=Th;wi.toneMapping=ca;wi.toneMappingExposure=1.18;wi.outputColorSpace=We;const Zn=new Gh,he=new ti(74,window.innerWidth/window.innerHeight,.05,240);Zn.add(he);const gm=Cb(wi),Dn=Pb(Zn,wi,gm,ws),Zt=new Fb(he,Dn),Bi=new Nb(he,Zn),ze=new Db(Zn,he,gm),ni=new Vb,en=new Gb(Zn,Dn,ze,ni),le=new Yb,_e=new qb({onStart:()=>Sh(),onResume:()=>rc(),onRestart:()=>Sh(),onMenu:()=>o1(),onTiltToggle:()=>xm(),onMute:r=>ni.setMuted(r),uiSound:()=>ni.ui()}),Ui=n1(wi,Zn,he,ws),Q={state:"menu",wave:1,waveTotal:0,waveKilled:0,waveSpawned:0,spawnTimer:0,intermission:0,score:0,kills:0,started:!1,fireTimer:0,ammo:30,reserve:180,reloading:!1,reloadT:0,reloadDuration:2.15,shotsFired:0,shotsHit:0,time:0,hadLock:!1};_e.tiltAvailable=le.tiltAvailable;le.onTiltChange=(r,t)=>_e.setTilt(r,t);le.onToast=r=>_e.toast(r);le.onTiltToggle=()=>xm();le.enabled&&_e.toggleTouch(!1,le.tiltAvailable);ni.setMuted(_e.settings.muted);async function xm(){le.onToast=r=>_e.toast(r),await le.toggleTilt(),_e.setTilt(le.tiltOn,le.tiltAvailable),le.tiltOn&&(le.onToast=r=>_e.toast(r))}const fi=new Set,He={firing:!1,ads:!1,lastX:0,lastY:0,hasLast:!1};let _h=0,vh=0,yh=!1,Mh=!1,_m=0;window.addEventListener("keydown",r=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(r.code)&&r.preventDefault(),r.repeat){fi.add(r.code);return}fi.add(r.code),r.code==="Space"&&(yh=!0),r.code==="KeyR"&&(Mh=!0),r.code==="KeyM"&&_e.toggleSound(),r.code==="KeyP"&&Sf(),r.code==="Escape"&&(Q.state==="playing"?document.pointerLockElement?document.exitPointerLock():Sf():Q.state==="paused"&&rc())});window.addEventListener("keyup",r=>fi.delete(r.code));window.addEventListener("blur",()=>{fi.clear(),He.firing=!1,He.ads=!1});gr.addEventListener("contextmenu",r=>r.preventDefault());window.addEventListener("mousedown",r=>{Q.state==="playing"&&(r.target.closest("button, input, .overlay, #touch-ui")||performance.now()<_m||(r.button===0&&(He.firing=!0),r.button===2&&(He.ads=!0,r.preventDefault())))});window.addEventListener("mouseup",r=>{r.button===0&&(He.firing=!1),r.button===2&&(He.ads=!1)});window.addEventListener("mousemove",r=>{Q.state==="playing"&&(document.pointerLockElement===gr?(_h+=r.movementX||0,vh+=r.movementY||0):(He.firing||He.ads||r.buttons&3)&&He.hasLast&&(_h+=r.clientX-He.lastX,vh+=r.clientY-He.lastY),He.lastX=r.clientX,He.lastY=r.clientY,He.hasLast=!0)});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===gr?Q.hadLock=!0:Q.state==="playing"&&Q.hadLock&&sc()});window.addEventListener("resize",()=>{he.aspect=window.innerWidth/window.innerHeight,he.updateProjectionMatrix(),wi.setSize(window.innerWidth,window.innerHeight),Ui.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden&&Q.state==="playing"&&sc()});function a1(){Zt.pos.set(0,0,17.5),Zt.vel.set(0,0,0),Zt.yaw=0,Zt.pitch=-.02,Zt.recoilPitch=0,Zt.recoilYaw=0,Zt.health=Zt.maxHealth,Zt.armor=Zt.maxArmor,Zt.alive=!0,Zt.deathT=0,Zt.eye=1.68,Zt.crouching=!1,Zt.sprinting=!1,Zt.bob=0,Zt.damageFlash=0,Zt.timeSinceDamage=99,he.position.set(0,1.68,17.5),he.rotation.set(0,0,0),he.rotation.order="YXZ",he.fov=74,he.updateProjectionMatrix(),en.clear(),Bi.group.visible=!0,Bi.reset?.(),Q.wave=1,Q.waveTotal=0,Q.waveKilled=0,Q.waveSpawned=0,Q.spawnTimer=.35,Q.intermission=0,Q.score=0,Q.kills=0,Q.started=!0,Q.fireTimer=0,Q.ammo=30,Q.reserve=180,Q.reloading=!1,Q.reloadT=0,Q.shotsFired=0,Q.shotsHit=0,_e.cache={},_e.clearKillfeed(),le.reset(),ze.shake=0}function Sh(){if(ni.init(),Mm(),ni.setMuted(_e.settings.muted),a1(),Q.state="playing",_e.showGame(),_e.toggleTouch(le.enabled,le.tiltAvailable),le.setVisible(!0),vm(1),_e.settings.tilt&&le.enabled&&!le.tiltOn&&le.enableTilt().then(()=>_e.setTilt(le.tiltOn,le.tiltAvailable)),_m=performance.now()+350,!le.enabled)try{const r=gr.requestPointerLock?.({unadjustedMovement:!0});r?.catch&&r.catch(()=>{})}catch{}}function o1(){Q.state="menu",Sm(),en.clear(),Bi.group.visible=!1,le.setVisible(!1),_e.showMenu(),document.pointerLockElement&&document.exitPointerLock(),_e.showBest(),p1(.016),Ui.setTime(Q.time),Ui.render(.016)}function sc(){Q.state==="playing"&&(Q.state="paused",Sm(),He.firing=!1,He.ads=!1,_e.updatePauseStats({wave:Q.wave,score:Q.score,hostiles:Math.max(0,Q.waveTotal-Q.waveKilled)}),_e.showPause(),le.setVisible(!1),document.pointerLockElement&&document.exitPointerLock())}function rc(){if(Q.state==="paused"&&(Q.state="playing",Mm(),_e.hidePause(),le.setVisible(!0),ni.init(),!le.enabled))try{const r=gr.requestPointerLock?.({unadjustedMovement:!0});r?.catch&&r.catch(()=>{})}catch{}}function Sf(){Q.state==="playing"?sc():Q.state==="paused"&&rc()}function l1(){Q.state="dead",He.firing=!1,le.setVisible(!1),Bi.group.visible=!1,_e.showDeath({wave:Q.wave,score:Q.score,kills:Q.kills}),document.pointerLockElement&&document.exitPointerLock(),ni.hurt()}function vm(r){Q.wave=r,Q.waveTotal=Math.min(16,4+r*2),Q.waveKilled=0,Q.waveSpawned=0,Q.spawnTimer=.35,Q.intermission=0;const t=String(r).padStart(2,"0");_e.banner(`OPERATION NIGHTFALL · WAVE ${t}`,`WAVE ${t}`,`${Q.waveTotal} HOSTILES INBOUND`),ni.waveHorn(),r===1&&(en.spawn(new C(-8,0,5),1),en.spawn(new C(8.5,0,3.2),1),Q.waveSpawned+=2,Q.spawnTimer=1.4,ze.smoke(new C(-8,.7,5),null,.9,1),ze.smoke(new C(8.5,.7,3.2),null,.9,1))}function c1(){const r=Dn.spawnPoints;let t=null,e=-1;for(let i=0;i<6;i++){const n=r[Math.floor(Math.random()*r.length)],s=n.distanceTo(Zt.pos),a=s+Math.random()*8;s>13&&a>e&&(t=n,e=a)}t||(t=r[Math.floor(Math.random()*r.length)]),en.spawn(xh.copy(t).add(new C((Math.random()-.5)*2,0,(Math.random()-.5)*2)),Q.wave),Q.waveSpawned++,ze.smoke(new C(t.x,.6,t.z),null,.8,.9)}function h1(){Q.intermission=5.2,Q.score+=250,Zt.health=Math.min(Zt.maxHealth,Zt.health+25),Zt.armor=Math.min(Zt.maxArmor,Zt.armor+20),Q.reserve=Math.min(240,Q.reserve+90),ni.waveClear();const r=String(Q.wave).padStart(2,"0");_e.banner("SECTOR SECURED",`WAVE ${r} CLEARED`,"RESUPPLYING · +250 PTS")}function u1(r){if(Q.intermission>0){Q.intermission-=r,Q.intermission<=0&&vm(Q.wave+1);return}const t=en.aliveCount(),e=Math.min(8,3+Math.ceil(Q.wave*.7));Q.waveSpawned<Q.waveTotal?(Q.spawnTimer-=r,Q.spawnTimer<=0&&t<e&&(c1(),Q.spawnTimer=Math.max(.65,1.7-Q.wave*.06))):t===0&&h1()}const bh=new mu;bh.far=160;function ym(r){const t=gh(Zt.speed/8,0,1);let e=r?.0012:.0085;return e+=t*(r?.004:.022),Zt.onGround||(e+=.02),e+=Math.abs(Zt.recoilPitch)*.08,e}function d1(){if(Q.reloading||Q.ammo<=0||Q.fireTimer>0||!Zt.alive)return;Q.ammo--,Q.fireTimer=.095,Q.shotsFired++;const r=he.fov<62;ni.shot(),Bi.fire(r?.8:1),Zt.shake=Math.min(1,Zt.shake+(r?.12:.2)),Zt.addRecoil(r?.0065:.0105,(Math.random()-.5)*.006);const t=he.getWorldDirection(new C),e=ym(r),i=xh.set(1,0,0).applyQuaternion(he.quaternion),n=r1.set(0,1,0).applyQuaternion(he.quaternion);t.addScaledVector(i,(Math.random()-.5)*e*2).addScaledVector(n,(Math.random()-.5)*e*2).normalize();const s=Bi.muzzleWorld(new C);ze.muzzle(s,t,r?.72:1),ze.casing(Bi.ejectWorld(new C),t),bh.set(he.position,t);const a=bh.intersectObjects(Dn.solids,!1),o=a[0]?.distance??160,l=en.raycast({origin:he.position,direction:t}),c=l?.distance??1/0;if(l&&c<o){const h=l.point,u=l.object.userData.enemy,d=l.object.userData.part,f=d==="head",p=24*(f?3.2:1),x=u?.hit(p,d,h,t);Q.shotsHit++,ze.tracer(s,h,16769200,.018),_e.hitmarker(f),ni.hitmarker(f),x&&(Q.kills++,Q.waveKilled++,Q.score+=f?175:100,_e.kill("YOU","MK-17",f))}else if(a[0]){const h=a[0],u=h.face?h.face.normal.clone().applyMatrix3(new Qt().getNormalMatrix(h.object.matrixWorld)).normalize():new C(0,1,0);ze.impact(h.point,u,h.object.material?.metalness>.5?"metal":"concrete"),ze.tracer(s,h.point,16769200,.014),ni.impact()}else ze.tracer(s,xh.copy(he.position).addScaledVector(t,80),16769200,.012)}function bf(){Q.reloading||Q.ammo>=30||Q.reserve<=0||(Q.reloading=!0,Q.reloadT=0,Bi.setReloading(!0),ni.reload())}function f1(){const r=30-Q.ammo,t=Math.min(r,Q.reserve);Q.ammo+=t,Q.reserve-=t,Q.reloading=!1,Bi.setReloading(!1)}let wh=0,dl=!1,_u=0,go=0,jc=0,So=0,th=0;function p1(r){const t=Q.time,e=.52+Math.sin(t*.035)*.16;he.fov=55,he.updateProjectionMatrix(),he.position.set(Math.sin(e)*27,6.2+Math.sin(t*.21)*.25,Math.cos(e)*27),he.lookAt(.5,2.6,-5.5),Dn.update(r,he,t),ze.update(r),Bi.group.visible=!1}function m1(r){const t=He.ads||le.input.ads,e=_e.settings.sens*(t?.68:1)*(le.enabled?1.12:1),i=le.consumeLook(r),n=_h+i.dx,s=vh+i.dy;(n||s)&&Zt.look(n*.0022*e,s*.0022*e);const a=(fi.has("KeyW")||fi.has("ArrowUp")?1:0)-(fi.has("KeyS")||fi.has("ArrowDown")?1:0);let l=(fi.has("KeyD")||fi.has("ArrowRight")?1:0)-(fi.has("KeyA")||fi.has("ArrowLeft")?1:0)+le.input.moveX,c=a+le.input.moveY;const h=Math.hypot(l,c);h>1&&(l/=h,c/=h);const u=yh||le.takeJump(),d=Mh||le.takeReload();yh=!1,Mh=!1;const f={moveX:l,moveY:c,jump:u,sprint:fi.has("ShiftLeft")||fi.has("ShiftRight")||le.input.sprint,crouch:fi.has("ControlLeft")||fi.has("ControlRight")};Zt.update(r,f,{ads:t});const p=t?52:Zt.sprinting?80:74;he.fov=s1(he.fov,p,11,r),he.updateProjectionMatrix(),Bi.update(r,{moving:gh(Zt.speed/6,0,1.3),sprinting:Zt.sprinting,ads:t,lookDX:n,lookDY:s,grounded:Zt.onGround,time:Q.time}),Q.fireTimer=Math.max(0,Q.fireTimer-r),Q.reloading&&(Q.reloadT+=r,Q.reloadT>=Q.reloadDuration&&f1()),d&&bf(),(He.firing||le.input.firing)&&(Q.ammo<=0&&Q.reserve>0&&!Q.reloading?bf():d1()),Q.ammo<=0&&Q.reserve<=0&&!Q.reloading&&(He.firing||le.input.firing)&&Q.fireTimer<=0&&(ni.empty(),Q.fireTimer=.25),en.update(r,Zt,{onPlayerHit:(v,M,y)=>{if(Zt.alive){if(Zt.damage(v,M)){l1();return}_e.damage(Zt.yaw-M),ni.hurt(),ze.shake=Math.min(1,ze.shake+.16),Math.random()<.35&&ni.whiz(),y&&Math.random()<.4&&ze.impact(new C(Zt.pos.x,.4,Zt.pos.z).add(new C(Math.random()*2-1,0,Math.random()*2-1)),new C(0,1,0),"concrete")}}}),u1(r),Dn.update(r,he,Q.time),ze.update(r);const x=en.aliveCount(),m=Q.waveTotal?Q.waveKilled/Q.waveTotal:0;let g="LINK ACTIVE";Q.intermission>0?g="SECTOR SECURED":x>0?g="CONTACTS ACTIVE":Q.waveSpawned<Q.waveTotal&&(g="CONTACTS INBOUND"),_e.update({health:Zt.health,armor:Zt.armor,ammo:Q.ammo,reserve:Q.reserve,reloading:Q.reloading,reloadPct:Q.reloading?gh(Q.reloadT/Q.reloadDuration,0,1):0,wave:Q.wave,hostiles:Math.max(0,Q.waveTotal-Q.waveKilled),score:Q.score,progress:m,status:g,yaw:Zt.yaw+Zt.recoilYaw,spread:ym(t)*(t?260:120),ads:t,damageFlash:Zt.damageFlash,fps:So})}function g1(r){Zt.update(r,{moveX:0,moveY:0},{ads:!1}),en.update(r,Zt,{onPlayerHit:()=>{}}),Dn.update(r,he,Q.time),ze.update(r)}function Mm(){dl||(dl=!0,wh=performance.now(),_u=requestAnimationFrame(bm))}function Sm(){dl=!1,cancelAnimationFrame(_u)}function bm(r=performance.now()){if(!dl)return;_u=requestAnimationFrame(bm);const t=Math.min(.25,Math.max(1e-4,(r-wh)/1e3));wh=r;const e=Math.min(.05,t);if(Q.time+=e,Q.state==="playing"?m1(e):Q.state==="dead"?g1(e):Q.state,Ui.setDamage(Zt.damageFlash),Ui.setLow(Zt.alive&&Zt.health<35?1:0),Ui.setTime(Q.time),ze.shake>.001&&Q.state==="playing"&&(he.position.x+=(Math.random()-.5)*ze.shake*.04,he.position.y+=(Math.random()-.5)*ze.shake*.04),Ui.render(e),jc++,go+=t,go>=.5&&(So=Math.round(jc/go),jc=0,go=0,Q.state==="playing"&&(th+=.5,th>5&&So<30&&ws.pixelRatio>.55))){th=0;const i=Math.max(.55,ws.pixelRatio*.82);Ui.setPixelRatio(i),wi.setSize(window.innerWidth,window.innerHeight),Ui.setSize(window.innerWidth,window.innerHeight),So<22&&Ui.bloom&&(Ui.bloom.enabled=!1)}}function x1(r){let t="";try{const s=r.getContext(),a=s.getExtension("WEBGL_debug_renderer_info");a&&(t=s.getParameter(a.UNMASKED_RENDERER_WEBGL)||"")}catch{}const e=/swiftshader|llvmpipe|software|basic render/i.test(t),i=Math.min(window.devicePixelRatio||1,2),n=navigator.hardwareConcurrency||4;return e?{name:t,software:e,pixelRatio:Math.min(.64,i*.64),shadows:!1,shadowSize:512,bloom:!0,samples:0,rainCount:760,moteCount:100}:i>1.6||n<=4?{name:t,software:e,pixelRatio:Math.min(1.35,i),shadows:!0,shadowSize:1024,bloom:!0,samples:2,rainCount:1100,moteCount:150}:{name:t,software:e,pixelRatio:Math.min(1.7,i),shadows:!0,shadowSize:2048,bloom:!0,samples:4,rainCount:1900,moteCount:260}}Bi.group.visible=!1;he.fov=55;he.updateProjectionMatrix();he.position.set(Math.sin(.52)*27,6.2,Math.cos(.52)*27);he.lookAt(.5,2.6,-5.5);Zn.updateMatrixWorld(!0);try{wi.compile(Zn,he)}catch(r){console.warn("Shader warmup skipped",r)}Dn.update(.016,he,0);Ui.render(.016);_e.setTilt(!1,le.tiltAvailable);_e.setLoadingDone();_e.showMenu();window.__blacksite={game:Q,player:Zt,enemies:en,world:Dn,camera:he,renderer:wi,quality:ws,ui:_e,mobile:le,weapon:Bi,composer:Ui,effects:ze,THREE:vb,start:Sh,pause:sc,resume:rc};
