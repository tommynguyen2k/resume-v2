'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  side?: 'left' | 'right';
  className?: string;
}

export function Drawer({
  open,
  onOpenChange,
  children,
  side = 'left',
  className,
}: DrawerProps) {
  const isLeft = side === 'left';
  const xInitial = isLeft ? '-100%' : '100%';
  const xExit = isLeft ? '-100%' : '100%';

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => onOpenChange(false)}
            aria-hidden
          />
          <motion.aside
            key="drawer-panel"
            initial={{ x: xInitial }}
            animate={{ x: 0 }}
            exit={{ x: xExit }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              'fixed inset-y-0 z-50 flex flex-col bg-background border-r shadow-lg',
              isLeft ? 'left-0 border-r' : 'right-0 border-l',
              className
            )}
          >
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
