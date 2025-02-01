import './globals.css'
import { Inter } from 'next/font/google'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Sidebar } from '@/components/Sidebar'
import { SidebarToggle } from '@/components/SidebarToggle'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Documentation Starter',
  description: 'A starter template for creating documentation sites with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <header className="flex items-center p-4 border-b">
                <SidebarToggle />
                <h1 className="text-xl font-bold ml-4">
                  Documentation Starter
                </h1>
              </header>
              <main className="flex-1 p-6 overflow-hidden w-screen">
                <div className="max-w-full sm:max-w-3xl space-y-6 px-4 sm:px-6">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

