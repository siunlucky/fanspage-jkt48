import Image from "next/image";
import HeadingSection from "../heading-section";

const Event = () => {
    return (
        <section className="pt-20 px-24">
            <div className="flex justify-center items-center p-3 pb-20">
                <HeadingSection title="Where Has JKT48 Been?" />
            </div>
            <div className="grid grid-cols-4 grid-flow-rows justify-items-center items-center gap-y-14 gap-x-10 w-full">
                <div className="flex flex-col items-center gap-y-3">
                    <div className="relative w-[350px] h-[200px]">
                        <Image src="/image/summertour-bandung.jpeg" layout='fill' objectFit='cover' alt="summertour-bali" className="rounded-lg" />
                    </div>
                    <h1><b>Bandung</b>, 9 July 2023</h1>
                </div>
                <div className="col-span-2 row-span-2 flex flex-col items-center">
                    <h1 className="text-[40px] font-bold">Summer Tour 2023</h1>
                    <div className="w-[400px] h-[400px] relative">
                        <Image src="/image/summertour-logo.png" layout="fill" objectFit="cover" quality={100} alt="summertour-logo" />
                    </div>

                </div>

                <div className="flex flex-col items-center gap-y-3">
                    <div className="relative w-[350px] h-[200px]">
                        <Image src="/image/summertour-jogja.jpeg" layout='fill' objectFit='cover' alt="summertour-bali" className="rounded-lg" />
                    </div>
                    <h1><b>Yogyakarta</b>, 10 July 2023</h1>
                </div>
                <div className="flex flex-col items-center gap-y-3">
                    <div className="relative w-[350px] h-[200px]">
                        <Image src="/image/summertour-semarang.jpeg" layout='fill' objectFit='cover' alt="summertour-bali" className="rounded-lg" />
                    </div>
                    <h1><b>Semarang</b>, 11 July 2023</h1>
                </div>
                <div className="flex flex-col items-center gap-y-3">
                    <div className="relative w-[350px] h-[200px]">
                        <Image src="/image/summertour-batu.jpeg" layout='fill' objectFit='cover' alt="summertour-bali" className="rounded-lg" />
                    </div>
                    <h1><b>Batu</b>, 13 July 2023</h1>
                </div>
                <div className="col-span-2 flex flex-col items-center gap-y-3 ml-24">
                    <div className="relative w-[350px] h-[200px]">
                        <Image src="/image/summertour-solo.jpeg" layout='fill' objectFit='cover' alt="summertour-bali" className="rounded-lg" />
                    </div>
                    <h1><b>Solo</b>, 14 July 2023</h1>
                </div>

                <div className="col-span-2 flex flex-col items-center gap-y-3 mr-24">
                    <div className="relative w-[350px] h-[200px]">
                        <Image src="/image/summertour-surabaya.jpeg" layout='fill' objectFit='cover' alt="summertour-bali" className="rounded-lg" />
                    </div>
                    <h1><b>Surabaya</b>, 15 July 2023</h1>
                </div>

            </div>
        </section>
    );
}

export default Event;