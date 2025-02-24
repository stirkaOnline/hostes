import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { LeftDashboard } from '../../components/left-dashboard'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
    title: 'Единицы измерения',
    description: 'Единицы измерения',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <div className="flex">
            <LeftDashboard />
            <main className="flex-1">{children}</main>
        </div>
        </body>
        </html>
    )
}

