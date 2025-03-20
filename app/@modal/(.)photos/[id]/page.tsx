import Modal from "./modal";

export default async function Page({ params }: { params: { id: string } }) {

    const id = (await params)?.id as string;

    return (
        <Modal>
            <div
                className="h-64 aspect-video bg-blue-500 shadow-xl border rounded-md text-3xl font-bold flex justify-center items-center text-black"
            >
                {id}
            </div>
        </Modal>
    )
}
