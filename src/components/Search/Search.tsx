import { BiSearch } from 'react-icons/bi'
import { SearchProps } from '../../types/search'
import { FormEvent, useState } from 'react'

//css
import classes from './Search.module.css'

export const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loadUser(userName)
    }

    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <form className={classes.search_container} onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Digite o nome do usuário'
                onChange={e => setUserName(e.target.value)}
                />
                <button onClick={() => loadUser(userName)}>
                    <BiSearch />
                </button>
            </form>
        </div>
    )
}
