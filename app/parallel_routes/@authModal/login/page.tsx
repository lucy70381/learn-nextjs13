"use client";
import Modal from "@/components/modal";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  // use router.back() or Link to dimiss the modal
  return (
    <Modal>
      <div>Login Modal</div>
      <button onClick={router.back}>Close Modal</button>
    </Modal>
  );
}
