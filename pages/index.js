export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">منصة نيكسوس كريتور</h1>
        <p className="text-lg text-gray-700">أنشئ وشارك أفكارك بسهولة</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">ابدأ الآن</button>
      </header>
      <section className="max-w-3xl mx-auto p-8 grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold mb-2">سهولة الاستخدام</h2>
          <p>واجهات بسيطة تساعدك على بدء مشروعك في دقائق.</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold mb-2">أدوات قوية</h2>
          <p>مجموعة أدوات متقدمة لإنشاء محتوى مميز.</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold mb-2">دعم مستمر</h2>
          <p>فريق دعم جاهز لمساعدتك على مدار الساعة.</p>
        </div>
      </section>
    </div>
  )
}
