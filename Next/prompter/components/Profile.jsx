import PromptCard from "./PromptCard"

const Profile = ({ name, image, desc, data, handleEditClick, handleDeleteClick }) =>
{
  return (
    <div className="w-full">
      <h1 className="head_text text-center">
        <span className="blue_gradient text-center mr-4">
          {name}
        </span>
        Profile
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {
          data?.map((prompt, index) => (
            <PromptCard
              key={index}
              data={prompt}
              handleEditClick={() => handleEditClick(prompt)}  // Pass as a callback
              handleDeleteClick={() => handleDeleteClick(prompt)}  // Pass as a callback
            />
          ))
        }
      </div>
    </div>
  )
}

export default Profile
