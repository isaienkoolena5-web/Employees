
import { useContext } from "react";
import { EmployeeContext } from "../../components/LayoutEmployee/NameContext";
import { InfoBlock, InfoCard, InfoLabel, InfoValue } from "./style";

export default function Employees() {
  const { employees } = useContext(EmployeeContext);

  if (!employees || employees.length === 0) {
    return <p>No employees found.</p>; // Basic empty state
  }

  return (
    <>
      {employees.map((emp, index) => (
        <InfoCard key={emp.id ?? index} $isHidden={false}> {/* Prefer emp.id if available */}
          <InfoBlock>
            <InfoLabel>Name</InfoLabel>
            <InfoValue>{emp.name}</InfoValue>
          </InfoBlock>

          <InfoBlock>
            <InfoLabel>Surname</InfoLabel>
            <InfoValue>{emp.surname}</InfoValue>
          </InfoBlock>

          <InfoBlock>
            <InfoLabel>Age</InfoLabel>
            <InfoValue>{emp.age}</InfoValue>
          </InfoBlock>

          <InfoBlock>
            <InfoLabel>Job Position</InfoLabel>
            <InfoValue>{emp.job || "-"}</InfoValue>
          </InfoBlock>
        </InfoCard>
      ))}
    </>
  );
}