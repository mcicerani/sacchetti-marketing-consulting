import React from 'react';

export function SkeletonCard({ className = '' }) {
  return <div className={`animate-pulse bg-gray-200 rounded-xl ${className}`} />;
}

export function SkeletonCircle({ className = '' }) {
  return <div className={`animate-pulse bg-gray-200 rounded-full ${className}`} />;
}

export function SkeletonText({ className = '' }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />;
}

export function SkeletonCards({ count = 6, cols = 'grid md:grid-cols-2 lg:grid-cols-3', cardHeight = 'h-48' }) {
  return (
    <div className={`${cols} gap-6 mt-5 lg:mt-10`}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} className={cardHeight} />
      ))}
    </div>
  );
}
