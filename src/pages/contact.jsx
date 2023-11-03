export default function Contact() {
  return (
    <div className="bg-neutral-950 h-screen ">
      <div className="flex flex-col items-center justify-center">
        <h className="text-4xl text-white font-semibold mt-20 ">Contact Us</h>
        <p className="text-white">
          Any qusetion or remakrs? Just write us a message!
        </p>
        <div className="bg-white p-8 rounded-lg w-1/3 h-[600px] mt-4">
          <form
            action="mailto:someone@example.com"
            method="post"
            enctype="text/plain"
          >
            <div className="flex justify-between mb-4">
                
             <div className="flex flex-col gap-2">
                <span className="font-semibold">First Name</span>
                 <input
                   type="text"
                   name="first-name"
                   className="border-b-2 border-black focus:outline-none"
                 />
             </div>
             <div className="flex flex-col gap-2">
             <span className="font-semibold">Last Name</span>
                <input
                  type="text"
                  name="last-name"
                  className="border-b-2 border-black focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-between mt-14">
              <div className="flex flex-col gap-2">
              <span className="font-semibold">Mail</span>
                <input
                  type="email"
                  name="mail"
                  className="border-b-2 border-black focus:outline-none"
                />
              </div>
             <div className="flex flex-col gap-2">
                 <span className="font-semibold">Phone Number</span>
                 <input
                   type="tel"
                   name="phone"
                   className="border-b-2 border-black focus:outline-none"
                 />
             </div>
            </div>

            <p className="mb-2 mt-14 font-bold">Choose your question type</p>
            <div className="flex space-x-4 mb-4">
              <label className="flex items-center">
              <input type="radio" name="question-type" value="Partnership" className="" />
                <span className="ml-2 ">Partnership</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question-type" value="General" />
                <span className="ml-2">General</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question-type" value="Cooperation" />
                <span className="ml-2">Cooperation</span>
              </label>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 mb-4 border border-black rounded-md focus:outline-none resize-none"
              rows="6"
            ></textarea>

            <button
              type="submit"
              className="w-full p-2 border text-white bg-black rounded-md hover:bg-gray-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
