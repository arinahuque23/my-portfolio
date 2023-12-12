/* eslint-disable react/no-unknown-property */
const Contact = () => {
  return (
    <div className="mt-10">
            <h2 className="text-4xl text-center mb-5 text-blue-400 font-bold">For Contact Me</h2>
             <hr className="lg:w-80 md:mx-[80vh] border  border-gray-400 mb-7 lg:mx-[60vh]" />
      <div className="lg:flex">
        <div className="max-w-md border  mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute
         after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <h2 className="text-2xl text-sky-900 font-bold mb-6">
            Contact Me
          </h2>

          <form method="post" action="#">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" for="name">
                Full Name
              </label>
              <input className="mt-1 p-2 w-full border rounded-md" type="text" />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                for="email"
              >
                Email Address
              </label>
              <input
                className="mt-1 p-2 w-full border rounded-md"
                name="email"
                id="email"
                type="email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600" for="bio">
                Massage
              </label>
              <textarea
                className="mt-1 p-2 w-full border rounded-md"
                rows="3"
                name="bio"
                id="bio"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type=""
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="mt-[20vh] mr-10">
           <h2 className="text-3xl font-sans">Contact Details</h2>
           <h2 className="text-xl font-serif"> Location : Barishal Sadar, Barishal-8200, Bangladesh </h2>
           <h2>  Email Me 📧 : arinahuqe23@gmail.com</h2>
           <h2>Contact No : +888013072629**</h2>

        </div>
      </div>
    </div>
  );
};

export default Contact;
