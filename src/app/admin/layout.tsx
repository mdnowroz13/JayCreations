import AdminSidebar from "@/components/admin/AdminSidebar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 flex">
            <AdminSidebar />
            <main className="flex-1 md:ml-64 p-4 md:p-8 pt-20 md:pt-8">
                {children}
            </main>
        </div>
    )
}
