"use client";
import { useParams } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail"; // Komponen kamu yang sudah dibuat

export default function DetailProductPage() {
  const { id } = useParams();

  return <ProductDetail id={id} />;
}
