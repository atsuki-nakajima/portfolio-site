import { Section } from "@/app/components/elements/Section";
import { Strengths } from "./Strengths";
import { ExperienceSection } from "./ExperienceSection";
import { AboutSection } from "./AboutSection";
import React from "react";

/** 作品カード（埋め込みプレビュー + リンク） */
type Work = {
	url: string;
	title: string;
	desc?: string;
};

const works: Work[] = [
	{
		url: "https://helpful-hotteok-f97800.netlify.app/",
		title: "Netlify Demo（LP）",
		desc: "軽量LP・演出検証",
	},
	{
		url: "https://wasabi2020.com/",
		title: "WASABI 2020",
		desc: "Webサイト実装",
	},
	{
		url: "https://github.com/atsuki-nakajima?tab=repositories",
		title: "GitHub Repositories",
		desc: "コード・成果物一覧",
	},
];

function hostnameOf(url: string) {
	try {
		return new URL(url).hostname.replace(/^www\./, "");
	} catch {
		return url;
	}
}

function WorkEmbedCard({ url, title, desc }: Work) {
	return (
		<div
			className="group relative rounded-2xl border border-emerald-800/60 bg-emerald-950/30 overflow-hidden hover:shadow-xl hover:shadow-emerald-900/30 transition-transform duration-300 will-change-transform hover:-translate-y-1"
			role="article"
			aria-label={title}
		>
			{/* 埋め込みプレビュー（失敗しても上部のヘッダで遷移可） */}
			<div className="relative">
				<div className="aspect-[16/9] bg-emerald-900/30">
					<iframe
						src={url}
						title={title}
						loading="lazy"
						referrerPolicy="no-referrer"
						sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
						className="w-full h-full"
					/>
				</div>

				{/* グロー演出 */}
				<div
					className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					style={{
						background:
							"radial-gradient(600px circle at 50% 0%, rgba(234,179,8,0.08), transparent 40%)",
					}}
				/>
			</div>

			{/* メタ情報 */}
			<div className="p-4">
				<div className="flex items-center justify-between gap-3">
					<h4 className="font-semibold text-yellow-100/95 tracking-wide">
						{title}
					</h4>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1 rounded-full border border-yellow-700/40 bg-yellow-900/20 px-2.5 py-1 text-[12px] text-yellow-100 hover:bg-yellow-900/30 transition-colors"
						aria-label={`${title} を新規タブで開く`}
					>
						開く
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							className="opacity-90"
						>
							<path
								d="M14 3h7v7M10 14L21 3M21 10v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10"
								stroke="currentColor"
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</div>
				<p className="mt-1 text-sm text-emerald-100/80">{desc}</p>
				<p className="mt-2 text-xs text-emerald-300/70">{hostnameOf(url)}</p>
			</div>
		</div>
	);
}

