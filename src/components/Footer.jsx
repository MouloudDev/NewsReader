import { Link } from "react-router-dom"
import FacebookIcon from "../Icons/facebook"
import TwitterXIcon from "../Icons/twitterX"
import InstagramIcon from "../Icons/instagram"
import YoutubeIcon from "../Icons/youtube"

export default function Footer() {
  const quickLinks = [
    "Home", "About us",
    "contact", "Privacy policy",
    "terms of service"
  ]
  const socials = [
    FacebookIcon,
    TwitterXIcon,
    InstagramIcon,
    YoutubeIcon
  ]

  return (
    <div className="w-full bg-[#373245] px-2 py-5 text-white mt-5">
      <div className="flex flex-col justify-between mx-auto mt-5 w-full max-w-screen-xl">
        <div className="grid gap-2 grid-col-2 border-b border-b-gray-400 pb-7 sm:grid-cols-4 ">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold text-left mb-1">About NewsWave</h2>
            <p className="text-sm font-normal text-left max-w-96">
              NewsWave is your trusted source for up-to-date news and information. We strive to deliver accurate, unbiased reporting on global events.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-left mb-1">Quick Links</h2>
            <ul className="text-left">
              {quickLinks.map(name => {
                return (
                  <li key={name}>
                    <Link
                      to={`/${name}`}
                      className="text-sm hover:underline transition-all duration-200"
                    >
                      {name.charAt(0).toUpperCase()}{name.slice(1)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-left mb-1">Follow Us</h2>
            <div className="flex justify-start gap-2">
              {socials.map((Social, idx) => <Link to="#" key={idx}> <Social /> </Link>)}
            </div>
          </div>
        </div>
        <p className="text-[12px] font-thin mt-5">© 2024 NewsReader. All rights reserved.</p>
      </div>
    </div>
  )
}
