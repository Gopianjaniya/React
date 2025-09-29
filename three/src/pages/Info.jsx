import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Info() {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <aside className="w-60 h-auto bg-gradient-to-l from-slate-800 to-violet-900">
          <ul className="pt-8 p-3 flex flex-col gap-5">
            <li className="p-1 text-xl pl-6 rounded-2xl font-bold text-white hover:bg-black  transition duration-400 ease-in-out ">
              <Link to={"/info"}>Profile</Link>
            </li>
            <li className="p-1 text-xl pl-6 rounded-2xl font-bold text-white hover:bg-black  transition duration-400 ease-in-out">
              <Link to={"/info/contact"}>Contact</Link>
            </li>
            <li className="p-1 text-xl pl-6 rounded-2xl font-bold text-white hover:bg-black  transition duration-400 ease-in-out">
              <Link to={"products"}>Products</Link>
            </li>
            <li className="p-1 text-xl pl-6 rounded-2xl font-bold text-white hover:bg-black  transition duration-400 ease-in-out">
              <Link to={"carts"}>Carts</Link>
            </li>
            
          </ul>
        </aside>
        <Outlet />
      </div>
    </div>
  );
}

export default Info;