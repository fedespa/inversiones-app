import { Investor } from "@/types/investors";
import { toSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function MiniInverterCard(investor: Investor) {
  const {
    name,
    role,
    philosophy,
    famousPhrase,
    imageSrc,
  } = investor;

  return (
    <div className="bg-gray-800 border border-gray-700 p-5 rounded-lg shadow-xl hover:shadow-2xl hover:border-blue-800 dark:hover:border-teal-400 transition-all duration-300 flex flex-col h-full">
      
      <div className="w-full h-72 relative rounded-md overflow-hidden mb-4">
        <Image 
          alt={name} 
          src={imageSrc} 
          fill 
          className="object-center object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 30vw"
        />
      </div>

      <div className="grow space-y-1">
        <h3 className="text-2xl font-bold text-white leading-tight">{name}</h3>
        <p className="text-sm font-semibold text-blue-600 dark:text-teal-400 mb-2">{role}</p>

        <p className="text-sm text-gray-400 line-clamp-2">
            <span className="font-semibold">Enfoque:</span> {philosophy}
        </p>

        <p className="text-base italic text-gray-300 mt-2">
          &quot;{famousPhrase}&quot;
        </p>
      </div>

      <Link 
        href={`/inversores/${toSlug(name)}`} 
        className="block text-center bg-blue-500 hover:bg-blue-600 dark:bg-teal-500 text-gray-900 px-4 py-2 mt-4 rounded-full font-bold text-base dark:hover:bg-teal-400 transition duration-200 uppercase tracking-wider"
      >
        Ver Perfil Completo
      </Link>
      
    </div>
  );
}
