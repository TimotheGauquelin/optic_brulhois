'use client';

export default function ServiceCard({
    icon,
    title,
    short_description,
    url,
}: {
    icon: string,
    title: string,
    short_description: string,
    url: string,
}) {
    return (
        <div
            className="w-full bg-white border-4 border-secondary space-y-[12px] p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
        >
            <div className="text-4xl mb-4 flex justify-center items-center">
                {icon.startsWith('<svg') ? (
                    <div dangerouslySetInnerHTML={{ __html: icon }} className="w-12 h-12 text-secondary" />
                ) : (
                    icon
                )}
            </div>
            <h3 className="text-xl leading-none font-bold mb-2">{title}</h3>
            <p className="opacity-90">{short_description}</p>
            <a href={url} className="text-secondary underline block">En savoir plus</a>
        </div>
    );
}