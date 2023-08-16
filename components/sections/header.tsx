import Image from "next/image";

const Header = () => {
    return (
        <section className="w-full">
            <Image src="/image/main.jpg" alt="main" layout='fill' objectFit='cover' className="brightness-50 relative" priority={true} />
            <div className={` text-white flex flex-col justify-center md:items-center gap-y-1 top-1/2 left-10 md:left-1/2 absolute md:-translate-x-2/4 -translate-y-2/4`}>
                <h1 className="md:text-[64px] font-bold text-left md:text-center text-[50px]">Fanspage JKT48</h1>
                <h1 className="text-2xl font-medium text-left md:text-center">Faiz Elfahad Kurniawan</h1>
                <h1 className="text-base font-normal text-left md:text-center">This is just a fanspage of a JKT48</h1>
            </div>
        </section>
    );
}

export default Header;