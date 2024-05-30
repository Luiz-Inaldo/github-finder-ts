import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Button } from "../../components/Button/Button"
import { RepoProps } from "../../types/repos"
import { Loader } from "../../components/Loader/Loader"
import { Repo } from "../../components/Repo/Repo"

//css
import classes from "./Repositories.module.css"

export const Repositories = () => {

  const { username } = useParams();
  const [repos, setRepos] = useState<RepoProps[] | [] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadRepos = async (username: string | undefined) => {
      if (!username) return;
      setLoading(true);
      setRepos(null);
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      // ordenando os repositórios pelo número de estrelas descrescente
      let orderedData = data.sort((a: RepoProps, b: RepoProps) => {
        return b.stargazers_count - a.stargazers_count;
      });
      orderedData = orderedData.slice(0, 5);
      setRepos(orderedData);
      setLoading(false);
    }
    loadRepos(username);

  }, [])

  return (
    <div className={classes.repos}>
      <Button />
      <h2>Explore os repositórios do usuário: {username}</h2>
      {loading && <Loader />}
      {repos && repos.length === 0 && <p>Não foram encontrados repositórios para o usuário {username}</p>}
      {repos && (
        <div className={classes.repos_container}>
          {repos?.map((repo) =>
            <Repo key={repo.name} repo={repo} />
          )}
        </div>
      )}
    </div>
  )
}
