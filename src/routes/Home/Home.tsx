import React, { useState } from "react"
import { Search } from "../../components/Search/Search"
import { UserProps } from "../../types/user"
import { User } from "../../components/User/User";
import { Error } from "../../components/Error/Error";
import { Loader } from "../../components/Loader/Loader";

export const Home: React.FC = () => {

    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);


    const loadUser = async (userName: string) => {
        setLoading(true);
        setError(false);
        setUser(null);
        const res = await fetch('https://api.github.com/users/' + userName);
        if (res.status === 404) {
            setError(true);
            setLoading(false);
            return;
        }
        const data = await res.json();
        const { avatar_url, login, location, followers, following } = data;
        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }
        setError(false);
        setUser(userData);
        setLoading(false);
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {loading && <Loader />}
            {user && <User {...user}/>}
            {error && <Error message='Parece que não temos um usuário com esse nome' />}
        </div>
    )
}
