"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        company: "Buffalo Soldiers",
        role: "Video Editor",
        period: "Dec 2025 - Present",
        description: "Visual storytelling for global brands, tech giants, and sports leagues like Paytm and ICC."
    },
    {
        id: 2,
        company: "WE-Viral",
        role: "Video Editor",
        period: "Jul 2025 - Dec 2025",
        description: "Directed and edited brand films, admission videos, and promotional content for educational giants like LPU and Thapar."
    },
    {
        id: 3,
        company: "KIET Group of Institutions",
        role: "Executive Videographer",
        period: "Feb 2024 - Jul 2025",
        description: "Directed a team of 35+ students on multi-platform video campaigns, boosting client engagement by 30%."
    },
    {
        id: 4,
        company: "Sketch-Light- Art Production",
        role: "Cinematographer",
        period: "Sep 2023 - Jan 2024",
        description: "Captured cinematic wedding and event visuals with professional camera gear, leading to increased studio bookings."
    }
];

export function ExperienceSection() {
    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-neutral-900 text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">WHERE I HAVE WORKED</h2>
                    <div className="w-12 h-1 bg-white/10 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full bg-neutral-900/50 rounded-lg border border-white/5 p-8 hover:border-white/20 transition-all duration-300">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.company}</h3>
                                    <div className="flex flex-col gap-1 text-sm text-neutral-400">
                                        <span className="font-medium text-white/80">{exp.role}</span>
                                        <span className="text-xs uppercase tracking-wider">{exp.period}</span>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