export function ContentSections() {
	return (
		<>
			<AboutSection />

			<ExperienceSection />

			{/* 作品（埋め込みリンク表示） */}
			<Section id="works" title="作品">
				<div className="grid md:grid-cols-2 gap-6">
					{works.map((w) => (
						<WorkEmbedCard key={w.url} {...w} />
					))}
				</div>
				<p className="text-xs text-emerald-300/60 mt-3">
					※
					一部サイトはセキュリティ設定によりプレビューが表示されない場合があります。リンクからご覧ください。
				</p>
			</Section>

			{/* スキルセット */}
			<Section id="skills" title="スキルセット">
				<div className="grid sm:grid-cols-2 gap-6">
					{/* Especially Proficient */}
					<div className="rounded-xl border border-yellow-600/50 p-5 bg-yellow-950/30 sm:col-span-2">
						<p className="font-medium text-yellow-100/90 flex items-center gap-2">
							<span className="text-lg">💡</span> 特に得意な技術スタック
						</p>
						<p className="text-xs mt-2 opacity-80">
							以下の技術スタックはここ数年での使用頻度が高く、設計から実装、テストまで一貫して高いパフォーマンスを発揮できます。
							その他スキルも基礎的なHTMLやCSS、Javascriptをメインで学んできたので柔軟に対応できます。
						</p>
						<ul className="mt-3 flex flex-wrap gap-2 text-sm">
							{[
								"React",
								"TypeScript",
								"Node.js",
								"Tailwind CSS",
								"Git / GitHub",
							].map((s) => (
								<li
									key={s}
									className="px-2.5 py-1 rounded-full bg-yellow-800/50 border border-yellow-600/50 font-semibold"
								>
									{s}
								</li>
							))}
						</ul>
					</div>
					{/* Core Stack */}
					<div className="rounded-xl border border-emerald-800/50 p-5 bg-emerald-950/30">
						<p className="font-medium text-yellow-100/90 flex items-center gap-2">
							<span className="text-lg">🔥</span> コアスキル（実務メイン）
						</p>
						<ul className="mt-3 flex flex-wrap gap-2 text-sm">
							{[
								"HTML",
								"CSS / SCSS",
								"JavaScript",
								"TypeScript",
								"React",
								"Vue.js (3系)",
							].map((s) => (
								<li
									key={s}
									className="px-2.5 py-1 rounded-full bg-emerald-900/50 border border-emerald-700/50"
								>
									{s}
								</li>
							))}
						</ul>
						<p className="text-xs mt-3 opacity-80">
							※
							フロントエンド実装を中心にUI構築・状態管理・API連携まで対応可能。
						</p>
					</div>

					{/* Frameworks & Backend */}
					<div className="rounded-xl border border-emerald-800/50 p-5 bg-emerald-950/30">
						<p className="font-medium text-yellow-100/90 flex items-center gap-2">
							<span className="text-lg">🧩</span> フレームワーク /
							サーバーサイド
						</p>
						<ul className="mt-3 flex flex-wrap gap-2 text-sm">
							{[
								"Next.js",
								"Node.js",
								"jQuery",
								"React Query",
								"Redux",
								"Pinia",
								"Hono.js (BFF)",
							].map((s) => (
								<li
									key={s}
									className="px-2.5 py-1 rounded-full bg-emerald-900/30 border border-emerald-700/40"
								>
									{s}
								</li>
							))}
						</ul>
						<p className="text-xs mt-3 opacity-80">
							※
							実案件・検証環境での使用経験あり。必要に応じてキャッチアップ可能。
						</p>
					</div>

					{/* Styling */}
					<div className="rounded-xl border border-emerald-800/50 p-5 bg-emerald-950/30">
						<p className="font-medium text-yellow-100/90 flex items-center gap-2">
							<span className="text-lg">🎨</span> スタイリング / UI
						</p>
						<ul className="mt-3 flex flex-wrap gap-2 text-sm">
							{["Tailwind CSS", "Bootstrap", "SCSS"].map((s) => (
								<li
									key={s}
									className="px-2.5 py-1 rounded-full bg-emerald-900/30 border border-emerald-700/40"
								>
									{s}
								</li>
							))}
						</ul>
						<p className="text-xs mt-3 opacity-80">
							※
							レスポンシブ・モバイル優先、軽量アニメーションを意識したUI設計が得意。
						</p>
					</div>

					{/* CMS / Platforms */}
					<div className="rounded-xl border border-emerald-800/50 p-5 bg-emerald-950/30">
						<p className="font-medium text-yellow-100/90 flex items-center gap-2">
							<span className="text-lg">🛒</span> CMS / ECプラットフォーム
						</p>
						<ul className="mt-3 flex flex-wrap gap-2 text-sm">
							{[
								"WordPress（経験あり・現在リフレッシュ中）",
								"Shopify（基本操作）",
								"BASE（基本操作）",
							].map((s) => (
								<li
									key={s}
									className="px-2.5 py-1 rounded-full bg-emerald-900/30 border border-emerald-700/40"
								>
									{s}
								</li>
							))}
						</ul>
					</div>

					{/* Tools / Dev Env */}
					<div className="rounded-xl border border-emerald-800/50 p-5 bg-emerald-950/30 sm:col-span-2">
						<p className="font-medium text-yellow-100/90 flex items-center gap-2">
							<span className="text-lg">🛠</span> 開発環境 / ツール
						</p>
						<ul className="mt-3 flex flex-wrap gap-2 text-sm">
							{[
								"Git / GitHub / GitLab",
								"GitHub Projects",
								"Docker",
								"VSCode",
								"Cursor",
								"CLI",
								"Claude Code",
								"Redmine",
								"Backlog",
								"Trello",
								"Notion",
							].map((s) => (
								<li
									key={s}
									className="px-2.5 py-1 rounded-full bg-emerald-900/30 border border-emerald-700/40"
								>
									{s}
								</li>
							))}
						</ul>
						<p className="text-xs mt-3 opacity-80">
							※ チーム開発での利用経験多数。AIツールも併用し効率的に開発を進行。
						</p>
					</div>

					{/* Office / Communication */}
					<div className="rounded-xl border border-emerald-800/50 p-5 bg-emerald-950/30 sm:col-span-2">
						<p className="font-medium text-yellow-100/90 flex items-center gap-2">
							<span className="text-lg">📂</span> ビジネスツール /
							コミュニケーション
						</p>
						<ul className="mt-3 flex flex-wrap gap-2 text-sm">
							{[
								"Slack",
								"Teams",
								"ChatWork",
								"Google Workspace",
								"Excel",
								"Word",
								"PowerPoint",
								"Outlook",
								"SharePoint",
							].map((s) => (
								<li
									key={s}
									className="px-2.5 py-1 rounded-full bg-emerald-900/30 border border-emerald-700/40"
								>
									{s}
								</li>
							))}
						</ul>
						<p className="text-xs mt-3 opacity-80">
							※
							ドキュメント作成・資料作成・データ管理・オンライン会議ツールの利用経験豊富。
						</p>
					</div>
				</div>
			</Section>

			<Strengths />

			<Section id="summary" title="まとめ">
				<p>
					最後までご覧いただきありがとうございます。
					私の強みは「対話を大切にしながら、実装まで手を動かせること」です。
					広告運用 ×
					技術力という掛け算を武器に、改善提案から実装まで一気通貫で対応してきました。
					今後もチームの一員として成果に貢献するとともに、
					自ら学び、仲間と共に成長し続けたいと思っています。
				</p>
			</Section>
		</>
	);
}
