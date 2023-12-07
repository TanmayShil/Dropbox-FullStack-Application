import React, { useEffect, useState } from 'react'
import './userinfo.css';
import axios from "axios";



const UserInfo = () => {
    const [userdata, setUserdata] = useState([])
    // const [folderURL, setFolderURL] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/userinfo')
            .then(response => {
                setUserdata(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    // const openFolder = async (folderName) => {
    //     try {
    //         const response = await axios.post('http://localhost:8000/api/v1/data', {
    //             folderName,
    //             accessToken: 'sl.BnNZVzbqHMHp64pAv2N4_FhUxLQjEY1jHqf-NQLn6GN9-gOXAYZnfc9E3Ch4A4_LsD4bTr5Uo-_qPTvZFrwOd2mTOuIANfJ7ozjYsFs1dVpkfGg3ZaYXV83tRtFBqXiKmIchyzbEw50H92g',
    //         });

    //         if (response.data.folderURL) {
    //             window.location.href = response.data.folderURL;
    //             // window.open(response.data.folderURL, '_blank');
                
    //         } else {
    //             console.error('Failed to open folder');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    
    // const handleOpenFolderClick = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:8000/api/v1/data');
    //         const folderresponse = response.data.data5;
    //         console.log(folderresponse);
    //         window.open(folderresponse, '_blank');
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    
    return (
        <div>
            <h1>Welcome to Admin Panel</h1>
            <table >
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile No.</th>
                        <th>Email</th>
                        <th>Aadhar Number</th>
                        <th>PAN</th>
                        <th>URN</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata && userdata.map(user => {
                            return (<tr key={user.id}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                                <td>{user.aadharNumber}</td>
                                <td>{user.panNumber}</td>
                                <td>{user.urn}</td>
                                {/* <td><button id="openFolderButton" onClick={handleOpenFolderClick} className="btn btn-primary btn-block mb-4">Open Folder</button></td> */}
                                
                                <td><a href='https://www.dropbox.com/home/Apps/boxesdrop' className="btn btn-primary btn-block mb-4">Dropbox files</a></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default UserInfo;