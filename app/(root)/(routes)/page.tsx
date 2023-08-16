import Header from "@/components/sections/header";
import About from "@/components/sections/about";
import Event from "@/components/sections/event";
import SocialMedia from "@/components/sections/social-media";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-20">
            <Header />
            <About />
            <Event />
            <SocialMedia />
        </div>
    )
}
