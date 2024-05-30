import { RepoProps } from "../../types/repos"

//icons
import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"

//styles
import classes from "./Repo.module.css"


export const Repo = ({ repo }: { repo: RepoProps }) => {
    return (
        <div className={classes.repo}>
            <h3>{repo.name}</h3>
            <p>
                <BsCodeSlash />
                {repo.language}
            </p>
            <div className={classes.stats}>
                <div>
                    <AiOutlineStar />
                    {repo.stargazers_count}
                </div>
                <div>
                    <AiOutlineFork />
                    {repo.forks_count}
                </div>
            </div>
            <a href={repo.html_url} className={classes.repo_link}>
                <span>Ver código</span>
                <RiGitRepositoryLine />
            </a>
        </div>
    )
}
