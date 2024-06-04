import * as actionType from "../actions/ActionType";
const init = {
  products:[],
  productsByCategore:[
    {
        id: 1,
        name: 'Electronics',
        products: [
            {
                id: 1,
                slug:1,
                imageSrc: 'https://placehold.co/300x300',
                productName: 'SAMSUNG GALAXY S23 ULTRA',
                description: 'Learn about hosting built for scale and reliability',
                price: 1040
            },
            {
                id: 2,
                slug:2,
                imageSrc: 'https://placehold.co/300x300',
                productName: 'SAMSUNG GALAXY S23 ULTRA',
                description: 'Learn about hosting built for scale and reliability',
                price: 1040
            },
            {
                id: 3,
                slug:3,
                imageSrc: 'https://placehold.co/300x300',
                productName: 'SAMSUNG GALAXY S23 ULTRA',
                description: 'Learn about hosting built for scale and reliability',
                price: 1040
            },
            {
              id: 3,
              slug:3,
              imageSrc: 'https://placehold.co/300x300',
              productName: 'SAMSUNG GALAXY S23 ULTRA',
              description: 'Learn about hosting built for scale and reliability',
              price: 1040
          },
          {
            id: 3,
            slug:3,
            imageSrc: 'https://placehold.co/300x300',
            productName: 'SAMSUNG GALAXY S23 ULTRA',
            description: 'Learn about hosting built for scale and reliability',
            price: 1040
        },
        ]
    },
    {
        id: 2,
        name: 'Clothing',
        products: [
            {
                id: 4,
                slug:4,
                imageSrc: 'https://placehold.co/300x300',
                productName: 'T-shirt',
                description: 'Learn about hosting built for scale and reliability',
                price: 25
            },
            {
                id: 5,
                slug:5,
                imageSrc: 'https://placehold.co/300x300',
                productName: 'T-shirt',
                description: 'Learn about hosting built for scale and reliability',
                price: 25
            },
            {
                id: 6,
                slug:6,
                imageSrc: 'https://placehold.co/300x300',
                productName: 'T-shirt',
                description: 'Learn about hosting built for scale and reliability',
                price: 25
            },
        ]
    }
   
],
  categories:null,
   
  };
  const filterDataByCat=(products_p,categories)=>{
    
const productsByCategore=categories?.map((categore)=>{
  const filterProducts=products_p?.filter((product)=> categore.id===product.id_categore)
  return {id:categore.id,name:categore.name,products:filterProducts}
})
return productsByCategore
  }
const ReducerData = (state = init, action) => {
    switch (action.type) {
      case actionType.DATA :
// productsByCategore:filterDataByCat(state.products,state.categories)
        return{...state,products:action.payload,} 
      default:
        return state;
    }
  };
  export default ReducerData;