(this.webpackJsonppentatonix=this.webpackJsonppentatonix||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),c=a.n(o),s=a(8),i=a.n(s),l=(a(15),a(2)),p=a(3),m=a(5),f=a(4),h=a(6),u=(a(16),a(1));!function(e){e[e.A=0]="A",e[e.A_sharp=1]="A_sharp",e[e.B=2]="B",e[e.C=3]="C",e[e.C_sharp=4]="C_sharp",e[e.D=5]="D",e[e.D_sharp=6]="D_sharp",e[e.E=7]="E",e[e.F=8]="F",e[e.F_sharp=9]="F_sharp",e[e.G=10]="G",e[e.G_sharp=11]="G_sharp"}(r||(r={}));var v,d=(n={},Object(u.a)(n,r.A,"A"),Object(u.a)(n,r.A_sharp,"A#"),Object(u.a)(n,r.B,"B"),Object(u.a)(n,r.C,"C"),Object(u.a)(n,r.C_sharp,"C#"),Object(u.a)(n,r.D,"D"),Object(u.a)(n,r.D_sharp,"D#"),Object(u.a)(n,r.E,"E"),Object(u.a)(n,r.F,"F"),Object(u.a)(n,r.F_sharp,"F#"),Object(u.a)(n,r.G,"G"),Object(u.a)(n,r.G_sharp,"G#"),n),E=[r.A,r.A_sharp,r.B,r.C,r.C_sharp,r.D,r.D_sharp,r.E,r.F,r.F_sharp,r.G,r.G_sharp],j=a(9);function N(e,t){var a=E.indexOf(e);return E[(a+t)%E.length]}!function(e){e[e.unison=0]="unison",e[e.halfStep=1]="halfStep",e[e.step=2]="step",e[e.minorThird=3]="minorThird",e[e.majorThird=4]="majorThird",e[e.fourth=5]="fourth",e[e.tritone=6]="tritone",e[e.fifth=7]="fifth",e[e.minorSixth=8]="minorSixth",e[e.majorSixth=9]="majorSixth",e[e.minorSeventh=10]="minorSeventh",e[e.majorSeventh=11]="majorSeventh",e[e.octave=12]="octave"}(v||(v={}));var b=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,null,[{key:"createScale",value:function(e,t){return t.reduce((function(e,t,a){return[].concat(Object(j.a)(e),[N(e[a],t)])}),[e])}}]),e}(),O=[{name:"Minor",scale:[v.step,v.halfStep,v.step,v.step,v.halfStep,v.step]},{name:"Major",scale:[v.step,v.step,v.halfStep,v.step,v.step,v.step]}],S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).frets=void 0,a.frets=a.createFrets(),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.createElement("div",{className:"p-string"},o.createElement("div",{className:"p-string-note"},d[this.props.note]),o.createElement("div",{className:"p-string__frets"},this.frets.map((function(t){return o.createElement(k,{note:t,key:t,isActive:e.props.notesInScale.includes(t),isRoot:e.props.notesInScale[0]===t})}))))}},{key:"createFrets",value:function(){for(var e=[],t=this.props.note,a=0;a<12;a++){var n=N(t,v.halfStep);e.push(n),t=n}return e}}]),t}(o.PureComponent),k=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.isActive?"p-fret--active":"",t=this.props.isRoot?"p-fret--root":"";return o.createElement("div",{className:"p-fret ".concat(e," ").concat(t)})}}]),t}(o.PureComponent);function _(){return o.createElement("div",{className:"p-string"},o.createElement("div",{className:"p-string-note"}),o.createElement("div",{className:"p-string__frets"},o.createElement("div",{className:"p-fake-fret"},"1"),o.createElement("div",{className:"p-fake-fret"}),o.createElement("div",{className:"p-fake-fret"},"3"),o.createElement("div",{className:"p-fake-fret"}),o.createElement("div",{className:"p-fake-fret"},"5"),o.createElement("div",{className:"p-fake-fret"}),o.createElement("div",{className:"p-fake-fret"},"7"),o.createElement("div",{className:"p-fake-fret"}),o.createElement("div",{className:"p-fake-fret"},"9"),o.createElement("div",{className:"p-fake-fret"}),o.createElement("div",{className:"p-fake-fret"}),o.createElement("div",{className:"p-fake-fret"},"12")))}function g(e){return c.a.createElement("div",{className:"p-neck"},c.a.createElement(S,{note:r.E,notesInScale:e.allowedNotes}),c.a.createElement(S,{note:r.B,notesInScale:e.allowedNotes}),c.a.createElement(S,{note:r.G,notesInScale:e.allowedNotes}),c.a.createElement(S,{note:r.D,notesInScale:e.allowedNotes}),c.a.createElement(S,{note:r.A,notesInScale:e.allowedNotes}),c.a.createElement(S,{note:r.E,notesInScale:e.allowedNotes}),c.a.createElement(_,null))}var C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).onRootNoteChange=function(e){a.setState({rootNote:Number(e.target.value)})},a.onScaleChange=function(e){a.setState({scaleInfo:O.find((function(t){return t.name===e.target.value}))||O[0]})},a.state={scaleInfo:O[0],rootNote:r.A},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=b.createScale(this.state.rootNote,this.state.scaleInfo.scale);return c.a.createElement("div",{className:"App"},c.a.createElement(g,{allowedNotes:e}),c.a.createElement("select",{name:"root-note",id:"root-note",value:this.state.rootNote,onChange:this.onRootNoteChange},E.map((function(e){return c.a.createElement("option",{value:e,key:e},d[e])}))),c.a.createElement("select",{name:"scale",id:"scale",value:this.state.scaleInfo.name,onChange:this.onScaleChange},O.map((function(e){return c.a.createElement("option",{value:e.name,key:e.name},e.name)}))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.862a8be4.chunk.js.map