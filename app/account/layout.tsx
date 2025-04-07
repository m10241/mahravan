export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header>Account</header>
            <div>{children}</div>
        </>
    )
}
