
export default function Layout(
    {
        children,
        team,
        analytics
    }: {
        children: React.ReactNode;
        team: React.ReactNode;
        analytics: React.ReactNode;
    }
) {
    return (
        <>
            <section
                className="grid grid-cols-3 gap-10"
            >
                {children}
                {team}
                {analytics}
            </section>
        </>
    )
}
