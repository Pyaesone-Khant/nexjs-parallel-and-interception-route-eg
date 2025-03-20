import Link from "next/link";

export default function PhotosPage() {
    return (
        <section
            className="grid grid-cols-5 gap-5 p-10 bg-amber-50 place-content-center"
        >
            {
                Array(10).fill(null).map((_, i) => (
                    <Link
                        key={i}
                        href={`/photos/${i + 1}`}
                        className="w-full"
                    >
                        <div
                            key={i}
                            className="w-full aspect-square shadow-xl border rounded-md text-3xl font-bold flex justify-center items-center text-black"
                        >
                            {i + 1}
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}
