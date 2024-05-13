// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function ProjectInfo() {
//   let { id } = useParams();
//   const [project, setProject] = useState(null);

//   useEffect(() => { 
//     // Replace this with your actual data fetching logic
//     fetch(`/project/${id}`)
//       .then(response => response.json())
//       .then(data => setProject(data));
//   }, [id]);

//   if (!project) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="project-info">
//       {project.items && project.items.map((item, index) => (
//         <div className={`project-item ${index % 2 === 0 ? 'row' : 'row-reverse'}`}>
//           <img src={item.image} alt={item.title} />
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProjectInfo;


// import React from "react";
// import { useLocation, Link } from "react-router-dom";

// const ViewUserDetails = (_) => {
//   const { state } = useLocation();

//   return (
//     <div>
//       <div>
//         <div>
//           <strong>Id:</strong> {state.users.id}{" "}
//         </div>
//         <div>
//           <strong>Name:</strong> {state.users.name}{" "}
//         </div>
//       </div>

//       <Link to="/">
//         <button>Back</button>
//       </Link>
//     </div>
//   );
// };

// export default ViewUserDetails;