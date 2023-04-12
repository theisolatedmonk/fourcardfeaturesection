import { TopComponent } from "../components/Card";
import { Card } from "../components/Card";
import {
  Calculatorimages,
  Karmaimages,
  Supervisorimages,
  TeamBuilderimages,
} from "../components/SVGimages";

{
  /* font-family: 'Poppins', sans-serif; */
}

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col bg-white items-center pt-8 font-poppins max-md:flex-wrap">
      <div className="  flex flex-col bg-white  gap-4 justify-between items-center ">
        <div>
          <TopComponent />
        </div>
        <div className="  items-center gap-4  h-[400px]  flex justify-center max-md:flex-col">
          <Card
            borderColor={"hsl(180,62%,55%)"}
            heading={"Supervisor"}
            discription={"Monitor activity to identify project roadblocks"}
            svgImage={Supervisorimages()}
          />
          <div className="flex flex-col gap-4">
            <Card
              borderColor={"hsl(0,78%,62%)"}
              heading={"TeamBuilderimages"}
              discription={
                "Scan our talent network to create the optimal team for your project"
              }
              svgImage={TeamBuilderimages()}
            />
            <Card
              borderColor={"hsl(34,97%,64%)"}
              heading={"Karma"}
              discription={"Regularly evaluates our talent to ensure quality"}
              svgImage={Karmaimages()}
            />
          </div>
          <Card
            borderColor={"hsl(212,86%,64%)"}
            heading={"Calculator"}
            discription={
              "Uses data from past projects to provide better delivery estimates"
            }
            svgImage={Calculatorimages()}
          />
        </div>
      </div>
    </main>
  );
}

// - Mobile: 375px
// - Desktop: 1440px
// ### Neutral

// - Very Dark Blue: hsl(234, 12%, 34%)
// - Grayish Blue: hsl(229, 6%, 66%)
// - Very Light Gray: hsl(0, 0%, 98%)

// ## Typography

// ### Body Copy

// - Font size: 15px

// ### Fonts

// - Family: [Poppins](https://fonts.google.com/specimen/Poppins)
// - Weights: 200, 400, 600
