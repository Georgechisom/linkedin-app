import { profileData } from "./Profile";


function Post() {
    return (
        <div className="border px-4 py-3 bg-white text-left rounded-lg">
            <div className="flex flex-row items-start text-left gap-x-3">
                <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" 
                    alt='my image' 
                    width={"48px"} 
                    height={"48px"}
                    style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
                />
                <div className="leading-normal text-xs">
                    <div className="text-base font-semibold">{profileData.name}</div>
                    <div>{profileData.bio}</div>
                    <div>{profileData.date}</div>
                </div>
            </div>

            {/* post text */}
            <div className="text-sm py-4 leading-normal">
            Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt

            <br /> <br />

                webpack compiled with 2 warnings
            </div>
            <div className="flex flex-row justify-center">
               <img src="./images/we2.jpeg" 
                    alt='my image' 
                    width={48} 
                    height={"100%"}
                    style={{ width: "100%", background: "navajowhite", borderRadius: "10px", border: "2px solid white", objectFit: "contain" }}
                />
            </div>
        </div>
    )
}

export default Post;