export const goToHome = (navigate) => {
  navigate ("/");
}
export const goToLogin = (navigate) => {
  navigate ("/login");
}
export const goToFeed = (navigate) => {
  navigate ("/feed");
}
export const goToSignUp = (navigate) => {
  navigate ("/cadastro");
}
export const goToRegisterAdressPage = (navigate) => {
  navigate ("/registrar-endereco");
}
export const goToPerfil = (navigate) => {
  navigate ("/perfil");
}
export const goToEditProfile = (navigate) => {
  navigate ("/perfil/editar-perfil");
}
export const goToEditAdress = (navigate) => {
  navigate ("/perfil/editar-endereco");
}
export const goToRestaurant = (navigate, restaurantId) => {
  navigate (`/restaurant/${restaurantId}`);
}
export const goToSearch = (navigate) => {
  navigate ("/busca");
}
export const goToCart = (navigate) => {
  navigate ("/carrinho");
}