import { ReactComponentElement } from "react";
import {
  Calculatorimages,
  Karmaimages,
  Supervisorimages,
  TeamBuilderimages,
} from "./SVGimages";
import { Interface } from "readline";

interface Cardtype {
  borderColor: string;
  heading: string;
  discription: string;
  svgImage: React.ReactNode;
}

export function Card(props: Cardtype) {
  return (
    <div
      style={{borderTopColor: props.borderColor}}
      className="p-4 flex flex-col border border-t-2 gap-4 shadow-gray-400 shadow-md w-52 h-40 rounded-md"
    >
      <div className=" items-start bg-white flex flex-col">
        <p className="font-poppins text-[hsl(234,12%,34%)]">{props.heading}</p>
        <p className="text-xs">{props.discription}</p>
      </div>
      <div className="flex justify-end bg-black">{props.svgImage}</div>
    </div>
  );
}



export function TopComponent() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-80 gap-2">
      <div className="text-xl">Reliable, efficient delivery</div>
      <div className="font-bold text-lg text-[hsl(234,12%,34%)]">Powered by Technology</div>
      <div className="text-xs">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </div>
    </div>
  );
}

// Supervisor, Monitor activity to identify project roadblocks
// return (${bgcolor},${upperbordercolor},${heading},${svgImage})
// function Card(props: Cardtype){

//     const CardDetails = [{
//         bgcolor: 'white',
//         upperbordercolor: 'green',
//         heading : 'Supervisor',
//         svgImage : <Supervisorimages/>

//     },{
//         bgcolor: 'white',
//         upperbordercolor: 'red',
//         heading : 'Team Builder',
//         svgImage : <TeamBuilderimages/>

//     },{
//         bgcolor: 'white',
//         upperbordercolor: 'yellow',
//         heading : 'Karma',
//         svgImage : <Karmaimages/>

//     },
//     {
//         bgcolor: 'white',
//         upperbordercolor: 'blue',
//         heading : 'Calculator',
//         svgImage : <Calculatorimages/>

//     }];

//     return CardDetails
// }
