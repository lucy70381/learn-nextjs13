import Image from "next/image";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <div>Entire Photo Page</div>
      <div>id {id}</div>
      <Image
        className="mx-auto"
        src="https://picsum.photos/200/300"
        width={100}
        height={150}
        alt={id}
      />
    </>
  );
}
