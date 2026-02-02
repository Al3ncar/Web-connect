import { dataVolunteer } from "../utils/data/data-volunteer";
import Sections from "../components/sections/sections";
export const Volunteer = () => (
  <Sections titlePage="Voluntariado" dataArray={dataVolunteer} />
);
