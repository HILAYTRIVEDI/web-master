import Link from "next/link"

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) =>
{
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left capitalize">
        <span className="blue_gradient text-center">
          {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world and let your imagination run wild!
      </p>

      <form action="#" method="POST"
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-satoshi text-gray-700">
            Your AI prompt
          </span>
          <textarea
            name="prompt"
            rows="5"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="form_textarea"
            placeholder="Type your prompt here..."
            required
          />
        </label>
        <label htmlFor="">
          <span className="font-satoshi text-gray-700">
            Tag 
            <span className="font-normal">
              &nbsp; (#product ,#new, #top,#trending)
            </span>
          </span>
          <input
            name="prompt"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className="form_input"
            placeholder="#tag"
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link
            href={'/'}
            className="text-gray-500 text-sm"
          >
            Cancle
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {
              submitting ? `${type}...` : type
            }
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form