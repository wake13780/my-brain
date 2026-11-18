import Link from 'next/link';
import {
  Sparkles,
  Network,
  Laptop,
  Printer,
  AppWindow,
  Workflow,
  ArrowRight,
  Search,
  Zap,
  Layers,
  BookOpen,
  ShieldCheck,
  FileText,
  UserCheck,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-neutral-100 overflow-hidden flex flex-col justify-between">
      {/* Background Visual Effects */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      
      {/* Subtle Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        {/* Header Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-lg shadow-cyan-950/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>IT OPERATIONS MANUAL // SOP 合集</span>
            <span className="text-cyan-500/60">|</span>
            <span className="text-neutral-400">编写人：许恩民</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            企业 IT 运维
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              标准化操作知识库 (SOP)
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal max-w-2xl mx-auto">
            覆盖网络与 VPN 调优、Windows 系统深度维护、打印机与 SMB 共享排障、办公软件安全治理与资产领用流程。
          </p>
        </div>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/docs/ops"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-neutral-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-cyan-950" />
            <span>查阅 IT 运维手册 (SOP)</span>
            <ArrowRight className="w-4 h-4 text-cyan-950 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/docs/ops/printer/print-spooler-fix"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-neutral-300 bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Print Spooler 崩溃排障</span>
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
            { label: 'SOP 规范总篇目', val: '28+ 篇', desc: '全流程标准化指引' },
            { label: '高频故障秒级排障', val: '0ms', desc: 'Ctrl+K 全文模糊搜索' },
            { label: '覆盖业务部门', val: '10+ 个', desc: '运营/供应链/品质/财务等' },
            { label: '支持操作系统', val: 'Win/Mac', desc: 'Windows 11/10 & macOS' },
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

        {/* Bento Grid: 5 Core Chapters of IT Ops */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>FIVE CORE IT MODULES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              SOP 标准化运维矩阵 · 五大核心模块
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-lg">
              由 IT 工程师许恩民编制整理，将零散经验提炼为结构化 SOP。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Bento Card 1: Network & VPN */}
            <Link
              href="/docs/ops/network"
              className="md:col-span-2 glass-panel glow-box p-7 rounded-2xl group block relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Network className="w-36 h-36 text-cyan-400" />
              </div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 inline-block">
                      <Network className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                      CHAPTER 01
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    一、网络与 VPN 运维支持
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md leading-relaxed mb-6">
                    v2rayN / Flclash / Clash Verge 客户端使用规范、内网与产品中心 VPN 静态 IP 快速切换、钉钉连接 VPN 避让卡顿及网络逐级排障流水线。
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>进入网络模块</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Bento Card 2: System */}
            <Link
              href="/docs/ops/system"
              className="glass-panel glow-box p-7 rounded-2xl group block relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 inline-block">
                  <Laptop className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                  CHAPTER 02
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                二、系统与系统设置
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Windows 11/10 数字权利永久激活、C 盘空间扩容、主板 BIOS 自动开机、任务计划定时关机及硬件驱动精准匹配。
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">
                <span>进入系统模块</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Bento Card 3: Printing & Peripherals */}
            <Link
              href="/docs/ops/printer"
              className="glass-panel glow-box p-7 rounded-2xl group block relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 inline-block">
                  <Printer className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                  CHAPTER 03
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                三、办公外设与打印支持
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                SMB 扫描至网络文件夹、钉钉云打印、Mac 连接打印机、会议室有线无线投屏及 Print Spooler 崩溃 Local Port 终极修复法。
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>进入外设模块</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Bento Card 4: Software & Browser */}
            <Link
              href="/docs/ops/software"
              className="glass-panel glow-box p-7 rounded-2xl group block relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 inline-block">
                  <AppWindow className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                  CHAPTER 04
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                四、软件与浏览器
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                防捆绑软件安装规范、Geek 强力卸载与注册表清理、Chrome 书签迁移及钉钉多部门表格权限隔离。
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>进入软件模块</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Bento Card 5: IT Workflow & Assets */}
            <Link
              href="/docs/ops/workflow"
              className="glass-panel glow-box p-7 rounded-2xl group block relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 inline-block">
                  <Workflow className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                  CHAPTER 05
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                五、IT 流程与其他
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                新员工入职设备领用审批流、离职资产批量退还、办公室 WiFi 密码、Mac 挂载 SMB 及双凭证访问共享技巧。
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>进入流程模块</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
              <h4 className="text-sm font-semibold text-white mb-1">极速索引与模糊检索</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                按 Ctrl+K 瞬间呼出检索框，输入任何报错代码或故障关键词即可直达精准 SOP。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-1">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Obsidian 本地无缝写作</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                用 Obsidian 直接打开 content/docs 目录，写完保存即可自动热更新同步。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
            <div className="p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 mt-1">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">团队与全员规范共享</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                部署上线后可通过固定公网域名分享给全公司员工自主查阅，大幅减少重复沟通成本。
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
            <span className="font-mono text-neutral-400">IT Operations Manual · All Systems Normal</span>
          </div>
          <div>
            编制人：许恩民 · 编制日期：2026年05月16日 · Powered by Next.js & Fumadocs
          </div>
        </div>
      </footer>
    </div>
  );
}
