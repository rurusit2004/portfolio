import type { Metadata } from "next";
import Parcours from "@/components/Parcours";

export const metadata: Metadata = {
  title: "Parcours · Ruben Sitbon",
};

export default function PageParcours() {
  return <Parcours />;
}
