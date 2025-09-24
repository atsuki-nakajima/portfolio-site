"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Section } from "@/app/components/elements/Section";

export const strengths = [
	{
		title: "〜 企画→実装→改善まで『一気通貫』で回せる 〜",
		description:
			"デザイナーや企画チームと要件・UIをすり合わせて設計し、実装→単体/結合テスト→不具合修正まで自走。リリース後はユーザーの声や計測値を起点に改善提案まで担い、短いサイクルで価値を積み上げた経験を活かせます",
	},
	{
		title: "〜 認識ズレを生まない『コミュニケーション設計』 〜",
		description:
			"企画側・実装側・ユーザーの観点を事前に統一。仕様は関係者レビューで合意形成し、実装方針はエンジニアリーダー/上級メンバーと相談して決定。個人判断に寄らずチーム合意で進めることで、意図と体験が一致する成果物を届けます。",
	},
	{
		title: "〜 チームで最大化する『実行力』 〜",
		description:
			"黙々と単独で進めるより、こまめな共有・短いPR・支援依頼でスループットを底上げ。自分から話しかけて雰囲気を明るくし、意思決定を前に進めるファシリ役として、チームのパフォーマンスを引き出します。",
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

export function Strengths() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<Section id="strengths" title="・強み">
			<motion.ul
				ref={ref}
				className="space-y-6 mt-8"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
			>
				{strengths.map((strength, index) => (
					<motion.li
						key={index}
						variants={itemVariants}
						className="bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-6 shadow-lg"
					>
						<h3 className="font-medium text-yellow-100/90 text-lg">
							{strength.title}
						</h3>
						<p className="text-sm opacity-80 mt-2 leading-relaxed">
							{strength.description}
						</p>
					</motion.li>
				))}
			</motion.ul>
		</Section>
	);
}
