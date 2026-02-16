import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword);

  const respon = await fetch(
  `https://api.jikan.moe/v4/anime?q=${decodedKeyword}`,
  { cache: "no-store" }
);

  const searchAnime = await respon.json();

  if(!searchAnime || !searchAnime.data || searchAnime.data.length ===0){
    notFound();
  }

  return (
    <section>
      <Header
        title={`Hasil Pencarian untuk ${decodedKeyword}`}
        linkTitle="Lihat Semua"
        linkHref="/populer"
      />
      <AnimeList api={searchAnime} />
    </section>
  );
}
