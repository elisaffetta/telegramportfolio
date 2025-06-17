"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface FloatingElementsProps {
  className?: string;
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
}

interface Element {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  rotate: number;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  className,
  count = 15,
  colors = ['#007AFF', '#5AC8FA', '#FF9500', '#34C759'],
  minSize = 10,
  maxSize = 50,
  minDuration = 15,
  maxDuration = 30,
}) => {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const generatedElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      duration: minDuration + Math.random() * (maxDuration - minDuration),
      delay: Math.random() * -20,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: Math.random() * 360,
    }));
    setElements(generatedElements);
  }, [count, colors, minSize, maxSize, minDuration, maxDuration]);

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            rotate: [element.rotate, element.rotate + 180, element.rotate + 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
