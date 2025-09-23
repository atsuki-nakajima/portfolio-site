"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/app/components/elements/Section";

const experiences = [
	{
		title: "LLM AIウェブアプリ開発",
		description:
			"画面実装と修正、新機能追加、Chrome拡張機能開発。設計修正〜実装〜テストを担当。",
		stack: "React / TypeScript / AWS / GitLab etc...",
	},
	{
		title: "大手放送局向けクラウド移行",
		description:
			"ユーザー登録画面や監視画面など新規4画面を開発。API連携やテストを担当。",
		stack: "Vue3 / TypeScript / Vuetify / Docker etc...",
	},
	{
		title: "共済システム フロント開発",
		description:
			"21画面の修正・単体/結合テスト。障害対応やカバレッジテストも実施。",
		stack: "React / TypeScript / Jest / MySQL etc...",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2, // 各子要素のアニメーションを0.2秒ずらす
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -50 }, // 左に50pxずれた状態から
	visible: {
		opacity: 1,
		x: 0, // 元の位置へ
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
};

export function ExperienceSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 }); // 30%表示されたら一度だけ実行

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
