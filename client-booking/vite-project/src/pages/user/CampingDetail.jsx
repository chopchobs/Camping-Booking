import { readCamping } from "@/api/camping";
import BookingContainer from "@/components/booking/BookingContainer";
import Breadcrumbs from "@/components/campings/Breadcrumbs";
import Description from "@/components/campings/Description";
import ImageContainer from "@/components/campings/ImageContainer";
import MainMap from "@/components/map/MainMap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CampingDetail = () => {
    const [camping, setCamping] = useState(null);
    const { id } = useParams();
    // console.log("CampingDetail id:", id);
    useEffect(() => {
        fetchCampingDetail(id);
    },[]);

    const fetchCampingDetail = async(id) => {
      try {
        const res = await readCamping(id);
        setCamping(res.data.result);    
      } catch (error) {
        console.error("Error fetching camping detail:", error);
        
      }
    };
    // console.log('camping:', camping); 
  return (
    <div>
        {/* Breadcrumb */}
        <Breadcrumbs name={camping?.title} />

        {/* Header */}
        <header className="flex justify-between items-center mt-4 mb-2">
            <h1 className="text-xl font-bold">{camping?.title}</h1>
            <div className="flex gap-4">
                <p>Share</p>
                <p>Favorite</p>
            </div>
        </header>

        {/* Image */}
        <ImageContainer 
            image={camping?.secure_url} 
            name={camping?.name} />

        {/* Description & Map */}
        <section className="lg:grid lg:grid-cols-2 lg:gap-8 mt-8">
          <div className="mt-4 gap-8"> 
              <Description text={camping?.description} name={camping?.title} />
              {/* Map && Location มีของมาจาก useEffect หลังบ้าน */}
              {camping && <MainMap location={[camping.lat, camping.lng]} />} 
          </div>
          <div className="mt-8">
              <h2 className="text-lg font-bold">Available Dates</h2>
              {/* Calendar component goes here */}
              <div>
                <p>Calendar Placeholder</p>
                <BookingContainer 
                  campingId={camping?.id}
                  price={camping?.price}
                  booking={[]}
                />
              </div>
          </div>
        </section>

          
    </div>
  )
}   
export default CampingDetail;