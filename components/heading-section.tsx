
interface HeadingSectionProps {
    title: string;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({
    title
}) => {
    return (
        <h1 className="text-[50px] font-bold">{title}</h1>
    );
}

export default HeadingSection;