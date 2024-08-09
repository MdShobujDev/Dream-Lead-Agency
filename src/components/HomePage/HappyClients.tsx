import { Avatar } from "antd";
import EmblaCarousel from "../EmblaCarousel";

function HappyClients() {
  return (
    <section className=" mx-auto my-10 px-5">
      <h1 className="text-4xl text-center font-medium mb-4">
        Our happy clients
      </h1>
      <div>
        <EmblaCarousel>
          <div
            className="flex gap-3 bg-gray-100 p-3 rounded-2xl transform pl-8 min-w-0 flex-[0_0_40%]  cursor-pointer select-none"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            <div>
              <Avatar shape="circle" size="large" />
            </div>
            <div>
              <h2 className="font-medium">Jone Deo</h2>
              <q className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur atque ratione error nobis soluta esse quisquam,
              </q>
            </div>
          </div>
          <div
            className="flex gap-3 bg-gray-100 p-3 rounded-2xl transform pl-8 min-w-0 flex-[0_0_40%]   cursor-pointer select-none"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            <div>
              <Avatar shape="circle" size="large" />
            </div>
            <div>
              <h2 className="font-medium">Jone Deo</h2>
              <q className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </q>
            </div>
          </div>
          <div
            className="flex gap-3 bg-gray-100 p-3 rounded-2xl transform pl-8 min-w-0 flex-[0_0_40%] cursor-pointer select-none"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            <div>
              <Avatar shape="circle" size="large" />
            </div>
            <div>
              <h2 className="font-medium">Jone Deo</h2>
              <q className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur atque ratione error nobis soluta esse quisquam,
                consequuntur sunt odio numquam placeat, quia animi tenetur
                dignissimos.
              </q>
            </div>
          </div>
          <div
            className="flex gap-3 bg-gray-100 p-3 rounded-2xl transform pl-8 min-w-0 flex-[0_0_40%] cursor-pointer select-none"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            <div>
              <Avatar shape="circle" size="large" />
            </div>
            <div>
              <h2 className="font-medium">Jone Deo</h2>
              <q className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur atque ratione error nobis soluta esse quisquam,
                consequuntur sunt odio numquam placeat, quia animi tenetur
                dignissimos.
              </q>
            </div>
          </div>
          <div
            className="flex gap-3 bg-gray-100 p-3 rounded-2xl transform pl-8 min-w-0 flex-[0_0_40%] cursor-pointer select-none"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            <div>
              <Avatar shape="circle" size="large" />
            </div>
            <div>
              <h2 className="font-medium">Jone Deo</h2>
              <q className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur atque ratione error nobis soluta esse quisquam,
                consequuntur sunt odio numquam placeat, quia animi tenetur
                dignissimos.
              </q>
            </div>
          </div>
        </EmblaCarousel>
      </div>
    </section>
  );
}

export default HappyClients;
