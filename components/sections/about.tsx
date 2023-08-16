import HeadingSection from "../heading-section";
import Image from "next/image";

const About = () => {
    return (
        <section className="pt-[45rem] px-24">
            <div className="flex justify-center items-center p-3 pb-10">
                <HeadingSection title="Who is JKT48?" />
            </div>
            <div className="flex justify-between items-center gap-20 w-full">
                <div className="w-4/6">
                    <p className="text-base font-normal">
                        <b className="text-xl">JKT48 </b> is an Indonesian-Japanese idol girl group whose name is derived from its based city
                        of <b>Jakarta</b> and the Japanese idol group <b>AKB48</b>. Formed in 2011, the group is the first AKB48 sister group
                        outside Japan and adopts the concept of <b>&quot;idols you can meet&quot;</b>, before switching to <b>&quot;idols that will come
                            to meet you&quot;</b> since April 8, 2018. The group opened their own theater on the 4th floor of FX Sudirman shopping mall
                        in early September 2012, where fans can attend daily performances every day except Monday. The theater was built as a
                        close replica to the AKB48 Theater in Akihabara.
                    </p>
                    <p>
                        <br />
                    </p>
                    <p className="text-base font-normal">
                        While JKT48 does not restrict membership by nationality, applicants must be residents of Indonesia. As of 30 July 2023, the group has <b>42</b> individual members.
                    </p>
                    <p>
                        <br />
                    </p>
                    <p className="text-base font-normal">
                        On 16 February 2013, JKT48 released its first studio album <b>Heavy Rotation</b> via Hits Records, a division of MNC subsidiary PT Star Media Nusantara. The group typically performs songs of AKB48 and other sister groups that are translated into Indonesian. The group released their first original single, <b>&quot;Rapsodi&quot;</b>, in January 2020.
                    </p>
                </div>
                <div className="w-2/6 flex flex-col items-center justify-center gap-y-2">
                    <div className="flex justify-center items-center gap-x-3 w-full">
                        <div className="w-1/2 h-[300px] relative">
                            <Image src="/image/section1.jpg" alt="section1" layout='fill' objectFit='cover' className="rounded-lg" />
                        </div>
                        <div className="w-1/2 h-[300px] relative">
                            <Image src="/image/section2.jpg" alt="section2" layout='fill' objectFit='cover' className="rounded-lg" />
                        </div>
                    </div>
                    <div className="w-full h-[200px] relative">
                        <Image src="/image/section5.jpg" alt="section5" layout='fill' objectFit='cover' className="rounded-lg" />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default About;