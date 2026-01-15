const KeyNumber = ({ number, description }: { number: string, description: string }) => {
    return (
        <div className="col-span-2 bg-background-secondary p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2">{number}</h3>
            <p className="text-lg">{description}</p>
        </div>
    );
}

export default KeyNumber;