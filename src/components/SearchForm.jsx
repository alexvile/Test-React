import { useState } from "react"

export const SearchFrom = ({onSubmit}) => {
    const [query, setQuery] = useState('');
    const handleChange = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    };
    const handleSubmit = e => {
        e.preventDefault();
        if(query === '') {
            return alert('empty query');
        }
        onSubmit(query);
    };
    return(
        <form onSubmit={handleSubmit} className="p-2 border">
            <label>
                <input onChange={handleChange} className="border" type="text" placeholder="Enter query" value={query}/>
            </label>
            <button type="submit" className="bg-red-200"> search</button>
        </form>
    )
}