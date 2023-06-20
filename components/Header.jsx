import Image from 'next/image'
import Link from 'next/link'
import { HiOutlinePencilSquare,HiArrowLeftOnRectangle } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="">
            <Image
              src="/images/logo.png"
              width={100}
              height={100}
              alt="Logo"
            />
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="">
           <button className='btn mr-2'>Create Post</button>
           <button className='btn btn-outline'>Login</button>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/logo.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between" href="/profile">
                Profile
                {/* <span className="badge">New</span> */}
              </Link>
            </li>
            <li>
              <a>Logout <HiArrowLeftOnRectangle
                     className='sm:hidden text-[17px]' /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
