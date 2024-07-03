const Faq = () => {
  return (
    <div className="mt-10">
      <p className=" border border-[#343268] px-5 py-2 rounded-3xl w-fit">Faq</p>
      <p className="text-4xl font-semibold text-[#020043] mt-2">Frequntly Asked Question</p>

      <div className="collapse collapse-arrow bg-[#fffff5] mt-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        What are your office hours?
        </div>
        <div className="collapse-content bg-white">
          <p className="text-sm text-[#343268]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#fffff5] mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How can I schedule an appointment?
        </div>
        <div className="collapse-content bg-white">
          <p className="text-sm text-[#343268]">To schedule an appointment with us, you can easily book online through our website. Alternatively, feel free to give us a call during office hours, and our team will assist you in finding a convenient time. We strive to make the scheduling process as straightforward as possible, ensuring you get the care you need at your preferred time.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#fffff5] mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Do you accept insurance?
        </div>
        <div className="collapse-content bg-white">
          <p className="text-sm text-[#343268]">Yes, we accept a variety of insurance plans. Please contact our office to verify if we accept your specific insurance provider and to discuss any questions you may have regarding coverage.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#fffff5] mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What should I bring to my appointment?
        </div>
        <div className="collapse-content bg-white">
          <p className="text-sm text-[#343268]">When preparing for your appointment, please bring your insurance card, photo ID, any relevant medical records or test results, and a list of current medications you are taking. If you haven't already completed your patient forms online, please bring them with you. Having these items ready ensures that we can provide you with personalized care and address any questions or concerns you may have during your visit. Feel free to contact our office if you have any additional questions about what to bring.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#fffff5] mt-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Do you offer telemedicine appointments?
        </div>
        <div className="collapse-content bg-white">
          <p className="text-sm text-[#343268]">Yes, we offer telemedicine appointments for your convenience. You can schedule a virtual consultation with one of our healthcare providers from the comfort of your home or office. Please contact our office to arrange a telemedicine appointment or to learn more about this option.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
