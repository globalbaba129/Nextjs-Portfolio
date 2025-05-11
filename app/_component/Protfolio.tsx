import Image from "next/image";
import Image3 from "../assets/images/globaliconic.png";
import Image5 from "../assets/images/press.png";
import Image6 from "../assets/images/abrod.png";
import Link from "next/link";
import image1 from "../assets/images/newdubaibond.png";
import image10 from "../assets/images/parking12.png";
import image2 from "../assets/images/toothcareclinic.png";
import image4 from "../assets/images/skmotordubai.png";
import image7 from "../assets/images/endtakseoimg.png";
import image8 from "../assets/images/builders.png";

import image9 from  '../assets/images/study.png';
const Portfolio1 = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Product 1 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={image1}
              alt="Product 1"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">The Construction Company Website</h3>
            <Link href={'https://www.newdubaibond.com/'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
              Open Website ->
            </Link>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={image2}
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">Dental Clinic Website With Admin-Penal</h3>
            <Link href={'https://toothcareclinic.net/'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Open Website ->
            </Link>
          </div>
        </div>
         {/* Product 3 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={Image3}
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">Software Agency</h3>
            <br />
            <Link href={'https://globaliconic.com'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Open Website ->
            </Link>
          </div>
        </div>
         {/* Product 2 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={image4}
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">Cars Sale & Buy Company</h3>
            <br />
            <Link href={'https://toothcareclinic.net/'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Open Website ->
            </Link>
          </div>
        </div>
         {/* Product 2 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={Image5}
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">Pest Control Services Agency</h3>
            <br />
            <Link href={'https://friendspestsolutions.com/'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Open Website ->
            </Link>
          </div>
        </div>
         {/* Product 2 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={Image6}
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">Friends Immigration Consultants</h3>
            <br />
            <Link href={'https://friends-consultant.com/'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Open Website ->
            </Link>
          </div>
        </div>
         {/* Product 2 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={image7}
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">EndTakSeo is a Software Agency</h3>
            <br />
            <Link href={'https://endtakseo.com/'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Open Website ->
            </Link>
          </div>
        </div>
         {/* Product 8 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={image8}
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">Builders & State Company</h3>
            <br />
            <Link href={'https://apniland.com/'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Open Website ->
            </Link>
          </div>
        </div>

         {/* Product 9 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={image9}
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">Builders & State Company</h3>
            <br />
            <br />
            <Link href={'https://aiec.pk/'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Open Website ->
            </Link>
          </div>
        </div>

         {/* Product 9 */}
        <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden h-56 w-full relative">
            <Image
              src={image10}
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">UK Airport Parking Dynamic Web Design</h3>
            <br />
            <Link href={'https://airportparkinghouse.com/'} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
          Open Website ->
            </Link>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default Portfolio1;
