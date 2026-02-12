import { terorist } from "../../data/terrorists_data";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="allimnputs">
        <label htmlFor="Search By Name">
          <input type="text" placeholder="Search By Name" />
          <input type="submit" value="Submit" />
        </label>
        <label htmlFor="Search By Attacks">
          <input type="number" placeholder="Search By Attacks" />
        </label>
        <label htmlFor="">
          <button>get all terorist </button>
        </label>
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default Navbar;
