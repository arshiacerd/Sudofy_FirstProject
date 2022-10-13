const getEmail = (e) => {
    localStorage.setItem("email", e.target.value);
  
};
const getPassword = (e) => {
  console.log(e.target.value);
  localStorage.setItem("pass", e.target.value);
};
const signIn = () => {
  var getEmail = localStorage.getItem("email");
  var getPass = localStorage.getItem("pass");
  if(getEmail==="ars@gmail.com" && getPass==="123")
  {
    
  }
};
