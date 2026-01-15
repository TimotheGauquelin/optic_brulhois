export default function ServiceCard({
    icon,
    title,
    description,
    url } : {
        icon: string,
        title: string,
        description: string,
        url: string
    }) {
    return (
        <div
            className="bg-white border-4 border-secondary space-y-[20px] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
        >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="opacity-80">{description}</p>
            <a href={url} className="text-secondary underline block">En savoir plus</a>
        </div>
    );
}