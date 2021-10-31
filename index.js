import{ IfcAPI, IFCWALLSTANDARDCASE } from "web-ifc/web-ifc-api";

const ifcAPI = new IfcAPI()
ifcAPI.Init();

console.log("test");
const button = document.getElementById("input-button");
const input = document.getElementById("input-element");
const resultContainer = document.getElementById("content");

button.onclick = () => {
    input.click()
}

input.onchange = (changed) => {
    const reader = new FileReader() ;
    reader.onload = () => loadIfc(reader.result);
    reader.readAsText(changed.target.files[0]);
}

// function loadIfc(ifcData) {
//     const modelID = ifcAPI.OpenModel(ifcData);

//     const walls = ifcAPI.GetLineIDsWithType(modelID, IFCWALLSTANDARDCASE);

//     const size = walls.size();
//     for(let i = 0; i < size; i++) {
//         const wall = walls.get(i);
//         const wallProps = ifcAPI.GetLine(modelID, wall);
//         console.log(wallProps);
//     }

// }

function loadIfc(ifcData) {
    const modelID = ifcAPI.OpenModel(ifcData);

    const walls = ifcAPI.GetLineIDsWithType(modelID, IFCWALLSTANDARDCASE);
    
    const firstWall = walls.get(0);
    const wallProps = ifcAPI.GetLine(modelID, firstWall);

    const result = JSON.stringify(wallProps, undefined, 2);
    resultContainer.textContent = result

}
    