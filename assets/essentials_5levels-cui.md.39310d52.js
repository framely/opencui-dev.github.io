import{_ as e,c as t,o as s,O as a}from"./chunks/framework.8e4cc2b6.js";const y=JSON.parse('{"title":"5 levels of CUI","description":"","frontmatter":{},"headers":[],"relativePath":"essentials/5levels-cui.md","lastUpdated":1682331237000}'),n={name:"essentials/5levels-cui.md"},o=a(`<h1 id="_5-levels-of-cui" tabindex="-1">5 levels of CUI <a class="header-anchor" href="#_5-levels-of-cui" aria-label="Permalink to &quot;5 levels of CUI&quot;">​</a></h1><p>A software maturity model is a tool that helps people assess the effectiveness of their software and scope out what capabilities they need to build next in order to improve its experience. A good maturity model can serve as a communication reference system among project owners, product managers, and development teams for trading off between experiences and cost. This can be really useful, particularly for new types of applications. It is no wonder that people have developed maturity models for various software, including the 5-level model for autonomous driving.</p><p>In business settings, conversational user experience is a means for businesses to provide services through conversational user interfaces (UIs). With rapid growth in computational power, artificial intelligence (AI), particularly deep neural networks, has made significant progress in automatic speech recognition (ASR), text-to-speech (TTS), and more importantly, natural language understanding (NLU). This has resulted in a renewed interest in, and thus many maturity models for, conversational user experience (UX).</p><p>Whether or not emphasizing AI, existing maturity models model user interfaces and underlying services together. Since UIs (including conversational ones) and services are governed by totally different principles, they are considered orthogonal concerns. Services are constrained by business goals and conditions, and the same service can and often is made available through different UI modes. On the other hand, UI principles do not change with verticals, and the same UI can be easily adapted to different businesses in the same vertical. It is clear that we can mix and match UI with services, so modeling them together is wasteful. When we build the conversational user experience for existing services (which happens quite often), modeling the entire experience, including the service, is not even practical.</p><p>Businesses are striving to be different, and services need to react to ever-changing business conditions, both of which greatly limit the utility of service models. On the other hand, there are only some vocabulary changes over time and across verticals; the syntax mostly stays the same. So modeling the conversational UI side can be more profitable. But how? Language is complex, and turns of conversation multiply that complexity; there are just infinite possibilities. On the other hand, the services that businesses can deliver are limited. So instead of focusing on the conversation itself, we propose focusing on the reason or meaning of the conversation - the semantic frame - for modeling service-oriented conversation.</p><p>The conversational UI is responsible for converting what the user said into a semantic frame, a structure with slots representing what the user wants with a structure label and how they want it with its slots. It also takes the semantic frame generated by the service or dialog management and generates corresponding natural text, a process called text generation. Typically, there should be a strong correlation between the complexity of the service and the complexity of the conversations exposing it. Ideally, the more complex the service is, the higher the UI capability level needs to be. So we suggest a model based on the nature of the semantic frame (with or without slots), what the user can do with these semantic frames, etc. It has the following 5 levels.</p><h2 id="frame-without-slot" tabindex="-1">Frame without Slot <a class="header-anchor" href="#frame-without-slot" aria-label="Permalink to &quot;Frame without Slot&quot;">​</a></h2><p>At this level, a user can express what they want in the form of a frame without slots. This type of frame is typically communicated in a single sentence, and conversations can be completed in a single turn. An example of this level is frequently asked questions.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">User: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">What is your hours?</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Chatbot: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">We open every day from 5:00pm to 9:00pm.</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Since such a frame has no structure, its expressive power is limited. For example, if there are multiple branches, a separate frame is needed for each branch to answer a question about their hours. The response is always atomic and context-independent, and the text generation simply forwards the actual answer to the user without any processing.</p><h2 id="frame-with-slots" tabindex="-1">Frame with Slots <a class="header-anchor" href="#frame-with-slots" aria-label="Permalink to &quot;Frame with Slots&quot;">​</a></h2><p>In this level, user frame has structure, or it is parameterized with slots. For example, buying flight ticket needs information on departure, destination and date. When there are missing information in the user&#39;s initial utterance, the chatbot will conduct conversations to collect them, potentially in multiple turns.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">User: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I like to buy a ticket to Shanghai.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Chatbot: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">When do you want to leave?</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">User: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">How about this Friday.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Chatbot: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>A chatbot can only talk about a single topic at a time at this level. Additionally, there is no support for modifications yet, making this level a happy path only. However, this does not mean that this level is easy. When there are polymorphic use cases (i.e., different symptoms requiring different conversations) and multi-values (i.e., asking about other symptoms), support for this level can become complex. When there are not a lot of slots, starting over is not too prohibitive. Many existing service-oriented chatbots are at this level.</p><p>At this level, a chatbot can generate a response based on a frame. For example, based on time, user gender, and last name, we can generate the following response: &quot;Good morning (or afternoon or evening), Mr. (or Ms., Mrs.) Page (or any other last name). How can I help you?&quot; There are two possible implementations for this kind of text generation: template-based for exact wording but less diversity and model-based for more diversity.</p><h2 id="crud-support" tabindex="-1">CRUD Support <a class="header-anchor" href="#crud-support" aria-label="Permalink to &quot;CRUD Support&quot;">​</a></h2><p>One of the limitations of last level is that a user can not make mistakes or change mind, this can be a problem when there are many slots in the frame. Conversational UI in this level can conduct conversations so that user can correct their mistake or change their mind on the fly, removes the need to start from scratch every time there is an issue.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">User: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I like to buy a ticket to Shanghai.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Chatbot: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">When do you want to leave?</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">User: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Wait, I meant Shenzhen.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Chatbot: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Shenzhen it is. When do you want to leave?</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>When there are many slots, or multiple values involved in a single multi-value slot, users are bound to make mistakes or change their minds. Being able to hold a modification conversation can greatly increase the effectiveness of the conversational UI and improve the overall user experience. This level is considered the minimum usable level for many real-world use cases. Unfortunately, the cost of building and operating these CRUD (create, read, update, and delete) operations is still high, so they are not as commonly available as they should be. To illustrate the potential difficulty associated with CRUD, consider the following case: After a user puts three drinks in their shopping cart, they may say, &quot;Can you add sugar to the large cold drink?&quot; The same text generation as the last level is required.</p><h2 id="multiple-topics" tabindex="-1">Multiple Topics <a class="header-anchor" href="#multiple-topics" aria-label="Permalink to &quot;Multiple Topics&quot;">​</a></h2><p>When the task a user wants to achieve becomes even more complex, they might need to juggle between multiple services simultaneously. At this level, a chatbot can naturally switch between different frames, and a user can switch frames without providing all the required information. The chatbot can use conversational history to automatically complete user utterances and figure out what they want.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">User: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I like to buy a ticket to Shanghai.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Chatbot: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">When do you want to leave?</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">User: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This friday. By the way, how is the weather like over there?</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Chatbot: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">It is clear sky in Shanghai this friday, in mid 20s.</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Clarification is another example of topic switching. For service-oriented conversations, this level presents a very usable user experience. Building this type of conversational experience still requires significant effort. However, once achieved, we can finally move past the stage where chatbots feel artificially limited. The same text generation as in the last level is required.</p><h2 id="sentimental-analysis" tabindex="-1">Sentimental Analysis <a class="header-anchor" href="#sentimental-analysis" aria-label="Permalink to &quot;Sentimental Analysis&quot;">​</a></h2><p>In addition to the information explicitly provided by the user, we can extract sentiments and other aspects about them through their wording and tone (in voice-based channels), and use this information to tailor the delivery of the service they seek. In this level, text generation can be done with additional controls such as style. For instance, based on the user&#39;s demographics or sentiment, we can choose different styles to express the same semantics in different ways. For example, with younger audiences, we might use more emojis.</p><p>It is more productive to set aside the content of the service and model the conversational user interface based on the complexity of the services the user wants to access. The resulting conversational UI maturity model can then be applied to any service to achieve the business&#39;s goals. Of course, there are still many other considerations, such as input modality (text or voice), omni-channel considerations, NLU accuracy, and human support systems. These orthogonal aspects can be reasoned independently, so our hope is that the proposed maturity model for conversational UI can be useful for chatbot planning and building, by making it easier for businesses to trade off between user experience and building cost.</p>`,26),i=[o];function r(l,c,p,h,d,u){return s(),t("div",null,i)}const f=e(n,[["render",r]]);export{y as __pageData,f as default};
