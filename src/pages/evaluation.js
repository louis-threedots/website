import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const TableBrailleOutput = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-indigo-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Test
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-indigo-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Alphabet String
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-indigo-100 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Errors
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  1
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  cntbrkyhwloevzgspafmdjuiqx
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  2
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  czwortdegjxqnmypfhvilsbuka
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  3
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  nwoyivqskjdhmlczpufxgrbeta
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  4
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  fbdmuistacywrlknzhqvxgeopj
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  5
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  lazgcdjokmwnufeprtivqhsybx
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const TableCatchSpacing = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider w-1/7">
                  Catch Spacing
                </th>
                <th colSpan="2" className="lg:text-center px-6 py-3 border-b border-gray-200 bg-gray-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider w-2/7">
                  90°
                </th>
                <th colSpan="2" className="lg:text-center px-6 py-3 border-b border-gray-200 bg-gray-700 text-right text-xs leading-4 font-medium text-white uppercase tracking-wider w-2/7">
                  120°
                </th>
                <th colSpan="2" className="lg:text-center px-6 py-3 border-b border-gray-200 bg-gray-700 text-right text-xs leading-4 font-medium text-white uppercase tracking-wider w-2/7">
                  180°
                </th>
              </tr>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider w-1/7">
                  Test
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider w-1/7">
                  Average (°)
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-700 text-right text-xs leading-4 font-medium text-white uppercase tracking-wider w-1/7">
                  Time (s)
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider w-1/7">
                  Average (°)
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider w-1/7">
                  Time (s)
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-700 text-right text-xs leading-4 font-medium text-white uppercase tracking-wider w-1/7">
                  Average (°)
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-700 text-right text-xs leading-4 font-medium text-white uppercase tracking-wider w-1/7">
                  Time (s)
                </th>
              </tr>
            </thead>
            <tbody> 
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  1
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3994.037
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5031
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4079.551
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5074
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4146.914
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5341
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  2
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3968.457
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5146
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4072.168
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5121
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4137.051
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5379
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  3
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3975.298
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5033
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4076.869
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5115
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4133.797
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5393
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  4
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3974.185
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5079
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4093.050
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5378
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4148.411
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5696
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  5
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3975.256
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5141
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4066.755
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5220
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4146.529
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5420
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  6
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3969.950
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5162
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4081.114
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5158
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4155.582
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5432
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  7
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3958.991
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5321
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4073.897
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5101
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4160.323
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5454
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  8
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3989.999
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5072
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4079.251
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5105
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4137.470
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5532
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  9
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3983.616
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5214
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4093.560
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5278
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4155.187
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5609
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  10
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  3954.705
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5015
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4075.397
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5204
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  4157.241
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                  0.5511
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50 border-t-2 border-gray-900">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  Total Average
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  3974.449
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0.5121
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  4079.161
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0.5175
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  4147.851
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0.5477
                </td>
              </tr>
              <tr className="bg-white even:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  Average per Character
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  152.863
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0.000020
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  156.891
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0.000020
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  159.533
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-900 numeric-tabular-nums">
                  0.000021
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const RNIB = () => {
  const user_research = [
    <p>Existing refreshable braille devices are very expensive to purchase and thus not easily accessible. Furthermore, current devices can be easily damaged (e.g. when dropped or stood on) and although people could work around a broken cell, they eventually have to send them away to be repaired, which is annoying and very expensive. Our modular design gets rid of this problem. With <span className='font-louis'>louis</span> you have the ability to use as many cells needed and to remove and add them instantly. This limits repairs to modules instead of the whole device and  along with the low cost of the cells themselves, makes <span className='font-louis'>louis</span> very affordable.</p>,

    <p>Voice integration can be very helpful, especially for tutoring apps. It should be as simple as possible and not frustrating to use. We added voice integration to our system and made it intuitive enough to use by anyone. Our voice commands are based on words that people would normally use to perform certain tasks, like: ‘open’ an app, ‘options’ to get a list of the possible voice commands, etc.</p>,

    <p>Jumbo braille is ideal for learning. Smaller sizes are used once someone is a more advanced user of braille. This is due to the fact that people might not be sensitive enough to feel six or eight pins on just the tip of one finger. We have taken this into account when redesigning the disk and pin sizes.</p>,

    <p>There are not many technological tools available to help people learn braille. Braille is also not something one can attempt on their own without help. We designed our product to be especially accessible to beginners, both with regards to the size and the variety of simple applications that make learning braille easier than ever before.</p>,

    <p>Due to the size of the cells, it might be difficult to find exactly the position of the pins. Hence, we used a guiding rail which would lead the user’s finger onto the pins.</p>,
  ]

  const user_questions = [
    "Whether it met their previous requirements and expectations",
    "Whether it was easy to use",
    "Whether it was ergonomic",
    "What they believe could be improved",
  ]

  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-indigo-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                User Research Evaluation
              </p>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                RNIB Research
              </h3>
            </div>
            <div className="mt-4 text-base text-gray-900">
              In order to make the user experience as good as possible and meet customer expectations, we performed user research. After being granted ethical approval from the School of Informatics we arranged a group interview with six visually impaired people through the <strong>Royal National Institute of Blind People</strong> Lothian. The RNIB is a UK charity offering information, support and advice to almost two million people in the UK with sight loss. All of the participants agreed that knowing braille has been a huge help in their daily lives with one of them stating, "[I] use [braille] for everything; I couldn't do without my dots". Out of the six, only five could read braille. All five of them used the basic grade 1 braille daily for a variety of tasks: finding out the name of medicine they're about to take, labeling objects and clothes, or writing down phone numbers. From the User Research we incorporated the following five points in our design:
              <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                {user_research.map((point, i) => (
                  <li
                    className="mt-5 first:mt-0 lg:mt-0 flex items-start lg:col-span-1"
                    key={'ur_' + i}
                  >
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-sm leading-5 text-gray-700">
                      {point}
                    </div>
                  </li>
                ))}
              </ul>
              <br />
              We had already arranged for a second meeting, in order to receive feedback on whether we had indeed incorporated all the requirements in our design, so that our device was easy to use and usable. The meeting was to take place before the start of the fourth and final iteration. This would have given us the opportunity to fix any mistakes in both the hardware and software design. The users were to run <span className="font-louis">louis</span> and report on the following:
              <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                {user_questions.map(question => (
                  <li
                    className="mt-5 first:mt-0 lg:mt-0 flex items-start lg:col-span-1"
                    key={question}
                  >
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-black-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          fill="#5850ec" d="M6.88,11.059 L6.88,13 L9.231,13 L9.231,11.059 Z M8,16 C3.582,16 0,12.418
                          0,8 C0,3.582 3.582,0 8,0 C12.418,0 16,3.582 16,8 C16,12.418 12.418,16 8,16
                          Z M5.57,3.51 C4.586,4.043 4.063,4.948 4,6.224 L6.28,6.224 C6.28,5.852
                          6.408,5.494 6.663,5.149 C6.918,4.804 7.35,4.632 7.961,4.632 C8.581,4.632
                          9.009,4.772 9.243,5.052 C9.477,5.332 9.594,5.642 9.594,5.982 C9.594,6.277
                          9.488,6.548 9.278,6.794 L8.821,7.191 L8.245,7.574 C7.677,7.95 7.324,8.282
                          7.187,8.571 C7.051,8.86 6.966,9.382 6.935,10.139 L9.065,10.139 C9.07,9.781
                          9.105,9.517 9.168,9.347 C9.268,9.078 9.47,8.843 9.775,8.641 L10.335,8.272
                          C10.903,7.896 11.287,7.587 11.487,7.345 C11.829,6.947 12,6.456 12,5.874
                          C12,4.925 11.607,4.209 10.821,3.725 C10.034,3.242 9.047,3 7.858,3 C6.953,3
                          6.191,3.17 5.57,3.51 Z M5.57,3.513"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700">
                      {question}
                    </p>
                  </li>
                ))}
              </ul>
              <br />
              Unfortunately this meeting  was not possible due to the current situation with COVID-19. Instead, each member of our team individually tested the software using our interactive demo.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const OutputAccuracy = () => {
  const accuracy_problems = [
    <div>
      The motors were overshooting the rotation, as depicted in Figure 1:
      <div className="grid gap-4 my-4 grid-cols-1 md:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
          <div className="flex-1">
            <img
              src="https://drive.google.com/uc?export=download&id=1C-w1nR33E_AC_5ypH40uN_QbnywvoAAr"
              alt="Graph showing a slowly flattening oscillation"
              className="object-scale-down object-center w-full h-full"
            />
          </div>
          <div className="border-t border-gray-200 px-4 py-4 sm:px-6 flex-shrink bg-white lg:text-center">
            <i>Figure 1:</i> Iteration 1
          </div>
        </div>
      </div>
      Our second iteration fixed this:
      <div className="grid gap-4 my-4 grid-cols-1 md:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
          <div className="flex-1">
            <img
              src="https://drive.google.com/uc?export=download&id=1HbWfgB91WkvgtkK3-qxQR0qyHcaXus23"
              alt="Graph showing a slowly flattening curve"
              className="object-scale-down object-center w-full h-full"
            />
          </div>
          <div className="border-t border-gray-200 px-4 py-4 sm:px-6 flex-shrink bg-white lg:text-center">
            <i>Figure 2:</i> Iteration 2
          </div>
        </div>
      </div>
    </div>,

    <div>
      However, Figure 2 still exhibits long settling time, which, in turn, compromised the accuracy of the motor because the motor would get stuck trying to settle from a small displacement angle.
      <br /><br />
      The movement of the motor was tuned to optimality using a proportional-integral-derivative (PID) controller. The goal of tuning the PID control for the motors was to maximize accuracy while also maximizing the speed of the motor and achieving repeatability for other motors.
      <br /><br />
      The final result is depicted in Figure 3:
      <div className="grid gap-4 my-4 grid-cols-1 md:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
          <div className="flex-1">
            <img
              src="https://drive.google.com/uc?export=download&id=1ur_PKm3qIJa6KV-Uyhey88Mhk9BDPPGS"
              alt="Graph showing a quickly flattening curve"
              className="object-scale-down object-center w-full h-full"
            />
          </div>
          <div className="border-t border-gray-200 px-4 py-4 sm:px-6 flex-shrink bg-white lg:text-center">
            <i>Figure 3:</i> Iteration 3
          </div>
        </div>
      </div>
      A diagram of all iterations together, to show our progress, can be found in Figure 4:
      <div className="grid gap-4 my-4 grid-cols-1 md:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
          <div className="flex-1">
            <img
              src="https://drive.google.com/uc?export=download&id=1ffNCzu0beUS9xOYGrTKNSV4yZm5E4xLg"
              alt="Graph showing the previous three graphs together"
              className="object-scale-down object-center w-full h-full"
            />
          </div>
          <div className="border-t border-gray-200 px-4 py-4 sm:px-6 flex-shrink bg-white lg:text-center">
            <i>Figure 4:</i> Motor control using PID control technique
          </div>
        </div>
      </div>
    </div>,

    <div>
      Next rotations were sometimes set in motion before the motor was in the correct position. All cells are now checked for their position and only when they have arrived at their destination is the next rotation started.
    </div>,

    <div>
      The motor rotates in one direction to set the big disk in the correct position, and then moves in the opposite direction to set the small disk. When setting the big disk, we noticed it would be slightly thrown forward when the rotation finished. We experimentally found the right amount of friction - enough to prevent the throwing, but avoiding the big disk from being moved by the small disk’s rotations. We perfected the solution by adding minute bumps to the big disk’s bottom at every 15° angle, which slotted into corresponding bumps on the resting surface.
    </div>,
  ]

  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Hardware Evaluation
              </p>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                Braille Output Accuracy
              </h3>
            </div>
            <div className="mt-4 text-base text-gray-900">
              One of the most important aspects of <span className="font-louis">louis</span> is an accurate braille output. Without it, the main purpose of <span className="font-louis">louis</span> - teaching braille - could not be achieved. Many steps have been taken to ensure that this essential goal was accomplished:
              <br /><br />
              <div className="pl-4 border-l-4 border-indigo-500">
                Since we were all unfamiliar with the braille alphabet, we first ensured that our braille resources were accurate. We discovered that there are many different flavours of braille, so we settled on the Unified English Braille Code. UEBC is an English language Braille code standard.
                <br /><br />
                The firmware must pass the motors the right rotation angles to arrive at the right braille output. We have assured the correctness of the firmware logic by adding assertions to the code. Both the small disk’s and big disk’s assertions have all returned true for random sequences of 26000 characters. We also automatically run unit tests, which have not failed either for the current software iteration.
                <br /><br />
                The motors must be calibrated carefully in order to give accurate output. We have established that once calibration is done precisely, the motors do not introduce any inaccuracies. In the rare event of a calibration error, the user can manually recalibrate using the Calibration app that comes with the device. Instructions on how to use the app are given in the <Link to="/documentation" className="font-medium text-gray-500 underline">User Guide</Link>.
                <br /><br />
                The motor’s rotations need to be accurate. Problems we ran into were the following:
                <ul className="mt-8 lg:col-gap-8 lg:row-gap-5">
                  {accuracy_problems.map((point, i) => (
                    <li
                      className="mt-5 first:mt-0 lg:mt-0 flex items-start lg:col-span-1"
                      key={'ap_' + i}
                    >
                      <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <circle cx="10" cy="10" r="5"/>
                      </svg>
                      </div>
                      <div className="ml-3 text-sm leading-5 text-gray-700">
                        {point}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <br />
              All these measures have helped us achieve perfect accuracy. We evaluated our hardware on random orders of the alphabet characters. The following table summarises the tests we’ve run:
              <br /><br />
              <TableBrailleOutput />
              <br />
              Output has been evaluated by looking at the dots and feeling the dots with the tip of the index finger. Members of our testing team have learned the braille alphabet and kept the UEBC chart at hand to double-check the displayed characters.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const RenderingSpeed = () => {
  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-indigo-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Hardware Evaluation
              </p>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                Rendering Speed
              </h3>
            </div>
            <div className="mt-4 text-base text-gray-900">
              Another important aspect of <span className="font-louis">louis</span> is the character rendering speed. A feature that supports speedy render times is that cells can move in parallel, so all characters of a line can render at the same time. Thus the render time of a line of text is equal to the render time of a single character.
              <br /><br />
              The tuning we applied to the motor control ensures that movement is done as efficiently as possible. The added friction helps enable fast rotation. As described on the <Link to="/how-it-works" className="font-medium text-gray-500 underline">How it Works</Link> page, the small disk has all 8 dot combinations twice and the big disk three times. This in turn allows us to have the two catches only 90° apart. Combined, this gives us the optimal rotation angles when printing characters, thus significantly increasing rendering speed.
              <br /><br />
              Possibly a catch spacing of 120° or 180° could be more optimal, since it increases flexibility for the starting direction of rotations. We performed tests to compare the options. Every test evaluates 1000 random orders of the full alphabet, so a total of 26000 characters. It calculates the rotation angles for each character in each order, sums the angles per order, and returns the average of angles over all 1000 orders. The results are summarised in the following table:
              <br /><br />
              <TableCatchSpacing />
              <br />
              We concluded that 90° is indeed optimal. On further inspection we confirmed that there are cases where 120° or 180° result in smaller rotation angles for a character, but on average 90° comes out on top.
              <br /><br />
              The average rotation angle per character is <strong>153°</strong>. The time it takes to calculate the optimal rotation angles and pass it on to the hardware is negligible (0.000020s), so the render times will be determined by the motor. From Figure 4 you can see we have optimised the movement speed and acceleration and deceleration speed. Unfortunately because we can no longer access our device due to the current global pandemic, we did not have the opportunity to officially record character render times. We know, however, that our hardware supports the highest speed that the motor supports. On the <a href="https://education.lego.com/en-us/products/lego-mindstorms-education-ev3-medium-servo-motor/45503" className="font-medium text-gray-500 underline">official LEGO® site</a> it states that the motor is able to do 240-250 rotations per minute. This means 0.25 seconds per 360°. We estimate that the two acceleration periods and the two deceleration periods per character render add an additional 0.1 seconds each. The average <strong>153°</strong> is then translated into an average of 4 * 0.1s + 153°/ 360° * 0.25s = <strong>0.506 seconds per character render</strong>. This matches our observations when testing the hardware in general.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Reliability = () => {
  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Hardware Evaluation
              </p>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                Reliability
              </h3>
            </div>
            <div className="mt-4 text-base text-gray-900">
              We have ensured general reliability of all hardware and firmware. The final design has eliminated fragile parts, printing the dots directly and securely onto the disks, unlike current braille devices which work with pins and break easily. Disks are fastened tightly to the axel and the whole structure is supported so that any wiggle is strictly limited.
              <br /><br />
              It is straightforward to click cells together and attach them to the main controller. The <Link to="/how-it-works" className="font-medium text-gray-500 underline">cell discovery protocol</Link> has never failed and always returns the accurate number of cells. Button presses are reliably registered and passed to the main controller.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const UserExperience = () => {
  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-indigo-50 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Hardware Evaluation
              </p>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                User Experience
              </h3>
            </div>
            <div className="mt-4 text-base text-gray-900">
              Since our target users are the visually-impaired, we were posed an interesting challenge for carrying out the UX tests after our RNIB research session. To alleviate these problems, we followed the methodology found in a study (Law and Vanderheiden, 2000) which assumes that testing UX on blindfolded (sighted) subjects is a good way to gain useful insights into possible UX problems without compromising extrapolability to the visually impaired audience:
              <br /><br />
              <div className="pl-4 border-l-4 border-indigo-500">
                <i>"As part of an investigation aimed at reducing costs in user testing of people with disabilities, a user test was conducted to compare the differences between a group of 15 blind, and 15 blindfolded (sighted) subjects using a touchscreen public information kiosk that was intended for use by people who cannot see. The number and type of problems found by each group were compared, and it was found that the results between each group were mostly similar"</i>
                <br /><br />
                [Reference: Law, C. M. & Vanderheiden, G. C (2000). Reducing Sample Sizes When User Testing with People Who Have, and Who are Simulating Disabilities - Experiences with Blindness and Public Information Kiosks. Proceedings of the Human Factors and Ergonomics Society Annual Meeting, 44(26), 157–160. URL <a href="https://doi.org/10.1177/154193120004402607" className="font-medium text-gray-500 underline">https://doi.org/10.1177/154193120004402607</a>]
              </div>
              <br />
              When performing our own user experience evaluation relating to the hardware, we were satisfied with the design choices we made. When we were informed in our interview session that the size of a regular 3x2 LEGO brick (24×16mm) is ideal for learning braille, we matched our braille output to these dimensions. The dots are easily distinguishable, have a comfortable feel and the small gap between the big and small disk is not tangible. The guide rail, which we also implemented in response to the research session, is a good aid to move on from one character to the next.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HarwareImprovements = () => {
  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-green-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Hardware Evaluation
              </p>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                Main Areas of Improvement
              </h3>
            </div>
            <div className="mt-4 text-base text-gray-900">
              We are very satisfied with our hardware design and have optimised in all main areas. A possible expansion is to also provide regular sized braille cells. This is to aid the more advanced users, since those can also enjoy all the non-educational apps that our open SDK supports. A smaller cell can easily be supported since the connector mechanism will be the same and miniaturization of the other parts is trivial.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Evaluation = () => {
  return (
    <>
      <SEO title="Evaluation" />
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Evaluation of <span className="font-louis">louis</span>
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              At ThreeDots we’re committed to delivering the best possible product to our customers. Beside the user experience research we have conducted, we have done extensive evaluation testing to ensure the reliability and optimality of the hardware.
            </p>
          </div>
          <RNIB />
          <OutputAccuracy />
          <RenderingSpeed />
          <Reliability />
          <UserExperience />
          <HarwareImprovements />
        </div>
      </div>
    </>
  )
}

export default Evaluation
