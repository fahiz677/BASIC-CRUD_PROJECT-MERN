import React,{useState ,useEffect} from "react";
import "./Header.css";
import useStyles from "../Header/styles";
import {  Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link , useLocation , useNavigate} from 'react-router-dom';
import { useDispatch } from'react-redux';
import { logout , reset } from  "../../features/auth/authSlice"
import { toast } from 'react-toastify'
import decode from 'jwt-decode'


const Header = () => {
   // const cartList = useSelector((state) => state.products.products);

   // const totalCartCount = cartList.reduce((acc, value) => (acc += value.count), 0);
const totalCartCount = 0;


 
const [user, setUser] = useState(JSON?.parse(localStorage?.getItem('user')));
const Location = useLocation();
const navigate = useNavigate();
const dispatch = useDispatch();
const classes = useStyles();

useEffect(() => {
  const token = user?.token;

  if (token) {
    const decodedToken = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }
 
  setUser(JSON?.parse(localStorage?.getItem('user')) );

}, [Location]);


const onlogout = () => {
  dispatch(logout());
  
  dispatch(reset())

  setUser(null);
  toast.error("User LogOut")
  navigate('/')

};

   return (
      <header>
         <div className="container">
            <Link to={'/'} style={{textDecoration:"none",color:"#fff"}}>
              <h1>E-Shop</h1>
            </Link>

            <div className="right-section">
               <div className="cart-count-header">{totalCartCount}</div>
               <svg width="32" height="32" viewBox="0 0 16 16" cursor="pointer">
                  <path
                     d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                     fill="#fff"
                  ></path>
               </svg>
            </div>

            <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.picture}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={onlogout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>

      <Button component={Link} to="/admin" variant="contained" color="primary">Admin Side</Button>
         </div>
      </header>
   );
};

export default Header;
