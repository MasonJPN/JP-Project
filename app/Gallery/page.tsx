import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function Gallery() {
  const result = await cloudinary.search
    .expression("folder:xylon-gallery")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute();

  const images = result.resources;

  return (

<div>
    <div className="bg-[#3E2A1F] py-16 text-center">
        <p className="text-[#C4873A] text-sm font-semibold tracking-widest uppercase mb-3">
          Handcrafted
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#F7F4E9]">
          Gallery
        </h1>
      </div>

    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img:any) => (
          <div
            key={img.public_id}
            className="group overflow-hidden rounded-2xl shadow-md"
          >
            <img
              src={img.secure_url}
              alt=""
              className="w-full h-72 object-cover "
            />
          </div>
        ))}
      </div>
    </div>
</div>
  );
}
