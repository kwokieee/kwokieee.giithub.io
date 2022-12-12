interface CardProps {
  header: string;
  body: string;
  imagePath?: string;
  imageDescription?: string;
}

function Card({ header, body, imagePath = "", imageDescription = "" }: CardProps) {
  return (
    <div className="bg-gray-200 rounded-md overflow-hidden shadow-lg sm:w-64 md:w-full max-w-4xl cursor-pointer flex flex-col transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-105">
      {imagePath && imageDescription && <img src={imagePath} alt={imageDescription} className="sm:w-64 md:w-full h-96 object-cover bg-white" />}
      <h1 className="text-xl font-bold text-left ml-4 p-2">{header}</h1>
      <p className="text-sm text-left ml-4 px-2 pb-2">{body}</p>
    </div>
  )
}

export default Card