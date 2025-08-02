import { resourcesLinks, platformLinks, communityLinks } from "../constants"
function Footer() {
  return (
    <footer className=" mt-20 border-t py-10 border-neutral-700">
        <div className="flex justify-between gap-4 px-14">
            {/*grid grid-cols-2 lg:grid-cols-3*/}
            <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link,index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Platform</h3>
                <ul className="space-y-2">
                    {platformLinks.map((link,index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((link,index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </footer>
  )
}

export default Footer