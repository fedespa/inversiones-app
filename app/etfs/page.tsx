import Etfs from "@/components/etfs/Etfs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Invertí en ETFs',
  description: 'Invertí en ETFs',
}

export default async function EtfsPage() {
  return (
    <main className="flex justify-center">
      <Etfs />
    </main>
  );
}
