import useCampingStore from "@/store/camping-store";
import { LayersControl,TileLayer, Marker, Popup, LayerGroup, Tooltip } from "react-leaflet"

const Layers = () => {
  // Zustand
   const campings= useCampingStore((state)=>state.campings);
  return (
    <LayersControl>
        {/* Base Layers */}
        <LayersControl.BaseLayer name="OSM" checked>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </LayersControl.BaseLayer>
        {/* Esri */}
        <LayersControl.BaseLayer name="Esri" >
            <TileLayer
             attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
             url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
            />
        </LayersControl.BaseLayer>

    {/* Overlay Layers */}
        <LayersControl.Overlay name="Landmark" checked>
         <LayerGroup>
         {/* Markers - Zustand */}
            { campings.map((item)=>{
             return ( 
             <Marker key={ item.id } position={[ item.lat,item.lng ]}>
               {/* title,img */}
                <Popup>
                  <div>
                    <p className="text-x1 font-semibold text-center">{ item.title } </p>
                    <img className="max-w-[200px] rounded-x1 " src={ item.secure_url } />
                  </div>
                </Popup>
               {/* Tooltip */}
                <Tooltip>{ item.title }</Tooltip>
             </Marker>
             );
            })}
         </LayerGroup>
        </LayersControl.Overlay>

    </LayersControl>
  );
}
export default Layers;