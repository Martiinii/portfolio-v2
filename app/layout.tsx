import { cn } from '@/lib/utils'
import './globals.css'
import { Inter, } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Martin | Frontend web developer',
    description: 'Martin is mainly a front-end developer who likes to overcome challenges',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='dark'>
            <body className={cn(inter.className, 'bg-slate-950')}>{children}</body>
        </html>
    )
}