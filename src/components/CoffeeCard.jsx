/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CoffeeCard = ({ coffee }) => {
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                    
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                })
            }
        })

    }
    
    // eslint-disable-next-line no-unused-vars
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card bg-[#F5F4F1]    card-side ">
            
                <figure><img src={photo} alt="Movie" /></figure>
            
            <div className=" flex pt-20 pl-4">
                <div className="">
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Quantity : {quantity}</p>
                    <p>Supplier:  {supplier}</p>
                    <p>taste:  {taste}</p>
               </div>
                <div className="card-actions ">
                    <div className="btn-group btn-group-vertical pl-10 space-y-3">
                        <button className="btn btn-outline">View</button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn btn-outline ">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline">Delete</button>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default CoffeeCard;