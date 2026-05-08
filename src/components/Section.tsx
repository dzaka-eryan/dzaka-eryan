import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  label?: string;
}

export default function Section({ id, children, className = '', label }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      {label && (
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          {label}
        </motion.span>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
