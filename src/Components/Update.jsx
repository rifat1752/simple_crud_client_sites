import { useLoaderData } from "react-router-dom";


const Update = () => {
    const  loaderUser = useLoaderData();
    const handleUpdate =(e)=>{
        e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const user = {name, email};
  console.log(user);
    }
    return (
        <div>
            <h3>Updata info :{loaderUser.name}</h3>
           <form onClick={handleUpdate} action="">
            <input type="text" name="name" id="" defaultValue={loaderUser?.name} /> <br />
            <input type="email" name="email"  defaultValue={loaderUser?.email}/> <br />
            <input type="submit" value="update " />
           </form>
        </div>
    );
};

export default Update;