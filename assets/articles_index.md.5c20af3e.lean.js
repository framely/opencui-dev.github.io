import{o as a,c as o,C as i,F as u,L as p,z as e,t as n,_,G as c,M as h,N as m}from"./chunks/framework.8e4cc2b6.js";const g={class:"article-wrapper"},v={key:0},b=["href"],f={class:"blog-card"},y=["src"],S={class:"blog-card-info"},w={key:0},x={class:"blog-card-info-title"},k={key:1},B={class:"blog-card-info-description"},C={class:"blog-card-info-bottom"},A={class:"author"},D={key:0},I={props:{items:{type:Array,default:()=>[]}},setup(t){return(r,l)=>(a(),o("div",g,[t.items.length?i("",!0):(a(),o("div",v,"Nothing in here.")),(a(!0),o(u,null,p(t.items,({info:s,path:d})=>(a(),o("article",{key:s},[e("a",{href:d},[e("div",f,[e("div",null,[e("img",{class:"blog-card-image",src:s.image},null,8,y)]),e("div",S,[s.title?(a(),o("div",w,[e("h2",x,n(s.title),1)])):i("",!0),s.description?(a(),o("div",k,[e("p",B,n(s.description[0]),1)])):i("",!0),e("div",C,[e("div",A,n(s.author),1),s.date?(a(),o("div",D,n(new Date(s.date).toLocaleDateString()),1)):i("",!0)])])])],8,b)]))),128))]))}};const N=t=>(h("data-v-ad795232"),t=t(),m(),t),M={class:"page"},O={class:"article-page"},$=N(()=>e("div",{class:"top-info"},[e("div",{class:"top-info-title"},[e("h1",null,"Blog")]),e("div",{class:"top-info-desc"},[e("p",null,"Machine intelligence for user experience")])],-1)),F={props:{frontmatter:{type:Object,default:()=>[]},articles:{type:Object,default:()=>[]}},setup(t){return(r,l)=>(a(),o("main",M,[e("div",O,[$,c(I,{items:t.articles.items},null,8,["items"])])]))}},L=_(F,[["__scopeId","data-v-ad795232"]]),j=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false,"layout":"home"},"headers":[],"relativePath":"articles/index.md","lastUpdated":1682396091000}'),U={name:"articles/index.md"},E=Object.assign(U,{setup(t){return(r,l)=>(a(),o("div",null,[c(L,{articles:{items:[{info:{title:"Table reservation CUI design",description:["Document high-level design by contextual snippets"],image:"./../images/blog/banner/tutorial_reservation_cui.png",author:"Sunny May",date:"4/19/2023"},path:"./reservation-cui-design.html"},{info:{title:"How to reuse reservation module to build chatbot",description:["Reuse table reservation module to build a chatbot"],image:"./../images/blog/banner/tutorial_reservation_chatbot.png",author:"Sunny May",date:"4/2/2023"},path:"./reuse-reservation-module.html"},{info:{title:"How to build a reservation module",description:["We show you the way to build a reservation module step by step"],image:"./../images/blog/banner/tutorial_reservation_module.png",author:"Sunny May",date:"3/2/2023"},path:"./build-reservation-module.html"},{info:{title:"From Schema to Snippets: A Blueprint for Chatbot",description:["The 3 Essential Steps Every Business Should Follow After ChatGPT"],image:"./../images/blog/banner/from-schema-to-snippets.png",author:"Bird Zeng",date:"2/25/2023"},path:"./from-schema-to-snippets.html"},{info:{title:"Chatbot Development with OpenCUI",description:["Reduce complexity of building functional chatbot"],image:"./../images/blog/banner/chatbot_development_with_opencui.png",author:"Sean Wu",date:"1/3/2023"},path:"./chatbot-development-with-opencui.html"},{info:{title:"Set Up a Blog with VuePress v2.0.0",description:["We will create a blog using vuepress2 for various use cases"],image:"./../images/blog/banner/set_up_vuepress.png",author:"karani",date:"4/13/2022"},path:"./set-up-vuepress-blog.html"}]}},null,8,["articles"])]))}});export{j as __pageData,E as default};
