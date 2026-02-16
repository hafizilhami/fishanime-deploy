import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";

const Page = async () => {

  const respon = await fetch("https://api.jikan.moe/v4/top/anime?limit=8")

  const topAnime = await respon.json()

  return (
    <div>
      {/*Anime Terpopuler*/}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
        <AnimeList api={topAnime}/>
      </section>

      {/*Anime Terbaru*/}
      <section>
        <Header title="Anime Terbaru" linkTitle="Lihat Semua" linkHref="/new"/>
        <AnimeList api={topAnime}/>
      </section>
    </div>

  )
}

export default Page;