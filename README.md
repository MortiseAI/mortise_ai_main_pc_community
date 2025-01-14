![cover-v5-optimized](https://mai-img-resource.oss-rg-china-mainland.aliyuncs.com/mai-main-bd/mai_slogan_banner.png)

#

MortiseAI 是一款借助 LLM 的强大能力开创出一套以 OODA（Observe-Orient-Decide-Act）为核心的新型开发模式，让开发者从直接编程转向面向 AGI 的编程思维，不仅全面提升了开发效率和代码质量，也极大优化了产研协作流程。通过这一理念，每个人都能打造出独一无二的 OODA AI Coding 体系，在‘观察-确认-决策-行动’的循环中持续迭代，让软件开发真正走向智能化与高效化的未来。

AI 编程工具的 5 个等级
- L1 - 辅助阶段
  提供代码自动补全、语法检查等基础功能，提升开发效率，但仍需开发者全程掌控。
- L2 - 指令阶段
  支持基于自然语言指令生成代码片段，帮助完成常见开发任务，但需开发者验证和整合。
- L3 - 协作阶段
  工具可以参与复杂的代码编写，与开发者协同完成模块开发，同时能根据反馈进行优化调整。
- L4 - 自动化阶段
  支持独立完成完整的功能开发，从需求到代码生成、调试、优化，开发者仅需提供高层次的设计和目标。
- L5 - 自主阶段
  实现完全自主开发，根据模糊需求理解并完成项目，从功能构建到架构设计全程无人工干预，且具有高度自适应能力。

我们的目标是从效率、场景、代码工程和持续迭代四个维度出发，助力每个人在 AI 2.0 时代打造属于自己的 L4 级 AI 编程工具。

<img  src="https://static001.geekbang.org/infoq/f3/f3972ea897a5ec0ca226a26f4b5b987e.png"  />

### 1.效率

我们常说，‘只要把问题描述得足够清晰，解决方案就已经完成了一半。’ 这句简单的话，正蕴含着我们对效率的终极追求。在 MortiseAI 的全新开发模式里，我们将 ‘提示词 → 文档 → 代码’ 这一流程用智能体串联起来，不仅让开发者之间的理解力差异被彻底拉平，也让每一行代码的设计脉络都可追溯、可推敲。通过这样严谨而高效的方式，我们相信，软件开发不再是写代码的苦活，而会成为你洞察问题、创造价值的最佳舞台。

[生成提示词](https://www.bilibili.com/video/BV1oBrCYcEoT/?spm_id_from=888.80997.embed_other.whitelist&bvid=BV1oBrCYcEoT)

![star-us](https://mai-video-resource.oss-cn-hangzhou.aliyuncs.com/%23001_MPrompt.gif)

[生成文档](https://www.bilibili.com/video/BV1ZBrCYcEsx/?spm_id_from=888.80997.embed_other.whitelist&bvid=BV1ZBrCYcEsx)

![star-us](https://mai-video-resource.oss-cn-hangzhou.aliyuncs.com/%23002_MDD.gif)

[生成代码](https://www.bilibili.com/video/BV1ZirCYaEBc/?spm_id_from=888.80997.embed_other.whitelist&bvid=BV1ZirCYaEBc)

![star-us](https://mai-video-resource.oss-cn-hangzhou.aliyuncs.com/%23003_MCode.gif)

[运行代码](https://www.bilibili.com/video/BV1A4rCYzEEV/?spm_id_from=888.80997.embed_other.whitelist&bvid=BV1A4rCYzEEV)

![star-us](https://mai-video-resource.oss-cn-hangzhou.aliyuncs.com/%23004_MCode_Running.gif)

### 2.场景

想象一下，你的企业内部文档、系统架构图和过往项目经验，都被收纳进一个专属的智能库，仿佛为你量身打造的‘私藏宝库’。当我们以 RAG 技术为引擎，让这座知识宝库与 LLM 深度融合，AI 不再只是‘泛泛而谈’，而是能真正读懂你的业务语言——它明白你要处理的场景、知道你设计的初衷，以及未来可能的变化。于是，你得到的不再是千篇一律的代码片段，而是与业务场景无缝贴合、可持续演进的解决方案。就像引入了一位深谙公司文化和技术底蕴的‘新成员’，这一切，让软件开发不再仅仅是代码与工具的组合，而是一次对企业智慧与创新的全新启迪。

[RAG 知识库](https://www.bilibili.com/video/BV1VxrkYHEpa/?spm_id_from=888.80997.embed_other.whitelist&bvid=BV1VxrkYHEpa)

![star-us](https://mai-video-resource.oss-cn-hangzhou.aliyuncs.com/%23005_MKnowledge.gif)

### 3.代码工程

当我们谈及‘AI 赋能的软件开发’，许多人还停留在‘快一步生成代码’的层面，但我们的想法远不止于此。我们在 MortiseAI 自研的系统架构中，引入了自研 MLC 引擎，旨在帮助大语言模型持续输出高结构化、可维护的代码，让程序不再因耦合而一团混乱。透过 Agent 围绕 MLC 框架所生成的模块化代码，我们能让开发者在‘战术性编程’中依然保持对质量的敬畏，进一步降低风险、提升稳定性。

<img  src="https://static001.geekbang.org/infoq/05/053b9d41b071370e4b381bc363f20677.png"  />

在安全层面，我们基于事件驱动机制进行深模块设计，用 ‘Bulkheading’（船舱分隔）思想打造一个个‘密不透风’的模块空间。想想泰坦尼克号的教训：因为船舱之间没有真正的隔离，一个错误就会像雪崩般蔓延，最终毁掉整个系统。我们要做的，就是将每个模块彻底隔离，把风险扼杀在源头，哪怕个别舱室进水，也不至于让整条船一同沉没。

<img  width=500  src="https://static001.geekbang.org/infoq/4a/4a73d55683d2cb478f738cf700349008.png"  />

当然，这还只是开始。我们更要构建灵活、开放的系统，通过 DSL（领域专用语言）与 Workflow（流程管理） 的有机融合，给开发者腾出更大的创新空间。从需求到部署、从微观的函数到宏观的业务流程，每一个环节都能被灵活编排，随时迭代。就像重新定义个人计算机一样，这一次，我们要用 AI 与架构创新，为软件开发重塑新的格局与未来。

<img  width=300  src="https://static001.geekbang.org/infoq/1f/1ff930299723bc5620cbebfbc53f28e5.png"  />  <img  width=300  src="https://static001.geekbang.org/infoq/96/964daaff20eef685dd7c06b90676060b.png"  />

### 4.持续迭代

[智能体](https://www.bilibili.com/video/BV15FcJezEKr/?spm_id_from=888.80997.embed_other.whitelist&bvid=BV15FcJezEKr)

连接智能体平台，让编程更自由、更强大、更未来。

MortiseAI 现已全面支持多个智能体平台，包括 阿里百炼、字节扣子、百度智能体 和 Dify.AI 等。这一能力不仅扩展了平台的多样性，更为用户打开了定制智能体的新天地。

通过这些智能体平台，你可以自由构建和定制属于自己的 AI Coding 智能体，无论是用于代码生成、调试协作，还是复杂的开发任务处理，都能轻松适配，成为你的得力助手。

![star-us](https://mai-video-resource.oss-cn-hangzhou.aliyuncs.com/%23006_MAgent.gif)

[多模型调用](https://www.bilibili.com/video/BV1vfcEeuEEt/?spm_id_from=888.80997.embed_other.whitelist&bvid=BV1vfcEeuEEt)

想象一下，在一个平台上，你可以自由选择和切换各种顶尖 AI 模型，从 OpenAI 到 DeepSeek，再到阿里百炼、字节方舟、百度千帆。MortiseAI 为你打开了这样一扇大门——不再局限于某一种模型，而是让每个模型都能成为你的‘超级动力’，帮助你更快、更巧地完成创意与开发。我们的理念很简单：越是多元，越能释放创造力，越能让你的想法真正变为现实。

![star-us](https://mai-video-resource.oss-cn-hangzhou.aliyuncs.com/%23007_MFT.gif)

[模型调优](https://www.bilibili.com/video/BV1vfcEeuEEF/?spm_id_from=888.80997.embed_other.whitelist&bvid=BV1vfcEeuEEF)

想象一下，你的 AI Coding 工具像钢铁侠的 Jarvis 一样，随着每一次迭代、每一此微调，不断进化，最终升级成了那个更高阶、更智能的 Friday。这就是 MortiseAI 所带来的可能：我们原生支持大模型的蒸馏与微调，让你把业务逻辑、代码风格，以及各种专属知识一点一点注入其中。就像托尼·斯塔克那样，把你的灵感和理念深度融入 AI 之中，让它不断进化，变得越来越懂你、越来越强大。我们想做的，就是帮助每一位开发者打造出属于自己的 Friday，一个能够真正与个人或企业需求深度结合、持续迭代升级的 AI 编程伙伴。

![star-us](https://mai-video-resource.oss-cn-hangzhou.aliyuncs.com/%23008_LLMs.gif)

## MortiseAI 愿景

很多人以为写代码只是敲几行命令，但实质上，这远不止是完成某个功能的过程。AI Coding 可以彻底打破边界，让每个人把那些‘疯狂的想法’转化为实际行动——就像埃隆·马斯克要把人类送上火星一样。想要 Make a difference，就得敢于尝试那些看似不可能的事物，把‘不可能’当作新的出发点。我们正身处一个激动人心的时代：当人类和 AI 火花碰撞，软件开发将不再是重复劳动，而是不断拓展边界、探索未知的壮丽航程。

我们相信，每个人都有独特的创造力，而 MortiseAI 的使命，就是帮助每一位开发者打造出属于自己的专属 AI Coding 工具。从灵感到代码，从需求到产品，无论是提升效率还是实现创意，MortiseAI 都致力于为你提供强大的支持与灵活的可能性。因为我们始终坚信，最强大的工具，不是千篇一律的标准化产品，而是能够与你的需求、愿景深度契合的独特存在。让我们一起，去定义属于你的 AI Coding 时代。

**Let's make a difference together，Own your first AI Coding tool.**

## 使用 MortiseAI

-  **通过浏览官网网址获取最新的消息 </br>**
   https://mortiseai.com/

-  **面向企业/组织的 MortiseAI</br>**
   我们提供额外的面向企业的定制化服务。给我们发送电子邮件 business.mai@outlook.com 讨论企业需求。

## 保持领先

在 GitHub 上给 MortiseAI Star，并立即收到新版本的通知。

![star-us](https://mai-video-resource.oss-cn-hangzhou.aliyuncs.com/github_star.gif)

## 安装社区版

### 快速启动

下载 MortiseAI PC 社区源代码后，通过如下命名启动

```bash
//安装依赖
npm  install
  
//启动应用
npm  start
```

### 核心依赖说明

- MortiseAI 自研 MLC 引擎，用于运行 MortiseAI 生成的代码，MortiseAI 自身产品也都是通过 MortiseAI AI Coding 工具生成

```
"@mai-alpha/mai-mlc-core-tsc": "^0.0.2-snapshot"
```

- MortiseAI PC 依赖包
```
"@mai-community/mai-native-community-lib": "^0.1.0"
```

### MLC 引擎（Mortise Low Code Engine）

MLC 引擎是 MortiseAI 自主研发的跨平台、跨语言、组件化低代码框架。以 LLM 能力为核心，致力于打造一个开放性、灵活的软件架构系统。与传统低代码架构不同，MLC 引擎采用基于 Event 事件机制的响应式框架设计，强调组件间的关系协同，组件内部的实现则完全交由AI或者开发者自由编写，实现了灵活性与模块化的完美平衡。

MLC 引擎未来计划 : 当前版本已发布支持 Node.js 和 Web React Library。未来，我们计划逐步开源并扩展至更多平台，期待拥有热情与能力的开发者加入我们，共同加速推进这一计划。通过社区协作，让 MLC 引擎成为推动跨平台开发与创新的核心力量。

[Node.js TypeScript Commonjs NPM Package](https://www.npmjs.com/package/@mai-alpha/mai-mlc-core-tsc)
```
"@mai-alpha/mai-mlc-core-tsc": "^0.0.2-snapshot"
```
[Web React TypeScript Module NPM Package](https://www.npmjs.com/package/@mai-alpha/mai-mlc-core-tsm)
```
"@mai-alpha/mai-mlc-core-tsm": "^0.0.1-snapshot"
```

## 社区与支持

我们欢迎您加入 MortiseAI 开发者社区做出贡献，以帮助改善 MortiseAI。包括：提交代码、问题、新想法，或分享您基于 MortiseAI 创建的有趣且有用的 AI Coding 创意（智能体、知识点、私有模型）。同时，我们也欢迎您在不同的活动、会议和社交媒体上分享 MortiseAI。

- [Github Discussion](https://github.com/MortiseAI/mortise_ai_main_pc_community/discussions). 👉：分享您的应用程序并与社区交流。
- [GitHub Issues](https://github.com/MortiseAI/mortise_ai_main_pc_community/issues)。👉：提交 MortiseAI 时遇到的错误和问题。
- [电子邮件支持](developer.mai@outlook.com) 👉：关于 MortiseAI 使用的问题。
- [商业合作](business.mai@outlook.com) 👉：有关 MortiseAI 的商业咨询与合作。
- [开发者社区]() 👉：扫描下方二维码，添加微信好友，备注 MAI，我们将邀请您加入 MortiseAI 开发者社区。

  <img  src="https://mai-img-resource.oss-rg-china-mainland.aliyuncs.com/mai-main-bd/mai_login_biz_webcaht_vcode_qr_code.jpg"  alt="wechat"  width="100"/>

## 安全问题

为了保护您的隐私，请避免在 GitHub 上发布安全问题。发送问题至 developer.mai@outlook.com，我们将为您做更细致的解答。

## License

本仓库遵循 MIT 开源协议。