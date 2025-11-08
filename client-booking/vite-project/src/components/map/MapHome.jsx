import { MapContainer, useMap } from 'react-leaflet'
import Layers from './Layers';
import useCampingStore from '@/store/camping-store';

const MyCenter =()=>{
  //zustand
  const center = useCampingStore((state)=>state.center);
  // map fly to center
  const map = useMap(); 
    if (!center) {
      return null;
    }
  map.flyTo(center,10);
    return null;
}
const MapHome = () => {
 //code body
  return <div>
      <MapContainer className='h-[50vh] rounded-md z-0'
        center={[13.736717, 100.523186]} zoom={7} scrollWheelZoom={true}>
        <Layers/>
        <MyCenter/>
      </MapContainer>
  </div>
};
export default MapHome;