import { useState, useEffect } from "react";
import "./style.css"
function UserDetails() {
    const [Details, setDetails] = useState([])
    const GetDetails = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await (response.json())
        setDetails(result)

    }
    useEffect(() => {
        GetDetails()
    }, [])
    return (
        <div>
            <div className="heading">
                <h1>User Details</h1>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Zip Code</th>
                            <th>Phone</th>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Details.map(({ name, username, email, address: { city, zipcode }, phone, company }, index) => {
                            return (
                                <tr key={index}>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{city}</td>
                                    <td>{zipcode}</td>
                                    <td>{phone}</td>
                                    <td>{company.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default UserDetails