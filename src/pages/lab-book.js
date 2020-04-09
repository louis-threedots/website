import React from "react"
import ImageGallery from "react-image-gallery"
import SEO from "../components/seo"
import "./lab-book.css"

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
]

const LabBook = () => (
  <>
    <SEO title="Lab Book" />
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
            Lab Book
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            A look at the iterative development.
          </h3>
        </div>
      </div>
    </div>

    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Iteration 1
              </p>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                Heading
              </h3>
              <div className="mt-4 text-base text-gray-900">
              The two disks initially had whole sections raised. The pins laying on the raised parts were pushed up, forming the braille characters. During this iteration, the prototype LEGO hardware was built, capable of outputting a single braille character. With the help of a LEGO EV3 Large Servo Motor that was controlled by a LEGO EV3 brick, we managed to control the six pins configuration to display all letters of braille in the alphabet. The firmware for the LEGO prototype was developed, calibrating the motors, mapping braille characters to motor states, and carrying out low-level motor commands.
              </div>
              <br />
              <ImageGallery items={images} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Iteration 2
              </p>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                Heading
              </h3>
              <div className="mt-4 text-base text-gray-900">
              In this second iteration of louis, we reduced the size of the disks by more than half of what it was before. The big disk has now double encoding, meaning that all combinations could now be achieved by rotating the disk by 180 degrees. Furthermore, the raised parts are not whole segments, but only a ring on the disk. The only changes made to the small disk however, was the reduced size. It was during this iteration that we succeeded in demonstrating modularity using a Raspberry Pi and Arduino boards, created the first version of our tutor application to teach users braille and implemented voice integration.
              </div>
              <br />
              <ImageGallery items={images} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Iteration 3
              </p>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                Heading
              </h3>
              <div className="mt-4 text-base text-gray-900">
              We performed User Research and received evaluation on our existing device. This feedback was the driving force behind the changes made during this iteration. In order to use jumbo braille as we were advised, we needed to reduce the size of the disks even further. This proved problematic when using pins, thus we redesigned the disks in three main ways:
                  <br/> > Replaced the pins with tactical bumps<br/>
                  > The small disk can fit inside the big disk<br/>
                  > The big disk has now triple encoding and the small disk double<br/><br/>
              The new disks can be miniaturised further by simply reducing everything by the factor needed. This new design required us to switch to LEGO EV3 Large Servo Motor in order to make the size of the cells smaller and use gears to transform vertical to horizontal rotation. Furthermore, we created our own custom-made PCB boards, which replaced the Arduino boards used before. Finally, we developed several new applications for the platform, as well as making the voice integration as trivial and easy to use as possible.
              </div>
              <br />
              <ImageGallery items={images} />
            </div>
          </div>
        </div>
      </div>
    </div>


  </>
)

export default LabBook
