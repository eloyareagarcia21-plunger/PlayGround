(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Co="187",Qh=0,Sl=1,jh=2,Sr=1,Xc=2,ds=3,pi=0,Be=1,Ee=2,fi=0,di=1,ge=2,yl=3,bl=4,tu=5,Oi=100,eu=101,nu=102,iu=103,su=104,ru=200,au=201,ou=202,lu=203,qc=204,Yc=205,cu=206,hu=207,uu=208,fu=209,du=210,pu=211,mu=212,gu=213,_u=214,Ua=0,Fa=1,Oa=2,ys=3,Ba=4,za=5,ka=6,Ga=7,Zc=0,vu=1,xu=2,zn=0,Po=1,Lo=2,Do=3,Vr=4,Io=5,No=6,Uo=7,$c=300,Gi=301,bs=302,Kr=303,Jr=304,Pr=1e3,Bn=1001,Ha=1002,Oe=1003,Mu=1004,Fs=1005,rn=1006,Qr=1007,Kn=1008,hn=1009,Kc=1010,Jc=1011,ws=1012,Fo=1013,An=1014,xn=1015,je=1016,Oo=1017,Bo=1018,Hi=1020,Qc=35902,jc=35899,th=1021,eh=1022,Tn=1023,ti=1026,Jn=1027,zo=1028,ko=1029,mi=1030,Go=1031,Ho=1033,yr=33776,br=33777,wr=33778,Er=33779,Va=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Za=37492,$a=37496,Ka=37488,Ja=37489,Lr=37490,Qa=37491,ja=37808,to=37809,eo=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,_o=36283,vo=36284,Dr=36285,xo=36286,Su=3200,Mo=0,yu=1,On="",Je="srgb",Ir="srgb-linear",Nr="linear",me="srgb",jr=7680,bu=519,wu=512,Eu=513,Tu=514,nh=515,Au=516,Ru=517,ih=518,sh=519,rh=35044,wl="300 es",Mn=2e3,Es=2001;function Cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){const i=Ur("canvas");return i.style.display="block",i}const El={};function Fr(...i){const t="THREE."+i.shift();console.log(t,...i)}function ah(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=ah(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=ah(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Tr(...i){const t=i.join(" ");t in El||(El[t]=!0,Xt(...i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Du={[Ua]:Ua,[Oa]:ka,[Ba]:Ba,[ys]:za,[Fa]:Fa,[ka]:Oa,[Ga]:Ga,[za]:ys};class _i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tl=1234567;const gs=Math.PI/180,Ts=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function Vo(i,t){return(i%t+t)%t}function Iu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nu(i,t,e){return i!==t?(e-i)/(t-i):0}function _s(i,t,e){return(1-e)*i+e*t}function Uu(i,t,e,n){return _s(i,t,1-Math.exp(-e*n))}function Fu(i,t=1){return t-Math.abs(Vo(i,t*2)-t)}function Ou(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ku(i,t){return i+Math.random()*(t-i)}function Gu(i){return i*(.5-Math.random())}function Hu(i){i!==void 0&&(Tl=i);let t=Tl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vu(i){return i*gs}function Wu(i){return i*Ts}function Xu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*h,o*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wr(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wo(i,t){if(t.constructor===Float32Array)return i;const e=Wr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Xo(i,t){if(t.constructor===Float32Array)return i;const e=Wr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const nn={DEG2RAD:gs,RAD2DEG:Ts,generateUUID:Gn,clamp:ne,euclideanModulo:Vo,mapLinear:Iu,inverseLerp:Nu,lerp:_s,damp:Uu,pingpong:Fu,smoothstep:Ou,smootherstep:Bu,randInt:zu,randFloat:ku,randFloatSpread:Gu,seededRandom:Hu,degToRad:Vu,radToDeg:Wu,isPowerOfTwo:Xu,ceilPowerOfTwo:qu,floorPowerOfTwo:oh,setQuaternionFromProperEuler:Yu,normalize:Xo,denormalize:Wo},ll=class ll{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ll.prototype.isVector2=!0;let at=ll;class $i{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(u!==v||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*v;g<0&&(f=-f,d=-d,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const S=Math.acos(g),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+f*o,c=c*p+d*o,h=h*p+m*o,u=u*p+v*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+m*o,u=u*p+v*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cl=class cl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cl.prototype.isVector3=!0;let C=cl;const ta=new C,Al=new $i,hl=class hl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],v=s[0],g=s[3],p=s[6],S=s[1],w=s[4],x=s[7],E=s[2],T=s[5],_=s[8];return r[0]=a*v+o*S+l*E,r[3]=a*g+o*w+l*T,r[6]=a*p+o*x+l*_,r[1]=c*v+h*S+u*E,r[4]=c*g+h*w+u*T,r[7]=c*p+h*x+u*_,r[2]=f*v+d*S+m*E,r[5]=f*g+d*w+m*T,r[8]=f*p+d*x+m*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ea.makeScale(t,e)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ea.makeRotation(-t)),this}translate(t,e){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hl.prototype.isMatrix3=!0;let $t=hl;const ea=new $t,Rl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zu(){const i={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ir]:{primaries:t,whitePoint:n,transfer:Nr,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),i}const ae=Zu();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class $u{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xi===void 0&&(xi=Ur("canvas")),xi.width=t.width,xi.height=t.height;const s=xi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ku=0;class qo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(na(s[a].image)):r.push(na(s[a]))}else r=na(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$u.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let Ju=0;const ia=new C;class Ye extends _i{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Bn,s=Bn,r=rn,a=Kn,o=Tn,l=hn,c=Ye.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Gn(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=$c;Ye.DEFAULT_ANISOTROPY=1;const ul=class ul{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,x=(d+1)/2,E=(p+1)/2,T=(h+f)/4,_=(u+v)/4,y=(m+g)/4;return w>x&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=_/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=_/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ul.prototype.isVector4=!0;let ye=ul;class Qu extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ye({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new qo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends Qu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lh extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ju extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Hr=class Hr{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,m,v,g)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,m=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,v=c*u;e[0]=f+v*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,m=o*h,v=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Vn.crossVectors(n,on),Vn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Vn.crossVectors(n,on)),Vn.normalize(),Os.crossVectors(on,Vn),s[0]=Vn.x,s[4]=Os.x,s[8]=on.x,s[1]=Vn.y,s[5]=Os.y,s[9]=on.y,s[2]=Vn.z,s[6]=Os.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],S=n[3],w=n[7],x=n[11],E=n[15],T=s[0],_=s[4],y=s[8],N=s[12],P=s[1],L=s[5],F=s[9],k=s[13],I=s[2],H=s[6],K=s[10],z=s[14],rt=s[3],$=s[7],et=s[11],Q=s[15];return r[0]=a*T+o*P+l*I+c*rt,r[4]=a*_+o*L+l*H+c*$,r[8]=a*y+o*F+l*K+c*et,r[12]=a*N+o*k+l*z+c*Q,r[1]=h*T+u*P+f*I+d*rt,r[5]=h*_+u*L+f*H+d*$,r[9]=h*y+u*F+f*K+d*et,r[13]=h*N+u*k+f*z+d*Q,r[2]=m*T+v*P+g*I+p*rt,r[6]=m*_+v*L+g*H+p*$,r[10]=m*y+v*F+g*K+p*et,r[14]=m*N+v*k+g*z+p*Q,r[3]=S*T+w*P+x*I+E*rt,r[7]=S*_+w*L+x*H+E*$,r[11]=S*y+w*F+x*K+E*et,r[15]=S*N+w*k+x*z+E*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15],S=l*d-c*f,w=o*d-c*u,x=o*f-l*u,E=a*d-c*h,T=a*f-l*h,_=a*u-o*h;return e*(v*S-g*w+p*x)-n*(m*S-g*E+p*T)+s*(m*w-v*E+p*_)-r*(m*x-v*T+g*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],S=e*o-n*a,w=e*l-s*a,x=e*c-r*a,E=n*l-s*o,T=n*c-r*o,_=s*c-r*l,y=h*v-u*m,N=h*g-f*m,P=h*p-d*m,L=u*g-f*v,F=u*p-d*v,k=f*p-d*g,I=S*k-w*F+x*L+E*P-T*N+_*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return t[0]=(o*k-l*F+c*L)*H,t[1]=(s*F-n*k-r*L)*H,t[2]=(v*_-g*T+p*E)*H,t[3]=(f*T-u*_-d*E)*H,t[4]=(l*P-a*k-c*N)*H,t[5]=(e*k-s*P+r*N)*H,t[6]=(g*x-m*_-p*w)*H,t[7]=(h*_-f*x+d*w)*H,t[8]=(a*F-o*P+c*y)*H,t[9]=(n*P-e*F-r*y)*H,t[10]=(m*T-v*x+p*S)*H,t[11]=(u*x-h*T-d*S)*H,t[12]=(o*N-a*L-l*y)*H,t[13]=(e*L-n*N+s*y)*H,t[14]=(v*w-m*E-g*S)*H,t[15]=(h*E-u*w+f*S)*H,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,v=a*h,g=a*u,p=o*u,S=l*c,w=l*h,x=l*u,E=n.x,T=n.y,_=n.z;return s[0]=(1-(v+p))*E,s[1]=(d+x)*E,s[2]=(m-w)*E,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(f+p))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(m+w)*_,s[9]=(g-S)*_,s[10]=(1-(f+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),l=Mi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);const c=1/a,h=1/o,u=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Mn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===Mn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Es)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===Mn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Es)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Hr.prototype.isMatrix4=!0;let de=Hr;const Mi=new C,mn=new de,tf=new C(0,0,0),ef=new C(1,1,1),Vn=new C,Os=new C,on=new C,Pl=new de,Ll=new $i;class ei{constructor(t=0,e=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nf=0;const Dl=new C,Si=new $i,Pn=new de,Bs=new C,es=new C,sf=new C,rf=new $i,Il=new C(1,0,0),Nl=new C(0,1,0),Ul=new C(0,0,1),Fl={type:"added"},af={type:"removed"},yi={type:"childadded",child:null},sa={type:"childremoved",child:null};class Te extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new C,e=new ei,n=new $i,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new $t}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Nl,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Nl,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(es,Bs,this.up):Pn.lookAt(Bs,es,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Pn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),yi.child=t,this.dispatchEvent(yi),yi.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Te.DEFAULT_UP=new C(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Me extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const of={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(of)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Vo(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ae.workingToColorSpace(Ve.copy(this),t),Math.round(ne(Ve.r*255,0,255))*65536+Math.round(ne(Ve.g*255,0,255))*256+Math.round(ne(Ve.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Je){ae.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(zs);const n=_s(Wn.h,zs.h,e),s=_s(Wn.s,zs.s,e),r=_s(Wn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Gt;Gt.NAMES=ch;class Zo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Or extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gn=new C,Ln=new C,oa=new C,Dn=new C,bi=new C,wi=new C,Ol=new C,la=new C,ca=new C,ha=new C,ua=new ye,fa=new ye,da=new ye;class dn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Ln.subVectors(n,e),oa.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(Ln),l=gn.dot(oa),c=Ln.dot(Ln),h=Ln.dot(oa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ua.setScalar(0),fa.setScalar(0),da.setScalar(0),ua.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,n),da.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ua,r.x),a.addScaledVector(fa,r.y),a.addScaledVector(da,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Ln.subVectors(t,e),gn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),gn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;bi.subVectors(s,n),wi.subVectors(r,n),la.subVectors(t,n);const l=bi.dot(la),c=wi.dot(la);if(l<=0&&c<=0)return e.copy(n);ca.subVectors(t,s);const h=bi.dot(ca),u=wi.dot(ca);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(bi,a);ha.subVectors(t,r);const d=bi.dot(ha),m=wi.dot(ha);if(m>=0&&d<=m)return e.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(wi,o);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Ol.subVectors(r,s),o=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Ol,o);const p=1/(g+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(bi,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ni{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Gs.subVectors(this.max,ns),Ei.subVectors(t.a,ns),Ti.subVectors(t.b,ns),Ai.subVectors(t.c,ns),Xn.subVectors(Ti,Ei),qn.subVectors(Ai,Ti),li.subVectors(Ei,Ai);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-li.z,li.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,li.z,0,-li.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-li.y,li.x,0];return!pa(e,Ei,Ti,Ai,Gs)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Ei,Ti,Ai,Gs))?!1:(Hs.crossVectors(Xn,qn),e=[Hs.x,Hs.y,Hs.z],pa(e,Ei,Ti,Ai,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const In=[new C,new C,new C,new C,new C,new C,new C,new C],_n=new C,ks=new ni,Ei=new C,Ti=new C,Ai=new C,Xn=new C,qn=new C,li=new C,ns=new C,Gs=new C,Hs=new C,ci=new C;function pa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ci.fromArray(i,r);const o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ce=new C,Vs=new at;let lf=0;class We extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=xn,this.version=0,this._normalizationScale=t!==void 0?Wr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wo(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Xo(t,this.array)}}class hh extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uh extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}const cf=new ni,is=new C,ma=new C;class vi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(ma)),this.expandByPoint(is.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let hf=0;const un=new de,ga=new Te,Ri=new C,ln=new ni,ss=new ni,Ie=new C;class we extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?uh:hh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(ln.min,ss.min),ln.expandByPoint(Ie),Ie.addVectors(ln.max,ss.max),ln.expandByPoint(Ie)):(ln.expandByPoint(ss.min),ln.expandByPoint(ss.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(t,c),Ie.add(Ri)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new C,l[N]=new C;const h=new C,u=new C,f=new C,d=new at,m=new at,v=new at,g=new C,p=new C;function S(N,P,L){c[N]=c[P]=c[L]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,L),d.fromBufferAttribute(r,N),m.fromBufferAttribute(r,P),v.fromBufferAttribute(r,L),u.sub(h),f.sub(h),m.sub(d),v.sub(d);const F=1/(m.x*v.y-v.x*m.y);isFinite(F)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(F),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(F),o[N].add(g),o[P].add(g),o[L].add(g),l[N].add(p),l[P].add(p),l[L].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,P=w.length;N<P;++N){const L=w[N],F=L.start,k=L.count;for(let I=F,H=F+k;I<H;I+=3)S(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new C,E=new C,T=new C,_=new C;function y(N){T.fromBufferAttribute(s,N),_.copy(T);const P=o[N];x.copy(P),x.sub(T.multiplyScalar(T.dot(P))).normalize(),E.crossVectors(_,P);const F=E.dot(l[N])<0?-1:1;a.setXYZW(N,x.x,x.y,x.z,F)}for(let N=0,P=n.count;N<P;++N)c[N]&&y(N);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new We(f,h,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Bl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Bl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Bl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Gn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const $e=new C;class Br{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Wr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Br(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wo(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Xo(t,this.data.array)}}const _a=new C,ff=new C,df=new $t;class $n{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_a.subVectors(n,e).cross(ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(_a),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||df.getNormalMatrix(t),s=this.coplanarPoint(_a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let pf=0;class ii extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=di,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qe extends ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ci;const rs=new C,Pi=new C,Li=new C,Di=new at,as=new at,fh=new de,Ws=new C,os=new C,Xs=new C,zl=new at,va=new at,kl=new at;class sn extends Te{constructor(t=new Qe){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uf(e,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new Br(n,3,0,!1)),Ci.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Ci,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),fh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;qs(Ws.set(-.5,-.5,0),Li,a,Pi,s,r),qs(os.set(.5,-.5,0),Li,a,Pi,s,r),qs(Xs.set(.5,.5,0),Li,a,Pi,s,r),zl.set(0,0),va.set(1,0),kl.set(1,1);let o=t.ray.intersectTriangle(Ws,os,Xs,!1,rs);if(o===null&&(qs(os.set(-.5,.5,0),Li,a,Pi,s,r),va.set(0,1),o=t.ray.intersectTriangle(Ws,Xs,os,!1,rs),o===null))return;const l=t.ray.origin.distanceTo(rs);l<t.near||l>t.far||e.push({distance:l,point:rs.clone(),uv:dn.getInterpolation(rs,Ws,os,Xs,zl,va,kl,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function qs(i,t,e,n,s,r){Di.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(as.x=r*Di.x-s*Di.y,as.y=s*Di.x+r*Di.y):as.copy(Di),i.copy(t),i.x+=as.x,i.y+=as.y,i.applyMatrix4(fh)}const Nn=new C,xa=new C,Ys=new C,Zs=new C;class Xr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xa.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Zs.copy(this.origin).sub(xa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ys),o=Zs.dot(this.direction),l=-Zs.dot(Ys),c=Zs.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xa).addScaledVector(Ys,f),d}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,m=e.x-a.x,v=e.y-a.y,g=e.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,x=Math.abs(l),E=Math.abs(c),T=Math.abs(h);let _,y,N,P,L,F,k,I,H,K,z,rt;if(x>=E&&x>=T?(N=l,F=u,H=m,rt=p,l>=0?(_=c,y=h,P=f,L=d,k=v,I=g,K=S,z=w):(_=h,y=c,P=d,L=f,k=g,I=v,K=w,z=S)):E>=T?(N=c,F=f,H=v,rt=S,c>=0?(_=h,y=l,P=d,L=u,k=g,I=m,K=w,z=p):(_=l,y=h,P=u,L=d,k=m,I=g,K=p,z=w)):(N=h,F=d,H=g,rt=w,h>=0?(_=l,y=c,P=u,L=f,k=m,I=v,K=p,z=S):(_=c,y=l,P=f,L=u,k=v,I=m,K=S,z=p)),N===0)return null;const $=_/N,et=y/N,Q=1/N,Tt=P-$*F,Lt=L-et*F,J=k-$*H,gt=I-et*H,mt=K-$*rt,Bt=z-et*rt,yt=mt*gt-Bt*J,zt=Tt*Bt-Lt*mt,pe=J*Lt-gt*Tt;if(s){if(yt<0||zt<0||pe<0)return null}else if((yt<0||zt<0||pe<0)&&(yt>0||zt>0||pe>0))return null;const Vt=yt+zt+pe;if(Vt===0)return null;const Kt=Q*(yt*F+zt*H+pe*rt);return(Vt>0?Kt<0:Kt>0)?null:this.at(Kt/Vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gl=new de,hi=new Xr,$s=new vi,Hl=new C,Ks=new C,Js=new C,Qs=new C,Ma=new C,js=new C,Vl=new C,tr=new C;class At extends Te{constructor(t=new we,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ma.fromBufferAttribute(u,t),a?js.addScaledVector(Ma,h):js.addScaledVector(Ma.sub(e),h))}e.add(js)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!($s.containsPoint(hi.origin)===!1&&(hi.intersectSphere($s,Hl)===null||hi.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),hi.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,E=w;x<E;x+=3){const T=o.getX(x),_=o.getX(x+1),y=o.getX(x+2);s=er(this,p,t,n,c,h,u,T,_,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const S=o.getX(g),w=o.getX(g+1),x=o.getX(g+2);s=er(this,a,t,n,c,h,u,S,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,E=w;x<E;x+=3){const T=x,_=x+1,y=x+2;s=er(this,p,t,n,c,h,u,T,_,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const S=g,w=g+1,x=g+2;s=er(this,a,t,n,c,h,u,S,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function mf(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===pi,o),l===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:i}}function er(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ks),i.getVertexPosition(l,Js),i.getVertexPosition(c,Qs);const h=mf(i,t,e,n,Ks,Js,Qs,Vl);if(h){const u=new C;dn.getBarycoord(Vl,Ks,Js,Qs,u),s&&(h.uv=dn.getInterpolatedAttribute(s,o,l,c,u,new at)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};dn.getNormal(Ks,Js,Qs,f.normal),h.face=f,h.barycoord=u}return h}class dh extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Oe,h=Oe,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ii=new de,Xl=new de,nr=[],ql=new ni,gf=new de,ls=new At,cs=new vi;class _f extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),ql.copy(t.boundingBox).applyMatrix4(Ii),this.boundingBox.union(ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),cs.copy(t.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),t.ray.intersectsSphere(cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),Xl.multiplyMatrices(n,Ii),ls.matrixWorld=Xl,ls.raycast(t,nr);for(let a=0,o=nr.length;a<o;a++){const l=nr[a];l.instanceId=r,l.object=this,e.push(l)}nr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dh(new Float32Array(s*this.count),s,this.count,zo,xn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ui=new vi,vf=new at(.5,.5),ir=new C;class As{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],S=r[12],w=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-a,d-h,p-m,E-S).normalize(),s[1].setComponents(c+a,d+h,p+m,E+S).normalize(),s[2].setComponents(c+o,d+u,p+v,E+w).normalize(),s[3].setComponents(c-o,d-u,p-v,E-w).normalize(),n)s[4].setComponents(l,f,g,x).normalize(),s[5].setComponents(c-l,d-f,p-g,E-x).normalize();else if(s[4].setComponents(c-l,d-f,p-g,E-x).normalize(),e===Mn)s[5].setComponents(c+l,d+f,p+g,E+x).normalize();else if(e===Es)s[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);const e=vf.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ir.x=s.normal.x>0?t.max.x:t.min.x,ir.y=s.normal.y>0?t.max.y:t.min.y,ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Yl=new de;class $o{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Yl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new As),n[s].setFromProjectionMatrix(Yl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new As),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new $o().copy(this)}}class Ko extends ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zr=new C,kr=new C,Zl=new de,hs=new Xr,sr=new vi,Sa=new C,$l=new C;class ph extends Te{constructor(t=new we,e=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zr.fromBufferAttribute(e,s-1),kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zr.distanceTo(kr);t.setAttribute("lineDistance",new ce(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;Zl.copy(s).invert(),hs.copy(t.ray).applyMatrix4(Zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){const p=h.getX(v),S=h.getX(v+1),w=rr(this,t,hs,l,p,S,v);w&&e.push(w)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(d),p=rr(this,t,hs,l,v,g,m-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){const p=rr(this,t,hs,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=rr(this,t,hs,l,m-1,d,m-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(zr.fromBufferAttribute(o,s),kr.fromBufferAttribute(o,r),e.distanceSqToSegment(zr,kr,Sa,$l)>n)return;Sa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sa);if(!(c<t.near||c>t.far))return{distance:c,point:$l.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Kl=new C,Jl=new C;class xf extends ph{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Kl.fromBufferAttribute(e,s),Jl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kl.distanceTo(Jl);t.setAttribute("lineDistance",new ce(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jo extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ql=new de,So=new Xr,ar=new vi,or=new C;class yo extends Te{constructor(t=new we,e=new Jo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Ql.copy(s).invert(),So.copy(t.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,v=d;m<v;m++){const g=c.getX(m);or.fromBufferAttribute(u,g),jl(or,g,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,v=d;m<v;m++)or.fromBufferAttribute(u,m),jl(or,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jl(i,t,e,n,s,r,a){const o=So.distanceSqToPoint(i);if(o<e){const l=new C;So.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class mh extends Ye{constructor(t=[],e=Gi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gh extends Ye{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vi extends Ye{constructor(t,e,n=An,s,r,a,o=Oe,l=Oe,c,h=ti,u=1){if(h!==ti&&h!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class _h extends Vi{constructor(t,e=An,n=Gi,s,r,a=Oe,o=Oe,l,c=ti){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vh extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ne extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function m(v,g,p,S,w,x,E,T,_,y,N){const P=x/_,L=E/y,F=x/2,k=E/2,I=T/2,H=_+1,K=y+1;let z=0,rt=0;const $=new C;for(let et=0;et<K;et++){const Q=et*L-k;for(let Tt=0;Tt<H;Tt++){const Lt=Tt*P-F;$[v]=Lt*S,$[g]=Q*w,$[p]=I,c.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(Tt/_),u.push(1-et/y),z+=1}}for(let et=0;et<y;et++)for(let Q=0;Q<_;Q++){const Tt=f+Q+H*et,Lt=f+Q+H*(et+1),J=f+(Q+1)+H*(et+1),gt=f+(Q+1)+H*et;l.push(Tt,Lt,gt),l.push(Lt,J,gt),rt+=6}o.addGroup(d,rt,N),d+=rt,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Fn extends we{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,m=n*2+r,v=s+1,g=new C,p=new C;for(let S=0;S<=m;S++){let w=0,x=0,E=0,T=0;if(S<=n){const N=S/n,P=N*Math.PI/2;x=-h-t*Math.cos(P),E=t*Math.sin(P),T=-t*Math.cos(P),w=N*u}else if(S<=n+r){const N=(S-n)/r;x=-h+N*e,E=t,T=0,w=u+N*f}else{const N=(S-n-r)/n,P=N*Math.PI/2;x=h+t*Math.sin(P),E=t*Math.cos(P),T=t*Math.sin(P),w=u+f+N*u}const _=Math.max(0,Math.min(1,w/d));let y=0;S===0?y=.5/s:S===m&&(y=-.5/s);for(let N=0;N<=s;N++){const P=N/s,L=P*Math.PI*2,F=Math.sin(L),k=Math.cos(L);p.x=-E*k,p.y=x,p.z=E*F,o.push(p.x,p.y,p.z),g.set(-E*k,T,E*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(P+y,_)}if(S>0){const N=(S-1)*v;for(let P=0;P<s;P++){const L=N+P,F=N+P+1,k=S*v+P,I=S*v+P+1;a.push(L,F,k),a.push(F,I,k)}}}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Wi extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const v=[],g=n/2;let p=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(d,2));function S(){const x=new C,E=new C;let T=0;const _=(e-t)/n;for(let y=0;y<=r;y++){const N=[],P=y/r,L=P*(e-t)+t;for(let F=0;F<=s;F++){const k=F/s,I=k*l+o,H=Math.sin(I),K=Math.cos(I);E.x=L*H,E.y=-P*n+g,E.z=L*K,u.push(E.x,E.y,E.z),x.set(H,_,K).normalize(),f.push(x.x,x.y,x.z),d.push(k,1-P),N.push(m++)}v.push(N)}for(let y=0;y<s;y++)for(let N=0;N<r;N++){const P=v[N][y],L=v[N+1][y],F=v[N+1][y+1],k=v[N][y+1];(t>0||N!==0)&&(h.push(P,L,k),T+=3),(e>0||N!==r-1)&&(h.push(L,F,k),T+=3)}c.addGroup(p,T,0),p+=T}function w(x){const E=m,T=new at,_=new C;let y=0;const N=x===!0?t:e,P=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*P,0),f.push(0,P,0),d.push(.5,.5),m++;const L=m;for(let F=0;F<=s;F++){const I=F/s*l+o,H=Math.cos(I),K=Math.sin(I);_.x=N*K,_.y=g*P,_.z=N*H,u.push(_.x,_.y,_.z),f.push(0,P,0),T.x=H*.5+.5,T.y=K*.5*P+.5,d.push(T.x,T.y),m++}for(let F=0;F<s;F++){const k=E+F,I=L+F;x===!0?h.push(I,I+1,k):h.push(I+1,I,k),y+=3}c.addGroup(p,y,x===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qo extends Xe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,s=[],r=[],a=[],o=new C,l=new de;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class jo extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mf extends jo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const tc=new C,ec=new C,ya=new tl,ba=new tl,wa=new tl;class xh extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ec.subVectors(s[0],s[1]).add(s[0]),c=ec);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(tc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),ya.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,v,g),ba.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,v,g),wa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ba.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ya.calc(l),ba.calc(l),wa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Sf(i,t){const e=1-i;return e*e*t}function yf(i,t){return 2*(1-i)*i*t}function bf(i,t){return i*i*t}function vs(i,t,e,n){return Sf(i,t)+yf(i,e)+bf(i,n)}function wf(i,t){const e=1-i;return e*e*e*t}function Ef(i,t){const e=1-i;return 3*e*e*i*t}function Tf(i,t){return 3*(1-i)*i*i*t}function Af(i,t){return i*i*i*t}function xs(i,t,e,n,s){return wf(i,t)+Ef(i,e)+Tf(i,n)+Af(i,s)}class Mh extends Rn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xs(t,s.x,r.x,a.x,o.x),xs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rf extends Rn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xs(t,s.x,r.x,a.x,o.x),xs(t,s.y,r.y,a.y,o.y),xs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sh extends Rn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends Rn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yh extends Rn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bh extends Rn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y),vs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wh extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nc(o,l.x,c.x,h.x,u.x),nc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Gr=Object.freeze({__proto__:null,ArcCurve:Mf,CatmullRomCurve3:xh,CubicBezierCurve:Mh,CubicBezierCurve3:Rf,EllipseCurve:jo,LineCurve:Sh,LineCurve3:Cf,QuadraticBezierCurve:yh,QuadraticBezierCurve3:bh,SplineCurve:wh});class Pf extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Gr[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class ic extends Pf{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sh(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new yh(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Mh(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new jo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Eh extends ic{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ic().fromJSON(s))}return this}}function Lf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Th(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ff(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let f=e;f<s;f+=e){const d=i[f],m=i[f+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Rs(r,a,e,o,l,c,0),a}function Th(i,t,e,n,s){let r;if(s===Yf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=sc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=sc(a/n|0,i[a],i[a+1],r);return r&&Xi(r,r.next)&&(Ps(r),r=r.next),r}function gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xi(e,e.next)||be(e.prev,e,e.next)===0)){if(Ps(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Gf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?If(i,n,s,r):Df(i)){t.push(l.i,i.i,c.i),Ps(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Nf(gi(i),t),Rs(i,t,e,n,s,r,2)):a===2&&Uf(i,t,e,n,s,r):Rs(gi(i),t,e,n,s,r,1);break}}}function Df(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&ps(s,o,r,l,a,c,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function If(i,t,e,n){const s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),m=Math.min(h,u,f),v=Math.max(o,l,c),g=Math.max(h,u,f),p=bo(d,m,t,e,n),S=bo(v,g,t,e,n);let w=i.prevZ,x=i.nextZ;for(;w&&w.z>=p&&x&&x.z<=S;){if(w.x>=d&&w.x<=v&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&ps(o,h,l,u,c,f,w.x,w.y)&&be(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&ps(o,h,l,u,c,f,x.x,x.y)&&be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=v&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&ps(o,h,l,u,c,f,w.x,w.y)&&be(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&ps(o,h,l,u,c,f,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Nf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Xi(n,s)&&Rh(n,e,e.next,s)&&Cs(n,s)&&Cs(s,n)&&(t.push(n.i,e.i,s.i),Ps(e),Ps(e.next),e=i=s),e=e.next}while(e!==i);return gi(e)}function Uf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wf(a,o)){let l=Ch(a,o);a=gi(a,a.next),l=gi(l,l.next),Rs(a,t,e,n,s,r,0),Rs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ff(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Th(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vf(c))}s.sort(Of);for(let r=0;r<s.length;r++)e=Bf(s[r],e);return e}function Of(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Bf(i,t){const e=zf(i,t);if(!e)return t;const n=Ch(e,i);return gi(n,n.next),gi(e,e.next)}function zf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Xi(i,e))return e;do{if(Xi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ah(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Cs(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&kf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function kf(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Gf(i,t,e,n){let s=i;do s.z===0&&(s.z=bo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hf(s)}function Hf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function bo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ah(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ps(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Ah(i,t,e,n,s,r,a,o)}function Wf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xf(i,t)&&(Cs(i,t)&&Cs(t,i)&&qf(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Xi(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xi(i,t){return i.x===t.x&&i.y===t.y}function Rh(i,t,e,n){const s=cr(be(i,t,e)),r=cr(be(i,t,n)),a=cr(be(e,n,i)),o=cr(be(e,n,t));return!!(s!==r&&a!==o||s===0&&lr(i,e,t)||r===0&&lr(i,n,t)||a===0&&lr(e,i,n)||o===0&&lr(e,t,n))}function lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function cr(i){return i>0?1:i<0?-1:0}function Xf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Cs(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function qf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ch(i,t){const e=wo(i.i,i.x,i.y),n=wo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sc(i,t,e,n){const s=wo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ps(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Zf{static triangulate(t,e,n=2){return Lf(t,e,n)}}class Bi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Bi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];rc(t),ac(n,t);let a=t.length;e.forEach(rc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ac(n,e[l]);const o=Zf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function rc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ac(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class el extends we{constructor(t=new Eh([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:$f;let w,x=!1,E,T,_,y;if(p){w=p.getSpacedPoints(h),x=!0,f=!1;const tt=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,tt),T=new C,_=new C,y=new C}f||(g=0,d=0,m=0,v=0);const N=o.extractPoints(c);let P=N.shape;const L=N.holes;if(!Bi.isClockWise(P)){P=P.reverse();for(let tt=0,pt=L.length;tt<pt;tt++){const ut=L[tt];Bi.isClockWise(ut)&&(L[tt]=ut.reverse())}}function k(tt){const ut=10000000000000001e-36;let Et=tt[0];for(let lt=1;lt<=tt.length;lt++){const kt=lt%tt.length,wt=tt[kt],Zt=wt.x-Et.x,qt=wt.y-Et.y,te=Zt*Zt+qt*qt,R=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(Et.x),Math.abs(Et.y)),xt=ut*R*R;if(te<=xt){tt.splice(kt,1),lt--;continue}Et=wt}}k(P),L.forEach(k);const I=L.length,H=P;for(let tt=0;tt<I;tt++){const pt=L[tt];P=P.concat(pt)}function K(tt,pt,ut){return pt||oe("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(pt,ut)}const z=P.length;function rt(tt,pt,ut){let Et,lt,kt;const wt=tt.x-pt.x,Zt=tt.y-pt.y,qt=ut.x-tt.x,te=ut.y-tt.y,R=wt*wt+Zt*Zt,xt=wt*te-Zt*qt;if(Math.abs(xt)>Number.EPSILON){const _t=Math.sqrt(R),Dt=Math.sqrt(qt*qt+te*te),it=pt.x-Zt/_t,Wt=pt.y+wt/_t,vt=ut.x-te/Dt,Ct=ut.y+qt/Dt,A=((vt-it)*te-(Ct-Wt)*qt)/(wt*te-Zt*qt);Et=it+wt*A-tt.x,lt=Wt+Zt*A-tt.y;const M=Et*Et+lt*lt;if(M<=2)return new at(Et,lt);kt=Math.sqrt(M/2)}else{let _t=!1;wt>Number.EPSILON?qt>Number.EPSILON&&(_t=!0):wt<-Number.EPSILON?qt<-Number.EPSILON&&(_t=!0):Math.sign(Zt)===Math.sign(te)&&(_t=!0),_t?(Et=-Zt,lt=wt,kt=Math.sqrt(R)):(Et=wt,lt=Zt,kt=Math.sqrt(R/2))}return new at(Et/kt,lt/kt)}const $=[];for(let tt=0,pt=H.length,ut=pt-1,Et=tt+1;tt<pt;tt++,ut++,Et++)ut===pt&&(ut=0),Et===pt&&(Et=0),$[tt]=rt(H[tt],H[ut],H[Et]);const et=[];let Q,Tt=$.concat();for(let tt=0,pt=I;tt<pt;tt++){const ut=L[tt];Q=[];for(let Et=0,lt=ut.length,kt=lt-1,wt=Et+1;Et<lt;Et++,kt++,wt++)kt===lt&&(kt=0),wt===lt&&(wt=0),Q[Et]=rt(ut[Et],ut[kt],ut[wt]);et.push(Q),Tt=Tt.concat(Q)}let Lt;if(g===0)Lt=Bi.triangulateShape(H,L);else{const tt=[],pt=[];for(let ut=0;ut<g;ut++){const Et=ut/g,lt=d*Math.cos(Et*Math.PI/2),kt=m*Math.sin(Et*Math.PI/2)+v;for(let wt=0,Zt=H.length;wt<Zt;wt++){const qt=K(H[wt],$[wt],kt);zt(qt.x,qt.y,-lt),Et===0&&tt.push(qt)}for(let wt=0,Zt=I;wt<Zt;wt++){const qt=L[wt];Q=et[wt];const te=[];for(let R=0,xt=qt.length;R<xt;R++){const _t=K(qt[R],Q[R],kt);zt(_t.x,_t.y,-lt),Et===0&&te.push(_t)}Et===0&&pt.push(te)}}Lt=Bi.triangulateShape(tt,pt)}const J=Lt.length,gt=m+v;for(let tt=0;tt<z;tt++){const pt=f?K(P[tt],Tt[tt],gt):P[tt];x?(_.copy(E.normals[0]).multiplyScalar(pt.x),T.copy(E.binormals[0]).multiplyScalar(pt.y),y.copy(w[0]).add(_).add(T),zt(y.x,y.y,y.z)):zt(pt.x,pt.y,0)}for(let tt=1;tt<=h;tt++)for(let pt=0;pt<z;pt++){const ut=f?K(P[pt],Tt[pt],gt):P[pt];x?(_.copy(E.normals[tt]).multiplyScalar(ut.x),T.copy(E.binormals[tt]).multiplyScalar(ut.y),y.copy(w[tt]).add(_).add(T),zt(y.x,y.y,y.z)):zt(ut.x,ut.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){const pt=tt/g,ut=d*Math.cos(pt*Math.PI/2),Et=m*Math.sin(pt*Math.PI/2)+v;for(let lt=0,kt=H.length;lt<kt;lt++){const wt=K(H[lt],$[lt],Et);zt(wt.x,wt.y,u+ut)}for(let lt=0,kt=L.length;lt<kt;lt++){const wt=L[lt];Q=et[lt];for(let Zt=0,qt=wt.length;Zt<qt;Zt++){const te=K(wt[Zt],Q[Zt],Et);x?zt(te.x,te.y+w[h-1].y,w[h-1].x+ut):zt(te.x,te.y,u+ut)}}}mt(),Bt();function mt(){const tt=s.length/3;if(f){let pt=0,ut=z*pt;for(let Et=0;Et<J;Et++){const lt=Lt[Et];pe(lt[2]+ut,lt[1]+ut,lt[0]+ut)}pt=h+g*2,ut=z*pt;for(let Et=0;Et<J;Et++){const lt=Lt[Et];pe(lt[0]+ut,lt[1]+ut,lt[2]+ut)}}else{for(let pt=0;pt<J;pt++){const ut=Lt[pt];pe(ut[2],ut[1],ut[0])}for(let pt=0;pt<J;pt++){const ut=Lt[pt];pe(ut[0]+z*h,ut[1]+z*h,ut[2]+z*h)}}n.addGroup(tt,s.length/3-tt,0)}function Bt(){const tt=s.length/3;let pt=0;yt(H,pt),pt+=H.length;for(let ut=0,Et=L.length;ut<Et;ut++){const lt=L[ut];yt(lt,pt),pt+=lt.length}n.addGroup(tt,s.length/3-tt,1)}function yt(tt,pt){let ut=tt.length;for(;--ut>=0;){const Et=ut;let lt=ut-1;lt<0&&(lt=tt.length-1);for(let kt=0,wt=h+g*2;kt<wt;kt++){const Zt=z*kt,qt=z*(kt+1),te=pt+Et+Zt,R=pt+lt+Zt,xt=pt+lt+qt,_t=pt+Et+qt;Vt(te,R,xt,_t)}}}function zt(tt,pt,ut){l.push(tt),l.push(pt),l.push(ut)}function pe(tt,pt,ut){Kt(tt),Kt(pt),Kt(ut);const Et=s.length/3,lt=S.generateTopUV(n,s,Et-3,Et-2,Et-1);jt(lt[0]),jt(lt[1]),jt(lt[2])}function Vt(tt,pt,ut,Et){Kt(tt),Kt(pt),Kt(Et),Kt(pt),Kt(ut),Kt(Et);const lt=s.length/3,kt=S.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);jt(kt[0]),jt(kt[1]),jt(kt[3]),jt(kt[1]),jt(kt[2]),jt(kt[3])}function Kt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function jt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gr[s.type]().fromJSON(s)),new el(n,t.options)}}const $f={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-u),new at(f,1-m),new at(v,1-p)]:[new at(o,1-l),new at(h,1-u),new at(d,1-m),new at(g,1-p)]}};function Kf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fe extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const S=p*f-a;for(let w=0;w<c;w++){const x=w*u-r;m.push(x,-S,0),v.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const w=S+c*p,x=S+c*(p+1),E=S+1+c*(p+1),T=S+1+c*p;d.push(w,x,T),d.push(x,E,T)}this.setIndex(d),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ls extends we{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new C,m=new at;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let v=0;v<s;v++){const g=v*(n+1);for(let p=0;p<n;p++){const S=p+g,w=S,x=S+n+1,E=S+n+2,T=S+1;o.push(w,x,T),o.push(x,E,T)}}this.setIndex(o),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Sn extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,f=new C,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const S=[],w=p/n,x=a+w*o,E=t*Math.cos(x),T=Math.sqrt(t*t-E*E);let _=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let y=0;y<=e;y++){const N=y/e,P=s+N*r;u.x=-T*Math.cos(P),u.y=E,u.z=T*Math.sin(P),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(N+_,1-w),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const w=h[p][S+1],x=h[p][S],E=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&d.push(w,x,T),(p!==n-1||l<Math.PI)&&d.push(x,E,T)}this.setIndex(d),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nl extends we{constructor(t=new bh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new at;let h=new C;const u=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(d,2));function v(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),S(),p()}function g(w){h=t.getPointAt(w/e,h);const x=a.normals[w],E=a.binormals[w];for(let T=0;T<=s;T++){const _=T/s*Math.PI*2,y=Math.sin(_),N=-Math.cos(_);l.x=N*x.x+y*E.x,l.y=N*x.y+y*E.y,l.z=N*x.z+y*E.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let x=1;x<=s;x++){const E=(s+1)*(w-1)+(x-1),T=(s+1)*w+(x-1),_=(s+1)*w+x,y=(s+1)*(w-1)+x;m.push(E,T,y),m.push(T,_,y)}}function S(){for(let w=0;w<=e;w++)for(let x=0;x<=s;x++)c.x=w/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new nl(new Gr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(oc(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(oc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const s in n)t[s]=n[s]}return t}function oc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ph(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Ds={clone:qi,merge:Ke};var Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new de().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Lh extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ie extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class td extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ed extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class il extends Te{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class lc extends il{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ea=new de,cc=new C,hc=new C;class Dh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(cc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ea,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Es||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hr=new C,ur=new $i,bn=new C;class Ih extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(hr,ur,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,ur,bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(hr,ur,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hr,ur,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new C,uc=new at,fc=new at;class cn extends Ih{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,uc,fc),e.subVectors(fc,uc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class nd extends Dh{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class Qn extends il{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class sl extends Ih{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class id extends Dh{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fr extends il{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new id}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ni=-90,Ui=1;class Eo extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Ni,Ui,t,e);s.layers=this.layers,this.add(s);const r=new cn(Ni,Ui,t,e);r.layers=this.layers,this.add(r);const a=new cn(Ni,Ui,t,e);a.layers=this.layers,this.add(a);const o=new cn(Ni,Ui,t,e);o.layers=this.layers,this.add(o);const l=new cn(Ni,Ui,t,e);l.layers=this.layers,this.add(l);const c=new cn(Ni,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class sd extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class rd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ad.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ad(){this._document.hidden===!1&&this.reset()}const dc=new de;class Nh{constructor(t,e,n=0,s=1/0){this.ray=new Xr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):oe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dc),this}intersectObject(t,e=!0,n=[]){return To(t,this,n,e),n.sort(pc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)To(t[s],this,n,e);return n.sort(pc),n}}function pc(i,t){return i.distance-t.distance}function To(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)To(r[a],t,e,!0)}}function mc(i,t,e,n){const s=od(n);switch(e){case th:return i*t;case zo:return i*t/s.components*s.byteLength;case ko:return i*t/s.components*s.byteLength;case mi:return i*t*2/s.components*s.byteLength;case Go:return i*t*2/s.components*s.byteLength;case eh:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case Ho:return i*t*4/s.components*s.byteLength;case yr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case qa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case Za:case Ka:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:case Lr:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case po:case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _o:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dr:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function od(i){switch(i){case hn:case Kc:return{byteLength:1,components:1};case ws:case Jc:case je:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case An:case Fo:case xn:return{byteLength:4,components:1};case Qc:case jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);function Uh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ld(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
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
#endif`,ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
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
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_d=`#ifdef USE_BATCHING
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
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yd=`#ifdef USE_IRIDESCENCE
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
#endif`,bd=`#ifdef USE_BUMPMAP
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dd=`#define PI 3.141592653589793
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
} // validated`,Id=`vec3 transformedNormal = objectNormal;
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
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
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
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,ap=`uniform sampler2D dfgLUT;
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
}`,op=`
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
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
#endif`,bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yp=`float getShadowMask() {
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
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform float backgroundBlurriness;
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,S0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,w0=`#define LAMBERT
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,L0=`#define PHONG
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
}`,D0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,U0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,k0=`uniform float rotation;
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
}`,G0=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:cd,alphahash_pars_fragment:hd,alphamap_fragment:ud,alphamap_pars_fragment:fd,alphatest_fragment:dd,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:gd,batching_pars_vertex:_d,batching_vertex:vd,begin_vertex:xd,beginnormal_vertex:Md,bsdfs:Sd,iridescence_fragment:yd,bumpmap_pars_fragment:bd,clipping_planes_fragment:wd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Td,clipping_planes_vertex:Ad,color_fragment:Rd,color_pars_fragment:Cd,color_pars_vertex:Pd,color_vertex:Ld,common:Dd,defaultnormal_vertex:Id,displacementmap_pars_vertex:Nd,displacementmap_vertex:Ud,emissivemap_fragment:Fd,emissivemap_pars_fragment:Od,colorspace_fragment:Bd,colorspace_pars_fragment:zd,envmap_fragment:kd,envmap_common_pars_fragment:Gd,envmap_pars_fragment:Hd,envmap_pars_vertex:Vd,envmap_physical_pars_fragment:tp,envmap_vertex:Wd,fog_vertex:Xd,fog_pars_vertex:qd,fog_fragment:Yd,fog_pars_fragment:Zd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:Kd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:Qd,lights_pars_begin:jd,lights_toon_fragment:ep,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,lightprobes_pars_fragment:hp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:pp,map_fragment:mp,map_pars_fragment:gp,map_particle_fragment:_p,map_particle_pars_fragment:vp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Sp,morphcolor_vertex:yp,morphnormal_vertex:bp,morphtarget_pars_vertex:wp,morphtarget_vertex:Ep,normal_fragment_begin:Tp,normal_fragment_maps:Ap,normal_pars_fragment:Rp,normal_pars_vertex:Cp,normal_vertex:Pp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Up,opaque_fragment:Fp,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:zp,dithering_fragment:kp,dithering_pars_fragment:Gp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:Zp,skinning_pars_vertex:$p,skinning_vertex:Kp,skinnormal_vertex:Jp,specularmap_fragment:Qp,specularmap_pars_fragment:jp,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:a0,worldpos_vertex:o0,background_vert:l0,background_frag:c0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:f0,cube_frag:d0,depth_vert:p0,depth_frag:m0,distance_vert:g0,distance_frag:_0,equirect_vert:v0,equirect_frag:x0,linedashed_vert:M0,linedashed_frag:S0,meshbasic_vert:y0,meshbasic_frag:b0,meshlambert_vert:w0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:A0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:P0,meshphong_frag:L0,meshphysical_vert:D0,meshphysical_frag:I0,meshtoon_vert:N0,meshtoon_frag:U0,points_vert:F0,points_frag:O0,shadow_vert:B0,shadow_frag:z0,sprite_vert:k0,sprite_frag:G0},Rt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},En={basic:{uniforms:Ke([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ke([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ke([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ke([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ke([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ke([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ke([Rt.points,Rt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ke([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ke([Rt.common,Rt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ke([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ke([Rt.sprite,Rt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:Ke([Rt.common,Rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:Ke([Rt.lights,Rt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};En.physical={uniforms:Ke([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const dr={r:0,b:0,g:0},H0=new de,Fh=new $t;Fh.set(-1,0,0,0,1,0,0,0,1);function V0(i,t,e,n,s,r){const a=new Gt(0);let o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const x=S.backgroundBlurriness>0;w=t.get(w,x)}return w}function m(S){let w=!1;const x=d(S);x===null?g(a,o):x&&x.isColor&&(g(x,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,w){const x=d(w);x&&x.isCubeTexture?(c===void 0&&(c=new At(new Ne(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:qi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fh),c.material.toneMapped=ae.getTransfer(x.colorSpace)!==me,(h!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new At(new Fe(2,2),new qe({name:"BackgroundMaterial",uniforms:qi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,w){S.getRGB(dr,Ph(i)),e.buffers.color.setClear(dr.r,dr.g,dr.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:m,addToRenderList:v,dispose:p}}function W0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(L,F,k,I,H){let K=!1;const z=u(L,I,k,F);r!==z&&(r=z,c(r.object)),K=d(L,I,k,H),K&&m(L,I,k,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(L,F,k,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,F,k,I){const H=I.wireframe===!0;let K=n[F.id];K===void 0&&(K={},n[F.id]=K);const z=L.isInstancedMesh===!0?L.id:0;let rt=K[z];rt===void 0&&(rt={},K[z]=rt);let $=rt[k.id];$===void 0&&($={},rt[k.id]=$);let et=$[H];return et===void 0&&(et=f(l()),$[H]=et),et}function f(L){const F=[],k=[],I=[];for(let H=0;H<e;H++)F[H]=0,k[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,F,k,I){const H=r.attributes,K=F.attributes;let z=0;const rt=k.getAttributes();for(const $ in rt)if(rt[$].location>=0){const Q=H[$];let Tt=K[$];if(Tt===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(Tt=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(Tt=L.instanceColor)),Q===void 0||Q.attribute!==Tt||Tt&&Q.data!==Tt.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function m(L,F,k,I){const H={},K=F.attributes;let z=0;const rt=k.getAttributes();for(const $ in rt)if(rt[$].location>=0){let Q=K[$];Q===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const Tt={};Tt.attribute=Q,Q&&Q.data&&(Tt.data=Q.data),H[$]=Tt,z++}r.attributes=H,r.attributesNum=z,r.index=I}function v(){const L=r.newAttributes;for(let F=0,k=L.length;F<k;F++)L[F]=0}function g(L){p(L,0)}function p(L,F){const k=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;k[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),H[L]!==F&&(i.vertexAttribDivisor(L,F),H[L]=F)}function S(){const L=r.newAttributes,F=r.enabledAttributes;for(let k=0,I=F.length;k<I;k++)F[k]!==L[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function w(L,F,k,I,H,K,z){z===!0?i.vertexAttribIPointer(L,F,k,H,K):i.vertexAttribPointer(L,F,k,I,H,K)}function x(L,F,k,I){v();const H=I.attributes,K=k.getAttributes(),z=F.defaultAttributeValues;for(const rt in K){const $=K[rt];if($.location>=0){let et=H[rt];if(et===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(et=L.instanceColor)),et!==void 0){const Q=et.normalized,Tt=et.itemSize,Lt=t.get(et);if(Lt===void 0)continue;const J=Lt.buffer,gt=Lt.type,mt=Lt.bytesPerElement,Bt=gt===i.INT||gt===i.UNSIGNED_INT||et.gpuType===Fo;if(et.isInterleavedBufferAttribute){const yt=et.data,zt=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,pe=et.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Vt=0;Vt<$.locationSize;Vt++)p($.location+Vt,yt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Vt=0;Vt<$.locationSize;Vt++)g($.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Vt=0;Vt<$.locationSize;Vt++)w($.location+Vt,Tt/$.locationSize,gt,Q,zt*mt,(pe+Tt/$.locationSize*Vt)*mt,Bt)}else{if(et.isInstancedBufferAttribute){for(let yt=0;yt<$.locationSize;yt++)p($.location+yt,et.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<$.locationSize;yt++)g($.location+yt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let yt=0;yt<$.locationSize;yt++)w($.location+yt,Tt/$.locationSize,gt,Q,Tt*mt,Tt/$.locationSize*yt*mt,Bt)}}else if(z!==void 0){const Q=z[rt];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv($.location,Q);break;case 3:i.vertexAttrib3fv($.location,Q);break;case 4:i.vertexAttrib4fv($.location,Q);break;default:i.vertexAttrib1fv($.location,Q)}}}}S()}function E(){N();for(const L in n){const F=n[L];for(const k in F){const I=F[k];for(const H in I){const K=I[H];for(const z in K)h(K[z].object),delete K[z];delete I[H]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const F=n[L.id];for(const k in F){const I=F[k];for(const H in I){const K=I[H];for(const z in K)h(K[z].object),delete K[z];delete I[H]}}delete n[L.id]}function _(L){for(const F in n){const k=n[F];for(const I in k){const H=k[I];if(H[L.id]===void 0)continue;const K=H[L.id];for(const z in K)h(K[z].object),delete K[z];delete H[L.id]}}}function y(L){for(const F in n){const k=n[F],I=L.isInstancedMesh===!0?L.id:0,H=k[I];if(H!==void 0){for(const K in H){const z=H[K];for(const rt in z)h(z[rt].object),delete z[rt];delete H[K]}delete k[I],Object.keys(k).length===0&&delete n[F]}}}function N(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function X0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function q0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Tn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const y=_===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==hn&&_!==xn&&!y&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:x,maxSamples:E,samples:T}}function Y0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new $n,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const S=r?0:n,w=S*4;let x=p.clippingState||null;l.value=x,x=h(m,f,w,d);for(let E=0;E!==w;++E)x[E]=e[E];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,x=d;w!==v;++w,x+=4)a.copy(u[w]).applyMatrix4(S,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}class rl extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ne(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:fi});r.uniforms.tEquirect.value=e;const a=new At(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=rn),new Eo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const gc=256,Z0=3,$0=20,Oh=256,Bh=16,K0=3,J0=new C,Q0=new Gt;class Yi{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Eo(1,10,null),this._boxMesh=new At(new Ne(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=J0}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Q0));const g=new Eo(n,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gc,oh(t))}_fromTexture(t,e){t.mapping===Gi||t.mapping===bs?this._setSize(t.image.length===0?gc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=_c(t,!1,!1),n=Math.log2(t)-Z0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=_c(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Gi||t.mapping===bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=j0(),this._integrationMaterial=tm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Bh);for(let a=0;a<=n;a++){const o=Yi.lodToRoughness(a,n);if(a>n-K0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Oh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=em());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function _c(i,t,e){return new rl(i,{minFilter:Kn,generateMipmaps:t,type:je,colorSpace:Ir,depthBuffer:e})}function Is(i,t,e){return new qe({name:i,uniforms:t,vertexShader:ee.cube_vert,fragmentShader:e,side:Be,blending:fi,depthTest:!1,depthWrite:!1})}function j0(){return Is("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Oh}u

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
	`)}function tm(){return Is("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bh}},`

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
	`)}function em(){return Is("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$0}
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
	`)}function vc(){return Is("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function xc(){return Is("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function nm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Kr||d===Jr)if(t.has(f)){const m=t.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const v=new rl(m.height);return v.fromEquirectangularTexture(i,f),t.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,m=d===Kr||d===Jr,v=d===Gi||d===bs;if(m||v){let g=e.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Yi(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return m&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new Yi(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===Kr?f.mapping=Gi:d===Jr&&(f.mapping=bs),f}function l(f){let d=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&d++;return d===m}function c(f){const d=f.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function im(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Tr("WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const v=r.get(m);v&&(t.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(m){const v=m.attributes;for(const g in v)t.update(v[g],i.ARRAY_BUFFER)}function u(m){const v=m.index,g=m.attributes.position;let p=0;if(g===void 0)return;const S=v!==null?v.array.length:g.array.length/3-1,w=g.count>=65535?uh:hh,x=new w(Math.ceil(S/3)*6,1),E=x.array;if(v!==null){const _=v.array;p=v.version;for(let y=0,N=0;y<S;y+=3){const P=_[y+0],L=_[y+1],F=_[y+2];E[N++]=P,E[N++]=L,E[N++]=L,E[N++]=F,E[N++]=F,E[N++]=P}}else{p=g.version;for(let _=0,y=0;_<S;_+=3){const N=_+0,P=_+1,L=_+2;E[y++]=N,E[y++]=P,E[y++]=P,E[y++]=L,E[y++]=L,E[y++]=N}}x.version=p;const T=r.get(m);T&&t.remove(T),r.set(m,x)}function f(m){const v=r.get(m);if(v){const g=m.index;g!==null&&v.version<g.version&&u(m)}else u(m);return r.get(m)}function d(){for(const m in s){const v=s[m].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function rm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function am(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function om(i,t,e){const n=new WeakMap,s=new ye;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let P=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var d=P;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let E=o.attributes.position.count*x,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const _=new Float32Array(E*T*4*u),y=new lh(_,E,T,u);y.type=xn,y.needsUpdate=!0;const N=x*4;for(let L=0;L<u;L++){const F=p[L],k=S[L],I=w[L],H=E*T*4*L;for(let K=0;K<F.count;K++){const z=K*N;m===!0&&(s.fromBufferAttribute(F,K),_[H+z+0]=s.x,_[H+z+1]=s.y,_[H+z+2]=s.z,_[H+z+3]=0),v===!0&&(s.fromBufferAttribute(k,K),_[H+z+4]=s.x,_[H+z+5]=s.y,_[H+z+6]=s.z,_[H+z+7]=0),g===!0&&(s.fromBufferAttribute(I,K),_[H+z+8]=s.x,_[H+z+9]=s.y,_[H+z+10]=s.z,_[H+z+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new at(E,T)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function lm(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const cm={[Po]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[Do]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[No]:"AGX_TONE_MAPPING",[Uo]:"NEUTRAL_TONE_MAPPING",[Io]:"CUSTOM_TONE_MAPPING"};function hm(i,t,e,n,s,r){const a=new tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new we;h.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ce([0,2,0,0,2,0],2));const u=new Lh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new At(h,u),d=new sl(-1,1,1,-1,0,1);let m=null,v=null,g=!1,p,S=null,w=[],x=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),l!==null&&l.setSize(E,T);for(let _=0;_<w.length;_++){const y=w[_];y.setSize&&y.setSize(E,T)}},this.setEffects=function(E){w=E,x=w.length>0&&w[0].isRenderPass===!0;const T=a.width,_=a.height;w.length>0&&o===null&&(o=new tn(T,_,{type:je,depthBuffer:!1,stencilBuffer:!1}),l=new tn(T,_,{type:je,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&w.some(N=>N.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Vi(T,_),r===!0&&(c.format=Jn,c.type=Hi)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let N=0;N<w.length;N++){const P=w[N];P.setSize&&P.setSize(T,_),y&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(E,T){if(g||E.toneMapping===zn&&w.length===0)return!1;if(S=T,T!==null){const _=T.width,y=T.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return x===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=zn,!0},this.hasRenderPass=function(){return x},this.end=function(E,T){E.toneMapping=p,g=!0;let _=a,y=o;for(let N=0;N<w.length;N++){const P=w[N];P.enabled!==!1&&(P.render(E,y,_,T),P.needsSwap!==!1&&(_=y,y=y===o?l:o))}if(m!==E.outputColorSpace||v!==E.toneMapping){m=E.outputColorSpace,v=E.toneMapping,u.defines={},ae.getTransfer(m)===me&&(u.defines.SRGB_TRANSFER="");const N=cm[v];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(S),E.render(f,d),S=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const zh=new Ye,kh=new Vi(1,1),Gh=new _h(1),Hh=new lh,Vh=new ju,Wh=new mh,Mc=[],Sc=[],yc=new Float32Array(16),bc=new Float32Array(9),wc=new Float32Array(4);function Ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Mc[s];if(r===void 0&&(r=new Float32Array(s),Mc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;wc.set(n),i.uniformMatrix2fv(this.addr,!1,wc),Le(e,n)}}function gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),Le(e,n)}}function _m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),Le(e,n)}}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Yr(i){return i.version===0&&(i.compareFunction=sh,i.needsUpdate=!0),i}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Yr(kh):r=zh,e.setTexture2D(t||r,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vh,s)}function Rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Yr(Gh):r=Wh,e.setTextureCube(t||r,s)}function Cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function Pm(i){switch(i){case 5126:return um;case 35664:return fm;case 35665:return dm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return ym;case 36294:return bm;case 36295:return wm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Lm(i,t){i.uniform1fv(this.addr,t)}function Dm(i,t){const e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function Im(i,t){const e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function Nm(i,t){const e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function Um(i,t){const e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fm(i,t){const e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Om(i,t){const e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bm(i,t){i.uniform1iv(this.addr,t)}function zm(i,t){i.uniform2iv(this.addr,t)}function km(i,t){i.uniform3iv(this.addr,t)}function Gm(i,t){i.uniform4iv(this.addr,t)}function Hm(i,t){i.uniform1uiv(this.addr,t)}function Vm(i,t){i.uniform2uiv(this.addr,t)}function Wm(i,t){i.uniform3uiv(this.addr,t)}function Xm(i,t){i.uniform4uiv(this.addr,t)}function qm(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Yr(kh):a=zh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ym(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vh,r[a])}function Zm(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Yr(Gh):a=Wh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function $m(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hh,r[a])}function Km(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Im;case 35666:return Nm;case 35674:return Um;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Gm;case 5125:return Hm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pm(e.type)}}class Qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Km(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Ec(i,t){i.seq.push(t),i.map[t.id]=t}function tg(i,t,e){const n=i.name,s=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),a=Ta.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ec(e,c===void 0?new Jm(o,i,t):new Qm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new jm(o),Ec(e,u)),e=u}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);tg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Tc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const eg=37297;let ng=0;function ig(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ac=new $t;function sg(i){ae._getMatrix(Ac,ae.workingColorSpace,i);const t=`mat3( ${Ac.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Nr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ig(i.getShaderSource(t),o)}else return r}function rg(i,t){const e=sg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const ag={[Po]:"Linear",[Lo]:"Reinhard",[Do]:"Cineon",[Vr]:"ACESFilmic",[No]:"AgX",[Uo]:"Neutral",[Io]:"Custom"};function og(i,t){const e=ag[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pr=new C;function lg(){ae.getLuminanceCoefficients(pr);const i=pr.x.toFixed(4),t=pr.y.toFixed(4),e=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function hg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ug(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ms(i){return i!==""}function Cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(i){return i.replace(fg,dg)}function dg(i,t){const e=ee[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ao(e)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(i){return i.replace(pg,mg)}function mg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gg={[Sr]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function _g(i){return gg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vg={[bs]:"ENVMAP_MODE_REFRACTION"};function xg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mg={[Zc]:"ENVMAP_BLENDING_MULTIPLY",[vu]:"ENVMAP_BLENDING_MIX",[xu]:"ENVMAP_BLENDING_ADD"};function Sg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mg[i.combine]||"ENVMAP_BLENDING_NONE"}function yg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=_g(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xg(e),u=Sg(e),f=cg(e),d=hg(r),m=s.createProgram();let v,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ms).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ms).join(`
`),g.length>0&&(g+=`
`)):(v=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),g=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?ee.tonemapping_pars_fragment:"",e.toneMapping!==zn?og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,rg("linearToOutputTexel",e.outputColorSpace),lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=Ao(a),a=Cc(a,e),a=Pc(a,e),o=Ao(o),o=Cc(o,e),o=Pc(o,e),a=Lc(a),o=Lc(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=p+v+a,w=p+g+o,x=Tc(s,s.VERTEX_SHADER,S),E=Tc(s,s.FRAGMENT_SHADER,w);s.attachShader(m,x),s.attachShader(m,E),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(P){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(x)||"",k=s.getShaderInfoLog(E)||"",I=L.trim(),H=F.trim(),K=k.trim();let z=!0,rt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,x,E);else{const $=Rc(s,x,"vertex"),et=Rc(s,E,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+$+`
`+et)}else I!==""?Xt("WebGLProgram: Program Info Log:",I):(H===""||K==="")&&(rt=!1);rt&&(P.diagnostics={runnable:z,programLog:I,vertexShader:{log:H,prefix:v},fragmentShader:{log:K,prefix:g}})}s.deleteShader(x),s.deleteShader(E),_=new Ar(s,m),y=ug(s,m)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,eg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ng++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=E,this}let bg=0;class wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Eg(t),e.set(t,n)),n}}class Eg{constructor(t){this.id=bg++,this.code=t,this.usedTimes=0}}function Tg(i){return i===mi||i===Lr||i===Dr}function Ag(i,t,e,n,s,r){const a=new Yo,o=new wg,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,y,N,P,L,F){const k=P.fog,I=L.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=t.get(_.envMap||H,K),rt=f[_.type];let $=n.precision;_.precision!==null&&($=n.getMaxPrecision(_.precision),$!==_.precision&&Xt("WebGLProgram.getParameters:",_.precision,"not supported, using",$,"instead."));const et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=et!==void 0?et.length:0;let Tt=0;I.morphAttributes.position!==void 0&&(Tt=1),I.morphAttributes.normal!==void 0&&(Tt=2),I.morphAttributes.color!==void 0&&(Tt=3);let Lt,J,gt,mt;if(rt){const bt=En[rt];Lt=bt.vertexShader,J=bt.fragmentShader}else{Lt=_.vertexShader,J=_.fragmentShader;const bt=o.getVertexShaderStage(_),he=o.getFragmentShaderStage(_);o.update(_,bt,he),gt=bt.id,mt=he.id}const Bt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,pe=L.isBatchedMesh===!0,Vt=!!_.map,Kt=!!_.matcap,jt=!!z,tt=jt&&z.isPMREMTexture===!0,pt=!!_.aoMap,ut=!!_.lightMap,Et=!!_.bumpMap&&_.wireframe===!1,lt=!!_.normalMap,kt=!!_.displacementMap,wt=!!_.emissiveMap,Zt=!!_.metalnessMap,qt=!!_.roughnessMap,te=_.anisotropy>0,R=_.clearcoat>0,xt=_.diffuseRoughness>0,_t=_.dispersion>0,Dt=_.retroreflectivity>0,it=_.iridescence>0,Wt=_.sheen>0,vt=_.transmission>0,Ct=te&&!!_.anisotropyMap,A=R&&!!_.clearcoatMap,M=R&&!!_.clearcoatNormalMap,U=R&&!!_.clearcoatRoughnessMap,st=xt&&!!_.diffuseRoughnessMap,j=it&&!!_.iridescenceMap,ft=it&&!!_.iridescenceThicknessMap,B=Wt&&!!_.sheenColorMap,G=Wt&&!!_.sheenRoughnessMap,X=!!_.specularMap,nt=!!_.specularColorMap,D=!!_.specularIntensityMap,q=vt&&!!_.transmissionMap,Y=vt&&!!_.thicknessMap,ht=!!_.gradientMap,ot=!!_.alphaMap,dt=_.alphaTest>0,It=!!_.alphaHash,Yt=!!_.extensions;let ct=zn;_.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(ct=i.toneMapping);const Ht=tt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Qt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:Lt,fragmentShader:J,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:$,batching:pe,batchingColor:pe&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:Kt,envMap:jt,envMapMode:jt&&z.mapping,envMapPMREM:tt,envMapMaxLod:tt?Ht.length-1:null,envMapSize:tt?Ht[0].width:null,aoMap:pt,lightMap:ut,bumpMap:Et,normalMap:lt,displacementMap:kt,emissiveMap:wt,normalMapObjectSpace:lt&&_.normalMapType===yu,normalMapTangentSpace:lt&&_.normalMapType===Mo,packedNormalMap:lt&&_.normalMapType===Mo&&Tg(_.normalMap.format),metalnessMap:Zt,roughnessMap:qt,anisotropy:te,anisotropyMap:Ct,clearcoat:R,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:U,diffuseRoughness:xt,diffuseRoughnessMap:st,dispersion:_t,retroreflection:Dt,iridescence:it,iridescenceMap:j,iridescenceThicknessMap:ft,sheen:Wt,sheenColorMap:B,sheenRoughnessMap:G,specularMap:X,specularColorMap:nt,specularIntensityMap:D,transmission:vt,transmissionMap:q,thicknessMap:Y,gradientMap:ht,opaque:_.transparent===!1&&_.blending===di&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:dt,alphaHash:It,combine:_.combine,mapUv:Vt&&d(_.map.channel),aoMapUv:pt&&d(_.aoMap.channel),lightMapUv:ut&&d(_.lightMap.channel),bumpMapUv:Et&&d(_.bumpMap.channel),normalMapUv:lt&&d(_.normalMap.channel),displacementMapUv:kt&&d(_.displacementMap.channel),emissiveMapUv:wt&&d(_.emissiveMap.channel),metalnessMapUv:Zt&&d(_.metalnessMap.channel),roughnessMapUv:qt&&d(_.roughnessMap.channel),anisotropyMapUv:Ct&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:B&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:G&&d(_.sheenRoughnessMap.channel),specularMapUv:X&&d(_.specularMap.channel),specularColorMapUv:nt&&d(_.specularColorMap.channel),specularIntensityMapUv:D&&d(_.specularIntensityMap.channel),transmissionMapUv:q&&d(_.transmissionMap.channel),thicknessMapUv:Y&&d(_.thicknessMap.channel),alphaMapUv:ot&&d(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(lt||te),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Vt||ot),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Tt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.filter(bt=>bt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:wt&&_.emissiveMap.isVideoTexture===!0&&ae.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ee,flipSided:_.side===Be,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function v(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)y.push(N),y.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(g(y,_),p(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function g(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function p(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const y=f[_.type];let N;if(y){const P=En[y];N=Ds.clone(P.uniforms)}else N=_.uniforms;return N}function w(_,y){let N=h.get(y);return N!==void 0?++N.usedTimes:(N=new yg(i,y,_,s),c.push(N),h.set(y,N)),N}function x(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:S,acquireProgram:w,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:T}}function Rg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ic(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,v,g,p){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=m,S.materialVariant=a(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=g,S.group=p),t++,S}function l(f,d,m,v,g,p,S){S.reversedDepth===!0&&(g=-g);const w=o(f,d,m,v,g,p);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):e.push(w)}function c(f,d,m,v,g,p){const S=o(f,d,m,v,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||Cg),n.length>1&&n.sort(d||Ic),s.length>1&&s.sort(d||Ic)}function u(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Pg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nc,i.set(n,[a])):s>=r.length?(a=new Nc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Gt};break;case"SpotLight":e={position:new C,direction:new C,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Dg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ig=0;function Ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ug(i){const t=new Lg,e=Dg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new de,a=new de;function o(c){let h=0,u=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,S=0,w=0,x=0,E=0,T=0,_=0,y=0,N=0,P=0;c.sort(Ng);for(let F=0,k=c.length;F<k;F++){const I=c[F],H=I.color,K=I.intensity,z=I.distance;let rt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===mi?rt=I.shadow.map.texture:rt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*K,u+=H.g*K,f+=H.b*K;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],K);P++}else if(I.isSunLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,Q=e.get(I);Q.shadowIntensity=et.intensity,Q.shadowBias=et.bias,Q.shadowNormalBias=et.normalBias,Q.shadowRadius=et.radius,Q.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=rt;const Tt=et.getViewportCount();for(let Lt=0;Lt<Tt;Lt++)n.sunShadowMatrix[v+Lt]=et.getMatrix(Lt),n.sunShadowCascade[v+Lt]=et._cascadeData[Lt];v+=Tt,m++}n.sun[d]=$,d++}else if(I.isDirectionalLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,Q=e.get(I);Q.shadowIntensity=et.intensity,Q.shadowBias=et.bias,Q.shadowNormalBias=et.normalBias,Q.shadowRadius=et.radius,Q.shadowMapSize=et.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=rt,n.directionalShadowMatrix[g]=I.shadow.matrix,E++}n.directional[g]=$,g++}else if(I.isSpotLight){const $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(H).multiplyScalar(K),$.distance=z,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[S]=$;const et=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,et.updateMatrices(I),I.castShadow&&N++),n.spotLightMatrix[S]=et.matrix,I.castShadow){const Q=e.get(I);Q.shadowIntensity=et.intensity,Q.shadowBias=et.bias,Q.shadowNormalBias=et.normalBias,Q.shadowRadius=et.radius,Q.shadowMapSize=et.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=rt,_++}S++}else if(I.isRectAreaLight){const $=t.get(I);$.color.copy(H).multiplyScalar(K),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=$,w++}else if(I.isPointLight){const $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const et=I.shadow,Q=e.get(I);Q.shadowIntensity=et.intensity,Q.shadowBias=et.bias,Q.shadowNormalBias=et.normalBias,Q.shadowRadius=et.radius,Q.shadowMapSize=et.mapSize,Q.shadowCameraNear=et.camera.near,Q.shadowCameraFar=et.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=I.shadow.matrix,T++}n.point[p]=$,p++}else if(I.isHemisphereLight){const $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(K),$.groundColor.copy(I.groundColor).multiplyScalar(K),n.hemi[x]=$,x++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==w||L.hemiLength!==x||L.numSunShadows!==m||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==_||L.numSpotMaps!==y||L.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+y-N,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,L.sunLength=d,L.directionalLength=g,L.pointLength=p,L.spotLength=S,L.rectAreaLength=w,L.hemiLength=x,L.numSunShadows=m,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=_,L.numSpotMaps=y,L.numLightProbes=P,n.version=Ig++)}function l(c,h){let u=0,f=0,d=0,m=0,v=0,g=0;const p=h.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){const x=c[S];if(x.isSunLight){const E=n.sun[u];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),u++}else if(x.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(x.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Uc(i){const t=new Ug(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Uc(i),t.set(s,[o])):r>=a.length?(o=new Uc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
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
}`,zg=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],kg=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Fc=new de,us=new C,Aa=new C;function Gg(i,t,e){let n=new As;const s=new at,r=new at,a=new ye,o=new td,l=new ed,c={},h=e.maxTextureSize,u={[pi]:Be,[Be]:pi,[Ee]:Ee},f=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Og,fragmentShader:Bg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new we;m.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let p=this.type;this.render=function(T,_,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Xc&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);const N=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(fi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==this.type;k&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=T.length;I<H;I++){const K=T[I],z=K.shadow;if(z===void 0){Xt("WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const rt=z.getFrameExtents();s.multiply(rt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,z.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=$,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ds){if(K.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new tn(s.x,s.y,{format:mi,type:je,minFilter:rn,magFilter:rn,generateMipmaps:!1}),z.map.texture.name=K.name+".shadowMap",z.map.depthTexture=new Vi(s.x,s.y,xn),z.map.depthTexture.name=K.name+".shadowMapDepth",z.map.depthTexture.format=ti,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Oe,z.map.depthTexture.magFilter=Oe}else K.isPointLight?(z.map=new rl(s.x),z.map.depthTexture=new _h(s.x,An)):(z.map=new tn(s.x,s.y),z.map.depthTexture=new Vi(s.x,s.y,An)),z.map.depthTexture.name=K.name+".shadowMap",z.map.depthTexture.format=ti,this.type===Sr?(z.map.depthTexture.compareFunction=$?ih:nh,z.map.depthTexture.minFilter=rn,z.map.depthTexture.magFilter=rn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Oe,z.map.depthTexture.magFilter=Oe);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const et=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();K.isPointLight!==!0&&z.updateMatrices(K,y);const Q=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:y.layers;for(let Tt=0;Tt<et;Tt++){const Lt=z.getCamera(Tt);if(K.isPointLight){const J=z.camera,gt=z.matrix,mt=K.distance||J.far;mt!==J.far&&(J.far=mt,J.updateProjectionMatrix()),us.setFromMatrixPosition(K.matrixWorld),J.position.copy(us),Aa.copy(J.position),Aa.add(zg[Tt]),J.up.copy(kg[Tt]),J.lookAt(Aa),J.updateMatrixWorld(),gt.makeTranslation(-us.x,-us.y,-us.z),Fc.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Fc,J.coordinateSystem,J.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Tt),i.clear();else{Tt===0&&(i.setRenderTarget(z.map),i.clear());const J=z.getViewport(Tt);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),F.viewport(a)}n=z.getFrustum(Tt),x(_,y,Lt,K,Q,this.type)}z.isPointLightShadow!==!0&&this.type===ds&&S(z,y),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(N,P,L)};function S(T,_){const y=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new tn(s.x,s.y,{format:mi,type:je}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,y,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,y,d,v,null)}function w(T,_,y,N){let P=null;const L=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=y.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const F=P.uuid,k=_.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let H=I[k];H===void 0&&(H=P.clone(),I[k]=H,_.addEventListener("dispose",E)),P=H}if(P.visible=_.visible,P.wireframe=_.wireframe,N===ds?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=i.properties.get(P);F.light=y}return P}function x(T,_,y,N,P,L){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ds)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const I=t.update(T),H=T.material;if(Array.isArray(H)){const K=I.groups;for(let z=0,rt=K.length;z<rt;z++){const $=K[z],et=H[$.materialIndex];if(et&&et.visible){const Q=w(T,et,N,L);T.onBeforeShadow(i,T,_,y,I,Q,$),i.renderBufferDirect(y,null,I,Q,T,$),T.onAfterShadow(i,T,_,y,I,Q,$)}}}else if(H.visible){const K=w(T,H,N,L);T.onBeforeShadow(i,T,_,y,I,K,null),i.renderBufferDirect(y,null,I,K,T,null),T.onAfterShadow(i,T,_,y,I,K,null)}}const k=T.children;for(let I=0,H=k.length;I<H;I++)x(k[I],_,y,N,P,L)}function E(T){T.target.removeEventListener("dispose",E);for(const y in c){const N=c[y],P=T.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function Hg(i,t){function e(){let D=!1;const q=new ye;let Y=null;const ht=new ye(0,0,0,0);return{setMask:function(ot){Y!==ot&&!D&&(i.colorMask(ot,ot,ot,ot),Y=ot)},setLocked:function(ot){D=ot},setClear:function(ot,dt,It,Yt,ct){ct===!0&&(ot*=Yt,dt*=Yt,It*=Yt),q.set(ot,dt,It,Yt),ht.equals(q)===!1&&(i.clearColor(ot,dt,It,Yt),ht.copy(q))},reset:function(){D=!1,Y=null,ht.set(-1,0,0,0)}}}function n(){let D=!1,q=!1,Y=null,ht=null,ot=null;return{setReversed:function(dt){if(q!==dt){const It=t.get("EXT_clip_control");dt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),q=dt;const Yt=ot;ot=null,this.setClear(Yt)}},getReversed:function(){return q},setTest:function(dt){dt?yt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!D&&(i.depthMask(dt),Y=dt)},setFunc:function(dt){if(q&&(dt=Du[dt]),ht!==dt){switch(dt){case Ua:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=dt}},setLocked:function(dt){D=dt},setClear:function(dt){ot!==dt&&(ot=dt,q&&(dt=1-dt),i.clearDepth(dt))},reset:function(){D=!1,Y=null,ht=null,ot=null,q=!1}}}function s(){let D=!1,q=null,Y=null,ht=null,ot=null,dt=null,It=null,Yt=null,ct=null;return{setTest:function(Ht){D||(Ht?yt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Ht){q!==Ht&&!D&&(i.stencilMask(Ht),q=Ht)},setFunc:function(Ht,Qt,bt){(Y!==Ht||ht!==Qt||ot!==bt)&&(i.stencilFunc(Ht,Qt,bt),Y=Ht,ht=Qt,ot=bt)},setOp:function(Ht,Qt,bt){(dt!==Ht||It!==Qt||Yt!==bt)&&(i.stencilOp(Ht,Qt,bt),dt=Ht,It=Qt,Yt=bt)},setLocked:function(Ht){D=Ht},setClear:function(Ht){ct!==Ht&&(i.clearStencil(Ht),ct=Ht)},reset:function(){D=!1,q=null,Y=null,ht=null,ot=null,dt=null,It=null,Yt=null,ct=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},f={},d=new WeakMap,m=[],v=null,g=!1,p=null,S=null,w=null,x=null,E=null,T=null,_=null,y=new Gt(0,0,0),N=0,P=!1,L=null,F=null,k=null,I=null,H=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,rt=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),z=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=rt>=2);let et=null,Q={};const Tt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),J=new ye().fromArray(Tt),gt=new ye().fromArray(Lt);function mt(D,q,Y,ht){const ot=new Uint8Array(4),dt=i.createTexture();i.bindTexture(D,dt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<Y;It++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(q+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return dt}const Bt={};Bt[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(i.DEPTH_TEST),a.setFunc(ys),Et(!1),lt(Sl),yt(i.CULL_FACE),pt(fi);function yt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function zt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function pe(D,q){return f[D]!==q?(i.bindFramebuffer(D,q),f[D]=q,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=q),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=q),!0):!1}function Vt(D,q){let Y=m,ht=!1;if(D){Y=d.get(q),Y===void 0&&(Y=[],d.set(q,Y));const ot=D.textures;if(Y.length!==ot.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,It=ot.length;dt<It;dt++)Y[dt]=i.COLOR_ATTACHMENT0+dt;Y.length=ot.length,ht=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ht=!0);ht&&i.drawBuffers(Y)}function Kt(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const jt={[Oi]:i.FUNC_ADD,[eu]:i.FUNC_SUBTRACT,[nu]:i.FUNC_REVERSE_SUBTRACT};jt[iu]=i.MIN,jt[su]=i.MAX;const tt={[ru]:i.ZERO,[au]:i.ONE,[ou]:i.SRC_COLOR,[qc]:i.SRC_ALPHA,[du]:i.SRC_ALPHA_SATURATE,[uu]:i.DST_COLOR,[cu]:i.DST_ALPHA,[lu]:i.ONE_MINUS_SRC_COLOR,[Yc]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[pu]:i.CONSTANT_COLOR,[mu]:i.ONE_MINUS_CONSTANT_COLOR,[gu]:i.CONSTANT_ALPHA,[_u]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(D,q,Y,ht,ot,dt,It,Yt,ct,Ht){if(D===fi){g===!0&&(zt(i.BLEND),g=!1);return}if(g===!1&&(yt(i.BLEND),g=!0),D!==tu){if(D!==p||Ht!==P){if((S!==Oi||E!==Oi)&&(i.blendEquation(i.FUNC_ADD),S=Oi,E=Oi),Ht)switch(D){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ge:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",D);break}else switch(D){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ge:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yl:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",D);break}w=null,x=null,T=null,_=null,y.set(0,0,0),N=0,p=D,P=Ht}return}ot=ot||q,dt=dt||Y,It=It||ht,(q!==S||ot!==E)&&(i.blendEquationSeparate(jt[q],jt[ot]),S=q,E=ot),(Y!==w||ht!==x||dt!==T||It!==_)&&(i.blendFuncSeparate(tt[Y],tt[ht],tt[dt],tt[It]),w=Y,x=ht,T=dt,_=It),(Yt.equals(y)===!1||ct!==N)&&(i.blendColor(Yt.r,Yt.g,Yt.b,ct),y.copy(Yt),N=ct),p=D,P=!1}function ut(D,q){D.side===Ee?zt(i.CULL_FACE):yt(i.CULL_FACE);let Y=D.side===Be;q&&(Y=!Y),Et(Y),D.blending===di&&D.transparent===!1?pt(fi):pt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ht=D.stencilWrite;o.setTest(ht),ht&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),wt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function lt(D){D!==Qh?(yt(i.CULL_FACE),D!==F&&(D===Sl?i.cullFace(i.BACK):D===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),F=D}function kt(D){D!==k&&(z&&i.lineWidth(D),k=D)}function wt(D,q,Y){D?(yt(i.POLYGON_OFFSET_FILL),(I!==q||H!==Y)&&(I=q,H=Y,a.getReversed()&&(q=-q,Y=-Y),i.polygonOffset(q,Y))):zt(i.POLYGON_OFFSET_FILL)}function Zt(D){D?yt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function qt(D){D===void 0&&(D=i.TEXTURE0+K-1),et!==D&&(i.activeTexture(D),et=D)}function te(D,q,Y){Y===void 0&&(et===null?Y=i.TEXTURE0+K-1:Y=et);let ht=Q[Y];ht===void 0&&(ht={type:void 0,texture:void 0},Q[Y]=ht),(ht.type!==D||ht.texture!==q)&&(et!==Y&&(i.activeTexture(Y),et=Y),i.bindTexture(D,q||Bt[D]),ht.type=D,ht.texture=q)}function R(){const D=Q[et];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function xt(){try{i.compressedTexImage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function _t(){try{i.compressedTexImage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function Dt(){try{i.texSubImage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function it(){try{i.texSubImage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function Wt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function vt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function Ct(){try{i.texStorage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function M(){try{i.texImage2D(...arguments)}catch(D){oe("WebGLState:",D)}}function U(){try{i.texImage3D(...arguments)}catch(D){oe("WebGLState:",D)}}function st(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function j(D,q){u[D]!==q&&(i.pixelStorei(D,q),u[D]=q)}function ft(D){J.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function B(D){gt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),gt.copy(D))}function G(D,q){let Y=c.get(q);Y===void 0&&(Y=new WeakMap,c.set(q,Y));let ht=Y.get(D);ht===void 0&&(ht=i.getUniformBlockIndex(q,D.name),i.uniformBlockBinding(q,ht,ht),Y.set(D,ht))}function X(D,q,Y){const ot=c.get(q).get(D);l[ot]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,ot,Y),l[ot]=Y)}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,Q={},f={},l={},d=new WeakMap,m=[],v=null,g=!1,p=null,S=null,w=null,x=null,E=null,T=null,_=null,y=new Gt(0,0,0),N=0,P=!1,L=null,F=null,k=null,I=null,H=null,J.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:yt,disable:zt,bindFramebuffer:pe,drawBuffers:Vt,useProgram:Kt,setBlending:pt,setMaterial:ut,setFlipSided:Et,setCullFace:lt,setLineWidth:kt,setPolygonOffset:wt,setScissorTest:Zt,activeTexture:qt,bindTexture:te,unbindTexture:R,compressedTexImage2D:xt,compressedTexImage3D:_t,texImage2D:M,texImage3D:U,pixelStorei:j,getParameter:st,updateUBOMapping:G,uniformBlockBinding:X,texStorage2D:Ct,texStorage3D:A,texSubImage2D:Dt,texSubImage3D:it,compressedTexSubImage2D:Wt,compressedTexSubImage3D:vt,scissor:ft,viewport:B,reset:nt}}function Vg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u=new Set;let f;const d=new WeakMap,m=new Set,v=new FinalizationRegistry(A=>m.delete(A));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,M){return g?new OffscreenCanvas(A,M):Ur("canvas")}function S(A,M,U){let st=1;const j=Ct(A);if((j.width>U||j.height>U)&&(st=U/Math.max(j.width,j.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ft=Math.floor(st*j.width),B=Math.floor(st*j.height);f===void 0&&(f=p(ft,B));const G=M?p(ft,B):f;return G.width=ft,G.height=B,G.getContext("2d").drawImage(A,0,0,ft,B),Xt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ft+"x"+B+")."),G}else return"data"in A&&Xt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function w(A){return A.generateMipmaps}function x(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,M,U,st,j,ft=!1){if(A!==null){if(i[A]!==void 0)return i[A];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let B;st&&(B=t.get("EXT_texture_norm16"),B||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=M;if(M===i.RED&&(U===i.FLOAT&&(G=i.R32F),U===i.HALF_FLOAT&&(G=i.R16F),U===i.UNSIGNED_BYTE&&(G=i.R8),U===i.UNSIGNED_SHORT&&B&&(G=B.R16_EXT),U===i.SHORT&&B&&(G=B.R16_SNORM_EXT)),M===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.R8UI),U===i.UNSIGNED_SHORT&&(G=i.R16UI),U===i.UNSIGNED_INT&&(G=i.R32UI),U===i.BYTE&&(G=i.R8I),U===i.SHORT&&(G=i.R16I),U===i.INT&&(G=i.R32I)),M===i.RG&&(U===i.FLOAT&&(G=i.RG32F),U===i.HALF_FLOAT&&(G=i.RG16F),U===i.UNSIGNED_BYTE&&(G=i.RG8),U===i.UNSIGNED_SHORT&&B&&(G=B.RG16_EXT),U===i.SHORT&&B&&(G=B.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RG8UI),U===i.UNSIGNED_SHORT&&(G=i.RG16UI),U===i.UNSIGNED_INT&&(G=i.RG32UI),U===i.BYTE&&(G=i.RG8I),U===i.SHORT&&(G=i.RG16I),U===i.INT&&(G=i.RG32I)),M===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RGB8UI),U===i.UNSIGNED_SHORT&&(G=i.RGB16UI),U===i.UNSIGNED_INT&&(G=i.RGB32UI),U===i.BYTE&&(G=i.RGB8I),U===i.SHORT&&(G=i.RGB16I),U===i.INT&&(G=i.RGB32I)),M===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),U===i.UNSIGNED_INT&&(G=i.RGBA32UI),U===i.BYTE&&(G=i.RGBA8I),U===i.SHORT&&(G=i.RGBA16I),U===i.INT&&(G=i.RGBA32I)),M===i.RGB&&(U===i.UNSIGNED_SHORT&&B&&(G=B.RGB16_EXT),U===i.SHORT&&B&&(G=B.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),M===i.RGBA){const X=ft?Nr:ae.getTransfer(j);U===i.FLOAT&&(G=i.RGBA32F),U===i.HALF_FLOAT&&(G=i.RGBA16F),U===i.UNSIGNED_BYTE&&(G=X===me?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&B&&(G=B.RGBA16_EXT),U===i.SHORT&&B&&(G=B.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function _(A,M){let U;return A?M===null||M===An||M===Hi?U=i.DEPTH24_STENCIL8:M===xn?U=i.DEPTH32F_STENCIL8:M===ws&&(U=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===An||M===Hi?U=i.DEPTH_COMPONENT24:M===xn?U=i.DEPTH_COMPONENT32F:M===ws&&(U=i.DEPTH_COMPONENT16),U}function y(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==Oe&&A.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function N(A){const M=new WeakRef(A);n.get(A).__ref=M,m.add(M),v.register(A,M,M)}function P(A){const M=n.get(A).__ref;M!==void 0&&(m.delete(M),v.unregister(M))}function L(A){k(A.target)}function F(A){I(A.target)}function k(A){A.removeEventListener("dispose",L),P(A),K(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function I(A){A.removeEventListener("dispose",F),P(A),rt(A)}function H(){for(const A of m){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):k(M))}m.clear(),u.clear()}function K(A){const M=n.get(A);if(M.__webglInit===void 0)return;const U=A.source,st=d.get(U);if(st){const j=st[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&z(A),Object.keys(st).length===0&&d.delete(U)}n.remove(A)}function z(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const U=A.source,st=d.get(U);delete st[M.__cacheKey],a.memory.textures--}function rt(A){const M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const U=A.depthTexture;if(U&&U.renderTarget===A&&k(U),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ft=0;ft<M.__webglFramebuffer[j].length;ft++)i.deleteFramebuffer(M.__webglFramebuffer[j][ft]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const st=A.textures;for(let j=0,ft=st.length;j<ft;j++){const B=n.get(st[j]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),n.remove(st[j])}n.remove(A)}let $=0;function et(){$=0}function Q(){return $}function Tt(A){$=A}function Lt(){const A=$;return A>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,A}function J(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function gt(A,M){const U=n.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const st=A.image;if(st===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(U,A,M);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+M)}function mt(A,M){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){ut(U,A,M);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+M)}function Bt(A,M){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){ut(U,A,M);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+M)}function yt(A,M){const U=n.get(A);if(A.version>0&&U.__version!==A.version){Et(U,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+M)}const zt={[Pr]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},pe={[Oe]:i.NEAREST,[Mu]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Vt={[wu]:i.NEVER,[sh]:i.ALWAYS,[Eu]:i.LESS,[nh]:i.LEQUAL,[Tu]:i.EQUAL,[ih]:i.GEQUAL,[Au]:i.GREATER,[Ru]:i.NOTEQUAL};function Kt(A,M){if(M.type===xn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===Qr||M.magFilter===Fs||M.magFilter===Kn||M.minFilter===rn||M.minFilter===Qr||M.minFilter===Fs||M.minFilter===Kn)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,zt[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,zt[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,zt[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pe[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Oe||M.minFilter!==Fs&&M.minFilter!==Kn||M.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function jt(A,M){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",L),N(M));const st=M.source;let j=d.get(st);j===void 0&&(j={},d.set(st,j));const ft=J(M);if(ft!==A.__cacheKey){j[ft]===void 0&&(j[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),j[ft].usedTimes++;const B=j[A.__cacheKey];B!==void 0&&(j[A.__cacheKey].usedTimes--,B.usedTimes===0&&z(M)),A.__cacheKey=ft,A.__webglTexture=j[ft].texture}return U}function tt(A,M,U){return Math.floor(Math.floor(A/U)/M)}function pt(A,M,U,st){const ft=A.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,U,st,M.data);else{ft.sort((D,q)=>D.start-q.start);let B=0;for(let D=1;D<ft.length;D++){const q=ft[B],Y=ft[D],ht=q.start+q.count,ot=tt(Y.start,M.width,4),dt=tt(q.start,M.width,4);Y.start<=ht+1&&ot===dt&&tt(Y.start+Y.count-1,M.width,4)===ot?q.count=Math.max(q.count,Y.start+Y.count-q.start):(++B,ft[B]=Y)}ft.length=B+1;const G=e.getParameter(i.UNPACK_ROW_LENGTH),X=e.getParameter(i.UNPACK_SKIP_PIXELS),nt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let D=0,q=ft.length;D<q;D++){const Y=ft[D],ht=Math.floor(Y.start/4),ot=Math.ceil(Y.count/4),dt=ht%M.width,It=Math.floor(ht/M.width),Yt=ot,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,It),e.texSubImage2D(i.TEXTURE_2D,0,dt,It,Yt,ct,U,st,M.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,G),e.pixelStorei(i.UNPACK_SKIP_PIXELS,X),e.pixelStorei(i.UNPACK_SKIP_ROWS,nt)}}function ut(A,M,U){let st=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=i.TEXTURE_3D);const j=jt(A,M),ft=M.source;e.bindTexture(st,A.__webglTexture,i.TEXTURE0+U);const B=n.get(ft);if(ft.version!==B.__version||j===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ct=ae.getPrimaries(ae.workingColorSpace),Ht=M.colorSpace===On?null:ae.getPrimaries(M.colorSpace),Qt=M.colorSpace===On||ct===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let X=S(M.image,!1,s.maxTextureSize);X=vt(M,X);const nt=r.convert(M.format,M.colorSpace),D=r.convert(M.type);let q=T(M.internalFormat,nt,D,M.normalized,M.colorSpace,M.isVideoTexture);Kt(st,M);let Y;const ht=M.mipmaps,ot=M.isVideoTexture!==!0,dt=B.__version===void 0||j===!0,It=ft.dataReady,Yt=y(M,X);if(M.isDepthTexture)q=_(M.format===Jn,M.type),dt&&(ot?e.texStorage2D(i.TEXTURE_2D,1,q,X.width,X.height):e.texImage2D(i.TEXTURE_2D,0,q,X.width,X.height,0,nt,D,null));else if(M.isDataTexture)if(ht.length>0){ot&&dt&&e.texStorage2D(i.TEXTURE_2D,Yt,q,ht[0].width,ht[0].height);for(let ct=0,Ht=ht.length;ct<Ht;ct++)Y=ht[ct],ot?It&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Y.width,Y.height,nt,D,Y.data):e.texImage2D(i.TEXTURE_2D,ct,q,Y.width,Y.height,0,nt,D,Y.data);M.generateMipmaps=!1}else ot?(dt&&e.texStorage2D(i.TEXTURE_2D,Yt,q,X.width,X.height),It&&pt(M,X,nt,D)):e.texImage2D(i.TEXTURE_2D,0,q,X.width,X.height,0,nt,D,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ot&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,q,ht[0].width,ht[0].height,X.depth);for(let ct=0,Ht=ht.length;ct<Ht;ct++)if(Y=ht[ct],M.format!==Tn)if(nt!==null)if(ot){if(It)if(M.layerUpdates.size>0){const Qt=mc(Y.width,Y.height,M.format,M.type);for(const bt of M.layerUpdates){const he=Y.data.subarray(bt*Qt/Y.data.BYTES_PER_ELEMENT,(bt+1)*Qt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,bt,Y.width,Y.height,1,nt,he)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Y.width,Y.height,X.depth,nt,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,q,Y.width,Y.height,X.depth,0,Y.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Y.width,Y.height,X.depth,nt,D,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,q,Y.width,Y.height,X.depth,0,nt,D,Y.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ot&&dt&&e.texStorage2D(i.TEXTURE_2D,Yt,q,ht[0].width,ht[0].height);for(let ct=0,Ht=ht.length;ct<Ht;ct++)Y=ht[ct],M.format!==Tn?nt!==null?ot?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Y.width,Y.height,nt,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,q,Y.width,Y.height,0,Y.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?It&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Y.width,Y.height,nt,D,Y.data):e.texImage2D(i.TEXTURE_2D,ct,q,Y.width,Y.height,0,nt,D,Y.data)}else if(M.isDataArrayTexture)if(ot){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,q,X.width,X.height,X.depth),It)if(M.layerUpdates.size>0){const ct=mc(X.width,X.height,M.format,M.type);for(const Ht of M.layerUpdates){const Qt=X.data.subarray(Ht*ct/X.data.BYTES_PER_ELEMENT,(Ht+1)*ct/X.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ht,X.width,X.height,1,nt,D,Qt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,nt,D,X.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,X.width,X.height,X.depth,0,nt,D,X.data);else if(M.isData3DTexture)ot?(dt&&e.texStorage3D(i.TEXTURE_3D,Yt,q,X.width,X.height,X.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,nt,D,X.data)):e.texImage3D(i.TEXTURE_3D,0,q,X.width,X.height,X.depth,0,nt,D,X.data);else if(M.isFramebufferTexture){if(dt)if(ot)e.texStorage2D(i.TEXTURE_2D,Yt,q,X.width,X.height);else{let ct=X.width,Ht=X.height;for(let Qt=0;Qt<Yt;Qt++)e.texImage2D(i.TEXTURE_2D,Qt,q,ct,Ht,0,nt,D,null),ct>>=1,Ht>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),X.parentNode!==ct){ct.appendChild(X),u.add(M),ct.onpaint=Ht=>{const Qt=Ht.changedElements;for(const bt of u)Qt.includes(bt.image)&&(bt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,X);else{const Qt=i.RGBA,bt=i.RGBA,he=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qt,bt,he,X)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ht.length>0){if(ot&&dt){const ct=Ct(ht[0]);e.texStorage2D(i.TEXTURE_2D,Yt,q,ct.width,ct.height)}for(let ct=0,Ht=ht.length;ct<Ht;ct++)Y=ht[ct],ot?It&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,nt,D,Y):e.texImage2D(i.TEXTURE_2D,ct,q,nt,D,Y);M.generateMipmaps=!1}else if(ot){if(dt){const ct=Ct(X);e.texStorage2D(i.TEXTURE_2D,Yt,q,ct.width,ct.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt,D,X)}else e.texImage2D(i.TEXTURE_2D,0,q,nt,D,X);w(M)&&M.mipmapsAutoUpdate===!0&&x(st),B.__version=ft.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Et(A,M,U){if(M.image.length!==6)return;const st=jt(A,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const ft=n.get(j);if(j.version!==ft.__version||st===!0){e.activeTexture(i.TEXTURE0+U);const B=ae.getPrimaries(ae.workingColorSpace),G=M.colorSpace===On?null:ae.getPrimaries(M.colorSpace),X=M.colorSpace===On||B===G?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,q=[];for(let bt=0;bt<6;bt++)!nt&&!D?q[bt]=S(M.image[bt],!0,s.maxCubemapSize):q[bt]=D?M.image[bt].image:M.image[bt],q[bt]=vt(M,q[bt]);const Y=q[0],ht=r.convert(M.format,M.colorSpace),ot=r.convert(M.type);let dt=T(M.internalFormat,ht,ot,M.normalized,M.colorSpace);const It=M.isVideoTexture!==!0,Yt=ft.__version===void 0||st===!0,ct=j.dataReady;let Ht=y(M,Y);Kt(i.TEXTURE_CUBE_MAP,M);let Qt;if(M.isDepthTexture){if(dt=_(M.format===Jn,M.type),Yt)if(It)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,dt,Y.width,Y.height);else for(let bt=0;bt<6;bt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,dt,Y.width,Y.height,0,ht,ot,null)}else if(nt){It&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,dt,Y.width,Y.height);for(let bt=0;bt<6;bt++){Qt=q[bt].mipmaps;for(let he=0;he<Qt.length;he++){const Ae=Qt[he];M.format!==Tn?ht!==null?It?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,he,0,0,Ae.width,Ae.height,ht,Ae.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,he,dt,Ae.width,Ae.height,0,Ae.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,he,0,0,Ae.width,Ae.height,ht,ot,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,he,dt,Ae.width,Ae.height,0,ht,ot,Ae.data)}}}else{if(Qt=M.mipmaps,It&&Yt){Qt.length>0&&Ht++;const bt=Ct(q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,dt,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(D){It?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,q[bt].width,q[bt].height,ht,ot,q[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,dt,q[bt].width,q[bt].height,0,ht,ot,q[bt].data);for(let he=0;he<Qt.length;he++){const yn=Qt[he].image[bt].image;It?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,he+1,0,0,yn.width,yn.height,ht,ot,yn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,he+1,dt,yn.width,yn.height,0,ht,ot,yn.data)}}else{It?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ht,ot,q[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,dt,ht,ot,q[bt]);for(let he=0;he<Qt.length;he++){const Ae=Qt[he];It?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,he+1,0,0,ht,ot,Ae.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,he+1,dt,ht,ot,Ae.image[bt])}}}w(M)&&M.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),ft.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function lt(A,M,U,st,j,ft){const B=r.convert(U.format,U.colorSpace),G=r.convert(U.type),X=T(U.internalFormat,B,G,U.normalized,U.colorSpace),nt=n.get(M),D=n.get(U);if(D.__renderTarget=M,!nt.__hasExternalTextures){const q=Math.max(1,M.width>>ft),Y=Math.max(1,M.height>>ft);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ft,X,q,Y,M.depth,0,B,G,null):e.texImage2D(j,ft,X,q,Y,0,B,G,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),it(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,j,D.__webglTexture,0,Dt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,j,D.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(A,M,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const st=M.depthTexture,j=st&&st.isDepthTexture?st.type:null,ft=_(M.stencilBuffer,j),B=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(M),ft,M.width,M.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(M),ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,A)}else{const st=M.textures;for(let j=0;j<st.length;j++){const ft=st[j],B=r.convert(ft.format,ft.colorSpace),G=r.convert(ft.type),X=T(ft.internalFormat,B,G,ft.normalized,ft.colorSpace);it(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(M),X,M.width,M.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(M),X,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,X,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(A,M,U){const st=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(M.depthTexture);j.__renderTarget=M;const ft=st?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||ft.width!==M.width||ft.height!==M.height)&&(ft.width=M.width,ft.height=M.height,M.depthTexture.needsUpdate=!0),st?yt(M.depthTexture,0):gt(M.depthTexture,0);const B=j.__webglTexture,G=Dt(M),X=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,nt=M.depthTexture.format===Jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ti)it(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,X,B,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,nt,X,B,0);else if(M.depthTexture.format===Jn)it(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,X,B,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,nt,X,B,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(A){const M=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const st=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),st){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,st.removeEventListener("dispose",j)};st.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=st}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(U)for(let st=0;st<6;st++)wt(M.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?wt(M.__webglFramebuffer[0],A,0):wt(M.__webglFramebuffer,A,0);else if(U){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]===void 0)M.__webglDepthbuffer[st]=i.createRenderbuffer(),kt(M.__webglDepthbuffer[st],A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),kt(M.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(A,M,U){const st=n.get(A);M!==void 0&&lt(st.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Zt(A)}function te(A){const M=A.texture,U=n.get(A),st=n.get(M);A.addEventListener("dispose",F),N(A);const j=A.textures,ft=A.isWebGLCubeRenderTarget===!0,B=j.length>1;if(B||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=M.version,a.memory.textures++),ft){U.__webglFramebuffer=[];for(let G=0;G<6;G++)if(M.mipmaps.length>0){U.__webglFramebuffer[G]=[];for(let X=0;X<M.mipmaps.length;X++)U.__webglFramebuffer[G][X]=i.createFramebuffer()}else U.__webglFramebuffer[G]=i.createFramebuffer()}else{if(M.mipmaps.length>0){U.__webglFramebuffer=[];for(let G=0;G<M.mipmaps.length;G++)U.__webglFramebuffer[G]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(B)for(let G=0,X=j.length;G<X;G++){const nt=n.get(j[G]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&it(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let G=0;G<j.length;G++){const X=j[G];U.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[G]);const nt=r.convert(X.format,X.colorSpace),D=r.convert(X.type),q=T(X.internalFormat,nt,D,X.normalized,X.colorSpace,A.isXRRenderTarget===!0),Y=Dt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,U.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(U.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,M);for(let G=0;G<6;G++)if(M.mipmaps.length>0)for(let X=0;X<M.mipmaps.length;X++)lt(U.__webglFramebuffer[G][X],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,X);else lt(U.__webglFramebuffer[G],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);w(M)?x(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(B){for(let G=0,X=j.length;G<X;G++){const nt=j[G],D=n.get(nt);let q=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,D.__webglTexture),Kt(q,nt),lt(U.__webglFramebuffer,A,nt,i.COLOR_ATTACHMENT0+G,q,0),w(nt)&&x(q)}e.unbindTexture()}else{let G=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(G=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(G,st.__webglTexture),Kt(G,M),M.mipmaps.length>0)for(let X=0;X<M.mipmaps.length;X++)lt(U.__webglFramebuffer[X],A,M,i.COLOR_ATTACHMENT0,G,X);else lt(U.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,G,0);w(M)?x(G):M.mipmaps.length>0&&i.texParameteri(G,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Zt(A)}function R(A){const M=A.textures;for(let U=0,st=M.length;U<st;U++){const j=M[U];if(w(j)&&j.mipmapsAutoUpdate===!0){const ft=E(A),B=n.get(j).__webglTexture;e.bindTexture(ft,B),x(ft),e.unbindTexture()}}}const xt=[];function _t(A){if(A.samples>0){if(it(A)===!1){const M=A.textures,U=A.width,st=A.height;let j=i.COLOR_BUFFER_BIT;const ft=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=n.get(A),G=M.length>1;if(G)for(let nt=0;nt<M.length;nt++)e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let nt=0;nt<M.length;nt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),G){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,B.__webglColorRenderbuffer[nt]);const D=n.get(M[nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,U,st,0,0,U,st,j,i.NEAREST),l===!0&&(xt.length=0,xt.push(i.COLOR_ATTACHMENT0+nt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&xt.push(ft),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let nt=0;nt<M.length;nt++){e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,B.__webglColorRenderbuffer[nt]);const D=n.get(M[nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Dt(A){return Math.min(s.maxSamples,A.samples)}function it(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Wt(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function vt(A,M){const U=A.colorSpace,st=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Ir&&U!==On&&(ae.getTransfer(U)===me?(st!==Tn||j!==hn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",U)),M}function Ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Lt,this.resetTextureUnits=et,this.getTextureUnits=Q,this.setTextureUnits=Tt,this.setTexture2D=gt,this.setTexture2DArray=mt,this.setTexture3D=Bt,this.setTextureCube=yt,this.rebindTextures=qt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=it,this.dispose=H}function Wg(i,t){function e(n,s=On){let r;const a=ae.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===Jc)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Fo)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===th)return i.ALPHA;if(n===eh)return i.RGB;if(n===Tn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===Jn)return i.DEPTH_STENCIL;if(n===zo)return i.RED;if(n===ko)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===Go)return i.RG_INTEGER;if(n===Ho)return i.RGBA_INTEGER;if(n===yr||n===br||n===wr||n===Er)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Za||n===$a||n===Ka||n===Ja||n===Lr||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Za)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lr)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_o||n===vo||n===Dr||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
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

}`;class Yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new vh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qe({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zg extends _i{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Yg,p={},S=e.getContextAttributes();let w=null,x=null;const E=[],T=[],_=new at;let y=null,N=null;const P=new cn;P.viewport=new ye;const L=new cn;L.viewport=new ye;const F=[P,L],k=new sd;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let gt=E[J];return gt===void 0&&(gt=new ra,E[J]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(J){let gt=E[J];return gt===void 0&&(gt=new ra,E[J]=gt),gt.getGripSpace()},this.getHand=function(J){let gt=E[J];return gt===void 0&&(gt=new ra,E[J]=gt),gt.getHandSpace()};function K(J){const gt=T.indexOf(J.inputSource);if(gt===-1)return;const mt=E[gt];mt!==void 0&&(mt.update(J.inputSource,J.frame,c||a),mt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",rt);for(let J=0;J<E.length;J++){const gt=T[J];gt!==null&&(T[J]=null,E[J].disconnect(gt))}I=null,H=null,g.reset();for(const J in p)delete p[J];if(t.setRenderTarget(w),d=null,f=null,u=null,s=null,x=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(_.width,_.height,!1),N!==null){const J=N.camera;J.fov=N.fov,J.zoom=N.zoom,J.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",z),s.addEventListener("inputsourceschange",rt),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Bt=null,yt=null;S.depth&&(yt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=S.stencil?Jn:ti,Bt=S.stencil?Hi:An);const zt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new tn(f.textureWidth,f.textureHeight,{format:Tn,type:hn,depthTexture:new Vi(f.textureWidth,f.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new tn(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(J){for(let gt=0;gt<J.removed.length;gt++){const mt=J.removed[gt],Bt=T.indexOf(mt);Bt>=0&&(T[Bt]=null,E[Bt].disconnect(mt))}for(let gt=0;gt<J.added.length;gt++){const mt=J.added[gt];let Bt=T.indexOf(mt);if(Bt===-1){for(let zt=0;zt<E.length;zt++)if(zt>=T.length){T.push(mt),Bt=zt;break}else if(T[zt]===null){T[zt]=mt,Bt=zt;break}if(Bt===-1)break}const yt=E[Bt];yt&&yt.connect(mt)}}function $(J,gt){gt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(gt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let gt=J.near,mt=J.far;g.texture!==null&&(g.depthNear>0&&(gt=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),k.near=L.near=P.near=gt,k.far=L.far=P.far=mt,(I!==k.near||H!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,H=k.far),k.layers.mask=J.layers.mask|6,P.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const Bt=J.parent,yt=k.cameras;$(k,Bt);for(let zt=0;zt<yt.length;zt++)$(yt[zt],Bt);k.projectionMatrix.copy(P.projectionMatrix),k.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&J.isPerspectiveCamera&&(N={camera:J,fov:J.fov,zoom:J.zoom}),et(J,k,Bt)};function et(J,gt,mt){mt===null?J.matrix.copy(gt.matrixWorld):(J.matrix.copy(mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(gt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ts*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(J){return p[J]};let Q=null;function Tt(J,gt){if(h=gt.getViewerPose(c||a),m=gt,h!==null){const mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Bt=!1;mt.length!==k.cameras.length&&(k.cameras.length=0,Bt=!0);for(let Vt=0;Vt<mt.length;Vt++){const Kt=mt[Vt];let jt=null;if(d!==null)jt=d.getViewport(Kt);else{const pt=u.getViewSubImage(f,Kt);jt=pt.viewport,Vt===0&&(t.setRenderTargetTextures(x,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(x))}let tt=F[Vt];tt===void 0&&(tt=new cn,tt.layers.enable(Vt),tt.viewport=new ye,F[Vt]=tt),tt.matrix.fromArray(Kt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Kt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(jt.x,jt.y,jt.width,jt.height),Vt===0&&(k.matrix.copy(tt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Bt===!0&&k.cameras.push(tt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Vt=u.getDepthInformation(mt[0]);Vt&&Vt.isValid&&Vt.texture&&g.init(Vt,s.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let Vt=0;Vt<mt.length;Vt++){const Kt=mt[Vt].camera;if(Kt){let jt=p[Kt];jt||(jt=new vh,p[Kt]=jt);const tt=u.getCameraImage(Kt);jt.sourceTexture=tt}}}}for(let mt=0;mt<E.length;mt++){const Bt=T[mt],yt=E[mt];Bt!==null&&yt!==void 0&&yt.update(Bt,gt,c||a)}Q&&Q(J,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),m=null}const Lt=new Uh;Lt.setAnimationLoop(Tt),this.setAnimationLoop=function(J){Q=J},this.dispose=function(){}}}const $g=new de,Xh=new $t;Xh.set(-1,0,0,0,1,0,0,0,1);function Kg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ph(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),w=S.envMap,x=S.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Xh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jg(i,t,e,n){let s={},r={};function a(S,w){const x=w.program;n.uniformBlockBinding(S,x,s[S.id])}function o(S,w){let x=s[S.id];x===void 0&&(m(S),x=l(S),s[S.id]=x,S.addEventListener("dispose",g));const E=w.program;n.updateUBOMapping(S,E);const T=t.render.frame;r[S.id]!==T&&(c(S),r[S.id]=T)}function l(S){const w=i.createBuffer(),x=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,x,E),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(S){const w=s[S.id],x=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,_=x.length;T<_;T++){const y=x[T];if(Array.isArray(y))for(let N=0,P=y.length;N<P;N++)h(y[N],T,N,E);else h(y,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,w,x,E){if(f(S,w,x,E)===!0){const T=S.__offset,_=S.value;if(Array.isArray(_)){let y=0;for(let N=0;N<_.length;N++){const P=_[N],L=v(P,!0);u(P,S.__data,y),y+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function u(S,w,x){typeof S=="number"||typeof S=="boolean"?w[x]=S:S.isMatrix3?(w[x]=S.elements[0],w[x+1]=S.elements[1],w[x+2]=S.elements[2],w[x+3]=0,w[x+4]=S.elements[3],w[x+5]=S.elements[4],w[x+6]=S.elements[5],w[x+7]=0,w[x+8]=S.elements[6],w[x+9]=S.elements[7],w[x+10]=S.elements[8],w[x+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-x),x):S.toArray(w,x)}function f(S,w,x,E){const T=S.value,_=w+"_"+x;if(Array.isArray(T)){E[_]===void 0&&(E[_]=[]);const y=E[_];let N=!1;for(let P=0;P<T.length;P++)d(T[P],y,P)===!0&&(N=!0);return N}return d(T,E,_)}function d(S,w,x){if(w[x]===void 0)return typeof S=="number"||typeof S=="boolean"?w[x]=S:ArrayBuffer.isView(S)?w[x]=S.slice():w[x]=S.clone(),!0;{const E=w[x];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return w[x]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function m(S){const w=S.uniforms;let x=0;const E=16;for(let _=0,y=w.length;_<y;_++){const N=Array.isArray(w[_])?w[_]:[w[_]];for(let P=0,L=N.length;P<L;P++){const F=N[P],k=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(w[_])||Array.isArray(F.value);let H=x;for(let z=0,rt=k.length;z<rt;z++){const $=k[z],et=v($,I),Q=x%E,Tt=Q%et.boundary,Lt=Q+Tt;x+=Tt,Lt!==0&&E-Lt<et.storage&&(x+=E-Lt),z===0&&(H=x),x+=et.storage}const K=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new K((x-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}const T=x%E;return T>0&&(x+=E-T),S.__size=x,S.__cache={},this}function v(S,w){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=16,x.storage=48):S.isMatrix4?(x.boundary=16,x.storage=64):S.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(x.boundary=16,x.storage=S.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function g(S){const w=S.target;w.removeEventListener("dispose",g),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:p}}const Qg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function jg(){return wn===null&&(wn=new dh(Qg,16,16,mi,je),wn.name="DFG_LUT",wn.minFilter=rn,wn.magFilter=rn,wn.wrapS=Bn,wn.wrapT=Bn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class t_{constructor(t={}){const{canvas:e=Pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=d,g=new Set([Ho,Go,ko]),p=new Set([hn,An,ws,Hi,Oo,Bo]),S=new Uint32Array(4),w=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]};let E=null,T=null;const _=[],y=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null,k=null,I=null,H=null;this._outputColorSpace=Je;let K=0,z=0,rt=null,$=-1,et=null;const Q=new ye,Tt=new ye;let Lt=null;const J=new Gt(0);let gt=0,mt=e.width,Bt=e.height,yt=1,zt=null,pe=null;const Vt=new ye(0,0,mt,Bt),Kt=new ye(0,0,mt,Bt);let jt=!1;const tt=new As,pt=new $o;let ut=!1,Et=!1;const lt=new de,kt=new C,wt=new ye,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function te(){return rt===null?yt:1}let R=n;function xt(b,O){return e.getContext(b,O)}let _t,Dt,it,Wt,vt,Ct,A,M,U,st,j,ft,B,G,X,nt,D,q,Y,ht,ot,dt,It;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),R===null){const O="webgl2";if(R=xt(O,b),R===null)throw xt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(b){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),oe("WebGLRenderer: "+b.message),b}function Yt(){_t=new im(R),_t.init(),ot=new Wg(R,_t),Dt=new q0(R,_t,t,ot),it=new Hg(R,_t),Dt.reversedDepthBuffer&&f&&it.buffers.depth.setReversed(!0),k=R.createFramebuffer(),I=R.createFramebuffer(),H=R.createFramebuffer(),Wt=new am(R),vt=new Rg,Ct=new Vg(R,_t,it,vt,Dt,ot,Wt),A=new nm(P),M=new ld(R),dt=new W0(R,M),U=new sm(R,M,Wt,dt),st=new lm(R,U,M,dt,Wt),q=new om(R,Dt,Ct),X=new Y0(vt),j=new Ag(P,A,_t,Dt,dt,X),ft=new Kg(P,vt),B=new Pg,G=new Fg(_t),D=new V0(P,A,it,st,m,l),nt=new Gg(P,st,Dt),It=new Jg(R,Wt,Dt,it),Y=new X0(R,_t,Wt),ht=new rm(R,_t,Wt),Wt.programs=j.programs,P.capabilities=Dt,P.extensions=_t,P.properties=vt,P.renderLists=B,P.shadowMap=nt,P.state=it,P.info=Wt}v!==hn&&(N=new hm(v,e.width,e.height,o,s,r));const ct=new Zg(P,R);this.xr=ct,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=_t.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=_t.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(b){b!==void 0&&(yt=b,this.setSize(mt,Bt,!1))},this.getSize=function(b){return b.set(mt,Bt)},this.setSize=function(b,O,Z=!0){if(ct.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=b,Bt=O,e.width=Math.floor(b*yt),e.height=Math.floor(O*yt),Z===!0&&(e.style.width=b+"px",e.style.height=O+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(mt*yt,Bt*yt).floor()},this.setDrawingBufferSize=function(b,O,Z){mt=b,Bt=O,yt=Z,e.width=Math.floor(b*Z),e.height=Math.floor(O*Z),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(v===hn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(Vt)},this.setViewport=function(b,O,Z,V){b.isVector4?Vt.set(b.x,b.y,b.z,b.w):Vt.set(b,O,Z,V),it.viewport(Q.copy(Vt).multiplyScalar(te()).round())},this.getScissor=function(b){return b.copy(Kt)},this.setScissor=function(b,O,Z,V){b.isVector4?Kt.set(b.x,b.y,b.z,b.w):Kt.set(b,O,Z,V),it.scissor(Tt.copy(Kt).multiplyScalar(te()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(b){it.setScissorTest(jt=b)},this.setOpaqueSort=function(b){zt=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Z=!0){let V=0;if(b){let W=!1;if(rt!==null){const St=rt.texture.format;W=g.has(St)}if(W){const St=rt.texture.type,Nt=p.has(St),Mt=D.getClearColor(),Pt=D.getClearAlpha(),Ot=Mt.r,Jt=Mt.g,se=Mt.b;Nt?(S[0]=Ot,S[1]=Jt,S[2]=se,S[3]=Pt,R.clearBufferuiv(R.COLOR,0,S)):(w[0]=Ot,w[1]=Jt,w[2]=se,w[3]=Pt,R.clearBufferiv(R.COLOR,0,w))}else V|=R.COLOR_BUFFER_BIT}O&&(V|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),D.dispose(),B.dispose(),G.dispose(),Ct.dispose(),vt.dispose(),A.dispose(),st.dispose(),U.dispose(),dt.dispose(),It.dispose(),j.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ve),ct.removeEventListener("sessionend",fl),ri.stop()};function Ht(b){b.preventDefault(),Fr("WebGLRenderer: Context Lost."),L=!0}function Qt(){Fr("WebGLRenderer: Context Restored."),L=!1;const b=Wt.autoReset,O=nt.enabled,Z=nt.autoUpdate,V=nt.needsUpdate,W=nt.type;Yt(),Wt.autoReset=b,nt.enabled=O,nt.autoUpdate=Z,nt.needsUpdate=V,nt.type=W}function bt(b){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function he(b){const O=b.target;O.removeEventListener("dispose",he),Ae(O)}function Ae(b){yn(b),vt.remove(b)}function yn(b){const O=vt.get(b).programs;O!==void 0&&(O.forEach(function(Z){j.releaseProgram(Z)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Z,V,W,St){O===null&&(O=Zt);const Nt=W.isMesh&&W.matrixWorld.determinantAffine()<0,Mt=$h(b,O,Z,V,W);it.setMaterial(V,Nt);let Pt=Z.index,Ot=1;if(V.wireframe===!0){if(Pt=U.getWireframeAttribute(Z),Pt===void 0)return;Ot=2}const Jt=Z.drawRange,se=Z.attributes.position;let Ut=Jt.start*Ot,re=(Jt.start+Jt.count)*Ot;St!==null&&(Ut=Math.max(Ut,St.start*Ot),re=Math.min(re,(St.start+St.count)*Ot)),Pt!==null?(Ut=Math.max(Ut,0),re=Math.min(re,Pt.count)):se!=null&&(Ut=Math.max(Ut,0),re=Math.min(re,se.count));const Re=re-Ut;if(Re<0||Re===1/0)return;dt.setup(W,V,Mt,Z,Pt);let xe,_e=Y;if(Pt!==null&&(xe=M.get(Pt),_e=ht,_e.setIndex(xe)),W.isMesh)V.wireframe===!0?(it.setLineWidth(V.wireframeLinewidth*te()),_e.setMode(R.LINES)):_e.setMode(R.TRIANGLES);else if(W.isLine){let ke=V.linewidth;ke===void 0&&(ke=1),it.setLineWidth(ke*te()),W.isLineSegments?_e.setMode(R.LINES):W.isLineLoop?_e.setMode(R.LINE_LOOP):_e.setMode(R.LINE_STRIP)}else W.isPoints?_e.setMode(R.POINTS):W.isSprite&&_e.setMode(R.TRIANGLES);if(W.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))_e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ke=W._multiDrawStarts,Ft=W._multiDrawCounts,Ze=W._multiDrawCount,ue=Pt?M.get(Pt).bytesPerElement:1,ai=vt.get(V).currentProgram.getUniforms();for(let Ge=0;Ge<Ze;Ge++)ai.setValue(R,"_gl_DrawID",Ge),_e.render(ke[Ge]/ue,Ft[Ge])}else if(W.isInstancedMesh)_e.renderInstances(Ut,Re,W.count);else if(Z.isInstancedBufferGeometry){const ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ft=Math.min(Z.instanceCount,ke);_e.renderInstances(Ut,Re,Ft)}else _e.render(Ut,Re)};function Qi(b,O,Z,V){F!==null&&b.isNodeMaterial&&F.setObject(V,b),ut===!0&&X.setState(b,Z,!1),b.transparent===!0&&b.side===Ee&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,ts(b,O,V),b.side=pi,b.needsUpdate=!0,ts(b,O,V),b.side=Ee):ts(b,O,V)}this.compile=function(b,O,Z=null){Z===null&&(Z=b),F!==null&&F.renderStart(b,O,Z),T=G.get(Z),T.init(O),y.push(T),Z.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),b!==Z&&b.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Et=this.localClippingEnabled,ut=X.init(this.clippingPlanes,Et),ut===!0&&X.setGlobalState(this.clippingPlanes,O),F!==null&&nt.render(T.state.shadowsArray,Z,O);const V=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const St=W.material;if(St)if(Array.isArray(St))for(let Nt=0;Nt<St.length;Nt++){const Mt=St[Nt];Qi(Mt,Z,O,W),V.add(Mt)}else Qi(St,Z,O,W),V.add(St)}),T=y.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(b,O,Z=null){const V=this.compile(b,O,Z);return new Promise(W=>{function St(){if(V.forEach(function(Nt){const Pt=vt.get(Nt).currentProgram;(Pt===void 0||Pt.isReady())&&V.delete(Nt)}),V.size===0){W(b);return}setTimeout(St,10)}_t.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ji=null;function Zr(b){ji&&ji(b)}function ve(){ri.stop()}function fl(){ri.start()}const ri=new Uh;ri.setAnimationLoop(Zr),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(b){ji=b,ct.setAnimationLoop(b),b===null?ri.stop():ri.start()},ct.addEventListener("sessionstart",ve),ct.addEventListener("sessionend",fl),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(b,O);const Z=ct.enabled===!0&&ct.isPresenting===!0,V=N!==null&&(rt===null||Z)&&N.begin(P,rt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,O,rt),T=G.get(b,y.length),T.init(O),T.state.textureUnits=Ct.getTextureUnits(),y.push(T),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?pt.setFromArrayCamera(O):tt.setFromProjectionMatrix(lt,Mn,O.reversedDepth),Et=this.localClippingEnabled,ut=X.init(this.clippingPlanes,Et),E=B.get(b,_.length),E.init(),_.push(E),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){const Nt=P.xr.getDepthSensingMesh();Nt!==null&&$r(Nt,O,-1/0,P.sortObjects)}$r(b,O,0,P.sortObjects),E.finish(),F!==null&&F.updateLights(T.state.lightsArray),P.sortObjects===!0&&E.sort(zt,pe),qt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,qt&&D.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),ut===!0&&X.beginShadows();const W=T.state.shadowsArray;if(nt.render(W,b,O),ut===!0&&X.endShadows(),(V&&N.hasRenderPass())===!1){const Nt=E.opaque,Mt=E.transmissive;if(T.setupLights(),O.isArrayCamera){const Pt=O.cameras;if(Mt.length>0)for(let Ot=0,Jt=Pt.length;Ot<Jt;Ot++){const se=Pt[Ot];pl(Nt,Mt,b,se)}qt&&D.render(b);for(let Ot=0,Jt=Pt.length;Ot<Jt;Ot++){const se=Pt[Ot];dl(E,b,se,se.viewport)}}else Mt.length>0&&pl(Nt,Mt,b,O),qt&&D.render(b),dl(E,b,O)}rt!==null&&z===0&&(Ct.updateMultisampleRenderTarget(rt),Ct.updateRenderTargetMipmap(rt)),V&&N.end(P),b.isScene===!0&&b.onAfterRender(P,b,O),dt.resetDefaultState(),$=-1,et=null,y.pop(),y.length>0?(T=y[y.length-1],Ct.setTextureUnits(T.state.textureUnits),ut===!0&&X.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,F!==null&&F.renderEnd()};function $r(b,O,Z,V){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Nt=O.isArrayCamera?pt:tt;if(!b.frustumCulled||b.intersectsFrustum(Nt)){V&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);const Mt=st.update(b),Pt=b.material;Pt.visible&&E.push(b,Mt,Pt,Z,wt.z,null,O)}}else if(b.isMesh||b.isLine||b.isPoints){const Nt=O.isArrayCamera?pt:tt;if(!b.frustumCulled||b.intersectsFrustum(Nt)){const Mt=st.update(b),Pt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),wt.copy(Mt.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(Pt)){const Ot=Mt.groups;for(let Jt=0,se=Ot.length;Jt<se;Jt++){const Ut=Ot[Jt],re=Pt[Ut.materialIndex];re&&re.visible&&E.push(b,Mt,re,Z,wt.z,Ut,O)}}else Pt.visible&&E.push(b,Mt,Pt,Z,wt.z,null,O)}}}const St=b.children;for(let Nt=0,Mt=St.length;Nt<Mt;Nt++)$r(St[Nt],O,Z,V)}function dl(b,O,Z,V){const{opaque:W,transmissive:St,transparent:Nt}=b;T.setupLightsView(Z),ut===!0&&X.setGlobalState(P.clippingPlanes,Z),V&&it.viewport(Q.copy(V)),W.length>0&&Ns(W,O,Z),St.length>0&&Ns(St,O,Z),Nt.length>0&&Ns(Nt,O,Z),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function pl(b,O,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Ut=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new tn(1,1,{generateMipmaps:!0,type:Ut?je:hn,minFilter:Kn,samples:Math.max(4,Dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const St=T.state.transmissionRenderTarget[V.id],Nt=V.viewport||Q;St.setSize(Nt.z*P.transmissionResolutionScale,Nt.w*P.transmissionResolutionScale);const Mt=P.getRenderTarget(),Pt=P.getActiveCubeFace(),Ot=P.getActiveMipmapLevel();P.setRenderTarget(St),P.getClearColor(J),gt=P.getClearAlpha(),gt<1&&P.setClearColor(16777215,.5),P.clear(),qt&&D.render(Z);const Jt=P.toneMapping;P.toneMapping=zn;const se=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),ut===!0&&X.setGlobalState(P.clippingPlanes,V),Ns(b,Z,V),Ct.updateMultisampleRenderTarget(St),Ct.updateRenderTargetMipmap(St),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let re=0,Re=O.length;re<Re;re++){const xe=O[re],{object:_e,geometry:ke,material:Ft,group:Ze}=xe;if(Ft.side===Ee&&_e.layers.test(V.layers)){const ue=Ft.side;Ft.side=Be,Ft.needsUpdate=!0,ml(_e,Z,V,ke,Ft,Ze),Ft.side=ue,Ft.needsUpdate=!0,Ut=!0}}Ut===!0&&(Ct.updateMultisampleRenderTarget(St),Ct.updateRenderTargetMipmap(St))}P.setRenderTarget(Mt,Pt,Ot),P.setClearColor(J,gt),se!==void 0&&(V.viewport=se),P.toneMapping=Jt}function Ns(b,O,Z){const V=O.isScene===!0?O.overrideMaterial:null;for(let W=0,St=b.length;W<St;W++){const Nt=b[W],{object:Mt,geometry:Pt,group:Ot}=Nt;let Jt=Nt.material;Jt.allowOverride===!0&&V!==null&&(Jt=V),Mt.layers.test(Z.layers)&&ml(Mt,O,Z,Pt,Jt,Ot)}}function ml(b,O,Z,V,W,St){F!==null&&W.isNodeMaterial&&F.setObject(b,W),b.onBeforeRender(P,O,Z,V,W,St),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(P,O,Z,V,b,St),W.transparent===!0&&W.side===Ee&&W.forceSinglePass===!1?(W.side=Be,W.needsUpdate=!0,P.renderBufferDirect(Z,O,V,W,b,St),W.side=pi,W.needsUpdate=!0,P.renderBufferDirect(Z,O,V,W,b,St),W.side=Ee):P.renderBufferDirect(Z,O,V,W,b,St),b.onAfterRender(P,O,Z,V,W,St)}function gl(b){let O=0;for(const Z of b)Z.texture!==null&&O++;return O}function ts(b,O,Z){O.isScene!==!0&&(O=Zt);const V=vt.get(b),W=T.state.lights,St=T.state.shadowsArray,Nt=W.state.version,Mt=j.getParameters(b,W.state,St,O,Z,T.state.lightProbeGridArray),Pt=j.getProgramCacheKey(Mt);let Ot=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const Jt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=A.get(b.envMap||V.environment,Jt),V.envMapRotation=V.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",he),Ot=new Map,V.programs=Ot,V.programVariants=new Map);let se=Ot.get(Pt);if(se!==void 0){if(V.currentProgram===se&&V.lightsStateVersion===Nt)return vl(b,Mt),se}else Mt.uniforms=j.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,Z,Mt),b.onBeforeCompile(Mt,P),se=j.acquireProgram(Mt,Pt),Ot.set(Pt,se),V.uniforms=Mt.uniforms;const Ut=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=X.uniform),vl(b,Mt),V.needsLights=Jh(b),V.lightsStateVersion=Nt,V.needsLights&&(Ut.ambientLightColor.value=W.state.ambient,Ut.lightProbe.value=W.state.probe,Ut.sunLights.value=W.state.sun,Ut.sunLightShadows.value=W.state.sunShadow,Ut.directionalLights.value=W.state.directional,Ut.directionalLightShadows.value=W.state.directionalShadow,Ut.spotLights.value=W.state.spot,Ut.spotLightShadows.value=W.state.spotShadow,Ut.rectAreaLights.value=W.state.rectArea,Ut.ltc_1.value=W.state.rectAreaLTC1,Ut.ltc_2.value=W.state.rectAreaLTC2,Ut.pointLights.value=W.state.point,Ut.pointLightShadows.value=W.state.pointShadow,Ut.hemisphereLights.value=W.state.hemi,Ut.sunShadowMatrix.value=W.state.sunShadowMatrix,Ut.sunShadowCascade.value=W.state.sunShadowCascade,Ut.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ut.spotLightMatrix.value=W.state.spotLightMatrix,Ut.spotLightMap.value=W.state.spotLightMap,Ut.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=gl(T.state.lightProbeGridArray),V.currentProgram=se,V.uniformsList=null,se}function Zh(b,O,Z,V,W){const St=vt.get(b),Nt=St.currentProgram.id+","+V+","+W;let Mt=St.programVariants.get(Nt);return Mt===void 0?(Mt=ts(b,O,Z),St.programVariants.set(Nt,Mt)):(St.currentProgram=Mt,St.uniformsList=null,St.outputColorSpace=V,St.toneMapping=W),Mt}function _l(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Ar.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function vl(b,O){const Z=vt.get(b);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function $h(b,O,Z,V,W){O.isScene!==!0&&(O=Zt),Ct.resetTextureUnits();const St=O.fog,Nt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,Mt=rt===null?P.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ae.workingColorSpace,Pt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ot=A.get(V.envMap||Nt,Pt),Jt=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,se=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!Z.morphAttributes.position,re=!!Z.morphAttributes.normal,Re=!!Z.morphAttributes.color;let xe=zn;V.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(xe=P.toneMapping);const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ke=_e!==void 0?_e.length:0,Ft=vt.get(V),Ze=T.state.lights;if(ut===!0&&(Et===!0||b!==et)){const Se=b===et&&V.id===$;X.setState(V,b,Se)}let ue=!1,ai=!1;V.version===Ft.__version?Ft.needsLights&&Ft.lightsStateVersion!==Ze.state.version||W.isBatchedMesh&&Ft.batching===!1||!W.isBatchedMesh&&Ft.batching===!0||W.isBatchedMesh&&Ft.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ft.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ft.instancing===!1||!W.isInstancedMesh&&Ft.instancing===!0||W.isSkinnedMesh&&Ft.skinning===!1||!W.isSkinnedMesh&&Ft.skinning===!0||W.isInstancedMesh&&Ft.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ft.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ft.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ft.instancingMorph===!1&&W.morphTexture!==null||Ft.envMap!==Ot||V.fog===!0&&Ft.fog!==St||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==X.numPlanes||Ft.numIntersection!==X.numIntersection)||Ft.vertexAlphas!==Jt||Ft.vertexTangents!==se||Ft.morphTargets!==Ut||Ft.morphNormals!==re||Ft.morphColors!==Re||Ft.morphTargetsCount!==ke||Ft.numLightProbeGrids!==gl(T.state.lightProbeGridArray)?ue=!0:(Ft.outputColorSpace!==Mt||Ft.toneMapping!==xe)&&(ai=!0):(ue=!0,Ft.__version=V.version);let Ge=Ft.currentProgram;(ue===!0||ai===!0)&&(Ge=ai===!0?Zh(V,O,W,Mt,xe):ts(V,O,W),F&&V.isNodeMaterial&&F.onUpdateProgram(V,Ge,Ft));let Us=!1,Hn=!1,oi=!1;const le=Ge.getUniforms(),Ue=Ft.uniforms;if(it.useProgram(Ge.program)&&(Us=!0,Hn=!0,oi=!0),V.id!==$&&($=V.id,Hn=!0),Us||et!==b){it.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),le.setValue(R,"projectionMatrix",b.projectionMatrix),le.setValue(R,"viewMatrix",b.matrixWorldInverse);const De=le.map.cameraPosition;De!==void 0&&De.setValue(R,kt.setFromMatrixPosition(b.matrixWorld)),Dt.logarithmicDepthBuffer&&le.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),et!==b&&(et=b,Hn=!0,oi=!0)}if(Ft.needsLights&&(Ze.state.sunShadowMap.length>0&&le.setValue(R,"sunShadowMap",Ze.state.sunShadowMap,Ct),Ze.state.directionalShadowMap.length>0&&le.setValue(R,"directionalShadowMap",Ze.state.directionalShadowMap,Ct),Ze.state.spotShadowMap.length>0&&le.setValue(R,"spotShadowMap",Ze.state.spotShadowMap,Ct),Ze.state.pointShadowMap.length>0&&le.setValue(R,"pointShadowMap",Ze.state.pointShadowMap,Ct)),W.isSkinnedMesh){le.setOptional(R,W,"bindMatrix"),le.setOptional(R,W,"bindMatrixInverse");const Se=W.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),le.setValue(R,"boneTexture",Se.boneTexture,Ct))}W.isBatchedMesh&&(le.setOptional(R,W,"batchingTexture"),le.setValue(R,"batchingTexture",W._matricesTexture,Ct),le.setOptional(R,W,"batchingIdTexture"),le.setValue(R,"batchingIdTexture",W._indirectTexture,Ct),le.setOptional(R,W,"batchingColorTexture"),W._colorsTexture!==null&&le.setValue(R,"batchingColorTexture",W._colorsTexture,Ct));const pn=Z.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&q.update(W,Z,Ge),(Hn||Ft.receiveShadow!==W.receiveShadow)&&(Ft.receiveShadow=W.receiveShadow,le.setValue(R,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Ue.envMapIntensity.value=O.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=jg()),Hn){if(le.setValue(R,"toneMappingExposure",P.toneMappingExposure),Ft.needsLights&&Kh(Ue,oi),St&&V.fog===!0&&ft.refreshFogUniforms(Ue,St),ft.refreshMaterialUniforms(Ue,V,yt,Bt,T.state.transmissionRenderTarget[b.id]),Ft.needsLights&&Ft.numLightProbeGrids>0){const Se=x;let De=0;for(const Cn of T.state.lightProbeGridArray)Cn.texture!==null&&(Se.textures[De]=Cn.texture,Se.min[De]=Cn.boundingBox.min,Se.max[De]=Cn.boundingBox.max,Se.resolution[De]=Cn.resolution,De++);for(const Cn in Se)Se[Cn].length=De;Ue.probesSH.value=Se.textures,Ue.probesMin.value=Se.min,Ue.probesMax.value=Se.max,Ue.probesResolution.value=Se.resolution}Ar.upload(R,_l(Ft),Ue,Ct)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ar.upload(R,_l(Ft),Ue,Ct),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(R,"center",W.center),le.setValue(R,"modelViewMatrix",W.modelViewMatrix),le.setValue(R,"normalMatrix",W.normalMatrix),le.setValue(R,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const Se=V.uniformsGroups;for(let De=0,Cn=Se.length;De<Cn;De++){const Ml=Se[De];It.update(Ml,Ge),It.bind(Ml,Ge)}}return Ge}function Kh(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Jh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(b,O,Z){const V=vt.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),vt.get(b.texture).__webglTexture=O,vt.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const Z=vt.get(b);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Z=0){rt=b,K=O,z=Z;let V=null,W=!1,St=!1;if(b){const Mt=vt.get(b);if(Mt.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(R.FRAMEBUFFER,Mt.__webglFramebuffer),Q.copy(b.viewport),Tt.copy(b.scissor),Lt=b.scissorTest,it.viewport(Q),it.scissor(Tt),it.setScissorTest(Lt),$=-1;return}else if(Mt.__webglFramebuffer===void 0)Ct.setupRenderTarget(b);else if(Mt.__hasExternalTextures)Ct.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Jt=b.depthTexture;if(Mt.__boundDepthTexture!==Jt){if(Jt!==null&&vt.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(b)}}const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(St=!0);const Ot=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?V=Ot[O][Z]:V=Ot[O],W=!0):b.samples>0&&Ct.useMultisampledRTT(b)===!1?V=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?V=Ot[Z]:V=Ot,Q.copy(b.viewport),Tt.copy(b.scissor),Lt=b.scissorTest}else Q.copy(Vt).multiplyScalar(yt).floor(),Tt.copy(Kt).multiplyScalar(yt).floor(),Lt=jt;if(Z!==0&&(V=k),it.bindFramebuffer(R.FRAMEBUFFER,V)&&it.drawBuffers(b,V),it.viewport(Q),it.scissor(Tt),it.setScissorTest(Lt),W){const Mt=vt.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,Z)}else if(St){const Mt=O;for(let Pt=0;Pt<b.textures.length;Pt++){const Ot=vt.get(b.textures[Pt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Pt,Ot.__webglTexture,Z,Mt)}}else if(b!==null&&Z!==0){const Mt=vt.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Mt.__webglTexture,Z)}$=-1};function xl(b){const O=vt.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=Dt.textureFormatReadable(b.format),O.__typeReadable=Dt.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,Z,V,W,St,Nt,Mt=0){if(!(b&&b.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt],Array.isArray(Pt)&&(Pt=Pt[0])),Pt){it.bindFramebuffer(R.FRAMEBUFFER,Pt);try{const Ot=b.textures[Mt],Jt=Ot.format,se=Ot.type;b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Mt);const Ut=xl(Ot);if(Ut.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-V&&Z>=0&&Z<=b.height-W&&R.readPixels(O,Z,V,W,ot.convert(Jt),ot.convert(se),St)}finally{const Ot=rt!==null?vt.get(rt).__webglFramebuffer:null;it.bindFramebuffer(R.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,O,Z,V,W,St,Nt,Mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt],Array.isArray(Pt)&&(Pt=Pt[0])),Pt)if(O>=0&&O<=b.width-V&&Z>=0&&Z<=b.height-W){it.bindFramebuffer(R.FRAMEBUFFER,Pt);const Ot=b.textures[Mt],Jt=Ot.format,se=Ot.type;b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Mt);const Ut=xl(Ot);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,re),R.bufferData(R.PIXEL_PACK_BUFFER,St.byteLength,R.STREAM_READ),R.readPixels(O,Z,V,W,ot.convert(Jt),ot.convert(se),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);const Re=rt!==null?vt.get(rt).__webglFramebuffer:null;it.bindFramebuffer(R.FRAMEBUFFER,Re);const xe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Lu(R,xe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,re),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,St),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(re),R.deleteSync(xe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Z=0){const V=Math.pow(2,-Z),W=Math.floor(b.image.width*V),St=Math.floor(b.image.height*V),Nt=O!==null?O.x:0,Mt=O!==null?O.y:0;Ct.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,Nt,Mt,W,St),it.unbindTexture()},this.copyTextureToTexture=function(b,O,Z=null,V=null,W=0,St=0){let Nt,Mt,Pt,Ot,Jt,se,Ut,re,Re;const xe=b.isCompressedTexture?b.mipmaps[St]:b.image;if(Z!==null)Nt=Z.max.x-Z.min.x,Mt=Z.max.y-Z.min.y,Pt=Z.isBox3?Z.max.z-Z.min.z:1,Ot=Z.min.x,Jt=Z.min.y,se=Z.isBox3?Z.min.z:0;else{const le=Math.pow(2,-W);Nt=Math.floor(xe.width*le),Mt=Math.floor(xe.height*le),b.isDataArrayTexture?Pt=xe.depth:b.isData3DTexture?Pt=Math.floor(xe.depth*le):Pt=1,Ot=0,Jt=0,se=0}V!==null?(Ut=V.x,re=V.y,Re=V.z):(Ut=0,re=0,Re=0);const _e=ot.convert(O.format),ke=ot.convert(O.type);let Ft;O.isData3DTexture?(Ct.setTexture3D(O,0),Ft=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ct.setTexture2DArray(O,0),Ft=R.TEXTURE_2D_ARRAY):(Ct.setTexture2D(O,0),Ft=R.TEXTURE_2D),it.activeTexture(R.TEXTURE0),it.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),it.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),it.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const Ze=it.getParameter(R.UNPACK_ROW_LENGTH),ue=it.getParameter(R.UNPACK_IMAGE_HEIGHT),ai=it.getParameter(R.UNPACK_SKIP_PIXELS),Ge=it.getParameter(R.UNPACK_SKIP_ROWS),Us=it.getParameter(R.UNPACK_SKIP_IMAGES);it.pixelStorei(R.UNPACK_ROW_LENGTH,xe.width),it.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xe.height),it.pixelStorei(R.UNPACK_SKIP_PIXELS,Ot),it.pixelStorei(R.UNPACK_SKIP_ROWS,Jt),it.pixelStorei(R.UNPACK_SKIP_IMAGES,se);const Hn=b.isDataArrayTexture||b.isData3DTexture,oi=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const le=vt.get(b),Ue=vt.get(O),pn=vt.get(le.__renderTarget),Se=vt.get(Ue.__renderTarget);it.bindFramebuffer(R.READ_FRAMEBUFFER,pn.__webglFramebuffer),it.bindFramebuffer(R.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let De=0;De<Pt;De++)Hn&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,W,se+De),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(O).__webglTexture,St,Re+De)),R.blitFramebuffer(Ot,Jt,Ot+Nt,Jt+Mt,Ut,re,Ut+Nt,re+Mt,R.DEPTH_BUFFER_BIT,R.NEAREST);it.bindFramebuffer(R.READ_FRAMEBUFFER,null),it.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||vt.has(b)){const le=vt.get(b),Ue=vt.get(O);it.bindFramebuffer(R.READ_FRAMEBUFFER,I),it.bindFramebuffer(R.DRAW_FRAMEBUFFER,H);for(let pn=0;pn<Pt;pn++)Hn?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,le.__webglTexture,W,se+pn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,le.__webglTexture,W),oi?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ue.__webglTexture,St,Re+pn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ue.__webglTexture,St),W!==0?R.blitFramebuffer(Ot,Jt,Ot+Nt,Jt+Mt,Ut,re,Ut+Nt,re+Mt,R.COLOR_BUFFER_BIT,R.NEAREST):oi?R.copyTexSubImage3D(Ft,St,Ut,re,Re+pn,Ot,Jt,Nt,Mt):R.copyTexSubImage2D(Ft,St,Ut,re,Ot,Jt,Nt,Mt);it.bindFramebuffer(R.READ_FRAMEBUFFER,null),it.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else oi?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Ft,St,Ut,re,Re,Nt,Mt,Pt,_e,ke,xe.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(Ft,St,Ut,re,Re,Nt,Mt,Pt,_e,xe.data):R.texSubImage3D(Ft,St,Ut,re,Re,Nt,Mt,Pt,_e,ke,xe):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,St,Ut,re,Nt,Mt,_e,ke,xe.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,St,Ut,re,xe.width,xe.height,_e,xe.data):R.texSubImage2D(R.TEXTURE_2D,St,Ut,re,Nt,Mt,_e,ke,xe);it.pixelStorei(R.UNPACK_ROW_LENGTH,Ze),it.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ue),it.pixelStorei(R.UNPACK_SKIP_PIXELS,ai),it.pixelStorei(R.UNPACK_SKIP_ROWS,Ge),it.pixelStorei(R.UNPACK_SKIP_IMAGES,Us),St===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&R.generateMipmap(Ft),it.unbindTexture()},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&Ct.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ct.setTextureCube(b,0):b.isData3DTexture?Ct.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ct.setTexture2DArray(b,0):Ct.setTexture2D(b,0),it.unbindTexture()},this.resetState=function(){K=0,z=0,rt=null,it.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const Rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const e_=new sl(-1,1,1,-1,0,1);class n_ extends we{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}}const i_=new n_;class al{constructor(t){this._mesh=new At(i_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class qh extends Ji{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ds.clone(t.uniforms),this.material=new qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new al(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Oc extends Ji{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class s_ extends Ji{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class r_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qh(Rr),this.copyPass.material.blending=fi,this.timer=new rd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Oc!==void 0&&(a instanceof Oc?n=!0:a instanceof s_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class a_ extends Ji{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Gt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const o_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Zi extends Ji{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,a,{type:je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new tn(r,a,{type:je,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new tn(r,a,{type:je,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=o_;this.highPassUniforms=Ds.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ds.clone(Rr.uniforms),this.blendMaterial=new qe({uniforms:this.copyUniforms,vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,premultipliedAlpha:!0,blending:ge,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Gt,this._oldClearAlpha=1,this._basic=new fe,this._fsQuad=new al(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new qe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Zi.BlurDirectionX=new at(1,0);Zi.BlurDirectionY=new at(0,1);const mr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class l_ extends Ji{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ds.clone(mr.uniforms),this.material=new Lh({name:mr.name,uniforms:this.uniforms,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader}),this._fsQuad=new al(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Po?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===No?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Io&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const an=Math.PI*2;function si(i=1){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function en(i=512){const t=document.createElement("canvas");return t.width=i,t.height=i,[t,t.getContext("2d",{willReadFrequently:!0})]}function ze(i,{repeat:t=[1,1],srgb:e=!0,aniso:n=4}={}){const s=new gh(i);return s.wrapS=s.wrapT=Pr,s.repeat.set(t[0],t[1]),s.anisotropy=n,s.colorSpace=e?Je:On,s.needsUpdate=!0,s}function jn(i,t,e,n,s=.05,r=!0){for(let a=0;a<n;a++){const o=e()*t,l=e()*t,c=e()*1.7+.3;i.fillStyle=r?`rgba(255,255,255,${s*e()})`:`rgba(0,0,0,${s*e()})`,i.beginPath(),i.arc(o,l,c,0,an),i.fill()}}function Ms(i,t,e,n,s,r=[30,120],a=.12){for(let o=0;o<n;o++){const l=e()*t,c=e()*t,h=r[0]+e()*(r[1]-r[0]),u=i.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,s.replace("ALPHA",(a*e()).toFixed(3))),u.addColorStop(1,s.replace("ALPHA","0")),i.fillStyle=u,i.beginPath(),i.arc(l,c,h,0,an),i.fill()}}function Ro(i,t,e,n,s="rgba(10,12,14,0.4)"){i.strokeStyle=s,i.lineCap="round";for(let r=0;r<n;r++){let a=e()*t,o=e()*t,l=e()*an;i.lineWidth=.6+e()*1.6,i.beginPath(),i.moveTo(a,o);const c=4+Math.floor(e()*8);for(let h=0;h<c;h++)l+=(e()-.5)*1.3,a+=Math.cos(l)*(6+e()*20),o+=Math.sin(l)*(6+e()*20),i.lineTo(a,o);i.stroke()}}function ol(i,t=2.2){const e=i.width,n=i.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,e,e).data,[s,r]=en(e),a=r.createImageData(e,e),o=(l,c)=>{const h=((c+e)%e*e+(l+e)%e)*4;return(n[h]*.299+n[h+1]*.587+n[h+2]*.114)/255};for(let l=0;l<e;l++)for(let c=0;c<e;c++){const h=o(c+1,l)-o(c-1,l),u=o(c,l+1)-o(c,l-1),f=(l*e+c)*4;a.data[f]=Math.max(0,Math.min(255,128-h*255*t)),a.data[f+1]=Math.max(0,Math.min(255,128-u*255*t)),a.data[f+2]=255,a.data[f+3]=255}return r.putImageData(a,0,0),s}function Ra({size:i=512,base:t="#6c7175",repeat:e=[2,2],wet:n=!1,seed:s=3,grime:r=1}={}){const a=si(s),[o,l]=en(i);l.fillStyle=t,l.fillRect(0,0,i,i),jn(l,i,a,14e3,.05,!0),jn(l,i,a,9e3,.06,!1),Ms(l,i,a,26,"rgba(35,39,42,ALPHA)",[30,150],.2*r),Ms(l,i,a,18,"rgba(190,198,204,ALPHA)",[20,90],.09),l.strokeStyle="rgba(24,27,30,0.35)",l.lineWidth=2;const c=i/2;l.beginPath(),l.moveTo(c,0),l.lineTo(c,i),l.stroke(),l.beginPath(),l.moveTo(0,c),l.lineTo(i,c),l.stroke(),Ro(l,i,a,14+Math.floor(r*8)),n&&Ms(l,i,a,12,"rgba(8,13,19,ALPHA)",[40,150],.4);const[h,u]=en(i);if(u.fillStyle=n?"#b4b4b4":"#cfcfcf",u.fillRect(0,0,i,i),jn(u,i,a,9e3,.25,!0),jn(u,i,a,7e3,.25,!1),n)for(let f=0;f<14;f++){const d=a()*i,m=a()*i,v=30+a()*110,g=u.createRadialGradient(d,m,0,d,m,v);g.addColorStop(0,"rgba(28,28,28,0.9)"),g.addColorStop(.6,"rgba(70,70,70,0.55)"),g.addColorStop(1,"rgba(160,160,160,0)"),u.fillStyle=g,u.beginPath(),u.arc(d,m,v,0,an),u.fill()}return Ro(u,i,a,12,"rgba(235,235,235,0.8)"),{map:ze(o,{repeat:e}),normalMap:ze(ol(o,1.1),{repeat:e,srgb:!1}),roughnessMap:ze(h,{repeat:e,srgb:!1})}}function zi({size:i=512,base:t="#565c63",repeat:e=[2,2],seed:n=11,rust:s=.25}={}){const r=si(n),[a,o]=en(i);o.fillStyle=t,o.fillRect(0,0,i,i);for(let h=0;h<2600;h++){const u=r()*i;o.strokeStyle=r()>.5?`rgba(255,255,255,${r()*.035})`:`rgba(0,0,0,${r()*.05})`,o.lineWidth=r()*1.2+.2,o.beginPath(),o.moveTo(0,u),o.lineTo(i,u+(r()-.5)*3),o.stroke()}Ms(o,i,r,20,"rgba(18,20,22,ALPHA)",[15,80],.25);for(let h=0;h<16*s*4;h++){const u=r()*i;o.fillStyle=`rgba(${120+r()*40|0},${60+r()*25|0},${28+r()*15|0},${.05+r()*.16})`,o.fillRect(u,r()*i*.5,1+r()*4,30+r()*160)}Ro(o,i,r,8,"rgba(12,14,16,0.5)");const[l,c]=en(i);return c.fillStyle="#8f8f8f",c.fillRect(0,0,i,i),jn(c,i,r,8e3,.35,!0),jn(c,i,r,8e3,.3,!1),{map:ze(a,{repeat:e}),normalMap:ze(ol(a,1.4),{repeat:e,srgb:!1}),roughnessMap:ze(l,{repeat:e,srgb:!1})}}function gr({size:i=512,color:t="#2f5a63",repeat:e=[2,1],seed:n=21}={}){const s=si(n),[r,a]=en(i);a.fillStyle=t,a.fillRect(0,0,i,i);const o=i/32;for(let h=0;h<i;h+=o){const u=a.createLinearGradient(h,0,h+o,0);u.addColorStop(0,"rgba(0,0,0,0.34)"),u.addColorStop(.35,"rgba(255,255,255,0.1)"),u.addColorStop(.6,"rgba(255,255,255,0.02)"),u.addColorStop(1,"rgba(0,0,0,0.3)"),a.fillStyle=u,a.fillRect(h,0,o,i)}for(let h=0;h<90;h++){const u=s()*i,f=s()*i,d=a.createRadialGradient(u,f,0,u,f,8+s()*50);d.addColorStop(0,`rgba(${80+s()*50|0},${42+s()*26|0},${20+s()*16|0},${.06+s()*.2})`),d.addColorStop(1,"rgba(60,30,15,0)"),a.fillStyle=d,a.beginPath(),a.arc(u,f,60,0,an),a.fill();const m=f+s()*120;a.fillStyle=`rgba(90,45,22,${.05+s()*.1})`,a.fillRect(u,m,1+s()*3,20+s()*90)}a.save(),a.globalAlpha=.5,a.fillStyle="rgba(230,232,228,0.75)",a.font='bold 26px "Arial Narrow", sans-serif',a.letterSpacing="4px",a.fillText("MSKU 701144 2",26,i-40),a.font="16px monospace",a.fillText("MAX GROSS 30,480 KG",26,i-18),a.restore();const[l,c]=en(i);return c.fillStyle="#a5a5a5",c.fillRect(0,0,i,i),jn(c,i,s,6e3,.3,!0),jn(c,i,s,6e3,.35,!1),{map:ze(r,{repeat:e}),normalMap:ze(ol(r,1.8),{repeat:e,srgb:!1}),roughnessMap:ze(l,{repeat:e,srgb:!1})}}function c_({size:i=256,seed:t=5}={}){const e=si(t),[n,s]=en(i);s.fillStyle="#111",s.fillRect(0,0,i,i),s.save(),s.translate(i/2,i/2),s.rotate(-Math.PI/4);const r=i/6;for(let o=-8;o<8;o++)s.fillStyle=o%2?"#d3a133":"#171717",s.fillRect(o*r,-i,r,i*2);s.restore();for(let o=0;o<900;o++)s.fillStyle=`rgba(28,30,32,${e()*.35})`,s.beginPath(),s.arc(e()*i,e()*i,e()*4,0,an),s.fill();Ms(s,i,e,8,"rgba(30,25,15,ALPHA)",[10,40],.4);const a=ze(n,{repeat:[1,1]});return{map:a,roughnessMap:a}}function vn({size:i=128,color:t="255,255,255",core:e=.12}={}){const[n,s]=en(i),r=s.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return r.addColorStop(0,`rgba(${t},1)`),r.addColorStop(e,`rgba(${t},0.75)`),r.addColorStop(.45,`rgba(${t},0.16)`),r.addColorStop(1,`rgba(${t},0)`),s.fillStyle=r,s.fillRect(0,0,i,i),ze(n,{repeat:[1,1]})}function Yh({size:i=128}={}){const[t,e]=en(i);e.translate(i/2,i/2);const n=e.createRadialGradient(0,0,0,0,0,i/2);n.addColorStop(0,"rgba(255,255,245,1)"),n.addColorStop(.18,"rgba(255,232,170,0.95)"),n.addColorStop(.45,"rgba(255,150,50,0.35)"),n.addColorStop(1,"rgba(255,90,20,0)"),e.fillStyle=n,e.fillRect(-i/2,-i/2,i,i),e.globalCompositeOperation="lighter";for(let s=0;s<6;s++){const r=s/6*an+.2,a=i*(s%2?.28:.47);e.save(),e.rotate(r);const o=e.createLinearGradient(0,0,a,0);o.addColorStop(0,"rgba(255,240,200,0.9)"),o.addColorStop(1,"rgba(255,120,40,0)"),e.fillStyle=o,e.beginPath(),e.moveTo(0,-3.2),e.lineTo(a,0),e.lineTo(0,3.2),e.closePath(),e.fill(),e.restore()}return ze(t,{repeat:[1,1]})}function h_({size:i=128}={}){const t=si(99),[e,n]=en(i),s=i/2,r=n.createRadialGradient(s,s,1,s,s,i*.28);r.addColorStop(0,"rgba(2,2,3,0.98)"),r.addColorStop(.4,"rgba(8,8,9,0.9)"),r.addColorStop(.68,"rgba(20,20,21,0.55)"),r.addColorStop(1,"rgba(30,30,30,0)"),n.fillStyle=r,n.beginPath(),n.arc(s,s,i*.3,0,an),n.fill(),n.strokeStyle="rgba(210,205,195,0.28)";for(let a=0;a<14;a++){const o=t()*an,l=i*(.08+t()*.24);n.lineWidth=.6+t(),n.beginPath(),n.moveTo(s,s),n.lineTo(s+Math.cos(o)*l,s+Math.sin(o)*l),n.stroke()}return n.strokeStyle="rgba(240,240,235,0.22)",n.lineWidth=1.4,n.beginPath(),n.arc(s,s,i*.17,0,an),n.stroke(),ze(e,{repeat:[1,1]})}function u_({text:i="BLACKSITE",color:t="#ffb45c",size:e=1024}={}){const[n,s]=en(e),r=e/4;return n.height=r,s.clearRect(0,0,e,r),s.font=`700 ${r*.62}px "Arial Narrow", "Helvetica Neue", sans-serif`,s.textAlign="center",s.textBaseline="middle",s.letterSpacing="14px",s.shadowColor=t,s.shadowBlur=40,s.fillStyle=t,s.fillText(i,e/2,r*.52),s.shadowBlur=0,s.fillStyle="rgba(255,255,255,0.55)",s.font="12px monospace",s.letterSpacing="6px",s.fillText("// RESTRICTED ACCESS //",e/2,r*.9),ze(n,{repeat:[1,1]})}function Cr({size:i=512,cols:t=8,rows:e=12,seed:n=41}={}){const s=si(n),[r,a]=en(i);a.fillStyle="#070b10",a.fillRect(0,0,i,i);const o=i/t,l=i/e;for(let c=0;c<e;c++)for(let h=0;h<t;h++){const u=s()>.52,f=s()>.35;u?a.fillStyle=f?`rgba(255,${170+s()*40|0},${90+s()*40|0},${.55+s()*.45})`:`rgba(${140+s()*40|0},${200+s()*30|0},255,${.4+s()*.4})`:a.fillStyle=`rgba(20,28,38,${.5+s()*.4})`,a.fillRect(h*o+o*.2,c*l+l*.22,o*.6,l*.5)}a.fillStyle="rgba(0,0,0,0.35)";for(let c=0;c<i;c+=o)a.fillRect(c,0,3,i);return ze(r,{repeat:[1,1]})}function _r({kind:i="stencil",text:t="07",color:e="#c9a35a",size:n=512}={}){const s=si(13),[r,a]=en(n);a.clearRect(0,0,n,n),a.strokeStyle=e,a.fillStyle=e,a.lineWidth=n*.035,a.textAlign="center",a.textBaseline="middle",i==="stencil"?(a.font=`700 ${n*.62}px "Arial Narrow", sans-serif`,a.strokeText(t,n/2,n/2),a.globalAlpha=.24,a.fillText(t,n/2,n/2)):i==="arrow"?(a.beginPath(),a.moveTo(n*.15,n*.5),a.lineTo(n*.55,n*.5),a.lineWidth=n*.08,a.stroke(),a.beginPath(),a.moveTo(n*.5,n*.25),a.lineTo(n*.82,n*.5),a.lineTo(n*.5,n*.75),a.closePath(),a.fill()):i==="zone"&&(a.lineWidth=n*.05,a.setLineDash([n*.07,n*.05]),a.strokeRect(n*.1,n*.1,n*.8,n*.8),a.setLineDash([]),a.font=`700 ${n*.16}px "Arial Narrow", sans-serif`,a.fillText(t,n/2,n/2)),a.globalCompositeOperation="destination-out";for(let o=0;o<1600;o++)a.fillStyle=`rgba(0,0,0,${s()*.9})`,a.beginPath(),a.arc(s()*n,s()*n,s()*1.7,0,an),a.fill();return a.globalCompositeOperation="source-over",ze(r,{repeat:[1,1]})}function f_({size:i=128}={}){const t=si(77),[e,n]=en(i),s=i/2,r=n.createRadialGradient(s,s,0,s,s,i*.3);r.addColorStop(0,"rgba(120,6,12,0.9)"),r.addColorStop(.6,"rgba(70,2,7,0.5)"),r.addColorStop(1,"rgba(40,0,4,0)"),n.fillStyle=r,n.beginPath(),n.arc(s,s,i*.3,0,an),n.fill();for(let a=0;a<24;a++){const o=t()*an,l=i*(.1+t()*.4);n.fillStyle=`rgba(80,4,8,${.2+t()*.5})`,n.beginPath(),n.arc(s+Math.cos(o)*l,s+Math.sin(o)*l,t()*4+1,0,an),n.fill()}return ze(e,{repeat:[1,1]})}function d_(i){const t=new Sn(280,32,20),e=new qe({side:Be,depthWrite:!1,fog:!1,uniforms:{topColor:{value:new Gt("#03060c")},midColor:{value:new Gt("#0b1726")},horizonColor:{value:new Gt("#233448")},glowColor:{value:new Gt("#3b526c")}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vDir;
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 horizonColor;
      uniform vec3 glowColor;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
        return v;
      }

      void main() {
        vec3 dir = normalize(vDir);
        float h = clamp(dir.y, -0.1, 1.0);
        vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
        col = mix(col, topColor, smoothstep(0.2, 0.75, h));

        // Broad cloud bands lit from the horizon.
        vec2 uv = dir.xz / max(dir.y + 0.28, 0.08);
        float clouds = fbm(uv * 0.9 + vec2(2.0, 5.0));
        clouds = smoothstep(0.46, 0.86, clouds) * smoothstep(0.02, 0.3, h);
        col += glowColor * clouds * 0.16;

        // Horizon light pollution.
        float glow = pow(1.0 - clamp(h, 0.0, 1.0), 18.0);
        col += vec3(0.16, 0.11, 0.06) * glow * 0.9;

        gl_FragColor = vec4(col, 1.0);
      }
    `}),n=new At(t,e);n.renderOrder=-100,n.frustumCulled=!1,i.add(n);const s=(()=>{let E=1337;return()=>(E=E*1664525+1013904223>>>0)/4294967296})(),r=1100,a=new Float32Array(r*3),o=new Float32Array(r);for(let E=0;E<r;E++){const T=s()*Math.PI*2,_=Math.acos(.08+s()*.9),y=250;a[E*3]=Math.sin(_)*Math.cos(T)*y,a[E*3+1]=Math.cos(_)*y,a[E*3+2]=Math.sin(_)*Math.sin(T)*y,o[E]=s()}const l=new we;l.setAttribute("position",new We(a,3));const c=new Jo({size:1.2,map:vn({size:64,color:"210,228,255",core:.08}),transparent:!0,opacity:.75,depthWrite:!1,sizeAttenuation:!0,blending:ge,fog:!1,color:13624575}),h=new yo(l,c);h.renderOrder=-99,i.add(h);const u=new C(-.48,.34,-.81).normalize(),f=new Me,d=new At(new Wi(7,40),new fe({color:"#e8f2ff",fog:!1,toneMapped:!1}));d.position.copy(u).multiplyScalar(242),d.lookAt(0,0,0),f.add(d);const m=new sn(new Qe({map:vn({size:256,color:"185,214,255",core:.02}),transparent:!0,opacity:.6,depthWrite:!1,depthTest:!1,blending:ge,fog:!1,toneMapped:!1}));m.position.copy(d.position),m.scale.setScalar(26),m.material.opacity=.32,f.add(m),f.renderOrder=-98,i.add(f);const v=(()=>{let E=90210;return()=>(E=E*1664525+1013904223>>>0)/4294967296})(),g=Cr({seed:41,cols:8,rows:14}),p=Cr({seed:87,cols:6,rows:10}),S=Cr({seed:133,cols:10,rows:16}),w=[new fe({map:g,color:9413818,fog:!0}),new fe({map:p,color:8163238,fog:!0}),new fe({map:S,color:10004925,fog:!0})],x=new Me;for(let E=0;E<42;E++){const T=E/42*Math.PI*2+v()*.12,_=62+v()*40,y=10+v()*46,N=5+v()*10,P=5+v()*10,L=new At(new Ne(N,y,P),w[E%3]);if(L.position.set(Math.cos(T)*_,y/2-1,Math.sin(T)*_),L.rotation.y=v()*Math.PI,x.add(L),E%5===0){const F=new At(new Sn(.28,6,6),new fe({color:16723516,fog:!1,toneMapped:!1}));F.position.set(L.position.x,y+.2,L.position.z),F.userData.beacon=!0,x.add(F)}}return i.add(x),{sky:n,stars:h,moon:f,moonDir:u,city:x}}const p_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new at(1,1)},uDamage:{value:0},uFade:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uDamage;
    uniform float uFade;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 d = uv - 0.5;
      float r2 = dot(d, d);

      // Very subtle lens fringing, stronger toward the edges.
      float ca = r2 * 0.012;
      vec3 col;
      col.r = texture2D(tDiffuse, uv + d * ca).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - d * ca).b;

      // Filmic contrast + slight desaturated shadow grade.
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, 1.06);
      col = (col - 0.5) * 1.055 + 0.5;
      col += vec3(0.012, 0.018, 0.028) * (1.0 - smoothstep(0.0, 0.3, l));

      // Vignette.
      float vig = smoothstep(1.02, 0.28, length(d) * 1.24);
      col *= mix(0.68, 1.0, vig);

      // Damage wash.
      col = mix(col, vec3(0.42, 0.02, 0.05), uDamage * smoothstep(0.1, 0.75, length(d)) * 0.5);

      // Film grain.
      float grain = fract(sin(dot(uv * uResolution + uTime * 37.0, vec2(12.9898, 78.233))) * 43758.5453);
      col += (grain - 0.5) * 0.022;

      col = mix(col, vec3(0.0), uFade);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `};function m_(i){const t=new Or,e=new Sn(50,24,16),n=e.attributes.position,s=new Float32Array(n.count*3),r=new Gt("#101d2e"),a=new Gt("#31485f"),o=new Gt("#070b11"),l=new Gt;for(let f=0;f<n.count;f++){const d=n.getY(f)/50;d>0?l.copy(a).lerp(r,Math.min(1,d*1.6)):l.copy(a).lerp(o,Math.min(1,-d*2.2)),s[f*3]=l.r,s[f*3+1]=l.g,s[f*3+2]=l.b}e.setAttribute("color",new We(s,3)),t.add(new At(e,new fe({vertexColors:!0,side:Be})));const c=(f,d,m,v,g,p,S)=>{const w=new At(new Fe(g,p),new fe({color:f,side:Ee}));w.position.set(d,m,v),w.rotation.y=S,t.add(w)};c(16753754,-18,12,-12,10,5,Math.PI/2.4),c(5224703,16,16,14,8,10,-Math.PI/2.6),c(16767392,4,22,-20,14,3,0),c(8033717,0,3,30,22,8,0);const h=new Yi(i),u=h.fromScene(t,.03,.1,120);return h.dispose(),e.dispose(),u.texture}function g_(i){const t=new Or,e=new At(new Sn(10,24,16),new fe({color:new Gt(.055,.075,.11),side:Be}));t.add(e);const n=(a,o,l,c,h,u,f=0)=>{const d=new At(new Fe(h,u),new fe({color:a,side:Ee}));d.position.set(o,l,c),d.rotation.y=f,t.add(d)};n(new Gt(7.5,6.2,4.6),-2.6,2.4,3.2,3.4,4.2,.5),n(new Gt(1.3,2.9,5.2),3.4,1.7,1.4,2.2,5,-.9),n(new Gt(5,2.6,1.2),1.2,-2.2,2.4,4,1.6,.2),n(new Gt(9,9,9),0,3.6,-.6,4.5,.35,0),n(new Gt(.35,.55,.9),-3.6,.4,-2.6,3,3,.9);const s=new Yi(i),r=s.fromScene(t,.02,.1,40);return s.dispose(),e.geometry.dispose(),r.texture}class __{constructor(t){this.canvas=t,this.coarse=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,this.mobile=this.coarse||Math.min(window.innerWidth,window.innerHeight)<720,this.maxDpr=this.mobile?1.5:1.75,this.pixelRatio=Math.min(window.devicePixelRatio||1,this.maxDpr);const e=new t_({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1,alpha:!1});e.setPixelRatio(this.pixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.outputColorSpace=Je,e.toneMapping=Vr,e.toneMappingExposure=1.32,e.shadowMap.enabled=!0,e.shadowMap.type=Xc,e.info.autoReset=!0,this.renderer=e,this.scene=new Or,this.scene.fog=new Zo(858150,this.mobile?.016:.0175),this.camera=new cn(76,window.innerWidth/window.innerHeight,.02,420),this.camera.position.set(0,1.68,14),this.weaponScene=new Or,this.weaponCamera=new cn(76,window.innerWidth/window.innerHeight,.01,12),this.weaponScene.environment=g_(e),this.weaponScene.environmentIntensity=1.15,this.scene.environment=m_(e),this.scene.environmentIntensity=.55,this._buildLights(),this.sky=d_(this.scene),this._buildComposer(),this.frameTimes=[],this.qualityScale=1,this._lastResize=0,window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),240))}_buildLights(){const t=this.scene;this.hemi=new lc(6128301,724499,1.15),t.add(this.hemi);const e=new fr(12374783,3.1);e.position.set(34,46,26),e.target.position.set(-4,0,-10),e.castShadow=!0,e.shadow.mapSize.set(this.mobile?1024:2048,this.mobile?1024:2048),e.shadow.camera.near=2,e.shadow.camera.far=140,e.shadow.camera.left=-42,e.shadow.camera.right=42,e.shadow.camera.top=42,e.shadow.camera.bottom=-42,e.shadow.bias=-6e-4,e.shadow.normalBias=.035,t.add(e),t.add(e.target),this.moonLight=e,this.fillLight=new Qn(6989533,90,60,2),this.fillLight.position.set(6,12,-20),t.add(this.fillLight);const n=new Qn(7575227,80,46,2);n.position.set(-8,11,6),t.add(n),this.skyFill=n;const s=this.weaponScene;s.add(new lc(9417942,1185308,.9));const r=new fr(14543359,2.7);r.position.set(1.6,2.4,1.4),s.add(r);const a=new fr(7320319,2.5);a.position.set(-1.6,.9,-1.8),s.add(a);const o=new fr(16753254,.85);o.position.set(.5,-1.5,1),s.add(o),this.weaponKey=r}_buildComposer(){const{renderer:t,scene:e,camera:n}=this,s=this.mobile?0:2,r=new at(window.innerWidth,window.innerHeight),a=new tn(r.x*this.pixelRatio,r.y*this.pixelRatio,{type:je,samples:s,depthBuffer:!0});this.composer=new r_(t,a),this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(r.x,r.y),this.composer.addPass(new a_(e,n)),this.bloom=new Zi(new at(r.x/2,r.y/2),this.mobile?.62:.78,.62,.82),this.composer.addPass(this.bloom),this.grade=new qh(p_),this.grade.uniforms.uResolution.value.set(r.x*this.pixelRatio,r.y*this.pixelRatio),this.composer.addPass(this.grade),this.composer.addPass(new l_)}resize(){const t=window.innerWidth,e=window.innerHeight;this.pixelRatio=Math.min(window.devicePixelRatio||1,this.maxDpr)*this.qualityScale,this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.weaponCamera.aspect=t/e,this.weaponCamera.updateProjectionMatrix(),this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(t,e),this.bloom.setSize(t/2,e/2),this.grade.uniforms.uResolution.value.set(t*this.pixelRatio,e*this.pixelRatio),this.composer.renderTarget1.samples=this.mobile?0:2}adaptiveQuality(t){if(this.frameTimes.push(t),this.frameTimes.length<90)return;const e=this.frameTimes.reduce((n,s)=>n+s,0)/this.frameTimes.length;this.frameTimes.length=0,e>.026&&this.qualityScale>.7&&(this.qualityScale=Math.max(.7,this.qualityScale-.12),this.maxDpr=Math.max(1,this.maxDpr-.15),this.bloom.strength*=.94,this.resize())}render(t,e,n){if(this.grade.uniforms.uTime.value+=t,this.composer.render(),n&&e){const s=this.renderer;s.autoClear=!1,s.clearDepth(),s.render(this.weaponScene,this.weaponCamera),s.autoClear=!0}}get fps(){return this._fps||0}updateFps(t){this._fps=this._fps?this._fps*.92+1/Math.max(t,1e-4)*.08:1/t}}const Bc=Math.PI*2;function v_(i=9){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Ca(i,t){return new qe({uniforms:{uColor:{value:new Gt(i)},uOpacity:{value:t},uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vPos;
      varying vec3 vNormalV;
      varying vec3 vViewV;
      void main() {
        vUv = uv;
        vPos = position;
        vNormalV = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vViewV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying vec3 vPos;
      varying vec3 vNormalV;
      varying vec3 vViewV;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uTime;
      void main() {
        float vertical = pow(clamp(vUv.y, 0.0, 1.0), 1.35);
        float soft = mix(0.22, 1.0, pow(abs(dot(normalize(vNormalV), normalize(vViewV))), 1.2));
        float bands = 0.86 + 0.14 * sin(vPos.x * 1.5 + uTime * 0.5) * sin(vPos.z * 1.7 - uTime * 0.35);
        float alpha = vertical * bands * soft * uOpacity;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:ge,side:Ee,toneMapped:!1})}function x_(i,t){const e=v_(17),n={blockers:[],shootables:[],spawnPoints:[],lamps:[],volumes:[],puddles:[],bounds:26.5,animated:[]},s=Ra({base:"#5d646b",repeat:[9,9],wet:!0,seed:5,grime:1.4}),r=Ra({base:"#737a80",repeat:[10,4],seed:9}),a=Ra({base:"#7a8086",repeat:[2,2],seed:21}),o=zi({base:"#565d66",repeat:[3,3],seed:3}),l=zi({base:"#2c333b",repeat:[2,2],seed:8,rust:.6}),c=zi({base:"#6a4a36",repeat:[2,2],seed:14,rust:.9}),h=c_({}),u=gr({color:"#2c5157",repeat:[1.6,1],seed:31}),f=gr({color:"#5c2b28",repeat:[1.6,1],seed:33}),d=gr({color:"#283d52",repeat:[1.6,1],seed:37}),m=gr({color:"#3d4430",repeat:[1.6,1],seed:39}),v={floor:new ie({...s,color:10792116,metalness:.28,roughness:1,envMapIntensity:1.15,normalScale:new at(.9,.9)}),wall:new ie({...r,color:11581374,metalness:.06,roughness:.94,envMapIntensity:.6}),prop:new ie({...a,color:10133928,metalness:.05,roughness:.92,envMapIntensity:.5}),metal:new ie({...o,color:10134703,metalness:.86,roughness:.55,envMapIntensity:.9}),darkMetal:new ie({...l,color:7831948,metalness:.9,roughness:.48,envMapIntensity:1}),rust:new ie({...c,color:10255456,metalness:.55,roughness:.78}),hazard:new ie({...h,color:13152352,metalness:.2,roughness:.8}),containerTeal:new ie({...u,color:13160658,metalness:.55,roughness:.62,envMapIntensity:.7}),containerRed:new ie({...f,color:13219506,metalness:.5,roughness:.66,envMapIntensity:.7}),containerBlue:new ie({...d,color:11977424,metalness:.55,roughness:.6,envMapIntensity:.7}),containerOlive:new ie({...m,color:12173232,metalness:.5,roughness:.68,envMapIntensity:.7}),wood:new ie({map:zi({base:"#6b4a2c",repeat:[1,1],seed:55,rust:0}).map,color:10318408,metalness:.05,roughness:.9})},g=new fe({color:16761466,toneMapped:!1}),p=new fe({color:10478847,toneMapped:!1}),S=new fe({color:16723516,toneMapped:!1}),w=(R,{collide:xt=!0,shoot:_t=!0,cast:Dt=!0,receive:it=!0}={})=>{if(R.castShadow=Dt,R.receiveShadow=it,i.add(R),R.updateMatrixWorld(!0),xt){const Wt=new ni().setFromObject(R);n.blockers.push({minX:Wt.min.x,maxX:Wt.max.x,minZ:Wt.min.z,maxZ:Wt.max.z})}return _t&&n.shootables.push(R),R},x=(R,xt,_t,Dt,it,Wt,vt,{ry:Ct=0,...A}={})=>{const M=new At(new Ne(R,xt,_t),Dt);return M.position.set(it,Wt+xt/2,vt),M.rotation.y=Ct,w(M,A)},E=(R,xt,_t,Dt,it,Wt,vt,{rx:Ct=0,rz:A=0,seg:M=14,...U}={})=>{const st=new At(new Xe(R,xt,_t,M),Dt);return st.position.set(it,Wt+_t/2,vt),st.rotation.x=Ct,st.rotation.z=A,w(st,U)},T=new At(new Fe(92,92,1,1),v.floor);T.rotation.x=-Math.PI/2,T.position.y=0,T.receiveShadow=!0,i.add(T),n.shootables.push(T),n.floor=T;const _=new ie({color:1516592,metalness:.95,roughness:.14,envMapIntensity:1.9,transparent:!0,opacity:.6}),y=[[-7.5,3.2,3.4,2.2],[6.5,-1.5,4,1.6],[-2.5,-9.5,3.6,2],[11.5,8.5,2.8,1.4],[-15.5,-5,2.4,1.8],[3.5,12,2.2,1.2],[16,-12,3.2,1.5]];for(const[R,xt,_t,Dt]of y){const it=new At(new Wi(1,28),_);it.rotation.x=-Math.PI/2,it.position.set(R,.012,xt),it.scale.set(_t,Dt,1),i.add(it),n.puddles.push(it)}const N=(R,xt,_t,Dt,it,Wt=0,vt=.55)=>{const Ct=new fe({map:R,transparent:!0,opacity:vt,depthWrite:!1,toneMapped:!1}),A=new At(new Fe(xt,_t),Ct);return A.rotation.x=-Math.PI/2,A.rotation.z=Wt,A.position.set(Dt,.014,it),i.add(A),A};N(_r({kind:"stencil",text:"07",color:"#cbb06b"}),4.2,4.2,0,7.2,0,.32),N(_r({kind:"arrow",color:"#9fb2c0"}),4,4,-4,-6,-Math.PI/2,.3),N(_r({kind:"zone",text:"HOLD",color:"#c4a45e"}),8,8,-4,16,0,.28),N(_r({kind:"zone",text:"LZ-07",color:"#8ea4b5"}),6,6,17,15,.4,.26),x(56,17,9,v.wall,0,0,-34.5),x(10,14,56,v.wall,-34.5,0,0),x(10,12,56,v.wall,34.5,0,0),x(56,13,9,v.wall,0,0,34.5),x(57,1,.6,v.prop,0,17,-30.1,{collide:!1,shoot:!1,cast:!1}),x(.6,1,57,v.prop,-29.6,14,0,{collide:!1,shoot:!1,cast:!1}),x(.6,1,57,v.prop,29.6,12,0,{collide:!1,shoot:!1,cast:!1}),x(11,7.5,.35,v.darkMetal,0,0,-29.85,{collide:!1}),x(.4,8.1,.5,v.metal,-5.7,0,-29.75,{collide:!1}),x(.4,8.1,.5,v.metal,5.7,0,-29.75,{collide:!1}),x(11.8,.45,.5,v.metal,0,7.6,-29.75,{collide:!1}),x(10.4,.7,.06,v.hazard,0,.05,-29.65,{collide:!1});const P=u_({text:"BLACKSITE",color:"#ffb45c"}),L=new At(new Fe(15,3.75),new fe({map:P,transparent:!0,toneMapped:!1,depthWrite:!1}));L.position.set(0,11.4,-29.82),i.add(L),n.sign=L;const F=Cr({seed:61,cols:12,rows:3}),k=new fe({map:F,color:10466248,toneMapped:!1}),I=(R,xt,_t,Dt,it,Wt)=>{const vt=new At(new Fe(R,xt),k);vt.position.set(_t,Dt,it),vt.rotation.y=Wt,i.add(vt)};I(44,4,0,14.2,-29.98,0),I(44,3.2,0,14.2,29.98,Math.PI),I(44,3.6,-29.48,11,0,Math.PI/2),I(44,3,29.48,9.6,0,-Math.PI/2),x(4,1.2,2.5,v.darkMetal,-11,17,-33,{collide:!1}),x(3.4,1,2.2,v.darkMetal,9,17,-34,{collide:!1}),E(.06,.09,9,v.metal,16,17,-34,{collide:!1,cast:!1});const H=new At(new Sn(.16,8,8),S);H.position.set(16,26.1,-34),i.add(H),n.animated.push({type:"beacon",mesh:H,phase:0});const K=v.metal;x(27,.22,2.4,K,0,5.15,-28.2,{collide:!1});for(let R=-13;R<=13;R+=2.6)x(.09,1.15,.09,K,R,5.26,-27.15,{collide:!1,cast:!1}),x(.07,.07,2.3,K,R,6.32,-28.2,{collide:!1,cast:!1});x(26,.07,.07,K,0,6.32,-27.15,{collide:!1,cast:!1});for(let R=0;R<6;R++)x(1,.05,.05,K,13.9,.6+R*.85,-27.65,{collide:!1,cast:!1});x(.05,5.4,.05,K,13.4,0,-27.65,{collide:!1,cast:!1}),x(.05,5.4,.05,K,14.4,0,-27.65,{collide:!1,cast:!1});const z=[[-13.5,11.5,1],[12.5,6.5,-1],[-7,-17,1],[19,-6,-1]],rt=vn({size:128,color:"255,200,135",core:.1}),$=new Ne(.72,.16,.42),et=new Sn(.09,8,8);for(const[R,xt,_t]of z){E(.085,.12,7.4,v.darkMetal,R,0,xt,{collide:!0,cast:!0}),x(1.5,.12,.14,v.darkMetal,R+_t*.7,7.1,xt,{collide:!1,cast:!1});const Dt=R+_t*1.35;x(.8,.22,.5,v.darkMetal,Dt,6.95,xt,{collide:!1,cast:!0});const it=new At($,g);it.position.set(Dt,6.88,xt),i.add(it);const Wt=new Qn(16753756,88,32,2);Wt.position.set(Dt,6.75,xt),i.add(Wt);const vt=new sn(new Qe({map:rt,color:16760454,transparent:!0,opacity:.75,depthWrite:!1,blending:ge,toneMapped:!1}));vt.position.set(Dt,6.85,xt),vt.scale.setScalar(2.2),vt.material.opacity=.55,i.add(vt);const Ct=Ca(16752210,.085),A=new At(new Xe(.12,4.4,6.8,22,1,!0),Ct);A.position.set(Dt,3.45,xt),A.renderOrder=4,i.add(A),n.volumes.push({mesh:A,mat:Ct,phase:e()*Bc,base:.085}),n.lamps.push({light:Wt,lens:it,glow:vt,base:88,phase:e()*Bc})}const Q=new Qn(7780351,110,42,2);Q.position.set(0,10.5,-28.4),i.add(Q);const Tt=new At(new Ne(1.6,.2,.5),p);Tt.position.set(0,10.2,-28.9),i.add(Tt);const Lt=new At(new Xe(.2,5.5,9,22,1,!0),Ca(7320831,.055));Lt.position.set(0,5.2,-27.9),i.add(Lt),n.volumes.push({mesh:Lt,mat:Lt.material,phase:1.6,base:.055});const J=new Qn(16756848,26,24,2);J.position.set(0,6,4),i.add(J),n.lamps.push({light:J,lens:null,glow:null,base:26,phase:2.2,soft:!0});const gt=(R,xt,_t,Dt,it=1)=>{const Wt=new C(...R),vt=new C(...xt),Ct=[];for(let U=0;U<=32;U++){const st=U/32,j=Wt.clone().lerp(vt,st);j.y-=Math.sin(Math.PI*st)*_t,Ct.push(j)}const A=new xh(Ct),M=new At(new nl(A,40,.018,4,!1),new fe({color:724498}));i.add(M);for(let U=1;U<Dt;U++){const st=U/Dt,j=A.getPoint(st),ft=new At(et,g);ft.scale.setScalar(it),ft.position.copy(j),ft.position.y-=.12,i.add(ft);const B=new sn(new Qe({map:rt,color:16758392,transparent:!0,opacity:.5,depthWrite:!1,blending:ge,toneMapped:!1}));B.position.copy(ft.position),B.scale.setScalar(.55),B.material.opacity=.32,i.add(B)}};gt([-29,7.6,8],[29,7.2,-3],1.6,18),gt([-29,7.1,-13],[29,7.4,15],2,18);const mt=[[6,2.6,2.5,v.containerTeal,-10.5,0,-11.5,.1],[6,2.6,2.5,v.containerRed,-10.5,2.62,-11.5,.1],[6,2.6,2.5,v.containerBlue,12.5,0,-10,-.28],[6,2.6,2.5,v.containerOlive,16,0,4.5,Math.PI/2+.06],[6,2.6,2.5,v.containerRed,-18,0,7.5,.42],[6,2.6,2.5,v.containerBlue,-17.5,0,12.5,-.06]];for(const[R,xt,_t,Dt,it,Wt,vt,Ct]of mt){x(R,xt,_t,Dt,it,Wt,vt,{ry:Ct});for(const st of[-R/2+.18,R/2-.18])for(const j of[-_t/2+.18,_t/2-.18])x(.28,.2,.28,v.darkMetal,it+Math.cos(Ct)*st+Math.sin(Ct)*j,Wt+xt-.2,vt-Math.sin(Ct)*st+Math.cos(Ct)*j,{collide:!1,cast:!1});const A=it+Math.cos(Ct)*(R/2+.01),M=vt-Math.sin(Ct)*(R/2+.01);for(const st of[-.62,-.2,.2,.62])x(.06,xt*.72,.06,v.metal,A+Math.sin(Ct)*st,Wt+.3,M+Math.cos(Ct)*st,{collide:!1,cast:!1,ry:Ct});const U=new At(new Ne(.1,.1,.02),S);U.position.set(it+Math.cos(Ct)*(R/2+.03),Wt+xt-.35,vt-Math.sin(Ct)*(R/2+.03)),i.add(U)}const Bt=[[-2.5,-3,0],[4.2,-6,.18],[-12,2,Math.PI/2],[8,10,-.35],[20,-14.5,Math.PI/2],[-20,-13,.25],[1,-20,Math.PI/2]];for(const[R,xt,_t]of Bt)x(3.2,.9,.62,v.prop,R,0,xt,{ry:_t}),x(3.3,.16,.9,v.prop,R,0,xt,{ry:_t}),x(2.6,.12,.08,v.hazard,R+Math.sin(_t)*.33,.62,xt+Math.cos(_t)*.33,{ry:_t,collide:!1,cast:!1});const yt=[[-6.5,0,4.4,1.3,.2],[-5.4,0,5.2,1,.6],[-6,1.3,4.6,1.1,-.2],[6.5,0,6.2,1.4,.35],[7.6,0,6.9,1,-.4],[6.8,1.4,6.4,1,.1],[19.5,0,8.5,1.2,.7],[18.4,0,9,1,.2],[-16.5,0,-3.5,1.4,-.3],[-15.2,0,-4,1,.5],[10,0,-18.5,1.3,.2],[11.2,0,-19,1.1,-.1]];for(const[R,xt,_t,Dt,it]of yt)x(Dt,Dt,Dt,v.wood,R,xt,_t,{ry:it}),x(Dt*.9,.06,.08,v.darkMetal,R,xt+Dt*.7,_t,{ry:it,collide:!1,cast:!1});const zt=new ie({...o,color:11569754,metalness:.5,roughness:.72}),pe=new ie({...o,color:4414056,metalness:.7,roughness:.55});[[-8.5,-17.2],[-7.8,-16.4],[-8.9,-15.7],[15,-4],[15.8,-4.6],[-20.5,15],[-19.7,15.6],[9.5,14.8],[21.5,-18]].forEach(([R,xt],_t)=>{const Dt=_t%2?zt:pe;E(.34,.34,1.05,Dt,R,0,xt),E(.36,.36,.05,v.darkMetal,R,.24,xt,{collide:!1,cast:!1}),E(.36,.36,.05,v.darkMetal,R,.76,xt,{collide:!1,cast:!1})});const Kt=new ie({color:9075292,roughness:.95,metalness:.02}),jt=new Fn(.17,.5,4,8),tt=[],pt=[{x:-3,z:-14.5,ry:0,len:10,rows:4},{x:12,z:13,ry:Math.PI/2,len:8,rows:3}];for(const R of pt){for(let _t=0;_t<R.rows;_t++)for(let Dt=0;Dt<R.len;Dt++)tt.push({x:R.x+Math.cos(R.ry)*(Dt*.62-R.len*.31)+(e()-.5)*.06,y:.18+_t*.3,z:R.z-Math.sin(R.ry)*(Dt*.62-R.len*.31)+(e()-.5)*.06,ry:R.ry+Math.PI/2+(e()-.5)*.22,rz:(e()-.5)*.1});const xt={minX:R.x-3.2,maxX:R.x+3.2,minZ:R.z-.45,maxZ:R.z+.45};R.ry!==0&&(xt.minX=R.x-.45,xt.maxX=R.x+.45,xt.minZ=R.z-3.2,xt.maxZ=R.z+3.2),n.blockers.push(xt)}const ut=new _f(jt,Kt,tt.length),Et=new Te;tt.forEach((R,xt)=>{Et.position.set(R.x,R.y,R.z),Et.rotation.set(0,R.ry,R.rz),Et.updateMatrix(),ut.setMatrixAt(xt,Et.matrix)}),ut.castShadow=!0,ut.receiveShadow=!0,i.add(ut),n.shootables.push(ut),x(2.1,1.25,1.2,v.darkMetal,-16.5,0,-8.5,{ry:.18}),x(.4,.5,.4,v.metal,-15.6,1.25,-8.5,{collide:!1});const lt=new At(new Sn(.05,6,6),g);lt.position.set(-17.2,.95,-7.86),i.add(lt),n.animated.push({type:"led",mesh:lt,phase:.4});for(const[R,xt]of[[24.5,18],[25.5,16.5]])E(.9,.9,.2,v.wood,R,0,xt,{rx:Math.PI/2,collide:!1,cast:!0}),E(.25,.25,1.1,v.darkMetal,R,0,xt,{rx:Math.PI/2,collide:!1,cast:!0});for(const[R,xt]of[[2.2,.11],[3.4,.09],[4.6,.13]]){const _t=new At(new Xe(xt,xt,40,10),v.rust);_t.rotation.x=Math.PI/2,_t.position.set(-29.15,R,-2),_t.castShadow=!0,i.add(_t),n.shootables.push(_t)}for(let R=0;R<5;R++)x(.12,.7,.12,v.darkMetal,-29.15,1.8+R*1.4,-14+R*7,{collide:!1,cast:!1});const kt=20.5,wt=-20.5;for(const[R,xt]of[[-1.8,-1.8],[1.8,-1.8],[-1.8,1.8],[1.8,1.8]])x(.22,6.2,.22,v.darkMetal,kt+R,0,wt+xt,{collide:!1});x(4.4,.28,4.4,v.metal,kt,6.2,wt);for(let R=0;R<4;R++)x(.1,1.1,.1,v.metal,kt-2+R*1.33,6.48,wt+2.1,{collide:!1,cast:!1});x(4.3,.1,.1,v.metal,kt,7.5,wt+2.1,{collide:!1,cast:!1}),x(4.3,.1,.1,v.metal,kt,7.5,wt-2.1,{collide:!1,cast:!1}),x(.1,.1,4.3,v.metal,kt+2.1,7.5,wt,{collide:!1,cast:!1}),x(.1,.1,4.3,v.metal,kt-2.1,7.5,wt,{collide:!1,cast:!1}),x(5.2,.18,5.2,v.darkMetal,kt,8.4,wt,{collide:!1});const Zt=new Qn(16756839,55,28,2);Zt.position.set(kt-1.6,7,wt+1.6),i.add(Zt),n.lamps.push({light:Zt,lens:null,glow:null,base:55,phase:4.1,soft:!0});const qt=new sn(new Qe({map:rt,color:16760192,transparent:!0,opacity:.6,depthWrite:!1,blending:ge,toneMapped:!1}));qt.position.copy(Zt.position),qt.scale.setScalar(1.6),i.add(qt);const te=new At(new Xe(.1,3.6,6.2,18,1,!0),Ca(16754012,.06));te.position.set(kt-2.4,3.5,wt+2.6),te.rotation.z=.24,i.add(te),n.volumes.push({mesh:te,mat:te.material,phase:2.7,base:.06});for(let R=0;R<8;R++)x(.12,2.3,.12,v.darkMetal,26.4,0,-18+R*4,{collide:!1,cast:!1});for(const R of[.7,1.5])x(.05,.05,28,v.metal,26.4,R,-4,{collide:!1,cast:!1});return n.spawnPoints=[new C(-22.5,0,-17.5),new C(22.8,0,-19),new C(-24,0,3),new C(24.2,0,9.5),new C(-9.5,0,-25),new C(9,0,-25.5),new C(0,0,-27),new C(-6,0,-20),new C(7.5,0,-21),new C(-14.5,0,-15),new C(13.5,0,-16.5),new C(-21,0,19.5),new C(18,0,21.5),new C(-17.5,0,-2),new C(17.8,0,-4.5),new C(-11,0,-9.5),new C(10.5,0,-11),new C(-6.5,0,1.5),new C(6.8,0,-1),new C(-8,0,1.5),new C(8.5,0,1),new C(-12.5,0,-3),new C(12,0,-3.5),new C(-3.5,0,-5),new C(4,0,-6.5)],n.playerStart=new C(0,0,14.5),n.playerStartYaw=0,n}const fs=new C;function fn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;fs.copy(t),fs[n]=0,fs.normalize();const c=.5*a/(a+o),h=1-fs.angleTo(i)/l;return Math.sign(fs[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Ss extends Ne{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new C,c=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,v=new C,g=.5/a;for(let p=0,S=0;p<u.length;p+=3,S+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/m)){case 0:v.set(1,0,0),d[S+0]=fn(v,c,"z","y",r,n),d[S+1]=1-fn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),d[S+0]=1-fn(v,c,"z","y",r,n),d[S+1]=1-fn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),d[S+0]=1-fn(v,c,"x","z",r,t),d[S+1]=fn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[S+0]=1-fn(v,c,"x","z",r,t),d[S+1]=1-fn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[S+0]=1-fn(v,c,"x","y",r,t),d[S+1]=1-fn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),d[S+0]=fn(v,c,"x","y",r,t),d[S+1]=1-fn(v,c,"y","x",r,e);break}}static fromJSON(t){return new Ss(t.width,t.height,t.depth,t.segments,t.radius)}}function M_(i){const t=zi({base:"#3a352b",repeat:[2,2],seed:74,rust:.02}),e=zi({size:256,base:"#7a7f84",repeat:[6,6],seed:41,rust:.01}),n=new ie({color:2238510,metalness:.84,roughness:.52,envMapIntensity:1.12,normalMap:e.normalMap,normalScale:new at(.22,.22),roughnessMap:e.roughnessMap}),s=new ie({color:3752265,metalness:.8,roughness:.56,envMapIntensity:1,normalMap:e.normalMap,normalScale:new at(.2,.2),roughnessMap:e.roughnessMap}),r=new ie({color:921876,metalness:.7,roughness:.64,envMapIntensity:.8,normalMap:e.normalMap,normalScale:new at(.3,.3),roughnessMap:e.roughnessMap}),a=new ie({color:6845051,metalness:.9,roughness:.26,envMapIntensity:1.45}),o=new ie({color:1711649,metalness:.12,roughness:.78,envMapIntensity:.55}),l=new ie({...t,color:7167298,metalness:.08,roughness:.74,envMapIntensity:.62}),c=new ie({color:921618,metalness:.02,roughness:.94,envMapIntensity:.2}),h=new ie({color:3751988,metalness:.05,roughness:.88,envMapIntensity:.4,normalMap:e.normalMap,normalScale:new at(.35,.35)}),u=new ie({color:4936514,metalness:.14,roughness:.78,envMapIntensity:.5,normalMap:e.normalMap,normalScale:new at(.25,.25)}),f=new ie({color:658698,metalness:.01,roughness:1,envMapIntensity:.06}),d=new ie({color:13606987,metalness:.95,roughness:.3}),m=new ie({color:1316634,metalness:.2,roughness:.86,envMapIntensity:.35}),v=new fe({color:5223628,transparent:!0,opacity:.13,side:Ee,depthWrite:!1,blending:ge,toneMapped:!1}),g=new fe({color:16727880,transparent:!0,opacity:.95,side:Ee,depthWrite:!1,toneMapped:!1}),p=new Me;p.position.set(.168,-.162,-.535),p.rotation.set(.014,.06,-.014),i.add(p);const S=new Me;S.scale.setScalar(.6),p.add(S);const w=(B,G,X,nt,D)=>(B.position.set(G,X,nt),B.castShadow=!1,B.receiveShadow=!1,D.add(B),B),x=(B,G,X,nt,D,q,Y,ht=0,ot=0,dt=0,It=S)=>{const Yt=new At(new Ne(B,G,X),nt);return Yt.rotation.set(ht,ot,dt),w(Yt,D,q,Y,It)},E=(B,G,X,nt,D,q,Y,ht,ot=0,dt=0,It=0,Yt=S)=>{const ct=new At(new Ss(B,G,X,2,nt),D);return ct.rotation.set(ot,dt,It),w(ct,q,Y,ht,Yt)},T=(B,G,X,nt,D,q,Y,ht=Math.PI/2,ot=S,dt=20)=>{const It=new At(new Xe(B,G,X,dt),nt);return It.rotation.x=ht,w(It,D,q,Y,ot)},_=(B,G,X,nt,D,q,Y,ht=S)=>{const ot=new At(new Ls(B,G,24),nt);return w(ot,D,q,Y,ht)},y=(B,G,X,nt,D=S,q="x")=>{const Y=new At(new Xe(B,B,.0025,8),a);return q==="x"&&(Y.rotation.z=Math.PI/2),q==="z"&&(Y.rotation.x=Math.PI/2),w(Y,G,X,nt,D)},N=(B,G,X,nt,D,q=S)=>{const Y=new C().subVectors(G,B),ht=Y.length(),ot=new At(new Xe(nt,X,ht,10),D);return ot.position.copy(B).addScaledVector(Y,.5),ot.quaternion.setFromUnitVectors(new C(0,1,0),Y.normalize()),q.add(ot),ot},P=(B,G,X)=>{const nt=new Eh,D=-B/2,q=-G/2;return nt.moveTo(D+X,q),nt.lineTo(D+B-X,q),nt.quadraticCurveTo(D+B,q,D+B,q+X),nt.lineTo(D+B,q+G-X),nt.quadraticCurveTo(D+B,q+G,D+B-X,q+G),nt.lineTo(D+X,q+G),nt.quadraticCurveTo(D,q+G,D,q+G-X),nt.lineTo(D,q+X),nt.quadraticCurveTo(D,q,D+X,q),nt};E(.047,.054,.305,.0045,n,0,.018,.004),E(.0435,.038,.245,.004,r,0,-.023,-.018),x(.0475,.0022,.3,a,0,-.009,.004),E(.0445,.033,.082,.004,r,0,-.049,-.062,.19),x(.048,.012,.072,r,0,-.066,-.058,.19),x(.0016,.021,.058,new ie({color:329223,metalness:.2,roughness:.9}),.0241,.021,.012),E(.0045,.026,.068,.0015,s,.0263,.0205,.013),x(.004,.006,.062,a,.0286,.034,.012),E(.012,.018,.022,.004,s,.028,.039,.062,0,0,-.5),T(.0085,.0085,.018,s,.03,.032,.108,0,S,12).rotation.set(0,0,Math.PI/2),x(.034,.009,.026,r,0,.042,.155),x(.048,.007,.013,r,0,.043,.171),x(.01,.011,.012,s,.028,.043,.171),T(.0105,.0105,.006,a,.0255,-.012,.062,0,S,14).rotation.set(0,0,Math.PI/2),x(.016,.006,.022,r,.026,-.012,.073,0,0,.2),T(.008,.008,.007,a,.026,-.036,.048,0,S,12).rotation.set(0,0,Math.PI/2),x(.012,.023,.028,r,.0265,0,.086),y(.004,.0245,-.034,-.11),y(.004,.0245,.026,.102),y(.004,-.0245,-.034,-.11),y(.004,-.0245,.026,.102),x(.0018,.012,.058,a,-.0242,.012,-.02),x(.0032,.017,.024,r,-.0255,-.004,.034),T(.009,.009,.004,a,-.0252,-.015,.066,0,S,14).rotation.set(0,0,Math.PI/2),x(.0035,.005,.017,r,-.0268,-.015,.074,0,0,.3),T(.0065,.0065,.005,s,-.0262,-.038,.05,0,S,12).rotation.set(0,0,Math.PI/2),T(.0072,.0072,.004,a,-.0255,.006,-.105,0,S,12).rotation.set(0,0,Math.PI/2);const k=document.createElement("canvas");k.width=512,k.height=128;const I=k.getContext("2d");I.clearRect(0,0,512,128),I.fillStyle="rgba(205, 214, 218, 0.72)",I.font='700 54px "Barlow Condensed", "Arial Narrow", sans-serif',I.fillText("M4A1",12,58),I.font='500 26px "Share Tech Mono", monospace',I.fillStyle="rgba(185, 196, 202, 0.52)",I.fillText("5.56 NATO  //  AUTO",14,98);const H=new gh(k);H.colorSpace=Je,H.anisotropy=4;const K=new At(new Fe(.08,.02),new fe({map:H,transparent:!0,opacity:.7,depthWrite:!1,toneMapped:!1,side:Ee}));K.position.set(-.0244,.009,-.04),K.rotation.y=-Math.PI/2,S.add(K),x(.007,.038,.005,r,0,-.065,.022),x(.007,.038,.005,r,0,-.065,.098),x(.007,.005,.078,r,0,-.083,.06),x(.012,.026,.007,a,0,-.055,.065,.2),x(.048,.008,.315,r,0,.048,.002);for(let B=0;B<17;B++)x(.049,.0045,.0095,r,0,.0535,-.142+B*.0175);const z=new Me;z.position.set(0,.012,-.305),S.add(z),E(.054,.058,.285,.006,l,0,0,0,0,0,0,z),x(.05,.007,.287,r,0,.032,0,0,0,0,z);for(let B=0;B<9;B++)x(.051,.005,.0145,r,0,.0375,-.128+B*.032,0,0,0,z);for(let B=0;B<5;B++){for(const G of[-.0275,.0275])x(.0018,.013,.022,new ie({color:526859,roughness:.95}),G,0,-.095+B*.046,0,0,0,z);x(.022,.0018,.021,new ie({color:526859,roughness:.95}),0,-.0305,-.095+B*.046,0,0,0,z)}T(.0085,.0085,.006,s,.03,.002,-.1,0,z,12).rotation.set(0,0,Math.PI/2),T(.0295,.0295,.009,s,0,0,-.147,0,z,24),T(.0285,.0285,.005,r,0,0,-.153,0,z,24);for(let B=0;B<3;B++)x(.03,.004,.016,r,0,.032,-.12+B*.028,0,0,0,z);E(.026,.008,.022,.002,r,0,.042,-.135,0,0,0,z),E(.012,.006,.016,.002,s,0,.048,-.13,0,0,0,z),T(.0095,.0095,.3,r,0,.012,-.585,Math.PI/2,S,16),T(.013,.013,.028,s,0,.012,-.462,Math.PI/2,S,16),E(.018,.034,.024,.003,r,0,.035,-.505),x(.03,.008,.024,s,0,.055,-.505),T(.0035,.0035,.12,s,0,.038,-.565,Math.PI/2,S,8),T(.0205,.0205,.175,m,0,.012,-.805,Math.PI/2,S,24);for(let B=0;B<5;B++)T(.0212,.0212,.006,s,0,.012,-.735-B*.032,Math.PI/2,S,24);T(.0225,.0225,.01,s,0,.012,-.724,Math.PI/2,S,24),T(.0228,.0228,.014,r,0,.012,-.892,Math.PI/2,S,24),_(.007,.0125,.002,r,0,.012,-.8995),x(.006,.007,.1,c,-.03,.03,-.3,0,0,0),x(.011,.01,.024,c,-.031,.031,-.245);const rt=new Me;rt.position.set(.031,.002,-.255),S.add(rt),E(.022,.026,.072,.003,r,0,0,0,0,0,0,rt),x(.009,.008,.052,s,0,.014,-.004,0,0,0,rt);const $=new At(new Wi(.0062,16),new fe({color:16723768,toneMapped:!1}));$.position.set(0,.002,-.0375),$.rotation.y=Math.PI,rt.add($);const et=new sn(new Qe({map:vn({size:64,color:"255,60,70",core:.2}),color:16729680,transparent:!0,opacity:.45,depthWrite:!1,blending:ge,toneMapped:!1}));et.position.set(0,.002,-.0405),et.scale.setScalar(.032),rt.add(et);const Q=new Me;S.add(Q),T(.0145,.0145,.175,s,0,.008,.235,Math.PI/2,Q,16),T(.019,.019,.012,r,0,.008,.158,Math.PI/2,Q,16),E(.038,.014,.105,.005,o,0,.04,.315,0,0,0,Q),E(.034,.013,.105,.005,o,0,-.019,.315,.06,0,0,Q),E(.012,.055,.02,.004,o,0,.012,.292,.18,0,0,Q),E(.036,.018,.095,.006,o,0,.053,.312,0,0,0,Q),E(.04,.02,.01,.006,o,0,.054,.359,0,0,0,Q),E(.043,.092,.016,.006,o,0,.01,.382,0,0,0,Q),E(.047,.08,.009,.003,c,0,.01,.392,0,0,0,Q),x(.03,.006,.045,r,0,-.043,.34,0,0,0,Q),T(.007,.007,.005,a,.023,.008,.34,0,Q,10).rotation.set(0,0,Math.PI/2),T(.007,.007,.005,a,-.023,.008,.34,0,Q,10).rotation.set(0,0,Math.PI/2),x(.0018,.018,.052,r,-.0212,.01,.382,0,0,0,Q);for(let B=0;B<3;B++)x(.0022,.052,.0035,c,-.0216,.01,.36+B*.012,0,0,0,Q);const Tt=new Me;Tt.position.set(0,-.072,.079),Tt.rotation.x=.29,S.add(Tt),E(.038,.108,.05,.008,o,0,-.032,0,0,0,0,Tt),E(.04,.03,.052,.007,r,0,.028,.002,0,0,0,Tt);for(let B=0;B<5;B++)x(.042,.0024,.052,c,0,-.012-B*.018,0,0,0,0,Tt);x(.01,.016,.014,a,.02,.025,.004,0,0,0,Tt);const Lt=new Me;Lt.position.set(0,-.045,-.055),S.add(Lt);const J=new At(new Ss(.041,.155,.073,2,.006),l);J.position.y=-.071,J.rotation.x=-.1,Lt.add(J);const gt=new At(new Ss(.046,.018,.08,2,.004),r);gt.position.set(0,-.154,.01),gt.rotation.x=-.1,Lt.add(gt);for(let B=0;B<2;B++)x(.0015,.0022,.06,r,-.0212,-.052-B*.042,.004+B*.004,-.1,0,0,Lt);x(.0022,.085,.004,r,-.0212,-.082,-.028,-.1,0,0,Lt),x(.006,.014,.07,a,-.0195,-.142,.01,-.1,0,0,Lt),E(.04,.023,.07,.004,r,0,.069,-.026),E(.024,.012,.04,.003,n,0,.075,-.026);const mt=new Me;mt.position.set(0,.08,-.026),S.add(mt),E(.044,.013,.094,.003,m,0,.006,0,0,0,0,mt),x(.05,.006,.026,r,0,.005,.018,0,0,0,mt),x(.02,.018,.042,s,.03,.003,.014,0,0,0,mt);const Bt=P(.068,.066,.0075),yt=P(.052,.05,.0045);Bt.holes.push(yt);const zt=new el(Bt,{depth:.076,bevelEnabled:!0,bevelThickness:.0016,bevelSize:.0013,bevelSegments:2,curveSegments:10,steps:1});zt.center();const pe=new At(zt,m);pe.position.set(0,.04,0),mt.add(pe);const Vt=new At(new Fe(.052,.05),v);Vt.position.set(0,.04,-.002),mt.add(Vt);const Kt=new At(new Fe(.054,.052),new fe({color:8308438,transparent:!0,opacity:.045,side:Ee,depthWrite:!1,blending:ge,toneMapped:!1}));Kt.position.set(0,.04,.012),mt.add(Kt);const jt=new At(new Fe(.054,.052),new fe({map:vn({size:128,color:"110,225,255",core:.02}),color:3973045,transparent:!0,opacity:.28,side:Ee,depthWrite:!1,blending:ge,toneMapped:!1}));jt.position.set(0,.04,.004),mt.add(jt);const tt=new At(new Fe(.036,.0028),new fe({color:13235455,transparent:!0,opacity:.24,side:Ee,depthWrite:!1,blending:ge,toneMapped:!1}));tt.position.set(-.005,.046,.001),tt.rotation.z=.44,mt.add(tt);const pt=new At(new Ls(.004,.0052,36),g);pt.position.set(0,.04,.003),mt.add(pt);const ut=new At(new Wi(.0016,14),g);ut.position.set(0,.04,.0035),mt.add(ut),x(7e-4,.0075,.001,g,0,.04,.0035,0,0,0,mt),x(.0075,7e-4,.001,g,0,.04,.0035,0,0,0,mt);const Et=new sn(new Qe({map:vn({size:64,color:"255,60,70",core:.16}),color:16729680,transparent:!0,opacity:.4,depthWrite:!1,blending:ge,toneMapped:!1}));Et.position.set(0,.04,.004),Et.scale.setScalar(.016),mt.add(Et),T(.0055,.0055,.006,r,-.035,.012,.026,0,mt,12).rotation.set(0,0,Math.PI/2),T(.007,.007,.005,s,.035,.055,.022,0,mt,12).rotation.set(0,0,Math.PI/2),y(.0035,.032,.018,-.026,mt),E(.03,.01,.016,.002,r,0,.06,.112,0,0,0);const lt=new Me;lt.position.set(.034,-.082,.079),lt.rotation.set(.1,-.16,-.06),S.add(lt),E(.05,.086,.066,.017,h,.004,0,.008,0,0,0,lt),E(.044,.044,.018,.011,u,.002,.012,-.032,0,0,0,lt),E(.036,.014,.03,.005,u,-.002,-.035,-.018,0,0,0,lt);for(let B=0;B<4;B++){const G=.016-B*.0205,X=new At(new Fn(.0105,.033,4,8),h);X.position.set(-.015,G,-.038),X.rotation.set(.05,0,Math.PI/2-.28),lt.add(X);const nt=new At(new Fn(.0093,.026,4,8),h);nt.position.set(-.032,G-.004,-.055),nt.rotation.set(.55,.15,.75),lt.add(nt)}const kt=new At(new Fn(.0118,.052,4,8),h);kt.position.set(-.02,.034,-.008),kt.rotation.set(1.18,.2,-.32),lt.add(kt),E(.054,.024,.044,.008,u,.006,.047,.024,.1,0,0,lt),E(.042,.05,.014,.01,u,.004,.006,.038,0,0,0,lt);for(let B=0;B<4;B++)E(.013,.011,.009,.003,u,-.01+B*.008,.026-B*.016,.043,0,0,0,lt);x(.046,.008,.01,c,.002,-.024,.04,0,0,0,lt),x(.01,.01,.008,a,.024,-.024,.04,0,0,0,lt),N(new C(.038,-.086,.094),new C(.052,-.106,.12),.029,.033,h,S),N(new C(.048,-.1,.114),new C(.056,-.112,.132),.035,.038,u,S),N(new C(.056,-.112,.132),new C(.118,-.19,.228),.031,.036,f,S),N(new C(.06,-.119,.142),new C(.068,-.129,.156),.037,.038,f,S),N(new C(.07,-.133,.16),new C(.077,-.142,.174),.038,.039,u,S);const wt=new Me;wt.position.set(-.002,-.036,-.305),wt.rotation.set(.06,.14,.08),S.add(wt),E(.06,.034,.086,.013,h,0,.003,0,0,0,0,wt),E(.049,.02,.067,.008,u,-.008,-.015,-.002,0,0,0,wt);for(let B=0;B<4;B++){const G=.03-B*.025,X=new At(new Fn(.0098,.031,4,8),h);X.position.set(.027,.015,G),X.rotation.set(.15,0,-.75),wt.add(X);const nt=new At(new Fn(.0088,.02,4,8),h);nt.position.set(.037,.033,G),nt.rotation.set(.05,0,-.25),wt.add(nt)}const Zt=new At(new Fn(.0118,.05,4,8),h);Zt.position.set(-.033,.019,.012),Zt.rotation.set(-.32,0,1.2),wt.add(Zt),E(.048,.019,.056,.008,u,.002,.022,-.01,0,0,0,wt),N(new C(-.002,-.04,-.292),new C(-.026,-.058,-.272),.028,.032,h,S),N(new C(-.02,-.053,-.278),new C(-.036,-.07,-.262),.035,.038,u,S),N(new C(-.036,-.07,-.262),new C(-.102,-.168,-.098),.031,.037,f,S),N(new C(-.044,-.08,-.248),new C(-.054,-.091,-.234),.037,.038,f,S),N(new C(-.056,-.096,-.228),new C(-.066,-.107,-.214),.038,.039,u,S);const qt=new Me;qt.position.set(-.052,-.078,-.238),qt.rotation.set(.1,.15,.3),S.add(qt),E(.02,.014,.026,.004,r,0,0,0,0,0,0,qt);const te=new At(new Fe(.014,.008),new fe({color:7995314,transparent:!0,opacity:.65,toneMapped:!1,side:Ee}));te.position.set(-.0105,0,0),te.rotation.y=-Math.PI/2,qt.add(te);const R=new sn(new Qe({map:vn({size:64,color:"120,255,180",core:.2}),color:7995314,transparent:!0,opacity:.35,depthWrite:!1,blending:ge,toneMapped:!1}));R.position.set(-.012,0,0),R.scale.setScalar(.022),qt.add(R);const xt=new Me;xt.position.set(0,.012,-.905),S.add(xt);const _t=new Qe({map:Yh({size:128}),color:16765600,transparent:!0,opacity:0,depthWrite:!1,blending:ge,toneMapped:!1}),Dt=new sn(_t);Dt.scale.setScalar(.18),xt.add(Dt);const it=new fe({color:16756838,transparent:!0,opacity:0,blending:ge,depthWrite:!1,side:Ee,toneMapped:!1}),Wt=new At(new Qo(.038,.15,9,1,!0),it);Wt.rotation.x=-Math.PI/2,Wt.position.z=-.075,xt.add(Wt);const vt=new Qn(16756838,0,2.5,2);vt.position.set(0,.03,-.06),vt.castShadow=!1,xt.add(vt);const Ct=new Qe({map:vn({size:64,color:"190,170,145",core:.3}),transparent:!0,opacity:0,depthWrite:!1,blending:di}),A=new sn(Ct);A.scale.setScalar(.15),A.position.z=-.02,xt.add(A);const M=[];for(let B=0;B<4;B++){const G=new At(new Xe(.0055,.0065,.028,6),d);G.visible=!1,G.rotation.z=Math.PI/2,i.add(G),M.push({mesh:G,life:0,vel:new C,spin:new C})}const U={ads:0,recoil:0,recoilYaw:0,flashT:0,smokeT:0,shellIndex:0,reloadT:0,sprint:0,sway:new at,basePos:new C(.168,-.162,-.535),adsPos:new C(0,-.072,-.25)};function st(){U.flashT=.052,U.smokeT=.45,Dt.material.rotation=Math.random()*Math.PI*2,Dt.scale.setScalar(.12+Math.random()*.055),Wt.scale.setScalar(.8+Math.random()*.4),vt.intensity=7;const B=M[U.shellIndex%M.length];U.shellIndex++,B.mesh.position.set(.055,.024,-.03),B.mesh.visible=!0,B.life=.8,B.vel.set(1.7+Math.random()*.5,1.1+Math.random(),.5+Math.random()*.4),B.spin.set(8+Math.random()*8,4,6),B.mesh.rotation.set(0,0,Math.PI/2)}function j(B=new C){const G=new C(0,.012,-.905).applyMatrix4(S.matrixWorld);return B.copy(G)}function ft(B,G){const{adsTarget:X=0,moving:nt=0,sprinting:D=!1,reloadProgress:q=0,lookDX:Y=0,lookDY:ht=0,bobT:ot=0,time:dt=0}=G;U.ads+=(X-U.ads)*Math.min(1,B*11),U.sprint+=((D&&U.ads<.2?1:0)-U.sprint)*Math.min(1,B*7);const It=Math.sin(dt*1.7)*.0032,Yt=Math.sin(ot)*.0075*nt,ct=Math.abs(Math.cos(ot))*.0065*nt,Ht=nn.clamp(-Y*.055,-.032,.032),Qt=nn.clamp(ht*.055,-.028,.028);U.sway.x+=(Ht-U.sway.x)*Math.min(1,B*9),U.sway.y+=(Qt-U.sway.y)*Math.min(1,B*9),U.recoil*=Math.pow(9e-4,B),U.recoilYaw*=Math.pow(.002,B);const bt=q>0?Math.sin(q*Math.PI):0,he=nn.lerp(U.basePos.x,U.adsPos.x,U.ads),Ae=nn.lerp(U.basePos.y,U.adsPos.y,U.ads),yn=nn.lerp(U.basePos.z,U.adsPos.z,U.ads),Qi=1-U.ads*.82;p.position.x=he+(U.sway.x+Yt)*Qi+U.sprint*.045,p.position.y=Ae+(It+U.sway.y+ct)*Qi-bt*.13-U.sprint*.055,p.position.z=yn+U.recoil*.09+bt*.04,p.rotation.x=U.recoil*.5+bt*.32+U.sprint*.16;const ji=.06+U.sway.x*1.4-U.sprint*.4+U.recoilYaw*.5,Zr=-.014+U.sway.y*1.25-U.sprint*.2+bt*.46;if(p.rotation.y=ji*(1-U.ads),p.rotation.z=Zr*(1-U.ads),Q.position.z=U.ads*.5,q>.08&&q<.85){const ve=(q-.08)/.77;Lt.position.y=-.045-Math.sin(ve*Math.PI)*.17,Lt.rotation.z=Math.sin(ve*Math.PI)*.36}else Lt.position.y+=(-.045-Lt.position.y)*Math.min(1,B*18),Lt.rotation.z+=(0-Lt.rotation.z)*Math.min(1,B*18);if(U.flashT>0){U.flashT-=B;const ve=Math.max(0,U.flashT/.052);Dt.material.opacity=ve,it.opacity=ve*.8,vt.intensity=7*ve}else Dt.material.opacity=0,it.opacity=0,vt.intensity=0;if(U.smokeT>0){U.smokeT-=B;const ve=Math.max(0,U.smokeT/.45);A.material.opacity=ve*.16,A.scale.setScalar(.15+(1-ve)*.22),A.position.z=-.02-(1-ve)*.22}else A.material.opacity=0;for(const ve of M){if(ve.life<=0){ve.mesh.visible=!1;continue}ve.life-=B,ve.vel.y-=9.8*B,ve.mesh.position.addScaledVector(ve.vel,B),ve.mesh.rotation.x+=ve.spin.x*B,ve.mesh.rotation.z+=ve.spin.z*B,ve.life<=0&&(ve.mesh.visible=!1)}p.updateMatrixWorld(!0)}return{root:p,gun:S,state:U,update:ft,triggerFlash:st,getMuzzleCameraPosition:j,materials:{upperMetal:n,gunMetal:s,blackMetal:r,polymer:o,tanPoly:l,glove:h}}}const zc=(i,t,e)=>Math.max(t,Math.min(e,i));class S_{constructor({canvas:t,touch:e}){this.canvas=t,this.isTouch=e,this.enabled=!1,this.keys=new Set,this.lookDX=0,this.lookDY=0,this.firing=!1,this.mouseAim=!1,this.aimToggle=!1,this.stick={x:0,y:0,active:!1},this.jumpQueued=!1,this.dragging=!1,this.lastPointer={x:0,y:0},this.onReload=null,this.onJump=null,this.onPause=null,this.tilt={enabled:!1,supported:typeof window<"u"&&"DeviceOrientationEvent"in window,permission:"prompt",hasData:!1,gamma:0,beta:0,alpha:0,baseGamma:0,baseBeta:0,error:""},this._pointerLocked=!1,this._touchLookId=null,this._bindKeyboard(),this._bindMouse(),this._bindTouch()}_bindKeyboard(){window.addEventListener("keydown",t=>{t.code==="Space"&&t.preventDefault(),this.enabled&&(this.keys.add(t.code),t.code==="KeyR"&&!t.repeat&&this.onReload?.(),t.code==="Space"&&!t.repeat&&(this.jumpQueued=!0,this.onJump?.()),t.code==="Escape"&&document.pointerLockElement!==this.canvas&&this.onPause?.())}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.firing=!1})}_bindMouse(){const t=this.canvas;document.addEventListener("pointerlockchange",()=>{this._pointerLocked=document.pointerLockElement===t,!this._pointerLocked&&this.enabled&&this.onPause?.()}),window.addEventListener("mousemove",e=>{!this.enabled||this.isTouch||(this._pointerLocked?(this.lookDX+=e.movementX||0,this.lookDY+=e.movementY||0):this.dragging&&(this.lookDX+=e.clientX-this.lastPointer.x,this.lookDY+=e.clientY-this.lastPointer.y,this.lastPointer.x=e.clientX,this.lastPointer.y=e.clientY))}),t.addEventListener("mousedown",e=>{this.enabled&&(e.button===0&&(!this._pointerLocked&&!this.isTouch&&this.lockPointer(),this.dragging=!0,this.lastPointer.x=e.clientX,this.lastPointer.y=e.clientY,this.firing=!0),e.button===2&&(this.mouseAim=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(this.firing=!1,this.dragging=!1),e.button===2&&(this.mouseAim=!1)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("blur",()=>{this.mouseAim=!1})}_bindTouch(){const t=document.getElementById("stick"),e=document.getElementById("stickKnob"),n=document.getElementById("btnFire"),s=document.getElementById("btnAim"),r=document.getElementById("btnReload"),a=document.getElementById("btnJump");if(t&&e){let h=null;const u=44,f=(v,g)=>{e.style.transform=`translate(${v}px, ${g}px)`},d=v=>{const g=t.getBoundingClientRect(),p=g.left+g.width/2,S=g.top+g.height/2;let w=v.clientX-p,x=v.clientY-S;const E=Math.hypot(w,x);E>u&&(w=w/E*u,x=x/E*u),f(w,x),this.stick.x=w/u,this.stick.y=-x/u,this.stick.active=!0};t.addEventListener("pointerdown",v=>{v.preventDefault(),v.stopPropagation(),this.enabled&&(h=v.pointerId,t.setPointerCapture?.(v.pointerId),d(v))}),t.addEventListener("pointermove",v=>{v.pointerId===h&&(v.preventDefault(),d(v))});const m=v=>{v.pointerId===h&&(h=null,this.stick.x=0,this.stick.y=0,this.stick.active=!1,f(0,0))};t.addEventListener("pointerup",m),t.addEventListener("pointercancel",m),t.addEventListener("lostpointercapture",m)}if(n){const h=f=>{f.preventDefault(),f.stopPropagation(),this.enabled&&(n.setPointerCapture?.(f.pointerId),this.firing=!0)},u=f=>{f.preventDefault(),this.firing=!1};n.addEventListener("pointerdown",h),n.addEventListener("pointerup",u),n.addEventListener("pointercancel",u),n.addEventListener("pointerleave",u)}s?.addEventListener("pointerdown",h=>{h.preventDefault(),h.stopPropagation(),this.enabled&&(this.aimToggle=!this.aimToggle,s.classList.toggle("active",this.aimToggle))}),r?.addEventListener("pointerdown",h=>{h.preventDefault(),h.stopPropagation(),this.enabled&&this.onReload?.()}),a?.addEventListener("pointerdown",h=>{h.preventDefault(),h.stopPropagation(),this.enabled&&(this.jumpQueued=!0,this.onJump?.())});const o=h=>{!this.enabled||h.pointerType==="mouse"||h.clientX<window.innerWidth*.34||h.target.closest?.("button, .stick, .overlay, .touch-btn")||this._touchLookId===null&&(this._touchLookId=h.pointerId,this.lastPointer.x=h.clientX,this.lastPointer.y=h.clientY)},l=h=>{h.pointerId===this._touchLookId&&(this.lookDX+=(h.clientX-this.lastPointer.x)*1.15,this.lookDY+=(h.clientY-this.lastPointer.y)*1.15,this.lastPointer.x=h.clientX,this.lastPointer.y=h.clientY)},c=h=>{h.pointerId===this._touchLookId&&(this._touchLookId=null)};this.canvas.addEventListener("pointerdown",o),window.addEventListener("pointermove",l),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c)}lockPointer(){if(!this.isTouch)try{const t=this.canvas.requestPointerLock?.({unadjustedMovement:!0});t?.catch&&t.catch(()=>{})}catch{}}consumeLook(){const t=this.lookDX,e=this.lookDY;return this.lookDX=0,this.lookDY=0,{dx:t,dy:e}}consumeJump(){const t=this.jumpQueued;return this.jumpQueued=!1,t}get moveVector(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),t+=this.stick.x,e+=this.stick.y;const n=Math.hypot(t,e);return n>1&&(t/=n,e/=n),{x:t,y:e,magnitude:Math.min(1,n)}}get sprinting(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?!0:this.isTouch&&Math.hypot(this.stick.x,this.stick.y)>.92}get aiming(){return this.mouseAim||this.aimToggle}resetFlags(){this.firing=!1,this.mouseAim=!1,this.aimToggle=!1,this.stick.x=0,this.stick.y=0,this.stick.active=!1,this.jumpQueued=!1,this.keys.clear(),document.getElementById("btnAim")?.classList.remove("active");const t=document.getElementById("stickKnob");t&&(t.style.transform="translate(0px, 0px)")}releasePointer(){document.pointerLockElement===this.canvas&&document.exitPointerLock?.()}async enableTilt(){const t=this.tilt;if(!t.supported)return t.error="unsupported",!1;try{const e=window.DeviceOrientationEvent;if(typeof e.requestPermission=="function"&&await e.requestPermission()!=="granted")return t.permission="denied",t.error="denied",!1;t.permission="granted"}catch{return t.error="denied",!1}return t.enabled=!0,t.hasData=!1,t.error="",this._orientationHandler??=e=>{const n=this.tilt;e.gamma==null&&e.beta==null||(n.gamma=e.gamma??0,n.beta=e.beta??0,n.alpha=e.alpha??0,n.hasData||(n.baseGamma=n.gamma,n.baseBeta=n.beta,n.hasData=!0))},window.addEventListener("deviceorientation",this._orientationHandler,!0),!0}disableTilt(){this.tilt.enabled=!1,this._orientationHandler&&window.removeEventListener("deviceorientation",this._orientationHandler,!0)}recenterTilt(){const t=this.tilt;t.hasData&&(t.baseGamma=t.gamma,t.baseBeta=t.beta)}getTiltOffsets(){const t=this.tilt;if(!t.enabled||!t.hasData)return null;let e=t.gamma-t.baseGamma,n=t.beta-t.baseBeta;e>180&&(e-=360),e<-180&&(e+=360);const s=Math.PI/180;return{yaw:zc(e*s*1.15,-.85,.85),pitch:zc(n*s*.9,-.55,.55)}}}const Fi=320,y_=56,b_=14,w_=14,E_=18;class T_{constructor({scene:t,camera:e,level:n,engine:s}){this.scene=t,this.camera=e,this.level=n,this.engine=s,this.glow=vn({size:64,color:"255,255,255",core:.12}),this.muzzleTex=Yh({size:128}),this.holeTex=h_({size:128}),this.bloodTex=f_({size:128}),this.envFlash=new Qn(16756838,0,22,2),this.envFlash.position.set(0,2,0),t.add(this.envFlash),this._initTracers(),this._initSparks(),this._initDecals(),this._initPuffs(),this._initEnemyFlashes(),this._initRain(),this._initDust(),this._initRipples()}_initTracers(){this.tracers=[];const t=new Xe(.006,.006,1,5,1,!0);t.translate(0,.5,0);for(let e=0;e<30;e++){const n=new fe({color:16764826,transparent:!0,opacity:0,blending:ge,depthWrite:!1,toneMapped:!1}),s=new At(t,n);s.visible=!1,s.frustumCulled=!1,this.scene.add(s),this.tracers.push({mesh:s,mat:n,life:0,max:.07})}this._tracerIndex=0}tracer(t,e,{color:n=16766626,life:s=.07,width:r=1,opacity:a=.95}={}){const o=this.tracers[this._tracerIndex++%this.tracers.length],l=new C().subVectors(e,t),c=l.length();c<.05||(o.mesh.position.copy(t),o.mesh.quaternion.setFromUnitVectors(new C(0,1,0),l.normalize()),o.mesh.scale.set(r,c,r),o.mat.color.setHex(n),o.mat.opacity=a,o.life=s,o.max=s,o.mesh.visible=!0)}_initSparks(){const t=new we,e=new Float32Array(Fi*3),n=new Float32Array(Fi*3),s=new Float32Array(Fi);t.setAttribute("position",new We(e,3)),t.setAttribute("aColor",new We(n,3)),t.setAttribute("aLife",new We(s,1));const r=new qe({uniforms:{uMap:{value:this.glow}},vertexShader:`
        attribute float aLife;
        attribute vec3 aColor;
        varying float vLife;
        varying vec3 vColor;
        void main() {
          vLife = aLife;
          vColor = aColor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = (8.0 + 9.0 * aLife) * (180.0 / max(1.0, -mv.z));
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        varying float vLife;
        varying vec3 vColor;
        void main() {
          float a = texture2D(uMap, gl_PointCoord).a;
          gl_FragColor = vec4(vColor, a * clamp(vLife, 0.0, 1.0));
        }
      `,transparent:!0,depthWrite:!1,blending:ge}),a=new yo(t,r);a.frustumCulled=!1,a.renderOrder=6,this.scene.add(a),this.sparkGeo=t,this.sparkPos=e,this.sparkCol=n,this.sparkLife=s,this.sparks=[];for(let o=0;o<Fi;o++)this.sparks.push({vel:new C,life:0,max:1,drag:.9,gravity:9});this._sparkIndex=0}spawnSparks(t,e,{count:n=14,color:s=16759671,speed:r=5,size:a=1,gravity:o=9,blood:l=!1}={}){for(let c=0;c<n;c++){const h=this._sparkIndex++%Fi,u=this.sparks[h],f=new C(e.x+(Math.random()-.5)*1.7,e.y+(Math.random()-.5)*1.7+.35,e.z+(Math.random()-.5)*1.7).normalize();u.vel.copy(f).multiplyScalar(r*(.35+Math.random()*.9)),u.life=u.max=.25+Math.random()*(l?.35:.25),u.drag=l?4.5:1.2,u.gravity=o;const d=t.clone();d.addScaledVector(e,.02),this.sparkPos[h*3]=d.x,this.sparkPos[h*3+1]=d.y,this.sparkPos[h*3+2]=d.z;const m=new Gt(s);m.offsetHSL(0,0,(Math.random()-.5)*.2),this.sparkCol[h*3]=m.r*a,this.sparkCol[h*3+1]=m.g*a,this.sparkCol[h*3+2]=m.b*a,this.sparkLife[h]=1}this.sparkGeo.attributes.position.needsUpdate=!0,this.sparkGeo.attributes.aColor.needsUpdate=!0,this.sparkGeo.attributes.aLife.needsUpdate=!0}impact(t,e,n="concrete",s=!1){if(s){this.spawnSparks(t,e,{count:16,color:16722490,speed:3.4,gravity:9,blood:!0,size:1.4}),this.puff(t,e,6031888,.34,.55);return}n==="metal"?(this.spawnSparks(t,e,{count:16,color:16761466,speed:6.5,gravity:11}),this.puff(t,e,10133672,.22,.4)):n==="wood"?(this.spawnSparks(t,e,{count:10,color:13998684,speed:4,gravity:9}),this.puff(t,e,7033144,.4,.7)):(this.spawnSparks(t,e,{count:11,color:16762768,speed:4.8,gravity:10}),this.puff(t,e,9274743,.55,.8)),this.decal(t,e),this.envFlash.position.copy(t).addScaledVector(e,.5),this.envFlash.intensity=Math.max(this.envFlash.intensity,.55)}_initDecals(){this.decals=[];const t=new Fe(.22,.22);for(let e=0;e<y_;e++){const n=new fe({map:this.holeTex,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,toneMapped:!1}),s=new At(t,n);s.visible=!1,s.renderOrder=2,this.scene.add(s),this.decals.push({mesh:s,mat:n,life:0})}this._decalIndex=0}decal(t,e,n=1){const s=this.decals[this._decalIndex++%this.decals.length];s.mesh.position.copy(t).addScaledVector(e,.012),s.mesh.quaternion.setFromUnitVectors(new C(0,0,1),e.clone().normalize()),s.mesh.rotateZ(Math.random()*Math.PI*2),s.mesh.scale.setScalar(n*(.8+Math.random()*.5)),s.mat.opacity=.92,s.life=26,s.mesh.visible=!0}_initPuffs(){this.puffs=[];for(let t=0;t<b_;t++){const e=new Qe({map:this.glow,color:9078138,transparent:!0,opacity:0,depthWrite:!1,blending:di}),n=new sn(e);n.visible=!1,this.scene.add(n),this.puffs.push({sprite:n,mat:e,life:0,max:1,scale:1,drift:new C})}this._puffIndex=0}puff(t,e,n=9078138,s=.5,r=.7){const a=this.puffs[this._puffIndex++%this.puffs.length];a.sprite.position.copy(t).addScaledVector(e,.05),a.mat.color.setHex(n),a.mat.opacity=.42,a.life=r,a.max=r,a.scale=s,a.sprite.scale.setScalar(s*.5),a.sprite.visible=!0,a.drift.set((Math.random()-.5)*.3,.25+Math.random()*.3,(Math.random()-.5)*.3)}_initEnemyFlashes(){this.flashes=[];for(let t=0;t<w_;t++){const e=new Qe({map:this.muzzleTex,color:16761738,transparent:!0,opacity:0,depthWrite:!1,blending:ge,toneMapped:!1}),n=new sn(e);n.visible=!1,this.scene.add(n),this.flashes.push({sprite:n,mat:e,life:0})}this._flashIndex=0}enemyFlash(t,e=.55){const n=this.flashes[this._flashIndex++%this.flashes.length];n.sprite.position.copy(t),n.sprite.scale.setScalar(e*(.8+Math.random()*.5)),n.mat.opacity=1,n.life=.06,n.sprite.visible=!0}_initRain(){const t=this.engine?.mobile;this.rainCount=t?520:1100;const e=new Float32Array(this.rainCount*6);this.rainData=[];for(let r=0;r<this.rainCount;r++){const a=(Math.random()-.5)*44,o=Math.random()*24,l=(Math.random()-.5)*44;this.rainData.push({x:a,y:o,z:l,speed:18+Math.random()*9,len:.18+Math.random()*.22})}const n=new we;n.setAttribute("position",new We(e,3));const s=new Ko({color:11192800,transparent:!0,opacity:.1,blending:ge,depthWrite:!1});this.rain=new xf(n,s),this.rain.frustumCulled=!1,this.rainPositions=e,this.scene.add(this.rain)}_initDust(){const t=this.engine?.mobile?100:220,e=new Float32Array(t*3);this.dustData=[];for(let r=0;r<t;r++)this.dustData.push({x:(Math.random()-.5)*34,y:.4+Math.random()*7,z:(Math.random()-.5)*34,phase:Math.random()*Math.PI*2,speed:.08+Math.random()*.15});const n=new we;n.setAttribute("position",new We(e,3));const s=new Jo({size:.045,map:vn({size:32,color:"255,220,180",core:.2}),color:16767408,transparent:!0,opacity:.35,depthWrite:!1,blending:ge,sizeAttenuation:!0});this.dust=new yo(n,s),this.dust.frustumCulled=!1,this.dustPositions=e,this.scene.add(this.dust)}_initRipples(){const t=new Ls(.03,.05,14);this.ripples=[];for(let e=0;e<E_;e++){const n=new fe({color:11192026,transparent:!0,opacity:0,depthWrite:!1,side:Ee,blending:ge}),s=new At(t,n);s.rotation.x=-Math.PI/2,s.visible=!1,this.scene.add(s),this.ripples.push({mesh:s,mat:n,life:0})}this._rippleIndex=0,this._rippleTimer=0}ripple(t,e){const n=this.ripples[this._rippleIndex++%this.ripples.length];n.mesh.position.set(t,.02,e),n.mesh.scale.setScalar(1),n.mat.opacity=.5,n.life=.6,n.mesh.visible=!0}update(t,e){for(const a of this.tracers){if(a.life<=0)continue;a.life-=t;const o=Math.max(0,a.life/a.max);a.mat.opacity=o*.95,a.life<=0&&(a.mesh.visible=!1)}let n=!1;for(let a=0;a<Fi;a++){const o=this.sparks[a];if(o.life<=0)continue;o.life-=t;const l=a*3;o.vel.y-=o.gravity*t,o.vel.multiplyScalar(1-Math.min(1,o.drag*t)),this.sparkPos[l]+=o.vel.x*t,this.sparkPos[l+1]+=o.vel.y*t,this.sparkPos[l+2]+=o.vel.z*t,this.sparkPos[l+1]<.03&&(this.sparkPos[l+1]=.03,o.vel.y*=-.35,o.vel.x*=.6,o.vel.z*=.6),this.sparkLife[a]=Math.max(0,o.life/o.max),n=!0}n&&(this.sparkGeo.attributes.position.needsUpdate=!0,this.sparkGeo.attributes.aLife.needsUpdate=!0);for(const a of this.decals)a.life<=0||(a.life-=t,a.life<3&&(a.mat.opacity=Math.max(0,a.life/3*.92)),a.life<=0&&(a.mesh.visible=!1));for(const a of this.puffs){if(a.life<=0)continue;a.life-=t;const o=Math.max(0,a.life/a.max);a.mat.opacity=o*.4,a.sprite.scale.setScalar(a.scale*(.5+(1-o)*1.5)),a.sprite.position.addScaledVector(a.drift,t),a.life<=0&&(a.sprite.visible=!1)}for(const a of this.flashes)a.life<=0||(a.life-=t,a.mat.opacity=Math.max(0,a.life/.06),a.life<=0&&(a.sprite.visible=!1));this.envFlash.intensity*=Math.pow(4e-5,t),this.envFlash.intensity<.08&&(this.envFlash.intensity=0);const s=this.camera.position,r=this.rainPositions;for(let a=0;a<this.rainCount;a++){const o=this.rainData[a];o.y-=o.speed*t,o.y<0&&(o.y=18+Math.random()*8,o.x=(Math.random()-.5)*44,o.z=(Math.random()-.5)*44);let l=o.x+s.x*0,c=o.z+s.z*0;l=((o.x-s.x+22)%44+44)%44-22+s.x,c=((o.z-s.z+22)%44+44)%44-22+s.z;const h=a*6;r[h]=l,r[h+1]=o.y,r[h+2]=c,r[h+3]=l+.06,r[h+4]=o.y+o.len,r[h+5]=c+.02}this.rain.geometry.attributes.position.needsUpdate=!0;for(let a=0;a<this.dustData.length;a++){const o=this.dustData[a],l=a*3;o.y+=o.speed*.15*t,this.dustPositions[l]=o.x+Math.sin(e*o.speed+o.phase)*.7,this.dustPositions[l+1]=o.y+Math.sin(e*.4+o.phase)*.2,this.dustPositions[l+2]=o.z+Math.cos(e*o.speed*.8+o.phase)*.7,o.y>8&&(o.y=.3)}this.dust.geometry.attributes.position.needsUpdate=!0,this._rippleTimer-=t,this._rippleTimer<=0&&(this._rippleTimer=.12+Math.random()*.24,this.ripple(s.x+(Math.random()-.5)*18,s.z+(Math.random()-.5)*18));for(const a of this.ripples){if(a.life<=0)continue;a.life-=t;const o=Math.max(0,a.life/.6);a.mesh.scale.setScalar(1+(1-o)*7),a.mat.opacity=o*.42,a.life<=0&&(a.mesh.visible=!1)}}muzzleLight(t,e=30){this.envFlash.position.copy(t),this.envFlash.intensity=e}}class A_{constructor(){this.ctx=null,this.master=null,this.reverb=null,this.noiseBuffer=null,this.muted=!1,this.started=!1,this._ambientNodes=[]}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const n=e.createGain();n.gain.value=this.muted?0:.55;const s=e.createDynamicsCompressor();s.threshold.value=-16,s.knee.value=18,s.ratio.value=5,s.attack.value=.002,s.release.value=.22,n.connect(s),s.connect(e.destination),this.master=n;const r=Math.floor(e.sampleRate*1.8),a=e.createBuffer(2,r,e.sampleRate);for(let f=0;f<2;f++){const d=a.getChannelData(f);for(let m=0;m<r;m++){const v=m/r;d[m]=(Math.random()*2-1)*Math.pow(1-v,2.6)*(.55+Math.sin(m*.001)*.1)}}const o=e.createConvolver();o.buffer=a;const l=e.createGain();l.gain.value=.35,o.connect(l),l.connect(n),this.reverb=o;const c=Math.floor(e.sampleRate*2),h=e.createBuffer(1,c,e.sampleRate),u=h.getChannelData(0);for(let f=0;f<c;f++)u[f]=Math.random()*2-1;this.noiseBuffer=h,this._startAmbience(),this.started=!0}resume(){this.ctx||this.init(),this.ctx?.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.linearRampToValueAtTime(t?0:.55,this.ctx.currentTime+.08))}get t(){return this.ctx?.currentTime??0}_noise(t=.2,e=0){const n=this.ctx,s=n.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!0;const r=n.currentTime+e+Math.random()*.4;return s.start(r,Math.random()*1.2),s.stop(r+t+.05),s}_send(t,e=.5){if(!this.reverb)return;const n=this.ctx.createGain();n.gain.value=e,t.connect(n),n.connect(this.reverb)}_env(t,e,n,s,r=1){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(r,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+s)}_startAmbience(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0,e.playbackRate.value=.35;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=260;const s=t.createGain();s.gain.value=.045;const r=t.createOscillator();r.frequency.value=.07;const a=t.createGain();a.gain.value=.02,r.connect(a),a.connect(s.gain),e.connect(n),n.connect(s),s.connect(this.master),e.start(),r.start();const o=t.createOscillator();o.type="sine",o.frequency.value=54;const l=t.createGain();l.gain.value=.02;const c=t.createOscillator();c.type="triangle",c.frequency.value=108.5;const h=t.createGain();h.gain.value=.006,o.connect(l),c.connect(h),l.connect(this.master),h.connect(this.master),o.start(),c.start();const u=t.createBufferSource();u.buffer=this.noiseBuffer,u.loop=!0,u.playbackRate.value=.7;const f=t.createBiquadFilter();f.type="highpass",f.frequency.value=1400;const d=t.createGain();d.gain.value=.028,u.connect(f),f.connect(d),d.connect(this.master),u.start(),this._ambientNodes.push(e,r,o,c,u)}shot(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=this._noise(.18),s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=2400+Math.random()*600,s.Q.value=.7;const r=t.createGain();this._env(r,e,.002,.16,.95),n.connect(s),s.connect(r),r.connect(this.master),this._send(r,.7);const a=this._noise(.24),o=t.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(1600,e),o.frequency.exponentialRampToValueAtTime(240,e+.18);const l=t.createGain();this._env(l,e,.001,.2,.85),a.connect(o),o.connect(l),l.connect(this.master),this._send(l,.9);const c=t.createOscillator();c.type="sine",c.frequency.setValueAtTime(150,e),c.frequency.exponentialRampToValueAtTime(46,e+.11);const h=t.createGain();this._env(h,e,.002,.14,.7),c.connect(h),h.connect(this.master),this._send(h,.5),c.start(e),c.stop(e+.2);const u=this._noise(.03,.02),f=t.createBiquadFilter();f.type="highpass",f.frequency.value=3200;const d=t.createGain();d.gain.value=.18,u.connect(f),f.connect(d),d.connect(this.master)}enemyShot(t=10){if(!this.ctx)return;const e=this.ctx,n=Math.min(.22,t/340),s=e.currentTime+n,r=this._noise(.16,n),a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(1500,s),a.frequency.exponentialRampToValueAtTime(300,s+.12);const o=e.createGain(),l=Math.max(.08,.5/(1+t*.09));this._env(o,s,.002,.16,l),r.connect(a),a.connect(o),o.connect(this.master),this._send(o,.6);const c=e.createOscillator();c.frequency.setValueAtTime(110,s),c.frequency.exponentialRampToValueAtTime(40,s+.1);const h=e.createGain();this._env(h,s,.003,.12,l*.6),c.connect(h),h.connect(this.master),c.start(s),c.stop(s+.18)}hit(t=!1){if(!this.ctx)return;const e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(t?2400:1500,n),s.frequency.exponentialRampToValueAtTime(t?3e3:1800,n+.035);const r=e.createGain();this._env(r,n,.001,.055,t?.3:.2),s.connect(r),r.connect(this.master),s.start(n),s.stop(n+.1)}kill(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;[660,990].forEach((n,s)=>{const r=t.createOscillator();r.type="sine",r.frequency.value=n;const a=t.createGain();this._env(a,e+s*.045,.002,.12,.16),r.connect(a),a.connect(this.master),r.start(e+s*.045),r.stop(e+s*.045+.18)})}hurt(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=this._noise(.2),s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=600;const r=t.createGain();this._env(r,e,.002,.2,.5),n.connect(s),s.connect(r),r.connect(this.master);const a=t.createOscillator();a.frequency.setValueAtTime(90,e),a.frequency.exponentialRampToValueAtTime(48,e+.2);const o=t.createGain();this._env(o,e,.002,.22,.4),a.connect(o),o.connect(this.master),a.start(e),a.stop(e+.25)}death(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(38,e+1.4);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=700;const r=t.createGain();this._env(r,e,.01,1.5,.28),n.connect(s),s.connect(r),r.connect(this.master),this._send(r,.9),n.start(e),n.stop(e+1.6)}reload(){if(!this.ctx)return;const t=this.ctx,e=[[0,2400,.14],[.28,900,.2],[1.05,1500,.22],[1.55,2600,.16]];for(const[n,s,r]of e){const a=t.currentTime+n,o=this._noise(.05,n),l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=s,l.Q.value=1.6;const c=t.createGain();this._env(c,a,.001,.05,r),o.connect(l),l.connect(c),c.connect(this.master),this._send(c,.25)}}empty(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this._noise(.04),n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=2800;const s=this.ctx.createGain();this._env(s,t,.001,.04,.16),e.connect(n),n.connect(s),s.connect(this.master)}footstep(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=this._noise(.08),s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=420;const r=t.createGain();this._env(r,e,.003,.07,.13),n.connect(s),s.connect(r),r.connect(this.master)}waveStart(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;[55,82.5,110,164.8].forEach((a,o)=>{const l=t.createOscillator();l.type="sine",l.frequency.value=a;const c=t.createGain();this._env(c,e,.2+o*.04,1.1,.12),l.connect(c),c.connect(this.master),this._send(c,.6),l.start(e),l.stop(e+1.5)});const n=this._noise(.9),s=t.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(300,e),s.frequency.exponentialRampToValueAtTime(1600,e+.7);const r=t.createGain();this._env(r,e,.4,.55,.14),n.connect(s),s.connect(r),r.connect(this.master)}waveClear(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;[261.6,329.6,392,523.2].forEach((n,s)=>{const r=t.createOscillator();r.type="triangle",r.frequency.value=n;const a=t.createGain();this._env(a,e+s*.09,.03,.6,.1),r.connect(a),a.connect(this.master),this._send(a,.7),r.start(e+s*.09),r.stop(e+s*.09+.8)})}ui(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="square",n.frequency.value=880;const s=t.createGain();this._env(s,e,.001,.045,.05),n.connect(s),s.connect(this.master),n.start(e),n.stop(e+.08)}}const kc={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"};class R_{constructor(){this.el={hud:document.getElementById("hud"),wave:document.getElementById("waveLabel"),hostiles:document.getElementById("hostileValue"),score:document.getElementById("scoreValue"),healthFill:document.getElementById("healthFill"),healthNum:document.getElementById("healthNum"),healthState:document.getElementById("healthState"),ammoMag:document.getElementById("ammoMag"),ammoReserve:document.getElementById("ammoReserve"),reloadFill:document.getElementById("reloadFill"),reloadTrack:document.querySelector(".reload-track"),reloadChip:document.getElementById("statusReload"),crosshair:document.getElementById("crosshair"),hitmarker:document.getElementById("hitmarker"),damageFlash:document.getElementById("damageFlash"),damageDirs:document.getElementById("damageDirs"),hitFlash:document.getElementById("hitFlash"),banner:document.getElementById("banner"),bannerMain:document.getElementById("bannerMain"),bannerSub:document.getElementById("bannerSub"),killfeed:document.getElementById("killfeed"),compassStrip:document.getElementById("compassStrip"),compassMask:document.querySelector(".compass-mask"),compassHeading:document.getElementById("compassHeading"),touchUI:document.getElementById("touchUI"),perfReadout:document.getElementById("perfReadout")},this.cache={health:-1,mag:-1,reserve:-1,score:-1,wave:-1,hostiles:-1,reload:null,spread:-1,ads:null,compass:-1},this._bannerTimer=0,this._compassWidth=0,this._buildCompass(),window.addEventListener("resize",()=>this._buildCompass())}_buildCompass(){const t=this.el.compassStrip;if(!t)return;t.innerHTML="";const e=2.2,n=1080;for(let r=0;r<=n;r+=5){const a=document.createElement("i"),o=r%360,l=o%45===0,c=o%15===0;if(a.className=`compass-tick ${l?"major":c?"mid":"minor"}`,a.style.left=`${r*e}px`,l){a.style.height="10px";const h=document.createElement("span");h.className=`compass-label ${o%90===0?"cardinal":""}`,h.textContent=kc[o]??`${o}`,h.style.left=`${r*e}px`,t.appendChild(h)}t.appendChild(a)}t.style.width=`${n*e}px`;const s=this.el.compassMask?.clientWidth||320;this._compassWidth=s,this._compassPx=e}show(){this.el.hud.classList.remove("hidden")}hide(){this.el.hud.classList.add("hidden")}showTouch(t){this.el.touchUI.classList.toggle("hidden",!t)}reset(){this.cache={health:-1,mag:-1,reserve:-1,score:-1,wave:-1,hostiles:-1,reload:null,spread:-1,ads:null,compass:-1},this.el.killfeed.innerHTML="",this.setHealth(100,100),this.setAmmo(30,150,!1,0),this.setScore(0),this.setWave(1,0),this.setReloadChip(!1),this.el.crosshair.classList.remove("ads"),this.el.hitmarker.classList.remove("show","kill")}update({health:t,maxHealth:e,mag:n,reserve:s,reloading:r,reloadProgress:a,score:o,wave:l,hostiles:c,yaw:h,ads:u,spread:f}){const d=this.cache;if(t!==d.health){d.health=t;const m=Math.max(0,Math.min(1,t/e));this.el.healthFill.style.width=`${m*100}%`,this.el.healthNum.textContent=Math.max(0,Math.round(t)),this.el.healthFill.classList.toggle("warn",m<=.55&&m>.28),this.el.healthFill.classList.toggle("crit",m<=.28),this.el.healthState.textContent=m>.55?"STABLE":m>.28?"WOUNDED":"CRITICAL",this.el.healthState.className=`vitals-state ${m>.55?"":m>.28?"warn":"crit"}`}if((n!==d.mag||s!==d.reserve)&&(d.mag=n,d.reserve=s,this.el.ammoMag.textContent=String(n).padStart(2,"0"),this.el.ammoReserve.textContent=String(s),this.el.ammoMag.classList.toggle("low",n>0&&n<=8),this.el.ammoMag.classList.toggle("empty",n===0)),r!==d.reload&&(d.reload=r,this.el.reloadTrack.classList.toggle("on",r),this.setReloadChip(r)),r&&(this.el.reloadFill.style.width=`${Math.min(100,a*100)}%`),o!==d.score&&(d.score=o,this.el.score.textContent=o.toLocaleString("en-US")),l!==d.wave&&(d.wave=l,this.el.wave.textContent=`WAVE ${String(l).padStart(2,"0")}`),c!==d.hostiles&&(d.hostiles=c,this.el.hostiles.textContent=String(c)),h!==void 0&&Math.abs(h-d.compass)>.15){d.compass=h;const m=(h*180/Math.PI%360+360)%360,g=this._compassWidth/2-(360+m)*this._compassPx;this.el.compassStrip.style.transform=`translate3d(${g}px, 0, 0)`;const p=kc[Math.round(m/45)*45%360];this.el.compassHeading.textContent=`${p} ${String(Math.round(m)).padStart(3,"0")}°`}if(u!==d.ads&&(d.ads=u,this.el.crosshair.classList.toggle("ads",u)),f!==d.spread){d.spread=f;const m=Math.min(15,2+f),v=this.el.crosshair.children;v[0]&&(v[0].style.transform=`translateY(${-m}px)`),v[1]&&(v[1].style.transform=`translateX(${m}px)`),v[2]&&(v[2].style.transform=`translateY(${m}px)`),v[3]&&(v[3].style.transform=`translateX(${-m}px)`)}}setHealth(t,e=100){this.cache.health=t;const n=Math.max(0,Math.min(1,t/e));this.el.healthFill.style.width=`${n*100}%`,this.el.healthNum.textContent=Math.max(0,Math.round(t)),this.el.healthFill.classList.toggle("warn",n<=.55&&n>.28),this.el.healthFill.classList.toggle("crit",n<=.28),this.el.healthState.textContent=n>.55?"STABLE":n>.28?"WOUNDED":"CRITICAL",this.el.healthState.className=`vitals-state ${n>.55?"":n>.28?"warn":"crit"}`}setAmmo(t,e,n=!1,s=0){this.cache.mag=t,this.cache.reserve=e,this.cache.reload=n,this.el.ammoMag.textContent=String(t).padStart(2,"0"),this.el.ammoReserve.textContent=String(e),this.el.ammoMag.classList.toggle("low",t>0&&t<=8),this.el.ammoMag.classList.toggle("empty",t===0),this.el.reloadTrack.classList.toggle("on",n),n&&(this.el.reloadFill.style.width=`${Math.min(100,s*100)}%`),this.setReloadChip(n)}setScore(t){this.cache.score=t,this.el.score.textContent=t.toLocaleString("en-US")}setWave(t,e=0){this.cache.wave=t,this.cache.hostiles=e,this.el.wave.textContent=`WAVE ${String(t).padStart(2,"0")}`,this.el.hostiles.textContent=String(e)}setSpread(){}setReloadChip(t){this.el.reloadChip.classList.toggle("on",!!t)}hitmarker(t=!1,e=!1){const n=this.el.hitmarker;n.classList.remove("show","kill"),n.offsetWidth,e&&n.classList.add("kill"),n.classList.add("show"),clearTimeout(this._hitTimer),this._hitTimer=setTimeout(()=>n.classList.remove("show"),260);const s=this.el.hitFlash;s.classList.remove("on"),s.offsetWidth,s.classList.add("on")}damage(t=0){const e=this.el.damageFlash;e.classList.add("hit"),clearTimeout(this._dmgTimer),this._dmgTimer=setTimeout(()=>e.classList.remove("hit"),120);const n=document.createElement("div");n.className="dmg-arrow",n.style.transform=`rotate(${t}rad)`,this.el.damageDirs.appendChild(n),setTimeout(()=>n.remove(),950)}killFeed(t,e,n){const s=document.createElement("div");for(s.className="feed-item",s.innerHTML=`<span>${t}</span> <b>${e?'<span class="head">HEADSHOT</span>':"ELIMINATED"}</b> <span class="score">+${n}</span>`,this.el.killfeed.prepend(s),setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),400)},2800);this.el.killfeed.children.length>4;)this.el.killfeed.lastElementChild.remove()}banner(t,e="",n=2400){this.el.bannerMain.textContent=t,this.el.bannerSub.textContent=e,this.el.banner.classList.remove("show"),this.el.banner.offsetWidth,this.el.banner.classList.add("show"),clearTimeout(this._bannerTimer),this._bannerTimer=setTimeout(()=>this.el.banner.classList.remove("show"),n)}setPerf(t){this.el.perfReadout&&(this.el.perfReadout.textContent=t)}}const C_=new C(0,1,0),Zn=new C,vr=new C,Gc=new C,xr=new C,Pa=new C;class P_{constructor({camera:t,weaponCamera:e,level:n,input:s,weapon:r,effects:a,audio:o,hud:l,engine:c}){this.camera=t,this.weaponCamera=e,this.level=n,this.input=s,this.weapon=r,this.effects=a,this.audio=o,this.hud=l,this.engine=c,this.camera.rotation.order="YXZ",this.raycaster=new Nh,this.raycaster.far=140,this.position=new C,this.velocity=new C,this.magSize=30,this.enabled=!1,this.alive=!0,this.onDeath=null,this.tmpTilt={yaw:0,pitch:0},this.tiltApplied={yaw:0,pitch:0},this.reset()}reset(){this.position.copy(this.level.playerStart),this.velocity.set(0,0,0),this.yaw=this.level.playerStartYaw,this.pitch=-.015,this.jumpY=0,this.vy=0,this.onGround=!0,this.health=100,this.maxHealth=100,this.alive=!0,this.ammo=30,this.reserve=150,this.reloading=!1,this.reloadT=0,this.reloadDuration=1.9,this.fireTimer=0,this.shotInterval=.093,this.recoilPitch=0,this.recoilYaw=0,this.shake=0,this.shakeX=0,this.shakeY=0,this.bobT=0,this.moveAmount=0,this.ads=0,this.time=0,this.lastDamage=-99,this.stepT=0,this.emptyClicked=!1,this.deathT=0,this.enemies=null,this.timeAlive=0,this.stats={shots:0,hits:0,kills:0,headshots:0},this.tiltApplied.yaw=0,this.tiltApplied.pitch=0,this.hud.setHealth(this.health,this.maxHealth),this.hud.setAmmo(this.ammo,this.reserve,!1,0),this.weapon.root.visible=!0,this.weapon.state.recoil=0,this.weapon.state.ads=0,this.weapon.state.reloadT=0}get eyePosition(){return this.camera.position}update(t){if(this.time+=t,!this.alive){this.updateDeath(t);return}if(!this.enabled)return;this.timeAlive+=t;const e=this.input.consumeLook(),n=this.input.isTouch?.0034:.0022;this.yaw-=e.dx*n,this.pitch-=e.dy*n,this.pitch=nn.clamp(this.pitch,-1.28,1.28);const s=this.input.getTiltOffsets();if(s){const v=Math.min(1,t*9),g=this.tiltApplied.yaw,p=this.tiltApplied.pitch;this.tiltApplied.yaw+=(s.yaw-g)*v,this.tiltApplied.pitch+=(s.pitch-p)*v,this.yaw-=this.tiltApplied.yaw-g,this.pitch+=this.tiltApplied.pitch-p,this.pitch=nn.clamp(this.pitch,-1.3,1.3)}else(this.tiltApplied.yaw!==0||this.tiltApplied.pitch!==0)&&(this.tiltApplied.yaw=0,this.tiltApplied.pitch=0);const r=this.input.moveVector,a=1-this.ads*.5,o=this.input.sprinting&&r.y>.25&&this.ads<.3&&!this.reloading,l=(o?6.8:4.55)*a,c=Zn.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),h=vr.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),u=new C().addScaledVector(c,r.y).addScaledVector(h,r.x);u.lengthSq()>1&&u.normalize(),u.multiplyScalar(l);const f=this.onGround?12:3;this.velocity.x+=(u.x-this.velocity.x)*Math.min(1,t*f),this.velocity.z+=(u.z-this.velocity.z)*Math.min(1,t*f),this.input.consumeJump()&&this.onGround&&(this.vy=5.3,this.onGround=!1),this.onGround||(this.vy-=16.5*t,this.jumpY+=this.vy*t,this.jumpY<=0&&(this.jumpY=0,this.vy=0,this.onGround=!0,this.shake=Math.max(this.shake,.35))),this.moveHorizontal(t),this.moveAmount=Math.min(1,Math.hypot(this.velocity.x,this.velocity.z)/5),this.onGround&&this.moveAmount>.1?(this.bobT+=t*(7.5+this.moveAmount*6.5)*(this.ads>.5?.6:1),this.stepT+=t,this.stepT>(o?.33:.46)&&(this.stepT=0,this.audio.footstep())):this.stepT=0;const m=!this.reloading&&!o&&this.input.aiming?1:0;this.ads+=(m-this.ads)*Math.min(1,t*10),this.reloading&&(this.reloadT+=t,this.reloadT>=this.reloadDuration&&this.finishReload()),this.fireTimer-=t,this.input.firing&&!this.reloading&&(this.ammo>0?this.fireTimer<=0&&this.fire():this.emptyClicked||(this.emptyClicked=!0,this.audio.empty())),this.input.firing||(this.emptyClicked=!1),this.recoilPitch*=Math.pow(8e-4,t),this.recoilYaw*=Math.pow(.0015,t),this.shake*=Math.pow(.0012,t),this.shakeX=(Math.random()-.5)*this.shake*.08,this.shakeY=(Math.random()-.5)*this.shake*.06,this.time-this.lastDamage>4.5&&this.health<this.maxHealth&&(this.health=Math.min(this.maxHealth,this.health+15*t)),this.updateCamera(t,r,o),this.updateWeapon(t,e,o),this.updateHud(o)}moveHorizontal(t){const n=this.position.x+this.velocity.x*t;this.collides(n,this.position.z,.4)?this.velocity.x*=.2:this.position.x=n;const s=this.position.z+this.velocity.z*t;this.collides(this.position.x,s,.4)?this.velocity.z*=.2:this.position.z=s,this.position.x=nn.clamp(this.position.x,-this.level.bounds,this.level.bounds),this.position.z=nn.clamp(this.position.z,-this.level.bounds,this.level.bounds)}collides(t,e,n){for(const s of this.level.blockers)if(t>s.minX-n&&t<s.maxX+n&&e>s.minZ-n&&e<s.maxZ+n)return!0;return!1}updateCamera(t,e,n){const r=nn.lerp(76,54,this.ads);Math.abs(this.camera.fov-r)>.01&&(this.camera.fov+=(r-this.camera.fov)*Math.min(1,t*14),this.camera.updateProjectionMatrix(),this.weaponCamera.fov=this.camera.fov,this.weaponCamera.updateProjectionMatrix());const a=Math.sin(this.bobT*2)*.017*this.moveAmount*(1-this.ads*.75),o=-e.x*.018*(1-this.ads*.6)+Math.sin(this.bobT)*.004*this.moveAmount;this.camera.position.set(this.position.x+this.shakeX,this.position.y+1.68+this.jumpY+a+this.shakeY,this.position.z),this.camera.rotation.set(nn.clamp(this.pitch+this.recoilPitch+this.shakeY*.4,-1.5,1.5),this.yaw+this.recoilYaw+this.shakeX*.5,o,"YXZ"),this.camera.updateMatrixWorld(!0),document.body.classList.toggle("ads",this.enabled&&this.ads>.7)}updateWeapon(t,e,n){this.weapon.update(t,{adsTarget:this.ads,moving:this.moveAmount*(this.ads>.5?.4:1),sprinting:n,reloadProgress:this.reloading?this.reloadT/this.reloadDuration:0,lookDX:e.dx,lookDY:e.dy,bobT:this.bobT,time:this.time})}updateHud(){const t=4+this.moveAmount*7+Math.abs(this.recoilPitch)*520+(1-this.ads)*3;this.hud.update({health:this.health,maxHealth:this.maxHealth,mag:this.ammo,reserve:this.reserve,reloading:this.reloading,reloadProgress:this.reloadT/this.reloadDuration,score:this.score??0,wave:this.wave??1,hostiles:this.hostiles??0,yaw:this.yaw,ads:this.ads>.62,spread:Math.min(16,t)})}fire(){this.fireTimer=this.shotInterval,this.ammo--,this.stats.shots++,this.weapon.triggerFlash(),this.weapon.state.recoil=Math.min(1,this.weapon.state.recoil+.45),this.audio.shot(),this.recoilPitch+=.011+Math.random()*.0045,this.recoilYaw+=(Math.random()-.5)*.009,this.shake=Math.min(1.1,this.shake+.28);const t=(this.ads>.6?.0028:.0125)+this.moveAmount*.013+Math.abs(this.recoilPitch)*.35;this.camera.getWorldDirection(Zn),vr.crossVectors(Zn,C_).normalize(),Gc.crossVectors(vr,Zn).normalize();const e=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*t;Zn.addScaledVector(vr,Math.cos(e)*n).addScaledVector(Gc,Math.sin(e)*n).normalize(),Pa.copy(this.camera.position),this.raycaster.set(Pa,Zn);const s=this.enemies?this.enemies.hitboxes.concat(this.level.shootables):this.level.shootables,r=this.raycaster.intersectObjects(s,!1);let a=L_().copy(Pa).addScaledVector(Zn,90);if(r.length){const o=r[0];a=o.point;const l=o.object.userData.enemy,c=o.face?o.face.normal.clone().transformDirection(o.object.matrixWorld):Zn.clone().negate();if(l){const h=o.object.userData.part==="head",u=l.takeDamage(h?140:38,h,o.point,c);this.stats.hits++,u&&this.stats.kills++,u&&h&&this.stats.headshots++,this.effects.impact(o.point,c,"flesh",!0),this.hud.hitmarker(h,u),this.audio.hit(h),u&&this.audio.kill()}else{const h=o.object.material,u=o.object.userData.surface||(h&&h.metalness>.6?"metal":(h&&h.color&&h.color.getHex()>7031340,"concrete"));this.effects.impact(o.point,c,u)}}this.weapon.getMuzzleCameraPosition(xr),this.camera.localToWorld(xr),this.effects.tracer(xr,a.clone(),{color:16766884,life:.065,width:.7,opacity:.95}),this.effects.muzzleLight(xr,20),this.ammo===0&&this.reserve>0&&this.startReload()}startReload(){this.reloading||this.ammo>=this.magSize||this.reserve<=0||!this.alive||(this.reloading=!0,this.reloadT=0,this.audio.reload())}finishReload(){const t=this.magSize-this.ammo,e=Math.min(t,this.reserve);this.ammo+=e,this.reserve-=e,this.reloading=!1,this.reloadT=0,this.input.aimToggle=!1,document.getElementById("btnAim")?.classList.remove("active")}addReserve(t){this.reserve=Math.min(300,this.reserve+t)}takeDamage(t,e){if(!this.alive||!this.enabled)return;this.health-=t,this.lastDamage=this.time,this.shake=Math.min(1.4,this.shake+.7),this.audio.hurt();let n=0;if(e){const s=e.x-this.position.x,r=e.z-this.position.z,a=-Math.sin(this.yaw),o=-Math.cos(this.yaw),l=Math.cos(this.yaw),c=-Math.sin(this.yaw);n=Math.atan2(s*l+r*c,s*a+r*o)}this.hud.damage(n),this.health<=0&&(this.health=0,this.die())}die(){this.alive&&(this.alive=!1,this.deathT=0,this.input.firing=!1,this.input.resetFlags(),this.audio.death(),this.weapon.root.visible=!1,this.onDeath?.(this.stats))}updateDeath(t){this.deathT+=t,this.camera.position.y+=(.55-this.camera.position.y)*Math.min(1,t*4),this.camera.rotation.z+=(1.1-this.camera.rotation.z)*Math.min(1,t*4),this.camera.rotation.x+=(-.35-this.camera.rotation.x)*Math.min(1,t*3),this.camera.updateMatrixWorld(!0),this.weapon.root.visible=!1}}function L_(){return new C}const La=new Nh,D_=new C,I_=new C,N_=new C;function U_(i){return{cloth:new ie({color:i?3883581:4541766,roughness:.94,metalness:.04}),armor:new ie({color:i?5523772:4937308,roughness:.64,metalness:.36,envMapIntensity:.8}),helmet:new ie({color:i?4537909:3818572,roughness:.52,metalness:.5,envMapIntensity:1}),rubber:new ie({color:1185048,roughness:.9,metalness:.1}),visor:new fe({color:i?16747054:16723773,toneMapped:!1}),metal:new ie({color:5923692,roughness:.4,metalness:.85}),pack:new ie({color:2764844,roughness:.86,metalness:.08})}}const Da=vn({size:64,color:"255,60,70",core:.2});class F_{constructor(t,{position:e,heavy:n=!1,wave:s=1}){this.system=t,this.heavy=n,this.wave=s,this.health=n?210:100,this.maxHealth=this.health,this.speed=n?2.15:3+Math.random()*.8,this.radius=n?.48:.4,this.dead=!1,this.deathT=0,this.removed=!1,this.spawnT=.55,this.fireCooldown=1+Math.random()*1,this.burstLeft=0,this.burstTimer=0,this.aimT=0,this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=1+Math.random()*2,this.flinch=0,this.losTimer=0,this.hasLOS=!1,this.walkPhase=Math.random()*Math.PI*2,this.target=new C,this.moving=!1,this.mats=U_(n),this._build(e),this.system.scene.add(this.group)}_build(t){const e=new Me;e.position.copy(t),this.group=e;const n=this.mats,s=(T,_=e)=>(T.castShadow=!0,T.receiveShadow=!0,_.add(T),T),r=(T,_,y,N,P,L,F,k=0,I=0,H=0,K=e)=>{const z=new At(new Ne(T,_,y),N);return z.position.set(P,L,F),z.rotation.set(k,I,H),s(z,K),z};this.pelvis=r(.3,.2,.22,n.cloth,0,.94,0);const a=T=>{const _=new Me;_.position.set(T*.105,.9,0),e.add(_),r(.14,.44,.16,n.cloth,0,-.2,0,0,0,0,_),r(.15,.12,.17,n.armor,0,-.4,.005,0,0,0,_);const y=new Me;return y.position.set(0,-.44,0),_.add(y),r(.12,.42,.14,n.cloth,0,-.21,0,0,0,0,y),r(.145,.13,.27,n.rubber,0,-.4,.04,0,0,0,y),{hip:_,knee:y}};this.legL=a(-1),this.legR=a(1),this.torso=new Me,this.torso.position.set(0,.98,0),e.add(this.torso);const o=r(.4,.46,.24,n.cloth,0,.24,0,0,0,0,this.torso),l=r(.46,.4,.29,n.armor,0,.23,.005,0,0,0,this.torso);r(.12,.18,.06,n.pack,-.12,.15,.17,0,0,0,this.torso),r(.12,.18,.06,n.pack,.12,.15,.17,0,0,0,this.torso),r(.1,.1,.05,n.pack,0,.33,.17,0,0,0,this.torso),r(.34,.4,.18,n.pack,0,.24,-.18,0,0,0,this.torso);const c=new At(new Ne(.035,.02,.01),n.visor);c.position.set(.13,.36,.152),this.torso.add(c),r(.16,.045,.012,n.pack,-.12,.36,.152,0,0,0,this.torso);const h=T=>{const _=new Me;_.position.set(T*.265,.44,0),this.torso.add(_),r(.15,.15,.17,n.armor,0,-.02,0,0,0,0,_),r(.11,.3,.12,n.cloth,0,-.2,0,0,0,0,_);const y=new Me;return y.position.set(0,-.34,0),_.add(y),r(.1,.28,.11,n.cloth,0,-.14,0,0,0,0,y),r(.105,.11,.14,n.rubber,0,-.3,.01,0,0,0,y),{shoulder:_,elbow:y}};this.armL=h(-1),this.armR=h(1),this.headPivot=new Me,this.headPivot.position.set(0,.5,0),this.torso.add(this.headPivot);const u=new At(new Xe(.06,.07,.1,8),n.cloth);u.position.y=.02,s(u,this.headPivot);const f=new At(new Sn(.115,14,12),n.rubber);f.position.y=.13,f.scale.set(.95,1.05,1),s(f,this.headPivot);const d=new At(new Sn(.135,14,10,0,Math.PI*2,0,Math.PI*.62),n.helmet);d.position.y=.15,d.scale.set(1,.95,1.05),s(d,this.headPivot);const m=new At(new Ne(.19,.025,.06),n.armor);m.position.set(0,.215,.08),s(m,this.headPivot);const v=new At(new Xe(.026,.03,.07,8),n.armor);v.rotation.x=Math.PI/2,v.position.set(0,.22,.11),s(v,this.headPivot);const g=new At(new Ne(.175,.045,.03),n.visor);g.position.set(0,.135,.112),s(g,this.headPivot),this.visor=g;const p=new At(new Ne(.04,.02,.01),n.visor);p.position.set(.21,.43,.09),this.torso.add(p),this.visorGlow=new sn(new Qe({map:Da,color:this.heavy?16750648:16725062,transparent:!0,opacity:.55,depthWrite:!1,blending:ge,toneMapped:!1})),this.visorGlow.position.set(0,1.73,.14),this.visorGlow.scale.setScalar(.2),e.add(this.visorGlow),this.chestGlow=new sn(new Qe({map:Da,color:this.heavy?16750648:16725062,transparent:!0,opacity:.3,depthWrite:!1,blending:ge,toneMapped:!1})),this.chestGlow.position.set(.13,1.34,.17),this.chestGlow.scale.setScalar(.12),this.torso.add(this.chestGlow),this.rifle=new Me,this.rifle.position.set(.11,.28,.24),this.torso.add(this.rifle),r(.06,.09,.34,n.metal,0,0,0,0,0,0,this.rifle),r(.05,.06,.24,n.armor,0,.01,.25,0,0,0,this.rifle);const S=new At(new Xe(.012,.012,.24,8),n.metal);S.rotation.x=Math.PI/2,S.position.set(0,.015,.44),s(S,this.rifle),r(.04,.12,.06,n.rubber,0,-.09,-.06,.2,0,0,this.rifle),r(.03,.09,.05,n.rubber,0,-.06,.08,-.2,0,0,this.rifle);const w=new At(new Ne(.035,.05,.08),n.armor);w.position.set(0,.07,.1),s(w,this.rifle);const x=new we().setFromPoints([new C,new C(0,0,1)]);this.laser=new ph(x,new Ko({color:16722486,transparent:!0,opacity:0,blending:ge,depthWrite:!1,toneMapped:!1})),this.laser.frustumCulled=!1,this.laser.renderOrder=3,this.system.scene.add(this.laser),this.spawnFlare=new sn(new Qe({map:Da,color:16726596,transparent:!0,opacity:.8,depthWrite:!1,blending:ge,toneMapped:!1})),this.spawnFlare.position.set(0,.9,0),this.spawnFlare.scale.setScalar(2.2),e.add(this.spawnFlare),this.hitboxes=[];const E=(T,_)=>{T.userData.enemy=this,T.userData.part=_,this.hitboxes.push(T)};E(f,"head"),E(d,"head"),E(o,"body"),E(l,"body"),E(this.pelvis,"body");for(const T of[this.legL,this.legR])T.hip.children.forEach(_=>{_.isMesh&&_.geometry.type==="BoxGeometry"&&_.position.y<-.3&&E(_,"limb")});this.muzzleLocal=new C(.11,.295,.8),this.eyeLocal=new C(0,1.62,.04),this.chestLocal=new C(0,1.3,0)}get alive(){return!this.dead&&!this.removed}update(t,e,n){if(this.removed)return;this.spawnT=Math.max(0,this.spawnT-t);const s=1-Math.pow(1-Math.min(1,(.55-this.spawnT)/.55),3);if(this.spawnT>0?(this.group.scale.setScalar(.6+s*.4),this.spawnFlare.material.opacity=(1-s)*.85,this.spawnFlare.scale.setScalar(2.2+s*1.4)):this.spawnFlare.visible&&(this.spawnFlare.visible=!1,this.group.scale.setScalar(1)),this.dead){this.deathT+=t;const w=Math.min(1,this.deathT/.55);this.group.rotation.z=this.deathSide*(Math.PI/2)*(1-Math.pow(1-w,3)),this.group.position.y=Math.max(-.05,this.group.position.y-t*(this.deathT>1.4?.55:0)),this.laser.material.opacity=0,this.visor.material=this.mats.armor,this.visorGlow.visible=!1,this.chestGlow.visible=!1,this.deathT>4.5&&this.remove();return}if(this.spawnT>0)return;const r=D_.set(e.position.x,e.position.y+1.45,e.position.z),a=I_.set(this.group.position.x,this.group.position.y+1.55,this.group.position.z),o=N_.subVectors(r,a),l=o.length(),c=Math.hypot(o.x,o.z);if(this.losTimer-=t,this.losTimer<=0){this.losTimer=.14+Math.random()*.12,La.set(a,o.clone().normalize()),La.far=l;const w=La.intersectObjects(n.level.shootables,!1);this.hasLOS=w.length===0||w[0].distance>l-.5}const h=new C,u=new C(o.x,0,o.z);c>.001&&u.normalize();const f=this.heavy?13:10.5;c>f?h.add(u):c<6.5&&h.addScaledVector(u,-1),this.strafeTimer-=t,this.strafeTimer<=0&&(this.strafeTimer=1.2+Math.random()*2,this.strafeDir*=-1);const d=new C(-u.z,0,u.x);h.addScaledVector(d,this.strafeDir*.7);const m=this.group.position;for(const w of n.level.blockers){const x=Math.max(w.minX,Math.min(m.x,w.maxX)),E=Math.max(w.minZ,Math.min(m.z,w.maxZ)),T=m.x-x,_=m.z-E,y=T*T+_*_,N=this.radius+.9;if(y<N*N&&y>1e-4){const P=Math.sqrt(y);h.x+=T/P*((N-P)/N)*2.2,h.z+=_/P*((N-P)/N)*2.2}}for(const w of n.enemies){if(w===this||!w.alive)continue;const x=m.x-w.group.position.x,E=m.z-w.group.position.z,T=Math.hypot(x,E);T<1.4&&T>.001&&(h.x+=x/T*(1.4-T),h.z+=E/T*(1.4-T))}if(this.moving=h.lengthSq()>.02,this.moving){h.y=0,h.normalize();const w=this.speed*(this.burstLeft>0?.35:1);m.x+=h.x*w*t,m.z+=h.z*w*t,this.walkPhase+=t*w*4.2}else this.hasLOS&&(this.walkPhase+=t*1.4);m.x=nn.clamp(m.x,-25.5,25.5),m.z=nn.clamp(m.z,-25.5,25.5);for(const w of n.level.blockers)if(m.x>w.minX-this.radius&&m.x<w.maxX+this.radius&&m.z>w.minZ-this.radius&&m.z<w.maxZ+this.radius){const x=m.x-(w.minX-this.radius),E=w.maxX+this.radius-m.x,T=m.z-(w.minZ-this.radius),_=w.maxZ+this.radius-m.z,y=Math.min(x,E,T,_);y===x?m.x-=x:y===E?m.x+=E:y===T?m.z-=T:m.z+=_}const v=Math.sin(this.walkPhase)*(this.moving?.6:.06);this.legL.hip.rotation.x=v,this.legR.hip.rotation.x=-v,this.legL.knee.rotation.x=Math.max(0,-v)*.7,this.legR.knee.rotation.x=Math.max(0,v)*.7,this.torso.position.y=.98+Math.abs(Math.sin(this.walkPhase))*(this.moving?.035:.01),this.torso.rotation.z=Math.sin(this.walkPhase)*.03,this.flinch*=Math.pow(.001,t),this.torso.rotation.x=this.flinch*.4+(this.hasLOS?.04:0);let g;this.hasLOS||!this.moving?g=Math.atan2(e.position.x-m.x,e.position.z-m.z):g=Math.atan2(h.x,h.z);let p=g-this.group.rotation.y;p=Math.atan2(Math.sin(p),Math.cos(p)),this.group.rotation.y+=p*Math.min(1,t*7);const S=this.hasLOS&&l<42;if(S&&this.group.updateMatrixWorld(!0),S){this.aimT+=t;const w=Math.atan2(r.y-(m.y+1.28),c);this.rifle.rotation.x=-w*.8,this.armL.shoulder.rotation.x=-1.1,this.armL.elbow.rotation.x=.75,this.armR.shoulder.rotation.x=-1.2,this.armR.elbow.rotation.x=.65}else this.aimT=Math.max(0,this.aimT-t),this.rifle.rotation.x*=Math.pow(.01,t),this.armL.shoulder.rotation.x*=Math.pow(.01,t),this.armR.shoulder.rotation.x*=Math.pow(.01,t);if(S&&this.aimT>.25){const w=this.rifle.localToWorld(this.muzzleLocal.clone()),x=new C(e.position.x,e.position.y+1.2,e.position.z),E=this.laser.geometry.attributes.position;E.setXYZ(0,w.x,w.y,w.z),E.setXYZ(1,x.x,x.y,x.z),E.needsUpdate=!0,this.laser.material.opacity=this.burstLeft>0?.42:.16+Math.sin(n.time*8)*.04}else this.laser.material.opacity=0;S&&this.aimT>.45&&(this.fireCooldown-=t,this.fireCooldown<=0&&this.burstLeft<=0&&(this.burstLeft=this.heavy?4:3,this.burstTimer=0,this.fireCooldown=(this.heavy?1.7:1.5)+Math.random()*1.4),this.burstLeft>0&&(this.burstTimer-=t,this.burstTimer<=0&&(this.burstTimer=this.heavy?.12:.135,this.burstLeft--,this.fire(e,n,l))))}fire(t,e,n){const s=this.rifle.localToWorld(this.muzzleLocal.clone()),r=new C(t.position.x,t.position.y+1.25,t.position.z),a=.14+n*.006;r.x+=(Math.random()-.5)*a*2,r.y+=(Math.random()-.5)*a*1.4,r.z+=(Math.random()-.5)*a*2,e.effects.enemyFlash(s,this.heavy?.75:.55),e.effects.tracer(s,r,{color:16747106,life:.055,width:.6,opacity:.85}),e.audio.enemyShot(n);const o=nn.clamp(.62-n*.011,.2,.5);if(Math.random()<o){const l=this.heavy?9:5.5+Math.random()*3;t.takeDamage(l,this.group.position),e.effects.spawnSparks(r,new C(0,.4,0),{count:5,color:16738901,speed:2.6,gravity:8,size:1.1})}else{const l=r.clone().add(new C((Math.random()-.5)*1.4,(Math.random()-.5)*1,(Math.random()-.5)*1.4));e.effects.impact(l,new C(0,1,0),"concrete")}this.rifle.position.z-=.015,setTimeout(()=>{this.removed||(this.rifle.position.z+=.015)},40)}takeDamage(t,e,n,s){return this.alive?(this.health-=t,this.flinch=Math.min(1.2,this.flinch+(e?.8:.45)),this.visor.material=this.mats.armor,setTimeout(()=>{this.alive&&(this.visor.material=this.mats.visor)},60),this.health<=0?(this.die(e),!0):!1):!1}die(t){this.dead=!0,this.deathT=0,this.deathSide=Math.random()>.5?1:-1,this.laser.material.opacity=0,this.laser.visible=!1,this.spawnFlare.visible=!1;for(const e of this.hitboxes)e.userData.enemy=null;this.system.onDeath?.(this,t)}remove(){this.removed=!0,this.system.scene.remove(this.group),this.system.scene.remove(this.laser),this.laser.geometry.dispose(),this.laser.material.dispose()}}class O_{constructor({scene:t,level:e,player:n,effects:s,audio:r}){this.scene=t,this.level=e,this.player=n,this.effects=s,this.audio=r,this.enemies=[],this.queue=[],this.spawnTimer=0,this.wave=0,this.time=0,this.onDeath=null,this.maxAlive=7}beginWave(t){this.wave=t;const e=Math.min(12,3+t*2);this.queue=[],this.spawnTimer=.4;for(let n=0;n<e;n++){const s=this._pickSpawn();this.queue.push({position:s,heavy:t>=3&&n%4===3,delay:.35+n*(.55+Math.random()*.35)})}this._spawnClock=0}_pickSpawn(){const t=this.level.spawnPoints.filter(n=>{const s=n.distanceTo(this.player.position);return s>12&&s<27}),e=t.length?t:this.level.spawnPoints;return e[Math.floor(Math.random()*e.length)].clone()}update(t){if(this.time+=t,this._spawnClock=(this._spawnClock||0)+t,this.queue.length&&this.enemies.filter(e=>e.alive).length<this.maxAlive){const e=this.queue[0];if(this._spawnClock>=e.delay){this.queue.shift();const n=new F_(this,{position:e.position,heavy:e.heavy,wave:this.wave});this.enemies.push(n)}}for(const e of this.enemies)e.update(t,this.player,this);this.enemies.some(e=>e.removed)&&(this.enemies=this.enemies.filter(e=>!e.removed))}get aliveCount(){return this.enemies.reduce((t,e)=>t+(e.alive?1:0),0)}get remainingCount(){return this.aliveCount+this.queue.length}get hitboxes(){const t=[];for(const e of this.enemies)e.alive&&t.push(...e.hitboxes);return t}clear(){for(const t of this.enemies)t.remove();this.enemies=[],this.queue=[]}}const Hc=document.getElementById("game"),B_=document.getElementById("startScreen"),Ia=document.getElementById("pauseScreen"),Vc=document.getElementById("deathScreen"),z_=document.getElementById("playBtn"),Un=document.getElementById("tiltBtn"),Mr=document.getElementById("pauseTiltBtn"),Na=document.getElementById("audioBtn"),k_=document.getElementById("resumeBtn"),G_=document.getElementById("restartBtn"),H_=document.getElementById("redeployBtn"),V_=document.getElementById("pauseWave"),W_=document.getElementById("pauseScore"),X_=document.getElementById("pauseKills"),q_=document.getElementById("deathWave"),Y_=document.getElementById("deathScore"),Z_=document.getElementById("deathKills"),$_=document.getElementById("deathAcc"),Wc=document.getElementById("bootError");function K_(){const i=new __(Hc),t=x_(i.scene),e=M_(i.weaponScene),n=new R_,s=new A_,r=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,a=r||window.innerWidth<760;a&&document.body.classList.add("touch");const o=new S_({canvas:Hc,touch:r}),l=new T_({scene:i.scene,camera:i.camera,level:t,engine:i}),c=new P_({camera:i.camera,weaponCamera:i.weaponCamera,level:t,input:o,weapon:e,effects:l,audio:s,hud:n,engine:i}),h=new O_({scene:i.scene,level:t,player:c,effects:l,audio:s});c.enemies=h;const u={state:"menu",score:0,kills:0,wave:1,waveTransition:!1,transitionT:0,time:0,clock:0,menuTime:0,best:0},f={base:new C(8.6,2.35,15),look:new C(-1.2,2.5,-8)};function d(){u.score=0,u.kills=0,u.wave=1,u.waveTransition=!1,u.transitionT=0,u.time=0,h.clear(),c.reset(),c.score=0,c.wave=1,c.hostiles=0,n.reset(),n.show(),n.showTouch(a),Vc.classList.add("hidden"),Ia.classList.add("hidden"),B_.classList.add("hidden"),document.getElementById("killfeed").innerHTML="",o.enabled=!0,o.resetFlags(),c.enabled=!0,document.body.classList.remove("ads"),o.lockPointer(),u.state="playing",m(1)}function m(P){u.wave=P,h.beginWave(P),n.banner(`WAVE ${String(P).padStart(2,"0")}`,P>1?"HOSTILE REINFORCEMENTS INBOUND":"HOSTILES INBOUND // WEAPONS FREE",2600),s.waveStart()}function v(){u.state==="playing"&&(u.state="paused",o.enabled=!1,c.enabled=!1,document.body.classList.remove("ads"),o.resetFlags(),o.releasePointer(),V_.textContent=String(u.wave).padStart(2,"0"),W_.textContent=u.score.toLocaleString("en-US"),X_.textContent=String(u.kills),Ia.classList.remove("hidden"),S())}function g(){u.state==="paused"&&(Ia.classList.add("hidden"),o.enabled=!0,c.enabled=!0,o.lockPointer(),u.state="playing",s.resume())}function p(P){if(u.state==="dead")return;u.state="dead",o.enabled=!1,c.enabled=!1,document.body.classList.remove("ads"),o.resetFlags(),o.releasePointer(),n.showTouch(!1),q_.textContent=String(u.wave).padStart(2,"0"),Y_.textContent=u.score.toLocaleString("en-US"),Z_.textContent=String(u.kills);const L=P.shots?Math.round(P.hits/P.shots*100):0;$_.textContent=`${L}%`,setTimeout(()=>Vc.classList.remove("hidden"),900),n.banner("SIGNAL LOST","OPERATOR DOWN",2200)}c.onDeath=p,h.onDeath=(P,L)=>{const F=P.heavy?220:100,k=L?Math.round(F*1.6):F;u.score+=k,u.kills++,n.killFeed(P.heavy?"BRUTE":"HOSTILE",L,k),c.addReserve(P.heavy?18:9)};function S(){const P=o.tilt.enabled,L=`TILT AIM: ${P?"ON":"OFF"}`;Un&&(Un.textContent=L,Un.setAttribute("aria-pressed",String(P))),Mr&&(Mr.textContent=L,Mr.setAttribute("aria-pressed",String(P))),P&&!o.tilt.hasData&&setTimeout(()=>{o.tilt.enabled&&!o.tilt.hasData&&(Un.textContent="TILT AIM: NO SENSOR",Un.setAttribute("aria-pressed","false"))},2200),o.tilt.error==="denied"&&(Un.textContent="MOTION ACCESS DENIED",setTimeout(S,2600)),o.tilt.error==="unsupported"&&(Un.textContent="TILT: NOT SUPPORTED",setTimeout(S,2600))}async function w(){if(s.ui(),o.tilt.enabled){o.disableTilt(),S();return}Un.textContent="REQUESTING MOTION…";const P=await o.enableTilt();S(),P&&o.recenterTilt()}Un?.addEventListener("click",w),Mr?.addEventListener("click",w),Na?.addEventListener("click",()=>{const P=!s.muted;s.setMuted(P),Na.textContent=`AUDIO: ${P?"OFF":"ON"}`,Na.setAttribute("aria-pressed",String(!P)),P||s.ui()}),z_.addEventListener("click",()=>{u.state==="menu"&&(s.init(),s.resume(),s.ui(),d())}),k_?.addEventListener("click",()=>{s.ui(),g()}),G_?.addEventListener("click",()=>{s.ui(),d()}),H_?.addEventListener("click",()=>{s.ui(),d()}),o.onPause=()=>v(),o.onReload=()=>c.startReload(),o.onJump=()=>{},document.addEventListener("visibilitychange",()=>{document.hidden&&u.state==="playing"&&v()});const x=[];for(const P of t.lamps)x.push({...P,off:Math.random()*10});function E(P){const L=u.clock;for(const F of x){const k=Math.sin(L*1.7+F.phase)*.04+Math.sin(L*7.3+F.phase*2.1)*.02;let I=F.base*(.95+k);Math.sin(L*.37+F.phase*4)>.9985&&(I*=.4),F.light.intensity=I}for(const F of t.volumes){F.mat.uniforms.uTime.value=L;const k=.9+Math.sin(L*2.2+F.phase)*.08+Math.sin(L*9.1+F.phase)*.03;F.mat.uniforms.uOpacity.value=F.base*k}for(const F of t.animated)if(F.type==="beacon"){const k=Math.sin(L*2.6+F.phase)>.2;F.mesh.material.color.setHex(k?16723516:3803661)}else if(F.type==="led"){const k=Math.sin(L*3.4+F.phase)>-.2;F.mesh.material.color.setHex(k?16761466:4860434)}if(t.sign){const F=.94+Math.sin(L*1.4)*.03+(Math.sin(L*13.7)>.98?-.25:0);t.sign.material.opacity=F}for(const F of i.sky.city.children)if(F.userData.beacon){const k=Math.sin(L*2+F.position.x)>.1;F.material.color.setHex(k?16723516:2754571)}}function T(P){u.menuTime+=P;const L=u.menuTime,F=i.camera;F.fov+=(60-F.fov)*Math.min(1,P*2),F.updateProjectionMatrix(),F.position.set(f.base.x+Math.sin(L*.13)*2.4,f.base.y+Math.sin(L*.21)*.35,f.base.z+Math.cos(L*.11)*1.6);const k=f.look.clone();k.x+=Math.sin(L*.09)*1.2,F.lookAt(k),F.updateMatrixWorld(!0)}let _=performance.now(),y=0;function N(P){const L=Math.min(.05,Math.max(1e-4,(P-_)/1e3));if(_=P,i.updateFps(L),i.adaptiveQuality(L),u.clock+=L,u.state==="playing"?(u.time+=L,c.score=u.score,c.wave=u.wave,c.hostiles=h.remainingCount,c.update(L),h.update(L),l.update(L,u.time),E(),!u.waveTransition&&h.remainingCount===0&&h.queue.length===0&&u.time>2&&(u.waveTransition=!0,u.transitionT=4.2,u.score+=250,n.banner("SECTOR CLEAR","REGROUP // NEXT WAVE INBOUND",2400),s.waveClear(),c.addReserve(30)),u.waveTransition&&(u.transitionT-=L,u.transitionT<=0&&(u.waveTransition=!1,m(u.wave+1))),i.render(L,e.root,!0)):u.state==="menu"?(u.menuTime+=L,T(L),l.update(L*.6,u.menuTime),E(),i.render(L,e.root,!1)):u.state==="paused"?i.render(0,e.root,!1):u.state==="dead"&&(u.time+=L,c.updateDeath(L),E(),i.render(L,e.root,!1)),y+=L,u.state==="menu"&&y>.5){y=0;const F=i.renderer.info.render;n.setPerf(`${i.mobile?"MOBILE":"DESKTOP"} · ${i.renderer.domElement.width}×${i.renderer.domElement.height} · ${Math.round(i.fps)} FPS · ${F.calls} DRAW CALLS`)}requestAnimationFrame(N)}window.__NIGHTSHADE__={game:u,engine:i,player:c,enemies:h,effects:l,input:o,start:()=>{u.state==="menu"&&d()},pause:v,resume:g,addScore:P=>{u.score+=P}},new URLSearchParams(location.search).has("autostart")&&d(),requestAnimationFrame(P=>{_=P,N(P)}),setTimeout(()=>{if(!i.renderer.getContext())throw new Error("WebGL context unavailable")},500)}try{K_()}catch(i){console.error(i),Wc.classList.remove("hidden"),Wc.textContent=`RENDERER FAILURE

${i?.stack||i}`}
