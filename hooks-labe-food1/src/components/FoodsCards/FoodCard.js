import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { DivCard, DivInfo, ButtonFood, ButtonQuantity } from "./StyledFoodCard";
import ModalQuantity from "../modalQuantity/ModalQuantity";
import { CardText } from "../activeOrder/StyledActiveOrder";

const FoodCard = ({ product, restaurantId }) => {
  const { cart, setCart, clearCart, restaurantCartId, setRestaurantCartId } = useContext(GlobalStateContext);
  const [open, setOpen] = useState(false);
  const [checkCart, setCheckCart] = useState(
    cart?.products?.find((item) => {
      if (item.id === product?.id) {
        return item.quantity
      }
    })
  )

  const [productQuantity, setProductQuantity] = useState(0)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setCheckCart(checking())
    // console.log(`checkcart ${product?.name}`, checkCart)
  }, [cart])

  const checking = () => {
    const checkCart = cart?.products?.find((item) => {
      if (item.id === product?.id) {
        return true
      }
    })
    return checkCart
  }

  const addProduct = () => {
    console.log(
      'length:', cart.products.length,
      '\nid Restaurante Carrinho:', restaurantCartId,
      '\nid Restaurande Produto Atual:', restaurantId
    )
    if ( cart.products.length === 0 || (cart.products.length !== 0 && restaurantCartId === restaurantId) ) {
      const newCart = { ...cart };
      const newProducts = {
        id: product?.id,
        quantity: productQuantity,
      };
      newCart.products.push(newProducts);
      setCart(newCart);
      handleClose();
      setRestaurantCartId(restaurantId)
    }
    else {
      if (window.confirm("Carrinho já contem produto, deseja esvaziar e adicionar novo produto?") === true) {
        clearCart()
        alert("Carrinho vazio! Adicione novos produtos!")
        handleClose();
        // console.log('carrinho ESVAZIADOOOO', cart.products, 'e restaurantCartId', restaurantCartId)
      } else {
        alert("Produtos mantidos no carrinho!")
        handleClose();
        // console.log('carrinho MANTIDOOOO', cart.products, 'e restaurantCartId', restaurantCartId)
      }
    }


  };

  const removeProduct = () => {
    const checkProductInCart = cart?.products?.findIndex((item) => {
      if (item.id === product?.id) {
        return true
      }
    })
    const newCart = { ...cart };
    newCart.products.splice(checkProductInCart, 1)
    setCart(newCart)
    !cart.products.length && setRestaurantCartId('')
  }

  // const setCartInLocalStorage = (cartData) => {
  //   localStorage.setItem("cart", cartData)
  //   console.log('carrinho',cartData)
  // };

  return (
    <DivCard>
      <img src={product?.photoUrl} alt={`Imagem de ${product?.name}`} />
      <DivInfo>
        <h2>{product?.name}</h2>
        <h4>{product?.description}</h4>
        <h1>R${product?.price},00</h1>
      </DivInfo>
      {open && (
        <ModalQuantity
          open={open}
          handleClose={handleClose}
          onClick={addProduct}
          id={product?.id}
          value={productQuantity}
          onChange={setProductQuantity}
        />
      )}
      {checkCart ? (
        <>
          <ButtonFood onClick={removeProduct} color="#e86e5a">
            Remover
          </ButtonFood>
          <ButtonQuantity color="#e86e5a">{checkCart.quantity}</ButtonQuantity>
        </>
      ) : (
        <ButtonFood onClick={handleOpen} color="black">
          Adicionar
        </ButtonFood>
      )}
    </DivCard>
  );
};

export default FoodCard;
