import { ReactComponentElement } from "react";
import { Calculatorimages, Karmaimages, Supervisorimages, TeamBuilderimages } from "./SVGimages";

interface Cardtype{
    bgcolor: 'string',
    upperbordercolor: 'string',
    heading : 'string',
    discription : 'string',
    svgImage : React.ReactNode


}

function Card(props: Cardtype){

    return (
        <div className="p-4 flex flex-col border border-t-2 border-t-green-400 gap-4">
            <div className=" items-start flex flex-col">
                <p>{props.heading}</p>
                <p>{props.discription}</p>
            </div>
            <div className="items-end">{props.svgImage}</div>
        </div>
    )
        
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
