
export default async function Page({ params }: { params: { id: string } }) {

    const id = (await params)?.id as string;

    return (
        <div
            className="h-64 aspect-square shadow-xl border rounded-md text-3xl font-bold flex justify-center items-center text-black"
        >
            {id}
        </div>
    )
}
