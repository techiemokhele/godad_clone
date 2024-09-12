import { RiMessage2Line } from 'react-icons/ri'

const ContactUsButtonComponent = () => {
  return (
    <button className="fixed bottom-4 right-4 flex items-center text-white text-sm py-2 px-4 gap-3 rounded-full cursor-pointer z-10 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-colors duration-300">
          <RiMessage2Line /> Contact Us
    </button>
  )
}

export default ContactUsButtonComponent