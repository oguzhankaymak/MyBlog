import Link from 'next/link'
import SocialMediaFooter from '../components/socialMediaFooter/socialMediaFooter'

function HomePage() {
  return (
    <div className="site-container">
      <div className="space-y-6">
        <div className="flex justify-center">
          <img
            className="rounded-full flex shadow-lg transform hover:scale-125 motion-reduce:transform-none"
            height="110"
            width="110"
            src="/oguzhankaymak.jpg"
            alt="oguzhankaymak"
          />
        </div>
        <h1 className="flex justify-center text-3xl font-bold">
          Merhaba Ben Oğuzhan Kaymak
        </h1>

        <p className="text-lg">
          Yazılım geliştiricisiyim. Mobil uygulama geliştirme teknolojileriyle
          ilgilenmekteyim. Bulduğum her fırsatta kendimi geliştirmeye
          çalışıyorum.
        </p>
        <p className="text-lg">
          Bu süreçte hem öğrendiklerimi pekiştirmek için hem de birilerine
          yardımı dokunabilir umuduyla blog yazıları yazmaya çalışıyorum.
        </p>
        <p className="text-lg">
          Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği bölümünde
          öğrenciyim. İkinci sekmede yer alan etkinlikler kısmında üniversite
          boyunca katıldığım veya görev aldığım etkinlikleri paylaştım
          dilerseniz inceleyebilirsiniz.
        </p>
      </div>
      <div className="flex justify-center flex-row space-x-10 mt-20">
        <SocialMediaFooter />
      </div>
    </div>
  )
}

export default HomePage
