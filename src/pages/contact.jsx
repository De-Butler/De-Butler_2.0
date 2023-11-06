export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = encodeURIComponent(form['first-name'].value);
    const lastName = encodeURIComponent(form['last-name'].value);
    const email = encodeURIComponent(form.mail.value);
    const phone = encodeURIComponent(form.phone.value);
    const questionType = encodeURIComponent(form['question-type'].value);
    const message = encodeURIComponent(form.message.value);

    const mailtoLink = `mailto:debutler2023@gmail.com?subject=${questionType}%20Question&body=First Name: ${firstName}%0ALast Name: ${lastName}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-neutral-950 h-screen ">
      <div className="flex flex-col items-center justify-center">
        <h className="text-4xl text-white font-semibold mt-20 ">Contact Us</h>
        <p className="text-white text-sm sm:text-base">
          Any qusetion or remakrs? Just write us a message!
        </p>
        <div className="bg-white p-8 rounded-lg w-[300px] sm:w-1/3 sm:min-h-[600px] mt-4">
          <form
            onSubmit={handleSubmit}
            action="mailto:debutler2023@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div className="flex justify-between mb-4">
              <div className="flex flex-col gap-2">
                <span className="font-semibold">First Name</span>
                <input
                  type="text"
                  name="first-name"
                  className="w-[100px] sm:w-[180px] border-b-2 border-black focus:outline-none overflow-scroll"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold">Last Name</span>
                <input
                  type="text"
                  name="last-name"
                  className="w-[100px] sm:w-[180px] border-b-2 border-black focus:outline-none overflow-scroll"
                />
              </div>
            </div>

            <div className="flex justify-between mt-14">
              <div className="flex flex-col gap-2">
                <span className="font-semibold">Mail</span>
                <input
                  type="email"
                  name="mail"
                  className="w-[100px] sm:w-[180px] border-b-2 border-black focus:outline-none overflow-scroll"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold">Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  className="w-[100px] sm:w-[180px] border-b-2 border-black focus:outline-none overflow-scroll"
                />
              </div>
            </div>

            <p className="mb-2 mt-14 font-bold">Choose your question type</p>
            <div className="w-full h-full flex flex-wrap justify-between space-x-4 mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="question-type"
                  value="Partnership"
                  className=""
                />
                <span className="ml-2 ">Partnership</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="question-type" value="General" />
                <span className="ml-2">General</span>
              </label>

              <label className="flex items-center px-10 sm:px-0 mb-4 mt-4 sm:mb-0 sm:mt-0">
                <input type="radio" name="question-type" value="Cooperation" />
                <span className="ml-2">Cooperation</span>
              </label>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 mb-4 border border-black rounded-md focus:outline-none resize-none"
              style={{ height: '188px', resize: 'none' }}
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
