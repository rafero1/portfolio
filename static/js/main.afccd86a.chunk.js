(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),s=t.n(r),c=(t(15),t(16),t(1)),i=t(2),l=t(4),m=t(3),d=t(5),p=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.text,a=this.props.goto;return o.a.createElement("a",{className:"btn btn-custom btn-lg",role:"button",href:a},e)}}]),a}(n.Component),u=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("header",{id:"site-header",className:"page-header block black is-center-aligned"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("img",{className:"site-logo",src:"./logo@2x.png",alt:"Rafael Avilar portf\xf3lio"}),o.a.createElement("div",{className:"content"},o.a.createElement("p",null,o.a.createElement("span",{className:"is-tinted"},"Ol\xe1!")," Meu nome \xe9 ",o.a.createElement("span",{className:"is-tinted"},"Rafael"),", e sou um estudante de ",o.a.createElement("span",{className:"is-tinted"},"Sistemas e M\xeddias Digitais")," na ",o.a.createElement("span",{className:"is-tinted"},"Universidade Federal do Cear\xe1"),", em Fortaleza."),o.a.createElement("p",null,"Minhas \xe1reas prim\xe1rias s\xe3o ",o.a.createElement("span",{className:"is-tinted"},"Desenvolvimento Mobile")," e ",o.a.createElement("span",{className:"is-tinted"},"Web (Front e Back)"),"."),o.a.createElement("p",null,"Abaixo poder\xe1 encontrar alguns exemplos de projetos que desenvolvi.")),o.a.createElement("nav",null,o.a.createElement(p,{text:"Projetos",goto:"#projects"}),o.a.createElement(p,{text:"Contato",goto:"#contact-info"}))))))}}]),a}(n.Component),h=t(8),g=t.n(h),f=function(e){function a(e){var t;Object(c.a)(this,a);var n,o="./img/"+(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).props.folder+"/";return t.state={name:t.props.name,tags:t.props.tags,desc:t.props.desc,folder:o,imgs:t.props.imgs.map(function(e){return o+e}),link:t.props.link,id:"img-"+(n=t.props.name,n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ /g,"-"))},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){new g.a(document.getElementById(this.state.id),{toolbar:{prev:!0,next:!0},shown:function(){document.body.style.paddingRight=0}})}},{key:"render",value:function(){var e=this,a=this.state.imgs.map(function(a,t){return 0!==t?o.a.createElement("img",{key:e.state.id+"-"+t,className:"project-thumb",src:a,alt:"Imagem do projeto: "+e.state.name,style:{display:"none"}}):null}),t=null;return null!=this.state.link&&(t=o.a.createElement("a",{className:"link",href:this.state.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"material-icons"},"open_in_new")," Acessar")),o.a.createElement("article",{className:"project"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{id:this.state.id,className:"col-md is-center-aligned thumb-container"},o.a.createElement("img",{className:"project-thumb has-shadow",src:this.state.imgs[0],alt:"Imagem do projeto: "+this.state.name}),a),o.a.createElement("div",{className:"col-md"},o.a.createElement("div",{className:"project-content block"},o.a.createElement("h4",null,this.state.name),o.a.createElement("p",{className:"is-tinted"},this.state.tags),o.a.createElement("p",null,this.state.desc),t))))}}]),a}(n.Component);var E=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e;this.props.title&&(e=o.a.createElement("h2",{className:"is-center-aligned"},this.props.title));var a=this.props.projects.map(function(e){return o.a.createElement("div",{key:e.name,className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(f,{name:e.name,tags:e.tags,desc:e.desc,link:e.link,folder:e.folder,imgs:e.imgs})))});return o.a.createElement("section",{id:"projects",className:"project-list white"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},e)),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},a))))}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{id:"contact-info",className:"contact-info block black is-center-aligned"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h2",null,"Contato"),o.a.createElement("div",{className:"content"},o.a.createElement("p",null,"Se quiser me contactar, pode mandar um email ou dar um oi no ",o.a.createElement("i",null,"zap"),"."),o.a.createElement("p",{className:"link"},o.a.createElement("i",{className:"material-icons"},"alternate_email")," ",o.a.createElement("a",{href:"mailto:rfl.avilar@outlook.com"},"rfl.avilar@outlook.com")),o.a.createElement("p",{className:"link"},o.a.createElement("i",{className:"material-icons"},"phone")," ",o.a.createElement("a",{href:"tel:85999897611"},"(85) 99989-7611")),o.a.createElement("p",{className:"link"},o.a.createElement("i",{className:"material-icons"},"public")," ",o.a.createElement("a",{href:"https://github.com/rafero1"},"GitHub")," / ",o.a.createElement("a",{href:"https://linkedin.com/in/rafael-avilar"},"LinkedIn")))))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.goto;return o.a.createElement("a",{className:"btn btn-custom btn-image btn-lr-hover",role:"button",href:e},o.a.createElement("i",{className:"material-icons md-18"},"arrow_upward"))}}]),a}(n.Component);var j=function(){return o.a.createElement("main",null,o.a.createElement(u,null),o.a.createElement(E,{title:"Projetos",projects:[{name:"Tocha",tags:"Android, Kotlin, SQLite",desc:"App com informa\xe7\xf5es hist\xf3ricas de pr\xe9dios e departamentos da UFC. Conta com um banco de dados SQLite, suporte a pesquisa FTS 4, scanner de QR codes e sistema gamificado de progress\xe3o e recompensas. O projeto foi produzido por uma equipe de 6 membros, onde atuei como programador e lider.",folder:"tocha",imgs:["tocha-thumb.png","tocha-1.png","tocha-2.png","tocha-3.png","tocha-4.png","tocha-5.png"]},{name:"Portf\xf3lio",tags:"React, JavaScript, HTML, CSS, Bootstrap",desc:"Portf\xf3lio simples para showcase de projetos no GitHub Pages. Respons\xedvo e escal\xe1vel, tamb\xe9m incorpora um visualizador de imagens. Foram utilizados React e Bootstrap para me ajudar a aprend\xea-los.",folder:"folio",imgs:["folio-thumb.png"]},{name:"Requinte",tags:"WordPress, JavaScript, HTML, CSS, Sass",desc:"Site para comerciante desenvolvido com WordPress. Possui tr\xeas p\xe1ginas com layouts diferenciados, slider de produtos, contact form e suporta personaliza\xe7\xf5es adicionais atrav\xe9s do dashboard do administrador. Tamb\xe9m foi utilizado Sass, JavaScript e JQuery.",folder:"requinte",imgs:["requinte-thumb.png","requinte-1.png","requinte-2.png","requinte-3.png","requinte-4.png"]},{name:"Infogr\xe1ficos",tags:"Design",desc:"Diversos infogr\xe1ficos produzidos ao longo da gradua\xe7\xe3o. Para todos foram utilizados Illustrator e Photoshop, com um deles sendo um infogr\xe1fico interativo produzido na ferramenta Protopie. Em todos contribui ativamente durante a concep\xe7\xe3o e produ\xe7\xe3o.",link:"https://bit.ly/304a7rt",folder:"infografx",imgs:["eu-1.png","comp-1.jpeg","color-1.png","color-2.jpg","color-3.png","waste-1.png"]}]}),o.a.createElement(b,null),o.a.createElement(v,{goto:"#site-header"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.afccd86a.chunk.js.map