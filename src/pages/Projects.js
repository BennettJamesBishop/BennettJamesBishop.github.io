import { useParams } from 'react-router-dom';
import { projects_array } from '../projects_array';
export default function Projects() {
    const { index } = useParams();
    const project = projects_array[index]
      return (
        <div>
          <h1>Project ID: {index}</h1>
          <p>Details for project with ID: {project.title}</p>
          {/* Fetch and display project details based on the ID */}
        </div>
      ); }
