import{_ as e,c as t,o as a,O as n}from"./chunks/framework.8e4cc2b6.js";const f=JSON.parse('{"title":"Glossary","description":"","frontmatter":{},"headers":[],"relativePath":"reference/glossary.md","lastUpdated":1682392529000}'),o={name:"reference/glossary.md"},i=n('<h1 id="glossary" tabindex="-1">Glossary <a class="header-anchor" href="#glossary" aria-label="Permalink to &quot;Glossary&quot;">​</a></h1><p>OpenCUI is a component based declarative frontend framework for building conversational user interface for your services. It comes with a low code platform for building personalized service, include chatbot and corresponding backend.</p><h2 id="task-oriented-conversations" tabindex="-1">Task oriented conversations <a class="header-anchor" href="#task-oriented-conversations" aria-label="Permalink to &quot;Task oriented conversations&quot;">​</a></h2><p>OpenCUI is designed for task oriented conversations, where user engages with chatbot in order to finish some tasks, like reserving a table in a restaurant.</p><h3 id="cui" tabindex="-1">CUI <a class="header-anchor" href="#cui" aria-label="Permalink to &quot;CUI&quot;">​</a></h3><p>Conversational user interface.</p><h3 id="cux" tabindex="-1">CUX <a class="header-anchor" href="#cux" aria-label="Permalink to &quot;CUX&quot;">​</a></h3><p>Conversational user experience.</p><h3 id="gui" tabindex="-1">GUI <a class="header-anchor" href="#gui" aria-label="Permalink to &quot;GUI&quot;">​</a></h3><p>Graphical user interface.</p><h3 id="imperative" tabindex="-1">Imperative <a class="header-anchor" href="#imperative" aria-label="Permalink to &quot;Imperative&quot;">​</a></h3><p>Builders describe how things should be done step by step and computer simply follow that.</p><h3 id="declarative" tabindex="-1">Declarative <a class="header-anchor" href="#declarative" aria-label="Permalink to &quot;Declarative&quot;">​</a></h3><p>Builders describe what are needed and computer figure out how to do it.</p><h3 id="cooperative-principle" tabindex="-1">Cooperative principle <a class="header-anchor" href="#cooperative-principle" aria-label="Permalink to &quot;Cooperative principle&quot;">​</a></h3><p>This assumes users are engaged in the conversation with bot for a common goal: user want to access some services that bot want to provide, thus it is user&#39;s interest to get what they want in the lowest effort possible.</p><h3 id="application-logic" tabindex="-1">Application logic <a class="header-anchor" href="#application-logic" aria-label="Permalink to &quot;Application logic&quot;">​</a></h3><p>Also known as business logic, defines what and how services should be delivered.</p><h3 id="interaction-logic" tabindex="-1">Interaction logic <a class="header-anchor" href="#interaction-logic" aria-label="Permalink to &quot;Interaction logic&quot;">​</a></h3><p>Defines how interaction should be carried out based on users input event. Interaction logic are defined by underlying application logic.</p><h3 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;Frontend&quot;">​</a></h3><p>User-facing application are commonly partitioned into frontend and backend. Where frontend manages the user interaction, and backend models data and application logic. And backend and frontend communicate via predefined-defined APIs. Frontend includes perception layer (language aware) and interaction layer(for language independent interaction logic).</p><h3 id="backend" tabindex="-1">Backend <a class="header-anchor" href="#backend" aria-label="Permalink to &quot;Backend&quot;">​</a></h3><p>Backend hosts all the data and application logic for different frontends, with chatbot as one such frontend. Backend is implementation of service APIs.</p><h2 id="projects" tabindex="-1">Projects <a class="header-anchor" href="#projects" aria-label="Permalink to &quot;Projects&quot;">​</a></h2><p>On OpenCUI platform, projects are the unit of work that are separately version controlled, to make it easy for multiple builder to collaborate. There are three different kinds: chatbot, reusable component and provider.</p><h3 id="version-control" tabindex="-1">Version control <a class="header-anchor" href="#version-control" aria-label="Permalink to &quot;Version control&quot;">​</a></h3><p>OpenCUI platform has a built-in version control for nested structures, so that it is easy for builder to collaborate on building chatbot.</p><ul><li><strong>Branch</strong>: One always works with a branch. Each builder can keep one active branch for each project.</li><li><strong>Master</strong>: There is target branch where every one merge their result into. This is the version that get deployed.</li><li><strong>Base</strong>: The latest version of the master when the branch was created. Each branch has a base.</li><li><strong>Rebase</strong>: When the master version is upgraded, synchronizing the latest master to your branch.</li><li><strong>Diffs</strong>: Shows you exactly how it differed from the base master.</li><li><strong>Commit</strong>: Confirm your branch chagens and ready to start testing.</li><li><strong>Pull Request</strong>: Pull requests display diffs to compare the changes you made in your branch against the base master, which indicates you are willing to merge them into master.</li><li><strong>Review</strong>: Before your change can be merged into master, it needs to be reviewed by your peers.</li><li><strong>Approve</strong>: Only approved change can be merged into master.</li><li><strong>Merge</strong>: Merging takes the changes from one branch into master. A merge can be done through a pull request if there are no conflicting changes.</li><li><strong>Close</strong>: You can discard your change by close it.</li></ul><h3 id="reusability" tabindex="-1">Reusability <a class="header-anchor" href="#reusability" aria-label="Permalink to &quot;Reusability&quot;">​</a></h3><p>Reusability is the one of the key design goal for OpenCUI to help business to reduce the cost of building personalized services. There are four different mechanisms available.</p><ul><li><p><strong>Import</strong>: Instead of build functionality from scratch, on OpenCUI, the first choice of acquired functionality is import the relevant components. Where there are right components, you as builder only need to provide the business dependent data to service their users.</p></li><li><p><strong>Clone</strong>: Clone is another way of reuse. Instead of build chatbot from empty slate, one start from exist chatbot by clone it.</p></li><li><p><strong>Inherit</strong>: We support inherit/implement on frames and skills, so that we can reuse behavior by adding to existing frame instead of building frame from scratch.</p></li><li><p><strong>Compose</strong>: We can use frame as slot of larger frame, to get bigger and bigger behavior.</p></li></ul><h3 id="deploy-mode" tabindex="-1">Deploy mode <a class="header-anchor" href="#deploy-mode" aria-label="Permalink to &quot;Deploy mode&quot;">​</a></h3><p>After definition, both chatbot and provider are deployed in two different ways:</p><ul><li><strong>OpenCUI Hosted</strong>: When configured to be OpenCUI hosted, there will be a button &quot;deploy&quot; that can trigger the new definition be deployed on the OpenCUI cloud to serve the user traffic.</li><li><strong>Private Deploy</strong>: When configured to be private-deployed, there will be a button &quot;export&quot; that can trigger the code generated for the project. The code can then be used by your devops team to bring up the service.</li></ul><h3 id="chatbot" tabindex="-1">Chatbot <a class="header-anchor" href="#chatbot" aria-label="Permalink to &quot;Chatbot&quot;">​</a></h3><p>An application with conversational user interface(CUI), where user can access service through text or voice instead of a graphical user interface. Chatbot can be generally partitioned into 4 layers:</p><ul><li><p><strong>Schema Layer</strong>: Or API layer, defines interface to backend service, including data structure needed to invoke the service as both input and output.</p></li><li><p><strong>Interaction Layer</strong>: Defines interaction logic, or how input parameter needed by service should be collected from user via conversational interactions, in a language independent fashion. The decision in this lever include whether to prompt user for given slot, whether to give recommendation when prompt, and what to do if input validation is failed, for example.</p></li><li><p><strong>Language Layer</strong>: Used for converting back and forth between natural language and types (structured semantics). You can use expression exemplars for dialog understanding and templates for text generation to control its behavior.</p></li><li><p><strong>Channel Layer</strong>: Different channels have different ways to encode the conversation relevant information, implementation for channels are defined in this layer to make sure the same bot can be accessed from different channel.</p></li></ul><h3 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;Module&quot;">​</a></h3><p>The composable architecture of OpenCUI allows you to build encapsulated component that handles interaction for some predefined purpose, and then wire these into bigger and bigger ones for what you need. And some components contain service APIs, which can be used as basis to declaratively build the backend.</p><h4 id="service" tabindex="-1">Service <a class="header-anchor" href="#service" aria-label="Permalink to &quot;Service&quot;">​</a></h4><p>The API for collection of functions that chatbot can use to access business data and logic.</p><h3 id="provider" tabindex="-1">Provider <a class="header-anchor" href="#provider" aria-label="Permalink to &quot;Provider&quot;">​</a></h3><p>Provider is implementation for APIs. Depending on who defines APIs, there are two kind of providers: system providers that implements OpenCUI defined APIs like Channel/Support interface and service providers that implements business APIs defined by builder. You can implement providers in Kotlin code. Or you can choose one of scripted provider, and use the corresponding script language to define business logic. OpenCUI currently provides the following scripted provider: PostgreSQL, RESTful and Google Sheets.</p><ul><li><p><strong>PostgreSQL Provider</strong>: PostgreSQL provider are OpenCUI hosted. In addition to define application logic using SQL, you also need to define database schema using storage annotation. OpenCUI also allow you to define the admin interface to the backend using backoffice annotation. So it possible to the entire backend using this provider.</p></li><li><p><strong>RESTful Provider</strong>: Service can also be accessed via restful API, with restful provider one can describe the mapping of the collected input parameter to actual Json format needed by endpoint.</p></li><li><p><strong>Google Sheets Provider</strong>: Google Sheets provider allow you to use Google Sheets as backend, which the actual data can be managed by your operation team in online spreadsheet collaboratively.</p></li></ul><h2 id="runtime" tabindex="-1">Runtime <a class="header-anchor" href="#runtime" aria-label="Permalink to &quot;Runtime&quot;">​</a></h2><p>The goal of conversational user interface is to build common understanding of what user want through conversation, connect user to the right service and generate the natural text response for user. OpenCUI defines a set of primitives that builder can use to describe how bot should behave conversationally, and runtime provides the implementation of these primitives so that the user get the defined behaviors. Runtime includes dialog management (DM), dialog understanding (DU) and response generation at the core, but also contains session and channel management. OpenCUI Runtime is a fully decomposed system, with diaDM operating solely on DU output, and given DU output, DM output is entirely independent of user utterance, and given DM output, text generation is independent of DU output. It also means that conversation chatbot carries out is schema grounded, as core part of interaction is defined in language independent fashion.</p><h3 id="dialog-manager-dm" tabindex="-1">Dialog manager (DM) <a class="header-anchor" href="#dialog-manager-dm" aria-label="Permalink to &quot;Dialog manager (DM)&quot;">​</a></h3><p>Dialog manager is responsible for calling dialog understanding(DU) to convert user utterance to the frame event, and executing interaction logic defined by dialog annotations to get parameterized dialog act, and translating these dialog acts into natural text. This is repeated for every turn.</p><h3 id="dialog-understanding-du" tabindex="-1">Dialog understanding (DU) <a class="header-anchor" href="#dialog-understanding-du" aria-label="Permalink to &quot;Dialog understanding (DU)&quot;">​</a></h3><p>A major part of runtime is to convert what user said into semantic structure representation, given the dialog expectation. In OpenCUI, builder can shape the behavior of DU is by the context dependent expression exemplars.</p><h4 id="dialog-expectation" tabindex="-1">Dialog expectation <a class="header-anchor" href="#dialog-expectation" aria-label="Permalink to &quot;Dialog expectation&quot;">​</a></h4><p>Information can be used to change how user utterance be understood. For example, if DU expect a song name, then &quot;Beijing welcome you&quot; will be recognized as a song and &quot;Beijing&quot; in there will not be recognized as city; if DU does not expect a song name, &quot;Beijing&quot; might be recognized as city. Dialog expectation is used to summarize the conversational history so far. In another word, given dialog expectation, the conversational history does not provide additional information toward understanding of the incoming user input. Dialog expectation is automatically calculated by DM for this purpose.</p><h4 id="expression-exemplars" tabindex="-1">Expression exemplars <a class="header-anchor" href="#expression-exemplars" aria-label="Permalink to &quot;Expression exemplars&quot;">​</a></h4><p>The expression exemplars are the only way for builder to influence how user utterance is converted into semantic frames. By attaching expression exemplars to some semantics under given context, you indicate user utterance that are similar to expression exemplars under the same context should be converted to the corresponding frame.</p><h5 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h5><p>Dialog understanding is always conducted under context, and context is simply the stack of frame that is currently active. So if we are interacting about frame A, and drill into one of its slot of type(frame) B, then the context is [A, B], with B on the top of the stack.</p><ul><li><p><strong>Context Independent Expression</strong>: Expression exemplars defined in the expression tab for skills are context independent, and they can be triggered in any context, or DU will convert the user utterances similar to the these expression exemplars into frame and send to dialog management for further processing.</p></li><li><p><strong>Context Dependent Expression</strong>: All other expression exemplars defined on the OpenCUI platform are considered context dependent, with its context determined by where the expression exemplar is defined. DU will convert expressions similar to these exemplars into corresponding frames only when the current dialog context matches that of exemplar. For example, positive expression exemplar under confirmation on the slot will only be in effect when chatbot start the confirmation on that slot.</p></li></ul><h4 id="frame-event" tabindex="-1">Frame event <a class="header-anchor" href="#frame-event" aria-label="Permalink to &quot;Frame event&quot;">​</a></h4><p>The semantic structure representing what user said, converted by DU under given dialog expectation. The Frame event is just a serialization of instance of some type.</p><h3 id="text-generation" tabindex="-1">Text generation <a class="header-anchor" href="#text-generation" aria-label="Permalink to &quot;Text generation&quot;">​</a></h3><p>OpenCUI uses text generation module to translate the semantics/dialog act into different natural text, for now, we focus on the template based generation.</p><h4 id="dialog-act" tabindex="-1">Dialog act <a class="header-anchor" href="#dialog-act" aria-label="Permalink to &quot;Dialog act&quot;">​</a></h4><p>When it is fully parameterized, dialog acts present what bot need to communicate to user. For example, SlotRequest(slot=destination) can represent bot want to ask user where they want to go. We have some predefined dialog act types, and builder can always define their own.</p><h4 id="template" tabindex="-1">Template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;Template&quot;">​</a></h4><p>In both prompt and response, we need to specify how bot say something to user. This is accomplished by template. Template is just string with code expression embedded in it in order to capture the context. One way of encoding the embedded code expression is to surround them with <code>${}</code>, the code expression inside <code>${}</code> will be evaluated to string and then concatenated with rest of static content to form the final message for user.</p><h4 id="prompt" tabindex="-1">Prompt <a class="header-anchor" href="#prompt" aria-label="Permalink to &quot;Prompt&quot;">​</a></h4><p>Use these templates to create question to guide user towards their goal. Examples include: &quot;where do you want to go?&quot;, and &quot;Are you sure you want to it to be extremely spicy?&quot;</p><h4 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h4><p>The services that user want are generally accessed via some form APIs, and result from the APIs will be some structured information. Response are the template to turn these structured result into natural text.</p><h2 id="session-manager" tabindex="-1">Session manager <a class="header-anchor" href="#session-manager" aria-label="Permalink to &quot;Session manager&quot;">​</a></h2><p>Session manager is used to manage the user session, so that each turn contains all the history information.</p><h3 id="session" tabindex="-1">Session <a class="header-anchor" href="#session" aria-label="Permalink to &quot;Session&quot;">​</a></h3><p>A session is a series of back and forth turns between user and chatbot to address user&#39;s needs at some point in time. Session can be started by user or chatbot (but do not be confused with who will have the first message, it is possible chatbot have the first message in the session that is started by user, particularly for live chat cases), and it has a closure, explicitly (by mutual agreement) or implicitly (by time out). There can be many sessions between chatbot and a particular user over time.</p><h2 id="dispatcher" tabindex="-1">Dispatcher <a class="header-anchor" href="#dispatcher" aria-label="Permalink to &quot;Dispatcher&quot;">​</a></h2><p>Dispatcher manages the messages from channels and decide whether it is chatbot or human supports is responsible for the conversation.</p><h3 id="channel" tabindex="-1">Channel <a class="header-anchor" href="#channel" aria-label="Permalink to &quot;Channel&quot;">​</a></h3><p>The same chatbot can interact with user from different channel (facebook messenger, WeChat public account, etc). Conversation are conducted between chatbot and user by exchange messages in the channel. Channels come with two different capabilities: some channel can only render text messages, particularly these channel based on speakers or without a display, other channel can read media, image or video in some degree. There are two different kinds of channels, live channel and messaging channel.</p><ul><li><p><strong>Live Channel</strong>: User on live channel can not be contacted asynchronously by chatbot, conversation session on the live channel can only be started by user, most web channels belongs to this category.</p></li><li><p><strong>Messaging Channel</strong>: User on message channel can be reached by chatbot, or conversation session on the message channel can be started by chatbot. Example of message channel is RCS or Facebook messenger.</p></li></ul><h4 id="messages" tabindex="-1">Messages <a class="header-anchor" href="#messages" aria-label="Permalink to &quot;Messages&quot;">​</a></h4><p>User exchange messages with chatbot/human agent to get things done. There are three different dimensions when it comes to the messages.</p><ul><li><p><strong>Text Message vs Media Message</strong>. Text messages can be rendered in any channels, including in speaker that doesn&#39;t have display. Media messages are best rendered in the channels with display, like Google Business Message and Facebook Messenger.</p></li><li><p><strong>Universal Message vs Channel Specific Message</strong>. Universal messages are defined in Universal Channel, and they will be rendered into all OpenCUI supported channels on the best effort basis. The channel specific messages are defined in the specific channel, these messages will be chosen as reply to users for that channel instead of already defined generic messages. Channel specific message will be supported later.</p></li><li><p><strong>Simple Message vs List Messages</strong>. Simple messages render information in a single frame, and list messages render information in the list of frames.</p></li></ul><h3 id="support" tabindex="-1">Support <a class="header-anchor" href="#support" aria-label="Permalink to &quot;Support&quot;">​</a></h3><p>When chatbot does not know what to do or when user demand talking to a human agent, we can forward the conversation to support system, also knows as contract center software, the default one is open source system Chatwoot. There are two different modes of support: live chat and messaging.</p><ul><li><p><strong>Live Chat</strong>: Under the live chat mode, it is assumed that conversation will get into a queue for human agent, where user will be waiting for the human agent become available. When human agent become available, user can expect his message will be replied in reasonable time frame before his issues is either resolved and an alternative is suggested/agreed upon.</p></li><li><p><strong>Messaging</strong>: Under this mode, user will send message, and expect some human agent will eventually come back with reply. At mean time, he will move on to other things.</p></li></ul><h2 id="schema-grounded-cui" tabindex="-1">Schema grounded CUI <a class="header-anchor" href="#schema-grounded-cui" aria-label="Permalink to &quot;Schema grounded CUI&quot;">​</a></h2><p>OpenCUI is schema grounded, which means interaction logic is defined on types, or structured presentation meaning. User utterance is first converted to , DM only operate on these types, what/how user said does not affect how chatbot respond given these frame event. Also, every message chat. Type are declared for every slot, every function input parameter and every function return. Entities, frames and skills are all considered to be type on OpenCUI.</p><h3 id="how-types-are-defined" tabindex="-1">How types are defined <a class="header-anchor" href="#how-types-are-defined" aria-label="Permalink to &quot;How types are defined&quot;">​</a></h3><p>Each chatbot/component is consisted of one structure view and one or more language views.</p><ul><li><strong>Structure View</strong>: Defines the language independent user interaction logic for chatbot which is shared by different languages.</li><li><strong>Language View</strong>: Provides annotation so chatbot can convert natural language text into semantic structure and back.</li></ul><h4 id="label" tabindex="-1">Label <a class="header-anchor" href="#label" aria-label="Permalink to &quot;Label&quot;">​</a></h4><p>Label is a language independent aspct for semantics in OpenCUI, that include entity type, entity instance, frames. Labels are denoted in the full qualified fashion in order to reduce the naming conflict.</p><h4 id="global" tabindex="-1">Global <a class="header-anchor" href="#global" aria-label="Permalink to &quot;Global&quot;">​</a></h4><p>Frame can be declared as global. A global frame can occur in more than one skill/frame as the type for one of slot, just like regular frame, but we will only interact with user once to fill this frame in a session when it is first referenced (if not persisted), and all the subsequent reference via different slot of the same type will access the same information. All slot of the global frame type should be declared as never ask (I can understand call it never ask or always ask are both problematic as we don&#39;t know whether it will be asked in the context, but we should NOT have conditional asking at least). The interaction on these slots are controlled by the global frame itself, not slot.</p><h4 id="schema" tabindex="-1">Schema <a class="header-anchor" href="#schema" aria-label="Permalink to &quot;Schema&quot;">​</a></h4><p>Schema is a static view what frame is about: common goal and information needed by that goal. Anecdotally, there are two types of frames: verb frames and noun frames. Verb frames are related to skill which describe what user wants or what provider serves (they have to agree), and noun frames are essentially composite entity. Frames commonly has slots (has-a relationship), which can be of entity or frame type, that defines some aspects of this frame.</p><h4 id="annotation" tabindex="-1">Annotation <a class="header-anchor" href="#annotation" aria-label="Permalink to &quot;Annotation&quot;">​</a></h4><p>The desired dynamic behavior of component is declaratively defined in form of annotations. These are designed as &quot;control&quot; so builder to control the desired behavior for their chatbots. Annotations can be defined on the type level which defines behavior of the entire frame/skill, or slot level which define the slot specific behavior.</p><ul><li><p><strong>Dialog Annotation</strong>: It&#39;s used to define the conversational behavior of chatbot.</p></li><li><p><strong>Storage Annotation</strong>: It&#39;s used to define the database schema needed by backend component, which can then be used to create compatible database to serve needed backend.</p></li><li><p><strong>Backoffice Annotation</strong>: It&#39;s used to define the user experience of the back office for back end.</p></li></ul><h4 id="code-expression" tabindex="-1">Code expression <a class="header-anchor" href="#code-expression" aria-label="Permalink to &quot;Code expression&quot;">​</a></h4><p>Code expressions (in Kotlin) can be evaluated dynamically by runtime. Code expression can be used independently or embedded in templates. Since the skills/frames/entities defined on the platform are directly compiled into Kotlin source code, so it is possible to use arbitrary Kotlin code expression in predefined places to specify the interaction logic. For example, in value recommendation, we can use code expression to indicate which function, and how it should be invoked to provide the desired list of instances for user to choose from.</p><h4 id="weak-type" tabindex="-1">Weak type <a class="header-anchor" href="#weak-type" aria-label="Permalink to &quot;Weak type&quot;">​</a></h4><p>Builder can map an interface frame to an entity, then have one subframe for this interface for every instance of the entity type. This reuses the expressions defined on the entity and its instances. The result is the utterance are recognized toward meaning using both dialog understanding (extractive and abstractive) methods.</p><h3 id="skill" tabindex="-1">Skill <a class="header-anchor" href="#skill" aria-label="Permalink to &quot;Skill&quot;">​</a></h3><p>Skills define the tasks that user accomplish through conversing with chatbot. It defines what user have to say to indicate that he/she wants something, and which actual function to invoke for that task. There are some built-in <strong>System Skills</strong>: Tasks needed by runtime to manipulate the common understanding what is user want to achieve, and builder can define new skills per their business.</p><h3 id="frame" tabindex="-1">Frame <a class="header-anchor" href="#frame" aria-label="Permalink to &quot;Frame&quot;">​</a></h3><p>Frame captures the structure meaning that user expressed in their utterance. Skill is essentially frame with actions attached to it. Frame are understood using abstractive methods using machine learning models. Frame can contain one or more slots, with entity or frame types. There are two type of frames: language aware and language ignorant. Frame supports both has-a (composition) and is-a (inheritance) relationship on frame. One can add dialog annotation to frame (then became a CUI frame), but it is not required that frame has to have dialog annotations. Similarly, one can add storage/backoffice annotation to a frame in the backend, but it is not required.</p><ul><li><strong>SubFrame</strong>: A subframe inherits every thing from parent frame.</li></ul><h3 id="entity" tabindex="-1">Entity <a class="header-anchor" href="#entity" aria-label="Permalink to &quot;Entity&quot;">​</a></h3><p>In OpenCUI, entity is a type of item and element that is relevant to the skill/frame, for example, city is an entity with instances like Beijing, New York, for example. Entities define typed data that can be extracted from the utterance and is essential to complete a user&#39;s required action. Entity instances are understood based on extractive methods. Entity has one or more type expressions.</p><ul><li><p><strong>Entity Instance</strong>: Entity instance is an entity of that type. It has a label that is language independent, and then one or more language dependent expressions (value expression) what user say and system could understand.</p></li><li><p><strong>Parent Entity</strong>: If B is parent of current entity, every instance of current entity is also instance of the B.</p></li></ul><h2 id="cui-component" tabindex="-1">CUI component <a class="header-anchor" href="#cui-component" aria-label="Permalink to &quot;CUI component&quot;">​</a></h2><p>The main purpose of CUI component is to agree on frame, what user want or the common goal, and fill the frame, or find values for the slots. This is done by two basic components: slot filling and frame filling.</p><ul><li><p><strong>Slot Filling</strong>: Slot filling is one of core CUI component. Since the goal of the chatbot is figuring out what user want in form of frame filling. And the basic of the frame filling is to fill a slot, or find out user&#39;s preference on a slot.</p></li><li><p><strong>Frame Filling</strong>: Some time, the slot of the frame can not be filled independently, this is when use annotation on the frame to control the collective filling, but value recommendation, value check and confirmation can be defined on the frame.</p></li></ul><h3 id="initialization" tabindex="-1">Initialization <a class="header-anchor" href="#initialization" aria-label="Permalink to &quot;Initialization&quot;">​</a></h3><p>Initialize the slot value. There are two ways to initialize a slot. One is static initialization in which the slot is assigned a deterministic value like constant and any non-nullable code expression, and another is dynamic initialization in which the slot is assigned any indeterministic nullable code expression like another slot or a function.</p><h3 id="fill-strategy" tabindex="-1">Fill strategy <a class="header-anchor" href="#fill-strategy" aria-label="Permalink to &quot;Fill strategy&quot;">​</a></h3><p>Decide whether or when to prompt the user to fill this slot. More importantly, it also defines how other fill annotations should work together.</p><ul><li><strong>Always</strong>: Always ask user.</li><li><strong>Conditional</strong>: Only ask user preference under some condition. Condition need to be specified.</li><li><strong>Gated</strong>: Used to give user control in terms of whether there should be conversation about certain aspects: &quot;Are you are a member?&quot; can be used to safeguard a list of questions that chatbot might ask to verify users membership and go on with a different UI path for deliver service to user. Gated strategy can only be applied to frame slot.</li><li><strong>Recover Only</strong>: Not be prompt unless there are some prior effort to fill it, either initialization by builder or prior mention by user.</li><li><strong>Never</strong>: Never ask, instead get its value from API.</li><li><strong>External</strong>: Can be set when bot needs to work with external software. Bot will pause the conversation until an external event is received.</li></ul><h3 id="value-recommendation" tabindex="-1">Value recommendation <a class="header-anchor" href="#value-recommendation" aria-label="Permalink to &quot;Value recommendation&quot;">​</a></h3><p>In addition to ask user for the value, it is often helpful to give them recommendations so that it is easy for user to pick the options that actually works.</p><h3 id="value-check" tabindex="-1">Value check <a class="header-anchor" href="#value-check" aria-label="Permalink to &quot;Value check&quot;">​</a></h3><p>Check whether a given value is servable based on business logic.</p><h3 id="confirmation" tabindex="-1">Confirmation <a class="header-anchor" href="#confirmation" aria-label="Permalink to &quot;Confirmation&quot;">​</a></h3><p>To inform user something (implicit confirmation) or ask user to confirm their choice (explicit confirmation).</p><h3 id="transition" tabindex="-1">Transition <a class="header-anchor" href="#transition" aria-label="Permalink to &quot;Transition&quot;">​</a></h3><p>Transition is a low level annotation that give builder the ability to control the state machine directly. It is an optional type level annotation which lets you define transitions between slots hosted directly and indirectly by hosting frame.</p>',127),r=[i];function s(l,h,d,c,u,p){return a(),t("div",null,r)}const g=e(o,[["render",s]]);export{f as __pageData,g as default};
