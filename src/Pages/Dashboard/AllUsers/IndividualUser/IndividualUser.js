import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../Contexts/AuthProvider";

const IndividualUser = ({ id, no, name, user_email, data }) => {
    const {user} = useContext(AuthContext);
    const email = {email: user.email};
    
   const handleMakeAdmin = (id) => {
    console.log(id)
     fetch(`https://eece-server.vercel.app/allRegisterUsers/admin/${id}`, {
        method: 'PUT',
        body: JSON.stringify(email),
        headers: {
          'Content-type': 'application/json',
        },
      })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if (data.modifiedCount > 0 ) {
            toast.success('Make admin successfull')
           
        }
        console.log(user.email)
     })

   }


  //  const handleDelete = (id) => {
  //   console.log(" deleted id",id);
  //   if (id) {
  //     fetch(`https://eece-server.vercel.app/allRegisterUsers/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }
  // };


    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{user_email}</p>
                <div className="card-actions justify-end">
                    { data?.role !== 'admin' && <button onClick={ () => handleMakeAdmin(id) } className="btn bg-custom-pink hover:bg-hover-bg btn-sm">Make admin</button>}
                    {/* <button onClick={ () => handleDelete(id)}  className="btn bg-red-600 hover:bg-red-900 btn-sm">Delete</button> */}
                </div>
            </div>
        </div>
    );
};

export default IndividualUser;
