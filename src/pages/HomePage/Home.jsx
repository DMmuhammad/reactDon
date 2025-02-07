function HomePage() {
  return (
    <div className="flex items-center flex-col mt-16 text-center container mx-auto">
      <h1 className="text-3xl text-sky-600 font-bold mb-20">
        REACT PROJECT <br />
        NPM ROUTES
      </h1>
      <p className="text-xl text-sky-600font-bold">
        <a href="#" className="text-sky-600 text-4xl block mb-4 uppercase font-bold">
          Попробовать React
        </a>
        <br />
        React разработан с самого начала для постепенного внедрения, так что вы можете использовать React понемногу или столько, сколько необходимо.
        Хотите ли вы получить представление об React, добавить интерактивность к простой HTML-странице или начать разработку сложного приложения,
        работающего на React, ссылки в этом разделе помогут вам начать работу.
      </p>
    </div>
  );
}

export default HomePage;
