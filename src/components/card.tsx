import React from 'react'

export const Card: React.FC<{
    className?: string;
    children?: React.ReactNode;
}> = ({
    className,
    children,
}) => (
    <div className={`rounded-2xl bg-[#252525] text-white p-4 ${className ?? ''}`}>
        {children}
    </div>
)
