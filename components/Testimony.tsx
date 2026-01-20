import formatRelativeDate from "@/app/utils/date/calendarDateToDateAgo";
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
                    <span>{formatRelativeDate(date)}</span>
                </div>
            </div>
            <p>
                {comment}
            </p>
            <div className="flex items-center gap-1">
                {Array.from({ length: rating }).map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#F8AF0D"><path d="M0 0h24v24H0z" fill="none" /><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
            </div>
        </div>
    )
}

export default Testimony;