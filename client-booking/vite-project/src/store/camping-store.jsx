import { addOrRemoveFavorite, filterCamping, listCamping, listFavorites,  } from '@/api/camping';
import { create } from 'zustand'

const CampingStore = (set,get) => ({
    campings: [],
    favorites:[],
    center: null,
     //  listCamping - set campings, set center
    actionListCamping: async(id) => {
        try {
            const res = await listCamping( id ); // API call
            set({ //update
                campings: res.data.result,
                center: res.data.center 
            }); 
            // console.log('Zustand:',res.data.result)
        } catch (error) {
            console.error(" Error fetching data:", error);
        }
    },
    // addOrRemoveFavorite - set campings, set favorites
    actionAddorRemoveFavorite: async (data,token)=>{
        try {
            const res = await addOrRemoveFavorite (data,token)
            const { campingId , isFavorite } = data;
            const camping = get().campings;
            // Update Camping
                const updatedCamping = camping.map((item)=>{ // Map เอาถึงหมด
                    return item.id === campingId
                    ? { ...item,isFavorite : !isFavorite }
                    : item;
                })
            set({ campings: updatedCamping });
            // Update Favorites
                const Favorites = get().favorites;
                const updatedFavorites =Favorites.filter((item)=>{ //  filter เลือกว่าไม่เอาอะไร
                    return item.landmark.id !==campingId;
                })
            set({favorites:updatedFavorites })
            const err = res.data.message;
             return { success: true, message: err };
        } catch (error) {
            const err = error?.response?.data?.message;
             return { success: false, message: err };
        }
    },
    // listFavorite - set favorites
    actionListFavorite: async (token)=>{    
        try {
            //code
            const res = await listFavorites(token);
            //  set({ favorites: res.data.result });
            // console.log(res.data.result)
            set({favorites:res.data.result})//update
        } catch (error) {
            console.log(error)
        }
    },
    // filterCamping - set campings
    actionFilter: async (category='',search='')=>{
        try {
            const res = await filterCamping(category,search)
            // console.log('This is Zustand: ',res.data.center)
            set({ //update
                campings:res.data.result,
                center:res.data.center
            }); 
        } catch (error) {
            console.log(error)
        }
    }
});
const useCampingStore = create( CampingStore );
// export
export default useCampingStore;