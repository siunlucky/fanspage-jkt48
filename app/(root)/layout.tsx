import Navbar from "@/components/navbar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-[3000px]">
            <Navbar />
            <main className="h-full">
                {children}
            </main>
        </div>
    );
}

export default RootLayout;