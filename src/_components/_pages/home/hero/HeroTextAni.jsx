
"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function HeroTextAni({ children, className = '' }) {
	const ref = useRef(null);

	useEffect(() => {
		if (!ref.current) return;

		// Zatrzymaj poprzednie animacje na tych elementach (fix na bugi przy re-renderze/fast refresh)
		gsap.killTweensOf(ref.current);
		const lines = Array.from(ref.current.querySelectorAll('.ani-line'));
		if (lines.length > 0) gsap.killTweensOf(lines);

		// Ustaw style początkowe (zawsze ten sam stan wyjściowy)
		if (lines.length === 0) {
			gsap.set(ref.current, { opacity: 0, y: 48, filter: 'blur(8px)' });
			gsap.to(
				ref.current,
				{ opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'back.out(1.7)' }
			);
		} else {
			gsap.set(lines, { opacity: 0, y: 48, filter: 'blur(12px)' });
			gsap.to(
				lines,
				{
					opacity: 1,
					y: 0,
					filter: 'blur(0px)',
					duration: 1.1,
					ease: 'back.out(1.7)',
					stagger: 0.18
				}
			);
		}

		// Cleanup: kill animacje przy odmontowaniu
		return () => {
			gsap.killTweensOf(ref.current);
			if (lines.length > 0) gsap.killTweensOf(lines);
		};
	}, []);

	// Automatycznie wrapuj linie tekstu w <span className="ani-line">
	const renderLines = () => {
		if (typeof children === 'string') {
			return children.split(/<br\s*\/?>(\s*)?/i).map((line, i) => (
				<span key={i} className="ani-line" style={{ display: 'block' }}>{line}</span>
			));
		}
		// Jeśli children to JSX z <br/>, rozbij na linie
		const arr = [];
		let line = [];
		(Array.isArray(children) ? children : [children]).forEach((child, i) => {
			if (typeof child === 'string') {
				const parts = child.split(/(\n)/);
				parts.forEach((part, j) => {
					if (part === '\n') {
						arr.push(<span key={arr.length} className="ani-line" style={{ display: 'block' }}>{line}</span>);
						line = [];
					} else {
						line.push(part);
					}
				});
			} else if (child && child.type === 'br') {
				arr.push(<span key={arr.length} className="ani-line" style={{ display: 'block' }}>{line}</span>);
				line = [];
			} else {
				line.push(child);
			}
		});
		if (line.length) arr.push(<span key={arr.length} className="ani-line" style={{ display: 'block' }}>{line}</span>);
		return arr;
	};

	return (
		<div ref={ref} className={className}>
			{renderLines()}
		</div>
	);
}

