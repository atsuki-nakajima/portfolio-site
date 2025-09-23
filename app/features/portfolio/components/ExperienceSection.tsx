"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Section } from "@/app/components/elements/Section";

const experiences = [
	{
		title: "LLM AIウェブアプリ開発 (sattoプロジェクト)",
		description:
			"sattoプロジェクトにおける画面修正、新機能追加、およびChrome拡張機能の開発を担当。APIや画面仕様変更に伴う設計書の修正対応、画面レイアウト修正、実装、単体テストを実施。",
		stack:
			"React / TypeScript / Node.js / AWS / GitLab / Vietest / tailwind / Electron etc...",
	},
	{
		title: "大手放送局向けクラウド移行 (操作画面開発)",
		description:
			"クラウド移行に伴う放送局操作画面のフロントエンド開発を担当。新規ユーザー登録画面、アラート監視画面を含む計4画面の設計、実装、単体テストを実施。設計書の処理仕様の動作確認にも従事。",
		stack:
			"Vue.js 3 / TypeScript / Vuetify / Pinia / Docker / Redmine / Backlog etc...",
	},
	{
		title: "共済契約システム フロントエンド開発",
		description:
			"共済契約システムのフロントエンド開発において、前任者が作成した21画面の修正対応や単体テストコードの修正を実施。Jestを用いたカバレッジテスト、結合テスト、障害探索、DBの追加対応にも携わった。",
		stack:
			"React / TypeScript / SCSS / Jest / SQL / node.js / A5:SQL Mk-2 etc...",
	},
];

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
};

export function ExperienceSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	return (
		<Section id="experience" title="・現場経験">
			<motion.ul
				ref={ref}
				className="space-y-6 mt-8"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
			>
				{experiences.map((exp, index) => (
					<motion.li
						key={index}
						variants={itemVariants}
						className="bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-6 shadow-lg"
					>
						<p className="font-medium text-yellow-100/90 text-lg">
							{exp.title}
						</p>
						<p className="text-sm opacity-80 mt-2">{exp.description}</p>
						<p className="text-xs opacity-60 mt-4 font-mono">{exp.stack}</p>
					</motion.li>
				))}
			</motion.ul>
		</Section>
	);
}
