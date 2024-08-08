import React from "react";

const GlobalContext = React.createContext(undefined);
const dishes = [
  {
    title: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    price: 12.99,
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    rating: 4.5,
  },
  {
    title: "Margherita Pizza",
    description:
      "Traditional pizza with tomato, mozzarella, fresh basil, salt, and extra-virgin olive oil.",
    price: 10.99,
    image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
    rating: 4.7,
  },
  {
    title: "Caesar Salad",
    description:
      "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
    price: 8.99,
    image: "https://cookieandkate.com/images/2021/05/caesar-salad-in-bowl.jpg",
    rating: 4.2,
  },
  {
    title: "Grilled Salmon",
    description:
      "Grilled salmon fillet served with a side of vegetables and lemon butter sauce.",
    price: 18.99,
    image: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    rating: 4.8,
  },
  {
    title: "Chicken Tikka Masala",
    description:
      "Tender chicken pieces in a creamy tomato sauce, served with basmati rice.",
    price: 14.99,
    image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    rating: 4.6,
  },
  {
    title: "Vegetable Stir Fry",
    description:
      "A mix of fresh vegetables stir-fried with soy sauce and served with rice.",
    price: 11.99,
    image: "https://www.themealdb.com/images/media/meals/wqurxy1511453156.jpg",
    rating: 4.3,
  },
  {
    title: "Beef Tacos",
    description:
      "Soft tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
    price: 9.99,
    image:
      "https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg",
    rating: 4.4,
  },
  {
    title: "Lobster Bisque",
    description:
      "Creamy lobster soup with a touch of sherry and garnished with fresh herbs.",
    price: 15.99,
    image: "https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg",
    rating: 4.9,
  },
  {
    title: "Eggplant Parmesan",
    description:
      "Breaded and baked eggplant slices topped with marinara sauce and melted cheese.",
    price: 13.99,
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    rating: 4.5,
  },
  {
    title: "Chocolate Lava Cake",
    description:
      "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
    price: 6.99,
    image: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    rating: 4.8,
  },
];
const users = [
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Great service!",
    username: "userA1",
    rating: 5,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Very satisfied with the product.",
    username: "userB2",
    rating: 3,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Excellent quality!",
    username: "userC3",
    rating: 4,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Will buy again!",
    username: "userD4",
    rating: 5,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Highly recommend this.",
    username: "userE5",
    rating: 2,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Not as expected.",
    username: "userF6",
    rating: 1,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Good value for money.",
    username: "userG7",
    rating: 4,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Fast shipping.",
    username: "userH8",
    rating: 5,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Decent quality.",
    username: "userI9",
    rating: 3,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Amazing product!",
    username: "userJ10",
    rating: 5,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Not worth the price.",
    username: "userK11",
    rating: 2,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Loved it!",
    username: "userL12",
    rating: 5,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Just okay.",
    username: "userM13",
    rating: 3,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Great experience.",
    username: "userN14",
    rating: 4,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Would buy again.",
    username: "userO15",
    rating: 5,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Quality could be better.",
    username: "userP16",
    rating: 2,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Exceeded expectations.",
    username: "userQ17",
    rating: 5,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Quite satisfactory.",
    username: "userR18",
    rating: 4,
  },
  {
    profileImage:
      "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=",
    comment: "Not happy with it.",
    username: "userS19",
    rating: 1,
  },
];
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  const colorOne = theme === "light" ? "white" : "black";
  const colorTwo = theme === "light" ? "black" : "white";
  React.useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "white" : "#1b1b1b";
    document.body.style.color = theme === "light" ? "#1b1b1b" : "white";
  }, [theme]);
  return (
    <GlobalContext.Provider
      value={{ theme, changeTheme, colorOne, colorTwo, dishes, users }}
    >
      {children}
    </GlobalContext.Provider>
  );
  // functions
  function changeTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
};

export { GlobalContext, ContextProvider };
