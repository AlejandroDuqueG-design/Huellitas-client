import { Link } from "react-router"

function MainNavBar() {
  return (


    <div>
      <nav>
        <div className="nav-links">
          <Link to="/"><button>Home</button></Link>
          <Link to="/dog"><button>Nuestros Peludos </button></Link>
          <Link to="/adopt"><button> Adoptar </button></Link>
          <Link to="/profile"><button> Perfil </button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
          
        </div>
      </nav>
    </div>

    
  )
}
export default MainNavBar