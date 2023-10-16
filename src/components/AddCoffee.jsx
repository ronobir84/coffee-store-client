import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const quantity = form.quantity.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value
    const newCoffee = { name, quantity, supplier, taste, category, details, photo }
    console.log(newCoffee)
    //sent to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body : JSON.stringify(newCoffee)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'User Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })


  }
  return (
    <div className="bg-[#F4F3F0] mx-24 p-24 gap-4 mt-32">
      <h2 id="font-main" className="text-4xl font-normal text-[#374151] text-center ">Add New Coffee</h2>

      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className="md:flex mt-6">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
            </label>
          </div>

          {/* form Available Quantity row */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* form Supplier row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">

              <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
            </label>
          </div>

          {/* form taste row */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">

              <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* form category row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">

              <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" />
            </label>
          </div>

          {/* form Details row */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">

              <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        {/* form Photo row */}
        <div className="">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">

              <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <div className="mt-4">
          <input id="font-main" type="submit" value="Add Coffee" className="w-full text-[#331A15] text-xl bg-[#D2B48C] py-2 " />
        </div>
      </form>



    </div>
  );
};

export default AddCoffee;