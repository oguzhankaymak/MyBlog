function HomePage() {
  return (
    <div className="site-container">
      <div className="h-screen space-y-4">
        <div className="flex justify-center">
          <img
            className="rounded-full flex shadow-lg transform hover:scale-125 motion-reduce:transform-none"
            height="110"
            width="110"
            src="/oguzhankaymak.jpg"
            alt="oguzhankaymak"
          />
        </div>
        <h1 className="flex justify-center text-2xl font-bold">
          Merhaba Ben Oğuzhan Kaymak
        </h1>

        <p>
          Yazılım Geliştiricisiyim. Frontend teknolojileriyle ilgilenmekteyim.
          Bulduğum her fırsatta kendimi geliştirmeye çalışıyorum.
        </p>
        <p>
          Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği bölümünde
          öğrenciyim.
        </p>
      </div>
    </div>
  )
}

export default HomePage
