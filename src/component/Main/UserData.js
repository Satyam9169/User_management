import React, { useState } from 'react';
import { data } from '../../constant/constant';

const UserData = () => {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('default'); // default sorting

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    }

    const filterData = () => {
        const lowerMatchCase = search.toLowerCase();

        let filteredData = data.filter((item) => {
            if (lowerMatchCase === '') {
                return true;
            } else {
                const Match_Data = item.first_name.toLowerCase().includes(lowerMatchCase)
                    || item.last_name.toLowerCase().includes(lowerMatchCase)
                    || item.email.toLowerCase().includes(lowerMatchCase)
                    || item.gender.toLowerCase().includes(lowerMatchCase)
                    || item.phone.toLowerCase().includes(lowerMatchCase)
                return Match_Data;
            }
        });

        // Sort data based on the chosen sorting option
        if (sortBy === 'alphabetical') {
            filteredData.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1);
        } else if (sortBy === 'male') {
            filteredData = filteredData.filter(item => item.gender.toLowerCase() === 'male');
        } else if (sortBy === 'female') {
            filteredData = filteredData.filter(item => item.gender.toLowerCase() === 'female');
        }
        return filteredData;
    }

    return (
        <>
            <div className='container'>
                <h1>Search the data</h1>
                <form className="d-flex">
                    <input className="form-control" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
                </form>

                <div className='py-3'>
                    <div>
                        <label htmlFor="sort">Sort By: </label>
                        <select id="sort" value={sortBy} onChange={handleSortChange}>
                            <option value="default">Default</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterData().map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserData;