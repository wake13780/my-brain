import Link from 'next/link';
import {
  Brain,
  Sparkles,
  Cpu,
  Terminal,
  BookOpen,
  ArrowRight,
  Search,
  Zap,
  Layers,
  FileCode2,
  Workflow,
  Globe2,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-neutral-100 overflow-hidden flex flex-col justify-between">
      {/* Background Visual Effects */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      
      {/* Subtle Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-lg shadow-cyan-950/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>NEURAL VAULT // V2.0 ONLINE</span>
            <span className="text-cyan-500/60">|</span>
            <span className="text-neutral-400">100% LOCAL-FIRST</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            构建你的
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              赛博外脑知识库
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal max-w-2xl mx-auto">
            数字化第二大脑 · 深度知识星系 · 认知模型与工程沉淀。
            本地极速 Markdown/Obsidian 零摩擦写作，全球全自动云端部署。
          </p>
        </div>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/docs"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-neutral-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-cyan-950" />
            <span>进入知识库</span>
            <ArrowRight className="w-4 h-4 text-cyan-950 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/docs/guides/obsidian-sync-guide"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-neutral-300 bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all backdrop-blur-md"
          >
            <BookOpen className="w-4 h-4 text-neutral-400" />
            <span>Obsidian 写作流</span>
          </Link>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono text-neutral-400 bg-neutral-950/60 border border-neutral-800/80">
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span>快捷搜索</span>
            <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-300 text-[11px]">
              Ctrl
            </kbd>
            <span>+</span>
            <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-300 text-[11px]">
              K
            </kbd>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-20">
          {[
            { label: '写作响应延迟', val: '0ms', desc: '本地文件直读' },
            { label: 'Obsidian 语法支持', val: '100%', desc: '原生 Markdown / MDX' },
            { label: '知识节点组织', val: '∞', desc: '双向链接与目录树' },
            { label: '全球 CDN 托管', val: 'FREE', desc: 'Vercel / Cloudflare' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl text-center transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 mb-1">
                {item.val}
              </div>
              <div className="text-xs font-medium text-neutral-200">{item.label}</div>
              <div className="text-[11px] text-neutral-500 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Bento Grid: Knowledge Base Categorization */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>KNOWLEDGE CONSTELLATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              便当盒知识矩阵 · 四大核心星系
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-lg">
              按认知维度构建分层体系，沉淀高价值经验与体系化知识。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Bento Card 1: AI & Frontier */}
            <Link
              href="/docs/ai"
              className="md:col-span-2 glass-panel glow-box p-7 rounded-2xl group block relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-36 h-36 text-cyan-400" />
              </div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 inline-block">
                      <Cpu className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                      FRONTIER AI
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    AI 与前沿探索 (Frontier Intelligence)
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md leading-relaxed mb-6">
                    涵盖大语言模型（LLM）底层架构、自主 Agent 智能体系统设计、Prompt & 上下文工程，以及前沿学术论文研读与复现。
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>浏览 AI 星系</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Bento Card 2: Engineering */}
            <Link
              href="/docs/engineering"
              className="glass-panel glow-box p-7 rounded-2xl group block relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 inline-block">
                  <Terminal className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                  SYSTEMS
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                系统架构与工程
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                现代 Web 栈选型、高并发分布式系统、整洁代码（Clean Architecture）与可维护性设计准则。
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">
                <span>进入工程体系</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Bento Card 3: Mental Models */}
            <Link
              href="/docs/thinking"
              className="glass-panel glow-box p-7 rounded-2xl group block relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 inline-block">
                  <Brain className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                  COGNITION
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                认知模型与第二大脑
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                第一性原理、系统动力学、卡片盒笔记法（Zettelkasten）与个人认知操作系统演进。
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>探索思维框架</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Bento Card 4: Workflow & Guides */}
            <Link
              href="/docs/guides/obsidian-sync-guide"
              className="md:col-span-2 glass-panel glow-box p-7 rounded-2xl group block relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 inline-block">
                  <Workflow className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                  WORKFLOW
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    Obsidian 本地无缝写作协同
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    将此仓库直接用作 Obsidian Vault。所写即所得，支持双向链接、代码高亮、公式解析与图表展示。
                  </p>
                </div>
                <div className="bg-neutral-950/70 rounded-xl p-4 border border-neutral-800 font-mono text-xs text-neutral-300 flex flex-col justify-center space-y-2">
                  <div className="text-cyan-400 flex items-center gap-1.5">
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>content/docs/</span>
                  </div>
                  <div className="text-neutral-500">├── ai/</div>
                  <div className="text-neutral-500">├── engineering/</div>
                  <div className="text-neutral-500">└── thinking/</div>
                  <div className="text-emerald-400 text-[11px] mt-1">✔ 实时热更新渲染</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">毫秒级极客体验</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                内置 Fumadocs 引擎，基于 Turbopack 编译，支持全局快捷键快速搜索与即时目录联动。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-1">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">一键全球免费发布</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                配合 Vercel 或 Cloudflare Pages，Git 提交即可全自动触发构建与边缘 CDN 部署。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
            <div className="p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 mt-1">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">极度纯净且自控</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                所有文章全为本地纯文本 Markdown 文件，无数据库依赖，永久拥有完全数据自主权。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Footer */}
      <footer className="relative z-10 border-t border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-mono text-neutral-400">All Neural Systems Operational</span>
          </div>
          <div>
            My Brain · Powered by Next.js & Fumadocs · Designed with Future Tech Aesthetic
          </div>
        </div>
      </footer>
    </div>
  );
}
