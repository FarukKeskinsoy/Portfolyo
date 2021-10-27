import React,{createContext,useContext,useEffect,useState} from 'react'
import firebase from 'firebase';

export const PostContext=createContext();

export const PostContextProvider=({children})=>{

const [posts,setPosts]=useState([])
const [products,setProducts]=useState([])
const [postLoading,setPostLoading]=useState(true)
const [productLoading,setProductLoading]=useState(true)

const GetPosts=()=>{
    useEffect(()=>{
      const posting=firebase.firestore()
      .collection('Posts')
      .onSnapshot((querySnapshot)=>{
         var posts=[];
         querySnapshot.forEach(documentSnapshot=>{
           posts.unshift({
             ...documentSnapshot.data(),
             key:documentSnapshot.id,
           })
   
         })
         setPosts(posts)
         setPostLoading(false);
      })
      return ()=>posting();
    },[])
  }

const GetProducts=()=>{
    useEffect(()=>{
      const product=firebase.firestore()
      .collection('Products')
      .onSnapshot((querySnapshot)=>{
         var products=[];
         querySnapshot.forEach(documentSnapshot=>{
           products.unshift({
             ...documentSnapshot.data(),
             key:documentSnapshot.id,
           })
   
         })
         setProducts(products)
         setProductLoading(false);
      })
      return ()=>product();
    },[])
  }

return(
    <PostContext.Provider
    value={{GetPosts,posts,postLoading,
      GetProducts,productLoading,products
    }}>
        {children}
    </PostContext.Provider>
)


}