import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProjectList() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/projects/")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map(p => (
        <div key={p.id} className="border rounded-lg shadow p-4">
          {p.image && <img src={p.image} alt={p.title} className="h-40 w-full object-cover rounded" />}
          <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
          <p className="text-sm mt-2">{p.description.slice(0,100)}...</p>
          <div className="mt-3 flex gap-2">
            {p.demo_url && <a href={p.demo_url} className="text-blue-500">Demo</a>}
            {p.repo_url && <a href={p.repo_url} className="text-blue-500">Repo</a>}
          </div>
        </div>
      ))}
    </div>
  )
}
