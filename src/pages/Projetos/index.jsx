import { useEffect, useState } from "react"
import Card from "../components/Card"
import styles from './Projetos.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

const Projetos = () => {
  
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
      const searchRepositories = async () => {
        const response = await fetch('https://api.github.com/users/MauroLucasSouza1150/repos?page=1&per_page=20');
        const data = await response.json();
        const repositoriesWithTech = await Promise.all(data.map(async (repo) => {
          const techResponse = await fetch(`https://api.github.com/repos/MauroLucasSouza1150/${repo.name}/languages`);
          const techData = await techResponse.json();
          const techKeys = Object.keys(techData);
          const technologies = techKeys.map(tech => {
            switch (tech) {
              case 'HTML':
                return <FaHtml5 key={tech} />;
              case 'CSS':
                return <FaCss3Alt key={tech} />;
              case 'JavaScript':
                return <FaJs key={tech} />;
              case 'React':
                return <FaReact key={tech} />;
              default:
                return null;
            }
          });
          return { ...repo, technologies };
        }));
        setRepositories(repositoriesWithTech);
      }
      
      searchRepositories();
    }, []);
  
  return (

    <section className={styles.projetos}>
      <h2>Projetos</h2>
      {
        repositories.length > 0 ? (
          <div className={styles.cards_container}>
            {
              repositories.map((repo) => (
                <Card 
                key={repo.id} 
                name={repo.name} 
                description={repo.description} 
                html_url={repo.html_url}
                technologies={repo.technologies}
                />
              ))
            }
          </div>
        ) : (
          <p> Carregando Repositórios... </p>
        )
      }
    </section>
  )
}

export default Projetos