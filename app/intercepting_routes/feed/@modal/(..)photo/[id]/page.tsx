import Image from "next/image";
import Modal from "@/components/modal";

export default function Page({ params: { id } }: { params: { id: string } }) {
  // try to rename (..)photo to (..)(..)photo and see what happens
  return (
    <Modal>
      <>
        <div>Photo Modal</div>
        <div>{`feed/(..)photo/[id]/page.tsx`}</div>
        <div>id {id}</div>
        <Image
          className="mx-auto"
          src="https://picsum.photos/200/300"
          width={100}
          height={150}
          alt={id}
        />
        <div className="text-red-500">
          Try to reload this page or copy and paste the url in a new tab.
        </div>
      </>
    </Modal>
  );
}
