import { use, useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";  
import "../App.css";
import React from "react";
import { Button } from "../components/Button.tsx";
import { PlusIcon } from "../components/Icons/PlusIcon.tsx";
import { ShareIcon } from "../components/Icons/ShareIcon.tsx";
import { Card } from "../components/Card.tsx";
import { CreateContentModal } from "../components/ContentModal.tsx";
import { ShareContentModel } from "../components/ShareModel.tsx";
import { Sidebar } from "../components/SideBar.tsx";
import { useContent } from "../hooks/useContent.tsx";
import { Tweet } from "react-tweet";
import axios from "axios";
import { DeleteBrainModel } from "../components/DeleteContentModel.tsx";
import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "../components/Icons/DeleteIcon.tsx";

export function Dashboard() {
  const [shouldRefresh, setShouldRefresh] = useState(true);
  console.log("Dashboard is rendered");
  const navigate = useNavigate();
  const [deleteBrainModal, setDeleteBrainModal] = useState(false); 

  const [modalOpen, setModalOpen] = useState(false); 
  const [sharemodalOpen, setShareBrainModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
// const {refresh} = useContent(); 
const { contents, refresh, setContents } = useContent();

useEffect(() => { 
  refresh();
  setIsDelete(false);
}, [modalOpen, isDelete])

            

console.log("Below is the contents printed");
console.log(contents);      

  return (
    <>  
      <div>
        <Sidebar />
        <div className="p-4 ml-72 min-h-screen bg-gray-100 border-green-500">
          <CreateContentModal                    
            setContents = {setContents}
            open={modalOpen}
            onclose={() => {
              setModalOpen(false);
              setShouldRefresh(false);
              // just re-render all the components here, so that the new tweet comes nicely in the first try only
              console.log("Button clicked");
            }}  
          ></CreateContentModal>

          <ShareContentModel
            shareUrl={shareUrl}
            open={sharemodalOpen}
            onclose={() => {
              setShareBrainModalOpen(false);

            }}
          />

          <div className="flex justify-end gap-4">
            <Button
              size="lg"
              variant="primary"
              text="Sign out"
              onClick={() => {
                axios
                  .post(
                    "http://localhost:3000/api/v1/signout",
                    {
                      signout: true,
                    },
                    {          
                      headers: {
                        Authorization: localStorage.getItem("token"),
                      },
                    }
                  )
                  .then((response) => {
                    localStorage.removeItem("token");
                    console.log("successfully done loging out!");
                    navigate("/signin");
                  });
              }}
            ></Button>

            <Button
              onClick={() => {
                setModalOpen(true);
              }}
              size="lg"
              variant="primary"
              text="Add content"
              startIcon={<PlusIcon></PlusIcon>}
            ></Button>

            <Button
              onClick={async () => {   
                setShareBrainModalOpen(true);
                //  onclose()
                const response = await axios.post(
                  "http://localhost:3000/api/v1/brain/share",
                  {
                    share: true,
                    userId: "ObjectId('67cc525aaa297042d30644eb')",
                  },
                  {    
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                if (response.data) { 
                  const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                  setShareUrl(shareUrl);
                  console.log("Below is the shareurl");
                  console.log(shareUrl);
                  // alert(`your share url is ${shareUrl}`);
                } else {
                  alert("Response is empty");
                } 
              }}
              size="lg"
              variant="secondary"
              text="Share Brain"
              startIcon={<ShareIcon size="md"></ShareIcon>}
            ></Button>
          </div>
          <div className="flex p-2 gap-4 flex-wrap display-flex">
            <div className="gap-4 flex flex-wrap">
              {
                <div>
                  {Array.isArray(contents) ? (
                    contents.map(({ id, type, link, title }) => (
                      <Card 
                        shouldRefresh = {shouldRefresh}
                        setShouldRefresh = {setShouldRefresh}
                        id={id}
                        deleteBrainModal={deleteBrainModal}
                        setDeleteBrainModal={setDeleteBrainModal}
                        setContents={setContents}
                        contents={contents}  
                        title={title}
                        link={link}
                        type={type}   
                        setIsDelete = {setIsDelete} 
                      /> 
                    ))
                  ) : (
                    <p>Loading or no content available.</p>
                  )}
                </div>

                // printing the contents here if it is tweet
              }
            </div>

            {/* <Card title = "Arvind sir" link = "https://youtu.be/LwzGyFM28SI?si=4DM7pu8k2DHKuWta" type = "youtube"/>
              <Card title = "Arvind sir TEDx talk" link = "https://youtu.be/MD4W_e3dJPs?si=f3QF3G9cvb48TDNK" type = "youtube"/> */}
          </div>
        </div>
      </div>
    </>
  );
}     

export default Dashboard;
