export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/about-ai.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/75 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-8">
            ABOUT US BY SHOW ROOM
          </h1>

          <p className="text-pink-300 mb-6 text-lg md:text-xl font-medium drop-shadow-lg">
            🤖 This showroom represents excellence, luxury, and trust in the automotive world. Designed with a modern and elegant layout, it offers a premium environment where customers can explore high-quality vehicles with complete confidence. The space is bright, well-organized, and professionally maintained, creating a truly VIP experience for every visitor.
          </p>

          <p className="text-blue-400 mb-6 text-xl md:text-2xl font-semibold drop-shadow-lg">
            ⚡ A wide range of latest-model cars is displayed with attention to detail, allowing customers to view, compare, and select vehicles comfortably. The showroom reflects advanced standards, combining stylish architecture with a customer-focused atmosphere. Every vehicle is presented in perfect condition, highlighting performance, innovation, and class.
          </p>

          <p className="text-green-400 mb-6 text-xl md:text-2xl font-semibold drop-shadow-lg">
            💎 The staff is highly professional, knowledgeable, and customer-oriented, ensuring transparent guidance and personalized service. From first-time buyers to experienced car enthusiasts, everyone receives respectful and premium-level support. This showroom is not just a place to buy cars; it is a symbol of quality, reliability, and modern automotive lifestyle.
          </p>

          <p className="text-purple-400 text-xl md:text-2xl font-semibold drop-shadow-lg">
            🚀 Overall, this VIP car showroom sets a new benchmark for luxury, professionalism, and customer satisfaction in the automotive industry.
          </p>

        </div>
      </div>
    </div>
  );
}