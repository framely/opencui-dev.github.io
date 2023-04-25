import{_ as e,c as t,o,O as a}from"./chunks/framework.8e4cc2b6.js";const r="/images/Chatwoot/enable-chatwoot.png",n="/images/Chatwoot/routing-priority.png",w=JSON.parse('{"title":"Overview","description":"","frontmatter":{},"headers":[],"relativePath":"reference/support/overview.md","lastUpdated":1682392529000}'),i={name:"reference/support/overview.md"},s=a('<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>We understand no matter how well you build your chatbot, there will always be user requests that are beyond the design and implementation scope, and we need to handoff the conversation to human support team. Support is a software where human agents can handle the conversation when bot has failed or upon user requirement. OpenCUI understand that your human support team already have their favorite support software, so instead of reinventing wheels, OpenCUI is designed to play well with others when it comes to support system, as long as they can provide some basic APIs.</p><h2 id="two-cooperation-modes" tabindex="-1">Two cooperation modes <a class="header-anchor" href="#two-cooperation-modes" aria-label="Permalink to &quot;Two cooperation modes&quot;">​</a></h2><p>There are two different ways support system can work with chatbots, internal mode and external mode. In the internal mode, both channels and bots are managed by support systems, and when either bot or user indicate that they want to talk to a human agent, then the support system will route the conversation from bot to a human agent, and let the human agent take over. In theory, OpenCUI should be able to work with any support system that is designed to work with third party bot solution, by simply implementing the hooks required by a given support system.</p><p>In the external mode, messages are coming from the channel attached to the bot, and bot appears to be a normal agent on the support system, and bot is responsible for requesting routing the messages via exposed APIs on the support side. For this mode to work, we need to support system expose the APIs conforming to the following semantics.</p><h3 id="support-api-requirement-for-external-mode" tabindex="-1">Support API requirement for external mode <a class="header-anchor" href="#support-api-requirement-for-external-mode" aria-label="Permalink to &quot;Support API requirement for external mode&quot;">​</a></h3><p>To reduce the effort level on the user side, it is important that we route user conversation to the most relevant support team/department. This translates to support of notion of team/department on the support system side, where team is a group of human agent that are qualified to solve problem of certain topic.</p><ol><li>We can create a new user on the support side.</li><li>We can create a conversation to store the history/context of the conversation in case a human agent needs to take over.</li><li>We can send messages from a user and bot to this conversation before we hand off to human agent.</li><li>Support system support more than one human agent teams, each is responsible for something.</li><li>We can transfer the conversation from bot to specified team by department statically or dynamically, potentially based on , so that a user can be served effectively.</li><li>After human agent is done with a service, next time, a user starts interacting with bot again. Simply invoke CloseSession should be enough.</li></ol><p>In the OpenCUI hosted environment, we are mainly interested in the external mode, currently we provide the great open source support system chatwoot as the only option, but this can change when someone starts to build the connection with other system and open source it.</p><h3 id="skill-based-routing-under-external-mode" tabindex="-1">Skill based routing under external mode <a class="header-anchor" href="#skill-based-routing-under-external-mode" aria-label="Permalink to &quot;Skill based routing under external mode&quot;">​</a></h3><p>To reduce the effort level on the user side, we support the conversation routing based on skill. Essentially, skills are grouped into multiple set, each maps to a particular team. When there are unfinished skills in the conversation, that skills can be used to decide which team should we route the conversation to, based on the builder supplied information. When there is no unfinished skill, we can also ask user to provide one, so that they can be transferred to right team directly.</p><h2 id="configure-support" tabindex="-1">Configure support <a class="header-anchor" href="#configure-support" aria-label="Permalink to &quot;Configure support&quot;">​</a></h2><h3 id="before-you-begin" tabindex="-1">Before you begin <a class="header-anchor" href="#before-you-begin" aria-label="Permalink to &quot;Before you begin&quot;">​</a></h3><ol><li>Make sure all the owners in your organization have verified their emails first otherwise you won&#39;t be able to get Chatwoot support.</li></ol><div class="tip custom-block"><p class="custom-block-title">How to Verify Your Email?</p><ol><li>Click on your avatar in the top right corner and click on your name.</li><li>Click &quot;!&quot; icon in the <strong>E-mail</strong> box and follow the instructions to verify your email.</li></ol></div><ol start="2"><li><p>Make sure you have configured your channel first. Learn more about channel configuration, see <a href="./../channels/overview.html">Channels</a>.</p></li><li><p>We show here how to integrate your chatbots with Chatwoot in OpenCUI hosted environment. For private deploy, please consult systems in your organization.</p></li></ol><h3 id="enable-support" tabindex="-1">Enable support <a class="header-anchor" href="#enable-support" aria-label="Permalink to &quot;Enable support&quot;">​</a></h3><p>Click <strong>Setting</strong> &gt; <strong>Integrations</strong>. In the <strong>Support</strong> field, enable the support you need. To configure Chatwoot, see <a href="./Chatwoot.html#configuration">Chatwoot Configuration</a></p><p><img src="'+r+'" alt="enable-chatwoot"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you enable Chatwoot for the first time in your organization, check your email to get your user name and password so you can log into <a href="https://chatwoot.naturali.io/" target="_blank" rel="noreferrer">Chatwoot</a>.</p></div><h3 id="set-up-routing-priority" tabindex="-1">Set up routing priority <a class="header-anchor" href="#set-up-routing-priority" aria-label="Permalink to &quot;Set up routing priority&quot;">​</a></h3><p>To make skill based routing work, you need to set up routing priority. When there are unfinished skills in the conversation, we follow routing priority to decide which team we should route the conversation to.<br> If an unfinished skill is one of the associate skills in routing priority, we route the conversation to the corresponding team. Otherwise, we route the conversation to default team.</p><p>Follow these steps to set up routing priority.</p><ol><li>Click <strong>Setting</strong> &gt; <strong>Routing Priority</strong> &gt; <strong>Default</strong>, input team id of the default team.</li><li>If you have more than one team, click <strong>add</strong> to add more teams. The format of <strong>Associate skill</strong> is <em>Organization.Project.Skill</em>, e.g. <em>Demo.testChatbot.TestSkill</em></li></ol><p><img src="'+n+'" alt="routing-priority"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To get team id in Chatwoot, see <a href="./Chatwoot.html#how-to-get-team-id">How to Get Team Id</a>.</p></div>',26),l=[s];function h(u,p,d,c,m,g){return o(),t("div",null,l)}const b=e(i,[["render",h]]);export{w as __pageData,b as default};
