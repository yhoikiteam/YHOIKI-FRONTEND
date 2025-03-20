import { BiCheck, BiMinus } from "react-icons/bi";
import { Button } from "@/components/Button";

export default function PricingTable() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-r border-gray-200 bg-gray-50 p-6 text-left">
                <span className="text-2xl font-medium text-gray-400">
                  Package
                </span>
              </th>
              <th className="border-r border-gray-200 p-2 text-left">
                <div className="rounded-xl bg-purple-100 p-2">
                  <h3 className="text-xl font-bold">Basic</h3>
                  <p className="text-sm font-medium">Our Most Popular Plan.</p>
                  <Button className="mt-8 w-full rounded-full bg-primary-two">
                    Rp. 100.000
                  </Button>
                </div>
              </th>
              <th className="border-r border-gray-200 p-2 text-left">
                <div className="rounded-xl bg-amber-100 p-2">
                  <h3 className="text-xl font-bold">Standar</h3>
                  <p className="text-sm font-medium">Our Most Popular Plan.</p>
                  <Button className="mt-8 w-full rounded-full bg-primary-two">
                    Rp. 200.000
                  </Button>
                </div>
              </th>
              <th className="p-2 text-left">
                <div className="rounded-xl bg-cyan-100 p-2">
                  <h3 className="text-xl font-bold">Premium</h3>
                  <p className="text-sm font-medium">Our Most Popular Plan.</p>
                  <Button className="mt-8 w-full rounded-full bg-primary-two">
                    Rp. 300.000
                  </Button>
                </div>
              </th>
            </tr>
            {/* <tr>
              <th className="border-r border-gray-200 p-0"></th>
              <th className="border-r border-gray-200 bg-purple-100 p-4">
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary-two px-6 py-2 font-bold text-white">
                    Rp. 100.000
                  </div>
                </div>
              </th>
              <th className="border-r border-gray-200 bg-amber-100 p-4">
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary-two px-6 py-2 font-bold text-white">
                    Rp. 500.000
                  </div>
                </div>
              </th>
              <th className="bg-cyan-100 p-4">
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary-two px-6 py-2 font-bold text-white">
                    Rp. 700.000
                  </div>
                </div>
              </th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 font-medium text-white">
                User Research And Personas
              </td>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 text-center">
                <BiMinus className="mx-auto text-white" />
              </td>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 text-center">
                <BiMinus className="mx-auto text-white" />
              </td>
              <td className="border-t border-gray-200 bg-primary-two p-4 text-center">
                <BiCheck className="mx-auto text-white" />
              </td>
            </tr>
            <tr>
              <td className="border-r border-t border-gray-200 bg-white p-4 font-medium">
                Prototype
              </td>
              <td className="border-r border-t border-gray-200 bg-white p-4 text-center">
                <BiMinus className="mx-auto text-gray-400" />
              </td>
              <td className="border-r border-t border-gray-200 bg-white p-4 text-center">
                <BiCheck className="mx-auto text-black" />
              </td>
              <td className="border-t border-gray-200 bg-white p-4 text-center">
                <BiCheck className="mx-auto text-black" />
              </td>
            </tr>
            <tr>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 font-medium text-white">
                UI Design
              </td>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 text-center">
                <BiCheck className="mx-auto text-white" />
              </td>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 text-center">
                <BiCheck className="mx-auto text-white" />
              </td>
              <td className="border-t border-gray-200 bg-primary-two p-4 text-center">
                <BiCheck className="mx-auto text-white" />
              </td>
            </tr>
            <tr>
              <td className="border-r border-t border-gray-200 bg-white p-4 font-medium">
                Source File
              </td>
              <td className="border-r border-t border-gray-200 bg-white p-4 text-center">
                <BiCheck className="mx-auto text-black" />
              </td>
              <td className="border-r border-t border-gray-200 bg-white p-4 text-center">
                <BiCheck className="mx-auto text-black" />
              </td>
              <td className="border-t border-gray-200 bg-white p-4 text-center">
                <BiCheck className="mx-auto text-black" />
              </td>
            </tr>
            <tr>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 font-medium text-white">
                Number Of Page Or Screens
              </td>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 text-center text-base font-bold text-white">
                1
              </td>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 text-center text-base font-bold text-white">
                5
              </td>
              <td className="border-t border-gray-200 bg-primary-two p-4 text-center text-base font-bold text-white">
                10
              </td>
            </tr>
            <tr>
              <td className="border-r border-t border-gray-200 bg-white p-4 font-medium">
                Revisions
              </td>
              <td className="border-r border-t border-gray-200 bg-white p-4 text-center text-base font-bold text-gray-400">
                2
              </td>
              <td className="border-r border-t border-gray-200 bg-white p-4 text-center text-base font-bold text-gray-400">
                4
              </td>
              <td className="border-t border-gray-200 bg-white p-4 text-center text-base font-bold text-gray-400">
                Unlimited
              </td>
            </tr>
            <tr>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 font-medium text-white">
                Delivery Time
              </td>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 text-center text-base font-bold text-white">
                2 days
              </td>
              <td className="border-r border-t border-gray-200 bg-primary-two p-4 text-center text-base font-bold text-white">
                5 days
              </td>
              <td className="border-t border-gray-200 bg-primary-two p-4 text-center text-base font-bold text-white">
                7 days
              </td>
            </tr>
            <tr>
              <td className="border-r border-t border-gray-200 bg-white p-4 font-medium">
                Total
              </td>
              <td className="border-r border-t border-gray-200 bg-white p-4"></td>
              <td className="border-r border-t border-gray-200 bg-white p-4"></td>
              <td className="border-t border-gray-200 bg-white p-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
