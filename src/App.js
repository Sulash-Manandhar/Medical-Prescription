import { MedicalPrescription } from "./MedicalPrescription";
import { MedicalPrescriptionList } from "./MedicalPrescriptionList";
import { MedicalPrescriptionPanel } from "./MedicalPrescriptionPanel";

function App() {
  //five arbitary data for MedicalPrescriptionList.js
  //prescriptionList is defined as Array of Object
  //each object has 5 attributes (treadId, treatCourseId, type, category, name and dateIssued)
  const prescriptionList = [
    {
      treatId: "001",
      treatCourseId: "001",
      type: "Reproductive endocrinologists ",
      category: "Gynecology ",
      name: "Bruce",
      dateIssued: "2022-2-9",
    },
    {
      treatId: "002",
      treatCourseId: "002",
      type: "Chest radiology",
      category: "Diagnostic radiology",
      name: "Lucifer",
      dateIssued: "2022-2-9",
    },
    {
      treatId: "003",
      treatCourseId: "003",
      type: "Brain injury",
      category: "Neurology ",
      name: "Shelby",
      dateIssued: "2022-2-9",
    },
    {
      treatId: "004",
      treatCourseId: "004",
      type: "Brain Disorder",
      category: "Neurology ",
      name: "Otis",
      dateIssued: "2022-2-9",
    },
    {
      treatId: "005",
      treatCourseId: "005",
      type: "Neuroradiology",
      category: "Diagnostic radiology ",
      name: "Alex",
      dateIssued: "2022-2-9",
    },
  ];
  return (
    <div className="container">
      {/* One instance of MedicalPrescription component with arbitrary data */}
      <MedicalPrescription
        treatId="001"
        treatCourseId="001"
        type="Pain medicine"
        category="Anesthesiology"
        name="Nate"
        dateIssued="2022-2-9"
      />
      {/* Instance of MedicalPrescriptionList  */}
      <MedicalPrescriptionList prescriptionList={prescriptionList} />
      {/* Instance of MedicalPrescriptionPanel  */}
      <MedicalPrescriptionPanel />
    </div>
  );
}

export default App;
