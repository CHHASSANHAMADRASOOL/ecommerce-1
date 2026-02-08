export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/contact-ai.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen w-full bg-black/80 flex items-center justify-center">

        <div className="bg-slate-900/80 border border-pink-500 rounded-2xl p-8 w-[90%] max-w-md text-center">

          <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6">
            Contact Us - SHOW ROOM
          </h1>

          <p className="text-pink-400 text-lg md:text-xl font-semibold mb-3 drop-shadow-lg">
            📞 03146419379
          </p>

          {/* 🔥 LARGE EMAIL */}
          <p className="text-blue-400 text-lg md:text-xl font-semibold mb-3 drop-shadow-lg">
            📧 hassanhamadrasool@gmail.com
          </p>

          {/* 🔥 LARGE LOCATION */}
          <p className="text-green-400 text-lg md:text-xl font-semibold mb-6 drop-shadow-lg">
            📍 Pakistan.
          </p>

          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 rounded bg-black text-white border border-pink-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded bg-black text-white border border-pink-500 outline-none"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full mb-6 p-3 rounded bg-black text-white border border-pink-500 outline-none"
          ></textarea>

          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold text-lg">
            Send
          </button>

        </div>
      </div>
    </div>
  );
}