export default function Header(){
    return (
        <nav className="navbar">
          <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://placehold.co/50" alt="Logo" className="logo" />
              <span className="logo-text">E-com World</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className='nav'>
              <a href="#" className="nav-link-primary">Home</a>
              <a href="#" className="nav-link">Profile</a>
              <a href="#" className="nav-link">Saved</a>
              <a href="#" className="nav-link">Products</a>
              <a href="#" className="nav-link">Cart</a>
              <a href="#" className="nav-link">Selling</a>
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Contact Us</a></div>
            </div>
          </div>
        </nav>
      );
}