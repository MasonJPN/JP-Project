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
        <h1 className="text-4xl md:text-5xl font-semibold text-[#F7F4E9] font-(family-name:--font-playfair)">
          Gallery
        </h1>
      </div>

    <div className="max-w-6xl mx-auto px-6 py-16">
      
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img: any) => (
             <div
                 key={img.public_id}
                 className="break-inside-avoid overflow-hidden rounded-2xl shadow-md"
                 >
               <img
              src={img.secure_url}
              alt=""
             className="w-full h-auto object-cover"
               />
             </div>
        ))}
      </div>
    </div>
</div>
  );
}
