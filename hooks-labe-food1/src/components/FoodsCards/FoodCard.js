import React, { useContext, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { DivCard, DivInfo, ButtonFood, ButtonQuantity } from "./StyledFoodCard";
import ModalQuantity from "../modalQuantity/ModalQuantity";

const FoodCard = ({ product }) => {
  const { cart, setCart } =
    useContext(GlobalStateContext);
  const [open, setOpen] = useState(false);
  // const [q, setQ] = useState("")

  const [productQuantity, setProductQuantity] = useState(0)

  // const handleChange = (event) => {
  //     setProductQuantity(Number(event.target.value));
  // };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const checkCart = cart?.products?.find((item) => {
    if (item.id === product?.id) {
      // setProductQuantity(item.quantity)
      return item.quantity
    }
  })

  console.log('product',productQuantity)
  
  const addProduct = () => {
    // console.log(`id: ${product?.id} e quantity: ${productQuantity}`)
    const newCart = { ...cart };
    const newProducts = {
      id: product?.id,
      quantity: productQuantity,
    };
    newCart.products.push(newProducts);
    setCart(newCart);
    console.log(cart);
    console.log('check',checkCart)
    handleClose();
    // setProductQuantity("");
  };

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
          <ButtonFood onClick={handleOpen} color="#e86e5a">
            Remover
          </ButtonFood>
          <ButtonQuantity color="#e86e5a">{productQuantity}</ButtonQuantity>
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
