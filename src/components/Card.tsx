import Modal from "./Modal";
import { ReactNode, useState } from "react";

interface CardProps {
  header: string;
  body: string;
  imagePath?: string;
  imageDescription?: string;
  onClick?: VoidFunction;
  children: ReactNode;
}

function Card({ header, body, imagePath = "", imageDescription = "", onClick = () => {}, children }: CardProps) {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <div onClick={() => setIsModalShown(true)} className="bg-gray-200 rounded-md overflow-hidden shadow-lg w-56 sm:w-full max-w-3xl h-auto flex flex-col cursor-pointer">
        {imagePath && imageDescription && <img src={imagePath} alt={imageDescription} className="h-auto max-h-96 object-cover bg-white" />}
        <h1 className="text-xl font-bold text-left ml-4 p-2">{header}</h1>
        <p className="text-sm text-left ml-4 px-2 pb-2">{body}</p>
      </div>
      <Modal handleClose={() => setIsModalShown(false)} show={isModalShown}>
        {children}
      </Modal>
    </>
  )
}

export default Card