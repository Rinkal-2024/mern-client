import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from '../assets/profile.jpg'
const SideBar = () => {

  return (
    <Sidebar aria-label="Sidebar with content separator example" className="mt-5">
    <Sidebar.Items>
   
      <Sidebar.ItemGroup>
      <Sidebar.Logo href="#" img={userImg} imgAlt="" >
      <p> GoodReaders</p>
    </Sidebar.Logo>   
        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
          <p>Dashboard</p> 
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          <p>Upload Book</p>
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          <p>Manage Books</p>
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiUser}>
          <p>Users</p>
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiShoppingBag}>
          <p>Products</p>
        </Sidebar.Item>
        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
          <p>Log In </p>
        </Sidebar.Item>
        <Sidebar.Item href="/logout" icon={HiTable}>
          <p>Log Out</p>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          Upgrade to Pro
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiViewBoards}>
          Documentation
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={BiBuoy}>
          Help
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default SideBar
