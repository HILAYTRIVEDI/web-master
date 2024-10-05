import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) =>
{
    return (
        <div
            className="mt-16 prompt_layout"
        >

            {
                data?.map((prompt, index) =>
                {
                    return (
                        <PromptCard
                            key={index}
                            data={prompt}
                            handleTagClick={handleTagClick}
                        />
                    )
                })
            }

        </div>
    )
}

export default PromptCardList