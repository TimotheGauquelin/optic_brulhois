import Image from "next/image";

const Testimony = ({ name, date, comment, rating, image }: { name: string, date: string, comment: string, rating: number, image: string }) => {
    return (
        <div className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-3">
                <div>
                    <Image src={image} alt="About Us" width={50} height={50} />
                </div>
                <div className="flex flex-col font-roboto">
                    <span className="text-base font-bold">{name}</span>
                    <span>{date}</span>
                </div>
            </div>
            <p>
                {comment}
            </p>
            <div>
                * * * * *
            </div>
        </div>
    )
}

export default Testimony;