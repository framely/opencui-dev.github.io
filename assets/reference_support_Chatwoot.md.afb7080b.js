import{_ as t,c as o,o as e,O as a}from"./chunks/framework.8e4cc2b6.js";const n="/images/Chatwoot/how-it-works-1.png",s="/images/Chatwoot/how-it-works-2.png",i="/images/Chatwoot/how-it-works-3.png",r="/images/Chatwoot/how-it-works-4.gif",h="/images/Chatwoot/how-it-works-5.png",l="/images/Chatwoot/config-agents.png",c="/images/Chatwoot/config-inbox-1.png",g="/images/Chatwoot/config-inbox-2.png",d="/images/Chatwoot/get-team-id.png",x=JSON.parse('{"title":"Chatwoot","description":"","frontmatter":{},"headers":[],"relativePath":"reference/support/Chatwoot.md","lastUpdated":1682392529000}'),w={name:"reference/support/Chatwoot.md"},m=a('<h1 id="chatwoot" tabindex="-1">Chatwoot <a class="header-anchor" href="#chatwoot" aria-label="Permalink to &quot;Chatwoot&quot;">​</a></h1><p>When a user demands talking to a human agent, we can forward the conversation to the support system. Currently the open source system Chatwoot is the only support system.</p><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><ol><li>When an end-user demands talking to a human agent.</li></ol><p><img src="'+n+'" alt="how-it-works-1"></p><ol start="2"><li>An agent will get notified when the conversation is assigned to him.</li></ol><p><img src="'+s+'" alt="how-it-works-2"></p><ol start="3"><li>The agent can view the history of the conversation and communicate with the end-user in conversation window.</li></ol><p><img src="'+i+'" alt="how-it-works-3"></p><ol start="4"><li>The agent can resolve the conversation when he is done with service.</li></ol><p><img src="'+r+'" alt="how-it-works-4"></p><ol start="5"><li>After the agent resolves the conversation, next time the end-user will start with interacting bot again.</li></ol><p><img src="'+h+'" alt="how-it-works-4"></p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>Now you can follow these steps to configure your account in Chatwoot.</p><h3 id="add-agents" tabindex="-1">Add agents <a class="header-anchor" href="#add-agents" aria-label="Permalink to &quot;Add agents&quot;">​</a></h3><p>When you <a href="./../support/overview.html#enable-support">enable Chatwoot</a>, we create a Chatwoot organization and add all the owners in your organization to it. The owners added to Chatwoot organization are called agents which are set as administrators by default.</p><div class="tip custom-block"><p class="custom-block-title">How to Manage Owners in Your Organization?</p><ol><li>Log into OpenCUI account and enter your organization.</li><li>Click <strong>Settings</strong> &gt; <strong>Internal Members</strong>. Now You can view all the onwers and members in your organization.</li><li>Click <strong>···</strong> to set the internal member as owner / member, or to remove internal members.</li></ol></div><p>Once you log into <a href="https://chatwoot.naturali.io/" target="_blank" rel="noreferrer">Chatwoot</a>, you can click <strong>Settings</strong> &gt; <strong>Agents</strong> &gt; <strong>Add Agent</strong> and follow the instructions. Agents you add will receive an email with a confirmation link to activate their account, after which they can access Chatwoot and respond to messages sent by end-users.</p><p><img src="'+l+'" alt="config-agents"></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>The role of BotAgent1 should always be administrator. Otherwise, agents can not receive messages sent by end-users.</p></div><h3 id="set-up-inbox" tabindex="-1">Set up inbox <a class="header-anchor" href="#set-up-inbox" aria-label="Permalink to &quot;Set up inbox&quot;">​</a></h3><p>When you enable Chatwoot in a chatbot, we will create an inbox named after the chatbot and connect the inbox to the chatbot. When you deploy the chatbot to a channel and end-users send messages to the chatbot through that channel, you can get the conversation in the corresponding inbox.</p><p>Follow these steps to add an agent to the inbox so when it&#39;s needed agents can carry on the conversation.</p><ol><li>Click <strong>Inboxes</strong> &gt; <strong>Settings</strong></li></ol><p><img src="'+c+'" alt="config-inbox-1"></p><ol start="2"><li>In <strong>Collaborators</strong> field, add agents to the inbox and click <strong>Update</strong> to save changes.</li></ol><p><img src="'+g+'" alt="config-inbox-2"></p><h3 id="add-teams" tabindex="-1">Add teams <a class="header-anchor" href="#add-teams" aria-label="Permalink to &quot;Add teams&quot;">​</a></h3><p>When the conversation is assigned to a team, the agents in the team can carry on the conversation. See <a href="https://www.chatwoot.com/docs/user-guide/add-teams-settings" target="_blank" rel="noreferrer">Chatwoot - Add Teams</a> to learn how to add teams.</p><h2 id="how-to-get-team-id" tabindex="-1">How to get team id <a class="header-anchor" href="#how-to-get-team-id" aria-label="Permalink to &quot;How to get team id&quot;">​</a></h2><p>In the <strong>Conversations</strong> field, select a team. The last number in current url is the id of this team. As shown, the id of <strong>team a</strong> is 47.</p><p><img src="'+d+'" alt="get-team-id"></p>',33),p=[m];function u(b,f,_,k,C,v){return e(),o("div",null,p)}const A=t(w,[["render",u]]);export{x as __pageData,A as default};
