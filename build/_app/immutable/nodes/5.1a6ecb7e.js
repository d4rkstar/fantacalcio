import{s as Ne,o as Qe,h as We,n as je}from"../chunks/scheduler.ce710c66.js";import{S as qe,i as Re,g,s as V,h as v,j as y,c as C,f as u,k as m,a as K,A as o,d as U,p as Ee,t as F,b as Ie,r as fe,u as ue,v as he,w as de,m as N,n as j,x as oe,F as De,B as Xe,o as X,E as ce,C as Ze,G as et}from"../chunks/index.86f09419.js";import{e as J}from"../chunks/each.e59479a4.js";import{L as Ye}from"../chunks/Loader.0c74833e.js";import{a as Je,d as tt,e as lt}from"../chunks/public.ca8536a6.js";import{G as Ke}from"../chunks/GreenButton.31f8d7a6.js";function rt(){return Je.get(tt).then(a=>a.data).catch(a=>{throw console.error(a),a})}function nt(a){let e=a.fm;return Je.post(lt,{input:e}).then(l=>l.data.output).catch(l=>{throw console.error(l),l})}function Le(a,e,l){const t=a.slice();return t[9]=e[l],t}function Ve(a,e,l){const t=a.slice();return t[9]=e[l],t}function Ce(a,e,l){const t=a.slice();return t[9]=e[l],t}function Ae(a,e,l){const t=a.slice();return t[9]=e[l],t}function He(a,e,l){const t=a.slice();return t[18]=e[l],t[20]=l,t}function Oe(a){let e,l;return e=new Ye({}),{c(){fe(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,n){he(e,t,n),l=!0},i(t){l||(U(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){de(e,t)}}}function Pe(a){let e,l,t,n,s,I=a[0].day+"",$,D,w,c,f,b,h,d,_,p,W='<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 14.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L10 12.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5z"></path></svg>',S,Z,R;f=new Ke({props:{text:"I consigli dell'AI",clickAction:a[5]}});let B=J(a[4]),k=[];for(let E=0;E<B.length;E+=1)k[E]=Ue(He(a,B,E));return{c(){e=g("div"),l=g("div"),t=g("h1"),n=N("Giornata n."),s=g("strong"),$=N(I),D=N(" di Serie A!"),w=V(),c=g("div"),fe(f.$$.fragment),b=V(),h=g("div"),d=g("select");for(let E=0;E<k.length;E+=1)k[E].c();_=V(),p=g("div"),p.innerHTML=W,this.h()},l(E){e=v(E,"DIV",{class:!0});var L=y(e);l=v(L,"DIV",{});var x=y(l);t=v(x,"H1",{class:!0});var z=y(t);n=j(z,"Giornata n."),s=v(z,"STRONG",{});var q=y(s);$=j(q,I),q.forEach(u),D=j(z," di Serie A!"),z.forEach(u),x.forEach(u),w=C(L),c=v(L,"DIV",{class:!0});var Y=y(c);ue(f.$$.fragment,Y),Y.forEach(u),b=C(L),h=v(L,"DIV",{class:!0});var ee=y(h);d=v(ee,"SELECT",{class:!0});var re=y(d);for(let te=0;te<k.length;te+=1)k[te].l(re);re.forEach(u),_=C(ee),p=v(ee,"DIV",{class:!0,"data-svelte-h":!0}),oe(p)!=="svelte-z60uf5"&&(p.innerHTML=W),ee.forEach(u),L.forEach(u),this.h()},h(){m(t,"class","text-3xl font-bold text-primary mb-4"),m(c,"class","p-4"),m(d,"class","block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 radious"),a[1]===void 0&&We(()=>a[7].call(d)),m(p,"class","pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"),m(h,"class","relative"),m(e,"class","flex flex-col items-center")},m(E,L){K(E,e,L),o(e,l),o(l,t),o(t,n),o(t,s),o(s,$),o(t,D),o(e,w),o(e,c),he(f,c,null),o(e,b),o(e,h),o(h,d);for(let x=0;x<k.length;x+=1)k[x]&&k[x].m(d,null);De(d,a[1],!0),o(h,_),o(h,p),S=!0,Z||(R=Xe(d,"change",a[7]),Z=!0)},p(E,L){if((!S||L&1)&&I!==(I=E[0].day+"")&&X($,I),L&16){B=J(E[4]);let x;for(x=0;x<B.length;x+=1){const z=He(E,B,x);k[x]?k[x].p(z,L):(k[x]=Ue(z),k[x].c(),k[x].m(d,null))}for(;x<k.length;x+=1)k[x].d(1);k.length=B.length}L&2&&De(d,E[1])},i(E){S||(U(f.$$.fragment,E),S=!0)},o(E){F(f.$$.fragment,E),S=!1},d(E){E&&u(e),de(f),ce(k,E),Z=!1,R()}}}function Ue(a){let e,l=a[18]+"",t;return{c(){e=g("option"),t=N(l),this.h()},l(n){e=v(n,"OPTION",{});var s=y(e);t=j(s,l),s.forEach(u),this.h()},h(){e.__value=a[20],Ze(e,e.__value)},m(n,s){K(n,e,s),o(e,t)},p:je,d(n){n&&u(e)}}}function ze(a){let e,l,t,n,s,I=a[0].lineups[a[1]].home+"",$,D,w,c,f,b="Giocatore",h,d,_,p,W="Probabilità",S,Z,R,B,k,E=a[0].lineups[a[1]].away+"",L,x,z,q,Y,ee="Giocatore",re,te,Q,le,ke="Probabilità",we,ne=J(a[0].lineups[a[1]].fm.home_lineup),A=[];for(let i=0;i<ne.length;i+=1)A[i]=Ge(Ae(a,ne,i));let ae=J(a[0].lineups[a[1]].fm.home_lineup),H=[];for(let i=0;i<ae.length;i+=1)H[i]=Te(Ce(a,ae,i));let se=J(a[0].lineups[a[1]].fm.away_lineup),O=[];for(let i=0;i<se.length;i+=1)O[i]=Me(Ve(a,se,i));let ie=J(a[0].lineups[a[1]].fm.away_lineup),P=[];for(let i=0;i<ie.length;i+=1)P[i]=Se(Le(a,ie,i));return{c(){e=g("div"),l=g("div"),t=g("div"),n=g("h2"),s=N("Formazione di casa: "),$=N(I),D=V(),w=g("div"),c=g("div"),f=g("h3"),f.textContent=b,h=V();for(let i=0;i<A.length;i+=1)A[i].c();d=V(),_=g("div"),p=g("h3"),p.textContent=W,S=V();for(let i=0;i<H.length;i+=1)H[i].c();Z=V(),R=g("div"),B=g("h2"),k=N("Formazione ospite: "),L=N(E),x=V(),z=g("div"),q=g("div"),Y=g("h3"),Y.textContent=ee,re=V();for(let i=0;i<O.length;i+=1)O[i].c();te=V(),Q=g("div"),le=g("h3"),le.textContent=ke,we=V();for(let i=0;i<P.length;i+=1)P[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0});var T=y(e);l=v(T,"DIV",{class:!0});var r=y(l);t=v(r,"DIV",{class:!0});var G=y(t);n=v(G,"H2",{class:!0});var xe=y(n);s=j(xe,"Formazione di casa: "),$=j(xe,I),xe.forEach(u),D=C(G),w=v(G,"DIV",{class:!0});var _e=y(w);c=v(_e,"DIV",{class:!0});var pe=y(c);f=v(pe,"H3",{class:!0,"data-svelte-h":!0}),oe(f)!=="svelte-i4nowr"&&(f.textContent=b),h=C(pe);for(let M=0;M<A.length;M+=1)A[M].l(pe);pe.forEach(u),d=C(_e),_=v(_e,"DIV",{class:!0});var ge=y(_);p=v(ge,"H3",{class:!0,"data-svelte-h":!0}),oe(p)!=="svelte-7pqf2i"&&(p.textContent=W),S=C(ge);for(let M=0;M<H.length;M+=1)H[M].l(ge);ge.forEach(u),_e.forEach(u),G.forEach(u),Z=C(r),R=v(r,"DIV",{class:!0});var ve=y(R);B=v(ve,"H2",{class:!0});var $e=y(B);k=j($e,"Formazione ospite: "),L=j($e,E),$e.forEach(u),x=C(ve),z=v(ve,"DIV",{class:!0});var me=y(z);q=v(me,"DIV",{class:!0});var be=y(q);Y=v(be,"H3",{class:!0,"data-svelte-h":!0}),oe(Y)!=="svelte-i4nowr"&&(Y.textContent=ee),re=C(be);for(let M=0;M<O.length;M+=1)O[M].l(be);be.forEach(u),te=C(me),Q=v(me,"DIV",{class:!0});var ye=y(Q);le=v(ye,"H3",{class:!0,"data-svelte-h":!0}),oe(le)!=="svelte-7pqf2i"&&(le.textContent=ke),we=C(ye);for(let M=0;M<P.length;M+=1)P[M].l(ye);ye.forEach(u),me.forEach(u),ve.forEach(u),r.forEach(u),T.forEach(u),this.h()},h(){m(n,"class","text-2xl font-bold text-secondary"),m(f,"class","text-xl font-bold text-primary"),m(c,"class","h-70 rounded-lg"),m(p,"class","text-xl font-bold text-primary"),m(_,"class","h-70 rounded-lg hidden sm:block"),m(w,"class","grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8"),m(t,"class","h-70 rounded-lg"),m(B,"class","text-2xl font-bold text-secondary"),m(Y,"class","text-xl font-bold text-primary"),m(q,"class","h-70 rounded-lg"),m(le,"class","text-xl font-bold text-primary"),m(Q,"class","h-70 rounded-lg hidden sm:block"),m(z,"class","grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8"),m(R,"class","h-70 rounded-lg"),m(l,"class","grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8"),m(e,"class","p-5")},m(i,T){K(i,e,T),o(e,l),o(l,t),o(t,n),o(n,s),o(n,$),o(t,D),o(t,w),o(w,c),o(c,f),o(c,h);for(let r=0;r<A.length;r+=1)A[r]&&A[r].m(c,null);o(w,d),o(w,_),o(_,p),o(_,S);for(let r=0;r<H.length;r+=1)H[r]&&H[r].m(_,null);o(l,Z),o(l,R),o(R,B),o(B,k),o(B,L),o(R,x),o(R,z),o(z,q),o(q,Y),o(q,re);for(let r=0;r<O.length;r+=1)O[r]&&O[r].m(q,null);o(z,te),o(z,Q),o(Q,le),o(Q,we);for(let r=0;r<P.length;r+=1)P[r]&&P[r].m(Q,null)},p(i,T){if(T&3&&I!==(I=i[0].lineups[i[1]].home+"")&&X($,I),T&3){ne=J(i[0].lineups[i[1]].fm.home_lineup);let r;for(r=0;r<ne.length;r+=1){const G=Ae(i,ne,r);A[r]?A[r].p(G,T):(A[r]=Ge(G),A[r].c(),A[r].m(c,null))}for(;r<A.length;r+=1)A[r].d(1);A.length=ne.length}if(T&3){ae=J(i[0].lineups[i[1]].fm.home_lineup);let r;for(r=0;r<ae.length;r+=1){const G=Ce(i,ae,r);H[r]?H[r].p(G,T):(H[r]=Te(G),H[r].c(),H[r].m(_,null))}for(;r<H.length;r+=1)H[r].d(1);H.length=ae.length}if(T&3&&E!==(E=i[0].lineups[i[1]].away+"")&&X(L,E),T&3){se=J(i[0].lineups[i[1]].fm.away_lineup);let r;for(r=0;r<se.length;r+=1){const G=Ve(i,se,r);O[r]?O[r].p(G,T):(O[r]=Me(G),O[r].c(),O[r].m(q,null))}for(;r<O.length;r+=1)O[r].d(1);O.length=se.length}if(T&3){ie=J(i[0].lineups[i[1]].fm.away_lineup);let r;for(r=0;r<ie.length;r+=1){const G=Le(i,ie,r);P[r]?P[r].p(G,T):(P[r]=Se(G),P[r].c(),P[r].m(Q,null))}for(;r<P.length;r+=1)P[r].d(1);P.length=ie.length}},d(i){i&&u(e),ce(A,i),ce(H,i),ce(O,i),ce(P,i)}}}function Ge(a){let e,l=a[9].player+"",t;return{c(){e=g("li"),t=N(l),this.h()},l(n){e=v(n,"LI",{class:!0});var s=y(e);t=j(s,l),s.forEach(u),this.h()},h(){m(e,"class","text-base text-primary")},m(n,s){K(n,e,s),o(e,t)},p(n,s){s&3&&l!==(l=n[9].player+"")&&X(t,l)},d(n){n&&u(e)}}}function Te(a){let e,l=a[9].prob+"",t;return{c(){e=g("li"),t=N(l),this.h()},l(n){e=v(n,"LI",{class:!0});var s=y(e);t=j(s,l),s.forEach(u),this.h()},h(){m(e,"class","text-base text-primary")},m(n,s){K(n,e,s),o(e,t)},p(n,s){s&3&&l!==(l=n[9].prob+"")&&X(t,l)},d(n){n&&u(e)}}}function Me(a){let e,l=a[9].player+"",t;return{c(){e=g("li"),t=N(l),this.h()},l(n){e=v(n,"LI",{class:!0});var s=y(e);t=j(s,l),s.forEach(u),this.h()},h(){m(e,"class","text-base text-primary")},m(n,s){K(n,e,s),o(e,t)},p(n,s){s&3&&l!==(l=n[9].player+"")&&X(t,l)},d(n){n&&u(e)}}}function Se(a){let e,l=a[9].prob+"",t;return{c(){e=g("li"),t=N(l),this.h()},l(n){e=v(n,"LI",{class:!0});var s=y(e);t=j(s,l),s.forEach(u),this.h()},h(){m(e,"class","text-base text-primary")},m(n,s){K(n,e,s),o(e,t)},p(n,s){s&3&&l!==(l=n[9].prob+"")&&X(t,l)},d(n){n&&u(e)}}}function Be(a){let e,l,t;return l=new Ye({}),{c(){e=g("div"),fe(l.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0,role:!0});var s=y(e);ue(l.$$.fragment,s),s.forEach(u),this.h()},h(){m(e,"class","fixed bg-gray-100 rounded-2xl border border-blue-100 inset-0 bg-opacity-90 z-50 bg-white p-4 shadow-lg sm:p-6 lg:p-8 overflow-y-auto"),m(e,"role","alert")},m(n,s){K(n,e,s),he(l,e,null),t=!0},i(n){t||(U(l.$$.fragment,n),t=!0)},o(n){F(l.$$.fragment,n),t=!1},d(n){n&&u(e),de(l)}}}function Fe(a){let e,l,t='<p class="text-2xl font-extrabold sm:text-lg text-primary justify-center text-center">I consigli dell&#39;AI:</p>',n,s,I,$,D,w,c,f;return c=new Ke({props:{text:"Ho capito",clickAction:a[6]}}),{c(){e=g("div"),l=g("div"),l.innerHTML=t,n=V(),s=g("div"),I=g("p"),$=N(a[3]),D=V(),w=g("div"),fe(c.$$.fragment),this.h()},l(b){e=v(b,"DIV",{class:!0,role:!0});var h=y(e);l=v(h,"DIV",{class:!0,"data-svelte-h":!0}),oe(l)!=="svelte-1emtuxh"&&(l.innerHTML=t),n=C(h),s=v(h,"DIV",{class:!0});var d=y(s);I=v(d,"P",{class:!0});var _=y(I);$=j(_,a[3]),_.forEach(u),D=C(d),w=v(d,"DIV",{class:!0});var p=y(w);ue(c.$$.fragment,p),p.forEach(u),d.forEach(u),h.forEach(u),this.h()},h(){m(l,"class","flex mt-10 items-center gap-4 mt-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"),m(I,"class","mt-4 text-xl text-primary bg-gray-100"),m(w,"class","mt-6"),m(s,"class","grid grid-cols-1 overflow-y: auto"),m(e,"class","fixed bg-gray-100 rounded-2xl border border-blue-100 inset-0 bg-opacity-90 z-50 bg-white p-4 shadow-lg sm:p-6 lg:p-8 overflow-y-auto"),m(e,"role","alert")},m(b,h){K(b,e,h),o(e,l),o(e,n),o(e,s),o(s,I),o(I,$),o(s,D),o(s,w),he(c,w,null),f=!0},p(b,h){(!f||h&8)&&X($,b[3])},i(b){f||(U(c.$$.fragment,b),f=!0)},o(b){F(c.$$.fragment,b),f=!1},d(b){b&&u(e),de(c)}}}function at(a){let e,l,t,n,s=a[0]&&Array.isArray(a[0].lineups),I,$,D,w,c=!a[0]&&Oe(),f=s&&Pe(a),b=a[1]!=null&&ze(a),h=a[2]&&Be(),d=!a[2]&&a[3]&&Fe(a);return{c(){e=g("body"),l=g("div"),t=g("div"),c&&c.c(),n=V(),f&&f.c(),I=V(),b&&b.c(),$=V(),h&&h.c(),D=V(),d&&d.c(),this.h()},l(_){e=v(_,"BODY",{});var p=y(e);l=v(p,"DIV",{class:!0});var W=y(l);t=v(W,"DIV",{class:!0});var S=y(t);c&&c.l(S),n=C(S),f&&f.l(S),S.forEach(u),W.forEach(u),I=C(p),b&&b.l(p),$=C(p),h&&h.l(p),D=C(p),d&&d.l(p),p.forEach(u),this.h()},h(){m(t,"class","mx-auto"),m(l,"class","flex items-center justify-center")},m(_,p){K(_,e,p),o(e,l),o(l,t),c&&c.m(t,null),o(t,n),f&&f.m(t,null),o(e,I),b&&b.m(e,null),o(e,$),h&&h.m(e,null),o(e,D),d&&d.m(e,null),w=!0},p(_,[p]){_[0]?c&&(Ee(),F(c,1,1,()=>{c=null}),Ie()):c?p&1&&U(c,1):(c=Oe(),c.c(),U(c,1),c.m(t,n)),p&1&&(s=_[0]&&Array.isArray(_[0].lineups)),s?f?(f.p(_,p),p&1&&U(f,1)):(f=Pe(_),f.c(),U(f,1),f.m(t,null)):f&&(Ee(),F(f,1,1,()=>{f=null}),Ie()),_[1]!=null?b?b.p(_,p):(b=ze(_),b.c(),b.m(e,$)):b&&(b.d(1),b=null),_[2]?h?p&4&&U(h,1):(h=Be(),h.c(),U(h,1),h.m(e,D)):h&&(Ee(),F(h,1,1,()=>{h=null}),Ie()),!_[2]&&_[3]?d?(d.p(_,p),p&12&&U(d,1)):(d=Fe(_),d.c(),U(d,1),d.m(e,null)):d&&(Ee(),F(d,1,1,()=>{d=null}),Ie())},i(_){w||(U(c),U(f),U(h),U(d),w=!0)},o(_){F(c),F(f),F(h),F(d),w=!1},d(_){_&&u(e),c&&c.d(),f&&f.d(),b&&b.d(),h&&h.d(),d&&d.d()}}}function st(a,e,l){let t,n=[],s,I=!1,$;Qe(async()=>{l(0,t=await rt()),t&&Array.isArray(t.lineups)&&(t.lineups.forEach(f=>{n.push(`${f.home} - ${f.away}`)}),l(1,s=0))});async function D(){l(2,I=!0),l(3,$=await nt(t.lineups[s])),l(2,I=!1)}function w(){l(2,I=!1),l(3,$="")}function c(){s=et(this),l(1,s)}return[t,s,I,$,n,D,w,c]}class it extends qe{constructor(e){super(),Re(this,e,st,at,Ne,{})}}function ot(a){let e,l;return e=new it({}),{c(){fe(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,n){he(e,t,n),l=!0},p:je,i(t){l||(U(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){de(e,t)}}}class pt extends qe{constructor(e){super(),Re(this,e,null,ot,Ne,{})}}export{pt as component};