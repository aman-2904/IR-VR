import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider font-space-grotesk">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option,index) =>(
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === 'Pro' && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-500 tracking-tight">/month</span>
              </p>
              <ul>
                {option.features.map((feature, index )=>(
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-green-500"/>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className=" flex justify-center items-center px-8 py-2 mt-20 border border-orange-400 rounded-full hover:bg-gradient-to-r from-orange-500 to-orange-800 font-space-grotesk">
                Subscribe
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Pricing