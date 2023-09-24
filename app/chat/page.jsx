"use client";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faPaperPlane,
  faPaperclip
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <div>
        <div className="w-full flex justify-start gap-6 p-1 items-center ">
            <Image
            src="/icon.png"
            alt="anu"
            width={50}
            height={50}
            style={{borderRadius: '50%',border: '1px solid #ccc'}}
             />
          <div className="font-bold p-1 mt-1">name</div>
        </div>
        <div className="message-output">
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "gray",
            }}
          >
            start messaging
          </div>
          <div
                className="msg" >
                <Image
                  src="/icon.png"
                  alt="anu"
                  width= {30}
                  height={30}
                  style={{
                    
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                />
                <div className="message">
                  <div className="message-text">hello</div>
                </div>
                <div className="message-time">11/12/23</div>
              </div>
              <div
                className=
                 "msg-user" 
                
              >
                <Image
                  src="/icon.png"
                  alt="anu"
                  width= {30}
                  height={30}
                  style={{
                    
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                />
                <div className="message-user">
                  <div className="message-text">hii i have a query</div>
                </div>
                <div className="message-time">11/12/23</div>
              </div>
            </div>
            <form>
            <div className="w-full container  grid grid-cols-12 justify-center items-center sm:grid-cols-6">
           
                <div className="col-span-8 sm:col-span-4" >
                    <input type="text" placeholder="Type a message" className="w-full border-2 border-gray-300 p-2 rounded-lg outline-none focus:border-blue-400"/>
                </div>
               
                <div className="col-span-2 mx-1 flex gap-3 sm:gap-1">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"><FontAwesomeIcon icon={faPaperclip}/> </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"><FontAwesomeIcon icon={faPaperPlane} /></button>
                    
                </div>
            </div>
            </form>
    </div>
     
   
  )
}

export default page
